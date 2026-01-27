export const basicVariantsDocs = `
<script lang="ts">
	import { Badge } from "@kareyes/aether";
</script>

<div class="flex flex-wrap gap-4">
	<Badge text="Default" />
	<Badge text="Secondary" variant="secondary" />
	<Badge text="Flat" variant="flat" />
	<Badge text="Outline" variant="outline" />
	<Badge text="Dashed" variant="dashed" />
</div>`;

export const colorVariantsDocs = `
<script lang="ts">
	import { Badge } from "@kareyes/aether";
</script>

<div class="flex flex-wrap gap-4">
	<Badge text="Red" color="red" />
	<Badge text="Orange" color="orange" />
	<Badge text="Yellow" color="yellow" />
	<Badge text="Green" color="green" />
	<Badge text="Blue" color="blue" />
	<Badge text="Purple" color="purple" />
	<Badge text="Pink" color="pink" />
	<Badge text="Gray" color="gray" />
</div>`;

export const variantColorComboDocs = `
<script lang="ts">
	import { Badge } from "@kareyes/aether";
</script>

<div class="space-y-4">
	<!-- Default Variant -->
	<div class="flex flex-wrap gap-2">
		<Badge text="Default" variant="default" />
		<Badge text="Red" variant="default" color="red" />
		<Badge text="Green" variant="default" color="green" />
		<Badge text="Blue" variant="default" color="blue" />
	</div>

	<!-- Secondary Variant -->
	<div class="flex flex-wrap gap-2">
		<Badge text="Default" variant="secondary" />
		<Badge text="Red" variant="secondary" color="red" />
		<Badge text="Green" variant="secondary" color="green" />
		<Badge text="Blue" variant="secondary" color="blue" />
	</div>

	<!-- Flat Variant -->
	<div class="flex flex-wrap gap-2">
		<Badge text="Default" variant="flat" />
		<Badge text="Red" variant="flat" color="red" />
		<Badge text="Green" variant="flat" color="green" />
		<Badge text="Blue" variant="flat" color="blue" />
	</div>

	<!-- Outline Variant -->
	<div class="flex flex-wrap gap-2">
		<Badge text="Default" variant="outline" />
		<Badge text="Red" variant="outline" color="red" />
		<Badge text="Green" variant="outline" color="green" />
		<Badge text="Blue" variant="outline" color="blue" />
	</div>

	<!-- Dashed Variant -->
	<div class="flex flex-wrap gap-2">
		<Badge text="Default" variant="dashed" />
		<Badge text="Red" variant="dashed" color="red" />
		<Badge text="Green" variant="dashed" color="green" />
		<Badge text="Blue" variant="dashed" color="blue" />
	</div>
</div>`;

export const sizesDocs = `
<script lang="ts">
	import { Badge } from "@kareyes/aether";
</script>

<div class="flex items-center gap-4">
	<Badge text="Small" size="sm" />
	<Badge text="Default" size="default" />
	<Badge text="Large" size="lg" />
</div>`;

export const withIconsDocs = `
<script lang="ts">
	import { Badge } from "@kareyes/aether";
	import { Check, Star, Zap, Heart } from "@kareyes/aether/icons";
</script>

<div class="flex flex-wrap gap-4">
	<Badge text="Success">
		{#snippet icon()}
			<Check class="size-3" />
		{/snippet}
	</Badge>
	<Badge text="Featured" variant="secondary" color="yellow">
		{#snippet icon()}
			<Star class="size-3" />
		{/snippet}
	</Badge>
	<Badge text="Fast" variant="flat" color="purple">
		{#snippet icon()}
			<Zap class="size-3" />
		{/snippet}
	</Badge>
	<Badge text="Favorite" variant="outline" color="pink">
		{#snippet icon()}
			<Heart class="size-3" />
		{/snippet}
	</Badge>
</div>`;

export const loadingStateDocs = `
<script lang="ts">
	import { Badge } from "@kareyes/aether";
</script>

<div class="flex flex-wrap gap-4">
	<Badge text="Loading" loading={true} />
	<Badge text="Processing" variant="secondary" loading={true} />
	<Badge text="Saving" variant="flat" color="blue" loading={true} />
	<Badge text="Updating" variant="outline" color="green" loading={true} />
	<Badge text="Syncing" variant="dashed" color="purple" loading={true} />
</div>`;

export const clickableBadgesDocs = `
<script lang="ts">
	import { Badge } from "@kareyes/aether";

	function handleBadgeClick(text: string) {
		alert(\`Clicked: \${text}\`);
	}
</script>

<div class="space-y-3">
	<div class="flex flex-wrap gap-2">
		<Badge
			text="Click me"
			clickable={true}
			onclick={() => handleBadgeClick("Default clickable")}
		/>
		<Badge
			text="Secondary"
			variant="secondary"
			clickable={true}
			onclick={() => handleBadgeClick("Secondary")}
		/>
		<Badge
			text="Flat"
			variant="flat"
			clickable={true}
			onclick={() => handleBadgeClick("Flat")}
		/>
	</div>
	<div class="flex flex-wrap gap-2">
		<Badge
			text="Link Badge"
			color="blue"
			variant="outline"
			href="https://example.com"
			target="_blank"
		/>
	</div>
</div>`;

export const dismissableBadgesDocs = `
<script lang="ts">
	import { Badge } from "@kareyes/aether";

	type TagType = {
		id: number;
		text: string;
		variant: "default" | "secondary" | "flat" | "outline" | "dashed";
		color: "blue" | "green" | "purple" | "orange";
	};

	let tags: TagType[] = $state([
		{ id: 1, text: "Design", variant: "flat", color: "blue" },
		{ id: 2, text: "Development", variant: "secondary", color: "green" },
		{ id: 3, text: "Marketing", variant: "outline", color: "purple" },
	]);

	function removeTag(id: number) {
		tags = tags.filter(tag => tag.id !== id);
	}
</script>

<div class="flex flex-wrap gap-2">
	{#each tags as tag (tag.id)}
		<Badge
			text={tag.text}
			variant={tag.variant}
			color={tag.color}
			dismissable={true}
			onDismiss={() => removeTag(tag.id)}
		/>
	{/each}
</div>`;

export const notificationBadgesDocs = `
<script lang="ts">
	import { Badge } from "@kareyes/aether";

	let notifications = $state([
		{ id: 1, text: "New message", color: "blue" as const },
		{ id: 2, text: "Warning", color: "yellow" as const },
		{ id: 3, text: "Error occurred", color: "red" as const },
	]);

	function removeNotification(id: number) {
		notifications = notifications.filter(notif => notif.id !== id);
	}
</script>

<div class="space-y-2">
	{#each notifications as notification (notification.id)}
		<div class="flex items-center justify-between p-3 border rounded-lg">
			<span class="text-sm">You have a new notification</span>
			<Badge
				text={notification.text}
				color={notification.color}
				dismissable={true}
				onDismiss={() => removeNotification(notification.id)}
			/>
		</div>
	{/each}
</div>`;

export const statusIndicatorsDocs = `
<script lang="ts">
	import { Badge } from "@kareyes/aether";
	import { Check, AlertCircle } from "@kareyes/aether/icons";
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	<div class="p-4 border rounded-lg">
		<div class="flex items-center justify-between">
			<span class="font-medium">Server Status</span>
			<Badge text="Online" color="green">
				{#snippet icon()}
					<Check class="size-3" />
				{/snippet}
			</Badge>
		</div>
	</div>

	<div class="p-4 border rounded-lg">
		<div class="flex items-center justify-between">
			<span class="font-medium">Database</span>
			<Badge text="Maintenance" color="yellow">
				{#snippet icon()}
					<AlertCircle class="size-3" />
				{/snippet}
			</Badge>
		</div>
	</div>

	<div class="p-4 border rounded-lg">
		<div class="flex items-center justify-between">
			<span class="font-medium">API Service</span>
			<Badge text="Down" color="red">
				{#snippet icon()}
					<AlertCircle class="size-3" />
				{/snippet}
			</Badge>
		</div>
	</div>
</div>`;

export const userProfileDocs = `
<script lang="ts">
	import { Avatar, Badge } from "@kareyes/aether";
</script>

<div class="bg-card p-6 rounded-lg border">
	<div class="flex items-start space-x-4">
		<Avatar fallback="John Doe" size="xl" variant="bordered"/>
		<div class="flex-1">
			<h3 class="text-lg font-semibold">John Doe</h3>
			<p class="text-muted-foreground">Senior Developer</p>
			<div class="flex flex-wrap gap-2 mt-3">
				<Badge text="React" variant="flat" color="blue" size="sm" />
				<Badge text="TypeScript" variant="flat" color="blue" size="sm" />
				<Badge text="Node.js" variant="flat" color="green" size="sm" />
				<Badge text="Team Lead" variant="secondary" color="purple" size="sm" />
			</div>
		</div>
		<Badge text="Active" color="green" />
	</div>
</div>`;

export const productCardsDocs = `
<script lang="ts">
	import { Badge } from "@kareyes/aether";
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
	<div class="border rounded-lg p-4">
		<div class="flex justify-between items-start mb-3">
			<h3 class="font-semibold">Premium Plan</h3>
			<Badge text="Popular" color="green" />
		</div>
		<p class="text-muted-foreground text-sm mb-4">Advanced features for growing teams</p>
		<div class="flex justify-between items-center">
			<span class="text-2xl font-bold">$29/mo</span>
			<Badge text="Best Value" color="green" clickable={true} />
		</div>
	</div>

	<div class="border rounded-lg p-4">
		<div class="flex justify-between items-start mb-3">
			<h3 class="font-semibold">Basic Plan</h3>
			<Badge text="Free" color="gray" />
		</div>
		<p class="text-muted-foreground text-sm mb-4">Essential features for individuals</p>
		<div class="flex justify-between items-center">
			<span class="text-2xl font-bold">$0/mo</span>
			<Badge text="Limited" variant="outline" />
		</div>
	</div>

	<div class="border rounded-lg p-4">
		<div class="flex justify-between items-start mb-3">
			<h3 class="font-semibold">Enterprise</h3>
			<Badge text="Contact Sales" variant="secondary" />
		</div>
		<p class="text-muted-foreground text-sm mb-4">Custom solutions for large organizations</p>
		<div class="flex justify-between items-center">
			<span class="text-2xl font-bold">Custom</span>
			<Badge text="Custom" color="purple" clickable={true} />
		</div>
	</div>
</div>`;
