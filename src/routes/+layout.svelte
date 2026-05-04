<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { ChevronRight, Coffee, Folder, GithubIcon } from "@kareyes/aether/icons";
	import {
		DarkModePrimitives,
		DarkModeSwitch,
		DarkModeToggle,
		Sidebar,
		SidebarPrimitives,
		Button
	} from '@kareyes/aether';
	import "../app.css";
	import { page } from '$app/stores';
	import { setContext } from 'svelte';

	const { ModeWatcher } = DarkModePrimitives;

	// ── Page TOC context (populated by child pages) ───────────────────────────
	let toc = $state<{ headings: { id: string; text: string; level: number }[]; activeId: string }>({
		headings: [],
		activeId: ''
	});
	setContext('toc', toc);
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
		SidebarRail,
		SidebarMenuSub,
		SidebarMenuSubButton,
		SidebarMenuSubItem
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
		{ label: 'Calendar', href: '/components/calendar' },
		{ label: 'Card', href: '/components/card' },
		{ label: 'Checkbox', href: '/components/checkbox' },
		{ label: 'Checkbox Group', href: '/components/checkbox-group' },
		{ label: 'Combobox', href: '/components/combobox' },
		{ label: 'Empty', href: '/components/empty' },
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
		{ label: 'Progress', href: '/components/progress' },
		{ label: 'Radio Group', href: '/components/radio' },
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

	const forms = [
		{ label: 'Generic Examples', href: '/forms/generic' },
		{ label: 'Validation Examples', href: '/forms/validation' },
		{ label: 'Layout Examples', href: '/forms/layout' },
		{ label: 'Refinement Examples', href: '/forms/refinements' },
		{ label: 'Advanced Patterns', href: '/forms/advanced' },
		{ label: 'Async Data Loading', href: '/forms/async' },
		{label: "Server-side Rendering", href: '/forms/server'}



	];


</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />

{#if $page.url.pathname.startsWith('/preview')}
	{@render children()}
{:else}
<SidebarProvider class="h-svh overflow-hidden">
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
			<SidebarGroup>
				<SidebarGroupLabel>Form Schema</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton tooltipContent="Form Schema">
								{#snippet child({ props })}
									<a href="/forms/schema" {...props}>
										<span>API Reference</span>
									</a>
								{/snippet}
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton>
								<span>Examples</span>
								<ChevronRight class="ml-auto size-4 transition-transform group-data-[state=open]:rotate-90" />
							</SidebarMenuButton>
							<SidebarMenuSub>
								{#each forms as form}
										<SidebarMenuSubItem>
											<SidebarMenuSubButton>
												{#snippet child({ props })}
													<a href={form.href} {...props}>
														<span>{form.label}</span>
													</a>
												{/snippet}
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
									{/each}
							</SidebarMenuSub>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
		<SidebarRail />
	</Sidebar>
	<SidebarInset>
		<header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
			<SidebarTrigger />
			<div class="flex flex-1 items-center justify-end gap-2">
				<DarkModeToggle />
				<Button
					variant="outline"
					size="icon"
					icon={GithubIcon}
					onclick={() => window.open('https://github.com/kareyes/mug.git', '_blank')}
					>

				</Button>
			</div>
		</header>
		<!-- Two-pane: scrollable content + sticky TOC sidebar -->
		<div class="flex min-h-0 flex-1">
			<main class="min-w-0 flex-1 overflow-y-auto p-6">
				{@render children()}
			</main>
			{#if toc.headings.length > 0}
				<aside class="hidden xl:flex w-52 shrink-0 flex-col overflow-y-auto border-l border-border/40 pt-6 px-4">
					<p class="mb-3 shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
						On This Page
					</p>
					<nav class="flex flex-col">
						{#each toc.headings as h}
							<a
								href="#{h.id}"
								class="truncate py-1 text-sm transition-colors duration-150 {h.level === 3
									? 'pl-4'
									: ''} {toc.activeId === h.id
									? 'font-medium text-foreground'
									: 'text-muted-foreground hover:text-foreground'}"
							>
								{h.text}
							</a>
						{/each}
					</nav>
				</aside>
			{/if}
		</div>
	</SidebarInset>
</SidebarProvider>
{/if}
