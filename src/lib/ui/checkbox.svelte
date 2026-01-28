<script lang="ts">
	import { Checkbox, Field, FieldPrimitives, Card, CodeBlock } from "@kareyes/aether";
	import {
		basicUsageDocs,
		sizesDocs,
		variantsDocs,
		lineThroughDocs,
		indeterminateDocs,
		todoListDocs,
		errorStatesDocs,
		withFieldDocs,
		disabledStatesDocs
	} from "$lib/code-blocks/checkbox";

	let basicChecked = $state(false);
	let withLabelChecked = $state(false);
	let withDescriptionChecked = $state(false);
	let lineThroughChecked = $state(true);
	let indeterminateState = $state(false);

	// Size examples
	let smallChecked = $state(false);
	let defaultChecked = $state(false);
	let largeChecked = $state(false);
	let xlChecked = $state(false);

	// Variant examples
	let destructiveChecked = $state(false);
	let successChecked = $state(false);
	let warningChecked = $state(false);

	// Todo list example
	let todos = $state([
		{ id: 1, text: "Complete project setup", completed: true },
		{ id: 2, text: "Design components", completed: true },
		{ id: 3, text: "Implement checkbox variants", completed: false },
		{ id: 4, text: "Write documentation", completed: false },
		{ id: 5, text: "Test in different browsers", completed: false },
	]);
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<!-- <div class="mb-8">
		<h1 class="text-3xl font-bold mb-2">Checkbox Component</h1>
		<p class="text-muted-foreground">Enhanced checkbox component with variants, sizes, and interactive features.</p>
	</div> -->

	<div class="space-y-12">
		<!-- Basic Usage -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
			<div class="space-y-4">
				<Checkbox bind:checked={basicChecked} />
				<Checkbox
					bind:checked={withLabelChecked}
					label="Accept terms and conditions"
				/>
				<Checkbox
					bind:checked={withDescriptionChecked}
					label="Enable notifications"
					description="Get notified about updates and new features"
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
				code={basicUsageDocs}
			/>
		</Card>

		<!-- Sizes -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Sizes</h2>
			<div class="flex items-center gap-6">
				<Checkbox
					bind:checked={smallChecked}
					size="sm"
					label="Small"
				/>
				<Checkbox
					bind:checked={defaultChecked}
					size="default"
					label="Default"
				/>
				<Checkbox
					bind:checked={largeChecked}
					size="lg"
					label="Large"
				/>
				<Checkbox
					bind:checked={xlChecked}
					size="xl"
					label="Extra Large"
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
				code={sizesDocs}
			/>
		</Card>

		<!-- Variants -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Variants</h2>
			<div class="space-y-4">
				<Checkbox
					bind:checked={destructiveChecked}
					variant="destructive"
					label="Delete all data"
					description="This action cannot be undone"
				/>
				<Checkbox
					bind:checked={successChecked}
					variant="success"
					label="Mark as completed"
					description="This will mark the task as done"
				/>
				<Checkbox
					bind:checked={warningChecked}
					variant="warning"
					label="Proceed with caution"
					description="This action requires attention"
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
				code={variantsDocs}
			/>
		</Card>

		<!-- Line Through Feature -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Line Through Feature</h2>
			<div class="space-y-4">
				<Checkbox
					bind:checked={lineThroughChecked}
					lineThrough={true}
					label="Completed task with line-through"
					description="This text gets crossed out when checked"
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
				code={lineThroughDocs}
			/>
		</Card>

		<!-- Indeterminate State -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Indeterminate State</h2>
			<div class="space-y-4">
				<Checkbox
					bind:indeterminate={indeterminateState}
					label="Partially selected"
					description="This checkbox is in an indeterminate state"
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
				code={indeterminateDocs}
			/>
		</Card>

		<!-- Todo List Example -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Todo List Example</h2>
			<div class="space-y-3 bg-card p-6 rounded-lg border">
				{#each todos as todo (todo.id)}
					<Checkbox
						bind:checked={todo.completed}
						label={todo.text}
						lineThrough={true}
						size="default"
						class="w-full"
					/>
				{/each}
			</div>

			<div class="text-sm text-muted-foreground mt-4">
				Completed: {todos.filter(t => t.completed).length} / {todos.length}
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

		<!-- Error States -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Error States</h2>
			<div class="space-y-4">
				<Checkbox
					error={true}
					label="Checkbox with Error"
					description="This checkbox must be checked"
					onError={(err) => console.log('Error state:', err)}
				/>
				<Checkbox
					variant="destructive"
					error={true}
					checked={true}
					label="Error with Destructive Variant"
					description="Invalid selection detected"
				/>
				<Checkbox
					size="lg"
					error={true}
					label="Large Error Checkbox"
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
				code={errorStatesDocs}
			/>
		</Card>

		<!-- With Field Component -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">With Field Component</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Field component provides structured labels, descriptions, and error handling
			</p>

			<div class="space-y-4">
				<h3 class="text-lg font-medium">Single Checkbox with Field</h3>
				<Field
					label="Agreements"
					description="Please review and accept our policies"
					required
				>
					<Checkbox
						label="I accept the terms and conditions"
						bind:checked={withLabelChecked}
					/>
				</Field>
			</div>

			<div class="space-y-4 mt-6">
				<h3 class="text-lg font-medium">With Validation</h3>
				<Field
					label="Privacy Policy"
					description="You must accept to continue"
					required
					error={!basicChecked ? "Please accept the privacy policy" : undefined}
				>
					<Checkbox
						label="I accept the privacy policy"
						bind:checked={basicChecked}
						error={!basicChecked}
					/>
				</Field>
			</div>

			<div class="space-y-4 mt-6">
				<h3 class="text-lg font-medium">Multiple Checkboxes with Field.Set</h3>
				<FieldPrimitives.Set>
					<FieldPrimitives.Legend>Email Preferences</FieldPrimitives.Legend>
					<FieldPrimitives.Description>Choose which emails you'd like to receive</FieldPrimitives.Description>

					<FieldPrimitives.Separator />

					<FieldPrimitives.Group class="gap-4">
						<Checkbox
							label="Notifications"
							description="Receive notifications about account activity"
							variant="default"
							bind:checked={withDescriptionChecked}
						/>

						<Checkbox
							label="Marketing Emails"
							description="Get updates about new products and features"
							variant="default"
							checked={false}
						/>

						<Checkbox
							label="Product Updates"
							description="Stay informed about product improvements"
							variant="success"
							bind:checked={successChecked}
						/>
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

		<!-- Disabled States -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Disabled States</h2>
			<div class="space-y-4">
				<Checkbox
					checked={false}
					disabled
					label="Disabled unchecked"
					description="This checkbox is disabled"
				/>
				<Checkbox
					checked={true}
					disabled
					label="Disabled checked"
					description="This checkbox is disabled and checked"
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
				code={disabledStatesDocs}
			/>
		</Card>
	</div>
</div>
