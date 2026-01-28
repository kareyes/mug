<script lang="ts">
	import { Card, TabsPrimitives, CodeBlock } from "@kareyes/aether";
	import { Home, User, Settings, Bell, Mail, Calendar } from "@kareyes/aether/icons";
	import {
		defaultVariantDocs,
		underlineVariantDocs,
		pillsVariantDocs,
		solidVariantDocs,
		segmentedVariantDocs,
		sizeVariantsDocs,
		animationVariantsDocs
	} from "$lib/code-blocks/tabs";

	const { Tabs, TabsList, TabsTrigger, TabsContent } = TabsPrimitives;
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<div class="mb-8">
		<h1 class="text-3xl font-bold mb-2">Tabs Component</h1>
		<p class="text-muted-foreground">
			Comprehensive showcase of tabs component with various styles and variants.
		</p>
	</div>

	<div class="space-y-12">
		<!-- Default Variant -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Default Variant</h2>
			<p class="text-sm text-muted-foreground mb-4">
				The standard tabs style with background and rounded corners.
			</p>
			<Tabs value="account">
				<TabsList>
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="password">Password</TabsTrigger>
					<TabsTrigger value="settings">Settings</TabsTrigger>
				</TabsList>
				<TabsContent value="account">
					<div class="space-y-4">
						<h3 class="text-lg font-medium">Account Information</h3>
						<p class="text-sm text-muted-foreground">
							View and manage your account details here.
						</p>
					</div>
				</TabsContent>
				<TabsContent value="password">
					<div class="space-y-4">
						<h3 class="text-lg font-medium">Password Settings</h3>
						<p class="text-sm text-muted-foreground">
							Change your password and security preferences.
						</p>
					</div>
				</TabsContent>
				<TabsContent value="settings">
					<div class="space-y-4">
						<h3 class="text-lg font-medium">Application Settings</h3>
						<p class="text-sm text-muted-foreground">
							Configure your application preferences and options.
						</p>
					</div>
				</TabsContent>
			</Tabs>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={defaultVariantDocs}
			/>
		</Card>

		<!-- Underline Variant -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Underline Variant</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Clean underline style with active indicator at the bottom.
			</p>
			<Tabs value="overview">
				<TabsList variant="underline">
					<TabsTrigger variant="underline" value="overview">Overview</TabsTrigger>
					<TabsTrigger variant="underline" value="analytics">Analytics</TabsTrigger>
					<TabsTrigger variant="underline" value="reports">Reports</TabsTrigger>
					<TabsTrigger variant="underline" value="notifications">Notifications</TabsTrigger>
				</TabsList>
				<TabsContent value="overview">
					<div class="space-y-4">
						<h3 class="text-lg font-medium">Overview Dashboard</h3>
						<p class="text-sm text-muted-foreground">
							Your main dashboard overview with key metrics and insights.
						</p>
					</div>
				</TabsContent>
				<TabsContent value="analytics">
					<div class="space-y-4">
						<h3 class="text-lg font-medium">Analytics</h3>
						<p class="text-sm text-muted-foreground">
							Detailed analytics and performance metrics.
						</p>
					</div>
				</TabsContent>
				<TabsContent value="reports">
					<div class="space-y-4">
						<h3 class="text-lg font-medium">Reports</h3>
						<p class="text-sm text-muted-foreground">
							Generate and view comprehensive reports.
						</p>
					</div>
				</TabsContent>
				<TabsContent value="notifications">
					<div class="space-y-4">
						<h3 class="text-lg font-medium">Notifications</h3>
						<p class="text-sm text-muted-foreground">
							Manage your notification preferences.
						</p>
					</div>
				</TabsContent>
			</Tabs>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={underlineVariantDocs}
			/>
		</Card>

		<!-- Pills Variant -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Pills Variant</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Rounded pill-style tabs with smooth transitions.
			</p>
			<Tabs value="home">
				<TabsList variant="pills">
					<TabsTrigger variant="pills" value="home">
						<Home class="size-4" />
						Home
					</TabsTrigger>
					<TabsTrigger variant="pills" value="profile">
						<User class="size-4" />
						Profile
					</TabsTrigger>
					<TabsTrigger variant="pills" value="settings">
						<Settings class="size-4" />
						Settings
					</TabsTrigger>
				</TabsList>
				<TabsContent value="home">
					<div class="space-y-4">
						<h3 class="text-lg font-medium">Home Page</h3>
						<p class="text-sm text-muted-foreground">
							Welcome to your home page with personalized content.
						</p>
					</div>
				</TabsContent>
				<TabsContent value="profile">
					<div class="space-y-4">
						<h3 class="text-lg font-medium">User Profile</h3>
						<p class="text-sm text-muted-foreground">
							View and edit your profile information.
						</p>
					</div>
				</TabsContent>
				<TabsContent value="settings">
					<div class="space-y-4">
						<h3 class="text-lg font-medium">User Settings</h3>
						<p class="text-sm text-muted-foreground">
							Customize your experience with various settings.
						</p>
					</div>
				</TabsContent>
			</Tabs>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={pillsVariantDocs}
			/>
		</Card>

		<!-- Solid Variant -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Solid Variant</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Bold solid background style with primary color for active state.
			</p>
			<Tabs value="inbox">
				<TabsList variant="solid">
					<TabsTrigger variant="solid" value="inbox">
						<Mail class="size-4" />
						Inbox
					</TabsTrigger>
					<TabsTrigger variant="solid" value="scheduled">
						<Calendar class="size-4" />
						Scheduled
					</TabsTrigger>
					<TabsTrigger variant="solid" value="notifications">
						<Bell class="size-4" />
						Alerts
					</TabsTrigger>
				</TabsList>
				<TabsContent value="inbox">
					<div class="space-y-4">
						<h3 class="text-lg font-medium">Inbox Messages</h3>
						<p class="text-sm text-muted-foreground">
							View all your incoming messages and communications.
						</p>
					</div>
				</TabsContent>
				<TabsContent value="scheduled">
					<div class="space-y-4">
						<h3 class="text-lg font-medium">Scheduled Items</h3>
						<p class="text-sm text-muted-foreground">
							Manage your scheduled messages and events.
						</p>
					</div>
				</TabsContent>
				<TabsContent value="notifications">
					<div class="space-y-4">
						<h3 class="text-lg font-medium">Alert Center</h3>
						<p class="text-sm text-muted-foreground">
							Review important alerts and notifications.
						</p>
					</div>
				</TabsContent>
			</Tabs>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={solidVariantDocs}
			/>
		</Card>

		<!-- Segmented Variant -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Segmented Variant</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Segmented control style with continuous background.
			</p>
			<Tabs value="daily">
				<TabsList variant="segmented">
					<TabsTrigger variant="segmented" value="daily">Daily</TabsTrigger>
					<TabsTrigger variant="segmented" value="weekly">Weekly</TabsTrigger>
					<TabsTrigger variant="segmented" value="monthly">Monthly</TabsTrigger>
					<TabsTrigger variant="segmented" value="yearly">Yearly</TabsTrigger>
				</TabsList>
				<TabsContent value="daily">
					<div class="space-y-4">
						<h3 class="text-lg font-medium">Daily Statistics</h3>
						<p class="text-sm text-muted-foreground">
							View your daily performance metrics and statistics.
						</p>
					</div>
				</TabsContent>
				<TabsContent value="weekly">
					<div class="space-y-4">
						<h3 class="text-lg font-medium">Weekly Overview</h3>
						<p class="text-sm text-muted-foreground">
							Weekly aggregated data and trends.
						</p>
					</div>
				</TabsContent>
				<TabsContent value="monthly">
					<div class="space-y-4">
						<h3 class="text-lg font-medium">Monthly Report</h3>
						<p class="text-sm text-muted-foreground">
							Comprehensive monthly performance report.
						</p>
					</div>
				</TabsContent>
				<TabsContent value="yearly">
					<div class="space-y-4">
						<h3 class="text-lg font-medium">Annual Summary</h3>
						<p class="text-sm text-muted-foreground">
							Year-end summary and achievements.
						</p>
					</div>
				</TabsContent>
			</Tabs>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={segmentedVariantDocs}
			/>
		</Card>

		<!-- Size Variants -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Size Variants</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Different sizes for various use cases.
			</p>

			<!-- Small Size -->
			<Card class="p-6">
				<h3 class="text-sm font-medium mb-4">Small Size</h3>
				<Tabs value="tab1">
					<TabsList size="sm">
						<TabsTrigger size="sm" value="tab1">Small Tab 1</TabsTrigger>
						<TabsTrigger size="sm" value="tab2">Small Tab 2</TabsTrigger>
						<TabsTrigger size="sm" value="tab3">Small Tab 3</TabsTrigger>
					</TabsList>
					<TabsContent value="tab1" padding="sm">
						<p class="text-sm text-muted-foreground">Small size content area</p>
					</TabsContent>
					<TabsContent value="tab2" padding="sm">
						<p class="text-sm text-muted-foreground">Compact for dense UIs</p>
					</TabsContent>
					<TabsContent value="tab3" padding="sm">
						<p class="text-sm text-muted-foreground">Minimal spacing</p>
					</TabsContent>
				</Tabs>
			</Card>

			<!-- Large Size -->
			<Card class="p-6 mt-6">
				<h3 class="text-sm font-medium mb-4">Large Size</h3>
				<Tabs value="tab1">
					<TabsList size="lg">
						<TabsTrigger size="lg" value="tab1">Large Tab 1</TabsTrigger>
						<TabsTrigger size="lg" value="tab2">Large Tab 2</TabsTrigger>
						<TabsTrigger size="lg" value="tab3">Large Tab 3</TabsTrigger>
					</TabsList>
					<TabsContent value="tab1" padding="lg">
						<p class="text-sm text-muted-foreground">Large size for better touch targets</p>
					</TabsContent>
					<TabsContent value="tab2" padding="lg">
						<p class="text-sm text-muted-foreground">More prominent appearance</p>
					</TabsContent>
					<TabsContent value="tab3" padding="lg">
						<p class="text-sm text-muted-foreground">Enhanced spacing</p>
					</TabsContent>
				</Tabs>
			</Card>
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

		<!-- Animation Variants -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Animation Variants</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Different transition effects for content changes.
			</p>

			<!-- Slide Animation -->
			<Card class="p-6">
				<h3 class="text-sm font-medium mb-4">Slide Animation</h3>
				<Tabs value="slide1">
					<TabsList variant="pills">
						<TabsTrigger variant="pills" value="slide1">Slide 1</TabsTrigger>
						<TabsTrigger variant="pills" value="slide2">Slide 2</TabsTrigger>
						<TabsTrigger variant="pills" value="slide3">Slide 3</TabsTrigger>
					</TabsList>
					<TabsContent value="slide1" animation="slide">
						<div class="rounded-lg border border-border p-4">
							<p class="text-sm">Content slides in from bottom</p>
						</div>
					</TabsContent>
					<TabsContent value="slide2" animation="slide">
						<div class="rounded-lg border border-border p-4">
							<p class="text-sm">Smooth slide transition effect</p>
						</div>
					</TabsContent>
					<TabsContent value="slide3" animation="slide">
						<div class="rounded-lg border border-border p-4">
							<p class="text-sm">Enhanced visual feedback</p>
						</div>
					</TabsContent>
				</Tabs>
			</Card>

			<!-- Scale Animation -->
			<Card class="p-6 mt-6">
				<h3 class="text-sm font-medium mb-4">Scale Animation</h3>
				<Tabs value="scale1">
					<TabsList variant="solid">
						<TabsTrigger variant="solid" value="scale1">Scale 1</TabsTrigger>
						<TabsTrigger variant="solid" value="scale2">Scale 2</TabsTrigger>
						<TabsTrigger variant="solid" value="scale3">Scale 3</TabsTrigger>
					</TabsList>
					<TabsContent value="scale1" animation="scale">
						<div class="rounded-lg border border-border p-4">
							<p class="text-sm">Content zooms in on appear</p>
						</div>
					</TabsContent>
					<TabsContent value="scale2" animation="scale">
						<div class="rounded-lg border border-border p-4">
							<p class="text-sm">Zoom transition effect</p>
						</div>
					</TabsContent>
					<TabsContent value="scale3" animation="scale">
						<div class="rounded-lg border border-border p-4">
							<p class="text-sm">Subtle scale animation</p>
						</div>
					</TabsContent>
				</Tabs>
			</Card>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={animationVariantsDocs}
			/>
		</Card>
	</div>
</div>
