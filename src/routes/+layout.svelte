<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { Coffee } from "@kareyes/aether/icons";
	import {
		DarkModePrimitives,
		DarkModeSwitch,
		DarkModeToggle,
		Sidebar,
		SidebarPrimitives
	} from '@kareyes/aether';
	import "../app.css";

	const { ModeWatcher } = DarkModePrimitives;
	const {
		SidebarProvider,
		SidebarContent,
		SidebarGroup,
		SidebarGroupContent,
		SidebarGroupLabel,
		SidebarHeader,
		SidebarMenu,
		SidebarMenuButton,
		SidebarMenuItem,
		SidebarInset,
		SidebarTrigger,
		SidebarRail
	} = SidebarPrimitives;

	let { children } = $props();

	const components = [
		{ label: 'Accordion', href: '/components/accordion' },
		{ label: 'Alert', href: '/components/alert' },
		{ label: 'Alert Dialog', href: '/components/alert-dialog' },
		{ label: 'Avatar', href: '/components/avatar' },
		{ label: 'Badge', href: '/components/badge' },
		{ label: 'Breadcrumb', href: '/components/breadcrumb' },
		{ label: 'Button', href: '/components/button' },
		{ label: 'Button Group', href: '/components/button-group' },
		{ label: 'Card', href: '/components/card' },
		{ label: 'Checkbox', href: '/components/checkbox' },
		{ label: 'Combobox', href: '/components/combobox' },
		{ label: 'Data Table', href: '/components/data-table' },
		{ label: 'Date Picker', href: '/components/date-picker' },
		{ label: 'Dialog', href: '/components/dialog' },
		{ label: 'Dropdown Menu', href: '/components/dropdown-menu' },
		{ label: 'Field', href: '/components/field' },
		{ label: 'File Input', href: '/components/file-input' },
		{ label: 'Input', href: '/components/input' },
		{ label: 'Input OTP', href: '/components/input-otp' },
		{ label: 'Number Spinner', href: '/components/number-spinner' },
		{ label: 'Popover', href: '/components/popover' },
		{ label: 'Radio Group', href: '/components/radio-group' },
		{ label: 'Select', href: '/components/select' },
		{ label: 'Sheet', href: '/components/sheet' },
		{ label: 'Sidebar', href: '/components/sidebar' },
		{ label: 'Skeleton', href: '/components/skeleton' },
		{ label: 'Slider', href: '/components/slider' },
		{ label: 'Sonner', href: '/components/sonner' },
		{ label: 'Stepper', href: '/components/stepper' },
		{ label: 'Switch', href: '/components/switch' },
		{ label: 'Tabs', href: '/components/tabs' },
		{ label: 'Textarea', href: '/components/textarea' }
	];
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />

<SidebarProvider>
	<Sidebar collapsible="icon">
		<SidebarHeader>
			<SidebarMenu>
				<SidebarMenuItem>
					<SidebarMenuButton size="lg" tooltipContent="Home">
						{#snippet child({ props })}
							<a href="/" {...props}>
								<Coffee class="size-4" />
								<span class="font-semibold">Mug</span>
							</a>
						{/snippet}
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarHeader>
		<SidebarContent>
			<SidebarGroup>
				<SidebarGroupLabel>Components</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						{#each components as component}
							<SidebarMenuItem>
								<SidebarMenuButton tooltipContent={component.label}>
									{#snippet child({ props })}
										<a href={component.href} {...props}>
											<span>{component.label}</span>
										</a>
									{/snippet}
								</SidebarMenuButton>
							</SidebarMenuItem>
						{/each}
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
		<SidebarRail />
	</Sidebar>
	<SidebarInset>
		<header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
			<SidebarTrigger />
			<div class="flex flex-1 items-center justify-end">
				<DarkModeToggle />
			</div>
		</header>
		<main class="flex-1 p-6">
			{@render children()}
		</main>
	</SidebarInset>
</SidebarProvider>
