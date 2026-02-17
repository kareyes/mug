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
	pageSizeOptions={[5, 10, 20, 50]}
	selectionMode="multi"
	onPageChange={(page, action) => console.log(`Page changed to: ${page}, action: ${action}`)}
	onPageSizeChange={(size) => console.log("Page size changed to:", size)}
	onRowSelectionChange={(selected) => console.log("Selected rows:", selected)}
/>
