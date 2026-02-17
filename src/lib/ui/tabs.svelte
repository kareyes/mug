<script lang="ts">
	import {
		defaultVariantDocs,
		underlineVariantDocs,
		pillsVariantDocs,
		solidVariantDocs,
		segmentedVariantDocs,
		sizeVariantsDocs,
		animationVariantsDocs,
		overflowScrollDocs,
		verticalDocs,
		dropdownMobileDocs,
		disabledDocs,
		combinationsDocs,
	} from "$lib/code-blocks/tabs";
	import { Card, CodeBlock } from "@kareyes/aether";
	import PreviewContainer from "../components/preview-container.svelte";

	const examples: { id: string; title: string; description: string; code?: string; height?: string }[] = [
		{ id: "default", title: "Default Variant", description: "The standard tabs style with background and rounded corners.", code: defaultVariantDocs },
		{ id: "underline", title: "Underline Variant", description: "Clean underline style with active indicator at the bottom.", code: underlineVariantDocs },
		{ id: "pills", title: "Pills Variant", description: "Rounded pill-style tabs with smooth transitions.", code: pillsVariantDocs },
		{ id: "solid", title: "Solid Variant", description: "Bold solid background style with primary color for active state.", code: solidVariantDocs },
		{ id: "segmented", title: "Segmented Variant", description: "Segmented control style with continuous background.", code: segmentedVariantDocs },
		{ id: "size-variants", title: "Size Variants", description: "Different sizes for various use cases.", code: sizeVariantsDocs, height: "450px" },
		{ id: "animation", title: "Animation Variants", description: "Different transition effects for content changes.", code: animationVariantsDocs, height: "450px" },
		{ id: "overflow-scroll", title: "Responsive: Overflow Scroll", description: "Many tabs in a single row. On mobile (≤640px), the tab list scrolls horizontally with a hidden scrollbar.", code: overflowScrollDocs, height: "500px" },
		{ id: "vertical", title: "Responsive: Vertical Tabs", description: "Vertical tabs automatically convert to horizontal layout on mobile (≤640px). Resize the browser to see the switch.", code: verticalDocs, height: "500px" },
		{ id: "dropdown-mobile", title: "Dropdown on Mobile", description: "With dropdownOnMobile and items props, tabs convert to a Select dropdown on mobile (≤640px).", code: dropdownMobileDocs, height: "500px" },
		{ id: "disabled", title: "Disabled Tabs", description: "Individual tabs can be disabled while keeping others interactive.", code: disabledDocs },
		{ id: "combinations", title: "Combinations", description: "Mixing variants, sizes, and animations.", code: combinationsDocs, height: "550px" },
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
						src="/preview/tabs/{example.id}/"
						title="{example.title} preview"
						class="w-full border-0 rounded-lg"
						style="height: {example.height ?? '300px'}"
					></iframe>
				</PreviewContainer>
				{#if example.code}
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
				{/if}
			</Card>
		{/each}
	</div>
</div>
