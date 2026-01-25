<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import {Home} from "@kareyes/aether/icons";
	// import {DarkModePrimitives} from "@kareyes/aether";
	// import { ModeWatcher } from "mode-watcher";
	import { DarkModePrimitives, DarkModeToggle, NavigationMenuPrimitives as NavigationMenu , Button, navigationMenuTriggerStyle, DarkModeSwitch} from '@kareyes/aether';
	import "../app.css";
    // import { DarkModeToggle } from '@kareyes/aether';
	const { ModeWatcher } = DarkModePrimitives;

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
		{ label: 'Card', href: '/components/card' }
	];
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />

<div class="min-h-screen">
	<nav class="bg-background border-b border-gray-200 shadow-sm">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<NavigationMenu.Root class="flex items-center gap-4">
					<NavigationMenu.List class="flex items-center gap-1">
						<NavigationMenu.Item>
							<NavigationMenu.Link href="/" class="">
								<Button variant="link" text="Home" icon={Home}  />
							</NavigationMenu.Link>
						</NavigationMenu.Item>
						
						<NavigationMenu.Item>
							<NavigationMenu.Trigger>Components</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
									{#each components as component}
										<li>
											<NavigationMenu.Link
												href={component.href}
												class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
											>
												<div class="text-sm font-medium leading-none">{component.label}</div>
											</NavigationMenu.Link>
										</li>
									{/each}
								</ul>
							</NavigationMenu.Content>
						</NavigationMenu.Item>
					</NavigationMenu.List>
				</NavigationMenu.Root>
			</div>

			<DarkModeSwitch class="absolute top-4 right-4" />
		</div>
	</nav>

	<main>
		{@render children()}
	</main>
</div>
