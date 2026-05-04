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
	import {
		Scissors,
		Copy,
		Clipboard,
		Bold,
		Italic,
		Underline,
		AlignLeft,
		AlignCenter,
		AlignRight,
		Strikethrough,
		SkipBack,
		Play,
		SkipForward,
		Shuffle,
		Repeat,
		FilePlus,
		FolderOpen,
		Save,
		Undo2,
		Redo2,
	} from "@kareyes/aether/icons";

	const { ButtonGroup, ButtonGroupText, ButtonGroupSeparator } =
		ButtonGroupPrimitives;
	import PreviewContainer from "../components/preview-container.svelte";
</script>

<svelte:head>
	<title>Button Group Demo - Aether UI</title>
</svelte:head>

<div class="container mx-auto p-6 max-w-6xl">
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
						<p class="text-sm font-medium mb-2">Background</p>
						<ButtonGroup variant="bg">
							<Button variant="outline">First</Button>
							<Button variant="outline">Second</Button>
							<Button variant="outline">Third</Button>
						</ButtonGroup>
					</div>

					<div>
						<p class="text-sm font-medium mb-2">Ghost</p>
						<ButtonGroup variant="ghost">
							<Button variant="ghost" size="sm">
								<Scissors class="mr-1.5 size-3.5" /> Cut
							</Button>
							<Button variant="ghost" size="sm">
								<Copy class="mr-1.5 size-3.5" /> Copy
							</Button>
							<Button variant="ghost" size="sm">
								<Clipboard class="mr-1.5 size-3.5" /> Paste
							</Button>
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
				Button groups can include text labels or badge labels for context
			</p>
			<PreviewContainer>
				<div class="space-y-4">
					<div>
						<p class="text-sm font-medium mb-2">Badge label</p>
						<ButtonGroup variant="bg">
							<ButtonGroupText variant="bg">
								<Badge variant="secondary" size="sm">Filter</Badge>
							</ButtonGroupText>
							<Button variant="outline" size="sm">All</Button>
							<Button variant="outline" size="sm">Active</Button>
							<Button variant="outline" size="sm">Archived</Button>
						</ButtonGroup>
					</div>

					<div>
						<p class="text-sm font-medium mb-2">Text label</p>
						<ButtonGroup variant="ghost">
							<ButtonGroupText variant="ghost">Sort by</ButtonGroupText>
							<Button variant="ghost" size="sm">Name</Button>
							<Button variant="ghost" size="sm">Date</Button>
							<Button variant="ghost" size="sm">Size</Button>
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
						<p class="text-sm font-medium mb-2">File operations</p>
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
						<p class="text-sm font-medium mb-2">Formatting toolbar</p>
						<ButtonGroup variant="bg">
							<ButtonGroupText variant="bg">Format</ButtonGroupText>
							<Button variant="outline" size="icon"><Bold class="size-3.5" /></Button>
							<Button variant="outline" size="icon"><Italic class="size-3.5" /></Button>
							<Button variant="outline" size="icon"><Underline class="size-3.5" /></Button>
							<ButtonGroupSeparator />
							<Button variant="outline" size="icon"><AlignLeft class="size-3.5" /></Button>
							<Button variant="outline" size="icon"><AlignCenter class="size-3.5" /></Button>
							<Button variant="outline" size="icon"><AlignRight class="size-3.5" /></Button>
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
						<p class="text-sm font-medium mb-2">Navigation</p>
						<ButtonGroup orientation="vertical" variant="bg">
							<Button variant="outline">Dashboard</Button>
							<Button variant="outline">Projects</Button>
							<Button variant="outline">Tasks</Button>
							<Button variant="outline">Settings</Button>
						</ButtonGroup>
					</div>

					<div>
						<p class="text-sm font-medium mb-2">Sidebar actions</p>
						<ButtonGroup orientation="vertical" variant="ghost">
							<ButtonGroupText variant="ghost">Quick Actions</ButtonGroupText>
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

		<!-- Icon Buttons -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Icon Buttons</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Icon-only buttons using the <code>icon</code> prop with <code>size="icon"</code>
			</p>
			<PreviewContainer>
				<div class="space-y-4">
					<div>
						<p class="text-sm font-medium mb-2">Text formatting</p>
						<ButtonGroup variant="bg">
							<Button variant="outline" size="icon" icon={Bold} />
							<Button variant="outline" size="icon" icon={Italic} />
							<Button variant="outline" size="icon" icon={Underline} />
							<Button variant="outline" size="icon" icon={Strikethrough} />
							<ButtonGroupSeparator />
							<Button variant="outline" size="icon" icon={AlignLeft} />
							<Button variant="outline" size="icon" icon={AlignCenter} />
							<Button variant="outline" size="icon" icon={AlignRight} />
						</ButtonGroup>
					</div>

					<div>
						<p class="text-sm font-medium mb-2">Media player</p>
						<ButtonGroup variant="ghost">
							<Button variant="ghost" size="icon" icon={SkipBack} />
							<Button variant="ghost" size="icon" icon={Play} />
							<Button variant="ghost" size="icon" icon={SkipForward} />
							<ButtonGroupSeparator />
							<Button variant="ghost" size="icon" icon={Shuffle} />
							<Button variant="ghost" size="icon" icon={Repeat} />
						</ButtonGroup>
					</div>

					<div>
						<p class="text-sm font-medium mb-2">File toolbar</p>
						<ButtonGroup variant="bg">
							<Button variant="outline" size="icon" icon={FilePlus} />
							<Button variant="outline" size="icon" icon={FolderOpen} />
							<Button variant="outline" size="icon" icon={Save} />
							<ButtonGroupSeparator />
							<Button variant="outline" size="icon" icon={Undo2} />
							<Button variant="outline" size="icon" icon={Redo2} />
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

		<!-- Sizes -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Sizes</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Button groups inherit the size of their child buttons
			</p>
			<PreviewContainer>
				<div class="space-y-4">
					<div>
						<p class="text-sm font-medium mb-2">Small</p>
						<ButtonGroup variant="bg">
							<Button variant="outline" size="sm">First</Button>
							<Button variant="outline" size="sm">Second</Button>
							<Button variant="outline" size="sm">Third</Button>
						</ButtonGroup>
					</div>

					<div>
						<p class="text-sm font-medium mb-2">Default</p>
						<ButtonGroup variant="bg">
							<Button variant="outline">First</Button>
							<Button variant="outline">Second</Button>
							<Button variant="outline">Third</Button>
						</ButtonGroup>
					</div>

					<div>
						<p class="text-sm font-medium mb-2">Large</p>
						<ButtonGroup variant="bg">
							<Button variant="outline" size="lg">First</Button>
							<Button variant="outline" size="lg">Second</Button>
							<Button variant="outline" size="lg">Third</Button>
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
