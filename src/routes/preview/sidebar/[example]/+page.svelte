<script lang="ts">
	import Basic from "$lib/ui/sidebar-examples/basic.svelte";
	import HeaderFooter from "$lib/ui/sidebar-examples/header-footer.svelte";
	import NestedSubmenus from "$lib/ui/sidebar-examples/nested-submenus.svelte";
	import ActionsBadges from "$lib/ui/sidebar-examples/actions-badges.svelte";
	import SearchGroups from "$lib/ui/sidebar-examples/search-groups.svelte";
	import Floating from "$lib/ui/sidebar-examples/floating.svelte";
	import Loading from "$lib/ui/sidebar-examples/loading.svelte";
	import SizeVariants from "$lib/ui/sidebar-examples/size-variants.svelte";
	import LinkNavigation from "$lib/ui/sidebar-examples/link-navigation.svelte";
	import { page } from "$app/state";

	let example = $derived(page.params?.example);

	const exampleMap: Record<string, any> = {
		"basic": Basic,
		"header-footer": HeaderFooter,
		"nested-submenus": NestedSubmenus,
		"actions-badges": ActionsBadges,
		"search-groups": SearchGroups,
		"floating": Floating,
		"loading": Loading,
		"size-variants": SizeVariants,
		"link-navigation": LinkNavigation,
	};
</script>

{#if example && exampleMap[example]}
	{@render exampleMap[example]()}
{/if}
