export const variantsDocs = `
<script lang="ts">
	import { Button } from "@kareyes/aether";
</script>

<div class="flex flex-wrap gap-4">
	<Button variant="default" text="Default" />
	<Button variant="destructive" text="Destructive" />
	<Button variant="outline" text="Outline" />
	<Button variant="secondary" text="Secondary" />
	<Button variant="flat" text="Flat" />
	<Button variant="bordered" text="Bordered" />
	<Button variant="ghost" text="Ghost" />
	<Button variant="link" text="Link" />
</div>`;

export const sizesDocs = `
<script lang="ts">
	import { Button } from "@kareyes/aether";
</script>

<div class="flex flex-wrap items-center gap-4">
	<Button size="sm" text="Small" />
	<Button size="default" text="Default" />
	<Button size="lg" text="Large" />
</div>`;

export const disabledDocs = `
<script lang="ts">
	import { Button } from "@kareyes/aether";
</script>

<div class="flex flex-wrap gap-4">
	<Button text="Disabled Default" disabled />
	<Button variant="outline" text="Disabled Outline" disabled />
	<Button variant="destructive" text="Disabled Destructive" disabled />
</div>`;

export const loadingStateDocs = `
<script lang="ts">
	import { Button } from "@kareyes/aether";

	let isLoading = $state(false);

	const handleAsyncClick = async () => {
		isLoading = true;
		await new Promise((resolve) => setTimeout(resolve, 2000));
		isLoading = false;
	};
</script>

<div class="flex flex-wrap gap-4">
	<Button
		text={isLoading ? 'Loading...' : 'Click to Load'}
		onclick={handleAsyncClick}
		disabled={isLoading}
	/>
</div>`;

export const withIconsDocs = `
<script lang="ts">
	import { Button } from "@kareyes/aether";
	import { PlusIcon, SaveIcon, DownloadIcon } from "@kareyes/aether/icons";
</script>

<div class="flex flex-wrap gap-4">
	<Button icon={PlusIcon} text="Add Item" />
	<Button variant="outline" text="Save Changes" icon={SaveIcon} />
	<Button variant="secondary" text="Download" icon={DownloadIcon} />
</div>`;

export const fullWidthDocs = `
<script lang="ts">
	import { Button } from "@kareyes/aether";
</script>

<div class="space-y-3">
	<Button text="Full Width Button" class="w-full" />
	<Button variant="outline" text="Full Width Outline" class="w-full" />
</div>`;

export const buttonGroupsDocs = `
<script lang="ts">
	import { Button, Separator } from "@kareyes/aether";
</script>

<div class="space-y-6">
	<!-- Action Group -->
	<div>
		<p class="text-sm font-medium mb-3">Action Group</p>
		<div class="flex gap-2">
			<Button variant="outline" text="Cancel" />
			<Button text="Save" />
		</div>
	</div>

	<Separator />

	<!-- Navigation Group -->
	<div>
		<p class="text-sm font-medium mb-3">Navigation Group</p>
		<div class="flex gap-2">
			<Button variant="outline" text="Previous" />
			<Button variant="outline" text="1" />
			<Button variant="default" text="2" />
			<Button variant="outline" text="3" />
			<Button variant="outline" text="Next" />
		</div>
	</div>
</div>`;

export const useCasesDocs = `
<script lang="ts">
	import { Button } from "@kareyes/aether";
</script>

<div class="grid gap-6 md:grid-cols-2">
	<!-- Form Actions -->
	<div class="space-y-3">
		<p class="font-medium">Form Actions</p>
		<div class="flex gap-2 justify-end">
			<Button variant="outline" text="Cancel" />
			<Button variant="default" text="Submit" />
		</div>
	</div>

	<!-- Delete Confirmation -->
	<div class="space-y-3">
		<p class="font-medium">Delete Confirmation</p>
		<div class="flex gap-2">
			<Button variant="outline" text="Cancel" />
			<Button variant="destructive" text="Delete" />
		</div>
	</div>

	<!-- Social Actions -->
	<div class="space-y-3">
		<p class="font-medium">Social Actions</p>
		<div class="flex flex-wrap gap-2">
			<Button variant="default" text="Follow" />
			<Button variant="outline" text="Message" />
			<Button variant="ghost" text="Share" />
		</div>
	</div>

	<!-- Call to Action -->
	<div class="space-y-3 text-center">
		<p class="font-medium">Call to Action</p>
		<Button text="Get Started" size="lg" class="w-full" />
		<Button variant="link" text="Learn more" class="w-full text-sm" />
	</div>
</div>`;
