<script lang="ts">
	import { onMount } from "svelte";
	import { basicAsyncDocs, concurrentLoadDocs, cascadingLoadDocs } from "$lib/code-blocks/form-schema-async";
	import { Card, CodeBlock, Skeleton } from "@kareyes/aether";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";
	import { Schema, pipe } from "effect";
	import PreviewContainer from "../../components/preview-container.svelte";

	type Option = { value: string; label: string };

	// ── 1. Basic Async Options ───────────────────────────────────────────────────
	// The schema factory receives loaded options as an argument.
	// Call it after the fetch completes, then pass the result to FormController.
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
					withField({
						label: "Nickname",
						placeholder: "Optional nickname",
						colSpan: 6,
						description: "Optional"
					})
				),
				level: pipe(
					Schema.Number,
					Schema.filter((n) => n >= 1 && n <= 100, {
						message: () => "Level must be between 1 and 100"
					}),
					withField({
						label: "Level",
						inputType: "number",
						colSpan: 6,
						description: "1–100"
					})
				)
			}),
			withFormLayout({
				columns: 12,
				sections: [{ id: "main", title: "Pokémon Picker" }]
			})
		);
	}

	let pickerController = $state<FormController | null>(null);
	let pickerLoading = $state(true);
	let pickerError = $state<string | null>(null);

	onMount(async () => {
		try {
			const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
			const data = await res.json();

			const options: Option[] = data.results.map((p: { name: string }) => ({
				value: p.name,
				label: p.name.charAt(0).toUpperCase() + p.name.slice(1)
			}));

			const schema = createPickerSchema(options);
			pickerController = new FormController(schema, {
				validateOnBlur: true,
				initialValues: { level: 5 }
			});
		} catch {
			pickerError = "Failed to load Pokémon. Check your connection and refresh.";
		} finally {
			pickerLoading = false;
		}
	});

	// ── 2. Concurrent Loads ──────────────────────────────────────────────────────
	// Fetch multiple endpoints simultaneously with Promise.all.
	// The schema factory accepts all loaded datasets as arguments.
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
					withField({
						label: "Preferred Type",
						inputType: "select",
						options: typeOpts,
						colSpan: 4
					})
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

	let teamController = $state<FormController | null>(null);
	let teamLoading = $state(true);
	let teamError = $state<string | null>(null);

	onMount(async () => {
		try {
			// Both fetches run in parallel — total time is max(t1, t2), not t1+t2
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
			teamController = new FormController(schema, { validateOnBlur: true });
		} catch {
			teamError = "Failed to load team builder data.";
		} finally {
			teamLoading = false;
		}
	});

	// ── 3. Cascading / Dependent Loads ───────────────────────────────────────────
	// The generation picker lives OUTSIDE SchemaForm — it controls what data loads.
	// When the selection changes, a new fetch runs and a new FormController is built.
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
						description: `${pokemonOpts.length} Pokémon available in this generation`
					})
				),
				moveStrategy: pipe(
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
				),
				notes: pipe(
					Schema.String,
					withField({
						label: "Battle Notes",
						inputType: "textarea",
						placeholder: "Any strategy notes for this Pokémon...",
						description: "Optional"
					})
				)
			}),
			withFormLayout({
				columns: 1,
				sections: [{ id: "main", title: "Battle Configuration" }]
			})
		);
	}

	let generationOptions = $state<Option[]>([]);
	let selectedGeneration = $state("");
	let battleController = $state<FormController | null>(null);
	let genLoading = $state(false);
	let genPokemonCount = $state(0);

	onMount(async () => {
		try {
			const data = await fetch("https://pokeapi.co/api/v2/generation").then((r) => r.json());
			const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
			generationOptions = data.results.map((g: { name: string }, i: number) => ({
				value: g.name,
				label: `Generation ${romanNumerals[i] ?? i + 1}`
			}));
		} catch {
			// silently fail — generation list is non-critical for initial load
		}
	});

	async function handleGenerationChange(genName: string) {
		if (!genName) {
			battleController = null;
			genPokemonCount = 0;
			return;
		}

		genLoading = true;
		battleController = null;

		try {
			const data = await fetch(`https://pokeapi.co/api/v2/generation/${genName}`).then((r) =>
				r.json()
			);

			const pokemonOpts: Option[] = data.pokemon_species
				.slice(0, 30)
				.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name))
				.map((p: { name: string }) => ({
					value: p.name,
					label: p.name.charAt(0).toUpperCase() + p.name.slice(1)
				}));

			genPokemonCount = pokemonOpts.length;
			battleController = new FormController(createBattleSchema(pokemonOpts), {
				validateOnBlur: true
			});
		} catch {
			// fail silently in demo
		} finally {
			genLoading = false;
		}
	}
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<div class="space-y-12">
		<!-- 1. Basic Async Options -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">Basic Async Options</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Use a <strong>schema factory function</strong> that accepts loaded data as arguments. Keep
				<code>controller = $state(null)</code> and only instantiate it after the fetch resolves.
				Wrap the form in <code>{`{#if controller}`}</code> and show a skeleton or spinner while
				loading.
			</p>
			<PreviewContainer>
				<div class="max-w-md">
					{#if pickerLoading}
						<div class="space-y-3">
							<Skeleton class="h-9 w-full" />
							<div class="grid grid-cols-2 gap-3">
								<Skeleton class="h-9" />
								<Skeleton class="h-9" />
							</div>
							<Skeleton class="h-9 w-28" />
						</div>
					{:else if pickerError}
						<p class="text-destructive text-sm">{pickerError}</p>
					{:else if pickerController}
						<SchemaForm
							controller={pickerController}
							onSubmit={(d) => console.log("Picked:", d)}
							submitText="Add to Team"
						/>
					{/if}
				</div>
			</PreviewContainer>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={basicAsyncDocs}
			/>
		</Card>

		<!-- 2. Concurrent Loads -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">Concurrent Loads with Promise.all</h2>
			<p class="text-sm text-muted-foreground mb-4">
				When a form needs data from multiple endpoints, use <code>Promise.all</code> to run all
				fetches in parallel. Total load time equals the slowest request, not the sum of all. Pass
				all loaded datasets into a single schema factory.
			</p>
			<PreviewContainer>
				{#if teamLoading}
					<div class="space-y-4">
						<div class="grid grid-cols-4 gap-3">
							{#each { length: 4 } as _}
								<Skeleton class="h-9" />
							{/each}
						</div>
						<div class="grid grid-cols-2 gap-3">
							{#each { length: 4 } as _}
								<Skeleton class="h-9" />
							{/each}
						</div>
						<Skeleton class="h-9 w-28" />
					</div>
				{:else if teamError}
					<p class="text-destructive text-sm">{teamError}</p>
				{:else if teamController}
					<SchemaForm
						controller={teamController}
						onSubmit={(d) => console.log("Team:", d)}
						submitText="Save Team"
					/>
				{/if}
			</PreviewContainer>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={concurrentLoadDocs}
			/>
		</Card>

		<!-- 3. Cascading Dependent Loads -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">Cascading / Dependent Loads</h2>
			<p class="text-sm text-muted-foreground mb-4">
				When one selection drives what data loads next, keep the "trigger" picker
				<em>outside</em> the <code>SchemaForm</code>. Use a plain Svelte reactive variable to hold
				the selection, then call an async function on change to fetch new data and rebuild the
				controller. The inner form re-renders with the new options.
			</p>
			<PreviewContainer>
				<div class="max-w-md space-y-4">
					<!-- Generation picker — outside SchemaForm, drives the cascade -->
					<div>
						<label class="block text-sm font-medium mb-1.5">Generation</label>
						<select
							class="w-full border border-input rounded-md px-3 py-2 text-sm bg-background"
							bind:value={selectedGeneration}
							onchange={() => handleGenerationChange(selectedGeneration)}
						>
							<option value="">Select a generation...</option>
							{#each generationOptions as opt}
								<option value={opt.value}>{opt.label}</option>
							{/each}
						</select>
						{#if selectedGeneration && !genLoading && genPokemonCount > 0}
							<p class="text-xs text-muted-foreground mt-1">
								{genPokemonCount} Pokémon loaded for this generation
							</p>
						{/if}
					</div>

					{#if genLoading}
						<div class="space-y-3">
							<Skeleton class="h-9 w-full" />
							<Skeleton class="h-9 w-full" />
							<Skeleton class="h-24 w-full" />
							<Skeleton class="h-9 w-32" />
						</div>
					{:else if battleController}
						<SchemaForm
							controller={battleController}
							onSubmit={(d) => console.log("Battle config:", d)}
							submitText="Ready for Battle!"
						/>
					{:else if !selectedGeneration}
						<p class="text-sm text-muted-foreground text-center py-6 border border-dashed rounded-lg">
							Select a generation above to load its Pokémon
						</p>
					{/if}
				</div>
			</PreviewContainer>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={cascadingLoadDocs}
			/>
		</Card>
	</div>
</div>
