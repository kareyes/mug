<script lang="ts">
	// import { Toaster, toast } from "$core/components/ui/sonner";
	import { Button, Sonner, SonnerPrimitives } from "@kareyes/aether";
    import {Rocket, Heart, Sparkles} from "@kareyes/aether/icons";
	// For promise demo
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
    const { toast } = SonnerPrimitives;

	let toastPosition = $state<"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right">("bottom-right");
	let showCloseButton = $state(false);
	let expandOnHover = $state(false);
	let richColors = $state(true);
	let customDuration = $state(4000);

	const positions = [
		"top-left",
		"top-center", 
		"top-right",
		"bottom-left",
		"bottom-center",
		"bottom-right"
	] as const;
</script>

<Sonner 
	position={toastPosition} 
	closeButton={showCloseButton} 
	expand={expandOnHover}
	richColors={richColors}
	duration={customDuration}
/>

<div class="container mx-auto p-6 max-w-6xl">
	<div class="mb-8">
		<h1 class="text-3xl font-bold mb-2">Sonner Toast Component</h1>
		<p class="text-muted-foreground">
			Beautiful, customizable toast notifications with variants, actions, and rich features.
		</p>
	</div>

	<div class="space-y-12">
		<!-- Configuration -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Configuration</h2>
			<div class="p-6 bg-muted/30 rounded-lg border space-y-4">
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					<div>
						<label for="toast-position" class="block text-sm font-medium mb-2">Position</label>
						<select 
							id="toast-position"
							bind:value={toastPosition}
							class="w-full p-2 border rounded-md bg-background"
						>
							{#each positions as pos}
								<option value={pos}>{pos}</option>
							{/each}
						</select>
					</div>
					<div>
						<label for="toast-duration" class="block text-sm font-medium mb-2">Duration (ms)</label>
						<input 
							id="toast-duration"
							type="number" 
							bind:value={customDuration}
							min="0"
							step="500"
							class="w-full p-2 border rounded-md bg-background"
						/>
					</div>
					<div class="flex items-center gap-4">
						<label class="flex items-center gap-2 cursor-pointer">
							<input type="checkbox" bind:checked={showCloseButton} class="rounded" />
							<span class="text-sm">Close Button</span>
						</label>
						<label class="flex items-center gap-2 cursor-pointer">
							<input type="checkbox" bind:checked={expandOnHover} class="rounded" />
							<span class="text-sm">Expand on Hover</span>
						</label>
					</div>
					<div class="flex items-center gap-4">
						<label class="flex items-center gap-2 cursor-pointer">
							<input type="checkbox" bind:checked={richColors} class="rounded" />
							<span class="text-sm">Rich Colors</span>
						</label>
					</div>
				</div>
			</div>
		</section>

		<!-- Toast Types -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Toast Types</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Different toast types for various notification scenarios.
			</p>
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
			</div>
		</section>

		<!-- With Descriptions -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">With Descriptions</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Add descriptive text for more context.
			</p>
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
						description: "You are using 95% of your available storage. Consider upgrading."
					})}
				>
					Warning with Description
				</Button>
				<Button 
					color="info"
					onclick={() => toast.info("New version available", {
						description: "Version 2.0.0 introduces exciting new features and improvements."
					})}
				>
					Info with Description
				</Button>
			</div>
		</section>

		<!-- With Actions -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">With Action Buttons</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Add action and cancel buttons for interactive toasts.
			</p>
			<div class="flex flex-wrap gap-3">
				<Button 
					color="success"
					variant="flat"
					onclick={() => toast.success("Event created", {
						description: "Your event has been scheduled for tomorrow at 3 PM.",
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
				<Button 
					color="warning"
					variant="flat"
					onclick={() => toast.warning("Unsaved changes", {
						description: "You have unsaved changes that will be lost.",
						action: {
							label: "Save",
							onClick: () => toast.success("Changes saved!")
						},
						cancel: {
							label: "Discard",
							onClick: () => toast.info("Changes discarded")
						}
					})}
				>
					Save/Discard Actions
				</Button>
			</div>
		</section>

		<!-- Promise Toasts -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Promise Toasts</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Automatically handle loading, success, and error states.
			</p>
			<div class="flex flex-wrap gap-3">
				<Button 
					onclick={() => {
						toast.promise(simulateAsyncOperation(true), {
							loading: "Uploading file...",
							success: (data: any) => `${data.name} uploaded successfully!`,
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
							error: (err) => `Error: ${(err as Error).message}`
						});
					}}
				>
					Promise (Error)
				</Button>
				<Button 
					variant="secondary"
					onclick={() => {
						const promise = new Promise((resolve, reject) => {
							setTimeout(() => {
								Math.random() > 0.5 ? resolve({ count: 42 }) : reject(new Error("Random failure"));
							}, 2000);
						});
						toast.promise(promise, {
							loading: "Processing data...",
							success: (data: any) => `Processed ${data.count} items`,
							error: (err) => `Failed: ${(err as Error).message}`
						});
					}}
				>
					Promise (50/50 Random)
				</Button>
			</div>
		</section>

		<!-- Duration & Persistence -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Duration & Persistence</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Control how long toasts stay visible.
			</p>
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
						description: "This toast will not auto-dismiss. Close it manually.",
						duration: Infinity
					})}
				>
					Persistent (Infinity)
				</Button>
			</div>
		</section>

		<!-- Multiple Toasts -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Multiple Toasts</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Stack multiple toasts with expand on hover.
			</p>
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
			</div>
		</section>

		<!-- Custom Styling -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Custom Styling</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Apply custom classes and styles to toasts.
			</p>
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
			</div>
		</section>

		<!-- Important Toasts -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Important Toasts</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Important toasts stay on top of the stack.
			</p>
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
			</div>
		</section>

		<!-- Sequential Updates -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Sequential Updates</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Update the same toast through multiple stages.
			</p>
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
			</div>
		</section>

		<!-- Real-world Examples -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Real-world Examples</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Common use cases for toast notifications.
			</p>
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
								duration: 3000
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
								description: "A new version is ready to install.",
								action: {
									label: "Install Now",
									onClick: () => toast.loading("Installing update...")
								},
								duration: 10000
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
								description: "Your preferences have been updated.",
								action: {
									label: "Undo",
									onClick: () => toast.info("Changes reverted")
								}
							});
						}}
					>
						Save Settings
					</Button>
				</div>
			</div>
		</section>
	</div>
</div>