<script lang="ts">
	// import { 
	// 	Skeleton, 
	// 	SkeletonText, 
	// 	SkeletonAvatar, 
	// 	SkeletonCard, 
	// 	SkeletonTable 
	// } from "$core/components/ui/skeleton";
	import { Button, Switch , SkeletonPrimitives} from "@kareyes/aether";

    const {	Skeleton, 
		SkeletonText, 
		SkeletonAvatar, 
		SkeletonCard, 
		SkeletonTable } = SkeletonPrimitives;

	let isLoading = $state(true);
	let selectedAnimation = $state<"pulse" | "shimmer" | "wave" | "none">("pulse");
</script>

<svelte:head>
	<title>Skeleton Component Demo - Aether UI</title>
</svelte:head>

<div class="container mx-auto max-w-6xl space-y-8 p-8">
	<div class="space-y-2">
		<h1 class="text-3xl font-bold">Skeleton Component</h1>
		<p class="text-muted-foreground">
			Placeholder loading states for content with multiple variants, animations, and preset patterns.
		</p>
	</div>

	<hr class="border-border" />

	<!-- Controls -->
	<section class="space-y-4">
		<div class="flex flex-wrap items-center gap-4">
			<div class="flex items-center gap-2">
				<span class="text-sm font-medium">Loading:</span>
				<Switch bind:checked={isLoading} />
			</div>
			<div class="flex items-center gap-2">
				<span class="text-sm font-medium">Animation:</span>
				<div class="flex gap-1">
					{#each ["pulse", "shimmer", "wave", "none"] as anim}
						<Button 
							variant={selectedAnimation === anim ? "default" : "outline"} 
							size="sm"
							onclick={() => selectedAnimation = anim as typeof selectedAnimation}
						>
							{anim}
						</Button>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Basic Skeletons -->
	<section class="space-y-6">
		<div>
			<h2 class="text-2xl font-bold">Basic Skeletons</h2>
			<p class="text-muted-foreground">Simple skeleton shapes and sizes</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2">
			<div class="space-y-4 rounded-lg border p-4">
				<h3 class="font-semibold">Sizes</h3>
				<div class="space-y-3">
					<div class="flex items-center gap-4">
						<span class="w-12 text-xs text-muted-foreground">xs</span>
						<Skeleton animation={selectedAnimation} size="xs" width="full" visible={isLoading} />
					</div>
					<div class="flex items-center gap-4">
						<span class="w-12 text-xs text-muted-foreground">sm</span>
						<Skeleton animation={selectedAnimation} size="sm" width="full" visible={isLoading} />
					</div>
					<div class="flex items-center gap-4">
						<span class="w-12 text-xs text-muted-foreground">md</span>
						<Skeleton animation={selectedAnimation} size="md" width="full" visible={isLoading} />
					</div>
					<div class="flex items-center gap-4">
						<span class="w-12 text-xs text-muted-foreground">lg</span>
						<Skeleton animation={selectedAnimation} size="lg" width="full" visible={isLoading} />
					</div>
					<div class="flex items-center gap-4">
						<span class="w-12 text-xs text-muted-foreground">xl</span>
						<Skeleton animation={selectedAnimation} size="xl" width="full" visible={isLoading} />
					</div>
				</div>
			</div>

			<div class="space-y-4 rounded-lg border p-4">
				<h3 class="font-semibold">Shapes</h3>
				<div class="flex flex-wrap gap-4">
					<div class="text-center">
						<Skeleton animation={selectedAnimation} shape="default" class="h-16 w-24" visible={isLoading} />
						<span class="mt-1 block text-xs text-muted-foreground">default</span>
					</div>
					<div class="text-center">
						<Skeleton animation={selectedAnimation} shape="circle" class="h-16 w-16" visible={isLoading} />
						<span class="mt-1 block text-xs text-muted-foreground">circle</span>
					</div>
					<div class="text-center">
						<Skeleton animation={selectedAnimation} shape="square" class="h-16 w-24" visible={isLoading} />
						<span class="mt-1 block text-xs text-muted-foreground">square</span>
					</div>
					<div class="text-center">
						<Skeleton animation={selectedAnimation} shape="pill" class="h-8 w-24" visible={isLoading} />
						<span class="mt-1 block text-xs text-muted-foreground">pill</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Variants -->
	<section class="space-y-6">
		<div>
			<h2 class="text-2xl font-bold">Variants</h2>
			<p class="text-muted-foreground">Different visual styles for skeletons</p>
		</div>

		<div class="grid gap-4 md:grid-cols-4">
			<div class="space-y-2 rounded-lg border p-4">
				<Skeleton animation={selectedAnimation} variant="default" size="lg" width="full" visible={isLoading} />
				<span class="text-xs text-muted-foreground">default</span>
			</div>
			<div class="space-y-2 rounded-lg border p-4">
				<Skeleton animation={selectedAnimation} variant="primary" size="lg" width="full" visible={isLoading} />
				<span class="text-xs text-muted-foreground">primary</span>
			</div>
			<div class="space-y-2 rounded-lg border p-4">
				<Skeleton animation={selectedAnimation} variant="secondary" size="lg" width="full" visible={isLoading} />
				<span class="text-xs text-muted-foreground">secondary</span>
			</div>
			<div class="space-y-2 rounded-lg border p-4">
				<Skeleton animation={selectedAnimation} variant="accent" size="lg" width="full" visible={isLoading} />
				<span class="text-xs text-muted-foreground">accent</span>
			</div>
		</div>
	</section>

	<!-- Width Shortcuts -->
	<section class="space-y-6">
		<div>
			<h2 class="text-2xl font-bold">Width Shortcuts</h2>
			<p class="text-muted-foreground">Convenient width presets</p>
		</div>

		<div class="space-y-3 rounded-lg border p-4">
			<div class="flex items-center gap-4">
				<span class="w-16 text-xs text-muted-foreground">full</span>
				<Skeleton animation={selectedAnimation} size="md" width="full" visible={isLoading} />
			</div>
			<div class="flex items-center gap-4">
				<span class="w-16 text-xs text-muted-foreground">half</span>
				<Skeleton animation={selectedAnimation} size="md" width="half" visible={isLoading} />
			</div>
			<div class="flex items-center gap-4">
				<span class="w-16 text-xs text-muted-foreground">third</span>
				<Skeleton animation={selectedAnimation} size="md" width="third" visible={isLoading} />
			</div>
			<div class="flex items-center gap-4">
				<span class="w-16 text-xs text-muted-foreground">quarter</span>
				<Skeleton animation={selectedAnimation} size="md" width="quarter" visible={isLoading} />
			</div>
			<div class="flex items-center gap-4">
				<span class="w-16 text-xs text-muted-foreground">200px</span>
				<Skeleton animation={selectedAnimation} size="md" width="200px" visible={isLoading} />
			</div>
		</div>
	</section>

	<!-- Multiple Skeletons -->
	<section class="space-y-6">
		<div>
			<h2 class="text-2xl font-bold">Multiple Skeletons</h2>
			<p class="text-muted-foreground">Render multiple skeletons with stagger animation</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2">
			<div class="space-y-4 rounded-lg border p-4">
				<h3 class="font-semibold">Count = 4</h3>
				<Skeleton 
					animation={selectedAnimation} 
					count={4} 
					size="sm" 
					width="full" 
					delay={100}
					visible={isLoading} 
				/>
			</div>

			<div class="space-y-4 rounded-lg border p-4">
				<h3 class="font-semibold">Varied Widths</h3>
				<div class="space-y-2">
					<Skeleton animation={selectedAnimation} size="sm" width="90%" delay={0} visible={isLoading} />
					<Skeleton animation={selectedAnimation} size="sm" width="full" delay={50} visible={isLoading} />
					<Skeleton animation={selectedAnimation} size="sm" width="75%" delay={100} visible={isLoading} />
					<Skeleton animation={selectedAnimation} size="sm" width="60%" delay={150} visible={isLoading} />
				</div>
			</div>
		</div>
	</section>

	<!-- Skeleton Text -->
	<section class="space-y-6">
		<div>
			<h2 class="text-2xl font-bold">Skeleton Text</h2>
			<p class="text-muted-foreground">Preset for text paragraphs with natural line widths</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2">
			<div class="space-y-4 rounded-lg border p-4">
				<h3 class="font-semibold">Default (3 lines)</h3>
				{#if isLoading}
					<SkeletonText animation={selectedAnimation} />
				{:else}
					<p class="text-sm">
						This is the actual content that would be displayed after loading. 
						It contains multiple lines of text to demonstrate the skeleton placeholder.
					</p>
				{/if}
			</div>

			<div class="space-y-4 rounded-lg border p-4">
				<h3 class="font-semibold">5 Lines (Uniform)</h3>
				{#if isLoading}
					<SkeletonText animation={selectedAnimation} lines={5} varied={false} />
				{:else}
					<p class="text-sm">Content loaded successfully!</p>
				{/if}
			</div>
		</div>
	</section>

	<!-- Skeleton Avatar -->
	<section class="space-y-6">
		<div>
			<h2 class="text-2xl font-bold">Skeleton Avatar</h2>
			<p class="text-muted-foreground">Avatar placeholders with optional text</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			<div class="space-y-4 rounded-lg border p-4">
				<h3 class="text-sm font-semibold">Avatar Only</h3>
				{#if isLoading}
					<SkeletonAvatar animation={selectedAnimation} size="lg" />
				{:else}
					<div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
						JD
					</div>
				{/if}
			</div>

			<div class="space-y-4 rounded-lg border p-4">
				<h3 class="text-sm font-semibold">With Text</h3>
				{#if isLoading}
					<SkeletonAvatar animation={selectedAnimation} withText />
				{:else}
					<div class="flex items-center gap-3">
						<div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
							JD
						</div>
						<div>
							<p class="font-medium">John Doe</p>
							<p class="text-sm text-muted-foreground">john@example.com</p>
						</div>
					</div>
				{/if}
			</div>

			<div class="space-y-4 rounded-lg border p-4">
				<h3 class="text-sm font-semibold">Extra Small</h3>
				<SkeletonAvatar animation={selectedAnimation} size="xs" withText visible={isLoading} />
			</div>

			<div class="space-y-4 rounded-lg border p-4">
				<h3 class="text-sm font-semibold">Extra Large</h3>
				<SkeletonAvatar animation={selectedAnimation} size="xl" withText textLines={3} visible={isLoading} />
			</div>
		</div>
	</section>

	<!-- Skeleton Card -->
	<section class="space-y-6">
		<div>
			<h2 class="text-2xl font-bold">Skeleton Card</h2>
			<p class="text-muted-foreground">Card layout placeholders with configurable sections</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			<div>
				<h3 class="mb-2 text-sm font-semibold">Full Card</h3>
				{#if isLoading}
					<SkeletonCard animation={selectedAnimation} />
				{:else}
					<div class="rounded-lg border bg-card p-4 shadow-sm">
						<img src="https://picsum.photos/400/200" alt="Card" class="mb-4 -mx-4 -mt-4 rounded-t-lg" />
						<div class="mb-4 flex items-center gap-3">
							<div class="h-10 w-10 rounded-full bg-primary"></div>
							<div>
								<p class="font-medium">Card Title</p>
								<p class="text-sm text-muted-foreground">Subtitle</p>
							</div>
						</div>
						<p class="text-sm">Card content goes here.</p>
					</div>
				{/if}
			</div>

			<div>
				<h3 class="mb-2 text-sm font-semibold">No Image</h3>
				<SkeletonCard 
					animation={selectedAnimation} 
					withImage={false} 
					visible={isLoading}
				/>
			</div>

			<div>
				<h3 class="mb-2 text-sm font-semibold">Minimal</h3>
				<SkeletonCard 
					animation={selectedAnimation}
					withImage={false}
					withAvatar={false}
					withFooter={false}
					bodyLines={4}
					visible={isLoading}
				/>
			</div>
		</div>
	</section>

	<!-- Skeleton Table -->
	<section class="space-y-6">
		<div>
			<h2 class="text-2xl font-bold">Skeleton Table</h2>
			<p class="text-muted-foreground">Table placeholder with configurable rows and columns</p>
		</div>

		<div class="space-y-6">
			<div>
				<h3 class="mb-2 font-semibold">Default Table (5 rows, 4 columns)</h3>
				{#if isLoading}
					<SkeletonTable animation={selectedAnimation} />
				{:else}
					<div class="w-full overflow-hidden rounded-lg border">
						<table class="w-full">
							<thead class="bg-muted/50">
								<tr>
									<th class="px-4 py-3 text-left text-sm font-medium">Name</th>
									<th class="px-4 py-3 text-left text-sm font-medium">Email</th>
									<th class="px-4 py-3 text-left text-sm font-medium">Role</th>
									<th class="px-4 py-3 text-left text-sm font-medium">Status</th>
								</tr>
							</thead>
							<tbody class="divide-y">
								{#each Array(5) as _}
									<tr>
										<td class="px-4 py-3 text-sm">John Doe</td>
										<td class="px-4 py-3 text-sm">john@example.com</td>
										<td class="px-4 py-3 text-sm">Admin</td>
										<td class="px-4 py-3 text-sm">Active</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				{/if}
			</div>

			<div>
				<h3 class="mb-2 font-semibold">Compact Table (3 rows, 2 columns)</h3>
				<SkeletonTable 
					animation={selectedAnimation} 
					rows={3} 
					columns={2} 
					visible={isLoading}
				/>
			</div>
		</div>
	</section>

	<!-- Real-world Examples -->
	<section class="space-y-6">
		<div>
			<h2 class="text-2xl font-bold">Real-world Examples</h2>
			<p class="text-muted-foreground">Common loading patterns in applications</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2">
			<!-- Social Post -->
			<div class="space-y-4 rounded-lg border p-4">
				<h3 class="font-semibold">Social Post</h3>
				{#if isLoading}
					<div class="space-y-4">
						<SkeletonAvatar animation={selectedAnimation} withText size="md" />
						<SkeletonText animation={selectedAnimation} lines={2} />
						<Skeleton animation={selectedAnimation} class="aspect-video w-full" />
						<div class="flex gap-4">
							<Skeleton animation={selectedAnimation} shape="pill" size="sm" width="60px" />
							<Skeleton animation={selectedAnimation} shape="pill" size="sm" width="60px" />
							<Skeleton animation={selectedAnimation} shape="pill" size="sm" width="60px" />
						</div>
					</div>
				{:else}
					<div class="space-y-4">
						<div class="flex items-center gap-3">
							<div class="h-10 w-10 rounded-full bg-primary"></div>
							<div>
								<p class="font-medium">Jane Smith</p>
								<p class="text-xs text-muted-foreground">2 hours ago</p>
							</div>
						</div>
						<p class="text-sm">Just finished building this awesome skeleton component! 🎉</p>
						<div class="aspect-video w-full rounded-lg bg-muted"></div>
						<div class="flex gap-4 text-sm text-muted-foreground">
							<span>❤️ 42 likes</span>
							<span>💬 12 comments</span>
							<span>🔗 Share</span>
						</div>
					</div>
				{/if}
			</div>

			<!-- Product List -->
			<div class="space-y-4 rounded-lg border p-4">
				<h3 class="font-semibold">Product List</h3>
				{#if isLoading}
					<div class="space-y-3">
						{#each Array(3) as _, i}
							<div class="flex gap-4">
								<Skeleton animation={selectedAnimation} shape="default" class="h-16 w-16 shrink-0" />
								<div class="flex-1 space-y-2">
									<Skeleton animation={selectedAnimation} size="sm" width="70%" delay={i * 50} />
									<Skeleton animation={selectedAnimation} size="xs" width="50%" delay={i * 50 + 25} />
									<Skeleton animation={selectedAnimation} size="sm" width="30%" delay={i * 50 + 50} />
								</div>
							</div>
						{/each}
					</div>
				{:else}
					<div class="space-y-3">
						{#each ["Widget Pro", "Gadget Plus", "Device Ultra"] as product}
							<div class="flex gap-4">
								<div class="h-16 w-16 shrink-0 rounded-lg bg-muted"></div>
								<div class="flex-1">
									<p class="font-medium">{product}</p>
									<p class="text-xs text-muted-foreground">In stock</p>
									<p class="text-sm font-semibold">$99.00</p>
								</div>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</section>
</div>