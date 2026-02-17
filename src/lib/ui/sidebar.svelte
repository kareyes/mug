<script lang="ts">
	import { Card, CodeBlock } from "@kareyes/aether";
	import {
		basicExampleDocs,
		headerFooterDocs,
		nestedSubmenusDocs,
		actionsBadgesDocs,
		searchGroupsDocs,
		floatingDocs,
		loadingDocs,
		sizeVariantsDocs,
		linkNavigationDocs,
	} from "../code-blocks/sidebar";
	import PreviewContainer from "../components/preview-container.svelte";

	const examples: { id: string; title: string; description: string; code: string }[] = [
		{ id: "basic", title: "Basic Example", description: "Icon collapsible sidebar with navigation menu items.", code: basicExampleDocs },
		{ id: "header-footer", title: "With Header and Footer", description: "Sidebar with organization branding in header and user info in footer.", code: headerFooterDocs },
		{ id: "nested-submenus", title: "With Nested Submenus", description: "Organize navigation with collapsible submenus for better hierarchy.", code: nestedSubmenusDocs },
		{ id: "actions-badges", title: "With Actions and Badges", description: "Menu items with notification counts and quick actions.", code: actionsBadgesDocs },
		{ id: "search-groups", title: "With Search and Multiple Groups", description: "Complex sidebar with search input and organized sections.", code: searchGroupsDocs },
		{ id: "floating", title: "Floating Variant", description: "Sidebar floats over content with shadow effect.", code: floatingDocs },
		{ id: "loading", title: "Loading State", description: "Skeleton placeholders while content is loading.", code: loadingDocs },
		{ id: "size-variants", title: "Button Size Variants", description: "Small, default, and large button sizes for different use cases.", code: sizeVariantsDocs },
		{ id: "link-navigation", title: "Link-Based Navigation", description: "Using the child snippet pattern with anchor tags for proper navigation links.", code: linkNavigationDocs },
	];
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<div class="space-y-12">
		{#each examples as example}
			<Card variant="ghost" class="p-6 bg-background">
				<h2 class="text-2xl font-semibold mb-4">{example.title}</h2>
				<p class="text-sm text-muted-foreground mb-4">{example.description}</p>
				<PreviewContainer>
					<iframe
						src="/preview/sidebar/{example.id}"
						title="{example.title} preview"
						class="w-full border-0 rounded-lg"
						style="height: 600px"
					></iframe>
				</PreviewContainer>
				<br />
				<CodeBlock
					title="Code"
					language="Svelte"
					showLineNumbers
					collapsible
					maxHeight="250px"
					variant="default"
					code={example.code}
				/>
			</Card>
		{/each}
	</div>
</div>
