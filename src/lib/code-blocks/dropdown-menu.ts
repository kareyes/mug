export const basicMenusDocs = `
<script lang="ts">
	import { DropdownMenu } from "@kareyes/aether";
	import { User, Settings, LogOut, Plus } from "@kareyes/aether/icons";

	const basicMenuItems = [
		{ label: "Profile", icon: User, onSelect: () => console.log("Profile clicked") },
		{ label: "Settings", icon: Settings, onSelect: () => console.log("Settings clicked") },
		{ type: "separator" },
		{ label: "Logout", icon: LogOut, variant: "destructive", onSelect: () => console.log("Logout clicked") },
	];
</script>

	<div class="flex flex-wrap gap-4">
		<DropdownMenu
			triggerText="User Menu"
			items={basicMenuItems}
		/>

		<DropdownMenu
			triggerText="File Actions"
			triggerVariant="default"
			items={fileMenuItems}
		/>

		<DropdownMenu
			triggerText="With Icon"
			triggerIcon={Plus}
			triggerVariant="secondary"
			items={basicMenuItems}
		/>

		<DropdownMenu
			triggerText="No Chevron"
			showChevron={false}
			items={basicMenuItems}
		/>
	</div>`;

export const interactiveMenusDocs = `
<script lang="ts">
	import { DropdownMenu } from "@kareyes/aether";

	let statusBarChecked = $state(true);
	let toolbarChecked = $state(true);
	let sidebarChecked = $state(false);
	let theme = $state("light");

	const viewMenuItems = $derived([
		{ type: "label", label: "View Options" },
		{ type: "checkbox", label: "Show Status Bar", checked: statusBarChecked, onSelect: () => statusBarChecked = !statusBarChecked },
		{ type: "checkbox", label: "Show Toolbar", checked: toolbarChecked, onSelect: () => toolbarChecked = !toolbarChecked },
		{ type: "checkbox", label: "Show Sidebar", checked: sidebarChecked, onSelect: () => sidebarChecked = !sidebarChecked },
	]);

	const themeMenuItems = $derived([
		{
			type: "radio",
			label: "Select Theme",
			value: theme,
			items: [
				{ label: "Light", value: "light" },
				{ label: "Dark", value: "dark" },
				{ label: "System", value: "system" },
			],
			onValueChange: (value) => { theme = value; },
		},
	]);
</script>

	<div class="space-y-4">
		<div class="flex flex-wrap gap-4">
			<DropdownMenu
				triggerText="View Options"
				items={viewMenuItems}
			/>
			<div class="flex items-center gap-4 text-sm text-muted-foreground">
				<span>Status Bar: {statusBarChecked ? '✓' : '✗'}</span>
				<span>Toolbar: {toolbarChecked ? '✓' : '✗'}</span>
				<span>Sidebar: {sidebarChecked ? '✓' : '✗'}</span>
			</div>
		</div>

		<div class="flex flex-wrap gap-4">
			<DropdownMenu
				triggerText={\`Theme: \${theme}\`}
				items={themeMenuItems}
			/>
			<div class="text-sm text-muted-foreground">
				Current theme: <span class="font-medium">{theme}</span>
			</div>
		</div>

		<div class="flex flex-wrap gap-4">
			<DropdownMenu
				triggerText={\`Plan: \${selectedPlan}\`}
				triggerVariant="outline"
				items={planMenuItems}
			/>
			<div class="text-sm text-muted-foreground">
				Selected plan: <span class="font-medium capitalize">{selectedPlan}</span>
			</div>
		</div>
	</div>`;

export const groupedMenuDocs = `
<script lang="ts">
	import { DropdownMenu } from "@kareyes/aether";
	import { User, Settings, Bell, Edit, Copy, Trash2, HelpCircle, LogOut } from "@kareyes/aether/icons";

	const groupedMenuItems = [
		{
			label: "Account",
			items: [
				{ label: "Profile", icon: User, onSelect: () => console.log("Profile") },
				{ label: "Settings", icon: Settings, onSelect: () => console.log("Settings") },
				{ label: "Notifications", icon: Bell, onSelect: () => console.log("Notifications") },
			],
		},
		{ type: "separator" },
		{
			label: "Actions",
			items: [
				{ label: "Edit", icon: Edit, onSelect: () => console.log("Edit") },
				{ label: "Copy", icon: Copy, onSelect: () => console.log("Copy") },
				{ label: "Delete", icon: Trash2, variant: "destructive", onSelect: () => console.log("Delete") },
			],
		},
		{ type: "separator" },
		{
			items: [
				{ label: "Help", icon: HelpCircle, onSelect: () => console.log("Help") },
				{ label: "Logout", icon: LogOut, variant: "destructive", onSelect: () => console.log("Logout") },
			],
		},
	];
</script>

<DropdownMenu triggerText="Actions" triggerVariant="outline" items={groupedMenuItems} />`;

export const complexMenuDocs = `
<script lang="ts">
	import { DropdownMenu } from "@kareyes/aether";
	import { FileText, Edit2, Share2, Trash2, Copy, Download, Mail, MessageSquare, Settings } from "@kareyes/aether/icons";


	const complexMenuItems = $derived([
		{
			label: "My Account",
			items: [
				{ label: "Profile", icon: User, shortcut: "⌘P", onSelect: () => console.log("Profile") },
				{ label: "Settings", icon: Settings, shortcut: "⌘,", onSelect: () => console.log("Settings") },
			],
		},
		{ type: "separator" as const },
		{
			type: "radio" as const,
			label: "Theme",
			value: theme,
			items: [
				{ label: "Light", value: "light" },
				{ label: "Dark", value: "dark" },
				{ label: "System", value: "system" },
			],
			onValueChange: (value: string) => { theme = value; },
		},
		{ type: "separator" as const },
		{
			label: "View",
			items: [
				{ type: "checkbox" as const, label: "Status Bar", checked: statusBarChecked, onSelect: () => statusBarChecked = !statusBarChecked },
				{ type: "checkbox" as const, label: "Toolbar", checked: toolbarChecked, onSelect: () => toolbarChecked = !toolbarChecked },
			],
		},
		{ type: "separator" as const },
		{
			items: [
				{ label: "Help", icon: HelpCircle, shortcut: "⌘?", onSelect: () => console.log("Help") },
				{ label: "Logout", icon: LogOut, variant: "destructive" as const, shortcut: "⌘Q", onSelect: () => console.log("Logout") },
			],
		},
	]);
</script>

	<div class="space-y-4">
		<DropdownMenu
			triggerText="Account Settings"
			triggerVariant="default"
			items={complexMenuItems}
		/>
		<div class="grid grid-cols-2 gap-4 max-w-md">
			<div class="p-3 rounded-md bg-muted/50">
				<div class="text-xs font-medium text-muted-foreground mb-1">Theme</div>
				<div class="text-sm font-medium">{theme}</div>
			</div>
			<div class="p-3 rounded-md bg-muted/50">
				<div class="text-xs font-medium text-muted-foreground mb-1">View Options</div>
				<div class="text-xs space-y-0.5">
					<div>Status Bar: {statusBarChecked ? '✓' : '✗'}</div>
					<div>Toolbar: {toolbarChecked ? '✓' : '✗'}</div>
				</div>
			</div>
		</div>
	</div>`;	

export const triggerVariantsDocs = `
<script lang="ts">
	import { DropdownMenu } from "@kareyes/aether";
	import { User, Settings, LogOut } from "@kareyes/aether/icons";

	const items = [
		{ label: "Profile", icon: User, onSelect: () => {} },
		{ label: "Settings", icon: Settings, onSelect: () => {} },
		{ type: "separator" },
		{ label: "Logout", icon: LogOut, variant: "destructive", onSelect: () => {} },
	];
</script>

<div class="flex flex-wrap gap-4">
	<DropdownMenu triggerText="Default" triggerVariant="default" items={items} />
	<DropdownMenu triggerText="Secondary" triggerVariant="secondary" items={items} />
	<DropdownMenu triggerText="Outline" triggerVariant="outline" items={items} />
	<DropdownMenu triggerText="Ghost" triggerVariant="ghost" items={items} />
	<DropdownMenu triggerText="Destructive" triggerVariant="destructive" items={items} />
</div>`;

export const sizesDocs = `
<script lang="ts">
	import { DropdownMenu } from "@kareyes/aether";

	const items = [
		{ label: "Profile", onSelect: () => {} },
		{ label: "Settings", onSelect: () => {} },
	];
</script>

<div class="flex flex-wrap items-center gap-4">
	<DropdownMenu triggerText="Small" triggerSize="sm" items={items} />
	<DropdownMenu triggerText="Default" triggerSize="default" items={items} />
	<DropdownMenu triggerText="Large" triggerSize="lg" items={items} />
</div>`;

export const alignmentDocs = `
<script lang="ts">
	import { DropdownMenu } from "@kareyes/aether";

	const items = [
		{ label: "Profile", onSelect: () => {} },
		{ label: "Settings", onSelect: () => {} },
	];
</script>

<div class="flex flex-wrap gap-4">
	<DropdownMenu triggerText="Align Start" align="start" items={items} />
	<DropdownMenu triggerText="Align Center" align="center" items={items} />
	<DropdownMenu triggerText="Align End" align="end" items={items} />
</div>`;

export const submenuDocs = `
<script lang="ts">
	import { DropdownMenu } from "@kareyes/aether";
	import { User, Share2, Copy, Download, Mail, MessageSquare, Settings } from "@kareyes/aether/icons";

	const shareMenuItems = [
		{ label: "Profile", icon: User, onSelect: () => console.log("Profile") },
		{
			type: "submenu" as const,
			label: "Share",
			icon: Share2,
			items: [
				{ label: "Copy Link", icon: Copy, onSelect: () => console.log("Copy Link") },
				{ label: "Download", icon: Download, onSelect: () => console.log("Download") },
				{ type: "separator" as const },
				{ label: "Email", icon: Mail, onSelect: () => console.log("Email") },
				{ label: "Message", icon: MessageSquare, onSelect: () => console.log("Message") },
			]
		},
		{ type: "separator" as const },
		{ label: "Settings", icon: Settings, onSelect: () => console.log("Settings") },
	];

	const fileMenuWithSubmenu = [
		{ label: "New File", icon: Plus, shortcut: "⌘N", onSelect: () => console.log("New file") },
		{
			type: "submenu" as const,
			label: "New From Template",
			icon: FileText,
			items: [
				{ label: "Text Document", icon: FileText, onSelect: () => console.log("Text") },
				{ label: "Image", icon: Image, onSelect: () => console.log("Image") },
				{ label: "Video", icon: Video, onSelect: () => console.log("Video") },
				{ label: "Audio", icon: Music, onSelect: () => console.log("Audio") },
			]
		},
		{ type: "separator" as const },
		{ label: "Upload", icon: Upload, shortcut: "⌘U", onSelect: () => console.log("Upload") },
		{ label: "Download", icon: Download, shortcut: "⌘D", onSelect: () => console.log("Download") },
		{ type: "separator" as const },
		{ label: "Delete", icon: Trash2, variant: "destructive" as const, shortcut: "⌘⌫", onSelect: () => console.log("Delete") },
	];

	const nestedSubmenuItems = [
		{ label: "Home", onSelect: () => console.log("Home") },
		{
			type: "submenu" as const,
			label: "File",
			icon: Folder,
			items: [
				{ label: "New", icon: Plus, shortcut: "⌘N", onSelect: () => console.log("New") },
				{
					type: "submenu" as const,
					label: "Open Recent",
					items: [
						{ label: "Document 1.txt", icon: File, onSelect: () => console.log("Doc 1") },
						{ label: "Document 2.txt", icon: File, onSelect: () => console.log("Doc 2") },
						{ label: "Document 3.txt", icon: File, onSelect: () => console.log("Doc 3") },
					]
				},
				{ type: "separator" as const },
				{ label: "Save", shortcut: "⌘S", onSelect: () => console.log("Save") },
			]
		},
		{ type: "separator" as const },
		{ label: "Exit", variant: "destructive" as const, onSelect: () => console.log("Exit") },
	];
</script>
<div class="flex flex-wrap gap-4">
	<DropdownMenu
		triggerText="Share Menu"
		triggerIcon={Share2}
		items={shareMenuItems}
	/>

	<DropdownMenu
		triggerText="File Menu"
		triggerVariant="outline"
		items={fileMenuWithSubmenu}
	/>

	<DropdownMenu
		triggerText="Nested Submenus"
		triggerVariant="secondary"
		items={nestedSubmenuItems}
	/>
</div>`;

export const customTriggerDocs = `
<script lang="ts">
	import { DropdownMenu, DropdownMenuPrimitives } from "@kareyes/aether";
	import { User, LogOut,  Plus, Edit, Copy, Share2, Trash2, Bell, Shield, HelpCircle } from "@kareyes/aether/icons";

	const customTriggerMenuItems = [
		{ label: "New Item", icon: Plus, shortcut: "⌘N", onSelect: () => console.log("New Item") },
		{ label: "Edit", icon: Edit, shortcut: "⌘E", onSelect: () => console.log("Edit") },
		{ label: "Duplicate", icon: Copy, shortcut: "⌘D", onSelect: () => console.log("Duplicate") },
		{ type: "separator" as const },
		{ label: "Share", icon: Share2, onSelect: () => console.log("Share") },
		{ type: "separator" as const },
		{ label: "Delete", icon: Trash2, variant: "destructive" as const, shortcut: "⌘⌫", onSelect: () => console.log("Delete") },
	];

	const labelTriggerMenuItems = [
		{ label: "My Profile", icon: User, onSelect: () => console.log("Profile") },
		{ label: "Account Settings", icon: Settings, onSelect: () => console.log("Settings") },
		{ label: "Notifications", icon: Bell, onSelect: () => console.log("Notifications") },
		{ type: "separator" as const },
		{ label: "Privacy & Security", icon: Shield, onSelect: () => console.log("Privacy") },
		{ label: "Help Center", icon: HelpCircle, onSelect: () => console.log("Help") },
		{ type: "separator" as const },
		{ label: "Sign Out", icon: LogOut, variant: "destructive" as const, onSelect: () => console.log("Sign Out") },
	];
</script>

<div class="flex flex-wrap gap-6">
	<!-- Label as Trigger -->
	<DropdownMenu items={labelTriggerMenuItems}>
		{#snippet trigger()}
			<DropdownMenuPrimitive.Trigger>
				{#snippet child({ props })}
					<div {...props} class="cursor-pointer hover:opacity-80 transition-opacity">
						<div class="flex items-center gap-2">
							<div class="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-semibold">
								JD
							</div>
							<span class="text-sm font-medium">John Doe</span>
							<ChevronDown class="size-3 text-muted-foreground" />
						</div>
					</div>
				{/snippet}
			</DropdownMenuPrimitive.Trigger>
		{/snippet}
	</DropdownMenu>

	<!-- Text Label as Trigger -->
	<DropdownMenu items={customTriggerMenuItems}>
		{#snippet trigger()}
			<DropdownMenuPrimitive.Trigger>
				{#snippet child({ props })}
					<span
						{...props}
						class="text-sm font-medium text-primary hover:underline cursor-pointer"
					>
						Actions Menu ▼
					</span>
				{/snippet}
			</DropdownMenuPrimitive.Trigger>
		{/snippet}
	</DropdownMenu>
</div>`;
