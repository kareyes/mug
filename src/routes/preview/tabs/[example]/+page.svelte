<script lang="ts">
	import Default from "$lib/ui/tabs-examples/default.svelte";
	import Underline from "$lib/ui/tabs-examples/underline.svelte";
	import Pills from "$lib/ui/tabs-examples/pills.svelte";
	import Solid from "$lib/ui/tabs-examples/solid.svelte";
	import Segmented from "$lib/ui/tabs-examples/segmented.svelte";
	import SizeVariants from "$lib/ui/tabs-examples/size-variants.svelte";
	import Animation from "$lib/ui/tabs-examples/animation.svelte";
	import OverflowScroll from "$lib/ui/tabs-examples/overflow-scroll.svelte";
	import Vertical from "$lib/ui/tabs-examples/vertical.svelte";
	import DropdownMobile from "$lib/ui/tabs-examples/dropdown-mobile.svelte";
	import Disabled from "$lib/ui/tabs-examples/disabled.svelte";
	import Combinations from "$lib/ui/tabs-examples/combinations.svelte";
	import { page } from "$app/state";

	let example = $derived(page.params?.example);

	const exampleMap: Record<string, any> = {
		"default": Default,
		"underline": Underline,
		"pills": Pills,
		"solid": Solid,
		"segmented": Segmented,
		"size-variants": SizeVariants,
		"animation": Animation,
		"overflow-scroll": OverflowScroll,
		"vertical": Vertical,
		"dropdown-mobile": DropdownMobile,
		"disabled": Disabled,
		"combinations": Combinations,
	};
</script>

<div class="p-6">
	{#if example && exampleMap[example]}
		{@render exampleMap[example]()}
	{/if}
</div>
