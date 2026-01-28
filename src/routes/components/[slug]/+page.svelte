<script lang="ts">
    import button from "$lib/ui/button.svelte";
    import avatar from "$lib/ui/avatar.svelte";
    import alert from "$lib/ui/alert.svelte";
    import alertDialog from "$lib/ui/alert-dialog.svelte";
    import accordion from "$lib/ui/accordion.svelte";
    import badge from "$lib/ui/badge.svelte";
    import breadcrumbs from "$lib/ui/breadcrumb.svelte";
    import buttonGroup from "$lib/ui/button-group.svelte";
    import Calendar from "$lib/ui/calendar.svelte";
    import card from "$lib/ui/card.svelte";
    import checkbox from "$lib/ui/checkbox.svelte";
    import CheckboxGroup from "$lib/ui/checkbox-group.svelte";
    import combobox from "$lib/ui/combobox.svelte"
    import datatable from "$lib/ui/data-table.svelte"
    import datepicker from "$lib/ui/date-picker.svelte"
    import dialog from "$lib/ui/dialog.svelte"
    import dropdownMenu from "$lib/ui/dropdown-menu.svelte"
    import field from "$lib/ui/field.svelte"
    import fileInput from "$lib/ui/file-input.svelte"
    import input from "$lib/ui/input.svelte"
    import InputOtp from "$lib/ui/input-otp.svelte";
    import numberSpinner from "$lib/ui/number-spinner.svelte"
    import popover from "$lib/ui/popover.svelte"
    import radioGroup from "$lib/ui/radio-group.svelte"
    import select from "$lib/ui/select.svelte"
    import Sheet from "$lib/ui/sheet.svelte";
    import Sidebar from "$lib/ui/sidebar.svelte";
    import Skeleton from "$lib/ui/skeleton.svelte";
    import Slider from "$lib/ui/slider.svelte";
    import Sonner from "$lib/ui/sonner.svelte";
    import Stepper from "$lib/ui/stepper.svelte";
    import Switch from "$lib/ui/switch.svelte";
    import TabsComponent from "$lib/ui/tabs.svelte";
    import Textarea from "$lib/ui/textarea.svelte";
    import { TabsPrimitives } from "@kareyes/aether";
    import { page } from "$app/state";
    import { marked } from 'marked';
    import type { PageData } from './$types';

    const { Tabs, TabsList, TabsTrigger, TabsContent } = TabsPrimitives;

    let { data }: { data: PageData } = $props();
    let slug = $derived(page.params?.slug);

    let markdownContent = $derived.by(() => {
        if (data?.markdown) {
            return marked.parse(data.markdown, {
                gfm: true,
                breaks: true,
            });
        }
        return null;
    });

    const componentMap: Record<string, { name: string; component: any; title: string; description: string }> = {
        "button": { name: "button", component: button, title: "Button", description: "A clickable element that triggers an action or event" },
        "avatar": { name: "avatar", component: avatar, title: "Avatar", description: "An enhanced avatar component for displaying user profile images with support for fallbacks, variants, colors, shapes, and grouping" },
        "alert": { name: "alert", component: alert, title: "Alert", description: "A component to display important messages and notifications to users" },
        "alert-dialog": { name: "alert-dialog", component: alertDialog, title: "Alert Dialog", description: "A modal dialog for displaying alerts and requiring user confirmation" },
        "accordion": { name: "accordion", component: accordion, title: "Accordion", description: "A collapsible content container with expandable sections" },
        "badge": { name: "badge", component: badge, title: "Badge", description: "A small label component for displaying status or categories" },
        "breadcrumb": { name: "breadcrumb", component: breadcrumbs, title: "Breadcrumb", description: "A navigation component showing the current page location in a hierarchy" },
        "button-group": { name: "button-group", component: buttonGroup, title: "Button Group", description: "A group of buttons displayed together with unified styling" },
        "calendar": { name: "calendar", component: Calendar, title: "Calendar", description: "A date picker component with calendar interface" },
        "card": { name: "card", component: card, title: "Card", description: "A container component for grouping content with unified styling" },
        "checkbox": { name: "checkbox", component: checkbox, title: "Checkbox", description: "A binary input control for selecting true or false states" },
        "checkbox-group": { name: "checkbox-group", component: CheckboxGroup, title: "Checkbox Group", description: "A group of checkboxes for multiple selections" },
        "combobox": { name: "combobox", component: combobox, title: "Combobox", description: "A searchable dropdown component combining input and selection" },
        "data-table": { name: "data-table", component: datatable, title: "Data Table", description: "A component for displaying data in a table format with sorting and pagination" },
        "date-picker": { name: "date-picker", component: datepicker, title: "Date Picker", description: "A component for selecting dates with calendar interface" },
        "dialog": { name: "dialog", component: dialog, title: "Dialog", description: "A modal window for displaying content and prompting user interaction" },
        "dropdown-menu": { name: "dropdown-menu", component: dropdownMenu, title: "Dropdown Menu", description: "A menu that drops down when triggered, showing a list of options" },
        "file-input": { name: "file-input", component: fileInput, title: "File Input", description: "An input component for selecting and uploading files" },
        "field": { name: "field", component: field, title: "Field", description: "A wrapper component for form inputs with labels and validation states" },
        "input": { name: "input", component: input, title: "Input", description: "A basic text input component for user data entry" },
        "input-otp": { name: "input-otp", component: InputOtp, title: "Input OTP", description: "A specialized input component for one-time password entry" },
        "number-spinner": { name: "number-spinner", component: numberSpinner, title: "Number Spinner", description: "A numeric input with increment and decrement controls" },
        "popover": { name: "popover", component: popover, title: "Popover", description: "A floating content panel that appears relative to a trigger element" },
        "radio": { name: "radio", component: radioGroup, title: "Radio Group", description: "A group of radio buttons for single selection from multiple options" },
        "select": { name: "select", component: select, title: "Select", description: "A dropdown component for selecting from a list of options" },
        "sheet": { name: "sheet", component: Sheet, title: "Sheet", description: "A sliding panel that appears from the side of the screen" },
        "sidebar": { name: "sidebar", component: Sidebar, title: "Sidebar", description: "A vertical navigation panel typically displayed on the side of the page" },
        "skeleton": { name: "skeleton", component: Skeleton, title: "Skeleton", description: "A placeholder component showing loading state while content loads" },
        "slider": { name: "slider", component: Slider, title: "Slider", description: "A component for selecting a value from a range using a draggable handle" },
        "sonner": { name: "sonner", component: Sonner, title: "Sonner", description: "A toast notification component for displaying temporary messages" },
        "stepper": { name: "stepper", component: Stepper, title: "Stepper", description: "A component for displaying steps in a process or wizard" },
        "switch": { name: "switch", component: Switch, title: "Switch", description: "A toggle control for switching between two states" },
        "tabs": { name: "tabs", component: TabsComponent, title: "Tabs", description: "A component for organizing content into multiple tabs" },
        "textarea": { name: "textarea", component: Textarea, title: "Textarea", description: "A multi-line text input component for longer text entries" }
    };
</script>

<div class="min-h-screen">
    {#if slug && componentMap[slug]}
        
        <Tabs value="component" class="w-full">
            <div class="max-w-6xl mb-6 px-4 mx-auto w-full">
                <div class="mb-6">
                    <h1 class="text-3xl font-bold mb-2">{componentMap[slug].title}</h1>
                    <p class="text-gray-600 dark:text-gray-400">{componentMap[slug].description}</p>
                </div>
                <TabsList variant="segmented">
                    <TabsTrigger value="component" variant="segmented">
                        Component
                    </TabsTrigger>
                    {#if markdownContent}
                        <TabsTrigger value="documentation" variant="segmented">
                            Documentation
                        </TabsTrigger>
                    {/if}
                </TabsList>
            </div>

            <div class="max-w-6xl mx-auto">
                <TabsContent value="component" class="p-0 m-0">
                    <div>
                        {@render componentMap[slug].component()}
                    </div>
                </TabsContent>

                {#if markdownContent}
                    <TabsContent value="documentation" class="p-0 m-0">
                        <div class="github-markdown py-8 px-6">
                            <div class="markdown-body">
                                {@html markdownContent}
                            </div>
                        </div>
                    </TabsContent>
                {/if}
            </div>
        </Tabs>
    {/if}
</div>

<style>
	:global(.markdown-body) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial,
			sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
		font-size: 16px;
		line-height: 1.6;
		color: rgb(31, 35, 40);
	}

	:global(.dark .markdown-body) {
		color: rgb(230, 237, 243);
	}

	:global(.markdown-body h1),
	:global(.markdown-body h2) {
		padding-bottom: 0.3em;
		border-bottom: 1px solid rgb(208, 215, 222);
	}

	:global(.dark .markdown-body h1),
	:global(.dark .markdown-body h2) {
		border-bottom-color: rgb(48, 54, 61);
	}

	:global(.markdown-body h1) {
		font-size: 2em;
		margin: 0.67em 0;
		font-weight: 600;
	}

	:global(.markdown-body h2) {
		font-size: 1.5em;
		margin: 0.75em 0 0.5em 0;
		font-weight: 600;
	}

	:global(.markdown-body h3) {
		font-size: 1.25em;
		margin: 1em 0 0.5em 0;
		font-weight: 600;
	}

	:global(.markdown-body h4) {
		font-size: 1em;
		margin: 1em 0 0.5em 0;
		font-weight: 600;
	}

	:global(.markdown-body h5) {
		font-size: 0.875em;
		margin: 1em 0 0.5em 0;
		font-weight: 600;
	}

	:global(.markdown-body h6) {
		font-size: 0.85em;
		margin: 1em 0 0.5em 0;
		font-weight: 600;
		color: rgb(87, 96, 106);
	}

	:global(.dark .markdown-body h6) {
		color: rgb(139, 148, 159);
	}

	:global(.markdown-body p) {
		margin: 0 0 10px 0;
	}

	:global(.markdown-body blockquote) {
		padding: 0 1em;
		color: rgb(87, 96, 106);
		border-left: 0.25em solid rgb(208, 215, 222);
		margin: 0 0 16px 0;
	}

	:global(.dark .markdown-body blockquote) {
		color: rgb(139, 148, 159);
		border-left-color: rgb(48, 54, 61);
	}

	:global(.markdown-body ul),
	:global(.markdown-body ol) {
		padding-left: 2em;
		margin-bottom: 16px;
	}

	:global(.markdown-body li) {
		margin-bottom: 4px;
	}

	:global(.markdown-body code) {
		background-color: rgb(240, 244, 247);
		border-radius: 6px;
		margin: 0;
		padding: 0.2em 0.4em;
		font-family: 'Courier New', 'Courier', monospace;
		font-size: 0.9em;
		color: rgb(31, 35, 40);
	}

	:global(.dark .markdown-body code) {
		background-color: transparent;
		color: rgb(230, 237, 243);
	}

	:global(.markdown-body pre) {
		background-color: rgb(240, 244, 247);
		border-radius: 6px;
		padding: 16px;
		overflow: auto;
		margin-bottom: 16px;
		line-height: 1.45;
	}

	:global(.dark .markdown-body pre) {
		background-color: rgb(13, 17, 23);
	}

	:global(.markdown-body pre code) {
		background-color: transparent;
		border: 0;
		display: inline;
		margin: 0;
		padding: 0;
		overflow: visible;
		line-height: inherit;
		color: inherit;
		font-size: 0.9em;
	}

	:global(.markdown-body a) {
		color: rgb(9, 105, 218);
		text-decoration: none;
	}

	:global(.markdown-body a:hover) {
		text-decoration: underline;
	}

	:global(.dark .markdown-body a) {
		color: rgb(88, 166, 255);
	}

	:global(.markdown-body table) {
		border-collapse: collapse;
		width: 100%;
		margin-bottom: 16px;
	}

	:global(.markdown-body table tr) {
		background-color: rgb(255, 255, 255);
		border-top-color: rgb(208, 215, 222);
	}

	:global(.dark .markdown-body table tr) {
		background-color: rgb(13, 17, 23);
	}

	:global(.markdown-body table tr:nth-child(2n)) {
		background-color: rgb(248, 250, 252);
	}

	:global(.dark .markdown-body table tr:nth-child(2n)) {
		background-color: rgb(22, 27, 35);
	}

	:global(.markdown-body table th),
	:global(.markdown-body table td) {
		border: 1px solid rgb(208, 215, 222);
		padding: 6px 13px;
		text-align: left;
	}

	:global(.dark .markdown-body table th),
	:global(.dark .markdown-body table td) {
		border-color: rgb(48, 54, 61);
	}

	:global(.markdown-body table th) {
		font-weight: 600;
		background-color: rgb(245, 248, 250);
	}

	:global(.dark .markdown-body table th) {
		background-color: rgb(22, 27, 35);
	}

	:global(.markdown-body strong) {
		font-weight: 600;
	}

	:global(.markdown-body em) {
		font-style: italic;
	}

	:global(.markdown-body hr) {
		height: 2px;
		padding: 0;
		background-color: rgb(208, 215, 222);
		border: 0;
		margin: 24px 0;
	}

	:global(.dark .markdown-body hr) {
		background-color: rgb(48, 54, 61);
	}

	:global(.markdown-body img) {
		max-width: 100%;
		height: auto;
		display: block;
		margin: 16px 0;
	}

	:global(.markdown-body .highlight) {
		background-color: rgb(255, 255, 0);
		margin: -2px;
		padding: 2px;
		border-radius: 3px;
	}
</style>