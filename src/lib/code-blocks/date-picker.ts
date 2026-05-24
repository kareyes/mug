export const basicDatePickerDocs = `
<script lang="ts">
	import { DatePicker } from "@kareyes/aether-ui";
	import type { DateValue } from "@internationalized/date";

	let singleDate = $state<DateValue | undefined>();
</script>

<DatePicker bind:value={singleDate} />`;

export const dateRangePickerDocs = `
<script lang="ts">
	import { DateRangePicker, DatePickerPrimitives } from "@kareyes/aether-ui";

	let dateRange = $state<DatePickerPrimitives.DateRange | undefined>();
</script>

<DateRangePicker bind:value={dateRange} />`;

export const datePickerWithPresetsDocs = `
<script lang="ts">
	import { DatePickerWithPresets } from "@kareyes/aether-ui";
	import type { DateValue } from "@internationalized/date";

	let presetDate = $state<DateValue | undefined>();
</script>

<DatePickerWithPresets bind:value={presetDate} />`;

export const dateRangeWithPresetsDocs = `
<script lang="ts">
	import { DateRangePickerWithPresets, DatePickerPrimitives } from "@kareyes/aether-ui";

	let presetRange = $state<DatePickerPrimitives.DateRange | undefined>();
</script>

<DateRangePickerWithPresets bind:value={presetRange} />`;

export const errorStatesDocs = `
<script lang="ts">
	import { DatePicker, DatePickerWithPresets } from "@kareyes/aether-ui";
</script>

<div class="grid gap-4 max-w-md">
	<div>
		<DatePicker
			error={true}
			onError={(err) => console.log('Error state:', err)}
		/>
		<p class="text-xs text-destructive mt-1">Date is required</p>
	</div>
	<div>
		<DatePickerWithPresets error={true} />
		<p class="text-xs text-destructive mt-1">Please select a valid date</p>
	</div>
</div>`;

export const buttonVariantsDocs = `
<script lang="ts">
	import { DatePicker } from "@kareyes/aether-ui";
</script>

<div class="grid gap-4 max-w-md">
	<DatePicker buttonVariant="default" />
	<DatePicker buttonVariant="outline" />
	<DatePicker buttonVariant="ghost" />
	<DatePicker buttonVariant="secondary" />
</div>`;

export const disabledStateDocs = `
<script lang="ts">
	import { DatePicker } from "@kareyes/aether-ui";
	import type { DateValue } from "@internationalized/date";

	let disabledDate = $state<DateValue | undefined>();
</script>

<DatePicker bind:value={disabledDate} disabled />`;

export const customFormatDocs = `
<script lang="ts">
	import { DatePicker } from "@kareyes/aether-ui";
	import { getLocalTimeZone } from "@internationalized/date";
</script>

<DatePicker
	format={(date) => {
		if (!date) return "Select date";
		return date.toDate(getLocalTimeZone()).toLocaleDateString("en-US", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric"
		});
	}}
/>`;
