export const basicUsageDocs = `
<script lang="ts">
	import { InputOTP } from "@kareyes/aether";

	let basicValue = $state("");
</script>

<InputOTP maxlength={6} groups={2} bind:value={basicValue} />
{#if basicValue}
	<p class="text-sm text-muted-foreground">Value: {basicValue}</p>
{/if}`;

export const variantsDocs = `
<script lang="ts">
	import { InputOTP } from "@kareyes/aether";
</script>

<div class="space-y-6">
	<div class="space-y-2">
		<p class="text-sm font-medium">Default</p>
		<InputOTP maxlength={6} groups={2} variant="default" />
	</div>
	<div class="space-y-2">
		<p class="text-sm font-medium">Outline</p>
		<InputOTP maxlength={6} groups={2} variant="outline" />
	</div>
	<div class="space-y-2">
		<p class="text-sm font-medium">Underline</p>
		<InputOTP maxlength={6} groups={2} variant="underline" />
	</div>
</div>`;

export const sizesDocs = `
<script lang="ts">
	import { InputOTP } from "@kareyes/aether";
</script>

<div class="space-y-6">
	<div class="space-y-2">
		<p class="text-sm font-medium">Small</p>
		<InputOTP maxlength={6} groups={1} size="sm" />
	</div>
	<div class="space-y-2">
		<p class="text-sm font-medium">Default</p>
		<InputOTP maxlength={6} groups={1} size="default" />
	</div>
	<div class="space-y-2">
		<p class="text-sm font-medium">Large</p>
		<InputOTP maxlength={6} groups={1} size="lg" />
	</div>
</div>`;

export const groupsConfigDocs = `
<script lang="ts">
	import { InputOTP } from "@kareyes/aether";
</script>

<div class="space-y-6">
	<!-- Single Group (4 digits) -->
	<InputOTP maxlength={4} groups={1} />

	<!-- Two Groups (6 digits) -->
	<InputOTP maxlength={6} groups={2} />

	<!-- Three Groups (6 digits) -->
	<InputOTP maxlength={6} groups={3} />

	<!-- Without Separators -->
	<InputOTP maxlength={6} groups={2} showSeparator={false} />
</div>`;

export const errorStateDocs = `
<script lang="ts">
	import { InputOTP, Field } from "@kareyes/aether";

	let errorValue = $state("");
	let showError = $state(false);
</script>

<Field label="Verification Code" error={showError ? "Invalid verification code. Please try again." : undefined}>
	<InputOTP
		maxlength={6}
		groups={2}
		bind:value={errorValue}
		error={showError}
	/>
	<button
		type="button"
		class="text-sm px-3 py-1.5 rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90"
		onclick={() => showError = !showError}
	>
		Toggle Error: {showError ? 'On' : 'Off'}
	</button>
</Field>`;

export const onErrorCallbackDocs = `
<script lang="ts">
	import { InputOTP } from "@kareyes/aether";

	let errorCallbackValue = $state("");
	let errorCallbackTriggered = $state(false);

	function handleErrorChange(hasError: boolean) {
		errorCallbackTriggered = hasError;
	}
</script>

<InputOTP
	maxlength={6}
	groups={2}
	bind:value={errorCallbackValue}
	error={errorCallbackValue.length > 0 && errorCallbackValue.length < 6}
	onError={handleErrorChange}
/>
<p class="text-sm text-muted-foreground">
	Error callback triggered:
	<span class={errorCallbackTriggered ? "text-destructive" : "text-green-600"}>
		{errorCallbackTriggered ? 'Yes' : 'No'}
	</span>
</p>`;

export const disabledStateDocs = `
<script lang="ts">
	import { InputOTP } from "@kareyes/aether";
</script>

<InputOTP maxlength={6} groups={2} disabled />`;

export const completeHandlerDocs = `
<script lang="ts">
	import { InputOTP } from "@kareyes/aether";

	let completedValue = $state("");
	let isComplete = $state(false);

	function handleComplete(value: string) {
		isComplete = true;
		setTimeout(() => { isComplete = false; }, 2000);
	}
</script>

<InputOTP
	maxlength={6}
	groups={2}
	bind:value={completedValue}
	onComplete={handleComplete}
/>
{#if isComplete}
	<p class="text-sm text-green-600">OTP Complete: {completedValue}</p>
{/if}`;

export const variantSizeComboDocs = `
<script lang="ts">
	import { InputOTP } from "@kareyes/aether";
</script>

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
</div>`;
