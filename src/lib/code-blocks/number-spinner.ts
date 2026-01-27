export const basicUsageDocs = `
<script lang="ts">
	import { NumberSpinner, Badge } from "@kareyes/aether";

	let basicValue = $state(0);
	let quantityValue = $state(1);
</script>

<div class="grid gap-8 md:grid-cols-2">
	<div class="space-y-2">
		<h3 class="text-lg font-medium">Simple Number Spinner</h3>
		<NumberSpinner bind:value={basicValue} min={0} max={100} />
		<p class="text-sm text-muted-foreground">
			Current value: <Badge variant="secondary">{basicValue}</Badge>
		</p>
	</div>
	<div class="space-y-2">
		<h3 class="text-lg font-medium">With Constraints</h3>
		<NumberSpinner bind:value={quantityValue} min={1} max={99} />
		<p class="text-sm text-muted-foreground">
			Quantity: <Badge variant="outline">{quantityValue}</Badge>
		</p>
	</div>
</div>`;

export const variantsDocs = `
<script lang="ts">
	import { NumberSpinner } from "@kareyes/aether";
</script>

<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
	<NumberSpinner variant="default" value={10} />
	<NumberSpinner variant="outline" value={10} />
	<NumberSpinner variant="filled" value={10} />
	<NumberSpinner variant="ghost" value={10} />
</div>`;

export const sizesDocs = `
<script lang="ts">
	import { NumberSpinner } from "@kareyes/aether";
</script>

<div class="grid gap-8 md:grid-cols-3">
	<NumberSpinner size="sm" value={5} min={0} max={10} />
	<NumberSpinner size="default" value={5} min={0} max={10} />
	<NumberSpinner size="lg" value={5} min={0} max={10} />
</div>`;

export const orientationsDocs = `
<script lang="ts">
	import { NumberSpinner } from "@kareyes/aether";
</script>

<div class="grid gap-8 md:grid-cols-2">
	<div class="space-y-2">
		<h3 class="text-lg font-medium">Vertical (Default)</h3>
		<NumberSpinner orientation="vertical" value={10} min={0} max={20} />
	</div>
	<div class="space-y-2">
		<h3 class="text-lg font-medium">Horizontal</h3>
		<NumberSpinner orientation="horizontal" value={10} min={0} max={20} />
	</div>
</div>`;

export const advancedFeaturesDocs = `
<script lang="ts">
	import { NumberSpinner, Badge } from "@kareyes/aether";

	let priceValue = $state(9.99);
	let temperatureValue = $state(20.5);
</script>

<div class="grid gap-8 md:grid-cols-2">
	<!-- Price Input (Decimal Precision) -->
	<NumberSpinner
		bind:value={priceValue}
		min={0} max={9999.99}
		step={0.01} precision={2}
		placeholder="0.00" variant="outline"
	/>

	<!-- Temperature (Step Control) -->
	<NumberSpinner
		bind:value={temperatureValue}
		min={-50} max={50}
		step={0.5} precision={1}
		orientation="horizontal" size="lg"
	/>

	<!-- Large Step Size -->
	<NumberSpinner value={50} min={0} max={1000} step={10} />

	<!-- Integer Only -->
	<NumberSpinner value={25} min={0} max={100} step={1} />
</div>`;

export const practicalExamplesDocs = `
<script lang="ts">
	import { NumberSpinner, Badge } from "@kareyes/aether";

	let cartQuantity1 = $state(1);
	let cartQuantity2 = $state(2);
	let cartQuantity3 = $state(1);
	const totalCartItems = $derived((cartQuantity1 ?? 0) + (cartQuantity2 ?? 0) + (cartQuantity3 ?? 0));
</script>

<div class="space-y-3 rounded-lg border p-4">
	<div class="flex items-center justify-between">
		<span class="text-sm">Product A - $19.99</span>
		<NumberSpinner bind:value={cartQuantity1} min={1} max={99} size="sm" orientation="horizontal" />
	</div>
	<div class="flex items-center justify-between">
		<span class="text-sm">Product B - $29.99</span>
		<NumberSpinner bind:value={cartQuantity2} min={1} max={99} size="sm" orientation="horizontal" />
	</div>
	<div class="flex items-center justify-between">
		<span class="text-sm">Product C - $9.99</span>
		<NumberSpinner bind:value={cartQuantity3} min={1} max={99} size="sm" orientation="horizontal" />
	</div>
	<div class="border-t pt-3">
		<p class="text-sm font-medium">
			Total Items: <Badge variant="secondary">{totalCartItems}</Badge>
		</p>
	</div>
</div>`;

export const errorStatesDocs = `
<script lang="ts">
	import { NumberSpinner } from "@kareyes/aether";

	let ageValue = $state(null);
</script>

<div class="grid gap-8 md:grid-cols-2">
	<div class="space-y-2">
		<NumberSpinner bind:value={ageValue} error={!ageValue} required min={1} max={150} />
		{#if !ageValue}
			<p class="text-sm text-destructive">Age is required</p>
		{/if}
	</div>
	<div class="space-y-2">
		<NumberSpinner value={25} error={false} />
		<p class="text-sm text-muted-foreground">No errors</p>
	</div>
</div>`;

export const withFieldDocs = `
<script lang="ts">
	import { NumberSpinner, Field } from "@kareyes/aether";

	let ageValue = $state(null);
</script>

<div class="max-w-2xl space-y-6">
	<Field label="Age" description="Enter your age (1-150)" error={!ageValue ? "Age is required" : undefined} required>
		<NumberSpinner bind:value={ageValue} error={!ageValue} min={1} max={150} />
	</Field>

	<Field label="Quantity" description="Number of items to order" required>
		<NumberSpinner value={1} min={1} max={100} orientation="horizontal" />
	</Field>

	<Field label="Product Price" description="Enter the price in USD (up to $9,999.99)" required>
		<NumberSpinner value={0} min={0} max={9999.99} step={0.01} precision={2} variant="filled" placeholder="0.00" />
	</Field>

	<Field label="Room Temperature" description="Set your preferred temperature (-10°C to 40°C)">
		<NumberSpinner value={22} min={-10} max={40} step={0.5} precision={1} orientation="horizontal" size="lg" />
	</Field>
</div>`;

export const formIntegrationDocs = `
<script lang="ts">
	import { NumberSpinner, Field, Badge } from "@kareyes/aether";

	let formQuantity = $state(1);
	let formPrice = $state(0);
	let formAge = $state(null);
	const formValid = $derived(formQuantity > 0 && formPrice > 0 && formAge !== null && formAge > 0);
</script>

<form class="max-w-2xl space-y-6 rounded-lg border p-6" onsubmit={(e) => { e.preventDefault(); }}>
	<Field label="Quantity" error={formQuantity < 1 ? "Quantity must be at least 1" : undefined} required>
		<NumberSpinner bind:value={formQuantity} error={formQuantity < 1} min={1} max={100} />
	</Field>

	<Field label="Unit Price" error={formPrice <= 0 ? "Price must be greater than 0" : undefined} required>
		<NumberSpinner bind:value={formPrice} error={formPrice <= 0} min={0} max={9999.99} step={0.01} precision={2} variant="outline" />
	</Field>

	<Field label="Customer Age" error={!formAge || formAge < 18 ? "Must be 18 or older" : undefined} required>
		<NumberSpinner bind:value={formAge} error={!formAge || formAge < 18} min={18} max={150} />
	</Field>

	<div class="flex items-center justify-between pt-4">
		<p class="text-sm text-muted-foreground">
			Total: <Badge variant="secondary">\${((formPrice ?? 0) * (formQuantity ?? 0)).toFixed(2)}</Badge>
		</p>
		<button type="submit" class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground" disabled={!formValid}>
			Submit Order
		</button>
	</div>
</form>`;

export const disabledStateDocs = `
<script lang="ts">
	import { NumberSpinner } from "@kareyes/aether";
</script>

<div class="grid gap-8 md:grid-cols-2">
	<NumberSpinner value={10} disabled={true} />
	<NumberSpinner value={10} disabled={true} orientation="horizontal" />
</div>`;

export const allVariantsSizesDocs = `
<script lang="ts">
	import { NumberSpinner } from "@kareyes/aether";
</script>

<div class="grid gap-8 lg:grid-cols-2">
	<!-- Vertical -->
	<div class="space-y-4">
		<h3 class="font-semibold">Vertical Orientation</h3>
		{#each ["default", "outline", "filled", "ghost"] as variant}
			<div class="grid grid-cols-3 gap-4">
				<NumberSpinner variant={variant} value={10} size="sm" />
				<NumberSpinner variant={variant} value={10} size="default" />
				<NumberSpinner variant={variant} value={10} size="lg" />
			</div>
		{/each}
	</div>

	<!-- Horizontal -->
	<div class="space-y-4">
		<h3 class="font-semibold">Horizontal Orientation</h3>
		{#each ["default", "outline", "filled", "ghost"] as variant}
			<div class="grid grid-cols-3 gap-4">
				<NumberSpinner variant={variant} value={10} size="sm" orientation="horizontal" />
				<NumberSpinner variant={variant} value={10} size="default" orientation="horizontal" />
				<NumberSpinner variant={variant} value={10} size="lg" orientation="horizontal" />
			</div>
		{/each}
	</div>
</div>`;
