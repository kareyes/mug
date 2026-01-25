<script lang="ts">
	import { Card, BreadcrumbPrimitives } from "@kareyes/aether";
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

<div class="container mx-auto space-y-8 py-8">
	<div class="space-y-2">
		<h1 class="text-3xl font-bold">Breadcrumb Component Variants</h1>
		<p class="text-muted-foreground">
			Comprehensive showcase of breadcrumb component with various styles and variants.
		</p>
	</div>

	<!-- List Variants -->
	<section class="space-y-4">
		<div class="space-y-1">
			<h2 class="text-2xl font-semibold">List Variants</h2>
			<p class="text-sm text-muted-foreground">
				Different visual styles for the breadcrumb list.
			</p>
		</div>

		<Card class="p-6 space-y-6">
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
		</Card>
	</section>

	<!-- Link Variants -->
	<section class="space-y-4">
		<div class="space-y-1">
			<h2 class="text-2xl font-semibold">Link Variants</h2>
			<p class="text-sm text-muted-foreground">
				Different hover and interaction styles for links.
			</p>
		</div>

		<Card class="p-6 space-y-6">
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
		</Card>
	</section>

	<!-- Separator Variants -->
	<section class="space-y-4">
		<div class="space-y-1">
			<h2 class="text-2xl font-semibold">Separator Variants</h2>
			<p class="text-sm text-muted-foreground">
				Different separator icons and styles.
			</p>
		</div>

		<Card class="p-6 space-y-6">
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
		</Card>
	</section>

	<!-- Page Variants -->
	<section class="space-y-4">
		<div class="space-y-1">
			<h2 class="text-2xl font-semibold">Page Variants</h2>
			<p class="text-sm text-muted-foreground">
				Different styles for the current page indicator.
			</p>
		</div>

		<Card class="p-6 space-y-6">
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
		</Card>
	</section>

	<!-- Sizes -->
	<section class="space-y-4">
		<div class="space-y-1">
			<h2 class="text-2xl font-semibold">Size Variants</h2>
			<p class="text-sm text-muted-foreground">
				Different sizes for various layouts.
			</p>
		</div>

		<Card class="p-6 space-y-6">
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
		</Card>
	</section>

	<!-- Spacing -->
	<section class="space-y-4">
		<div class="space-y-1">
			<h2 class="text-2xl font-semibold">Spacing Variants</h2>
			<p class="text-sm text-muted-foreground">
				Control the gap between breadcrumb items.
			</p>
		</div>

		<Card class="p-6 space-y-6">
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
		</Card>
	</section>

	<!-- With Icons -->
	<section class="space-y-4">
		<div class="space-y-1">
			<h2 class="text-2xl font-semibold">With Icons</h2>
			<p class="text-sm text-muted-foreground">
				Enhance breadcrumbs with icons for better visual communication.
			</p>
		</div>

		<Card class="p-6 space-y-6">
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
		</Card>
	</section>

	<!-- With Ellipsis -->
	<section class="space-y-4">
		<div class="space-y-1">
			<h2 class="text-2xl font-semibold">With Ellipsis</h2>
			<p class="text-sm text-muted-foreground">
				Collapse middle items for long breadcrumb trails.
			</p>
		</div>

		<Card class="p-6 space-y-6">
			<div class="space-y-2">
				<h3 class="text-sm font-medium">Collapsed Items</h3>
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
			</div>
		</Card>
	</section>

	<!-- Dynamic Breadcrumbs -->
	<section class="space-y-4">
		<div class="space-y-1">
			<h2 class="text-2xl font-semibold">Dynamic Breadcrumbs</h2>
			<p class="text-sm text-muted-foreground">
				Generated from data structure.
			</p>
		</div>

		<Card class="p-6">
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
		</Card>
	</section>

	<!-- Combinations -->
	<section class="space-y-4">
		<div class="space-y-1">
			<h2 class="text-2xl font-semibold">Advanced Combinations</h2>
			<p class="text-sm text-muted-foreground">
				Combining multiple variants for custom styles.
			</p>
		</div>

		<Card class="p-6 space-y-6">
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
		</Card>
	</section>
</div>