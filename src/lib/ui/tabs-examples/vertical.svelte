<script lang="ts">
	import { TabsPrimitives } from "@kareyes/aether";
	import { Home, User, Settings, Shield } from "@kareyes/aether/icons";
	const { Tabs, TabsList, TabsTrigger, TabsContent } = TabsPrimitives;
</script>

<div class="space-y-8">
	<div>
		<h3 class="text-sm font-medium text-muted-foreground mb-3">Vertical Default</h3>
		<Tabs orientation="vertical" value="general">
			<TabsList>
				<TabsTrigger value="general">General</TabsTrigger>
				<TabsTrigger value="appearance">Appearance</TabsTrigger>
				<TabsTrigger value="notifications">Notifications</TabsTrigger>
			</TabsList>
			<TabsContent value="general">
				<div class="p-4 border border-border rounded-lg">
					<h4 class="font-medium">General Settings</h4>
					<p class="text-sm text-muted-foreground mt-1">On desktop, tabs are vertical (side-by-side layout). On mobile ≤640px, they switch to horizontal with scroll.</p>
				</div>
			</TabsContent>
			<TabsContent value="appearance">
				<div class="p-4 border border-border rounded-lg">
					<h4 class="font-medium">Appearance</h4>
					<p class="text-sm text-muted-foreground mt-1">Theme and display options.</p>
				</div>
			</TabsContent>
			<TabsContent value="notifications">
				<div class="p-4 border border-border rounded-lg">
					<h4 class="font-medium">Notifications</h4>
					<p class="text-sm text-muted-foreground mt-1">Notification preferences.</p>
				</div>
			</TabsContent>
		</Tabs>
	</div>

	<div>
		<h3 class="text-sm font-medium text-muted-foreground mb-3">Vertical Pills</h3>
		<Tabs orientation="vertical" value="v1">
			<TabsList variant="pills">
				<TabsTrigger variant="pills" value="v1">
					<Home class="size-4" />
					Dashboard
				</TabsTrigger>
				<TabsTrigger variant="pills" value="v2">
					<User class="size-4" />
					Profile
				</TabsTrigger>
				<TabsTrigger variant="pills" value="v3">
					<Settings class="size-4" />
					Settings
				</TabsTrigger>
				<TabsTrigger variant="pills" value="v4">
					<Shield class="size-4" />
					Privacy
				</TabsTrigger>
			</TabsList>
			<TabsContent value="v1">
				<div class="p-4 border border-border rounded-lg">
					<h4 class="font-medium">Dashboard</h4>
					<p class="text-sm text-muted-foreground mt-1">Vertical pills variant with icons.</p>
				</div>
			</TabsContent>
			<TabsContent value="v2">
				<div class="p-4 border border-border rounded-lg">
					<h4 class="font-medium">Profile</h4>
					<p class="text-sm text-muted-foreground mt-1">Edit your profile.</p>
				</div>
			</TabsContent>
			<TabsContent value="v3">
				<div class="p-4 border border-border rounded-lg">
					<h4 class="font-medium">Settings</h4>
					<p class="text-sm text-muted-foreground mt-1">Application settings.</p>
				</div>
			</TabsContent>
			<TabsContent value="v4">
				<div class="p-4 border border-border rounded-lg">
					<h4 class="font-medium">Privacy</h4>
					<p class="text-sm text-muted-foreground mt-1">Privacy and security.</p>
				</div>
			</TabsContent>
		</Tabs>
	</div>
</div>
