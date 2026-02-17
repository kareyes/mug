<script lang="ts">
	import { TabsPrimitives } from "@kareyes/aether";
	const { Tabs, TabsList, TabsTrigger, TabsContent } = TabsPrimitives;
</script>

<Tabs value="enabled">
	<TabsList>
		<TabsTrigger value="enabled">Enabled</TabsTrigger>
		<TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
		<TabsTrigger value="another">Another Tab</TabsTrigger>
	</TabsList>
	<TabsContent value="enabled">
		<div class="p-4 border border-border rounded-lg">
			<p class="text-sm text-muted-foreground">This tab is active. The "Disabled" tab cannot be selected.</p>
		</div>
	</TabsContent>
	<TabsContent value="disabled">
		<div class="p-4 border border-border rounded-lg">
			<p class="text-sm text-muted-foreground">This content is not reachable.</p>
		</div>
	</TabsContent>
	<TabsContent value="another">
		<div class="p-4 border border-border rounded-lg">
			<p class="text-sm text-muted-foreground">Another enabled tab.</p>
		</div>
	</TabsContent>
</Tabs>
