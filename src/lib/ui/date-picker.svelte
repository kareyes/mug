<script lang="ts">
	import { basicDatePickerDocs, dateRangePickerDocs, datePickerWithPresetsDocs, dateRangeWithPresetsDocs, errorStatesDocs, buttonVariantsDocs, disabledStateDocs, customFormatDocs } from "$lib/code-blocks/date-picker";
	import { DatePicker, DateRangePicker, DatePickerWithPresets, DateRangePickerWithPresets, DatePickerPrimitives, Card, CodeBlock } from "@kareyes/aether";
	import { type DateValue, CalendarDate, today, getLocalTimeZone } from "@internationalized/date";

	let singleDate = $state<DateValue | undefined>();
	let dateRange = $state<DatePickerPrimitives.DateRange | undefined>();
	let presetDate = $state<DateValue | undefined>();
	let presetRange = $state<DatePickerPrimitives.DateRange | undefined>();
	let disabledDate = $state<DateValue | undefined>();
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<div class="mb-8">
		<h1 class="text-3xl font-bold mb-2">Date Picker Components</h1>
		<p class="text-muted-foreground">
			A collection of date picker components built with Calendar, RangeCalendar, and Popover.
		</p>
	</div>

	<div class="space-y-12">
		<!-- Basic Date Picker -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Date Picker</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Select a single date with a popover calendar.
			</p>
			<div class="grid gap-4 max-w-md">
				<DatePicker bind:value={singleDate} />
				{#if singleDate && typeof singleDate.toDate === "function"}
					<div class="text-sm text-muted-foreground">
						Selected: {singleDate.toDate(getLocalTimeZone()).toLocaleDateString()}
					</div>
				{/if}
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={basicDatePickerDocs}
			/>
		</Card>

		<!-- Date Range Picker -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Date Range Picker</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Select a date range with two calendars side by side.
			</p>
			<div class="grid gap-4 max-w-md">
				<DateRangePicker bind:value={dateRange} />
				{#if dateRange?.start && dateRange?.end && typeof dateRange.start.toDate === "function" && typeof dateRange.end.toDate === "function"}
					<div class="text-sm text-muted-foreground">
						Selected: {dateRange.start.toDate(getLocalTimeZone()).toLocaleDateString()} - {dateRange.end.toDate(getLocalTimeZone()).toLocaleDateString()}
					</div>
				{/if}
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={dateRangePickerDocs}
			/>
		</Card>

		<!-- Date Picker with Presets -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Date Picker with Presets</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Quick date selection with preset options.
			</p>
			<div class="grid gap-4 max-w-md">
				<DatePickerWithPresets bind:value={presetDate} />
				{#if presetDate && typeof presetDate.toDate === "function"}
					<div class="text-sm text-muted-foreground">
						Selected: {presetDate.toDate(getLocalTimeZone()).toLocaleDateString()}
					</div>
				{/if}
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={datePickerWithPresetsDocs}
			/>
		</Card>

		<!-- Date Range Picker with Presets -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Date Range Picker with Presets</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Quick date range selection with common preset ranges.
			</p>
			<div class="grid gap-4 max-w-md">
				<DateRangePickerWithPresets bind:value={presetRange} />
				{#if presetRange?.start && presetRange?.end && typeof presetRange.start.toDate === "function" && typeof presetRange.end.toDate === "function"}
					<div class="text-sm text-muted-foreground">
						Selected: {presetRange.start.toDate(getLocalTimeZone()).toLocaleDateString()} - {presetRange.end.toDate(getLocalTimeZone()).toLocaleDateString()}
					</div>
				{/if}
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={dateRangeWithPresetsDocs}
			/>
		</Card>

		<!-- Error States -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Error States</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Date pickers with error styling.
			</p>
			<div class="grid gap-4 max-w-md">
				<div>
					<DatePicker
						error={true}
						onError={(err) => console.log('Error state:', err)}
					/>
					<p class="text-xs text-destructive mt-1">Date is required</p>
				</div>
				<div>
					<DatePickerWithPresets
						error={true}
					/>
					<p class="text-xs text-destructive mt-1">Please select a valid date</p>
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
				code={errorStatesDocs}
			/>
		</Card>

		<!-- Button Variants -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Button Variants</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Different button styles for the date picker trigger.
			</p>
			<div class="grid gap-4 max-w-md">
				<DatePicker buttonVariant="default" />
				<DatePicker buttonVariant="outline" />
				<DatePicker buttonVariant="ghost" />
				<DatePicker buttonVariant="secondary" />
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={buttonVariantsDocs}
			/>
		</Card>

		<!-- Disabled State -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Disabled State</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Date picker in disabled state.
			</p>
			<div class="grid gap-4 max-w-md">
				<DatePicker bind:value={disabledDate} disabled />
			</div>

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

		<!-- Custom Format -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Custom Format</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Customize the date display format.
			</p>
			<div class="grid gap-4 max-w-md">
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
				/>
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={customFormatDocs}
			/>
		</Card>
	</div>
</div>
