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

    const componentMap: Record<string, any> = {
        "button": button,
        "avatar": avatar,
        "alert": alert,
        "alert-dialog": alertDialog,
        "accordion": accordion,
        "badge": badge,
        "breadcrumb": breadcrumbs,
        "button-group": buttonGroup,
        "calendar": Calendar,
        "card": card,
        "checkbox": checkbox,
        "checkbox-group": CheckboxGroup,
        "combobox": combobox,
        "data-table": datatable,
        "date-picker": datepicker,
        "dialog": dialog,
        "dropdown-menu": dropdownMenu,
        "file-input": fileInput,
        "field": field,
        "input": input,
        "input-otp": InputOtp,
        "number-spinner": numberSpinner,
        "popover": popover,
        "radio": radioGroup,
        "select": select,
        "sheet": Sheet,
        "sidebar": Sidebar,
        "skeleton": Skeleton,
        "slider": Slider,
        "sonner": Sonner,
        "stepper": Stepper,
        "switch": Switch,
        "tabs": TabsComponent,
        "textarea": Textarea

    };
</script>

<div class="min-h-screen">
    {#if slug && componentMap[slug]}
        <Tabs value="component" class="w-full">
            <div class="max-w-6xl mb-6 px-4 m-auto ">
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
                        {@render componentMap[slug]()}
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