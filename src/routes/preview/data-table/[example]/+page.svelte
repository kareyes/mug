<script lang="ts">
	import MultiSelect from "$lib/ui/data-table-examples/multi-select.svelte";
	import SingleSelect from "$lib/ui/data-table-examples/single-select.svelte";
	import NoSelection from "$lib/ui/data-table-examples/no-selection.svelte";
	import Striped from "$lib/ui/data-table-examples/striped.svelte";
	import Bordered from "$lib/ui/data-table-examples/bordered.svelte";
	import Compact from "$lib/ui/data-table-examples/compact.svelte";
	import Minimal from "$lib/ui/data-table-examples/minimal.svelte";
	import NoPagination from "$lib/ui/data-table-examples/no-pagination.svelte";
	import Expandable from "$lib/ui/data-table-examples/expandable.svelte";
	import Responsive from "$lib/ui/data-table-examples/responsive.svelte";
	import ColumnMeta from "$lib/ui/data-table-examples/column-meta.svelte";
	import { page } from "$app/state";

	let example = $derived(page.params?.example);

	const exampleMap: Record<string, any> = {
		"multi-select": MultiSelect,
		"single-select": SingleSelect,
		"no-selection": NoSelection,
		"striped": Striped,
		"bordered": Bordered,
		"compact": Compact,
		"minimal": Minimal,
		"no-pagination": NoPagination,
		"expandable": Expandable,
		"responsive": Responsive,
		"column-meta": ColumnMeta,
	};
</script>

<div class="p-6">
	{#if example && exampleMap[example]}
		{@render exampleMap[example]()}
	{/if}
</div>
