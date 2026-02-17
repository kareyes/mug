<script lang="ts">
	import { TabsPrimitives } from "@kareyes/aether";
	import { Home, User, Settings } from "@kareyes/aether/icons";
	const { Tabs, TabsList, TabsTrigger, TabsContent } = TabsPrimitives;
</script>

<div class="space-y-8">
	<div>
		<h3 class="text-sm font-medium text-muted-foreground mb-3">Pills + Large + Slide</h3>
		<Tabs value="ch1">
			<TabsList variant="pills" size="lg">
				<TabsTrigger variant="pills" size="lg" value="ch1">
					<Home class="size-4" />
					Home
				</TabsTrigger>
				<TabsTrigger variant="pills" size="lg" value="ch2">
					<User class="size-4" />
					Profile
				</TabsTrigger>
				<TabsTrigger variant="pills" size="lg" value="ch3">
					<Settings class="size-4" />
					Settings
				</TabsTrigger>
			</TabsList>
			<TabsContent value="ch1" animation="slide" padding="lg">
				<div class="p-4 border border-border rounded-lg">
					<p class="text-sm text-muted-foreground">Large pills with slide animation</p>
				</div>
			</TabsContent>
			<TabsContent value="ch2" animation="slide" padding="lg">
				<div class="p-4 border border-border rounded-lg">
					<p class="text-sm text-muted-foreground">Smooth transitions</p>
				</div>
			</TabsContent>
			<TabsContent value="ch3" animation="slide" padding="lg">
				<div class="p-4 border border-border rounded-lg">
					<p class="text-sm text-muted-foreground">Enhanced UX</p>
				</div>
			</TabsContent>
		</Tabs>
	</div>

	<div>
		<h3 class="text-sm font-medium text-muted-foreground mb-3">Underline + Small + No Animation</h3>
		<Tabs value="cm1">
			<TabsList variant="underline" size="sm">
				<TabsTrigger variant="underline" size="sm" value="cm1">Compact 1</TabsTrigger>
				<TabsTrigger variant="underline" size="sm" value="cm2">Compact 2</TabsTrigger>
				<TabsTrigger variant="underline" size="sm" value="cm3">Compact 3</TabsTrigger>
			</TabsList>
			<TabsContent value="cm1" animation="none" padding="sm">
				<p class="text-sm text-muted-foreground">Small underline with instant switch</p>
			</TabsContent>
			<TabsContent value="cm2" animation="none" padding="sm">
				<p class="text-sm text-muted-foreground">Space-efficient layout</p>
			</TabsContent>
			<TabsContent value="cm3" animation="none" padding="sm">
				<p class="text-sm text-muted-foreground">Minimal design</p>
			</TabsContent>
		</Tabs>
	</div>

	<div>
		<h3 class="text-sm font-medium text-muted-foreground mb-3">Solid + Scale Animation</h3>
		<Tabs value="cs1">
			<TabsList variant="solid">
				<TabsTrigger variant="solid" value="cs1">Overview</TabsTrigger>
				<TabsTrigger variant="solid" value="cs2">Details</TabsTrigger>
				<TabsTrigger variant="solid" value="cs3">History</TabsTrigger>
			</TabsList>
			<TabsContent value="cs1" animation="scale">
				<div class="p-4 border border-border rounded-lg">
					<p class="text-sm text-muted-foreground">Solid variant with zoom-in effect</p>
				</div>
			</TabsContent>
			<TabsContent value="cs2" animation="scale">
				<div class="p-4 border border-border rounded-lg">
					<p class="text-sm text-muted-foreground">Content zooms in smoothly</p>
				</div>
			</TabsContent>
			<TabsContent value="cs3" animation="scale">
				<div class="p-4 border border-border rounded-lg">
					<p class="text-sm text-muted-foreground">Scale transition</p>
				</div>
			</TabsContent>
		</Tabs>
	</div>
</div>
