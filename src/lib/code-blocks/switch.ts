export const basicUsageDocs = `
<script lang="ts">
	import { Switch, Label } from "@kareyes/aether";

	let basicSwitch = $state(false);
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
	<div class="space-y-2">
		<Label for="basic-switch" class="text-sm font-medium">Basic Switch</Label>
		<div class="flex items-center space-x-2">
			<Switch
				id="basic-switch"
				bind:checked={basicSwitch}
			/>
			<span class="text-sm text-muted-foreground">
				{basicSwitch ? 'On' : 'Off'}
			</span>
		</div>
	</div>

	<div class="space-y-2">
		<Label class="text-sm font-medium">Disabled (On)</Label>
		<div class="flex items-center space-x-2">
			<Switch checked={true} disabled={true} />
			<span class="text-sm text-muted-foreground">Disabled</span>
		</div>
	</div>

	<div class="space-y-2">
		<Label class="text-sm font-medium">Disabled (Off)</Label>
		<div class="flex items-center space-x-2">
			<Switch checked={false} disabled={true} />
			<span class="text-sm text-muted-foreground">Disabled</span>
		</div>
	</div>
</div>`;

export const variantsDocs = `
<script lang="ts">
	import { Switch, SwitchPrimitives } from "@kareyes/aether";

	const variants: SwitchPrimitives.SwitchVariant[] = ['default', 'success', 'warning', 'danger', 'ghost'];
	let states = $state({
		default: false,
		success: false,
		warning: false,
		danger: false,
		ghost: false
	});
</script>

<div class="grid grid-cols-2 md:grid-cols-5 gap-6">
	{#each variants as variant}
		<div class="space-y-2">
			<h3 class="text-sm font-medium capitalize">{variant}</h3>
			<div class="flex items-center space-x-2">
				<Switch
					{variant}
					bind:checked={states[variant]}
				/>
				<span class="text-xs text-muted-foreground">
					{states[variant] ? 'On' : 'Off'}
				</span>
			</div>
		</div>
	{/each}
</div>`;

export const sizesDocs = `
<script lang="ts">
	import { Switch, SwitchPrimitives } from "@kareyes/aether";

	const sizes: SwitchPrimitives.SwitchSize[] = ['sm', 'default', 'lg'];
	let states = $state({ sm: false, default: false, lg: false });
</script>

<div class="flex flex-wrap gap-8 items-end">
	{#each sizes as size}
		<div class="space-y-2">
			<h3 class="text-sm font-medium capitalize">
				{size === 'default' ? 'Default' : size?.toUpperCase() ?? ''}
			</h3>
			<div class="flex items-center space-x-2">
				<Switch
					{size}
					bind:checked={states[size]}
				/>
				<span class="text-xs text-muted-foreground">
					{states[size] ? 'On' : 'Off'}
				</span>
			</div>
		</div>
	{/each}
</div>`;

export const errorStatesDocs = `
<script lang="ts">
	import { Switch, Label } from "@kareyes/aether";
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
	<div class="space-y-2">
		<Label class="text-sm font-medium">Switch with Error</Label>
		<div class="flex items-center space-x-2">
			<Switch error={true} />
			<span class="text-xs text-destructive">Required</span>
		</div>
	</div>

	<div class="space-y-2">
		<Label class="text-sm font-medium">Error with Variant</Label>
		<div class="flex items-center space-x-2">
			<Switch variant="danger" error={true} checked={true} />
			<span class="text-xs text-destructive">Invalid state</span>
		</div>
	</div>

	<div class="space-y-2">
		<Label class="text-sm font-medium">Large Error Switch</Label>
		<div class="flex items-center space-x-2">
			<Switch size="lg" error={true} />
			<span class="text-xs text-destructive">Confirmation required</span>
		</div>
	</div>
</div>`;

export const combinationsDocs = `
<script lang="ts">
	import { Switch } from "@kareyes/aether";
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
	<div class="space-y-2">
		<h3 class="font-medium">Large Success</h3>
		<Switch variant="success" size="lg" checked={true} />
	</div>

	<div class="space-y-2">
		<h3 class="font-medium">Small Warning</h3>
		<Switch variant="warning" size="sm" checked={true} />
	</div>

	<div class="space-y-2">
		<h3 class="font-medium">Large Danger</h3>
		<Switch variant="danger" size="lg" checked={true} />
	</div>
</div>`;

export const formIntegrationDocs = `
<script lang="ts">
	import { Switch, Label } from "@kareyes/aether";

	let formSwitch = $state(false);
</script>

<div class="max-w-md space-y-4 p-6 border border-border rounded-lg">
	<h3 class="font-medium">Settings</h3>

	<div class="space-y-4">
		<div class="flex items-center justify-between">
			<div class="space-y-0.5">
				<Label for="notifications" class="text-sm font-medium">
					Email Notifications
				</Label>
				<p class="text-xs text-muted-foreground">
					Receive notifications via email
				</p>
			</div>
			<Switch
				id="notifications"
				name="notifications"
				bind:checked={formSwitch}
				variant="success"
			/>
		</div>

		<div class="flex items-center justify-between">
			<div class="space-y-0.5">
				<Label for="marketing" class="text-sm font-medium">
					Marketing Emails
				</Label>
				<p class="text-xs text-muted-foreground">
					Receive marketing and promotional emails
				</p>
			</div>
			<Switch
				id="marketing"
				name="marketing"
				checked={false}
				variant="ghost"
			/>
		</div>

		<div class="flex items-center justify-between">
			<div class="space-y-0.5">
				<Label class="text-sm font-medium text-muted-foreground">
					Data Processing (Required)
				</Label>
				<p class="text-xs text-muted-foreground">
					Required for app functionality
				</p>
			</div>
			<Switch checked={true} disabled={true} variant="default" required={true} />
		</div>
	</div>
</div>`;

export const withFieldDocs = `
<script lang="ts">
	import { Switch, Field, FieldPrimitives } from "@kareyes/aether";

	let basicSwitch = $state(false);
	let formSwitch = $state(false);
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
	<Field
		label="Enable notifications"
		description="Receive email notifications for updates"
		orientation="horizontal"
		labelPosition="before"
	>
		<Switch bind:checked={basicSwitch} variant="success" />
	</Field>

	<Field
		label="Auto-save"
		description="Automatically save your work"
		orientation="horizontal"
		labelPosition="before"
	>
		<Switch checked={true} variant="success" />
	</Field>
</div>

<div class="space-y-4">
	<h3 class="font-medium">With Validation</h3>
	<Field
		label="Accept terms and conditions"
		description="You must accept to continue"
		required
		error={!formSwitch ? "Please accept the terms to continue" : undefined}
		orientation="horizontal"
		labelPosition="before"
	>
		<Switch bind:checked={formSwitch} error={!formSwitch} />
	</Field>
</div>

<div class="space-y-4">
	<h3 class="font-medium">Multiple Switches in Field.Set</h3>
	<FieldPrimitives.Set>
		<FieldPrimitives.Legend>Notification Preferences</FieldPrimitives.Legend>
		<FieldPrimitives.Description>Configure how you want to be notified</FieldPrimitives.Description>
		<FieldPrimitives.Separator />
		<FieldPrimitives.Group class="gap-4">
			<Field label="Email Notifications" description="Get notified via email"
				orientation="horizontal" labelPosition="before">
				<Switch variant="success" checked={true} />
			</Field>
			<Field label="Push Notifications" description="Get browser push notifications"
				orientation="horizontal" labelPosition="before">
				<Switch variant="default" checked={false} />
			</Field>
			<Field label="SMS Notifications" description="Get text message alerts"
				orientation="horizontal" labelPosition="before">
				<Switch variant="warning" checked={false} />
			</Field>
		</FieldPrimitives.Group>
	</FieldPrimitives.Set>
</div>`;

export const currentStateDocs = `
<script lang="ts">
	import { Switch } from "@kareyes/aether";

	let states = $state({
		basicSwitch: false,
		formSwitch: false,
		variants: { default: false, success: false, warning: false, danger: false, ghost: false },
		sizes: { sm: false, default: false, lg: false }
	});
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
	<div class="space-y-2">
		<h3 class="font-medium">Basic Switches</h3>
		<pre class="text-sm bg-muted p-4 rounded-md overflow-auto">{JSON.stringify({
			basic: states.basicSwitch,
			form: states.formSwitch
		}, null, 2)}</pre>
	</div>

	<div class="space-y-2">
		<h3 class="font-medium">Variants</h3>
		<pre class="text-sm bg-muted p-4 rounded-md overflow-auto">{JSON.stringify(states.variants, null, 2)}</pre>
	</div>

	<div class="space-y-2">
		<h3 class="font-medium">Sizes</h3>
		<pre class="text-sm bg-muted p-4 rounded-md overflow-auto">{JSON.stringify(states.sizes, null, 2)}</pre>
	</div>
</div>`;
