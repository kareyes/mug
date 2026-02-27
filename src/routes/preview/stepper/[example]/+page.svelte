<script lang="ts">
	import Orientations from "$lib/ui/stepper-examples/orientations.svelte";
	import SizesVariants from "$lib/ui/stepper-examples/sizes-variants.svelte";
	import Interactive from "$lib/ui/stepper-examples/interactive.svelte";
	import StepStates from "$lib/ui/stepper-examples/step-states.svelte";
	import Circular from "$lib/ui/stepper-examples/circular.svelte";
	import Practical from "$lib/ui/stepper-examples/practical.svelte";
	import CustomContent from "$lib/ui/stepper-examples/custom-content.svelte";
	import { page } from "$app/state";

	let example = $derived(page.params?.example);

	const exampleMap: Record<string, any> = {
		"orientations": Orientations,
		"sizes-variants": SizesVariants,
		"interactive": Interactive,
		"step-states": StepStates,
		"circular": Circular,
		"practical": Practical,
		"custom-content": CustomContent,
	};
</script>

<div class="p-6">
	{#if example && exampleMap[example]}
		{@render exampleMap[example]()}
	{/if}
</div>
