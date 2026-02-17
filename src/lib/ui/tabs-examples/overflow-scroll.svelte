<script lang="ts">
	import { TabsPrimitives } from "@kareyes/aether";
	import { Home, BarChart3, Settings, CreditCard, Users, Puzzle, Shield, User } from "@kareyes/aether/icons";
	const { Tabs, TabsList, TabsTrigger, TabsContent } = TabsPrimitives;
</script>

<div class="space-y-8">
	<div>
		<h3 class="text-sm font-medium text-muted-foreground mb-3">Underline — 8 tabs</h3>
		<Tabs value="dash">
			<TabsList variant="underline">
				<TabsTrigger variant="underline" value="dash">
					<Home class="size-4" />
					Dashboard
				</TabsTrigger>
				<TabsTrigger variant="underline" value="analytics">
					<BarChart3 class="size-4" />
					Analytics
				</TabsTrigger>
				<TabsTrigger variant="underline" value="reports">Reports</TabsTrigger>
				<TabsTrigger variant="underline" value="settings">
					<Settings class="size-4" />
					Settings
				</TabsTrigger>
				<TabsTrigger variant="underline" value="billing">
					<CreditCard class="size-4" />
					Billing
				</TabsTrigger>
				<TabsTrigger variant="underline" value="team">
					<Users class="size-4" />
					Team
				</TabsTrigger>
				<TabsTrigger variant="underline" value="integrations">
					<Puzzle class="size-4" />
					Integrations
				</TabsTrigger>
				<TabsTrigger variant="underline" value="security">
					<Shield class="size-4" />
					Security
				</TabsTrigger>
			</TabsList>
			<TabsContent value="dash">
				<div class="p-4 border border-border rounded-lg">
					<h4 class="font-medium">Dashboard</h4>
					<p class="text-sm text-muted-foreground mt-1">Resize the browser to see horizontal scroll on mobile.</p>
				</div>
			</TabsContent>
			<TabsContent value="analytics">
				<div class="p-4 border border-border rounded-lg">
					<h4 class="font-medium">Analytics</h4>
					<p class="text-sm text-muted-foreground mt-1">Detailed analytics data.</p>
				</div>
			</TabsContent>
			<TabsContent value="reports">
				<div class="p-4 border border-border rounded-lg">
					<h4 class="font-medium">Reports</h4>
					<p class="text-sm text-muted-foreground mt-1">View generated reports.</p>
				</div>
			</TabsContent>
			<TabsContent value="settings">
				<div class="p-4 border border-border rounded-lg">
					<h4 class="font-medium">Settings</h4>
					<p class="text-sm text-muted-foreground mt-1">Application configuration.</p>
				</div>
			</TabsContent>
			<TabsContent value="billing">
				<div class="p-4 border border-border rounded-lg">
					<h4 class="font-medium">Billing</h4>
					<p class="text-sm text-muted-foreground mt-1">Manage billing and invoices.</p>
				</div>
			</TabsContent>
			<TabsContent value="team">
				<div class="p-4 border border-border rounded-lg">
					<h4 class="font-medium">Team</h4>
					<p class="text-sm text-muted-foreground mt-1">Manage team members.</p>
				</div>
			</TabsContent>
			<TabsContent value="integrations">
				<div class="p-4 border border-border rounded-lg">
					<h4 class="font-medium">Integrations</h4>
					<p class="text-sm text-muted-foreground mt-1">Connected third-party services.</p>
				</div>
			</TabsContent>
			<TabsContent value="security">
				<div class="p-4 border border-border rounded-lg">
					<h4 class="font-medium">Security</h4>
					<p class="text-sm text-muted-foreground mt-1">Security and access controls.</p>
				</div>
			</TabsContent>
		</Tabs>
	</div>

	<div>
		<h3 class="text-sm font-medium text-muted-foreground mb-3">Pills — 6 tabs with icons</h3>
		<Tabs value="p1">
			<TabsList variant="pills">
				<TabsTrigger variant="pills" value="p1">
					<Home class="size-4" />
					Home
				</TabsTrigger>
				<TabsTrigger variant="pills" value="p2">
					<User class="size-4" />
					Profile
				</TabsTrigger>
				<TabsTrigger variant="pills" value="p3">
					<Settings class="size-4" />
					Settings
				</TabsTrigger>
				<TabsTrigger variant="pills" value="p4">
					<BarChart3 class="size-4" />
					Analytics
				</TabsTrigger>
				<TabsTrigger variant="pills" value="p5">
					<CreditCard class="size-4" />
					Billing
				</TabsTrigger>
				<TabsTrigger variant="pills" value="p6">
					<Users class="size-4" />
					Team
				</TabsTrigger>
			</TabsList>
			<TabsContent value="p1">
				<div class="p-4 border border-border rounded-lg">
					<p class="text-sm text-muted-foreground">Pills with icons — scrollable on mobile with touch-friendly sizing.</p>
				</div>
			</TabsContent>
			<TabsContent value="p2">
				<div class="p-4 border border-border rounded-lg">
					<p class="text-sm text-muted-foreground">Profile content.</p>
				</div>
			</TabsContent>
			<TabsContent value="p3">
				<div class="p-4 border border-border rounded-lg">
					<p class="text-sm text-muted-foreground">Settings content.</p>
				</div>
			</TabsContent>
			<TabsContent value="p4">
				<div class="p-4 border border-border rounded-lg">
					<p class="text-sm text-muted-foreground">Analytics content.</p>
				</div>
			</TabsContent>
			<TabsContent value="p5">
				<div class="p-4 border border-border rounded-lg">
					<p class="text-sm text-muted-foreground">Billing content.</p>
				</div>
			</TabsContent>
			<TabsContent value="p6">
				<div class="p-4 border border-border rounded-lg">
					<p class="text-sm text-muted-foreground">Team content.</p>
				</div>
			</TabsContent>
		</Tabs>
	</div>
</div>
