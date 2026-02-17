<script lang="ts">
	import { TabsPrimitives } from "@kareyes/aether";
	import { Home, User, Settings } from "@kareyes/aether/icons";
	const { Tabs, TabsList, TabsTrigger, TabsContent } = TabsPrimitives;
</script>

<Tabs value="home">
	<TabsList variant="pills">
		<TabsTrigger variant="pills" value="home">
			<Home class="size-4" />
			Home
		</TabsTrigger>
		<TabsTrigger variant="pills" value="profile">
			<User class="size-4" />
			Profile
		</TabsTrigger>
		<TabsTrigger variant="pills" value="settings">
			<Settings class="size-4" />
			Settings
		</TabsTrigger>
	</TabsList>
	<TabsContent value="home">
		<div class="space-y-4">
			<h3 class="text-lg font-medium">Home Page</h3>
			<p class="text-sm text-muted-foreground">Welcome to your home page with personalized content.</p>
		</div>
	</TabsContent>
	<TabsContent value="profile">
		<div class="space-y-4">
			<h3 class="text-lg font-medium">User Profile</h3>
			<p class="text-sm text-muted-foreground">View and edit your profile information.</p>
		</div>
	</TabsContent>
	<TabsContent value="settings">
		<div class="space-y-4">
			<h3 class="text-lg font-medium">User Settings</h3>
			<p class="text-sm text-muted-foreground">Customize your experience with various settings.</p>
		</div>
	</TabsContent>
</Tabs>
