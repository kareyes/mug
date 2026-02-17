<script lang="ts">
	import { TabsPrimitives } from "@kareyes/aether";
	const { Tabs, TabsList, TabsTrigger, TabsContent } = TabsPrimitives;
</script>

<Tabs value="daily">
	<TabsList variant="segmented">
		<TabsTrigger variant="segmented" value="daily">Daily</TabsTrigger>
		<TabsTrigger variant="segmented" value="weekly">Weekly</TabsTrigger>
		<TabsTrigger variant="segmented" value="monthly">Monthly</TabsTrigger>
		<TabsTrigger variant="segmented" value="yearly">Yearly</TabsTrigger>
	</TabsList>
	<TabsContent value="daily">
		<div class="space-y-4">
			<h3 class="text-lg font-medium">Daily Statistics</h3>
			<p class="text-sm text-muted-foreground">View your daily performance metrics and statistics.</p>
		</div>
	</TabsContent>
	<TabsContent value="weekly">
		<div class="space-y-4">
			<h3 class="text-lg font-medium">Weekly Overview</h3>
			<p class="text-sm text-muted-foreground">Weekly aggregated data and trends.</p>
		</div>
	</TabsContent>
	<TabsContent value="monthly">
		<div class="space-y-4">
			<h3 class="text-lg font-medium">Monthly Report</h3>
			<p class="text-sm text-muted-foreground">Comprehensive monthly performance report.</p>
		</div>
	</TabsContent>
	<TabsContent value="yearly">
		<div class="space-y-4">
			<h3 class="text-lg font-medium">Annual Summary</h3>
			<p class="text-sm text-muted-foreground">Year-end summary and achievements.</p>
		</div>
	</TabsContent>
</Tabs>
