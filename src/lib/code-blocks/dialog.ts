export const sizesDocs = `
<script lang="ts">
	import { Button, Input, Label, DialogPrimitives } from "@kareyes/aether";
</script>

<div class="flex flex-wrap gap-3">
	<!-- Small -->
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

	<!-- Default -->
	<DialogPrimitives.Dialog>
		<DialogPrimitives.DialogTrigger>
			<Button variant="outline">Default</Button>
		</DialogPrimitives.DialogTrigger>
		<DialogPrimitives.DialogContent size="default">
			<DialogPrimitives.DialogHeader>
				<DialogPrimitives.DialogTitle>Default Size Dialog</DialogPrimitives.DialogTitle>
				<DialogPrimitives.DialogDescription>
					The standard dialog size for most use cases.
				</DialogPrimitives.DialogDescription>
			</DialogPrimitives.DialogHeader>
			<DialogPrimitives.DialogFooter>
				<Button>Close</Button>
			</DialogPrimitives.DialogFooter>
		</DialogPrimitives.DialogContent>
	</DialogPrimitives.Dialog>

	<!-- Large -->
	<DialogPrimitives.Dialog>
		<DialogPrimitives.DialogTrigger>
			<Button variant="outline">Large</Button>
		</DialogPrimitives.DialogTrigger>
		<DialogPrimitives.DialogContent size="lg">
			<DialogPrimitives.DialogHeader>
				<DialogPrimitives.DialogTitle>Large Dialog</DialogPrimitives.DialogTitle>
				<DialogPrimitives.DialogDescription>
					More space for detailed content and complex forms.
				</DialogPrimitives.DialogDescription>
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
</div>`;

export const variantsDocs = `
<script lang="ts">
	import { Button, DialogPrimitives } from "@kareyes/aether";
</script>

<div class="flex flex-wrap gap-3">
	<DialogPrimitives.Dialog>
		<DialogPrimitives.DialogTrigger>
			<Button variant="outline">Default Layout</Button>
		</DialogPrimitives.DialogTrigger>
		<DialogPrimitives.DialogContent variant="default">
			<DialogPrimitives.DialogHeader>
				<DialogPrimitives.DialogTitle>Default Layout</DialogPrimitives.DialogTitle>
				<DialogPrimitives.DialogDescription>
					Left-aligned on desktop, centered on mobile.
				</DialogPrimitives.DialogDescription>
			</DialogPrimitives.DialogHeader>
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
				<DialogPrimitives.DialogDescription>
					All content centered on all screen sizes.
				</DialogPrimitives.DialogDescription>
			</DialogPrimitives.DialogHeader>
			<DialogPrimitives.DialogFooter>
				<Button>Acknowledge</Button>
			</DialogPrimitives.DialogFooter>
		</DialogPrimitives.DialogContent>
	</DialogPrimitives.Dialog>
</div>`;

export const practicalExamplesDocs = `
<script lang="ts">
	import { Button, Input, Label, Textarea, DialogPrimitives } from "@kareyes/aether";
	import { Save, Trash2, Edit, Plus, FileText } from "@kareyes/aether/icons";

	let profileDialogOpen = $state(false);
	let name = $state("John Doe");
	let email = $state("john@example.com");
</script>

<div class="flex flex-wrap gap-3">
	<!-- Edit Profile -->
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
					Make changes to your profile here.
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
				<Button>
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
					This action cannot be undone.
				</DialogPrimitives.DialogDescription>
			</DialogPrimitives.DialogHeader>
			<DialogPrimitives.DialogFooter>
				<DialogPrimitives.DialogClose>
					<Button variant="outline">Cancel</Button>
				</DialogPrimitives.DialogClose>
				<Button variant="destructive">
					<Trash2 class="size-4 mr-2" />
					Delete
				</Button>
			</DialogPrimitives.DialogFooter>
		</DialogPrimitives.DialogContent>
	</DialogPrimitives.Dialog>
</div>`;

export const alertStyleDocs = `
<script lang="ts">
	import { Button, DialogPrimitives } from "@kareyes/aether";
	import { CheckCircle2, AlertTriangle, Info } from "@kareyes/aether/icons";
</script>

<div class="flex flex-wrap gap-3">
	<!-- Success -->
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
				<DialogPrimitives.DialogDescription>
					Your changes have been saved successfully.
				</DialogPrimitives.DialogDescription>
			</DialogPrimitives.DialogHeader>
			<DialogPrimitives.DialogFooter>
				<DialogPrimitives.DialogClose>
					<Button color="success">OK</Button>
				</DialogPrimitives.DialogClose>
			</DialogPrimitives.DialogFooter>
		</DialogPrimitives.DialogContent>
	</DialogPrimitives.Dialog>

	<!-- Warning -->
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
					You have unsaved changes. Continue?
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
</div>`;

export const specialFeaturesDocs = `
<script lang="ts">
	import { Button, DialogPrimitives } from "@kareyes/aether";
</script>

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
	</div>`;
