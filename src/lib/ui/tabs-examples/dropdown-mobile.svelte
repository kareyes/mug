<script lang="ts">
	import { TabsPrimitives } from "@kareyes/aether";
	import { Home, BarChart3, Users } from "@kareyes/aether/icons";
	const { Tabs, TabsList, TabsTrigger, TabsContent } = TabsPrimitives;

	const settingsTabs: TabsPrimitives.TabItem[] = [
		{ value: "general", label: "General" },
		{ value: "appearance", label: "Appearance" },
		{ value: "notifications", label: "Notifications" },
		{ value: "privacy", label: "Privacy" },
		{ value: "security", label: "Security" },
	];

	const dashboardTabs: TabsPrimitives.TabItem[] = [
		{ value: "overview", label: "Overview" },
		{ value: "analytics", label: "Analytics" },
		{ value: "reports", label: "Reports" },
		{ value: "team", label: "Team" },
	];
</script>

<div class="space-y-8">
	<div>
		<h3 class="text-sm font-medium text-muted-foreground mb-3">Settings — 5 tabs → dropdown</h3>
		<Tabs value="general" dropdownOnMobile items={settingsTabs}>
			<TabsList variant="underline">
				<TabsTrigger variant="underline" value="general">General</TabsTrigger>
				<TabsTrigger variant="underline" value="appearance">Appearance</TabsTrigger>
				<TabsTrigger variant="underline" value="notifications">Notifications</TabsTrigger>
				<TabsTrigger variant="underline" value="privacy">Privacy</TabsTrigger>
				<TabsTrigger variant="underline" value="security">Security</TabsTrigger>
			</TabsList>
			<TabsContent value="general">
				<div class="p-4 border border-border rounded-lg">
					<h4 class="font-medium">General Settings</h4>
					<p class="text-sm text-muted-foreground mt-1">On mobile, the tab list becomes a Select dropdown while content remains the same.</p>
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
			<TabsContent value="privacy">
				<div class="p-4 border border-border rounded-lg">
					<h4 class="font-medium">Privacy</h4>
					<p class="text-sm text-muted-foreground mt-1">Privacy and data settings.</p>
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
		<h3 class="text-sm font-medium text-muted-foreground mb-3">Dashboard — pills variant → dropdown</h3>
		<Tabs value="overview" dropdownOnMobile items={dashboardTabs}>
			<TabsList variant="pills">
				<TabsTrigger variant="pills" value="overview">
					<Home class="size-4" />
					Overview
				</TabsTrigger>
				<TabsTrigger variant="pills" value="analytics">
					<BarChart3 class="size-4" />
					Analytics
				</TabsTrigger>
				<TabsTrigger variant="pills" value="reports">Reports</TabsTrigger>
				<TabsTrigger variant="pills" value="team">
					<Users class="size-4" />
					Team
				</TabsTrigger>
			</TabsList>
			<TabsContent value="overview">
				<div class="p-4 border border-border rounded-lg">
					<h4 class="font-medium">Overview</h4>
					<p class="text-sm text-muted-foreground mt-1">Dashboard overview with metrics.</p>
				</div>
			</TabsContent>
			<TabsContent value="analytics">
				<div class="p-4 border border-border rounded-lg">
					<h4 class="font-medium">Analytics</h4>
					<p class="text-sm text-muted-foreground mt-1">Detailed analytics charts.</p>
				</div>
			</TabsContent>
			<TabsContent value="reports">
				<div class="p-4 border border-border rounded-lg">
					<h4 class="font-medium">Reports</h4>
					<p class="text-sm text-muted-foreground mt-1">Generated reports.</p>
				</div>
			</TabsContent>
			<TabsContent value="team">
				<div class="p-4 border border-border rounded-lg">
					<h4 class="font-medium">Team</h4>
					<p class="text-sm text-muted-foreground mt-1">Manage team members.</p>
				</div>
			</TabsContent>
		</Tabs>
	</div>
</div>
