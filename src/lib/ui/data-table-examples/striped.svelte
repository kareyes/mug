<script lang="ts">
	import { DataTable } from "@kareyes/aether";
	import { data, getColumns } from "./shared";
	const columns = getColumns();
</script>

<DataTable
	{data}
	{columns}
	variant="striped"
	filterColumn="email"
	filterPlaceholder="Filter emails..."
	pageSize={5}
/>
