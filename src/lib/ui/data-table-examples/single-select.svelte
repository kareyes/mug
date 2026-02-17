<script lang="ts">
	import { DataTable } from "@kareyes/aether";
	import { data, getColumns } from "./shared";
	const columns = getColumns();
</script>

<DataTable
	{data}
	{columns}
	filterColumn="email"
	filterPlaceholder="Filter emails..."
	pageSize={5}
	selectionMode="single"
	onRowSelectionChange={(selected) => console.log("Selected row:", selected)}
/>
