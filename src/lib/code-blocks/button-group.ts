export const basicGroupsDocs = `
<script lang="ts">
	import { Button, ButtonGroupPrimitives } from "@kareyes/aether";

	const { ButtonGroup } = ButtonGroupPrimitives;
</script>

<div class="space-y-4">
	<!-- Background Variant -->
	<div>
		<h3 class="text-lg font-medium mb-2">Default (Background Variant)</h3>
		<ButtonGroup variant="bg">
			<Button variant="outline">First</Button>
			<Button variant="outline">Second</Button>
			<Button variant="outline">Third</Button>
		</ButtonGroup>
	</div>

	<!-- Ghost Variant -->
	<div>
		<h3 class="text-lg font-medium mb-2">Ghost Variant</h3>
		<ButtonGroup variant="ghost">
			<Button variant="ghost">Copy</Button>
			<Button variant="ghost">Paste</Button>
			<Button variant="ghost">Cut</Button>
		</ButtonGroup>
	</div>
</div>`;

export const withTextLabelsDocs = `
<script lang="ts">
	import { Button, Badge, ButtonGroupPrimitives } from "@kareyes/aether";

	const { ButtonGroup, ButtonGroupText } = ButtonGroupPrimitives;
</script>

<div class="space-y-4">
	<!-- Toolbar with Label (Background) -->
	<div>
		<h3 class="text-lg font-medium mb-2">Toolbar with Label (Background)</h3>
		<ButtonGroup variant="bg">
			<ButtonGroupText variant="bg">
				<Badge variant="secondary" size="sm">Tools</Badge>
			</ButtonGroupText>
			<Button variant="outline" size="sm">Settings</Button>
			<Button variant="outline" size="sm">Analytics</Button>
			<Button variant="outline" size="sm">Search</Button>
		</ButtonGroup>
	</div>

	<!-- Actions with Label (Ghost) -->
	<div>
		<h3 class="text-lg font-medium mb-2">Actions with Label (Ghost)</h3>
		<ButtonGroup variant="ghost">
			<ButtonGroupText variant="ghost">Actions</ButtonGroupText>
			<Button variant="ghost" size="sm">Save</Button>
			<Button variant="ghost" size="sm">Export</Button>
			<Button variant="ghost" size="sm">Share</Button>
		</ButtonGroup>
	</div>
</div>`;

export const withSeparatorsDocs = `
<script lang="ts">
	import { Button, ButtonGroupPrimitives } from "@kareyes/aether";

	const { ButtonGroup, ButtonGroupText, ButtonGroupSeparator } = ButtonGroupPrimitives;
</script>

<div class="space-y-4">
	<!-- File Menu Style -->
	<div>
		<h3 class="text-lg font-medium mb-2">File Menu Style</h3>
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

	<!-- Text Formatting Toolbar -->
	<div>
		<h3 class="text-lg font-medium mb-2">Text Formatting Toolbar</h3>
		<ButtonGroup variant="bg">
			<ButtonGroupText variant="bg">Format</ButtonGroupText>
			<Button variant="outline" size="sm"><strong>B</strong></Button>
			<Button variant="outline" size="sm"><em>I</em></Button>
			<Button variant="outline" size="sm"><u>U</u></Button>
			<ButtonGroupSeparator />
			<Button variant="outline" size="sm">Left</Button>
			<Button variant="outline" size="sm">Center</Button>
			<Button variant="outline" size="sm">Right</Button>
		</ButtonGroup>
	</div>
</div>`;

export const verticalOrientationDocs = `
<script lang="ts">
	import { Button, ButtonGroupPrimitives } from "@kareyes/aether";

	const { ButtonGroup, ButtonGroupText } = ButtonGroupPrimitives;
</script>

<div class="flex gap-8">
	<!-- Navigation Menu (Background) -->
	<div>
		<h3 class="text-lg font-medium mb-2">Navigation Menu (Background)</h3>
		<ButtonGroup orientation="vertical" variant="bg">
			<Button variant="outline">Dashboard</Button>
			<Button variant="outline">Projects</Button>
			<Button variant="outline">Tasks</Button>
			<Button variant="outline">Settings</Button>
		</ButtonGroup>
	</div>

	<!-- Sidebar Actions (Ghost) -->
	<div>
		<h3 class="text-lg font-medium mb-2">Sidebar Actions (Ghost)</h3>
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
	import { Button, Badge, ButtonGroupPrimitives } from "@kareyes/aether";

	const { ButtonGroup, ButtonGroupText, ButtonGroupSeparator } = ButtonGroupPrimitives;
</script>

<div class="space-y-4">
	<!-- Editor Toolbar -->
	<div>
		<h3 class="text-lg font-medium mb-2">Editor Toolbar</h3>
		<div class="flex flex-wrap gap-4">
			<ButtonGroup variant="bg">
				<ButtonGroupText variant="bg">File</ButtonGroupText>
				<Button variant="outline" size="sm">New</Button>
				<Button variant="outline" size="sm">Open</Button>
				<Button variant="outline" size="sm">Save</Button>
			</ButtonGroup>

			<ButtonGroup variant="bg">
				<ButtonGroupText variant="bg">Edit</ButtonGroupText>
				<Button variant="outline" size="sm">Undo</Button>
				<Button variant="outline" size="sm">Redo</Button>
				<ButtonGroupSeparator />
				<Button variant="outline" size="sm">Cut</Button>
				<Button variant="outline" size="sm">Copy</Button>
				<Button variant="outline" size="sm">Paste</Button>
			</ButtonGroup>
		</div>
	</div>

	<!-- Status Actions -->
	<div>
		<h3 class="text-lg font-medium mb-2">Status Actions</h3>
		<ButtonGroup variant="bg">
			<ButtonGroupText variant="bg">
				<Badge variant="flat" color="green">Online</Badge>
			</ButtonGroupText>
			<Button variant="outline" size="sm">View Profile</Button>
			<Button variant="outline" size="sm">Edit Status</Button>
			<Button variant="outline" size="sm">Settings</Button>
		</ButtonGroup>
	</div>
</div>`;

export const mixedVariantsDocs = `
<script lang="ts">
	import { Button, ButtonGroupPrimitives } from "@kareyes/aether";

	const { ButtonGroup, ButtonGroupText } = ButtonGroupPrimitives;
</script>

<div class="space-y-4">
	<!-- Call-to-Action Group -->
	<div>
		<h3 class="text-lg font-medium mb-2">Call-to-Action Group</h3>
		<ButtonGroup variant="bg">
			<Button variant="default">Get Started</Button>
			<Button variant="outline">Learn More</Button>
			<Button variant="ghost">Skip</Button>
		</ButtonGroup>
	</div>

	<!-- Form Actions -->
	<div>
		<h3 class="text-lg font-medium mb-2">Form Actions</h3>
		<ButtonGroup variant="bg">
			<ButtonGroupText variant="bg">Actions</ButtonGroupText>
			<Button variant="default">Submit</Button>
			<Button variant="outline">Save Draft</Button>
			<Button variant="ghost">Cancel</Button>
		</ButtonGroup>
	</div>
</div>`;
