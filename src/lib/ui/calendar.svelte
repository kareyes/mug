<script lang="ts">
	import { Calendar, Card, CalendarPrimitives, CodeBlock } from "@kareyes/aether";
	import {
		today,
		getLocalTimeZone,
		isWeekend,
		type DateValue,
	} from "@internationalized/date";
	import PreviewContainer from "../components/preview-container.svelte";
	import {
		basicSelectionDocs,
		multipleMonthsDocs,
		captionLayoutsDocs,
		buttonVariantsDocs,
		statesDocs,
		sizeVariantsDocs,
		eventMarkersDocs,
		combinedFeaturesDocs,
		fullSizeDocs,
	} from "../code-blocks/calendar";

	type CalendarEvent = CalendarPrimitives.CalendarEvent;

	let basicDate = $state<DateValue | undefined>();
	let dropdownDate = $state<DateValue | undefined>();
	let multiMonthDate = $state<DateValue | undefined>();
	let constrainedDate = $state<DateValue | undefined>();
	let localeDate = $state<DateValue | undefined>();

	const formatDate = (date: DateValue | undefined) => {
		if (!date) return "No date selected";
		return date.toDate(getLocalTimeZone()).toLocaleDateString("en-US", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	const now = today(getLocalTimeZone());
	const sampleEvents: CalendarEvent[] = [
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-05`, color: "#ef4444", label: "Meeting" },
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-05`, color: "#3b82f6", label: "Call" },
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-10`, color: "#22c55e", label: "Event" },
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-15`, color: "#f59e0b", label: "Deadline" },
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-15`, color: "#8b5cf6", label: "Review" },
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-15`, color: "#ec4899" },
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-20`, color: "#06b6d4", label: "Launch" },
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-${String(now.day).padStart(2, "0")}`, color: "#ef4444", label: "Today" },
	];

	const fullCalendarEvents: CalendarEvent[] = [
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-03`, color: "#3b82f6", label: "Team Standup", description: "Daily sync with the team" },
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-05`, color: "#ef4444", label: "Client Meeting", description: "Quarterly review" },
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-05`, color: "#f97316", label: "Sprint Demo" },
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-07`, color: "#22c55e", label: "Code Review" },
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-10`, color: "#8b5cf6", label: "Design Review", description: "UI/UX feedback session" },
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-12`, color: "#06b6d4", label: "Workshop" },
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-15`, color: "#ec4899", label: "Release v2.0", description: "Major release deployment" },
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-15`, color: "#f59e0b", label: "Marketing Call" },
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-18`, color: "#3b82f6", label: "Planning" },
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-18`, color: "#22c55e", label: "1:1 Meeting" },
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-18`, color: "#ef4444", label: "Deadline" },
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-18`, color: "#8b5cf6", label: "Training" },
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-20`, color: "#06b6d4", label: "Conference" },
		{ date: `${now.year}-${String(now.month).padStart(2, "0")}-${String(now.day).padStart(2, "0")}`, color: "#ef4444", label: "Today's Event" },
	];
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<div class="space-y-12">

		<!-- Basic Date Selection -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Basic Date Selection</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Core selection modes with constraints, disabled dates, and locale support.
			</p>
			<PreviewContainer>
				<div class="grid gap-8 @md:grid-cols-2 @lg:grid-cols-3">
					<Card title="Basic Calendar" description="Simple date selection">
						<div class="flex flex-col items-center gap-4">
							<Calendar type="single" bind:value={basicDate} />
							<p class="text-sm text-muted-foreground">{formatDate(basicDate)}</p>
						</div>
					</Card>

					<Card title="Dropdown Navigation" description="Quick month/year selection">
						<div class="flex flex-col items-center gap-4">
							<Calendar type="single" bind:value={dropdownDate} captionLayout="dropdown" />
							<p class="text-sm text-muted-foreground">{formatDate(dropdownDate)}</p>
						</div>
					</Card>

					<Card title="With Initial Value" description="Pre-selected date">
						<div class="flex flex-col items-center gap-4">
							<Calendar type="single" value={today(getLocalTimeZone())} />
							<p class="text-sm text-muted-foreground">Initialized with today's date</p>
						</div>
					</Card>

					<Card title="Date Constraints" description="Min/max date restrictions">
						<div class="flex flex-col items-center gap-4">
							<Calendar
								type="single"
								bind:value={constrainedDate}
								minValue={today(getLocalTimeZone())}
								maxValue={today(getLocalTimeZone()).add({ months: 2 })}
							/>
							<p class="text-sm text-muted-foreground">Today to 2 months ahead</p>
						</div>
					</Card>

					<Card title="Disabled Weekends" description="Weekends are not selectable">
						<div class="flex flex-col items-center gap-4">
							<Calendar type="single" isDateDisabled={(date: DateValue) => isWeekend(date, "en-US")} />
							<p class="text-sm text-muted-foreground">Saturday and Sunday disabled</p>
						</div>
					</Card>

					<Card title="Unavailable Dates" description="Dates marked as unavailable">
						<div class="flex flex-col items-center gap-4">
							<Calendar
								type="single"
								isDateUnavailable={(date: DateValue) => [5, 10, 15, 20, 25].includes(date.day)}
							/>
							<p class="text-sm text-muted-foreground">5th, 10th, 15th, 20th, 25th strikethrough</p>
						</div>
					</Card>

					<Card title="Week Starts Monday" description="European style calendar">
						<div class="flex flex-col items-center gap-4">
							<Calendar type="single" weekStartsOn={1} />
							<p class="text-sm text-muted-foreground">Week begins on Monday</p>
						</div>
					</Card>

					<Card title="Fixed Weeks" description="Always shows 6 weeks">
						<div class="flex flex-col items-center gap-4">
							<Calendar type="single" fixedWeeks={true} />
							<p class="text-sm text-muted-foreground">Consistent height across months</p>
						</div>
					</Card>

					<Card title="Spanish Locale" description="Localized to Spanish">
						<div class="flex flex-col items-center gap-4">
							<Calendar type="single" bind:value={localeDate} locale="es-ES" />
							<p class="text-sm text-muted-foreground">
								{localeDate
									? localeDate.toDate(getLocalTimeZone()).toLocaleDateString("es-ES", {
											weekday: "long",
											year: "numeric",
											month: "long",
											day: "numeric",
										})
									: "Ninguna fecha seleccionada"}
							</p>
						</div>
					</Card>
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
				code={basicSelectionDocs}
			/>
		</Card>

		<!-- Multiple Months -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Multiple Months</h2>
			<p class="text-sm text-muted-foreground mb-4">Display multiple months side by side using <code>numberOfMonths</code>.</p>
			<PreviewContainer>
				<Card title="Two Month View" description="Display two months side by side">
					<div class="flex flex-col items-center gap-4">
						<Calendar type="single" bind:value={multiMonthDate} numberOfMonths={2} />
						<p class="text-sm text-muted-foreground">{formatDate(multiMonthDate)}</p>
					</div>
				</Card>
			</PreviewContainer>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={multipleMonthsDocs}
			/>
		</Card>

		<!-- Caption Layouts -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Caption Layouts</h2>
			<p class="text-sm text-muted-foreground mb-4">Control how the month/year header is rendered with <code>captionLayout</code>.</p>
			<PreviewContainer>
				<div class="grid gap-8 @md:grid-cols-1 @lg:grid-cols-2">
					<Card title="Label" description="Default caption style">
						<div class="flex justify-center">
							<Calendar type="single" captionLayout="label" />
						</div>
					</Card>

					<Card title="Dropdown" description="Month & year dropdowns">
						<div class="flex justify-center">
							<Calendar type="single" captionLayout="dropdown" />
						</div>
					</Card>

					<Card title="Dropdown Months" description="Month dropdown only">
						<div class="flex justify-center">
							<Calendar type="single" captionLayout="dropdown-months" />
						</div>
					</Card>

					<Card title="Dropdown Years" description="Year dropdown only">
						<div class="flex justify-center">
							<Calendar type="single" captionLayout="dropdown-years" />
						</div>
					</Card>
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
				code={captionLayoutsDocs}
			/>
		</Card>

		<!-- Navigation Button Variants -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Navigation Button Variants</h2>
			<p class="text-sm text-muted-foreground mb-4">Style the prev/next navigation buttons with <code>buttonVariant</code>.</p>
			<PreviewContainer>
				<div class="grid gap-8 @md:grid-cols-3">
					<Card title="Ghost" description="Default navigation style">
						<div class="flex justify-center">
							<Calendar type="single" buttonVariant="ghost" />
						</div>
					</Card>

					<Card title="Outline" description="Outlined navigation buttons">
						<div class="flex justify-center">
							<Calendar type="single" buttonVariant="outline" />
						</div>
					</Card>

					<Card title="Default" description="Solid navigation buttons">
						<div class="flex justify-center">
							<Calendar type="single" buttonVariant="default" />
						</div>
					</Card>
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
				code={buttonVariantsDocs}
			/>
		</Card>

		<!-- States -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">States</h2>
			<p class="text-sm text-muted-foreground mb-4">Disable all interaction or allow navigation without selection.</p>
			<PreviewContainer>
				<div class="grid gap-8 @md:grid-cols-2">
					<Card title="Disabled" description="Calendar is fully disabled">
						<div class="flex justify-center">
							<Calendar type="single" disabled />
						</div>
					</Card>

					<Card title="Readonly" description="Can navigate but not select">
						<div class="flex justify-center">
							<Calendar type="single" readonly value={today(getLocalTimeZone())} />
						</div>
					</Card>
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
				code={statesDocs}
			/>
		</Card>

		<!-- Size Variants -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Size Variants</h2>
			<p class="text-sm text-muted-foreground mb-4">Four sizes to match different layout needs.</p>
			<PreviewContainer>
				<div class="grid gap-8 @md:grid-cols-1 @xl:grid-cols-2">
					<Card title="Small" description="Compact calendar size">
						<div class="flex justify-center">
							<Calendar type="single" size="sm" />
						</div>
					</Card>

					<Card title="Default" description="Standard calendar size">
						<div class="flex justify-center">
							<Calendar type="single" size="default" />
						</div>
					</Card>

					<Card title="Large" description="Larger calendar cells">
						<div class="flex justify-center">
							<Calendar type="single" size="lg" />
						</div>
					</Card>

					<Card title="Extra Large" description="Maximum calendar size">
						<div class="flex justify-center">
							<Calendar type="single" size="xl" />
						</div>
					</Card>
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
				code={sizeVariantsDocs}
			/>
		</Card>

		<!-- Event Markers -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Event Markers</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Dots on smaller sizes, badge labels on larger sizes. Check dates 5, 10, 15, 20, and today.
			</p>
			<PreviewContainer>
				<div class="grid gap-8 @md:grid-cols-1 @xl:grid-cols-2">
					<Card title="Small with Events" description="Dots display for events">
						<div class="flex justify-center">
							<Calendar type="single" size="sm" events={sampleEvents} />
						</div>
					</Card>

					<Card title="Default with Events" description="Dots display for events">
						<div class="flex justify-center">
							<Calendar type="single" size="default" events={sampleEvents} />
						</div>
					</Card>

					<Card title="Large with Events" description="Badge display for events">
						<div class="flex justify-center">
							<Calendar type="single" size="lg" events={sampleEvents} />
						</div>
					</Card>

					<Card title="XL with Events" description="Full badge labels">
						<div class="flex justify-center">
							<Calendar type="single" size="xl" events={sampleEvents} />
						</div>
					</Card>
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
				code={eventMarkersDocs}
			/>
		</Card>

		<!-- Combined Features -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Combined Features</h2>
			<p class="text-sm text-muted-foreground mb-4">Mixing size, events, caption layout, and fixed weeks together.</p>
			<PreviewContainer>
				<Card title="XL Calendar with Events & Dropdown" description="Full-featured large calendar">
					<div class="flex justify-center">
						<Calendar
							type="single"
							size="xl"
							events={sampleEvents}
							captionLayout="dropdown"
							fixedWeeks={true}
						/>
					</div>
				</Card>
			</PreviewContainer>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={combinedFeaturesDocs}
			/>
		</Card>

		<!-- Full Size Calendar -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-4">Full Size Calendar</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Full-width view with event cards. Events display as colored cards with labels. Responsive on mobile/desktop.
			</p>
			<PreviewContainer>
				<div class="border rounded-lg overflow-hidden bg-background">
					<Calendar
						type="single"
						size="full"
						events={fullCalendarEvents}
						fixedWeeks={true}
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
				code={fullSizeDocs}
			/>
		</Card>

	</div>
</div>
