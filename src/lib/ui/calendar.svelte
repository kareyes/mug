<script lang="ts">
	import { Calendar , Card, CalendarPrimitives} from "@kareyes/aether";
	import {
		today,
		getLocalTimeZone,
		isWeekend,
		type DateValue,
	} from "@internationalized/date";
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

	// Sample events for demonstration
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

	// Full calendar events with more details
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

<div class="container mx-auto p-8 space-y-8">
	<div class="text-center space-y-2">
		<h1 class="text-4xl font-bold">Calendar Component</h1>
		<p class="text-muted-foreground">
			A fully-featured calendar for displaying and selecting dates
		</p>
	</div>

	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		<!-- Basic Calendar -->
		<Card title="Basic Calendar" description="Simple date selection">
			<div class="flex flex-col items-center gap-4">
				<Calendar type="single" bind:value={basicDate} />
				<p class="text-sm text-muted-foreground">
					{formatDate(basicDate)}
				</p>
			</div>
		</Card>

		<!-- Dropdown Navigation -->
		<Card
			title="Dropdown Navigation"
			description="Quick month/year selection"
		>
			<div class="flex flex-col items-center gap-4">
				<Calendar type="single" bind:value={dropdownDate} captionLayout="dropdown" />
				<p class="text-sm text-muted-foreground">
					{formatDate(dropdownDate)}
				</p>
			</div>
		</Card>

		<!-- Today Highlighted -->
		<Card title="With Initial Value" description="Pre-selected date">
			<div class="flex flex-col items-center gap-4">
				<Calendar type="single" value={today(getLocalTimeZone())} />
				<p class="text-sm text-muted-foreground">
					Initialized with today's date
				</p>
			</div>
		</Card>

		<!-- Date Constraints -->
		<Card title="Date Constraints" description="Min/max date restrictions">
			<div class="flex flex-col items-center gap-4">
				<Calendar
					type="single"
					bind:value={constrainedDate}
					minValue={today(getLocalTimeZone())}
					maxValue={today(getLocalTimeZone()).add({ months: 2 })}
				/>
				<p class="text-sm text-muted-foreground">
					Only dates from today to 2 months ahead
				</p>
			</div>
		</Card>

		<!-- Disabled Weekends -->
		<Card title="Disabled Weekends" description="Weekends are not selectable">
			<div class="flex flex-col items-center gap-4">
				<Calendar type="single" isDateDisabled={(date) => isWeekend(date, "en-US")} />
				<p class="text-sm text-muted-foreground">
					Saturday and Sunday disabled
				</p>
			</div>
		</Card>

		<!-- Unavailable Dates -->
		<Card
			title="Unavailable Dates"
			description="Dates marked as unavailable"
		>
			<div class="flex flex-col items-center gap-4">
				<Calendar
					type="single"
					isDateUnavailable={(date) =>
						[5, 10, 15, 20, 25].includes(date.day)}
				/>
				<p class="text-sm text-muted-foreground">
					5th, 10th, 15th, 20th, 25th shown with strikethrough
				</p>
			</div>
		</Card>

		<!-- Week Starts Monday -->
		<Card title="Week Starts Monday" description="European style calendar">
			<div class="flex flex-col items-center gap-4">
				<Calendar type="single" weekStartsOn={1} />
				<p class="text-sm text-muted-foreground">
					Week begins on Monday
				</p>
			</div>
		</Card>

		<!-- Fixed Weeks -->
		<Card title="Fixed Weeks" description="Always shows 6 weeks">
			<div class="flex flex-col items-center gap-4">
				<Calendar type="single" fixedWeeks={true} />
				<p class="text-sm text-muted-foreground">
					Consistent height across months
				</p>
			</div>
		</Card>

		<!-- Spanish Locale -->
		<Card title="Spanish Locale" description="Localized to Spanish">
			<div class="flex flex-col items-center gap-4">
				<Calendar type="single" bind:value={localeDate} locale="es-ES" />
				<p class="text-sm text-muted-foreground">
					{localeDate
						? localeDate
								.toDate(getLocalTimeZone())
								.toLocaleDateString("es-ES", {
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

	<!-- Multiple Months Section -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold">Multiple Months</h2>
		<Card title="Two Month View" description="Display two months side by side">
			<div class="flex flex-col items-center gap-4">
				<Calendar type="single" bind:value={multiMonthDate} numberOfMonths={2} />
				<p class="text-sm text-muted-foreground">
					{formatDate(multiMonthDate)}
				</p>
			</div>
		</Card>
	</section>

	<!-- Caption Layouts Section -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold">Caption Layouts</h2>
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
	</section>

	<!-- Button Variants Section -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold">Navigation Button Variants</h2>
		<div class="grid gap-8 md:grid-cols-3">
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
	</section>

	<!-- States Section -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold">States</h2>
		<div class="grid gap-8 md:grid-cols-2">
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
	</section>

	<!-- Size Variants Section -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold">Size Variants</h2>
		<div class="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
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
	</section>

	<!-- Event Markers Section -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold">Event Markers</h2>
		<p class="text-muted-foreground">
			Event markers display as dots on smaller sizes and badges on larger sizes.
			Check dates 5, 10, 15, 20, and today for event markers.
		</p>
		<div class="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
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
	</section>

	<!-- Combined Features Section -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold">Combined Features</h2>
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
	</section>

	<!-- Full Size Calendar Section -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold">Full Size Calendar</h2>
		<p class="text-muted-foreground">
			A full-width calendar view with event cards. Perfect for scheduling applications.
			Events display as colored cards with labels. Responsive on mobile/desktop.
		</p>
		<div class="border rounded-lg overflow-hidden bg-background">
			<Calendar
				type="single"
				size="full"
				events={fullCalendarEvents}
				fixedWeeks={true}
			/>
		</div>
	</section>
</div>
