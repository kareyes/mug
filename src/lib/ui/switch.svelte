<script lang="ts">
	import { Switch, SwitchPrimitives, Field, FieldPrimitives, Label, Card, CodeBlock } from '@kareyes/aether';
	import {
		basicUsageDocs,
		variantsDocs,
		sizesDocs,
		errorStatesDocs,
		combinationsDocs,
		formIntegrationDocs,
		withFieldDocs,
		currentStateDocs,
	} from '../code-blocks/switch';

	let states = $state({
		basicSwitch: false,
		disabledOn: true,
		disabledOff: false,
		variants: {
			default: false,
			success: false,
			warning: false,
			danger: false,
			ghost: false
		},
		sizes: {
			sm: false,
			default: false,
			lg: false
		},
		formSwitch: false
	});

	const variants: SwitchPrimitives.SwitchVariant[] = ['default', 'success', 'warning', 'danger', 'ghost'];
	const sizes: SwitchPrimitives.SwitchSize[] = ['sm', 'default', 'lg'];

	function handleSwitchChange(key: string, checked: boolean) {
		console.log(`${key} changed to:`, checked);
	}
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<div class="mb-8">
		<h1 class="text-3xl font-bold mb-2">Switch Component</h1>
		<p class="text-muted-foreground">
			Interactive switches with variants and sizes.
		</p>
	</div>
	<div class="space-y-12">
		<!-- Basic Usage -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="space-y-2">
					<Label for="basic-switch" class="text-sm font-medium">
						Basic Switch
					</Label>
					<div class="flex items-center space-x-2">
						<Switch
							id="basic-switch"
							bind:checked={states.basicSwitch}
							onCheckedChange={(checked) => handleSwitchChange('basic', checked)}
						/>
						<span class="text-sm text-muted-foreground">
							{states.basicSwitch ? 'On' : 'Off'}
						</span>
					</div>
				</div>

				<div class="space-y-2">
					<Label class="text-sm font-medium">
						Disabled (On)
					</Label>
					<div class="flex items-center space-x-2">
						<Switch
							checked={states.disabledOn}
							disabled={true}
						/>
						<span class="text-sm text-muted-foreground">Disabled</span>
					</div>
				</div>

				<div class="space-y-2">
					<Label class="text-sm font-medium">
						Disabled (Off)
					</Label>
					<div class="flex items-center space-x-2">
						<Switch
							checked={states.disabledOff}
							disabled={true}
						/>
						<span class="text-sm text-muted-foreground">Disabled</span>
					</div>
				</div>
			</div>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={basicUsageDocs}
			/>
		</Card>

		<!-- Variants -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Variants</h2>
			<div class="grid grid-cols-2 md:grid-cols-5 gap-6">
				{#each variants as variant}
					<div class="space-y-2">
						<h3 class="text-sm font-medium capitalize">{variant}</h3>
						<div class="flex items-center space-x-2">
							<Switch
								{variant}
								bind:checked={states.variants[variant as keyof typeof states.variants]}
								onCheckedChange={(checked) => handleSwitchChange(variant ?? 'default', checked)}
							/>
							<span class="text-xs text-muted-foreground">
								{states.variants[variant as keyof typeof states.variants] ? 'On' : 'Off'}
							</span>
						</div>
					</div>
				{/each}
			</div>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={variantsDocs}
			/>
		</Card>

		<!-- Sizes -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Sizes</h2>
			<div class="flex flex-wrap gap-8 items-end">
				{#each sizes as size}
					<div class="space-y-2">
						<h3 class="text-sm font-medium capitalize">
							{size === 'default' ? 'Default' : size?.toUpperCase() ?? ''}
						</h3>
						<div class="flex items-center space-x-2">
							<Switch
								{size}
								bind:checked={states.sizes[size as keyof typeof states.sizes]}
								onCheckedChange={(checked) => handleSwitchChange(`size-${size}`, checked)}
							/>
							<span class="text-xs text-muted-foreground">
								{states.sizes[size as keyof typeof states.sizes] ? 'On' : 'Off'}
							</span>
						</div>
					</div>
				{/each}
			</div>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={sizesDocs}
			/>
		</Card>

		<!-- Error States -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Error States</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="space-y-2">
					<Label class="text-sm font-medium">Switch with Error</Label>
					<div class="flex items-center space-x-2">
						<Switch
							error={true}
							onError={(err) => console.log('Error state:', err)}
						/>
						<span class="text-xs text-destructive">Required</span>
					</div>
				</div>

				<div class="space-y-2">
					<Label class="text-sm font-medium">Error with Variant</Label>
					<div class="flex items-center space-x-2">
						<Switch
							variant="danger"
							error={true}
							checked={true}
						/>
						<span class="text-xs text-destructive">Invalid state</span>
					</div>
				</div>

				<div class="space-y-2">
					<Label class="text-sm font-medium">Large Error Switch</Label>
					<div class="flex items-center space-x-2">
						<Switch
							size="lg"
							error={true}
						/>
						<span class="text-xs text-destructive">Confirmation required</span>
					</div>
				</div>
			</div>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={errorStatesDocs}
			/>
		</Card>

		<!-- Variant & Size Combinations -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Variant & Size Combinations</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="space-y-2">
					<h3 class="font-medium">Large Success</h3>
					<Switch
						variant="success"
						size="lg"
						checked={true}
					/>
				</div>

				<div class="space-y-2">
					<h3 class="font-medium">Small Warning</h3>
					<Switch
						variant="warning"
						size="sm"
						checked={true}
					/>
				</div>

				<div class="space-y-2">
					<h3 class="font-medium">Large Danger</h3>
					<Switch
						variant="danger"
						size="lg"
						checked={true}
					/>
				</div>
			</div>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={combinationsDocs}
			/>
		</Card>

		<!-- Form Integration -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Form Integration</h2>
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
							bind:checked={states.formSwitch}
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
						<Switch
							checked={true}
							disabled={true}
							variant="default"
							required={true}
						/>
					</div>
				</div>
			</div>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={formIntegrationDocs}
			/>
		</Card>

		<!-- With Field Component -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">With Field Component</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Field component provides structured labels, descriptions, and error handling.
			</p>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Field
					label="Enable notifications"
					description="Receive email notifications for updates"
					orientation="horizontal"
					labelPosition="before"
				>
					<Switch bind:checked={states.basicSwitch} variant="success" />
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

			<div class="space-y-4 mt-6">
				<h3 class="font-medium">With Validation</h3>
				<Field
					label="Accept terms and conditions"
					description="You must accept to continue"
					required
					error={!states.formSwitch ? "Please accept the terms to continue" : undefined}
					orientation="horizontal"
					labelPosition="before"
				>
					<Switch bind:checked={states.formSwitch} error={!states.formSwitch} />
				</Field>
			</div>

			<div class="space-y-4 mt-6">
				<h3 class="font-medium">Multiple Switches in Field.Set</h3>
				<FieldPrimitives.Set>
					<FieldPrimitives.Legend>Notification Preferences</FieldPrimitives.Legend>
					<FieldPrimitives.Description>Configure how you want to be notified</FieldPrimitives.Description>

					<FieldPrimitives.Separator />

					<FieldPrimitives.Group class="gap-4">
						<Field
							label="Email Notifications"
							description="Get notified via email"
							orientation="horizontal"
							labelPosition="before"
						>
							<Switch variant="success" checked={true} />
						</Field>

						<Field
							label="Push Notifications"
							description="Get browser push notifications"
							orientation="horizontal"
							labelPosition="before"
						>
							<Switch variant="default" checked={false} />
						</Field>

						<Field
							label="SMS Notifications"
							description="Get text message alerts"
							orientation="horizontal"
							labelPosition="before"
						>
							<Switch variant="warning" checked={false} />
						</Field>
					</FieldPrimitives.Group>
				</FieldPrimitives.Set>
			</div>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={withFieldDocs}
			/>
		</Card>

		<!-- State Display -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Current State</h2>
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
			</div>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={currentStateDocs}
			/>
		</Card>
	</div>
</div>
