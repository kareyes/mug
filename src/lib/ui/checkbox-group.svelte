<script lang="ts">
	import { CheckboxGroup, CheckboxPrimitives, Field, Card, CodeBlock } from "@kareyes/aether";

    type CheckboxGroupOption = CheckboxPrimitives.CheckboxGroupOption;

	import {
		basicUsageDocs,
		horizontalOrientationDocs,
		withDescriptionsDocs,
		todoListDocs,
		sizesAndVariantsDocs,
		settingsPanelDocs,
		requiredFieldDocs,
		errorStatesDocs,
		withFieldDocs,
		disabledStateDocs,
	} from "$lib/code-blocks/checkbox-group";

	// Demo data
	let basicValues = $state<string[]>([]);
	let skillsValues = $state<string[]>(["javascript", "svelte"]);
	let preferencesValues = $state<string[]>([]);
	let todosValues = $state<string[]>(["task1"]);
	let settingsValues = $state<string[]>(["notifications"]);
	let termsValues = $state<string[]>([]);
	let errorValues = $state<string[]>([]);

	// Error states
	let termsError = $derived(termsValues.length === 0);
	let customError = $state(true);

	const basicOptions: CheckboxGroupOption[] = [
		{ id: "1", label: "Option 1", value: "option1" },
		{ id: "2", label: "Option 2", value: "option2" },
		{ id: "3", label: "Option 3", value: "option3" },
	];

	const skillsOptions: CheckboxGroupOption[] = [
		{ id: "js", label: "JavaScript", value: "javascript", description: "ES6+ and modern JS frameworks" },
		{ id: "ts", label: "TypeScript", value: "typescript", description: "Strongly typed JavaScript" },
		{ id: "svelte", label: "Svelte", value: "svelte", description: "Modern reactive framework" },
		{ id: "react", label: "React", value: "react", description: "Popular UI library" },
		{ id: "vue", label: "Vue.js", value: "vue", description: "Progressive framework" },
	];

	const preferencesOptions: CheckboxGroupOption[] = [
		{ id: "email", label: "Email notifications", value: "email" },
		{ id: "sms", label: "SMS notifications", value: "sms" },
		{ id: "push", label: "Push notifications", value: "push" },
		{ id: "newsletter", label: "Newsletter", value: "newsletter", disabled: true },
	];

	const todosOptions: CheckboxGroupOption[] = [
		{ id: "task1", label: "Set up development environment", value: "task1" },
		{ id: "task2", label: "Create component library", value: "task2" },
		{ id: "task3", label: "Write documentation", value: "task3" },
		{ id: "task4", label: "Add unit tests", value: "task4" },
		{ id: "task5", label: "Deploy to production", value: "task5" },
	];

	const settingsOptions: CheckboxGroupOption[] = [
		{ id: "notifications", label: "Enable notifications", value: "notifications", description: "Receive app notifications" },
		{ id: "darkmode", label: "Dark mode", value: "darkmode", description: "Use dark theme" },
		{ id: "analytics", label: "Usage analytics", value: "analytics", description: "Help improve our product" },
		{ id: "marketing", label: "Marketing emails", value: "marketing", description: "Receive product updates" },
	];

	function handleValuesChange(newValues: string[], label: string) {
		console.log(`${label} changed:`, newValues);
	}
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<div class="mb-8">
		<h1 class="text-3xl font-bold mb-2">Checkbox Group Component</h1>
		<p class="text-muted-foreground">
			Multiple checkbox selection with labels, descriptions, and validation support.
		</p>
	</div>

	<div class="space-y-12">

	<!-- 1. Basic Usage -->
	<Card variant="outline" class="p-6">
		<h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
		<p class="text-sm text-muted-foreground mb-4">
			Simple checkbox group with label and description.
		</p>

		<div class="space-y-4">
			<CheckboxGroup
				options={basicOptions}
				bind:values={basicValues}
				label="Choose your options"
				description="Select one or more options from the list"
			/>
			<p class="text-sm text-muted-foreground">
				Selected values: {basicValues.length > 0 ? basicValues.join(", ") : "None"}
			</p>
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

	<!-- 2. Horizontal Orientation -->
	<Card variant="outline" class="p-6">
		<h2 class="text-2xl font-semibold mb-4">Horizontal Orientation</h2>
		<p class="text-sm text-muted-foreground mb-4">
			Checkbox group displayed in a horizontal layout.
		</p>

		<div class="space-y-4">
			<CheckboxGroup
				options={preferencesOptions}
				bind:values={preferencesValues}
				orientation="horizontal"
				label="Notification Preferences"
				onValuesChange={(values) => handleValuesChange(values, "Preferences")}
			/>
			<p class="text-sm text-muted-foreground">
				Selected: {preferencesValues.length > 0 ? preferencesValues.join(", ") : "None"}
			</p>
		</div>
		<br />
		<CodeBlock
			title="Code"
			language="Svelte"
			showLineNumbers
			collapsible
			maxHeight="250px"
			variant="default"
			code={horizontalOrientationDocs}
		/>
	</Card>

	<!-- 3. With Descriptions -->
	<Card variant="outline" class="p-6">
		<h2 class="text-2xl font-semibold mb-4">With Descriptions</h2>
		<p class="text-sm text-muted-foreground mb-4">
			Checkbox options with descriptive text for each item.
		</p>

		<div class="space-y-4">
			<CheckboxGroup
				options={skillsOptions}
				bind:values={skillsValues}
				label="Technical Skills"
				description="Select the technologies you're proficient in"
				checkboxSize="lg"
			/>
			<p class="text-sm text-muted-foreground">
				Skills: {skillsValues.length > 0 ? skillsValues.join(", ") : "None"}
			</p>
		</div>
		<br />
		<CodeBlock
			title="Code"
			language="Svelte"
			showLineNumbers
			collapsible
			maxHeight="250px"
			variant="default"
			code={withDescriptionsDocs}
		/>
	</Card>

	<!-- 4. Todo List with Line Through -->
	<Card variant="outline" class="p-6">
		<h2 class="text-2xl font-semibold mb-4">Todo List with Line Through</h2>
		<p class="text-sm text-muted-foreground mb-4">
			Checkbox group with line-through effect on checked items.
		</p>

		<div class="space-y-4">
			<CheckboxGroup
				options={todosOptions}
				bind:values={todosValues}
				label="Project Tasks"
				description="Track your progress"
				lineThrough={true}
				variant="success"
			/>
			<div class="text-sm text-muted-foreground">
				Progress: {todosValues.length} / {todosOptions.length} completed
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
			code={todoListDocs}
		/>
	</Card>

	<!-- 5. Different Sizes and Variants -->
	<Card variant="outline" class="p-6">
		<h2 class="text-2xl font-semibold mb-4">Different Sizes and Variants</h2>
		<p class="text-sm text-muted-foreground mb-4">
			Various checkbox sizes and color variants.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div>
				<h3 class="text-lg font-medium mb-4">Small Size</h3>
				<CheckboxGroup
					options={basicOptions.slice(0, 2)}
					values={[]}
					checkboxSize="sm"
					label="Small checkboxes"
				/>
			</div>

			<div>
				<h3 class="text-lg font-medium mb-4">Large Size</h3>
				<CheckboxGroup
					options={basicOptions.slice(0, 2)}
					values={[]}
					checkboxSize="xl"
					label="Extra large checkboxes"
				/>
			</div>

			<div>
				<h3 class="text-lg font-medium mb-4">Warning Variant</h3>
				<CheckboxGroup
					options={[
						{ id: "warn1", label: "Proceed with caution", value: "warn1" },
						{ id: "warn2", label: "Delete all data", value: "warn2" },
					]}
					values={[]}
					variant="warning"
					label="Warning actions"
				/>
			</div>

			<div>
				<h3 class="text-lg font-medium mb-4">Destructive Variant</h3>
				<CheckboxGroup
					options={[
						{ id: "del1", label: "Delete account", value: "del1" },
						{ id: "del2", label: "Remove all files", value: "del2" },
					]}
					values={[]}
					variant="destructive"
					label="Destructive actions"
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
			code={sizesAndVariantsDocs}
		/>
	</Card>

	<!-- 6. Settings Panel Example -->
	<Card variant="outline" class="p-6">
		<h2 class="text-2xl font-semibold mb-4">Settings Panel Example</h2>
		<p class="text-sm text-muted-foreground mb-4">
			A practical settings panel using checkbox groups.
		</p>

		<div class="bg-card p-6 rounded-lg border space-y-4">
			<CheckboxGroup
				options={settingsOptions}
				bind:values={settingsValues}
				label="App Settings"
				description="Customize your app experience"
				checkboxSize="default"
				class="space-y-4"
			/>

			<div class="pt-4 border-t">
				<h4 class="font-medium mb-2">Current Settings:</h4>
				<div class="text-sm text-muted-foreground">
					{#if settingsValues.length > 0}
						<ul class="space-y-1">
							{#each settingsValues as setting}
								<li>• {settingsOptions.find(opt => opt.value === setting)?.label}</li>
							{/each}
						</ul>
					{:else}
						No settings enabled
					{/if}
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
			code={settingsPanelDocs}
		/>
	</Card>

	<!-- 7. Required Field -->
	<Card variant="outline" class="p-6">
		<h2 class="text-2xl font-semibold mb-4">Required Field</h2>
		<p class="text-sm text-muted-foreground mb-4">
			Checkbox group marked as required with validation styling.
		</p>

		<div class="space-y-4">
			<CheckboxGroup
				options={[
					{ id: "terms", label: "I accept the terms and conditions", value: "terms" },
					{ id: "privacy", label: "I accept the privacy policy", value: "privacy" },
				]}
				values={[]}
				label="Legal Agreement"
				description="You must accept both agreements to continue"
				required={true}
				variant="destructive"
			/>
		</div>
		<br />
		<CodeBlock
			title="Code"
			language="Svelte"
			showLineNumbers
			collapsible
			maxHeight="250px"
			variant="default"
			code={requiredFieldDocs}
		/>
	</Card>

	<!-- 8. Error States -->
	<Card variant="outline" class="p-6">
		<h2 class="text-2xl font-semibold mb-4">Error States</h2>
		<p class="text-sm text-muted-foreground mb-4">
			Checkbox groups with error indicators and validation feedback.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div>
				<h3 class="text-lg font-medium mb-4">Simple Error State</h3>
				<CheckboxGroup
					options={[
						{ id: "e1", label: "Option 1", value: "e1" },
						{ id: "e2", label: "Option 2", value: "e2" },
						{ id: "e3", label: "Option 3", value: "e3" },
					]}
					bind:values={errorValues}
					label="Select at least one option"
					description="This field is required"
					error={customError}
					required
				/>
				<button
					class="mt-2 text-sm text-primary underline"
					onclick={() => customError = !customError}
				>
					Toggle error state
				</button>
			</div>

			<div>
				<h3 class="text-lg font-medium mb-4">Conditional Error (Required)</h3>
				<CheckboxGroup
					options={[
						{ id: "terms2", label: "I agree to the terms", value: "terms2" },
						{ id: "privacy2", label: "I agree to the privacy policy", value: "privacy2" },
					]}
					bind:values={termsValues}
					label="Required Agreements"
					description="You must accept at least one agreement"
					error={termsError}
					required
				/>
				<p class="mt-2 text-sm text-muted-foreground">
					{termsError ? "❌ Please select at least one option" : "✓ Valid"}
				</p>
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

	<!-- 9. With Field Component -->
	<Card variant="outline" class="p-6">
		<h2 class="text-2xl font-semibold mb-4">With Field Component</h2>
		<p class="text-sm text-muted-foreground mb-4">
			Checkbox groups wrapped in Field for labels, descriptions, and error handling.
		</p>

		<div class="space-y-6">
			<Field
				label="Skills Selection"
				description="Select all technologies you're proficient in"
				required
			>
				<CheckboxGroup
					options={skillsOptions}
					bind:values={skillsValues}
					checkboxSize="lg"
				/>
			</Field>

			<Field
				label="Notification Preferences"
				error={preferencesValues.length === 0 ? "Please select at least one notification method" : undefined}
				required
			>
				<CheckboxGroup
					options={preferencesOptions}
					bind:values={preferencesValues}
					orientation="horizontal"
					error={preferencesValues.length === 0}
				/>
			</Field>
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

	<!-- 10. Disabled State -->
	<Card variant="outline" class="p-6">
		<h2 class="text-2xl font-semibold mb-4">Disabled State</h2>
		<p class="text-sm text-muted-foreground mb-4">
			Checkbox group in a fully disabled state.
		</p>

		<div class="space-y-4">
			<CheckboxGroup
				options={basicOptions}
				values={["option1"]}
				label="Disabled Group"
				description="This entire group is disabled"
				disabled={true}
			/>
		</div>
		<br />
		<CodeBlock
			title="Code"
			language="Svelte"
			showLineNumbers
			collapsible
			maxHeight="250px"
			variant="default"
			code={disabledStateDocs}
		/>
	</Card>

	</div>
</div>
