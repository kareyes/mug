export const listVariantsDocs = `
<script lang="ts">
	import { BreadcrumbPrimitives } from "@kareyes/aether";

	const {
		Breadcrumb,
		BreadcrumbList,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbSeparator,
		BreadcrumbPage
	} = BreadcrumbPrimitives;
</script>

<div class="space-y-6">
	<!-- Default -->
	<Breadcrumb>
		<BreadcrumbList variant="default">
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<!-- Solid -->
	<Breadcrumb>
		<BreadcrumbList variant="solid">
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>Getting Started</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<!-- Subtle -->
	<Breadcrumb>
		<BreadcrumbList variant="subtle">
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>Article</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<!-- Bold -->
	<Breadcrumb>
		<BreadcrumbList variant="bold">
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>Laptops</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>
</div>`;

export const linkVariantsDocs = `
<script lang="ts">
	import { BreadcrumbPrimitives } from "@kareyes/aether";

	const {
		Breadcrumb,
		BreadcrumbList,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbSeparator,
		BreadcrumbPage
	} = BreadcrumbPrimitives;
</script>

<div class="space-y-6">
	<!-- Default Link -->
	<Breadcrumb>
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink variant="default" href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>Profile</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<!-- Underline Link -->
	<Breadcrumb>
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink variant="underline" href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>Analytics</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<!-- Bold Link -->
	<Breadcrumb>
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink variant="bold" href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>Website</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<!-- Subtle Link -->
	<Breadcrumb>
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink variant="subtle" href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>FAQ</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>
</div>`;

export const separatorVariantsDocs = `
<script lang="ts">
	import { BreadcrumbPrimitives } from "@kareyes/aether";

	const {
		Breadcrumb,
		BreadcrumbList,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbSeparator,
		BreadcrumbPage
	} = BreadcrumbPrimitives;
</script>

<div class="space-y-6">
	<!-- Chevron (Default) -->
	<Breadcrumb>
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator variant="default" />
			<BreadcrumbItem>
				<BreadcrumbPage>Guide</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<!-- Slash -->
	<Breadcrumb>
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator variant="slash" />
			<BreadcrumbItem>
				<BreadcrumbPage>Introduction</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<!-- Dot -->
	<Breadcrumb>
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator variant="dot" />
			<BreadcrumbItem>
				<BreadcrumbPage>Team</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<!-- Arrow -->
	<Breadcrumb>
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator variant="arrow" />
			<BreadcrumbItem>
				<BreadcrumbPage>Website</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>
</div>`;

export const pageVariantsDocs = `
<script lang="ts">
	import { BreadcrumbPrimitives } from "@kareyes/aether";

	const {
		Breadcrumb,
		BreadcrumbList,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbSeparator,
		BreadcrumbPage
	} = BreadcrumbPrimitives;
</script>

<div class="space-y-6">
	<!-- Default Page -->
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

	<!-- Bold Page -->
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

	<!-- Muted Page -->
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

	<!-- Accent Page -->
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
</div>`;

export const sizesDocs = `
<script lang="ts">
	import { BreadcrumbPrimitives } from "@kareyes/aether";

	const {
		Breadcrumb,
		BreadcrumbList,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbSeparator,
		BreadcrumbPage
	} = BreadcrumbPrimitives;
</script>

<div class="space-y-6">
	<!-- Small -->
	<Breadcrumb>
		<BreadcrumbList size="sm">
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator size="sm" />
			<BreadcrumbItem>
				<BreadcrumbPage>Small Size</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<!-- Default -->
	<Breadcrumb>
		<BreadcrumbList size="default">
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator size="default" />
			<BreadcrumbItem>
				<BreadcrumbPage>Default Size</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<!-- Large -->
	<Breadcrumb>
		<BreadcrumbList size="lg">
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator size="lg" />
			<BreadcrumbItem>
				<BreadcrumbPage>Large Size</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>
</div>`;

export const spacingDocs = `
<script lang="ts">
	import { BreadcrumbPrimitives } from "@kareyes/aether";

	const {
		Breadcrumb,
		BreadcrumbList,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbSeparator,
		BreadcrumbPage
	} = BreadcrumbPrimitives;
</script>

<div class="space-y-6">
	<!-- Compact -->
	<Breadcrumb>
		<BreadcrumbList spacing="compact">
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>Compact</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<!-- Default -->
	<Breadcrumb>
		<BreadcrumbList spacing="default">
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>Default</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<!-- Relaxed -->
	<Breadcrumb>
		<BreadcrumbList spacing="relaxed">
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>Relaxed</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>
</div>`;

export const withIconsDocs = `
<script lang="ts">
	import { BreadcrumbPrimitives } from "@kareyes/aether";
	import { Home, Folder, File } from "@kareyes/aether/icons";

	const {
		Breadcrumb,
		BreadcrumbList,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbSeparator,
		BreadcrumbPage
	} = BreadcrumbPrimitives;
</script>

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
</Breadcrumb>`;

export const withEllipsisDocs = `
<script lang="ts">
	import { BreadcrumbPrimitives } from "@kareyes/aether";

	const {
		Breadcrumb,
		BreadcrumbList,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbSeparator,
		BreadcrumbPage,
		BreadcrumbEllipsis
	} = BreadcrumbPrimitives;
</script>

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
</Breadcrumb>`;

export const dynamicBreadcrumbsDocs = `
<script lang="ts">
	import { BreadcrumbPrimitives } from "@kareyes/aether";

	const {
		Breadcrumb,
		BreadcrumbList,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbSeparator,
		BreadcrumbPage
	} = BreadcrumbPrimitives;

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
</Breadcrumb>`;

export const advancedComboDocs = `
<script lang="ts">
	import { BreadcrumbPrimitives } from "@kareyes/aether";
	import { Home, User } from "@kareyes/aether/icons";

	const {
		Breadcrumb,
		BreadcrumbList,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbSeparator,
		BreadcrumbPage
	} = BreadcrumbPrimitives;
</script>

<div class="space-y-6">
	<!-- Bold + Slash + Large + Relaxed -->
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
				<BreadcrumbPage variant="bold">Electronics</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<!-- Solid + Arrow + Accent Page -->
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
				<BreadcrumbPage variant="accent">Security</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>
</div>`;
