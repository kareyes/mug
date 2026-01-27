<script lang="ts">
	import { basicMenusDocs, interactiveMenusDocs, groupedMenuDocs, triggerVariantsDocs, sizesDocs, alignmentDocs, submenuDocs, customTriggerDocs, complexMenuDocs } from "$lib/code-blocks/dropdown-menu";
	import { DropdownMenu, DropdownMenuPrimitives as DropdownMenuPrimitive, Card, CodeBlock } from "@kareyes/aether";
	import { User, Settings, ChevronDown, LogOut, Plus, Mail, UserPlus, MessageSquare, Bell, Shield, HelpCircle, Download, Upload, Trash2, Edit, Copy, Share2, FileText, Image, Video, Music, Folder, File } from "@kareyes/aether/icons";

	let statusBarChecked = $state(true);
	let toolbarChecked = $state(true);
	let sidebarChecked = $state(false);
	let theme = $state("light");
	let selectedPlan = $state("free");

	const basicMenuItems = [
		{ label: "Profile", icon: User, onSelect: () => console.log("Profile clicked") },
		{ label: "Settings", icon: Settings, onSelect: () => console.log("Settings clicked") },
		{ type: "separator" as const },
		{ label: "Logout", icon: LogOut, variant: "destructive" as const, onSelect: () => console.log("Logout clicked") },
	];

	const fileMenuItems = [
		{ label: "New File", icon: Plus, shortcut: "⌘N", onSelect: () => console.log("New file") },
		{ label: "Upload", icon: Upload, shortcut: "⌘U", onSelect: () => console.log("Upload") },
		{ label: "Download", icon: Download, shortcut: "⌘D", onSelect: () => console.log("Download") },
		{ type: "separator" as const },
		{ label: "Delete", icon: Trash2, variant: "destructive" as const, shortcut: "⌘⌫", onSelect: () => console.log("Delete") },
	];

	const viewMenuItems = $derived([
		{ type: "label" as const, label: "View Options" },
		{ type: "checkbox" as const, label: "Show Status Bar", checked: statusBarChecked, onSelect: () => statusBarChecked = !statusBarChecked },
		{ type: "checkbox" as const, label: "Show Toolbar", checked: toolbarChecked, onSelect: () => toolbarChecked = !toolbarChecked },
		{ type: "checkbox" as const, label: "Show Sidebar", checked: sidebarChecked, onSelect: () => sidebarChecked = !sidebarChecked },
	]);

	const themeMenuItems = $derived([
		{
			type: "radio" as const,
			label: "Select Theme",
			value: theme,
			items: [
				{ label: "Light", value: "light" },
				{ label: "Dark", value: "dark" },
				{ label: "System", value: "system" },
			],
			onValueChange: (value: string) => { theme = value; console.log("Theme:", value); },
		},
	]);

	const groupedMenuItems = [
		{
			label: "Account",
			items: [
				{ label: "Profile", icon: User, onSelect: () => console.log("Profile") },
				{ label: "Settings", icon: Settings, onSelect: () => console.log("Settings") },
				{ label: "Notifications", icon: Bell, onSelect: () => console.log("Notifications") },
			],
		},
		{ type: "separator" as const },
		{
			label: "Actions",
			items: [
				{ label: "Edit", icon: Edit, onSelect: () => console.log("Edit") },
				{ label: "Copy", icon: Copy, onSelect: () => console.log("Copy") },
				{ label: "Delete", icon: Trash2, variant: "destructive" as const, onSelect: () => console.log("Delete") },
			],
		},
		{ type: "separator" as const },
		{
			items: [
				{ label: "Help", icon: HelpCircle, onSelect: () => console.log("Help") },
				{ label: "Logout", icon: LogOut, variant: "destructive" as const, onSelect: () => console.log("Logout") },
			],
		},
	];

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

	const planMenuItems = $derived([
		{
			type: "radio" as const,
			label: "Select Plan",
			value: selectedPlan,
			items: [
				{ label: "Free Plan", value: "free" },
				{ label: "Pro Plan", value: "pro" },
				{ label: "Enterprise Plan", value: "enterprise" },
			],
			onValueChange: (value: string) => { selectedPlan = value; console.log("Plan:", value); },
		},
	]);

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

<div class="container mx-auto p-6 max-w-6xl">
	<div class="mb-8">
		<h1 class="text-3xl font-bold mb-2">Dropdown Menu Component</h1>
		<p class="text-muted-foreground">
			A simplified dropdown menu component that handles common use cases with minimal code.
		</p>
	</div>

	<div class="space-y-12">
		<!-- Basic Examples -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Basic Menus</h2>
			<p class="text-sm text-muted-foreground mb-4">Simple dropdown menus with icons and shortcuts</p>
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
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={basicMenusDocs}
			/>
		</Card>

		<!-- Interactive Examples -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Interactive Menus</h2>
			<p class="text-sm text-muted-foreground mb-4">Menus with checkboxes and radio groups</p>
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
						triggerText={`Theme: ${theme}`}
						items={themeMenuItems}
					/>
					<div class="text-sm text-muted-foreground">
						Current theme: <span class="font-medium">{theme}</span>
					</div>
				</div>

				<div class="flex flex-wrap gap-4">
					<DropdownMenu
						triggerText={`Plan: ${selectedPlan}`}
						triggerVariant="outline"
						items={planMenuItems}
					/>
					<div class="text-sm text-muted-foreground">
						Selected plan: <span class="font-medium capitalize">{selectedPlan}</span>
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
				code={interactiveMenusDocs}
			/>
		</Card>

		<!-- Grouped Menu -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Grouped Menu</h2>
			<p class="text-sm text-muted-foreground mb-4">Organize menu items into labeled groups</p>
			<div>
				<DropdownMenu
					triggerText="Actions"
					triggerVariant="outline"
					items={groupedMenuItems}
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
				code={groupedMenuDocs}
			/>
		</Card>

		<!-- Complex Menu -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Complex Combined Menu</h2>
			<p class="text-sm text-muted-foreground mb-4">Combining groups, radio, checkboxes, and shortcuts</p>
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
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={complexMenuDocs}
			/>
		</Card>

		<!-- Trigger Variants -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Trigger Variants</h2>
			<p class="text-sm text-muted-foreground mb-4">Different button styles for the menu trigger</p>
			<div class="flex flex-wrap gap-4">
				<DropdownMenu triggerText="Default" triggerVariant="default" items={basicMenuItems} />
				<DropdownMenu triggerText="Secondary" triggerVariant="secondary" items={basicMenuItems} />
				<DropdownMenu triggerText="Outline" triggerVariant="outline" items={basicMenuItems} />
				<DropdownMenu triggerText="Ghost" triggerVariant="ghost" items={basicMenuItems} />
				<DropdownMenu triggerText="Destructive" triggerVariant="destructive" items={basicMenuItems} />
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={triggerVariantsDocs}
			/>
		</Card>

		<!-- Sizes -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Sizes</h2>
			<p class="text-sm text-muted-foreground mb-4">Available trigger button sizes</p>
			<div class="flex flex-wrap items-center gap-4">
				<DropdownMenu triggerText="Small" triggerSize="sm" items={basicMenuItems} />
				<DropdownMenu triggerText="Default" triggerSize="default" items={basicMenuItems} />
				<DropdownMenu triggerText="Large" triggerSize="lg" items={basicMenuItems} />
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

		<!-- Alignment -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Content Alignment</h2>
			<p class="text-sm text-muted-foreground mb-4">Control menu content alignment</p>
			<div class="flex flex-wrap gap-4">
				<DropdownMenu triggerText="Align Start" align="start" items={basicMenuItems} />
				<DropdownMenu triggerText="Align Center" align="center" items={basicMenuItems} />
				<DropdownMenu triggerText="Align End" align="end" items={basicMenuItems} />
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={alignmentDocs}
			/>
		</Card>

		<!-- Submenu Examples -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">With Submenu</h2>
			<p class="text-sm text-muted-foreground mb-4">Nested menus for hierarchical navigation</p>
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
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={submenuDocs}
			/>
		</Card>

		<!-- Custom Trigger Examples -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Custom Trigger</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Use the <code class="text-xs bg-muted px-1 py-0.5 rounded">trigger</code> snippet prop to provide custom trigger elements like labels, avatars, or any custom component.
			</p>
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
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={customTriggerDocs}
			/>
		</Card>
	</div>
</div>
