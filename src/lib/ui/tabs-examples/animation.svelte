<script lang="ts">
	import { Card, TabsPrimitives } from "@kareyes/aether";
	const { Tabs, TabsList, TabsTrigger, TabsContent } = TabsPrimitives;
</script>

<!-- Slide Animation -->
<Card class="p-6">
	<h3 class="text-sm font-medium mb-4">Slide Animation</h3>
	<Tabs value="slide1">
		<TabsList variant="pills">
			<TabsTrigger variant="pills" value="slide1">Slide 1</TabsTrigger>
			<TabsTrigger variant="pills" value="slide2">Slide 2</TabsTrigger>
			<TabsTrigger variant="pills" value="slide3">Slide 3</TabsTrigger>
		</TabsList>
		<TabsContent value="slide1" animation="slide">
			<div class="rounded-lg border border-border p-4">
				<p class="text-sm">Content slides in from bottom</p>
			</div>
		</TabsContent>
		<TabsContent value="slide2" animation="slide">
			<div class="rounded-lg border border-border p-4">
				<p class="text-sm">Smooth slide transition effect</p>
			</div>
		</TabsContent>
		<TabsContent value="slide3" animation="slide">
			<div class="rounded-lg border border-border p-4">
				<p class="text-sm">Enhanced visual feedback</p>
			</div>
		</TabsContent>
	</Tabs>
</Card>

<!-- Scale Animation -->
<Card class="p-6 mt-6">
	<h3 class="text-sm font-medium mb-4">Scale Animation</h3>
	<Tabs value="scale1">
		<TabsList variant="solid">
			<TabsTrigger variant="solid" value="scale1">Scale 1</TabsTrigger>
			<TabsTrigger variant="solid" value="scale2">Scale 2</TabsTrigger>
			<TabsTrigger variant="solid" value="scale3">Scale 3</TabsTrigger>
		</TabsList>
		<TabsContent value="scale1" animation="scale">
			<div class="rounded-lg border border-border p-4">
				<p class="text-sm">Content zooms in on appear</p>
			</div>
		</TabsContent>
		<TabsContent value="scale2" animation="scale">
			<div class="rounded-lg border border-border p-4">
				<p class="text-sm">Zoom transition effect</p>
			</div>
		</TabsContent>
		<TabsContent value="scale3" animation="scale">
			<div class="rounded-lg border border-border p-4">
				<p class="text-sm">Subtle scale animation</p>
			</div>
		</TabsContent>
	</Tabs>
</Card>
