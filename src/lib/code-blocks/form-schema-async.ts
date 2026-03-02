export const basicAsyncDocs = `
<script lang="ts">
	import { onMount } from "svelte";
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	type Option = { value: string; label: string };

	// Schema factory — takes the loaded options as an argument.
	// Call this AFTER the data is ready, then pass the result to FormController.
	function createPickerSchema(pokemonOptions: Option[]) {
		return pipe(
			Schema.Struct({
				pokemon: pipe(
					Schema.String,
					Schema.minLength(1),
					Schema.annotations({ message: () => "Please select a Pokémon" }),
					withField({
						label: "Select a Pokémon",
						inputType: "select",
						options: pokemonOptions
					})
				),
				nickname: pipe(
					Schema.String,
					withField({ label: "Nickname", placeholder: "Optional nickname", colSpan: 6 })
				),
				level: pipe(
					Schema.Number,
					Schema.filter((n) => n >= 1 && n <= 100, {
						message: () => "Level must be between 1 and 100"
					}),
					withField({ label: "Level", inputType: "number", colSpan: 6, description: "1–100" })
				)
			}),
			withFormLayout({
				columns: 12,
				sections: [{ id: "main", title: "Pokémon Picker" }]
			})
		);
	}

	// Start null — rendered only after data loads
	let controller = $state<FormController | null>(null);
	let isLoading = $state(true);
	let loadError = $state<string | null>(null);

	onMount(async () => {
		try {
			const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
			const data = await res.json();

			const options: Option[] = data.results.map((p: { name: string }) => ({
				value: p.name,
				label: p.name.charAt(0).toUpperCase() + p.name.slice(1)
			}));

			// Create schema and controller once options are ready
			const schema = createPickerSchema(options);
			controller = new FormController(schema, {
				validateOnBlur: true,
				initialValues: { level: 5 }
			});
		} catch {
			loadError = "Failed to load Pokémon data. Please try again.";
		} finally {
			isLoading = false;
		}
	});
</script>

{#if isLoading}
	<div class="flex items-center gap-2 text-muted-foreground py-8">
		<span class="animate-spin">⟳</span> Loading Pokémon from PokéAPI...
	</div>
{:else if loadError}
	<p class="text-destructive">{loadError}</p>
{:else if controller}
	<SchemaForm
		{controller}
		onSubmit={(d) => console.log("Picked:", d)}
		submitText="Add to Team"
	/>
{/if}`;

export const concurrentLoadDocs = `
<script lang="ts">
	import { onMount } from "svelte";
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	type Option = { value: string; label: string };

	// Schema factory takes multiple option arrays from concurrent fetches
	function createTeamSchema(pokemonOpts: Option[], typeOpts: Option[]) {
		return pipe(
			Schema.Struct({
				teamName: pipe(
					Schema.String,
					Schema.minLength(1),
					Schema.annotations({ message: () => "Team name is required" }),
					withField({ label: "Team Name", placeholder: "e.g. Fire Squad", colSpan: 8 })
				),
				preferredType: pipe(
					Schema.String,
					withField({ label: "Preferred Type", inputType: "select", options: typeOpts, colSpan: 4 })
				),
				slot1: pipe(
					Schema.String,
					withField({ label: "Slot 1", inputType: "select", options: pokemonOpts, colSpan: 6 })
				),
				slot2: pipe(
					Schema.String,
					withField({ label: "Slot 2", inputType: "select", options: pokemonOpts, colSpan: 6 })
				),
				slot3: pipe(
					Schema.String,
					withField({ label: "Slot 3", inputType: "select", options: pokemonOpts, colSpan: 6 })
				),
				slot4: pipe(
					Schema.String,
					withField({ label: "Slot 4", inputType: "select", options: pokemonOpts, colSpan: 6 })
				)
			}),
			withFormLayout({
				columns: 12,
				sections: [{ id: "main", title: "Pokémon Team Builder" }]
			})
		);
	}

	let controller = $state<FormController | null>(null);
	let isLoading = $state(true);

	onMount(async () => {
		// Fetch both endpoints concurrently with Promise.all
		const [pokemonData, typeData] = await Promise.all([
			fetch("https://pokeapi.co/api/v2/pokemon?limit=20").then((r) => r.json()),
			fetch("https://pokeapi.co/api/v2/type?limit=20").then((r) => r.json())
		]);

		const pokemonOpts: Option[] = pokemonData.results.map((p: { name: string }) => ({
			value: p.name,
			label: p.name.charAt(0).toUpperCase() + p.name.slice(1)
		}));

		const typeOpts: Option[] = typeData.results
			.filter((t: { name: string }) => !["unknown", "shadow"].includes(t.name))
			.map((t: { name: string }) => ({
				value: t.name,
				label: t.name.charAt(0).toUpperCase() + t.name.slice(1)
			}));

		const schema = createTeamSchema(pokemonOpts, typeOpts);
		controller = new FormController(schema, { validateOnBlur: true });
		isLoading = false;
	});
</script>

{#if isLoading}
	<p class="text-muted-foreground py-4">Loading Pokémon and types...</p>
{:else if controller}
	<SchemaForm {controller} onSubmit={(d) => console.log("Team:", d)} submitText="Save Team" />
{/if}`;

export const cascadingLoadDocs = `
<script lang="ts">
	import { onMount } from "svelte";
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	type Option = { value: string; label: string };

	function createBattleSchema(pokemonOpts: Option[]) {
		return pipe(
			Schema.Struct({
				pokemon: pipe(
					Schema.String,
					Schema.minLength(1),
					Schema.annotations({ message: () => "Select a Pokémon from this generation" }),
					withField({
						label: "Pokémon",
						inputType: "select",
						options: pokemonOpts,
						description: \`\${pokemonOpts.length} Pokémon available\`
					})
				),
				moveSet: pipe(
					Schema.String,
					withField({
						label: "Move Strategy",
						inputType: "radio",
						options: [
							{ value: "balanced", label: "Balanced" },
							{ value: "offensive", label: "Offensive" },
							{ value: "defensive", label: "Defensive" }
						]
					})
				)
			}),
			withFormLayout({ columns: 1, sections: [{ id: "main", title: "Battle Config" }] })
		);
	}

	// Generation selector lives outside the form — it controls what data loads
	let generationOptions = $state<Option[]>([]);
	let selectedGeneration = $state("");

	// This controller is recreated each time a new generation is selected
	let battleController = $state<FormController | null>(null);
	let genLoading = $state(false);

	// Load the generation list on mount
	onMount(async () => {
		const data = await fetch("https://pokeapi.co/api/v2/generation").then((r) => r.json());
		const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
		generationOptions = data.results.map((g: { name: string }, i: number) => ({
			value: g.name,
			label: \`Generation \${romanNumerals[i] ?? i + 1}\`
		}));
	});

	// When generation changes → fetch its Pokémon → build new controller
	async function handleGenerationChange(genName: string) {
		if (!genName) { battleController = null; return; }

		genLoading = true;
		battleController = null;

		const data = await fetch(\`https://pokeapi.co/api/v2/generation/\${genName}\`).then((r) => r.json());

		const pokemonOpts: Option[] = data.pokemon_species
			.slice(0, 30)
			.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name))
			.map((p: { name: string }) => ({
				value: p.name,
				label: p.name.charAt(0).toUpperCase() + p.name.slice(1)
			}));

		battleController = new FormController(createBattleSchema(pokemonOpts), {
			validateOnBlur: true
		});
		genLoading = false;
	}
</script>

<!-- Generation picker sits outside the SchemaForm — it drives which data loads -->
<div class="mb-4">
	<label class="block text-sm font-medium mb-1">Generation</label>
	<select
		class="w-full border rounded px-3 py-2 text-sm"
		bind:value={selectedGeneration}
		onchange={() => handleGenerationChange(selectedGeneration)}
	>
		<option value="">Select a generation...</option>
		{#each generationOptions as opt}
			<option value={opt.value}>{opt.label}</option>
		{/each}
	</select>
</div>

{#if genLoading}
	<p class="text-muted-foreground text-sm py-4">Loading Pokémon for this generation...</p>
{:else if battleController}
	<SchemaForm
		{controller: battleController}
		onSubmit={(d) => console.log("Battle config:", d)}
		submitText="Ready for Battle!"
	/>
{:else if selectedGeneration}
	<p class="text-muted-foreground text-sm">No data loaded yet.</p>
{/if}`;
