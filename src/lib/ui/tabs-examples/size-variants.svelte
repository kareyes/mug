<script lang="ts">
	import { Card, TabsPrimitives } from "@kareyes/aether";
	const { Tabs, TabsList, TabsTrigger, TabsContent } = TabsPrimitives;
</script>

<!-- Small Size -->
<Card class="p-6">
	<h3 class="text-sm font-medium mb-4">Small Size</h3>
	<Tabs value="tab1">
		<TabsList size="sm">
			<TabsTrigger size="sm" value="tab1">Small Tab 1</TabsTrigger>
			<TabsTrigger size="sm" value="tab2">Small Tab 2</TabsTrigger>
			<TabsTrigger size="sm" value="tab3">Small Tab 3</TabsTrigger>
		</TabsList>
		<TabsContent value="tab1" padding="sm">
			<p class="text-sm text-muted-foreground">Small size content area</p>
		</TabsContent>
		<TabsContent value="tab2" padding="sm">
			<p class="text-sm text-muted-foreground">Compact for dense UIs</p>
		</TabsContent>
		<TabsContent value="tab3" padding="sm">
			<p class="text-sm text-muted-foreground">Minimal spacing</p>
		</TabsContent>
	</Tabs>
</Card>

<!-- Large Size -->
<Card class="p-6 mt-6">
	<h3 class="text-sm font-medium mb-4">Large Size</h3>
	<Tabs value="tab1">
		<TabsList size="lg">
			<TabsTrigger size="lg" value="tab1">Large Tab 1</TabsTrigger>
			<TabsTrigger size="lg" value="tab2">Large Tab 2</TabsTrigger>
			<TabsTrigger size="lg" value="tab3">Large Tab 3</TabsTrigger>
		</TabsList>
		<TabsContent value="tab1" padding="lg">
			<p class="text-sm text-muted-foreground">Large size for better touch targets</p>
		</TabsContent>
		<TabsContent value="tab2" padding="lg">
			<p class="text-sm text-muted-foreground">More prominent appearance</p>
		</TabsContent>
		<TabsContent value="tab3" padding="lg">
			<p class="text-sm text-muted-foreground">Enhanced spacing</p>
		</TabsContent>
	</Tabs>
</Card>
