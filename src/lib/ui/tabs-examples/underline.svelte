<script lang="ts">
	import { TabsPrimitives } from "@kareyes/aether";
	const { Tabs, TabsList, TabsTrigger, TabsContent } = TabsPrimitives;
</script>

<Tabs value="overview">
	<TabsList variant="underline">
		<TabsTrigger variant="underline" value="overview">Overview</TabsTrigger>
		<TabsTrigger variant="underline" value="analytics">Analytics</TabsTrigger>
		<TabsTrigger variant="underline" value="reports">Reports</TabsTrigger>
		<TabsTrigger variant="underline" value="notifications">Notifications</TabsTrigger>
	</TabsList>
	<TabsContent value="overview">
		<div class="space-y-4">
			<h3 class="text-lg font-medium">Overview Dashboard</h3>
			<p class="text-sm text-muted-foreground">Your main dashboard overview with key metrics and insights.</p>
		</div>
	</TabsContent>
	<TabsContent value="analytics">
		<div class="space-y-4">
			<h3 class="text-lg font-medium">Analytics</h3>
			<p class="text-sm text-muted-foreground">Detailed analytics and performance metrics.</p>
		</div>
	</TabsContent>
	<TabsContent value="reports">
		<div class="space-y-4">
			<h3 class="text-lg font-medium">Reports</h3>
			<p class="text-sm text-muted-foreground">Generate and view comprehensive reports.</p>
		</div>
	</TabsContent>
	<TabsContent value="notifications">
		<div class="space-y-4">
			<h3 class="text-lg font-medium">Notifications</h3>
			<p class="text-sm text-muted-foreground">Manage your notification preferences.</p>
		</div>
	</TabsContent>
</Tabs>
