<script lang="ts">
	import {
		orientationsDocs,
		sizesVariantsDocs,
		interactiveFeaturesDocs,
		stepStatesDocs,
		circularDocs,
		practicalExamplesDocs,
		customContentDocs,
	} from "../code-blocks/stepper";
	import { Card, CodeBlock } from "@kareyes/aether";
	import PreviewContainer from "../components/preview-container.svelte";

	const examples: { id: string; title: string; description: string; code?: string; height?: string }[] = [
		{
			id: "orientations",
			title: "Orientations",
			description: "Horizontal and vertical layout options.",
			code: orientationsDocs,
			height: "350px",
		},
		{
			id: "sizes-variants",
			title: "Sizes & Variants",
			description: "Different sizes and visual styles.",
			code: sizesVariantsDocs,
			height: "900px",
		},
		{
			id: "interactive",
			title: "Interactive Features",
			description: "Clickable steps and custom icons.",
			code: interactiveFeaturesDocs,
			height: "500px",
		},
		{
			id: "step-states",
			title: "Step States",
			description: "Per-step error, loading, and disabled states override the normal completed/active/inactive appearance. Priority: disabled → error → loading → completed → active → inactive.",
			code: stepStatesDocs,
			height: "700px",
		},
		{
			id: "circular",
			title: "Circular Progress Mode",
			description: "mobileLayout=\"circular\" — below md (768px) the step list is replaced by a radial progress ring. Desktop stays horizontal. Resize the browser to see the switch.",
			code: circularDocs,
			height: "750px",
		},
		{
			id: "practical",
			title: "Practical Examples",
			description: "Real-world use cases and implementations.",
			code: practicalExamplesDocs,
			height: "950px",
		},
		{
			id: "custom-content",
			title: "Custom Label & Description",
			description: "Using children snippet for custom step content.",
			code: customContentDocs,
			height: "750px",
		},
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
						src="/preview/stepper/{example.id}/"
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
