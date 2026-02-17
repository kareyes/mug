<script lang="ts">
	import { DataTable } from "@kareyes/aether";
	import { data, getColumns } from "./shared";
	const columns = getColumns();
</script>

<DataTable
	{data}
	{columns}
	variant="compact"
	filterColumn="email"
	filterPlaceholder="Filter emails..."
	pageSize={8}
/>
