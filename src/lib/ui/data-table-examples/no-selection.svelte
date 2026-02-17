<script lang="ts">
	import { DataTable } from "@kareyes/aether";
	import { data, getColumns } from "./shared";
	const columns = getColumns().filter((col) => col.id !== "select");
</script>

<DataTable
	{data}
	{columns}
	filterColumn="email"
	filterPlaceholder="Filter emails..."
	pageSize={5}
	selectionMode="none"
/>
