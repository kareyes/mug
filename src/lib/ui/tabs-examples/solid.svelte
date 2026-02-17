<script lang="ts">
	import { TabsPrimitives } from "@kareyes/aether";
	import { Mail, Calendar, Bell } from "@kareyes/aether/icons";
	const { Tabs, TabsList, TabsTrigger, TabsContent } = TabsPrimitives;
</script>

<Tabs value="inbox">
	<TabsList variant="solid">
		<TabsTrigger variant="solid" value="inbox">
			<Mail class="size-4" />
			Inbox
		</TabsTrigger>
		<TabsTrigger variant="solid" value="scheduled">
			<Calendar class="size-4" />
			Scheduled
		</TabsTrigger>
		<TabsTrigger variant="solid" value="notifications">
			<Bell class="size-4" />
			Alerts
		</TabsTrigger>
	</TabsList>
	<TabsContent value="inbox">
		<div class="space-y-4">
			<h3 class="text-lg font-medium">Inbox Messages</h3>
			<p class="text-sm text-muted-foreground">View all your incoming messages and communications.</p>
		</div>
	</TabsContent>
	<TabsContent value="scheduled">
		<div class="space-y-4">
			<h3 class="text-lg font-medium">Scheduled Items</h3>
			<p class="text-sm text-muted-foreground">Manage your scheduled messages and events.</p>
		</div>
	</TabsContent>
	<TabsContent value="notifications">
		<div class="space-y-4">
			<h3 class="text-lg font-medium">Alert Center</h3>
			<p class="text-sm text-muted-foreground">Review important alerts and notifications.</p>
		</div>
	</TabsContent>
</Tabs>
