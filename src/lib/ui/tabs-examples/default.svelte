<script lang="ts">
	import { TabsPrimitives } from "@kareyes/aether";
	const { Tabs, TabsList, TabsTrigger, TabsContent } = TabsPrimitives;
</script>

<Tabs value="account">
	<TabsList>
		<TabsTrigger value="account">Account</TabsTrigger>
		<TabsTrigger value="password">Password</TabsTrigger>
		<TabsTrigger value="settings">Settings</TabsTrigger>
	</TabsList>
	<TabsContent value="account">
		<div class="space-y-4">
			<h3 class="text-lg font-medium">Account Information</h3>
			<p class="text-sm text-muted-foreground">View and manage your account details here.</p>
		</div>
	</TabsContent>
	<TabsContent value="password">
		<div class="space-y-4">
			<h3 class="text-lg font-medium">Password Settings</h3>
			<p class="text-sm text-muted-foreground">Change your password and security preferences.</p>
		</div>
	</TabsContent>
	<TabsContent value="settings">
		<div class="space-y-4">
			<h3 class="text-lg font-medium">Application Settings</h3>
			<p class="text-sm text-muted-foreground">Configure your application preferences and options.</p>
		</div>
	</TabsContent>
</Tabs>
