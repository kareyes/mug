export const basicSelectionDocs = `
<script lang="ts">
  import { Calendar } from "@kareyes/aether";
  import { today, getLocalTimeZone, isWeekend, type DateValue } from "@internationalized/date";

  let selected = $state<DateValue | undefined>();
</script>

<!-- Basic single date selection -->
<Calendar type="single" bind:value={selected} />

<!-- Dropdown navigation (month + year selects) -->
<Calendar type="single" bind:value={selected} captionLayout="dropdown" />

<!-- Pre-selected with today's date -->
<Calendar type="single" value={today(getLocalTimeZone())} />

<!-- Only allow dates from today to 2 months ahead -->
<Calendar
  type="single"
  bind:value={selected}
  minValue={today(getLocalTimeZone())}
  maxValue={today(getLocalTimeZone()).add({ months: 2 })}
/>

<!-- Disable weekends -->
<Calendar
  type="single"
  isDateDisabled={(date: DateValue) => isWeekend(date, "en-US")}
/>

<!-- Mark specific days as unavailable -->
<Calendar
  type="single"
  isDateUnavailable={(date: DateValue) => [5, 10, 15, 20, 25].includes(date.day)}
/>

<!-- Week starts on Monday -->
<Calendar type="single" weekStartsOn={1} />

<!-- Always show 6 weeks (fixed height) -->
<Calendar type="single" fixedWeeks={true} />

<!-- Spanish locale -->
<Calendar type="single" locale="es-ES" />`;

export const multipleMonthsDocs = `
<script lang="ts">
  import { Calendar } from "@kareyes/aether";
  import type { DateValue } from "@internationalized/date";

  let selected = $state<DateValue | undefined>();
</script>

<Calendar type="single" bind:value={selected} numberOfMonths={2} />`;

export const captionLayoutsDocs = `
<script lang="ts">
  import { Calendar } from "@kareyes/aether";
</script>

<!-- Default label (prev/next arrows only) -->
<Calendar type="single" captionLayout="label" />

<!-- Both month and year dropdowns -->
<Calendar type="single" captionLayout="dropdown" />

<!-- Month dropdown only -->
<Calendar type="single" captionLayout="dropdown-months" />

<!-- Year dropdown only -->
<Calendar type="single" captionLayout="dropdown-years" />`;

export const buttonVariantsDocs = `
<script lang="ts">
  import { Calendar } from "@kareyes/aether";
</script>

<!-- Ghost (default) -->
<Calendar type="single" buttonVariant="ghost" />

<!-- Outline -->
<Calendar type="single" buttonVariant="outline" />

<!-- Solid -->
<Calendar type="single" buttonVariant="default" />`;

export const statesDocs = `
<script lang="ts">
  import { Calendar } from "@kareyes/aether";
  import { today, getLocalTimeZone } from "@internationalized/date";
</script>

<!-- Fully disabled — no interaction -->
<Calendar type="single" disabled />

<!-- Readonly — navigate but cannot select -->
<Calendar type="single" readonly value={today(getLocalTimeZone())} />`;

export const sizeVariantsDocs = `
<script lang="ts">
  import { Calendar } from "@kareyes/aether";
</script>

<Calendar type="single" size="sm" />
<Calendar type="single" size="default" />
<Calendar type="single" size="lg" />
<Calendar type="single" size="xl" />`;

export const eventMarkersDocs = `
<script lang="ts">
  import { Calendar, type CalendarPrimitives } from "@kareyes/aether";
  import { today, getLocalTimeZone } from "@internationalized/date";

  type CalendarEvent = CalendarPrimitives.CalendarEvent;

  const now = today(getLocalTimeZone());
  const pad = (n: number) => String(n).padStart(2, "0");

  const events: CalendarEvent[] = [
    { date: \`\${now.year}-\${pad(now.month)}-05\`, color: "#ef4444", label: "Meeting" },
    { date: \`\${now.year}-\${pad(now.month)}-05\`, color: "#3b82f6", label: "Call" },
    { date: \`\${now.year}-\${pad(now.month)}-10\`, color: "#22c55e", label: "Event" },
    { date: \`\${now.year}-\${pad(now.month)}-15\`, color: "#f59e0b", label: "Deadline" },
    { date: \`\${now.year}-\${pad(now.month)}-20\`, color: "#06b6d4", label: "Launch" },
  ];
</script>

<!-- Dots on sm/default, badge labels on lg/xl -->
<Calendar type="single" size="sm" {events} />
<Calendar type="single" size="default" {events} />
<Calendar type="single" size="lg" {events} />
<Calendar type="single" size="xl" {events} />`;

export const combinedFeaturesDocs = `
<script lang="ts">
  import { Calendar, type CalendarPrimitives } from "@kareyes/aether";
  import { today, getLocalTimeZone } from "@internationalized/date";

  type CalendarEvent = CalendarPrimitives.CalendarEvent;

  const now = today(getLocalTimeZone());
  const pad = (n: number) => String(n).padStart(2, "0");

  const events: CalendarEvent[] = [
    { date: \`\${now.year}-\${pad(now.month)}-10\`, color: "#22c55e", label: "Event" },
    { date: \`\${now.year}-\${pad(now.month)}-15\`, color: "#f59e0b", label: "Deadline" },
  ];
</script>

<Calendar
  type="single"
  size="xl"
  {events}
  captionLayout="dropdown"
  fixedWeeks={true}
/>`;

export const fullSizeDocs = `
<script lang="ts">
  import { Calendar, type CalendarPrimitives } from "@kareyes/aether";
  import { today, getLocalTimeZone } from "@internationalized/date";

  type CalendarEvent = CalendarPrimitives.CalendarEvent;

  const now = today(getLocalTimeZone());
  const pad = (n: number) => String(n).padStart(2, "0");

  const events: CalendarEvent[] = [
    { date: \`\${now.year}-\${pad(now.month)}-03\`, color: "#3b82f6", label: "Team Standup", description: "Daily sync" },
    { date: \`\${now.year}-\${pad(now.month)}-05\`, color: "#ef4444", label: "Client Meeting" },
    { date: \`\${now.year}-\${pad(now.month)}-15\`, color: "#ec4899", label: "Release v2.0", description: "Major deployment" },
    { date: \`\${now.year}-\${pad(now.month)}-20\`, color: "#06b6d4", label: "Conference" },
  ];
</script>

<div class="border rounded-lg overflow-hidden bg-background">
  <Calendar type="single" size="full" {events} fixedWeeks={true} />
</div>`;
