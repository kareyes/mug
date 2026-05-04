export const basicGroupsDocs = `
<script lang="ts">
	import { Button, ButtonGroupPrimitives } from "@kareyes/aether";
	import { Scissors, Copy, Clipboard } from "@kareyes/aether/icons";

	const { ButtonGroup } = ButtonGroupPrimitives;
</script>

<div class="space-y-4">
	<!-- bg variant: adds a shared background container -->
	<div>
		<p class="text-sm font-medium mb-2">Background</p>
		<ButtonGroup variant="bg">
			<Button variant="outline">First</Button>
			<Button variant="outline">Second</Button>
			<Button variant="outline">Third</Button>
		</ButtonGroup>
	</div>

	<!-- ghost variant: borderless grouped buttons -->
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
</div>`;

export const withTextLabelsDocs = `
<script lang="ts">
	import { Button, Badge, ButtonGroupPrimitives } from "@kareyes/aether";

	const { ButtonGroup, ButtonGroupText } = ButtonGroupPrimitives;
</script>

<div class="space-y-4">
	<!-- Badge label (bg variant) -->
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

	<!-- Plain text label (ghost variant) -->
	<div>
		<p class="text-sm font-medium mb-2">Text label</p>
		<ButtonGroup variant="ghost">
			<ButtonGroupText variant="ghost">Sort by</ButtonGroupText>
			<Button variant="ghost" size="sm">Name</Button>
			<Button variant="ghost" size="sm">Date</Button>
			<Button variant="ghost" size="sm">Size</Button>
		</ButtonGroup>
	</div>
</div>`;

export const withSeparatorsDocs = `
<script lang="ts">
	import { Button, ButtonGroupPrimitives } from "@kareyes/aether";
	import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "@kareyes/aether/icons";

	const { ButtonGroup, ButtonGroupText, ButtonGroupSeparator } = ButtonGroupPrimitives;
</script>

<div class="space-y-4">
	<!-- File operations -->
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

	<!-- Formatting toolbar -->
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
</div>`;

export const verticalOrientationDocs = `
<script lang="ts">
	import { Button, ButtonGroupPrimitives } from "@kareyes/aether";

	const { ButtonGroup, ButtonGroupText } = ButtonGroupPrimitives;
</script>

<div class="flex gap-8">
	<!-- Navigation menu (bg) -->
	<div>
		<p class="text-sm font-medium mb-2">Navigation</p>
		<ButtonGroup orientation="vertical" variant="bg">
			<Button variant="outline">Dashboard</Button>
			<Button variant="outline">Projects</Button>
			<Button variant="outline">Tasks</Button>
			<Button variant="outline">Settings</Button>
		</ButtonGroup>
	</div>

	<!-- Sidebar actions (ghost) -->
	<div>
		<p class="text-sm font-medium mb-2">Sidebar actions</p>
		<ButtonGroup orientation="vertical" variant="ghost">
			<ButtonGroupText variant="ghost">Quick Actions</ButtonGroupText>
			<Button variant="ghost">New Note</Button>
			<Button variant="ghost">New Folder</Button>
			<Button variant="ghost">Add Link</Button>
		</ButtonGroup>
	</div>
</div>`;

export const complexExamplesDocs = `
<script lang="ts">
	import { Button, ButtonGroupPrimitives } from "@kareyes/aether";
	import {
		Bold, Italic, Underline, Strikethrough,
		AlignLeft, AlignCenter, AlignRight,
		SkipBack, Play, SkipForward, Shuffle, Repeat,
		FilePlus, FolderOpen, Save, Undo2, Redo2
	} from "@kareyes/aether/icons";

	const { ButtonGroup, ButtonGroupSeparator } = ButtonGroupPrimitives;
</script>

<div class="space-y-4">
	<!-- Text formatting -->
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

	<!-- Media player -->
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

	<!-- File toolbar -->
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
</div>`;

export const mixedVariantsDocs = `
<script lang="ts">
	import { Button, ButtonGroupPrimitives } from "@kareyes/aether";

	const { ButtonGroup } = ButtonGroupPrimitives;
</script>

<div class="space-y-4">
	<!-- Small -->
	<div>
		<p class="text-sm font-medium mb-2">Small</p>
		<ButtonGroup variant="bg">
			<Button variant="outline" size="sm">First</Button>
			<Button variant="outline" size="sm">Second</Button>
			<Button variant="outline" size="sm">Third</Button>
		</ButtonGroup>
	</div>

	<!-- Default -->
	<div>
		<p class="text-sm font-medium mb-2">Default</p>
		<ButtonGroup variant="bg">
			<Button variant="outline">First</Button>
			<Button variant="outline">Second</Button>
			<Button variant="outline">Third</Button>
		</ButtonGroup>
	</div>

	<!-- Large -->
	<div>
		<p class="text-sm font-medium mb-2">Large</p>
		<ButtonGroup variant="bg">
			<Button variant="outline" size="lg">First</Button>
			<Button variant="outline" size="lg">Second</Button>
			<Button variant="outline" size="lg">Third</Button>
		</ButtonGroup>
	</div>
</div>`;
