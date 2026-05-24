<script lang="ts">
	import { DataTable } from "@kareyes/aether-ui";
	import { data, getColumns } from "./shared";
	const columns = getColumns();
</script>

<DataTable
	{data}
	{columns}
	showFilter={false}
	showColumnToggle={false}
	pageSize={10}
/>
