<script lang="ts">
	import { listVariantsDocs, linkVariantsDocs, separatorVariantsDocs, pageVariantsDocs, sizesDocs, spacingDocs, withIconsDocs, withEllipsisDocs, dynamicBreadcrumbsDocs, advancedComboDocs } from "$lib/code-blocks/breadcrumb";
	import { Card, CodeBlock, BreadcrumbPrimitives } from "@kareyes/aether";
	import { Home, Folder, File, Package, Settings, User } from "@kareyes/aether/icons";

	const {
		Breadcrumb,
		BreadcrumbList,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbSeparator,
		BreadcrumbPage,
		BreadcrumbEllipsis
	} = BreadcrumbPrimitives;

	// Dynamic breadcrumb example
	type PathSegment = {
		label: string;
		href?: string;
	};

	let dynamicSegments: PathSegment[] = $state([
		{ label: "Home", href: "/" },
		{ label: "Products", href: "/products" },
		{ label: "Electronics", href: "/products/electronics" },
		{ label: "Laptops" }
	]);
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<!-- <div class="mb-8">
		<h1 class="text-3xl font-bold mb-2">Breadcrumb Component</h1>
		<p class="text-muted-foreground">
			Comprehensive showcase of breadcrumb component with various styles and variants.
		</p>
	</div> -->

	<div class="space-y-12">
		<!-- List Variants -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">List Variants</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Different visual styles for the breadcrumb list.
			</p>

			<div class="space-y-6">
				<div class="space-y-2">
					<h3 class="text-sm font-medium">Default</h3>
					<Breadcrumb>
						<BreadcrumbList variant="default">
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="/components">Components</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Solid</h3>
					<Breadcrumb>
						<BreadcrumbList variant="solid">
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Getting Started</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Subtle</h3>
					<Breadcrumb>
						<BreadcrumbList variant="subtle">
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Article</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Bold</h3>
					<Breadcrumb>
						<BreadcrumbList variant="bold">
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="/products">Products</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Laptops</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
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
				code={listVariantsDocs}
			/>
		</Card>

		<!-- Link Variants -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Link Variants</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Different hover and interaction styles for links.
			</p>

			<div class="space-y-6">
				<div class="space-y-2">
					<h3 class="text-sm font-medium">Default Link</h3>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink variant="default" href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink variant="default" href="/settings">Settings</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Profile</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Underline Link</h3>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink variant="underline" href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink variant="underline" href="/dashboard">Dashboard</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Analytics</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Bold Link</h3>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink variant="bold" href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink variant="bold" href="/projects">Projects</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Website</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Subtle Link</h3>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink variant="subtle" href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink variant="subtle" href="/help">Help</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>FAQ</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
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
				code={linkVariantsDocs}
			/>
		</Card>

		<!-- Separator Variants -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Separator Variants</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Different separator icons and styles.
			</p>

			<div class="space-y-6">
				<div class="space-y-2">
					<h3 class="text-sm font-medium">Chevron (Default)</h3>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator variant="default" />
							<BreadcrumbItem>
								<BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator variant="default" />
							<BreadcrumbItem>
								<BreadcrumbPage>Guide</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Slash</h3>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator variant="slash" />
							<BreadcrumbItem>
								<BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator variant="slash" />
							<BreadcrumbItem>
								<BreadcrumbPage>Introduction</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Dot</h3>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator variant="dot" />
							<BreadcrumbItem>
								<BreadcrumbLink href="/about">About</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator variant="dot" />
							<BreadcrumbItem>
								<BreadcrumbPage>Team</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Arrow</h3>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator variant="arrow" />
							<BreadcrumbItem>
								<BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator variant="arrow" />
							<BreadcrumbItem>
								<BreadcrumbPage>Website</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Custom Separator</h3>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator>
								<span class="text-muted-foreground">→</span>
							</BreadcrumbSeparator>
							<BreadcrumbItem>
								<BreadcrumbLink href="/custom">Custom</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator>
								<span class="text-muted-foreground">→</span>
							</BreadcrumbSeparator>
							<BreadcrumbItem>
								<BreadcrumbPage>Separator</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
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
				code={separatorVariantsDocs}
			/>
		</Card>

		<!-- Page Variants -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Page Variants</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Different styles for the current page indicator.
			</p>

			<div class="space-y-6">
				<div class="space-y-2">
					<h3 class="text-sm font-medium">Default Page</h3>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage variant="default">Current Page</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Bold Page</h3>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage variant="bold">Current Page</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Muted Page</h3>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage variant="muted">Current Page</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Accent Page</h3>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage variant="accent">Current Page</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
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
				code={pageVariantsDocs}
			/>
		</Card>

		<!-- Sizes -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Size Variants</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Different sizes for various layouts.
			</p>

			<div class="space-y-6">
				<div class="space-y-2">
					<h3 class="text-sm font-medium">Small</h3>
					<Breadcrumb>
						<BreadcrumbList size="sm">
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator size="sm" />
							<BreadcrumbItem>
								<BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator size="sm" />
							<BreadcrumbItem>
								<BreadcrumbPage>Small Size</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Default</h3>
					<Breadcrumb>
						<BreadcrumbList size="default">
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator size="default" />
							<BreadcrumbItem>
								<BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator size="default" />
							<BreadcrumbItem>
								<BreadcrumbPage>Default Size</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Large</h3>
					<Breadcrumb>
						<BreadcrumbList size="lg">
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator size="lg" />
							<BreadcrumbItem>
								<BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator size="lg" />
							<BreadcrumbItem>
								<BreadcrumbPage>Large Size</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
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
				code={sizesDocs}
			/>
		</Card>

		<!-- Spacing -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Spacing Variants</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Control the gap between breadcrumb items.
			</p>

			<div class="space-y-6">
				<div class="space-y-2">
					<h3 class="text-sm font-medium">Compact</h3>
					<Breadcrumb>
						<BreadcrumbList spacing="compact">
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="/products">Products</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Compact</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Default</h3>
					<Breadcrumb>
						<BreadcrumbList spacing="default">
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="/products">Products</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Default</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Relaxed</h3>
					<Breadcrumb>
						<BreadcrumbList spacing="relaxed">
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="/products">Products</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Relaxed</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
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
				code={spacingDocs}
			/>
		</Card>

		<!-- With Icons -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">With Icons</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Enhance breadcrumbs with icons for better visual communication.
			</p>

			<div class="space-y-6">
				<div class="space-y-2">
					<h3 class="text-sm font-medium">File Navigation</h3>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">
									<Home class="size-4" />
									<span>Home</span>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="/documents">
									<Folder class="size-4" />
									<span>Documents</span>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>
									<File class="size-4" />
									<span>readme.md</span>
								</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Application Navigation</h3>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">
									<Home class="size-4" />
									<span>Dashboard</span>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator variant="arrow" />
							<BreadcrumbItem>
								<BreadcrumbLink href="/products">
									<Package class="size-4" />
									<span>Products</span>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator variant="arrow" />
							<BreadcrumbItem>
								<BreadcrumbPage variant="accent">
									<Settings class="size-4" />
									<span>Settings</span>
								</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
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
				code={withIconsDocs}
			/>
		</Card>

		<!-- With Ellipsis -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">With Ellipsis</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Collapse middle items for long breadcrumb trails.
			</p>

			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbEllipsis />
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href="/components">Components</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={withEllipsisDocs}
			/>
		</Card>

		<!-- Dynamic Breadcrumbs -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Dynamic Breadcrumbs</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Generated from data structure.
			</p>

			<Breadcrumb>
				<BreadcrumbList>
					{#each dynamicSegments as segment, i}
						<BreadcrumbItem>
							{#if segment.href}
								<BreadcrumbLink href={segment.href}>{segment.label}</BreadcrumbLink>
							{:else}
								<BreadcrumbPage>{segment.label}</BreadcrumbPage>
							{/if}
						</BreadcrumbItem>
						{#if i < dynamicSegments.length - 1}
							<BreadcrumbSeparator />
						{/if}
					{/each}
				</BreadcrumbList>
			</Breadcrumb>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={dynamicBreadcrumbsDocs}
			/>
		</Card>

		<!-- Advanced Combinations -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Advanced Combinations</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Combining multiple variants for custom styles.
			</p>

			<div class="space-y-6">
				<div class="space-y-2">
					<h3 class="text-sm font-medium">Bold + Slash + Large + Relaxed</h3>
					<Breadcrumb>
						<BreadcrumbList variant="bold" size="lg" spacing="relaxed">
							<BreadcrumbItem>
								<BreadcrumbLink variant="bold" href="/">
									<Home class="size-5" />
									<span>Home</span>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator variant="slash" size="lg" />
							<BreadcrumbItem>
								<BreadcrumbLink variant="bold" href="/products">Products</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator variant="slash" size="lg" />
							<BreadcrumbItem>
								<BreadcrumbPage variant="bold">Electronics</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Subtle + Underline + Dot + Small</h3>
					<Breadcrumb>
						<BreadcrumbList variant="subtle" size="sm" spacing="compact">
							<BreadcrumbItem>
								<BreadcrumbLink variant="underline" href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator variant="dot" size="sm" />
							<BreadcrumbItem>
								<BreadcrumbLink variant="underline" href="/blog">Blog</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator variant="dot" size="sm" />
							<BreadcrumbItem>
								<BreadcrumbPage variant="muted">Post</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Solid + Arrow + Accent Page</h3>
					<Breadcrumb>
						<BreadcrumbList variant="solid">
							<BreadcrumbItem>
								<BreadcrumbLink href="/">
									<User class="size-4" />
									<span>Account</span>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator variant="arrow" />
							<BreadcrumbItem>
								<BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator variant="arrow" />
							<BreadcrumbItem>
								<BreadcrumbPage variant="accent">Security</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
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
				code={advancedComboDocs}
			/>
		</Card>
	</div>
</div>
