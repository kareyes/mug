<script lang="ts">
	import { Card, Separator, Badge , TablePrimitives } from '@kareyes/aether';

	const components = [
		{
			category: 'Buttons & Actions',
			items: [
				{ name: 'Button', description: 'Interactive button with multiple variants', route: '/components/button' },
				{ name: 'Button Group', description: 'Group multiple buttons together', route: '/components/button-group' }
			]
		},
		{
			category: 'Form Inputs',
			items: [
				{ name: 'Input', description: 'Text input field component', route: '/components/input' },
				{ name: 'Textarea', description: 'Multiline text input', route: '/components/textarea' },
				{ name: 'Checkbox', description: 'Binary selection control', route: '/components/checkbox' },
				{ name: 'Checkbox Group', description: 'Group of checkboxes for multiple selections', route: '/components/checkbox-group' },
				{ name: 'Switch', description: 'Toggle switch component', route: '/components/switch' },
				{ name: 'Radio Group', description: 'Single selection from multiple options', route: '/components/radio' },
				{ name: 'Select', description: 'Dropdown selection menu', route: '/components/select' },
				{ name: 'Number Spinner', description: 'Numeric input with increment/decrement', route: '/components/number-spinner' },
				{ name: 'Slider', description: 'Range selection slider', route: '/components/slider' },
				{ name: 'Input OTP', description: 'One-time password input', route: '/components/input-otp' },
				{ name: 'Input Group', description: 'Combined input with addons', route: '/components/input-group' },
				{ name: 'Label', description: 'Form field label', route: '/components/label' },
				{ name: 'Field', description: 'Complete form field wrapper', route: '/components/field' },
				{ name: 'File Input', description: 'File upload component', route: '/components/file-input' }
			]
		},
		{
			category: 'Display & Feedback',
			items: [
				{ name: 'Card', description: 'Content container component', route: '/components/card' },
				{ name: 'Avatar', description: 'User profile picture display', route: '/components/avatar' },
				{ name: 'Badge', description: 'Small status indicator', route: '/components/badge' },
				{ name: 'Alert', description: 'Contextual feedback messages', route: '/components/alert' },
				{ name: 'Spinner', description: 'Loading indicator', route: '/components/spinner' },
				{ name: 'Skeleton', description: 'Placeholder loading state', route: '/components/skeleton' },
				{ name: 'Separator', description: 'Visual content divider', route: '/components/separator' }
			]
		},
		{
			category: 'Navigation',
			items: [
				{ name: 'Breadcrumb', description: 'Hierarchical navigation trail', route: '/components/breadcrumb' },
				{ name: 'Tabs', description: 'Content organization in tabs', route: '/components/tabs' },
				{ name: 'Stepper', description: 'Multi-step process indicator', route: '/components/stepper' },
				{ name: 'Accordion', description: 'Collapsible content sections', route: '/components/accordion' },
				{ name: 'Sidebar', description: 'Side navigation panel', route: '/components/sidebar' }
			]
		},
		{
			category: 'Overlays & Modals',
			items: [
				{ name: 'Dialog', description: 'Modal dialog window', route: '/components/dialog' },
				{ name: 'Sheet', description: 'Slide-out panel', route: '/components/sheet' },
				{ name: 'Alert Dialog', description: 'Confirmation dialog', route: '/components/alert-dialog' },
				{ name: 'Tooltip', description: 'Hover information popup', route: '/components/tooltip' },
				{ name: 'Popover', description: 'Floating content panel', route: '/components/popover' },
				{ name: 'Dropdown Menu', description: 'Contextual action menu', route: '/components/dropdown-menu' },
				{ name: 'Command', description: 'Command palette interface', route: '/components/command' }
			]
		},
		{
			category: 'Data Display',
			items: [
				{ name: 'Table', description: 'Structured data table', route: '/components/table' },
				{ name: 'Data Table', description: 'Advanced data table with features', route: '/components/data-table' },
				{ name: 'Calendar', description: 'Date calendar view', route: '/components/calendar' },
				{ name: 'Range Calendar', description: 'Date range selection', route: '/components/range-calendar' }
			]
		},
		{
			category: 'Date & Time',
			items: [
				{ name: 'Date Picker', description: 'Single date selection', route: '/components/date-picker' },
				{ name: 'Date Range Picker', description: 'Date range selection picker', route: '/components/date-range-picker' }
			]
		},
		{
			category: 'Utilities',
			items: [
				{ name: 'Combobox', description: 'Searchable select dropdown', route: '/components/combobox' },
				{ name: 'Sonner', description: 'Toast notification system', route: '/components/sonner' }
			]
		}
	];
</script>

<div class="container mx-auto p-8 space-y-12 max-w-7xl">
	<!-- Hero Section -->
	<section class="text-center space-y-6 py-16">
		<h1 class="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
			@kareyes/aether
		</h1>
		<p class="text-2xl text-muted-foreground max-w-2xl mx-auto">
			A comprehensive Svelte component library built with Tailwind CSS v4
		</p>
		<div class="flex gap-4 justify-center pt-4">
			<Badge variant="secondary">45+ Components</Badge>
			<Badge variant="secondary">Fully Typed</Badge>
			<Badge variant="secondary">Accessible</Badge>
		</div>
		<Separator class="my-8" />
	</section>

	<!-- Component Categories -->
	{#each components as category}
		<section class="space-y-6">
			<div>
				<h2 class="text-3xl font-bold mb-2">{category.category}</h2>
				<p class="text-muted-foreground">
					{category.items.length} component{category.items.length !== 1 ? 's' : ''}
				</p>
			</div>

			<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each category.items as component}
					<a
						href={component.route}
						class="group block"
					>
						<Card class="h-full transition-all hover:shadow-lg hover:scale-105 hover:border-primary cursor-pointer">
							<div class="p-6 space-y-2">
								<h3 class="text-lg font-semibold group-hover:text-primary transition-colors">
									{component.name}
								</h3>
								<p class="text-sm text-muted-foreground">
									{component.description}
								</p>
								<div class="flex items-center text-sm text-primary pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
									View component →
								</div>
							</div>
						</Card>
					</a>
				{/each}
			</div>
		</section>
	{/each}

	<!-- Footer -->
	<section class="text-center py-16 space-y-4">
		<Separator class="mb-8" />
		<p class="text-muted-foreground text-sm">
			Built with @kareyes/aether v0.0.4
		</p>
		<p class="text-muted-foreground text-xs">
			Components are built on top of Svelte 5 and Tailwind CSS v4
		</p>
	</section>
</div>

