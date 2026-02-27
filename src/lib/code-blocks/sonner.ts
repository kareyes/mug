export const toastTypesDocs = `
<script lang="ts">
	import { Button, Sonner, SonnerPrimitives } from "@kareyes/aether";

	const { toast } = SonnerPrimitives;
</script>

<Sonner />

<div class="flex flex-wrap gap-3">
	<Button
		variant="outline"
		onclick={() => toast("This is a default notification")}
	>
		Default
	</Button>
	<Button
		color="success"
		onclick={() => toast.success("Operation completed successfully!")}
	>
		Success
	</Button>
	<Button
		color="danger"
		onclick={() => toast.error("Something went wrong!")}
	>
		Error
	</Button>
	<Button
		color="warning"
		onclick={() => toast.warning("Please review your input")}
	>
		Warning
	</Button>
	<Button
		color="info"
		onclick={() => toast.info("Here's some useful information")}
	>
		Info
	</Button>
	<Button
		variant="outline"
		onclick={() => {
			const id = toast.loading("Processing...");
			setTimeout(() => {
				toast.dismiss(id);
				toast.success("Done!");
			}, 2000);
		}}
	>
		Loading
	</Button>
</div>`;

export const withDescriptionsDocs = `
<script lang="ts">
	import { Button, SonnerPrimitives } from "@kareyes/aether";

	const { toast } = SonnerPrimitives;
</script>

<Sonner />

<div class="flex flex-wrap gap-3">
	<Button
		color="success"
		onclick={() => toast.success("File uploaded", {
			description: "Your document has been saved to the cloud successfully."
		})}
	>
		Success with Description
	</Button>
	<Button
		color="danger"
		onclick={() => toast.error("Upload failed", {
			description: "The file exceeds the maximum size limit of 10MB."
		})}
	>
		Error with Description
	</Button>
	<Button
		color="warning"
		onclick={() => toast.warning("Low storage", {
			description: "You are using 95% of your available storage."
		})}
	>
		Warning with Description
	</Button>
</div>`;

export const withActionsDocs = `
<script lang="ts">
	import { Button, SonnerPrimitives } from "@kareyes/aether";

	const { toast } = SonnerPrimitives;
</script>

<Sonner />

<div class="flex flex-wrap gap-3">
	<Button
		color="success"
		variant="flat"
		onclick={() => toast.success("Event created", {
			description: "Your event has been scheduled.",
			action: {
				label: "View Event",
				onClick: () => toast.info("Opening event details...")
			}
		})}
	>
		With Action
	</Button>
	<Button
		color="danger"
		variant="flat"
		onclick={() => toast.error("Delete this item?", {
			description: "This action cannot be undone.",
			action: {
				label: "Delete",
				onClick: () => toast.success("Item deleted successfully")
			},
			cancel: {
				label: "Cancel",
				onClick: () => toast.info("Deletion cancelled")
			}
		})}
	>
		With Action & Cancel
	</Button>
</div>`;

export const promiseToastsDocs = `
<script lang="ts">
	import { Button, SonnerPrimitives } from "@kareyes/aether";

	const { toast } = SonnerPrimitives;

	function simulateAsyncOperation(shouldSucceed: boolean = true) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (shouldSucceed) {
					resolve({ items: 42, name: "Report.pdf" });
				} else {
					reject(new Error("Network connection failed"));
				}
			}, 2000);
		});
	}
</script>

<Sonner />

<div class="flex flex-wrap gap-3">
	<Button
		onclick={() => {
			toast.promise(simulateAsyncOperation(true), {
				loading: "Uploading file...",
				success: (data) => \`\${data.name} uploaded successfully!\`,
				error: "Failed to upload file"
			});
		}}
	>
		Promise (Success)
	</Button>
	<Button
		variant="outline"
		onclick={() => {
			toast.promise(simulateAsyncOperation(false), {
				loading: "Connecting to server...",
				success: "Connected!",
				error: (err) => \`Error: \${err.message}\`
			});
		}}
	>
		Promise (Error)
	</Button>
</div>`;

export const durationPersistenceDocs = `
<script lang="ts">
	import { Button, SonnerPrimitives } from "@kareyes/aether";

	const { toast } = SonnerPrimitives;
</script>

<Sonner />

<div class="flex flex-wrap gap-3">
	<Button
		variant="outline"
		onclick={() => toast.info("Quick toast", { duration: 1000 })}
	>
		1 Second
	</Button>
	<Button
		variant="outline"
		onclick={() => toast.info("Normal toast", { duration: 4000 })}
	>
		4 Seconds
	</Button>
	<Button
		variant="outline"
		onclick={() => toast.info("Long toast", { duration: 10000 })}
	>
		10 Seconds
	</Button>
	<Button
		color="warning"
		onclick={() => toast.warning("Persistent notification", {
			description: "This toast will not auto-dismiss.",
			duration: Infinity
		})}
	>
		Persistent (Infinity)
	</Button>
</div>`;

export const multipleToastsDocs = `
<script lang="ts">
	import { Button, SonnerPrimitives } from "@kareyes/aether";

	const { toast } = SonnerPrimitives;
</script>

<Sonner />

<div class="flex flex-wrap gap-3">
	<Button
		onclick={() => {
			toast.success("First notification");
			setTimeout(() => toast.info("Second notification"), 200);
			setTimeout(() => toast.warning("Third notification"), 400);
			setTimeout(() => toast.error("Fourth notification"), 600);
		}}
	>
		Show 4 Toasts
	</Button>
	<Button
		variant="destructive"
		onclick={() => toast.dismiss()}
	>
		Dismiss All
	</Button>
</div>`;

export const customStylingDocs = `
<script lang="ts">
	import { Button, SonnerPrimitives } from "@kareyes/aether";

	const { toast } = SonnerPrimitives;
</script>

<Sonner />

<div class="flex flex-wrap gap-3">
	<Button
		variant="outline"
		onclick={() => toast.success("Custom styled toast", {
			description: "This toast has custom border styling.",
			class: "border-2 border-green-500"
		})}
	>
		Custom Border
	</Button>
	<Button
		variant="outline"
		onclick={() => toast("Gradient background", {
			description: "Beautiful gradient styling.",
			style: "background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;"
		})}
	>
		Gradient Style
	</Button>
</div>`;

export const importantToastsDocs = `
<script lang="ts">
	import { Button, SonnerPrimitives } from "@kareyes/aether";

	const { toast } = SonnerPrimitives;
</script>
<Sonner />
<div class="flex flex-wrap gap-3">
	<Button
		color="danger"
		onclick={() => {
			toast.info("Regular notification 1");
			toast.info("Regular notification 2");
			toast.error("CRITICAL: System error detected!", {
				important: true,
				duration: 10000,
				action: {
					label: "Fix Now",
					onClick: () => toast.success("Issue resolved!")
				}
			});
		}}
	>
		Show Important Toast
	</Button>
</div>`;

export const sequentialUpdatesDocs = `
<script lang="ts">
	import { Button, SonnerPrimitives } from "@kareyes/aether";

	const { toast } = SonnerPrimitives;
</script>
<Sonner />
<div class="flex flex-wrap gap-3">
	<Button
		onclick={async () => {
			const id = toast.loading("Step 1: Validating data...");

			await new Promise(r => setTimeout(r, 1500));
			toast.loading("Step 2: Processing...", { id });

			await new Promise(r => setTimeout(r, 1500));
			toast.loading("Step 3: Saving to database...", { id });

			await new Promise(r => setTimeout(r, 1500));
			toast.success("All steps completed successfully!", { id });
		}}
	>
		Multi-Step Process
	</Button>
</div>`;

export const realWorldExamplesDocs = `
<script lang="ts">
	import { Button, SonnerPrimitives } from "@kareyes/aether";

	const { toast } = SonnerPrimitives;
</script>
<Sonner />
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	<div class="p-4 border rounded-lg space-y-3">
		<h3 class="font-medium">Form Submission</h3>
		<Button
			class="w-full"
			onclick={() => {
				const id = toast.loading("Submitting form...");
				setTimeout(() => {
					toast.success("Form submitted successfully!", {
						id,
						description: "We'll get back to you within 24 hours."
					});
				}, 1500);
			}}
		>
			Submit Form
		</Button>
	</div>

	<div class="p-4 border rounded-lg space-y-3">
		<h3 class="font-medium">Copy to Clipboard</h3>
		<Button
			class="w-full"
			variant="outline"
			onclick={() => {
				navigator.clipboard?.writeText("Copied text!");
				toast.success("Copied to clipboard!");
			}}
		>
			Copy Text
		</Button>
	</div>

	<div class="p-4 border rounded-lg space-y-3">
		<h3 class="font-medium">Delete Confirmation</h3>
		<Button
			class="w-full"
			color="danger"
			onclick={() => {
				toast.error("Delete this item?", {
					description: "This cannot be undone.",
					action: {
						label: "Delete",
						onClick: () => toast.success("Deleted!")
					},
					cancel: {
						label: "Keep",
						onClick: () => {}
					},
					duration: 10000
				});
			}}
		>
			Delete Item
		</Button>
	</div>
		<div class="p-4 border rounded-lg space-y-3">
			<h3 class="font-medium">Network Status</h3>
			<Button
				class="w-full"
				variant="secondary"
				onclick={() => {
					toast.error("Connection lost", {
						description: "Attempting to reconnect...",
						duration: 3000,
					});
					setTimeout(() => {
						toast.success("Connection restored!");
					}, 3000);
				}}
			>
				Simulate Offline
			</Button>
		</div>

		<div class="p-4 border rounded-lg space-y-3">
			<h3 class="font-medium">Update Available</h3>
			<Button
				class="w-full"
				color="info"
				variant="flat"
				onclick={() => {
					toast.info("Update available", {
						description:
							"A new version is ready to install.",
						action: {
							label: "Install Now",
							onClick: () =>
								toast.loading(
									"Installing update...",
								),
						},
						duration: 10000,
					});
				}}
			>
				Check Updates
			</Button>
		</div>

		<div class="p-4 border rounded-lg space-y-3">
			<h3 class="font-medium">Settings Saved</h3>

			<Button
				class="w-full"
				color="success"
				variant="flat"
				onclick={() => {
					toast.success("Settings saved", {
						description:
							"Your preferences have been updated.",
						action: {
							label: "Undo",
							onClick: () =>
								toast.info("Changes reverted"),
						},
					});
				}}
			>
				Save Settings
			</Button>
		</div>
</div>`;

export const visualVariantsDocs = `
<script lang="ts">
	import { Button, SonnerPrimitives } from "@kareyes/aether";

	let activeVariant: SonnerPrimitives.ToasterStyle = $state("default");

	const { toast } = SonnerPrimitives;

</script>

<Sonner variant={activeVariant} />

	<!-- Default -->
<div class="space-y-8">
	<div>
		<h3 class="text-sm font-medium text-muted-foreground mb-3">Default — tinted backgrounds with type-colored borders</h3>
		<div class="flex flex-wrap gap-2">
			<Button color="success" variant="flat" onclick={() => { activeVariant = "default"; toast.success("Default variant success"); }}>
				Success
			</Button>
			<Button color="danger" variant="flat" onclick={() => { activeVariant = "default"; toast.error("Default variant error"); }}>
				Error
			</Button>
			<Button color="warning" variant="flat" onclick={() => { activeVariant = "default"; toast.warning("Default variant warning"); }}>
				Warning
			</Button>
			<Button color="info" variant="flat" onclick={() => { activeVariant = "default"; toast.info("Default variant info"); }}>
				Info
			</Button>
		</div>
	</div>

	<!-- Bordered -->
	<div>
		<h3 class="text-sm font-medium text-muted-foreground mb-3">Bordered — clean background with colored left accent border</h3>
		<div class="flex flex-wrap gap-2">
			<Button color="success" variant="bordered" onclick={() => { activeVariant = "bordered"; toast.success("Bordered variant success"); }}>
				Success
			</Button>
			<Button color="danger" variant="bordered" onclick={() => { activeVariant = "bordered"; toast.error("Bordered variant error"); }}>
				Error
			</Button>
			<Button color="warning" variant="bordered" onclick={() => { activeVariant = "bordered"; toast.warning("Bordered variant warning"); }}>
				Warning
			</Button>
			<Button color="info" variant="bordered"  onclick={() => { activeVariant = "bordered"; toast.info("Bordered variant info"); }}>
				Info
			</Button>
		</div>
	</div>

	<!-- Filled -->
	<div>
		<h3 class="text-sm font-medium text-muted-foreground mb-3">Filled — solid colored backgrounds for high contrast</h3>
		<div class="flex flex-wrap gap-2">
			<Button color="success" variant="default" onclick={() => { activeVariant = "filled"; toast.success("Filled variant success"); }}>
				Success
			</Button>
			<Button color="danger" variant="default" onclick={() => { activeVariant = "filled"; toast.error("Filled variant error"); }}>
				Error
			</Button>
			<Button color="warning" variant="default" onclick={() => { activeVariant = "filled"; toast.warning("Filled variant warning"); }}>
				Warning
			</Button>
			<Button color="info" variant="default" onclick={() => { activeVariant = "filled"; toast.info("Filled variant info"); }}>
				Info
			</Button>
		</div>
	</div>

	<!-- Minimal -->
	<div>
		<h3 class="text-sm font-medium text-muted-foreground mb-3">Minimal — transparent background with subtle bottom border</h3>
		<div class="flex flex-wrap gap-2">
			<Button color="success" variant="outline" onclick={() => { activeVariant = "minimal"; toast.success("Minimal variant success"); }}>
				Success
			</Button>
			<Button color="danger" variant="outline" onclick={() => { activeVariant = "minimal"; toast.error("Minimal variant error"); }}>
				Error
			</Button>
			<Button color="warning" variant="outline" onclick={() => { activeVariant = "minimal"; toast.warning("Minimal variant warning"); }}>
				Warning
			</Button>
			<Button color="info" variant="outline" onclick={() => { activeVariant = "minimal"; toast.info("Minimal variant info"); }}>
				Info
			</Button>
		</div>
	</div>
</div>


`
