<script lang="ts">
    import button from "$lib/ui/button.svelte";
    import avatar from "$lib/ui/avatar.svelte";
    import alert from "$lib/ui/alert.svelte";
    import alertDialog from "$lib/ui/alert-dialog.svelte";
    import accordion from "$lib/ui/accordion.svelte";
    import badge from "$lib/ui/badge.svelte";
    import breadcrumbs from "$lib/ui/breadcrumb.svelte";
    import buttonGroup from "$lib/ui/button-group.svelte";
    import card from "$lib/ui/card.svelte";
    import checkbox from "$lib/ui/checkbox.svelte";
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
    import Tabs from "$lib/ui/tabs.svelte";
    import Textarea from "$lib/ui/textarea.svelte";
    import { page } from "$app/state";

    let slug = $derived(page.params?.slug);

    const componentMap: Record<string, any> = {
        "button": button,
        "avatar": avatar,
        "alert": alert,
        "alert-dialog": alertDialog,
        "accordion": accordion,
        "badge": badge,
        "breadcrumb": breadcrumbs,
        "button-group": buttonGroup,
        "card": card,
        "checkbox": checkbox,
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
        "tabs": Tabs,
        "textarea": Textarea

    };
</script>

{#if slug && componentMap[slug]}
    {@render componentMap[slug]()}
{/if}