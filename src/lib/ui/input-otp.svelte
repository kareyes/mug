<script lang="ts">
	import { basicUsageDocs, variantsDocs, sizesDocs, groupsConfigDocs, errorStateDocs, onErrorCallbackDocs, disabledStateDocs, completeHandlerDocs, variantSizeComboDocs } from "$lib/code-blocks/input-otp";
	import { InputOTP, Field, Card, CodeBlock } from "@kareyes/aether";

	// Basic OTP value
	let basicValue = $state("");

	// Error state demo
	let errorValue = $state("");
	let showError = $state(false);

	// Complete handler demo
	let completedValue = $state("");
	let isComplete = $state(false);

	// onError callback demo
	let errorCallbackValue = $state("");
	let errorCallbackTriggered = $state(false);

	const variants: ("default" | "outline" | "underline")[] = ["default", "outline", "underline"];
	const sizes: ("sm" | "default" | "lg")[] = ["sm", "default", "lg"];

	function handleComplete(value: string) {
		isComplete = true;
		setTimeout(() => {
			isComplete = false;
		}, 2000);
	}

	function handleErrorChange(hasError: boolean) {
		errorCallbackTriggered = hasError;
	}
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<div class="mb-8">
		<h1 class="text-3xl font-bold mb-2">Input OTP Component</h1>
		<p class="text-muted-foreground">
			Accessible one-time password input with copy/paste functionality.
		</p>
	</div>

	<div class="space-y-12">
		<!-- Basic Usage -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Default 6-digit OTP input with two groups separated by a dash.
			</p>
			<InputOTP maxlength={6} groups={2} bind:value={basicValue} />
			{#if basicValue}
				<p class="text-sm text-muted-foreground mt-2">Value: {basicValue}</p>
			{/if}

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

		<!-- Variants -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Variants</h2>
			<p class="text-sm text-muted-foreground mb-4">Available visual styles for the OTP input.</p>
			<div class="space-y-6">
				{#each variants as variant}
					<div class="space-y-2">
						<p class="text-sm font-medium capitalize">{variant}</p>
						<InputOTP maxlength={6} groups={2} {variant} />
					</div>
				{/each}
			</div>

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
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Sizes</h2>
			<p class="text-sm text-muted-foreground mb-4">Different size options for the OTP input.</p>
			<div class="space-y-6">
				{#each sizes as size}
					<div class="space-y-2">
						<p class="text-sm font-medium capitalize">{size}</p>
						<InputOTP maxlength={6} groups={1} {size} />
					</div>
				{/each}
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

		<!-- Groups Configuration -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Groups Configuration</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Control how digits are grouped with automatic separators.
			</p>
			<div class="space-y-6">
				<div class="space-y-2">
					<p class="text-sm font-medium">Single Group (4 digits)</p>
					<InputOTP maxlength={4} groups={1} />
				</div>
				<div class="space-y-2">
					<p class="text-sm font-medium">Two Groups (6 digits)</p>
					<InputOTP maxlength={6} groups={2} />
				</div>
				<div class="space-y-2">
					<p class="text-sm font-medium">Three Groups (6 digits)</p>
					<InputOTP maxlength={6} groups={3} />
				</div>
				<div class="space-y-2">
					<p class="text-sm font-medium">Without Separators</p>
					<InputOTP maxlength={6} groups={2} showSeparator={false} />
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
				code={groupsConfigDocs}
			/>
		</Card>

		<!-- Error State -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Error State</h2>
			<p class="text-sm text-muted-foreground mb-4">
				OTP input showing an error state with optional error message.
			</p>
			<Field label="Verification Code" error={showError ? "Invalid verification code. Please try again." : undefined}>
				<InputOTP
					maxlength={6}
					groups={2}
					bind:value={errorValue}
					error={showError}
				/>
				<div class="flex items-center gap-2">
					<button
						type="button"
						class="text-sm px-3 py-1.5 rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90"
						onclick={() => showError = !showError}
					>
						Toggle Error: {showError ? 'On' : 'Off'}
					</button>
				</div>
			</Field>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={errorStateDocs}
			/>
		</Card>

		<!-- onError Callback -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">onError Callback</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Get notified when the error state changes.
			</p>
			<div class="space-y-4">
				<InputOTP
					maxlength={6}
					groups={2}
					bind:value={errorCallbackValue}
					error={errorCallbackValue.length > 0 && errorCallbackValue.length < 6}
					onError={handleErrorChange}
				/>
				<p class="text-sm text-muted-foreground">
					Error callback triggered: <span class={errorCallbackTriggered ? "text-destructive" : "text-green-600"}>{errorCallbackTriggered ? 'Yes' : 'No'}</span>
				</p>
				<p class="text-xs text-muted-foreground">
					(Error shows when value is partially filled)
				</p>
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={onErrorCallbackDocs}
			/>
		</Card>

		<!-- Disabled State -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Disabled State</h2>
			<p class="text-sm text-muted-foreground mb-4">
				OTP input in disabled state.
			</p>
			<InputOTP maxlength={6} groups={2} disabled />

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={disabledStateDocs}
			/>
		</Card>

		<!-- Complete Handler -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Complete Handler</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Callback triggered when all slots are filled.
			</p>
			<InputOTP
				maxlength={6}
				groups={2}
				bind:value={completedValue}
				onComplete={handleComplete}
			/>
			{#if isComplete}
				<p class="text-sm text-green-600 dark:text-green-400 mt-2">✓ OTP Complete: {completedValue}</p>
			{/if}

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={completeHandlerDocs}
			/>
		</Card>

		<!-- Variant + Size Combinations -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Variant + Size Combinations</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Combining different variants with sizes.
			</p>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div class="space-y-2">
					<p class="text-sm font-medium">Outline + Small</p>
					<InputOTP maxlength={4} groups={1} variant="outline" size="sm" />
				</div>
				<div class="space-y-2">
					<p class="text-sm font-medium">Default + Default</p>
					<InputOTP maxlength={4} groups={1} variant="default" size="default" />
				</div>
				<div class="space-y-2">
					<p class="text-sm font-medium">Underline + Large</p>
					<InputOTP maxlength={4} groups={1} variant="underline" size="lg" />
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
				code={variantSizeComboDocs}
			/>
		</Card>
	</div>
</div>
