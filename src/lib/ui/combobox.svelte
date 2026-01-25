<script lang="ts">
	import { ComboBox, Button, PopoverPrimitives as Popover, Label } from "@kareyes/aether";
	import { Check, ChevronsUpDown } from "@kareyes/aether/icons";


	// Sample data
	const frameworks = [
		{ value: "sveltekit", label: "SvelteKit" },
		{ value: "next.js", label: "Next.js" },
		{ value: "nuxt.js", label: "Nuxt.js" },
		{ value: "remix", label: "Remix" },
		{ value: "astro", label: "Astro" },
		{ value: "gatsby", label: "Gatsby" },
		{ value: "angular", label: "Angular" },
		{ value: "vue", label: "Vue" },
		{ value: "react", label: "React" },
	];

	const languages = [
		{ value: "javascript", label: "JavaScript" },
		{ value: "typescript", label: "TypeScript" },
		{ value: "python", label: "Python" },
		{ value: "java", label: "Java" },
		{ value: "csharp", label: "C#" },
		{ value: "go", label: "Go" },
		{ value: "rust", label: "Rust" },
		{ value: "ruby", label: "Ruby" },
		{ value: "php", label: "PHP" },
		{ value: "swift", label: "Swift" },
		{ value: "kotlin", label: "Kotlin" },
		{ value: "dart", label: "Dart" },
	];

	const countries = [
		{ value: "us", label: "United States" },
		{ value: "uk", label: "United Kingdom" },
		{ value: "ca", label: "Canada" },
		{ value: "au", label: "Australia" },
		{ value: "de", label: "Germany" },
		{ value: "fr", label: "France" },
		{ value: "jp", label: "Japan" },
		{ value: "cn", label: "China" },
		{ value: "in", label: "India" },
		{ value: "br", label: "Brazil" },
	];

	const timezones = [
		{ value: "pst", label: "Pacific Standard Time (PST)" },
		{ value: "mst", label: "Mountain Standard Time (MST)" },
		{ value: "cst", label: "Central Standard Time (CST)" },
		{ value: "est", label: "Eastern Standard Time (EST)" },
		{ value: "utc", label: "Coordinated Universal Time (UTC)" },
		{ value: "gmt", label: "Greenwich Mean Time (GMT)" },
		{ value: "ist", label: "Indian Standard Time (IST)" },
		{ value: "jst", label: "Japan Standard Time (JST)" },
	];

	// State
	let framework = $state("");
	let language = $state("typescript");
	let country = $state("");
	let timezone = $state("utc");
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<div class="mb-8">
		<h1 class="text-3xl font-bold mb-2">ComboBox Component</h1>
		<p class="text-muted-foreground">
			A searchable select component that combines a text input with a dropdown list.
		</p>
	</div>

	<div class="space-y-12">
		<!-- Basic Examples -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
			<div class="flex flex-wrap gap-4">
				<ComboBox
					items={frameworks}
					bind:value={framework}
					placeholder="Select framework..."
					searchPlaceholder="Search frameworks..."
				/>

				<ComboBox
					items={languages}
					bind:value={language}
					placeholder="Select language..."
					searchPlaceholder="Search languages..."
				/>
			</div>
			<div class="mt-4 text-sm text-muted-foreground space-y-1">
				<div>Selected framework: <span class="font-medium">{framework || "None"}</span></div>
				<div>Selected language: <span class="font-medium">{language || "None"}</span></div>
			</div>
		</section>

		<!-- Variants -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Trigger Variants</h2>
			<div class="flex flex-wrap gap-4">
				<ComboBox
					items={frameworks}
					triggerVariant="default"
					placeholder="Default"
				/>
				<ComboBox
					items={frameworks}
					triggerVariant="secondary"
					placeholder="Secondary"
				/>
				<ComboBox
					items={frameworks}
					triggerVariant="outline"
					placeholder="Outline"
				/>
				<ComboBox
					items={frameworks}
					triggerVariant="ghost"
					placeholder="Ghost"
				/>
			</div>
		</section>

		<!-- Sizes -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Sizes</h2>
			<div class="flex flex-wrap items-center gap-4">
				<ComboBox
					items={frameworks}
					triggerSize="sm"
					placeholder="Small"
				/>
				<ComboBox
					items={frameworks}
					triggerSize="default"
					placeholder="Default"
				/>
				<ComboBox
					items={frameworks}
					triggerSize="lg"
					placeholder="Large"
				/>
			</div>
		</section>

		<!-- Width Options -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Width Options</h2>
			<div class="space-y-4">
				<div>
					<p class="text-sm text-muted-foreground mb-2">Default width (200px)</p>
					<ComboBox
						items={countries}
						triggerClass="w-[200px]"
						contentClass="w-[200px]"
						placeholder="Select country..."
					/>
				</div>
				<div>
					<p class="text-sm text-muted-foreground mb-2">Medium width (300px)</p>
					<ComboBox
						items={timezones}
						triggerClass="w-[300px]"
						contentClass="w-[300px]"
						placeholder="Select timezone..."
					/>
				</div>
				<div>
					<p class="text-sm text-muted-foreground mb-2">Full width with auto-size content</p>
					<ComboBox
						items={frameworks}
						triggerClass="w-full"
						contentClass="w-[var(--bits-popover-trigger-width)]"
						placeholder="Select framework..."
					/>
				</div>
			</div>
		</section>

		<!-- Form Example -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Form Example</h2>
			<div class="max-w-md space-y-4">
				<div class="space-y-2">
					<Label class="text-sm font-medium">Framework</Label>
					<ComboBox
						items={frameworks}
						bind:value={framework}
						placeholder="Select a framework..."
						searchPlaceholder="Search frameworks..."
						triggerClass="w-full"
						contentClass="w-[var(--bits-popover-trigger-width)]"
					/>
				</div>
				<div class="space-y-2">
					<Label class="text-sm font-medium">Primary Language</Label>
					<ComboBox
						items={languages}
						bind:value={language}
						placeholder="Select a language..."
						searchPlaceholder="Search languages..."
						triggerClass="w-full"
						contentClass="w-[var(--bits-popover-trigger-width)]"
					/>
				</div>
				<div class="space-y-2">
					<Label class="text-sm font-medium">Country</Label>
					<ComboBox
						items={countries}
						bind:value={country}
						placeholder="Select a country..."
						searchPlaceholder="Search countries..."
						triggerClass="w-full"
						contentClass="w-[var(--bits-popover-trigger-width)]"
					/>
				</div>
				<div class="space-y-2">
					<Label class="text-sm font-medium">Timezone</Label>
					<ComboBox
						items={timezones}
						bind:value={timezone}
						placeholder="Select a timezone..."
						searchPlaceholder="Search timezones..."
						triggerClass="w-full"
						contentClass="w-[var(--bits-popover-trigger-width)]"
					/>
				</div>
			</div>
			<div class="mt-6 p-4 bg-muted rounded-lg max-w-md">
				<h3 class="font-medium mb-2">Form Values:</h3>
				<div class="text-sm space-y-1">
					<div>Framework: <span class="font-medium">{framework || "Not selected"}</span></div>
					<div>Language: <span class="font-medium">{language || "Not selected"}</span></div>
					<div>Country: <span class="font-medium">{country || "Not selected"}</span></div>
					<div>Timezone: <span class="font-medium">{timezone || "Not selected"}</span></div>
				</div>
			</div>
		</section>

		<!-- Custom Trigger -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Custom Trigger</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Use the <code class="text-xs bg-muted px-1 py-0.5 rounded">trigger</code> snippet to provide custom trigger elements.
			</p>
			<div class="flex flex-wrap gap-4">
				<!-- Custom styled trigger -->
				<ComboBox items={frameworks} bind:value={framework}>
					{#snippet trigger({ selectedLabel, open })}
						<Popover.Trigger>
							{#snippet child({ props })}
								<Button
									{...props}
									variant="outline"
									class="w-[280px] justify-between border-2 border-primary/20 hover:border-primary/40"
									role="combobox"
									aria-expanded={open}
								>
									<span class="flex items-center gap-2">
										{#if selectedLabel}
											<span class="w-2 h-2 rounded-full bg-green-500"></span>
										{/if}
										{selectedLabel || "Choose your framework..."}
									</span>
									<ChevronsUpDown class="ml-2 size-4 shrink-0 opacity-50" />
								</Button>
							{/snippet}
						</Popover.Trigger>
					{/snippet}
				</ComboBox>

				<!-- Minimal text trigger -->
				<ComboBox items={languages} bind:value={language}>
					{#snippet trigger({ selectedLabel, open })}
						<Popover.Trigger>
							{#snippet child({ props })}
								<button
									{...props}
									class="text-sm font-medium text-primary hover:underline cursor-pointer flex items-center gap-1"
								>
									{selectedLabel || "Select language"} ▼
								</button>
							{/snippet}
						</Popover.Trigger>
					{/snippet}
				</ComboBox>
			</div>
		</section>

		<!-- Disabled Items -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">With Disabled Items</h2>
			<ComboBox
				items={[
					{ value: "option1", label: "Available Option 1" },
					{ value: "option2", label: "Disabled Option 2", disabled: true },
					{ value: "option3", label: "Available Option 3" },
					{ value: "option4", label: "Disabled Option 4", disabled: true },
					{ value: "option5", label: "Available Option 5" },
					{ value: "option6", label: "Disabled Option 6", disabled: true },
				]}
				placeholder="Select option..."
			/>
		</section>
	</div>
</div>