<script lang="ts">
	import {
		basicUsageDocs,
		contentVariantsDocs,
		contentSizesDocs,
		triggerVariantsDocs,
		animationsDocs,
		positioningDocs,
		controlledStateDocs,
		realisticExamplesDocs,
		compositionalDocs,
	} from "$lib/code-blocks/popover";
	import {
		Popover,
		PopoverPrimitives,
		Button,
		Card,
		CodeBlock,
		Input,
		Label,
		Field,
		Switch,
	} from "@kareyes/aether";
	import {
		Settings,
		User,
		Info,
		EllipsisVertical,
		Bell,
	} from "@kareyes/aether/icons";
	import PreviewContainer from "../components/preview-container.svelte";

	let controlled = $state(false);
	let width = $state("100%");
	let maxWidth = $state("300px");
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<div class="space-y-12">

		<!-- Basic Usage -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Single Popover component with triggerText and children content, or a custom trigger snippet.
			</p>
			<PreviewContainer>
				<div class="flex flex-wrap gap-4 items-start min-h-[160px]">
					<Popover triggerText="Open Popover">
						<div class="space-y-2">
							<h4 class="font-medium leading-none">Dimensions</h4>
							<p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
						</div>
					</Popover>

					<Popover triggerVariant="outline">
						{#snippet trigger()}
							<Settings class="size-4 mr-2" /> Settings
						{/snippet}
						<div class="space-y-2">
							<h4 class="font-medium leading-none">Preferences</h4>
							<p class="text-sm text-muted-foreground">Adjust your settings.</p>
						</div>
					</Popover>

					<Popover triggerVariant="ghost" triggerSize="sm" contentSize="sm" contentVariant="minimal">
						{#snippet trigger()}<Info class="size-4" />{/snippet}
						<p class="text-sm">Additional information about this feature.</p>
					</Popover>
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
				code={basicUsageDocs}
			/>
		</Card>

		<!-- Content Variants -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Content Variants</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Five panel styles via the contentVariant prop.
			</p>
			<PreviewContainer>
				<div class="flex flex-wrap gap-4 items-start min-h-[160px]">
					<Popover triggerText="Default" contentVariant="default">
						<p class="text-sm text-muted-foreground">Standard shadow with border.</p>
					</Popover>

					<Popover triggerText="Bordered" triggerVariant="outline" contentVariant="bordered">
						<p class="text-sm text-muted-foreground">Emphasized border, lighter shadow.</p>
					</Popover>

					<Popover triggerText="Elevated" contentVariant="elevated">
						<p class="text-sm text-muted-foreground">Larger shadow, no border.</p>
					</Popover>

					<Popover triggerText="Minimal" triggerVariant="ghost" contentVariant="minimal">
						<p class="text-sm text-muted-foreground">Subtle, light border.</p>
					</Popover>

					<Popover
						triggerText="Ghost"
						contentVariant="ghost"
						contentClass="bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white"
					>
						<p class="text-sm">Transparent base for full custom styling.</p>
					</Popover>
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
				code={contentVariantsDocs}
			/>
		</Card>

		<!-- Content Sizes -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Content Sizes</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Four size options via the contentSize prop.
			</p>
			<PreviewContainer>
				<div class="flex flex-wrap gap-4 items-start min-h-[160px]">
					<Popover triggerText="Small" triggerSize="sm" contentSize="sm">
						<p class="text-sm text-muted-foreground">Compact content — w-56.</p>
					</Popover>

					<Popover triggerText="Default" contentSize="default">
						<p class="text-sm text-muted-foreground">Standard content — w-72.</p>
					</Popover>

					<Popover triggerText="Large" triggerSize="lg" contentSize="lg">
						<p class="text-sm text-muted-foreground">Spacious content — w-96.</p>
					</Popover>

					<Popover triggerText="Auto" triggerVariant="outline" contentSize="auto" contentClass="w-auto">
						<p class="text-sm text-muted-foreground whitespace-nowrap">Width follows content.</p>
					</Popover>
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
				code={contentSizesDocs}
			/>
		</Card>

		<!-- Trigger Variants -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Trigger Variants</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Five trigger styles via the triggerVariant prop.
			</p>
			<PreviewContainer>
				<div class="flex flex-wrap gap-4 items-start min-h-[160px]">
					<Popover triggerText="Button" triggerVariant="button">
						<p class="text-sm text-muted-foreground">Primary button trigger.</p>
					</Popover>

					<Popover triggerText="Outline" triggerVariant="outline">
						<p class="text-sm text-muted-foreground">Outlined button trigger.</p>
					</Popover>

					<Popover triggerText="Ghost" triggerVariant="ghost">
						<p class="text-sm text-muted-foreground">Ghost button trigger.</p>
					</Popover>

					<Popover triggerText="Link" triggerVariant="link">
						<p class="text-sm text-muted-foreground">Link-style trigger.</p>
					</Popover>

					<Popover triggerVariant="default" triggerClass="rounded-full p-2 hover:bg-accent">
						{#snippet trigger()}<EllipsisVertical class="size-4" />{/snippet}
						<p class="text-sm text-muted-foreground">Custom icon trigger.</p>
					</Popover>
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
				code={triggerVariantsDocs}
			/>
		</Card>

		<!-- Animations -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Animations</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Five entry/exit effects via the animation prop.
			</p>
			<PreviewContainer>
				<div class="flex flex-wrap gap-4 items-start min-h-[160px]">
					<Popover triggerText="Default" animation="default">
						<p class="text-sm text-muted-foreground">Fade + zoom + slide combined.</p>
					</Popover>

					<Popover triggerText="Fade" animation="fade" triggerVariant="outline">
						<p class="text-sm text-muted-foreground">Simple fade in/out.</p>
					</Popover>

					<Popover triggerText="Scale" animation="scale" triggerVariant="outline">
						<p class="text-sm text-muted-foreground">Zoom in/out effect.</p>
					</Popover>

					<Popover triggerText="Slide" animation="slide" triggerVariant="outline">
						<p class="text-sm text-muted-foreground">Slides from placement direction.</p>
					</Popover>

					<Popover triggerText="None" animation="none" triggerVariant="outline">
						<p class="text-sm text-muted-foreground">Instant show/hide.</p>
					</Popover>
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
				code={animationsDocs}
			/>
		</Card>

		<!-- Positioning -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Positioning</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Control placement with the side and align props.
			</p>
			<PreviewContainer>
				<div class="grid place-items-center min-h-[200px]">
					<div class="grid grid-cols-3 gap-3 w-fit">
						<div></div>
						<Popover triggerText="Top" triggerVariant="outline" triggerSize="sm" side="top">
							<p class="text-sm">Appears above trigger.</p>
						</Popover>
						<div></div>

						<Popover triggerText="Left" triggerVariant="outline" triggerSize="sm" side="left">
							<p class="text-sm">Appears to the left.</p>
						</Popover>
						<div class="size-10 rounded bg-muted"></div>
						<Popover triggerText="Right" triggerVariant="outline" triggerSize="sm" side="right">
							<p class="text-sm">Appears to the right.</p>
						</Popover>

						<div></div>
						<Popover triggerText="Bottom" triggerVariant="outline" triggerSize="sm" side="bottom">
							<p class="text-sm">Appears below trigger.</p>
						</Popover>
						<div></div>
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
				code={positioningDocs}
			/>
		</Card>

		<!-- Controlled State -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Controlled State</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Bind the open prop for full external control.
			</p>
			<PreviewContainer>
				<div class="flex items-center gap-6 min-h-[120px]">
					<Field label="External toggle" orientation="horizontal">
						<Switch bind:checked={controlled} />
					</Field>

					<Popover
						open={controlled}
						onOpenChange={(v) => (controlled = v)}
						triggerText="Controlled Popover"
						triggerVariant="outline"
					>
						<div class="space-y-3">
							<p class="text-sm text-muted-foreground">
								This popover is {controlled ? "open" : "closed"} — toggle the switch to control it externally.
							</p>
							<Button size="sm" variant="outline" onclick={() => (controlled = false)}>
								Close
							</Button>
						</div>
					</Popover>
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
				code={controlledStateDocs}
			/>
		</Card>

		<!-- Realistic Examples -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Realistic Examples</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Common patterns — dimensions form, user profile, action menu, notification bell.
			</p>
			<PreviewContainer>
				<div class="flex flex-wrap gap-6 items-start min-h-[200px]">
					<Popover contentClass="w-80" contentVariant="default">
						{#snippet trigger()}
							<Settings class="size-4 mr-2" /> Dimensions
						{/snippet}
						<div class="grid gap-4">
							<div class="space-y-1">
								<h4 class="font-medium leading-none">Dimensions</h4>
								<p class="text-sm text-muted-foreground">Set the layer dimensions.</p>
							</div>
							<div class="grid gap-2">
								<div class="grid grid-cols-3 items-center gap-4">
									<Label for="width">Width</Label>
									<Input id="width" bind:value={width} class="col-span-2 h-8" />
								</div>
								<div class="grid grid-cols-3 items-center gap-4">
									<Label for="max-width">Max. width</Label>
									<Input id="max-width" bind:value={maxWidth} class="col-span-2 h-8" />
								</div>
							</div>
						</div>
					</Popover>

					<Popover
						triggerVariant="default"
						triggerClass="rounded-full"
						contentVariant="elevated"
						contentSize="sm"
						align="end"
					>
						{#snippet trigger()}
							<div class="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-accent">
								<div class="size-6 rounded-full bg-primary/20 flex items-center justify-center">
									<User class="size-4" />
								</div>
								<span class="text-sm font-medium">John Doe</span>
							</div>
						{/snippet}
						<div class="flex flex-col gap-3">
							<div class="flex items-center gap-3">
								<div class="size-10 rounded-full bg-primary/10 flex items-center justify-center">
									<User class="size-5" />
								</div>
								<div>
									<p class="font-medium text-sm">John Doe</p>
									<p class="text-xs text-muted-foreground">john@example.com</p>
								</div>
							</div>
							<div class="flex flex-col gap-1">
								<Button variant="ghost" size="sm" class="justify-start">Profile</Button>
								<Button variant="ghost" size="sm" class="justify-start">Settings</Button>
								<Button variant="ghost" size="sm" class="justify-start text-destructive hover:text-destructive">Sign out</Button>
							</div>
						</div>
					</Popover>

					<Popover
						triggerVariant="ghost"
						triggerSize="sm"
						contentVariant="minimal"
						contentSize="auto"
						contentClass="p-1 w-40"
					>
						{#snippet trigger()}<EllipsisVertical class="size-4" />{/snippet}
						<div class="flex flex-col">
							<button class="px-3 py-2 text-sm hover:bg-accent rounded text-left">Edit</button>
							<button class="px-3 py-2 text-sm hover:bg-accent rounded text-left">Duplicate</button>
							<button class="px-3 py-2 text-sm hover:bg-accent rounded text-left">Archive</button>
							<div class="h-px bg-border my-1"></div>
							<button class="px-3 py-2 text-sm hover:bg-accent rounded text-left text-destructive">Delete</button>
						</div>
					</Popover>

					<Popover
						triggerVariant="ghost"
						triggerSize="sm"
						triggerClass="relative"
						contentVariant="default"
						contentSize="default"
						align="end"
					>
						{#snippet trigger()}
							<Bell class="size-4" />
							<span class="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-destructive"></span>
						{/snippet}
						<div class="space-y-3">
							<h4 class="font-medium text-sm">Notifications</h4>
							<div class="space-y-2">
								{#each ["New comment on your post", "Deployment completed", "Invite accepted"] as note}
									<div class="flex items-start gap-2 text-sm">
										<div class="size-2 rounded-full bg-primary mt-1.5 shrink-0"></div>
										<p class="text-muted-foreground">{note}</p>
									</div>
								{/each}
							</div>
							<Button variant="outline" size="sm" class="w-full">View all</Button>
						</div>
					</Popover>
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
				code={realisticExamplesDocs}
			/>
		</Card>

		<!-- Compositional API -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Compositional API</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Use PopoverPrimitives.* for full structural control — custom arrows, close buttons, nested layouts.
			</p>
			<PreviewContainer>
				<div class="flex flex-wrap gap-4 items-start min-h-[160px]">
					<PopoverPrimitives.Root>
						<PopoverPrimitives.Trigger variant="button">With Arrow</PopoverPrimitives.Trigger>
						<PopoverPrimitives.Content>
							<PopoverPrimitives.Arrow class="fill-popover stroke-border" />
							<div class="space-y-2">
								<h4 class="font-medium leading-none">Arrow Indicator</h4>
								<p class="text-sm text-muted-foreground">Points to the trigger.</p>
							</div>
						</PopoverPrimitives.Content>
					</PopoverPrimitives.Root>

					<PopoverPrimitives.Root>
						<PopoverPrimitives.Trigger variant="outline">With Close</PopoverPrimitives.Trigger>
						<PopoverPrimitives.Content>
							<div class="space-y-4">
								<div class="space-y-1">
									<h4 class="font-medium leading-none">Information</h4>
									<p class="text-sm text-muted-foreground">This popover has a close button.</p>
								</div>
								<PopoverPrimitives.Close>
									<Button variant="outline" size="sm" class="w-full">Dismiss</Button>
								</PopoverPrimitives.Close>
							</div>
						</PopoverPrimitives.Content>
					</PopoverPrimitives.Root>
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
				code={compositionalDocs}
			/>
		</Card>

	</div>
</div>
