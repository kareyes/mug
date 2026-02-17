<script lang="ts">
	import { DataTable, DataTablePrimitives, Button } from "@kareyes/aether";
	import { paymentData2, getResponsiveColumns } from "./shared";

	const responsiveColumns = getResponsiveColumns();
	let selectedMode: DataTablePrimitives.ResponsiveMode = $state("scroll");
</script>

<div class="flex flex-wrap gap-2 mb-6">
	<Button variant={selectedMode === "scroll" ? "default" : "outline"} size="sm" onclick={() => (selectedMode = "scroll")}>
		Scroll (Default)
	</Button>
	<Button variant={selectedMode === "card" ? "default" : "outline"} size="sm" onclick={() => (selectedMode = "card")}>
		Card Mode
	</Button>
	<Button variant={selectedMode === "auto" ? "default" : "outline"} size="sm" onclick={() => (selectedMode = "auto")}>
		Auto
	</Button>
</div>

<div class="rounded-lg border p-4 bg-muted/30 mb-4">
	<p class="text-sm">
		<strong>Current Mode:</strong>
		<code class="bg-background px-2 py-1 rounded">{selectedMode}</code>
	</p>
	<p class="text-xs text-muted-foreground mt-1">
		{selectedMode === "auto"
			? "Automatically switches to cards on mobile (<768px), table on desktop."
			: selectedMode === "card"
				? "Always displays as cards regardless of screen size."
				: "Keeps table layout with horizontal scrolling on all screen sizes."}
	</p>
</div>

<DataTable
	data={paymentData2}
	columns={responsiveColumns}
	responsiveMode={selectedMode}
	filterColumn="email"
	filterPlaceholder="Filter by email..."
	pageSize={5}
	variant="default"
	selectionMode="multi"
/>
