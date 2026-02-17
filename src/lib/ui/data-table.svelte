<script lang="ts">
	import {
		multiSelectDocs,
		singleSelectDocs,
		noSelectionDocs,
		stripedVariantDocs,
		borderedVariantDocs,
		compactVariantDocs,
		minimalConfigDocs,
		noPaginationDocs,
		expandableRowsDocs,
		responsiveDocs,
	} from "$lib/code-blocks/data-table";
	import { Card, CodeBlock } from "@kareyes/aether";
	import PreviewContainer from "../components/preview-container.svelte";

	const examples: { id: string; title: string; description: string; code?: string; height?: string }[] = [
		{ id: "multi-select", title: "Multi-Select with Page Size Selector", description: "Standard table with checkbox multi-selection and page size options", code: multiSelectDocs },
		{ id: "single-select", title: "Single Select", description: "Table with single row selection (radio button behavior)", code: singleSelectDocs },
		{ id: "no-selection", title: "No Selection", description: "Table without row selection capability", code: noSelectionDocs },
		{ id: "striped", title: "Striped Variant", description: "Alternating row background colors for better readability", code: stripedVariantDocs },
		{ id: "bordered", title: "Bordered Variant", description: "Enhanced borders between columns and around the table", code: borderedVariantDocs },
		{ id: "compact", title: "Compact Variant", description: "Reduced padding and smaller text for dense data display", code: compactVariantDocs },
		{ id: "minimal", title: "Minimal Configuration", description: "No filter, no column toggle, larger page size", code: minimalConfigDocs },
		{ id: "no-pagination", title: "No Pagination", description: "Shows all rows without pagination controls", code: noPaginationDocs, height: "800px" },
		{ id: "expandable", title: "Expandable Rows", description: "Click the chevron to expand rows and view additional details", code: expandableRowsDocs },
		{ id: "responsive", title: "Responsive Design", description: "The DataTable automatically adapts to different screen sizes. Use the buttons to force different display modes.", code: responsiveDocs },
		{ id: "column-meta", title: "Column Mobile Metadata", description: "Customize how columns appear in mobile card view using the meta field." },
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
						src="/preview/data-table/{example.id}/"
						title="{example.title} preview"
						class="w-full border-0 rounded-lg"
						style="height: {example.height ?? '500px'}"
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
