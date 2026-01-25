<script lang="ts">
	import { InputOTP , Field} from "@kareyes/aether";
	// import { REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS } from "bits-ui";
	// import type { InputOTPVariant, InputOTPSize } from "$core/components/ui/input-otp/input-otp-root.svelte";
    // import { Field } from "$core/components/ui/field";

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

<div class="container mx-auto py-10 space-y-8">
	<div class="space-y-2">
		<h1 class="text-3xl font-bold">Input OTP Component Demo</h1>
		<p class="text-muted-foreground">
			Accessible one-time password input with copy/paste functionality.
		</p>
	</div>

	<!-- Basic Usage -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold">Basic Usage</h2>
		<p class="text-sm text-muted-foreground">
			Default 6-digit OTP input with two groups separated by a dash.
		</p>
		<InputOTP maxlength={6} groups={2} bind:value={basicValue} />
		{#if basicValue}
			<p class="text-sm text-muted-foreground">Value: {basicValue}</p>
		{/if}
	</section>

	<!-- Variants -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold">Variants</h2>
		<div class="space-y-6">
			{#each variants as variant}
				<div class="space-y-2">
					<p class="text-sm font-medium capitalize">{variant}</p>
					<InputOTP maxlength={6} groups={2} {variant} />
				</div>
			{/each}
		</div>
	</section>

	<!-- Sizes -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold">Sizes</h2>
		<div class="space-y-6">
			{#each sizes as size}
				<div class="space-y-2">
					<p class="text-sm font-medium capitalize">{size}</p>
					<InputOTP maxlength={6} groups={1} {size} />
				</div>
			{/each}
		</div>
	</section>

	<!-- Groups Configuration -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold">Groups Configuration</h2>
		<p class="text-sm text-muted-foreground">
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
	</section>

	<!-- Pattern Validation -->
	<!-- <section class="space-y-4">
		<h2 class="text-2xl font-semibold">Pattern Validation</h2>
		<div class="space-y-6">
			<div class="space-y-2">
				<p class="text-sm font-medium">Digits Only</p>
				<p class="text-xs text-muted-foreground">Only accepts numeric characters (0-9)</p>
				<InputOTP maxlength={6} groups={1} pattern={REGEXP_ONLY_DIGITS} />
			</div>
			<div class="space-y-2">
				<p class="text-sm font-medium">Alphanumeric</p>
				<p class="text-xs text-muted-foreground">Accepts letters and numbers</p>
				<InputOTP maxlength={6} groups={1} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} />
			</div>
		</div>
	</section> -->

	<!-- Error State -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold">Error State</h2>
		<p class="text-sm text-muted-foreground">
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
	</section>

	<!-- onError Callback -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold">onError Callback</h2>
		<p class="text-sm text-muted-foreground">
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
	</section>

	<!-- Disabled State -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold">Disabled State</h2>
		<p class="text-sm text-muted-foreground">
			OTP input in disabled state.
		</p>
		<InputOTP maxlength={6} groups={2} disabled />
	</section>

	<!-- Complete Handler -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold">Complete Handler</h2>
		<p class="text-sm text-muted-foreground">
			Callback triggered when all slots are filled.
		</p>
		<InputOTP 
			maxlength={6} 
			groups={2} 
			bind:value={completedValue}
			onComplete={handleComplete}
		/>
		{#if isComplete}
			<p class="text-sm text-green-600 dark:text-green-400">✓ OTP Complete: {completedValue}</p>
		{/if}
	</section>

	<!-- Variant + Size Combinations -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold">Variant + Size Combinations</h2>
		<p class="text-sm text-muted-foreground">
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
	</section>
</div>