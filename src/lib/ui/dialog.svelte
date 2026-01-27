<script lang="ts">
	import { sizesDocs, variantsDocs, practicalExamplesDocs, alertStyleDocs, specialFeaturesDocs } from "$lib/code-blocks/dialog";
	import { Button, Input, Label, Textarea, TabsPrimitives, DialogPrimitives, Card, CodeBlock } from "@kareyes/aether";
	import {
		Save,
		Trash2,
		Settings,
		Info,
		AlertTriangle,
		CheckCircle2,
		Plus,
		Edit,
		FileText,
		User,
		Bell,
	} from "@kareyes/aether/icons";

	let result = $state<string>("");
	let name = $state("John Doe");
	let email = $state("john@example.com");
	let bio = $state("");

	let profileDialogOpen = $state(false);

	function handleSaveProfile() {
		result = `Profile saved: ${name}, ${email}`;
		profileDialogOpen = false;
	}

	function handleDelete() {
		result = "Item deleted successfully";
	}

	function handleCreatePost() {
		result = "Post created successfully";
	}
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<div class="mb-8">
		<h1 class="text-3xl font-bold mb-2">Dialog Component</h1>
		<p class="text-muted-foreground">
			Comprehensive examples of the Dialog component with various sizes, variants, and use cases.
		</p>
	</div>

	<div class="space-y-12">
		<!-- Size Examples -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Sizes</h2>
			<p class="text-sm text-muted-foreground mb-4">Different dialog sizes for various use cases.</p>

			<div class="flex flex-wrap gap-3">
				<DialogPrimitives.Dialog>
					<DialogPrimitives.DialogTrigger>
						<Button variant="outline">Small</Button>
					</DialogPrimitives.DialogTrigger>
					<DialogPrimitives.DialogContent size="sm">
						<DialogPrimitives.DialogHeader>
							<DialogPrimitives.DialogTitle>Small Dialog</DialogPrimitives.DialogTitle>
							<DialogPrimitives.DialogDescription>
								Perfect for simple confirmations and alerts.
							</DialogPrimitives.DialogDescription>
						</DialogPrimitives.DialogHeader>
						<div class="py-4">
							<p class="text-sm text-muted-foreground">This is a small dialog (max-w-sm).</p>
						</div>
						<DialogPrimitives.DialogFooter>
							<DialogPrimitives.DialogClose>
								<Button>Got it</Button>
							</DialogPrimitives.DialogClose>
						</DialogPrimitives.DialogFooter>
					</DialogPrimitives.DialogContent>
				</DialogPrimitives.Dialog>

				<DialogPrimitives.Dialog>
					<DialogPrimitives.DialogTrigger>
						<Button variant="outline">Default</Button>
					</DialogPrimitives.DialogTrigger>
					<DialogPrimitives.DialogContent size="default">
						<DialogPrimitives.DialogHeader>
							<DialogPrimitives.DialogTitle>Default Size Dialog</DialogPrimitives.DialogTitle>
							<DialogPrimitives.DialogDescription>The standard dialog size for most use cases.</DialogPrimitives.DialogDescription>
						</DialogPrimitives.DialogHeader>
						<div class="py-4">
							<p class="text-sm text-muted-foreground">
								This is the default size (max-w-lg), suitable for forms and general content.
							</p>
						</div>
						<DialogPrimitives.DialogFooter>
							<Button>Close</Button>
						</DialogPrimitives.DialogFooter>
					</DialogPrimitives.DialogContent>
				</DialogPrimitives.Dialog>

				<DialogPrimitives.Dialog>
					<DialogPrimitives.DialogTrigger>
						<Button variant="outline">Large</Button>
					</DialogPrimitives.DialogTrigger>
					<DialogPrimitives.DialogContent size="lg">
						<DialogPrimitives.DialogHeader>
							<DialogPrimitives.DialogTitle>Large Dialog</DialogPrimitives.DialogTitle>
							<DialogPrimitives.DialogDescription>More space for detailed content and complex forms.</DialogPrimitives.DialogDescription>
						</DialogPrimitives.DialogHeader>
						<div class="py-4 grid grid-cols-2 gap-4">
							<div class="space-y-2">
								<Label>First Name</Label>
								<Input placeholder="John" />
							</div>
							<div class="space-y-2">
								<Label>Last Name</Label>
								<Input placeholder="Doe" />
							</div>
						</div>
						<DialogPrimitives.DialogFooter>
							<Button>Close</Button>
						</DialogPrimitives.DialogFooter>
					</DialogPrimitives.DialogContent>
				</DialogPrimitives.Dialog>

				<DialogPrimitives.Dialog>
					<DialogPrimitives.DialogTrigger>
						<Button variant="outline">Extra Large</Button>
					</DialogPrimitives.DialogTrigger>
					<DialogPrimitives.DialogContent size="xl">
						<DialogPrimitives.DialogHeader>
							<DialogPrimitives.DialogTitle>Extra Large Dialog</DialogPrimitives.DialogTitle>
							<DialogPrimitives.DialogDescription>
								Maximum space for complex layouts and data displays.
							</DialogPrimitives.DialogDescription>
						</DialogPrimitives.DialogHeader>
						<div class="py-4">
							<p class="text-sm text-muted-foreground">
								This is an extra large dialog (max-w-4xl), ideal for dashboards and complex
								interfaces.
							</p>
						</div>
						<DialogPrimitives.DialogFooter>
							<Button>Close</Button>
						</DialogPrimitives.DialogFooter>
					</DialogPrimitives.DialogContent>
				</DialogPrimitives.Dialog>

				<DialogPrimitives.Dialog>
					<DialogPrimitives.DialogTrigger>
						<Button variant="outline">Full Width</Button>
					</DialogPrimitives.DialogTrigger>
					<DialogPrimitives.DialogContent size="full">
						<DialogPrimitives.DialogHeader>
							<DialogPrimitives.DialogTitle>Full Width Dialog</DialogPrimitives.DialogTitle>
							<DialogPrimitives.DialogDescription>Nearly full viewport width for maximum space.</DialogPrimitives.DialogDescription>
						</DialogPrimitives.DialogHeader>
						<div class="py-4">
							<p class="text-sm text-muted-foreground">
								This dialog uses 90vw on desktop, providing maximum available space.
							</p>
						</div>
						<DialogPrimitives.DialogFooter>
							<Button>Close</Button>
						</DialogPrimitives.DialogFooter>
					</DialogPrimitives.DialogContent>
				</DialogPrimitives.Dialog>
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

		<!-- Variant Examples -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Variants</h2>
			<p class="text-sm text-muted-foreground mb-4">Different layout variants for different contexts.</p>

			<div class="flex flex-wrap gap-3">
				<DialogPrimitives.Dialog>
					<DialogPrimitives.DialogTrigger>
						<Button variant="outline">Default Layout</Button>
					</DialogPrimitives.DialogTrigger>
					<DialogPrimitives.DialogContent variant="default">
						<DialogPrimitives.DialogHeader>
							<DialogPrimitives.DialogTitle>Default Layout</DialogPrimitives.DialogTitle>
							<DialogPrimitives.DialogDescription>
								Left-aligned on desktop, centered on mobile (default behavior).
							</DialogPrimitives.DialogDescription>
						</DialogPrimitives.DialogHeader>
						<div class="py-4">
							<p class="text-sm">This is the standard layout for most dialogs.</p>
						</div>
						<DialogPrimitives.DialogFooter>
							<Button variant="outline">Cancel</Button>
							<Button>Confirm</Button>
						</DialogPrimitives.DialogFooter>
					</DialogPrimitives.DialogContent>
				</DialogPrimitives.Dialog>

				<DialogPrimitives.Dialog>
					<DialogPrimitives.DialogTrigger>
						<Button variant="outline">Centered Layout</Button>
					</DialogPrimitives.DialogTrigger>
					<DialogPrimitives.DialogContent variant="centered" size="sm">
						<DialogPrimitives.DialogHeader>
							<DialogPrimitives.DialogTitle>Centered Layout</DialogPrimitives.DialogTitle>
							<DialogPrimitives.DialogDescription>All content centered on all screen sizes.</DialogPrimitives.DialogDescription>
						</DialogPrimitives.DialogHeader>
						<div class="py-4 text-center">
							<p class="text-sm">Perfect for alerts and confirmations.</p>
						</div>
						<DialogPrimitives.DialogFooter>
							<Button>Acknowledge</Button>
						</DialogPrimitives.DialogFooter>
					</DialogPrimitives.DialogContent>
				</DialogPrimitives.Dialog>
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

		<!-- Practical Examples -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Practical Examples</h2>
			<p class="text-sm text-muted-foreground mb-4">Real-world use cases and implementations.</p>

			<div class="flex flex-wrap gap-3">
				<!-- Edit Profile with Controlled State -->
				<DialogPrimitives.Dialog bind:open={profileDialogOpen}>
					<DialogPrimitives.DialogTrigger>
						<Button>
							<Edit class="size-4 mr-2" />
							Edit Profile
						</Button>
					</DialogPrimitives.DialogTrigger>
					<DialogPrimitives.DialogContent>
						<DialogPrimitives.DialogHeader>
							<DialogPrimitives.DialogTitle>Edit Profile</DialogPrimitives.DialogTitle>
							<DialogPrimitives.DialogDescription>
								Make changes to your profile here. Click save when you're done.
							</DialogPrimitives.DialogDescription>
						</DialogPrimitives.DialogHeader>
						<div class="grid gap-4 py-4">
							<div class="grid grid-cols-4 items-center gap-4">
								<Label for="name" class="text-end">Name</Label>
								<Input id="name" bind:value={name} class="col-span-3" />
							</div>
							<div class="grid grid-cols-4 items-center gap-4">
								<Label for="email" class="text-end">Email</Label>
								<Input id="email" type="email" bind:value={email} class="col-span-3" />
							</div>
						</div>
						<DialogPrimitives.DialogFooter>
							<DialogPrimitives.DialogClose>
								<Button variant="outline">Cancel</Button>
							</DialogPrimitives.DialogClose>
							<Button onclick={handleSaveProfile}>
								<Save class="size-4 mr-2" />
								Save changes
							</Button>
						</DialogPrimitives.DialogFooter>
					</DialogPrimitives.DialogContent>
				</DialogPrimitives.Dialog>

				<!-- Delete Confirmation -->
				<DialogPrimitives.Dialog>
					<DialogPrimitives.DialogTrigger>
						<Button variant="destructive">
							<Trash2 class="size-4 mr-2" />
							Delete
						</Button>
					</DialogPrimitives.DialogTrigger>
					<DialogPrimitives.DialogContent size="sm" variant="centered">
						<DialogPrimitives.DialogHeader>
							<DialogPrimitives.DialogTitle>Are you absolutely sure?</DialogPrimitives.DialogTitle>
							<DialogPrimitives.DialogDescription>
								This action cannot be undone. This will permanently delete the item and remove it
								from our servers.
							</DialogPrimitives.DialogDescription>
						</DialogPrimitives.DialogHeader>
						<DialogPrimitives.DialogFooter>
							<DialogPrimitives.DialogClose>
								<Button variant="outline">Cancel</Button>
							</DialogPrimitives.DialogClose>
							<Button variant="destructive" onclick={handleDelete}>
								<Trash2 class="size-4 mr-2" />
								Delete
							</Button>
						</DialogPrimitives.DialogFooter>
					</DialogPrimitives.DialogContent>
				</DialogPrimitives.Dialog>

				<!-- Settings with Tabs -->
				<DialogPrimitives.Dialog>
					<DialogPrimitives.DialogTrigger>
						<Button variant="outline">
							<Settings class="size-4 mr-2" />
							Settings
						</Button>
					</DialogPrimitives.DialogTrigger>
					<DialogPrimitives.DialogContent size="lg">
						<DialogPrimitives.DialogHeader>
							<DialogPrimitives.DialogTitle>Settings</DialogPrimitives.DialogTitle>
							<DialogPrimitives.DialogDescription>
								Manage your account settings and preferences here.
							</DialogPrimitives.DialogDescription>
						</DialogPrimitives.DialogHeader>
						<TabsPrimitives.Tabs value="general" class="py-4">
							<TabsPrimitives.TabsList class="grid w-full grid-cols-3">
								<TabsPrimitives.TabsTrigger value="general">General</TabsPrimitives.TabsTrigger>
								<TabsPrimitives.TabsTrigger value="account">Account</TabsPrimitives.TabsTrigger>
								<TabsPrimitives.TabsTrigger value="notifications">Notifications</TabsPrimitives.TabsTrigger>
							</TabsPrimitives.TabsList>
							<TabsPrimitives.TabsContent value="general" class="space-y-4 py-4">
								<div class="space-y-2">
									<Label>Display Name</Label>
									<Input placeholder="Your display name" />
								</div>
								<div class="space-y-2">
									<Label>Language</Label>
									<Input placeholder="English" />
								</div>
							</TabsPrimitives.TabsContent>
							<TabsPrimitives.TabsContent value="account" class="space-y-4 py-4">
								<div class="space-y-2">
									<Label>Username</Label>
									<Input placeholder="johndoe" />
								</div>
								<div class="space-y-2">
									<Label>Email</Label>
									<Input type="email" placeholder="john@example.com" />
								</div>
							</TabsPrimitives.TabsContent>
							<TabsPrimitives.TabsContent value="notifications" class="space-y-4 py-4">
								<p class="text-sm text-muted-foreground">
									Configure how you receive notifications.
								</p>
							</TabsPrimitives.TabsContent>
						</TabsPrimitives.Tabs>
						<DialogPrimitives.DialogFooter>
							<DialogPrimitives.DialogClose>
								<Button variant="outline">Cancel</Button>
							</DialogPrimitives.DialogClose>
							<Button>
								<Save class="size-4 mr-2" />
								Save Settings
							</Button>
						</DialogPrimitives.DialogFooter>
					</DialogPrimitives.DialogContent>
				</DialogPrimitives.Dialog>

				<!-- Create Post -->
				<DialogPrimitives.Dialog>
					<DialogPrimitives.DialogTrigger>
						<Button>
							<Plus class="size-4 mr-2" />
							Create Post
						</Button>
					</DialogPrimitives.DialogTrigger>
					<DialogPrimitives.DialogContent>
						<DialogPrimitives.DialogHeader>
							<DialogPrimitives.DialogTitle>Create New Post</DialogPrimitives.DialogTitle>
							<DialogPrimitives.DialogDescription>Share your thoughts with the community.</DialogPrimitives.DialogDescription>
						</DialogPrimitives.DialogHeader>
						<div class="grid gap-4 py-4">
							<div class="space-y-2">
								<Label for="title">Title</Label>
								<Input id="title" placeholder="Post title" />
							</div>
							<div class="space-y-2">
								<Label for="content">Content</Label>
								<Textarea id="content" bind:value={bio} placeholder="Write your post..." rows={5} />
							</div>
						</div>
						<DialogPrimitives.DialogFooter>
							<DialogPrimitives.DialogClose>
								<Button variant="outline">Cancel</Button>
							</DialogPrimitives.DialogClose>
							<Button onclick={handleCreatePost}>
								<FileText class="size-4 mr-2" />
								Publish
							</Button>
						</DialogPrimitives.DialogFooter>
					</DialogPrimitives.DialogContent>
				</DialogPrimitives.Dialog>
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={practicalExamplesDocs}
			/>
		</Card>

		<!-- Alert-Style Dialogs -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Alert-Style Dialogs</h2>
			<p class="text-sm text-muted-foreground mb-4">Simple dialogs for alerts and notifications.</p>

			<div class="flex flex-wrap gap-3">
				<!-- Success Alert -->
				<DialogPrimitives.Dialog>
					<DialogPrimitives.DialogTrigger>
						<Button color="success">
							<CheckCircle2 class="size-4 mr-2" />
							Success
						</Button>
					</DialogPrimitives.DialogTrigger>
					<DialogPrimitives.DialogContent size="sm" variant="centered">
						<DialogPrimitives.DialogHeader>
							<DialogPrimitives.DialogTitle class="flex items-center justify-center gap-2">
								<CheckCircle2 class="size-5 text-success" />
								Success!
							</DialogPrimitives.DialogTitle>
							<DialogPrimitives.DialogDescription>Your changes have been saved successfully.</DialogPrimitives.DialogDescription>
						</DialogPrimitives.DialogHeader>
						<DialogPrimitives.DialogFooter>
							<DialogPrimitives.DialogClose>
								<Button color="success">OK</Button>
							</DialogPrimitives.DialogClose>
						</DialogPrimitives.DialogFooter>
					</DialogPrimitives.DialogContent>
				</DialogPrimitives.Dialog>

				<!-- Warning Alert -->
				<DialogPrimitives.Dialog>
					<DialogPrimitives.DialogTrigger>
						<Button color="warning">
							<AlertTriangle class="size-4 mr-2" />
							Warning
						</Button>
					</DialogPrimitives.DialogTrigger>
					<DialogPrimitives.DialogContent size="sm" variant="centered">
						<DialogPrimitives.DialogHeader>
							<DialogPrimitives.DialogTitle class="flex items-center justify-center gap-2">
								<AlertTriangle class="size-5 text-warning" />
								Warning
							</DialogPrimitives.DialogTitle>
							<DialogPrimitives.DialogDescription>
								You have unsaved changes. Are you sure you want to continue?
							</DialogPrimitives.DialogDescription>
						</DialogPrimitives.DialogHeader>
						<DialogPrimitives.DialogFooter>
							<DialogPrimitives.DialogClose>
								<Button variant="outline">Go Back</Button>
							</DialogPrimitives.DialogClose>
							<DialogPrimitives.DialogClose>
								<Button color="warning">Continue</Button>
							</DialogPrimitives.DialogClose>
						</DialogPrimitives.DialogFooter>
					</DialogPrimitives.DialogContent>
				</DialogPrimitives.Dialog>

				<!-- Info Alert -->
				<DialogPrimitives.Dialog>
					<DialogPrimitives.DialogTrigger>
						<Button color="info">
							<Info class="size-4 mr-2" />
							Information
						</Button>
					</DialogPrimitives.DialogTrigger>
					<DialogPrimitives.DialogContent size="sm" variant="centered">
						<DialogPrimitives.DialogHeader>
							<DialogPrimitives.DialogTitle class="flex items-center justify-center gap-2">
								<Info class="size-5 text-info" />
								Information
							</DialogPrimitives.DialogTitle>
							<DialogPrimitives.DialogDescription>
								Here's some important information you should know about.
							</DialogPrimitives.DialogDescription>
						</DialogPrimitives.DialogHeader>
						<DialogPrimitives.DialogFooter>
							<DialogPrimitives.DialogClose>
								<Button color="info">Got it</Button>
							</DialogPrimitives.DialogClose>
						</DialogPrimitives.DialogFooter>
					</DialogPrimitives.DialogContent>
				</DialogPrimitives.Dialog>
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={alertStyleDocs}
			/>
		</Card>

		<!-- Special Features -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Special Features</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Additional features and customization options.
			</p>

			<div class="flex flex-wrap gap-3">
				<!-- No Close Button -->
				<DialogPrimitives.Dialog>
					<DialogPrimitives.DialogTrigger>
						<Button variant="outline">No Close Button</Button>
					</DialogPrimitives.DialogTrigger>
					<DialogPrimitives.DialogContent showCloseButton={false}>
						<DialogPrimitives.DialogHeader>
							<DialogPrimitives.DialogTitle>Important Action</DialogPrimitives.DialogTitle>
							<DialogPrimitives.DialogDescription>
								This dialog requires you to make a choice. You must select an action.
							</DialogPrimitives.DialogDescription>
						</DialogPrimitives.DialogHeader>
						<div class="py-4">
							<p class="text-sm text-muted-foreground">
								Without a close button, users must use one of the provided actions or press Escape.
							</p>
						</div>
						<DialogPrimitives.DialogFooter>
							<DialogPrimitives.DialogClose>
								<Button variant="outline">Decline</Button>
							</DialogPrimitives.DialogClose>
							<DialogPrimitives.DialogClose>
								<Button>Accept</Button>
							</DialogPrimitives.DialogClose>
						</DialogPrimitives.DialogFooter>
					</DialogPrimitives.DialogContent>
				</DialogPrimitives.Dialog>

				<!-- Scrollable Content -->
				<DialogPrimitives.Dialog>
					<DialogPrimitives.DialogTrigger>
						<Button variant="outline">Scrollable Content</Button>
					</DialogPrimitives.DialogTrigger>
					<DialogPrimitives.DialogContent size="lg">
						<DialogPrimitives.DialogHeader>
							<DialogPrimitives.DialogTitle>Terms and Conditions</DialogPrimitives.DialogTitle>
							<DialogPrimitives.DialogDescription>Please read through our terms and conditions.</DialogPrimitives.DialogDescription>
						</DialogPrimitives.DialogHeader>
						<div class="max-h-[400px] overflow-y-auto py-4">
							{#each Array(15) as _, i}
								<div class="mb-4">
									<h3 class="font-semibold text-sm mb-2">Section {i + 1}</h3>
									<p class="text-sm text-muted-foreground">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
										quis nostrud exercitation ullamco laboris.
									</p>
								</div>
							{/each}
						</div>
						<DialogPrimitives.DialogFooter>
							<DialogPrimitives.DialogClose>
								<Button variant="outline">Decline</Button>
							</DialogPrimitives.DialogClose>
							<Button>Accept</Button>
						</DialogPrimitives.DialogFooter>
					</DialogPrimitives.DialogContent>
				</DialogPrimitives.Dialog>

				<!-- Custom Close Actions -->
				<DialogPrimitives.Dialog>
					<DialogPrimitives.DialogTrigger>
						<Button variant="outline">Custom Close Actions</Button>
					</DialogPrimitives.DialogTrigger>
					<DialogPrimitives.DialogContent>
						<DialogPrimitives.DialogHeader>
							<DialogPrimitives.DialogTitle>Multiple Close Options</DialogPrimitives.DialogTitle>
							<DialogPrimitives.DialogDescription>
								This dialog can be closed in multiple ways with different actions.
							</DialogPrimitives.DialogDescription>
						</DialogPrimitives.DialogHeader>
						<div class="py-4">
							<p class="text-sm text-muted-foreground">
								Each button performs a different action before closing.
							</p>
						</div>
						<DialogPrimitives.DialogFooter>
							<DialogPrimitives.DialogClose>
								<Button variant="outline" onclick={() => (result = "Cancelled")}>Cancel</Button>
							</DialogPrimitives.DialogClose>
							<DialogPrimitives.DialogClose>
								<Button variant="outline" onclick={() => (result = "Saved as draft")}>
									Save Draft
								</Button>
							</DialogPrimitives.DialogClose>
							<DialogPrimitives.DialogClose>
								<Button onclick={() => (result = "Published")}>Publish</Button>
							</DialogPrimitives.DialogClose>
						</DialogPrimitives.DialogFooter>
					</DialogPrimitives.DialogContent>
				</DialogPrimitives.Dialog>
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={specialFeaturesDocs}
			/>
		</Card>

		<!-- Result Display -->
		{#if result}
			<Card variant="outline" class="p-6">
				<div class="flex items-start gap-3">
					<Bell class="size-5 mt-0.5 text-muted-foreground" />
					<div class="flex-1">
						<p class="text-sm font-medium">Last Action:</p>
						<p class="text-sm text-muted-foreground">{result}</p>
					</div>
					<Button
						variant="ghost"
						size="sm"
						onclick={() => (result = "")}
						class="size-6 p-0"
					>
						×
					</Button>
				</div>
			</Card>
		{/if}
	</div>
</div>
