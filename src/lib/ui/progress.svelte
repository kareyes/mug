<script lang="ts">
	import {
		basicUsageDocs,
		labelValueDocs,
		labelInsideBarDocs,
		variantsDocs,
		sizesDocs,
		radiusDocs,
		indeterminateDocs,
		animationsDocs,
		interactiveDocs,
		useCasesDocs,
		compositionalDocs,
	} from "$lib/code-blocks/progress";
	import { Progress, ProgressPrimitives, Card, CodeBlock } from "@kareyes/aether";
	import PreviewContainer from "../components/preview-container.svelte";

	const { ProgressRoot: Root } = ProgressPrimitives;

	let liveValue = $state(65);
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<div class="space-y-12">

		<!-- Basic Usage -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Simple progress bars at different completion values.
			</p>
			<PreviewContainer>
				<div class="space-y-4">
					<Progress value={0} />
					<Progress value={33} />
					<Progress value={66} />
					<Progress value={100} />
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

		<!-- Label & Value Display -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Label & Value Display</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Use label, showValue, and valueFormat to display progress context above the bar.
			</p>
			<PreviewContainer>
				<div class="space-y-6">
					<Progress value={72} label="Storage used" showValue />
					<Progress value={45} label="Upload progress" showValue />
					<Progress
						value={8}
						max={10}
						label="Steps completed"
						showValue
						valueFormat={(v, m) => `${v} of ${m}`}
					/>
					<Progress value={91} label="CPU usage" showValue variant="destructive" />
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
				code={labelValueDocs}
			/>
		</Card>

		<!-- Label Inside Bar -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Label Inside Bar</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Use labelPosition="inside" to overlay the label and value directly on the track. Works best with larger sizes.
			</p>
			<PreviewContainer>
				<div class="space-y-4">
					<Progress value={72} label="Storage used" labelPosition="inside" size="xl" />
					<Progress value={45} showValue labelPosition="inside" size="xl" />
					<Progress value={88} label="Upload" showValue labelPosition="inside" size="xl" variant="success" />
					<Progress
						value={6}
						max={10}
						label="Steps"
						showValue
						valueFormat={(v, m) => `${v} / ${m}`}
						labelPosition="inside"
						size="xl"
						variant="accent"
					/>
					<Progress value={60} label="Processing…" showValue labelPosition="inside" size="xl" variant="warning" animation="stripe" />
					<Progress value={null} label="Syncing…" labelPosition="inside" size="xl" variant="accent" animation="shimmer" />
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
				code={labelInsideBarDocs}
			/>
		</Card>

		<!-- Variants -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Variants</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Six indicator color variants.
			</p>
			<PreviewContainer>
				<div class="space-y-4">
					{#each ["default", "success", "warning", "destructive", "secondary", "accent"] as variant}
						<div class="flex items-center gap-4">
							<span class="w-24 shrink-0 text-xs text-muted-foreground font-mono">{variant}</span>
							<Progress value={65} variant={variant as any} class="flex-1" />
						</div>
					{/each}
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
				code={variantsDocs}
			/>
		</Card>

		<!-- Sizes -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Sizes</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Five track height options from xs to xl.
			</p>
			<PreviewContainer>
				<div class="space-y-5">
					{#each ["xs", "sm", "default", "lg", "xl"] as size}
						<div class="flex items-center gap-4">
							<span class="w-16 shrink-0 text-xs text-muted-foreground font-mono">{size}</span>
							<Progress value={65} size={size as any} class="flex-1" />
						</div>
					{/each}
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
				code={sizesDocs}
			/>
		</Card>

		<!-- Radius -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Radius</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Four corner radius options.
			</p>
			<PreviewContainer>
				<div class="space-y-4">
					{#each ["none", "sm", "default", "lg"] as radius}
						<div class="flex items-center gap-4">
							<span class="w-16 shrink-0 text-xs text-muted-foreground font-mono">{radius}</span>
							<Progress value={65} size="lg" radius={radius as any} class="flex-1" />
						</div>
					{/each}
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
				code={radiusDocs}
			/>
		</Card>

		<!-- Indeterminate -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Indeterminate</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Pass value={null} to show an animated loading bar when completion is unknown.
			</p>
			<PreviewContainer>
				<div class="space-y-4">
					<Progress value={null} label="Processing…" />
					<Progress value={null} variant="success" />
					<Progress value={null} variant="accent" size="lg" />
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
				code={indeterminateDocs}
			/>
		</Card>

		<!-- Animations -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Animations</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Four indicator animations — pulse, stripe, and shimmer work on filled bars too.
			</p>
			<PreviewContainer>
				<div class="space-y-4">
					{#each ["none", "pulse", "stripe", "shimmer"] as animation}
						<div class="flex items-center gap-4">
							<span class="w-16 shrink-0 text-xs text-muted-foreground font-mono">{animation}</span>
							<Progress value={65} animation={animation as any} class="flex-1" />
						</div>
					{/each}
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

		<!-- Interactive -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Interactive</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Bind value to reactive state for live updates.
			</p>
			<PreviewContainer>
				<div class="space-y-4">
					<Progress value={liveValue} label="Live value" showValue size="lg" variant="success" />
					<div class="flex items-center gap-3">
						<input
							type="range"
							min="0"
							max="100"
							bind:value={liveValue}
							class="flex-1"
						/>
						<span class="w-10 text-right text-sm tabular-nums text-muted-foreground">{liveValue}%</span>
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
				code={interactiveDocs}
			/>
		</Card>

		<!-- Realistic Use Cases -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Realistic Use Cases</h2>
			<p class="text-sm text-muted-foreground mb-4">
				File uploads, proficiency bars, and system metrics.
			</p>
			<PreviewContainer>
				<div class="space-y-8">
					<div class="space-y-3">
						<p class="text-xs font-medium text-muted-foreground uppercase tracking-wide">File Upload</p>
						<Progress value={78} label="quarterly-report.pdf" showValue size="sm" />
						<Progress value={34} label="payroll-march-2026.xlsx" showValue size="sm" variant="warning" />
						<Progress value={100} label="headcount-snapshot.csv" showValue size="sm" variant="success" />
					</div>

					<div class="space-y-3">
						<p class="text-xs font-medium text-muted-foreground uppercase tracking-wide">Proficiency</p>
						<Progress value={90} label="TypeScript" showValue size="xl" radius="sm" variant="accent" />
						<Progress value={75} label="Svelte" showValue size="xl" radius="sm" variant="accent" />
						<Progress value={60} label="Rust" showValue size="xl" radius="sm" variant="accent" />
					</div>

					<div class="space-y-3">
						<p class="text-xs font-medium text-muted-foreground uppercase tracking-wide">System Metrics</p>
						<Progress value={42} label="CPU" showValue size="sm" />
						<Progress value={81} label="Memory" showValue size="sm" variant="warning" />
						<Progress value={95} label="Disk" showValue size="sm" variant="destructive" />
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
				code={useCasesDocs}
			/>
		</Card>

		<!-- Compositional API -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Compositional API</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Use ProgressPrimitives.ProgressRoot directly for full class-based styling control.
			</p>
			<PreviewContainer>
				<div class="space-y-4">
					<p class="text-xs font-medium text-muted-foreground uppercase tracking-wide">Custom gradient</p>
					<Root
						value={55}
						class="h-6 rounded-lg [&>[data-slot=progress-indicator]]:bg-gradient-to-r [&>[data-slot=progress-indicator]]:from-violet-500 [&>[data-slot=progress-indicator]]:to-pink-500"
					/>

					<p class="text-xs font-medium text-muted-foreground uppercase tracking-wide">Striped via class</p>
					<Root
						value={70}
						size="xl"
						radius="sm"
						class="[&>[data-slot=progress-indicator]]:[background-image:repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.15)_10px,rgba(255,255,255,0.15)_20px)]"
					/>
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
