<script lang="ts">
	import { variantsDocs, sizesDocs, disabledDocs, loadingStateDocs, withIconsDocs, fullWidthDocs, buttonGroupsDocs, useCasesDocs } from "$lib/code-blocks/button";
	import { Button, Badge, Separator, Card, CodeBlock } from "@kareyes/aether";
	import { PlusIcon, SaveIcon, DownloadIcon } from "@kareyes/aether/icons";

	let loading = $state(false);
	let isLoading = $state(false);
	let clickCount = $state(0);

	const handleClick = async () => {
		loading = true;
		clickCount++;
		await new Promise((resolve) => setTimeout(resolve, 2000));
		loading = false;
	};

	const handleAsyncClick = async () => {
		isLoading = true;
		await new Promise((resolve) => setTimeout(resolve, 2000));
		isLoading = false;
	};
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<div class="mb-8">
		<div class="flex items-center gap-3 mb-2">
			<h1 class="text-3xl font-bold">Button Component</h1>
			<Badge variant="secondary">Interactive Demo</Badge>
		</div>
		<p class="text-muted-foreground">
			A versatile button component with multiple variants, sizes, and states.
		</p>
	</div>

	<div class="space-y-12">
		<!-- Variants -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Variants</h2>
			<p class="text-sm text-muted-foreground mb-4">Different visual styles for various contexts</p>
			<div class="flex flex-wrap gap-4">
				<Button variant="default" text="Default" onclick={handleClick} />
				<Button variant="destructive" text="Destructive" onclick={handleClick} />
				<Button variant="outline" text="Outline" onclick={handleClick} />
				<Button variant="secondary" text="Secondary" onclick={handleClick} />
				<Button variant="flat" text="Flat" onclick={handleClick} />
				<Button variant="bordered" text="Bordered" onclick={handleClick} />
				<Button variant="ghost" text="Ghost" onclick={handleClick} />
				<Button variant="link" text="Link" onclick={handleClick} />
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

		<!-- Sizes -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Sizes</h2>
			<p class="text-sm text-muted-foreground mb-4">Three size options to fit your design</p>
			<div class="flex flex-wrap items-center gap-4">
				<Button size="sm" text="Small" onclick={handleClick} />
				<Button size="default" text="Default" onclick={handleClick} />
				<Button size="lg" text="Large" onclick={handleClick} />
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

		<!-- States -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">States</h2>
			<p class="text-sm text-muted-foreground mb-4">Different button states and interactions</p>
			<div class="grid gap-6 md:grid-cols-2">
				<div class="space-y-3">
					<h3 class="text-lg font-medium">Disabled</h3>
					<div class="flex flex-wrap gap-4">
						<Button text="Disabled Default" disabled />
						<Button variant="outline" text="Disabled Outline" disabled />
						<Button variant="destructive" text="Disabled Destructive" disabled />
					</div>
				</div>

				<div class="space-y-3">
					<h3 class="text-lg font-medium">Loading State</h3>
					<div class="flex flex-wrap gap-4">
						<Button
							text={isLoading ? 'Loading...' : 'Click to Load'}
							onclick={handleAsyncClick}
							disabled={isLoading}
						/>
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
				code={disabledDocs}
			/>
		</Card>

		<!-- With Icons -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">With Icons</h2>
			<p class="text-sm text-muted-foreground mb-4">Buttons can contain custom content using slots</p>
			<div class="flex flex-wrap gap-4">
				<Button onclick={handleClick} icon={PlusIcon} text="Add Item" />
				<Button variant="outline" text="Save Changes" onclick={handleClick} icon={SaveIcon} />
				<Button variant="secondary" text="Download" onclick={handleClick} icon={DownloadIcon} />
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={withIconsDocs}
			/>
		</Card>

		<!-- Interactive Demo -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Interactive Demo</h2>
			<p class="text-sm text-muted-foreground mb-4">Click the button to see it in action</p>
			<div class="space-y-4">
				<div class="flex items-center gap-4">
					<Button text="Click Me!" onclick={handleClick} size="lg" />
					<div class="flex items-center gap-2">
						<Badge>Clicks: {clickCount}</Badge>
					</div>
				</div>
				{#if clickCount > 0}
					<p class="text-sm text-muted-foreground">
						Button clicked {clickCount} time{clickCount !== 1 ? 's' : ''}!
					</p>
				{/if}
			</div>
		</Card>

		<!-- Full Width -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Full Width</h2>
			<p class="text-sm text-muted-foreground mb-4">Buttons can span the full width of their container</p>
			<div class="space-y-3">
				<Button text="Full Width Button" onclick={handleClick} class="w-full" />
				<Button variant="outline" text="Full Width Outline" onclick={handleClick} class="w-full" />
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={fullWidthDocs}
			/>
		</Card>

		<!-- Button Groups -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Button Groups</h2>
			<p class="text-sm text-muted-foreground mb-4">Multiple buttons working together</p>
			<div class="space-y-6">
				<div>
					<p class="text-sm font-medium mb-3">Action Group</p>
					<div class="flex gap-2">
						<Button variant="outline" text="Cancel" onclick={handleClick} />
						<Button text="Save" onclick={handleClick} />
					</div>
				</div>

				<Separator />

				<div>
					<p class="text-sm font-medium mb-3">Navigation Group</p>
					<div class="flex gap-2">
						<Button variant="outline" text="Previous" onclick={handleClick} />
						<Button variant="outline" text="1" onclick={handleClick} />
						<Button variant="default" text="2" onclick={handleClick} />
						<Button variant="outline" text="3" onclick={handleClick} />
						<Button variant="outline" text="Next" onclick={handleClick} />
					</div>
				</div>

				<Separator />

				<div>
					<p class="text-sm font-medium mb-3">Toolbar</p>
					<div class="flex gap-2">
						<Button variant="ghost" size="sm" onclick={handleClick}>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
								<polyline points="14 2 14 8 20 8" />
							</svg>
						</Button>
						<Button variant="ghost" size="sm" onclick={handleClick}>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
								<polyline points="17 8 12 3 7 8" />
								<line x1="12" x2="12" y1="3" y2="15" />
							</svg>
						</Button>
						<Button variant="ghost" size="sm" onclick={handleClick}>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<polyline points="3 6 5 6 21 6" />
								<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
							</svg>
						</Button>
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
				code={buttonGroupsDocs}
			/>
		</Card>

		<!-- Common Use Cases -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Common Use Cases</h2>
			<p class="text-sm text-muted-foreground mb-4">Real-world button usage scenarios</p>
			<div class="grid gap-6 md:grid-cols-2">
				<div class="p-4 border rounded-lg space-y-3">
					<h3 class="font-medium">Form Actions</h3>
					<div class="flex gap-2 justify-end">
						<Button variant="outline" text="Cancel" onclick={handleClick} />
						<Button variant="default" text="Submit" onclick={handleClick} />
					</div>
				</div>

				<div class="p-4 border rounded-lg space-y-3">
					<h3 class="font-medium">Delete Confirmation</h3>
					<p class="text-sm text-muted-foreground mb-4">
						Are you sure you want to delete this item?
					</p>
					<div class="flex gap-2">
						<Button variant="outline" text="Cancel" onclick={handleClick} />
						<Button variant="destructive" text="Delete" onclick={handleClick} />
					</div>
				</div>

				<div class="p-4 border rounded-lg space-y-3">
					<h3 class="font-medium">Social Actions</h3>
					<div class="flex flex-wrap gap-2">
						<Button variant="default" text="Follow" onclick={handleClick} />
						<Button variant="outline" text="Message" onclick={handleClick} />
						<Button variant="ghost" text="Share" onclick={handleClick} />
					</div>
				</div>

				<div class="p-4 border rounded-lg space-y-3 text-center">
					<h3 class="font-medium">Call to Action</h3>
					<Button text="Get Started" onclick={handleClick} size="lg" class="w-full" />
					<Button variant="link" text="Learn more" onclick={handleClick} class="w-full text-sm" />
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
				code={useCasesDocs}
			/>
		</Card>
	</div>
</div>
