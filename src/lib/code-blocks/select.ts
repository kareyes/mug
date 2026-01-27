export const basicUsageDocs = `
<script lang="ts">
	import { Select, Badge } from "@kareyes/aether";

	let basicValue = $state("");

	const fruits = [
		{ value: "apple", label: "Apple" },
		{ value: "banana", label: "Banana" },
		{ value: "orange", label: "Orange" },
		{ value: "grape", label: "Grape" },
		{ value: "strawberry", label: "Strawberry" }
	];
</script>

<Select
	bind:value={basicValue}
	options={fruits}
	placeholder="Select a fruit..."
	class="w-[200px]"
	onSelectionChange={(value) => console.log('Selected:', value)}
/>
{#if basicValue}
	<p class="text-sm text-muted-foreground mt-2">
		Selected: <Badge variant="secondary">{basicValue}</Badge>
	</p>
{/if}`;

export const multipleSelectionDocs = `
<script lang="ts">
	import { Select, Badge } from "@kareyes/aether";

	let multiValue = $state<string[]>([]);

	const frameworks = [
		{ value: "react", label: "React" },
		{ value: "vue", label: "Vue.js" },
		{ value: "svelte", label: "Svelte" },
		{ value: "angular", label: "Angular" },
		{ value: "solid", label: "SolidJS" }
	];
</script>

<Select
	bind:value={multiValue}
	options={frameworks}
	multiple={true}
	placeholder="Select frameworks..."
	class="w-[250px]"
/>
{#if multiValue.length > 0}
	<div class="flex flex-wrap gap-2 mt-2">
		{#each multiValue as item}
			<Badge variant="secondary">{item}</Badge>
		{/each}
	</div>
{/if}`;

export const groupedOptionsDocs = `
<script lang="ts">
	import { Select, Badge } from "@kareyes/aether";

	let groupedValue = $state("");

	const groupedOptions = [
		{
			label: "Frontend Frameworks",
			options: [
				{ value: "react", label: "React" },
				{ value: "vue", label: "Vue.js" },
				{ value: "svelte", label: "Svelte" },
				{ value: "angular", label: "Angular" }
			]
		},
		{
			label: "Backend Frameworks",
			options: [
				{ value: "express", label: "Express.js" },
				{ value: "fastify", label: "Fastify" },
				{ value: "koa", label: "Koa.js" },
				{ value: "nestjs", label: "NestJS" }
			]
		}
	];
</script>

<Select
	bind:value={groupedValue}
	groups={groupedOptions}
	placeholder="Select a framework..."
	class="w-[250px]"
/>
{#if groupedValue}
	<p class="text-sm text-muted-foreground mt-2">
		Selected: <Badge variant="secondary">{groupedValue}</Badge>
	</p>
{/if}`;

export const errorStatesDocs = `
<script lang="ts">
	import { Select, Field } from "@kareyes/aether";
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
	<Field
		label="Username"
		description="Choose a unique username for your account."
		required
		error={"This field is required"}
	>
		<Select
			options={fruits}
			placeholder="Select a fruit..."
			class="w-full"
			error={true}
		/>
	</Field>

	<Field
		label="Outline with Error"
		error={"Please make a selection"}
		required
	>
		<Select
			options={frameworks}
			variant="outline"
			placeholder="Select framework..."
			class="w-full"
			error={true}
		/>
	</Field>
</div>`;

export const variantsDocs = `
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
	<div>
		<span class="block text-sm font-medium mb-2">Default</span>
		<Select options={fruits} variant="default" placeholder="Default variant" class="w-full" />
	</div>

	<div>
		<span class="block text-sm font-medium mb-2">Outline</span>
		<Select options={fruits} variant="outline" placeholder="Outline variant" class="w-full" />
	</div>

	<div>
		<span class="block text-sm font-medium mb-2">Filled</span>
		<Select options={fruits} variant="filled" placeholder="Filled variant" class="w-full" />
	</div>

	<div>
		<span class="block text-sm font-medium mb-2">Ghost</span>
		<Select options={fruits} variant="ghost" placeholder="Ghost variant" class="w-full" />
	</div>

	<div>
		<span class="block text-sm font-medium mb-2">Underline</span>
		<Select options={fruits} variant="underline" placeholder="Underline variant" class="w-full" />
	</div>
</div>`;

export const sizesDocs = `
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
	<div>
		<span class="block text-sm font-medium mb-2">Small</span>
		<Select options={fruits} size="sm" placeholder="Small size" class="w-full" />
	</div>

	<div>
		<span class="block text-sm font-medium mb-2">Default</span>
		<Select options={fruits} size="default" placeholder="Default size" class="w-full" />
	</div>

	<div>
		<span class="block text-sm font-medium mb-2">Large</span>
		<Select options={fruits} size="lg" placeholder="Large size" class="w-full" />
	</div>
</div>`;

export const statesDocs = `
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
	<div>
		<span class="block text-sm font-medium mb-2">Normal</span>
		<Select options={fruits} placeholder="Normal state" class="w-full" />
	</div>

	<div>
		<span class="block text-sm font-medium mb-2 text-muted-foreground">Disabled</span>
		<Select options={fruits} disabled={true} placeholder="Disabled state" class="w-full" />
	</div>
</div>`;

export const disabledOptionsDocs = `
<Select
	options={[
		{ value: "apple", label: "Apple" },
		{ value: "banana", label: "Banana", disabled: true },
		{ value: "orange", label: "Orange" },
		{ value: "grape", label: "Grape", disabled: true },
		{ value: "strawberry", label: "Strawberry" }
	]}
	placeholder="Try to select..."
	class="w-[200px]"
/>`;
