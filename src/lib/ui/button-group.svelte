<script lang="ts">
	import {
		basicGroupsDocs,
		withTextLabelsDocs,
		withSeparatorsDocs,
		verticalOrientationDocs,
		complexExamplesDocs,
		mixedVariantsDocs,
	} from "$lib/code-blocks/button-group";
	import {
		Button,
		Badge,
		Card,
		CodeBlock,
		ButtonGroupPrimitives,
	} from "@kareyes/aether";

	const { ButtonGroup, ButtonGroupText, ButtonGroupSeparator } =
		ButtonGroupPrimitives;
	import PreviewContainer from "../components/preview-container.svelte";
</script>

<svelte:head>
	<title>Button Group Demo - Aether UI</title>
</svelte:head>

<div class="container mx-auto p-6 max-w-6xl">
	<!-- <div class="mb-8">
		<h1 class="text-3xl font-bold mb-2">Button Group Component</h1>
		<p class="text-muted-foreground">
			Demonstration of the ButtonGroup component with variants, orientations, and different combinations.
		</p>
	</div> -->

	<div class="space-y-12">
		<!-- Basic Examples -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Basic Button Groups</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Simple button group with different variants
			</p>
			<PreviewContainer>
				<div class="space-y-4">
					<div>
						<h3 class="text-lg font-medium mb-2">
							Default (Background Variant)
						</h3>
						<ButtonGroup variant="bg">
							<Button variant="outline">First</Button>
							<Button variant="outline">Second</Button>
							<Button variant="outline">Third</Button>
						</ButtonGroup>
					</div>

					<div>
						<h3 class="text-lg font-medium mb-2">Ghost Variant</h3>

						<ButtonGroup variant="ghost">
							<Button variant="ghost">Copy</Button>
							<Button variant="ghost">Paste</Button>
							<Button variant="ghost">Cut</Button>
						</ButtonGroup>
					</div>
				</div>
			</PreviewContainer>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={basicGroupsDocs}
			/>
		</Card>

		<!-- With Text Labels -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">With Text Labels</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Button groups can include text labels for context
			</p>
			<PreviewContainer>
				<div class="space-y-4">
					<div>
						<h3 class="text-lg font-medium mb-2">
							Toolbar with Label (Background)
						</h3>
						<ButtonGroup variant="bg">
							<ButtonGroupText variant="bg">
								<Badge variant="secondary" size="sm"
									>Tools</Badge
								>
							</ButtonGroupText>
							<Button variant="outline" size="sm">Settings</Button
							>
							<Button variant="outline" size="sm"
								>Analytics</Button
							>
							<Button variant="outline" size="sm">Search</Button>
						</ButtonGroup>
					</div>

					<div>
						<h3 class="text-lg font-medium mb-2">
							Actions with Label (Ghost)
						</h3>

						<ButtonGroup variant="ghost">
							<ButtonGroupText variant="ghost">
								Actions
							</ButtonGroupText>
							<Button variant="ghost" size="sm">Save</Button>
							<Button variant="ghost" size="sm">Export</Button>
							<Button variant="ghost" size="sm">Share</Button>
						</ButtonGroup>
					</div>
				</div>
			</PreviewContainer>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={withTextLabelsDocs}
			/>
		</Card>

		<!-- With Separators -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">With Separators</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Use separators to group related actions
			</p>
			<PreviewContainer>
				<div class="space-y-4">
					<div>
						<h3 class="text-lg font-medium mb-2">
							File Menu Style
						</h3>
						<ButtonGroup variant="bg">
							<Button variant="outline">New</Button>
							<Button variant="outline">Open</Button>
							<ButtonGroupSeparator />
							<Button variant="outline">Save</Button>
							<Button variant="outline">Save As</Button>
							<ButtonGroupSeparator />
							<Button variant="outline">Print</Button>
						</ButtonGroup>
					</div>

					<div>
						<h3 class="text-lg font-medium mb-2">
							Text Formatting Toolbar
						</h3>
						<ButtonGroup variant="bg">
							<ButtonGroupText variant="bg"
								>Format</ButtonGroupText
							>
							<Button variant="outline" size="sm"
								><strong>B</strong></Button
							>
							<Button variant="outline" size="sm"
								><em>I</em></Button
							>
							<Button variant="outline" size="sm"><u>U</u></Button
							>
							<ButtonGroupSeparator />
							<Button variant="outline" size="sm">Left</Button>
							<Button variant="outline" size="sm">Center</Button>
							<Button variant="outline" size="sm">Right</Button>
						</ButtonGroup>
					</div>
				</div>
			</PreviewContainer>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={withSeparatorsDocs}
			/>
		</Card>

		<!-- Vertical Orientation -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Vertical Orientation</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Button groups can be displayed vertically
			</p>
			<PreviewContainer>
				<div class="flex gap-8">
					<div>
						<h3 class="text-lg font-medium mb-2">
							Navigation Menu (Background)
						</h3>
						<ButtonGroup orientation="vertical" variant="bg">
							<Button variant="outline">Dashboard</Button>
							<Button variant="outline">Projects</Button>
							<Button variant="outline">Tasks</Button>
							<Button variant="outline">Settings</Button>
						</ButtonGroup>
					</div>

					<div>
						<h3 class="text-lg font-medium mb-2">
							Sidebar Actions (Ghost)
						</h3>
						<ButtonGroup orientation="vertical" variant="ghost">
							<ButtonGroupText variant="ghost"
								>Quick Actions</ButtonGroupText
							>
							<Button variant="ghost">New Note</Button>
							<Button variant="ghost">New Folder</Button>
							<Button variant="ghost">Add Link</Button>
						</ButtonGroup>
					</div>
				</div>
			</PreviewContainer>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={verticalOrientationDocs}
			/>
		</Card>

		<!-- Complex Examples -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Complex Examples</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Advanced button group configurations
			</p>
			<PreviewContainer>
				<div class="space-y-4">
					<div>
						<h3 class="text-lg font-medium mb-2">Editor Toolbar</h3>
						<div class="flex flex-wrap gap-4">
							<ButtonGroup variant="bg">
								<ButtonGroupText variant="bg"
									>File</ButtonGroupText
								>
								<Button variant="outline" size="sm">New</Button>
								<Button variant="outline" size="sm">Open</Button
								>
								<Button variant="outline" size="sm">Save</Button
								>
							</ButtonGroup>

							<ButtonGroup variant="bg">
								<ButtonGroupText variant="bg"
									>Edit</ButtonGroupText
								>
								<Button variant="outline" size="sm">Undo</Button
								>
								<Button variant="outline" size="sm">Redo</Button
								>
								<ButtonGroupSeparator />
								<Button variant="outline" size="sm">Cut</Button>
								<Button variant="outline" size="sm">Copy</Button
								>
								<Button variant="outline" size="sm"
									>Paste</Button
								>
							</ButtonGroup>
						</div>
					</div>

					<div>
						<h3 class="text-lg font-medium mb-2">
							Media Player Controls
						</h3>
						<ButtonGroup variant="ghost">
							<Button variant="ghost">⏮️</Button>
							<Button variant="ghost">⏯️</Button>
							<Button variant="ghost">⏭️</Button>
							<ButtonGroupSeparator />
							<Button variant="ghost">🔀</Button>
							<Button variant="ghost">🔁</Button>
							<ButtonGroupSeparator />
							<ButtonGroupText variant="ghost"
								>Volume</ButtonGroupText
							>
							<Button variant="ghost" size="sm">🔊</Button>
						</ButtonGroup>
					</div>

					<div>
						<h3 class="text-lg font-medium mb-2">Status Actions</h3>
						<ButtonGroup variant="bg">
							<ButtonGroupText variant="bg">
								<Badge variant="flat" color="green"
									>Online</Badge
								>
							</ButtonGroupText>
							<Button variant="outline" size="sm"
								>View Profile</Button
							>
							<Button variant="outline" size="sm"
								>Edit Status</Button
							>
							<Button variant="outline" size="sm">Settings</Button
							>
						</ButtonGroup>
					</div>
				</div>
			</PreviewContainer>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={complexExamplesDocs}
			/>
		</Card>

		<!-- Mixed Button Variants -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Mixed Button Variants</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Combine different button styles within a group
			</p>
			<PreviewContainer>
				<div class="space-y-4">
					<div>
						<h3 class="text-lg font-medium mb-2">
							Call-to-Action Group
						</h3>
						<ButtonGroup variant="bg">
							<Button variant="default">Get Started</Button>
							<Button variant="outline">Learn More</Button>
							<Button variant="ghost">Skip</Button>
						</ButtonGroup>
					</div>

					<div>
						<h3 class="text-lg font-medium mb-2">Form Actions</h3>
						<ButtonGroup variant="bg">
							<ButtonGroupText variant="bg"
								>Actions</ButtonGroupText
							>
							<Button variant="default">Submit</Button>
							<Button variant="outline">Save Draft</Button>
							<Button variant="ghost">Cancel</Button>
						</ButtonGroup>
					</div>
				</div>
			</PreviewContainer>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={mixedVariantsDocs}
			/>
		</Card>
	</div>
</div>
