<script lang="ts">
	import { Textarea, Button, Label, Card, Field, CodeBlock } from "@kareyes/aether";
	import {
		variantsDocs,
		sizesDocs,
		featuresDocs,
		formExampleDocs,
		combinedFeaturesDocs,
		textareaFieldDocs
	} from "$lib/code-blocks/textarea";

	let defaultValue = $state("");
	let outlineValue = $state("");
	let filledValue = $state("");
	let ghostValue = $state("");
	let underlineValue = $state("");
	let autoResizeValue = $state("");
	let withCountValue = $state("");
	let description = $state("");
	let formData = $state({
		name: "",
		email: "",
		message: "",
	});

	function handleSubmit() {
		console.log("Form submitted:", formData);
		alert(`Message submitted:\n\n${formData.message}`);
	}
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<!-- <div class="mb-8">
		<h1 class="text-3xl font-bold mb-2">Textarea Component</h1>
		<p class="text-muted-foreground">
			Versatile textarea with variants, sizes, auto-resize, and character counting.
		</p>
	</div> -->

	<div class="space-y-12">
		<!-- Variants Section -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Variants</h2>
			<div class="grid gap-6 md:grid-cols-2">
				<div class="space-y-2">
					<Label class="text-sm font-medium">Default</Label>
					<Textarea
						bind:value={defaultValue}
						placeholder="Default variant..."
					/>
				</div>

				<div class="space-y-2">
					<Label class="text-sm font-medium">Outline</Label>
					<Textarea
						variant="outline"
						bind:value={outlineValue}
						placeholder="Outline variant..."
					/>
				</div>

				<div class="space-y-2">
					<Label class="text-sm font-medium">Filled</Label>
					<Textarea
						variant="filled"
						bind:value={filledValue}
						placeholder="Filled variant..."
					/>
				</div>

				<div class="space-y-2">
					<Label class="text-sm font-medium">Ghost</Label>
					<Textarea
						variant="ghost"
						bind:value={ghostValue}
						placeholder="Ghost variant..."
					/>
				</div>

				<div class="space-y-2">
					<Label class="text-sm font-medium">Underline</Label>
					<Textarea
						variant="underline"
						bind:value={underlineValue}
						placeholder="Underline variant..."
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
				code={variantsDocs}
			/>
		</Card>

		<!-- Sizes Section -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Sizes</h2>
			<div class="grid gap-6">
				<div class="space-y-2">
					<Label class="text-sm font-medium">Small</Label>
					<Textarea size="sm" placeholder="Small size textarea..." />
				</div>

				<div class="space-y-2">
					<Label class="text-sm font-medium">Default</Label>
					<Textarea
						size="default"
						placeholder="Default size textarea..."
					/>
				</div>

				<div class="space-y-2">
					<Label class="text-sm font-medium">Large</Label>
					<Textarea size="lg" placeholder="Large size textarea..." />
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
				code={sizesDocs}
			/>
		</Card>

		<!-- Features Section -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Features</h2>
			<div class="grid gap-6 md:grid-cols-2">
				<div class="space-y-2">
					<Label class="text-sm font-medium">Auto-Resize (3-8 rows)</Label>
					<Textarea
						bind:value={autoResizeValue}
						autoResize
						minRows={3}
						maxRows={8}
						placeholder="Type multiple lines to see auto-resize..."
					/>
					<p class="text-xs text-muted-foreground">
						Grows from 3 to 8 rows automatically
					</p>
				</div>

				<div class="space-y-2">
					<Label class="text-sm font-medium">Character Counter (max 200)</Label>
					<Textarea
						bind:value={withCountValue}
						maxLength={200}
						showCount
						placeholder="Type to see counter..."
					/>
					<p class="text-xs text-muted-foreground">
						Shows character count in corner
					</p>
				</div>

				<div class="space-y-2">
					<Label class="text-sm font-medium">Disabled</Label>
					<Textarea disabled value="This textarea is disabled" />
				</div>

				<div class="space-y-2">
					<Label class="text-sm font-medium">Error State</Label>
					<Textarea
						error={true}
						placeholder="This field has an error..."
						onError={(err) => console.log("Error state:", err)}
					/>
					<p class="text-xs text-destructive">
						This field is required
					</p>
				</div>

				<div class="space-y-2">
					<Label class="text-sm font-medium">Error with Character Count</Label>
					<Textarea
						error={true}
						maxLength={100}
						showCount
						placeholder="Message exceeds limit..."
					/>
					<p class="text-xs text-destructive">Message is too long</p>
				</div>

				<div class="space-y-2">
					<Label class="text-sm font-medium">Resize: None</Label>
					<Textarea
						resize="none"
						placeholder="Cannot be manually resized..."
					/>
				</div>

				<div class="space-y-2">
					<Label class="text-sm font-medium">Resize: Both</Label>
					<Textarea
						resize="both"
						placeholder="Resize in any direction..."
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
				code={featuresDocs}
			/>
		</Card>

		<!-- Form Example -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Form Example</h2>
			<form class="space-y-4" on:submit|preventDefault={handleSubmit}>
				<div class="space-y-2">
					<Label for="name" class="text-sm font-medium">
						Name <span class="text-destructive">*</span>
					</Label>
					<input
						id="name"
						type="text"
						bind:value={formData.name}
						class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
						placeholder="John Doe"
						required
					/>
				</div>

				<div class="space-y-2">
					<Label for="email" class="text-sm font-medium">
						Email <span class="text-destructive">*</span>
					</Label>
					<input
						id="email"
						type="email"
						bind:value={formData.email}
						class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
						placeholder="john@example.com"
						required
					/>
				</div>

				<div class="space-y-2">
					<Label for="message" class="text-sm font-medium">
						Message <span class="text-destructive">*</span>
					</Label>
					<Textarea
						id="message"
						bind:value={formData.message}
						variant="outline"
						size="lg"
						maxLength={500}
						showCount
						autoResize
						minRows={4}
						maxRows={10}
						placeholder="Type your message here..."
						required
					/>
					<p class="text-xs text-muted-foreground">
						Your message will be sent to our support team.
					</p>
				</div>

				<Button type="submit">Submit Message</Button>
			</form>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={formExampleDocs}
			/>
		</Card>

		<!-- Combined Examples -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Combined Features</h2>
			<div class="grid gap-6 md:grid-cols-2">
				<div class="space-y-2">
					<Label class="text-sm font-medium">Small + Filled + Counter</Label>
					<Textarea
						variant="filled"
						size="sm"
						maxLength={100}
						showCount
						placeholder="Compact with counter..."
					/>
				</div>

				<div class="space-y-2">
					<Label class="text-sm font-medium">Large + Auto-Resize + Counter</Label>
					<Textarea
						variant="outline"
						size="lg"
						autoResize
						minRows={3}
						maxRows={6}
						showCount
						placeholder="Full-featured textarea..."
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
				code={combinedFeaturesDocs}
			/>
		</Card>

		<!-- Textarea with Field Component -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Textarea Variants & Features</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Different styles and features for textarea fields
			</p>

			<div class="grid gap-6 md:grid-cols-2">
				<Card>
					<Field label="Error State inside Field Textarea" error="This field has an error">
						<Textarea
							error={true}
							maxLength={100}
							showCount
							placeholder="Message exceeds limit..."
						/>
					</Field>
				</Card>

				<Card>
					<Field label="Outline Textarea">
						<Textarea
							id="textarea-outline"
							placeholder="Enter your text..."
							variant="outline"
						/>
					</Field>
				</Card>

				<Card>
					<Field
						label="With Character Counter"
						description="Maximum 200 characters"
					>
						<Textarea
							id="textarea-counter"
							bind:value={description}
							placeholder="Enter your text..."
							maxLength={200}
							showCount
						/>
					</Field>
				</Card>

				<Card>
					<Field
						label="Auto-Resize"
						description="Automatically grows with content"
					>
						<Textarea
							id="textarea-autoresize"
							placeholder="Start typing..."
							autoResize
							minRows={2}
							maxRows={6}
						/>
					</Field>
				</Card>

				<Card>
					<Field label="Vertical Resize">
						<Textarea
							id="textarea-resize-vertical"
							placeholder="Resize vertically only"
							resize="vertical"
						/>
					</Field>
				</Card>

				<Card>
					<Field label="No Resize">
						<Textarea
							id="textarea-resize-none"
							placeholder="Cannot be resized"
							resize="none"
						/>
					</Field>
				</Card>
			</div>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={textareaFieldDocs}
			/>
		</Card>
	</div>
</div>
