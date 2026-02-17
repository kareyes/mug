export const basicExampleDocs = `
<script lang="ts">
	import { Card, Sidebar, SidebarPrimitives } from "@kareyes/aether";
	import {
		Home,
		Inbox,
		Calendar,
		Search,
		Settings,
	} from "@kareyes/aether/icons";

	const {
		SidebarProvider,
		SidebarContent,
		SidebarGroup,
		SidebarGroupContent,
		SidebarGroupLabel,
		SidebarInset,
		SidebarMenu,
		SidebarMenuBadge,
		SidebarMenuButton,
		SidebarMenuItem,
		SidebarRail,
		SidebarTrigger,
	} = SidebarPrimitives;

	let currentPage = \$state("home");
</script>

<div class="h-[600px] overflow-hidden rounded-lg border">
	<SidebarProvider>
		<Sidebar collapsible="icon">
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Platform</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton
									isActive={currentPage === "home"}
									tooltipContent="Home"
									onclick={() => (currentPage = "home")}
								>
									<Home class="size-4" />
									<span>Home</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton
									isActive={currentPage === "inbox"}
									tooltipContent="Inbox"
									onclick={() => (currentPage = "inbox")}
								>
									<Inbox class="size-4" />
									<span>Inbox</span>
								</SidebarMenuButton>
								<SidebarMenuBadge>24</SidebarMenuBadge>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton
									isActive={currentPage === "calendar"}
									tooltipContent="Calendar"
									onclick={() => (currentPage = "calendar")}
								>
									<Calendar class="size-4" />
									<span>Calendar</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton
									isActive={currentPage === "search"}
									tooltipContent="Search"
									onclick={() => (currentPage = "search")}
								>
									<Search class="size-4" />
									<span>Search</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton
									isActive={currentPage === "settings"}
									tooltipContent="Settings"
									onclick={() => (currentPage = "settings")}
								>
									<Settings class="size-4" />
									<span>Settings</span>
								</SidebarMenuButton>
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
				<div class="flex flex-1 items-center justify-between">
					<h1 class="text-lg font-semibold capitalize">
						{currentPage}
					</h1>
					<span class="text-sm text-muted-foreground">
						Click the menu icon to toggle
					</span>
				</div>
			</header>
			<div class="flex flex-1 flex-col gap-4 p-4">
				<Card class="flex min-h-[400px] flex-1 items-center justify-center rounded-xl">
					<p class="text-muted-foreground">
						Main content area - {currentPage}
					</p>
				</Card>
			</div>
		</SidebarInset>
	</SidebarProvider>
</div>`;

export const headerFooterDocs = `
<script lang="ts">
	import { Card, Sidebar, SidebarPrimitives } from "@kareyes/aether";
	import {
		Home, TrendingUp, Users, FileText, Settings,
		User, MoreHorizontal, LogOut,
	} from "@kareyes/aether/icons";

	const {
		SidebarProvider, SidebarContent, SidebarFooter,
		SidebarGroup, SidebarGroupContent, SidebarHeader,
		SidebarInset, SidebarMenu, SidebarMenuAction,
		SidebarMenuButton, SidebarMenuItem, SidebarTrigger,
	} = SidebarPrimitives;
</script>

<SidebarProvider>
	<Sidebar>
		<SidebarHeader>
			<SidebarMenu>
				<SidebarMenuItem>
					<SidebarMenuButton size="lg">
						<div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
							<span class="text-lg font-bold">A</span>
						</div>
						<div class="flex flex-col gap-0.5 text-start">
							<span class="font-semibold">Acme Inc</span>
							<span class="text-xs text-muted-foreground">Enterprise</span>
						</div>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarHeader>
		<SidebarContent>
			<SidebarGroup>
				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton><Home class="size-4" /><span>Dashboard</span></SidebarMenuButton>
						</SidebarMenuItem>
						<!-- ...more items -->
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
		<SidebarFooter>
			<SidebarMenu>
				<SidebarMenuItem>
					<SidebarMenuButton>
						<User class="size-4" />
						<div class="flex flex-col gap-0.5 text-start">
							<span class="text-sm font-medium">John Doe</span>
							<span class="text-xs text-muted-foreground">john@acme.com</span>
						</div>
					</SidebarMenuButton>
					<SidebarMenuAction><LogOut class="size-4" /></SidebarMenuAction>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarFooter>
	</Sidebar>
	<SidebarInset>
		<!-- Main content -->
	</SidebarInset>
</SidebarProvider>`;

export const nestedSubmenusDocs = `
<script lang="ts">
	import { Sidebar, SidebarPrimitives } from "@kareyes/aether";
	import { Folder, ChevronRight } from "@kareyes/aether/icons";

	const {
		SidebarProvider, SidebarContent, SidebarGroup,
		SidebarGroupContent, SidebarGroupLabel, SidebarInset,
		SidebarMenu, SidebarMenuButton, SidebarMenuItem,
		SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem,
		SidebarTrigger,
	} = SidebarPrimitives;
</script>

<SidebarProvider>
	<Sidebar>
		<SidebarContent>
			<SidebarGroup>
				<SidebarGroupLabel>Projects</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton>
								<Folder class="size-4" />
								<span>Design System</span>
								<ChevronRight class="ml-auto size-4 transition-transform group-data-[state=open]:rotate-90" />
							</SidebarMenuButton>
							<SidebarMenuSub>
								<SidebarMenuSubItem>
									<SidebarMenuSubButton><span>Components</span></SidebarMenuSubButton>
								</SidebarMenuSubItem>
								<SidebarMenuSubItem>
									<SidebarMenuSubButton><span>Typography</span></SidebarMenuSubButton>
								</SidebarMenuSubItem>
							</SidebarMenuSub>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
	</Sidebar>
	<SidebarInset>
		<!-- Main content -->
	</SidebarInset>
</SidebarProvider>`;

export const actionsBadgesDocs = `
<script lang="ts">
	import { Sidebar, SidebarPrimitives } from "@kareyes/aether";
	import { Mail, Bell, MessageSquare, Star, Plus, Settings, MoreHorizontal } from "@kareyes/aether/icons";

	const {
		SidebarProvider, SidebarContent, SidebarGroup,
		SidebarGroupContent, SidebarGroupLabel, SidebarInset,
		SidebarMenu, SidebarMenuAction, SidebarMenuBadge,
		SidebarMenuButton, SidebarMenuItem, SidebarSeparator,
		SidebarTrigger,
	} = SidebarPrimitives;
</script>

<SidebarProvider>
	<Sidebar>
		<SidebarContent>
			<SidebarGroup>
				<SidebarGroupLabel>Communications</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton><Mail class="size-4" /><span>Messages</span></SidebarMenuButton>
							<SidebarMenuBadge>12</SidebarMenuBadge>
							<SidebarMenuAction title="Compose"><Plus class="size-4" /></SidebarMenuAction>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton><Bell class="size-4" /><span>Notifications</span></SidebarMenuButton>
							<SidebarMenuBadge>99+</SidebarMenuBadge>
							<SidebarMenuAction title="Settings"><Settings class="size-4" /></SidebarMenuAction>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
			<SidebarSeparator />
			<SidebarGroup>
				<SidebarGroupLabel>Favorites</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton><Star class="size-4 fill-yellow-400 text-yellow-400" /><span>Starred Items</span></SidebarMenuButton>
							<SidebarMenuBadge>5</SidebarMenuBadge>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
	</Sidebar>
	<SidebarInset>
		<!-- Main content -->
	</SidebarInset>
</SidebarProvider>`;

export const searchGroupsDocs = `
<script lang="ts">
	import { Sidebar, SidebarPrimitives } from "@kareyes/aether";
	import { Home, TrendingUp, FileText, Folder, Plus, BookOpen, HelpCircle } from "@kareyes/aether/icons";

	const {
		SidebarProvider, SidebarContent, SidebarGroup,
		SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel,
		SidebarInput, SidebarInset, SidebarMenu, SidebarMenuButton,
		SidebarMenuItem, SidebarSeparator, SidebarTrigger,
	} = SidebarPrimitives;
</script>

<SidebarProvider>
	<Sidebar>
		<SidebarContent>
			<SidebarGroup>
				<SidebarGroupContent>
					<SidebarInput type="search" placeholder="Search..." />
				</SidebarGroupContent>
			</SidebarGroup>
			<SidebarSeparator />
			<SidebarGroup>
				<SidebarGroupLabel>Platform</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton><Home class="size-4" /><span>Dashboard</span></SidebarMenuButton>
						</SidebarMenuItem>
						<!-- ...more items -->
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
			<SidebarSeparator />
			<SidebarGroup>
				<SidebarGroupLabel>Projects</SidebarGroupLabel>
				<SidebarGroupAction title="Add Project"><Plus class="size-4" /></SidebarGroupAction>
				<SidebarGroupContent>
					<SidebarMenu>
						{#each projects as project}
							<SidebarMenuItem>
								<SidebarMenuButton><Folder class="size-4" /><span>{project.name}</span></SidebarMenuButton>
							</SidebarMenuItem>
						{/each}
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
	</Sidebar>
	<SidebarInset>
		<!-- Main content -->
	</SidebarInset>
</SidebarProvider>`;

export const floatingDocs = `
<script lang="ts">
	import { Sidebar, SidebarPrimitives } from "@kareyes/aether";
	import { Home, Code, Database, Cloud, Shield } from "@kareyes/aether/icons";

	const {
		SidebarProvider, SidebarContent, SidebarGroup,
		SidebarGroupContent, SidebarGroupLabel, SidebarInset,
		SidebarMenu, SidebarMenuButton, SidebarMenuItem,
		SidebarRail, SidebarTrigger,
	} = SidebarPrimitives;
</script>

<SidebarProvider>
	<Sidebar variant="floating" collapsible="icon">
		<SidebarContent>
			<SidebarGroup>
				<SidebarGroupLabel>Menu</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton tooltipContent="Dashboard">
								<Home class="size-4" /><span>Dashboard</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<!-- ...more items -->
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
		<SidebarRail />
	</Sidebar>
	<SidebarInset>
		<!-- Main content -->
	</SidebarInset>
</SidebarProvider>`;

export const loadingDocs = `
<script lang="ts">
	import { Sidebar, SidebarPrimitives } from "@kareyes/aether";

	const {
		SidebarProvider, SidebarContent, SidebarGroup,
		SidebarGroupContent, SidebarGroupLabel, SidebarInset,
		SidebarMenu, SidebarMenuSkeleton, SidebarTrigger,
	} = SidebarPrimitives;
</script>

<SidebarProvider>
	<Sidebar>
		<SidebarContent>
			<SidebarGroup>
				<SidebarGroupLabel>Loading...</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuSkeleton />
						<SidebarMenuSkeleton />
						<SidebarMenuSkeleton />
						<SidebarMenuSkeleton />
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
	</Sidebar>
	<SidebarInset>
		<!-- Main content -->
	</SidebarInset>
</SidebarProvider>`;

export const sizeVariantsDocs = `
<script lang="ts">
	import { Sidebar, SidebarPrimitives } from "@kareyes/aether";
	import { Home, Settings, Inbox, Calendar, User, Zap } from "@kareyes/aether/icons";

	const {
		SidebarProvider, SidebarContent, SidebarGroup,
		SidebarGroupContent, SidebarGroupLabel, SidebarInset,
		SidebarMenu, SidebarMenuButton, SidebarMenuItem,
		SidebarTrigger,
	} = SidebarPrimitives;
</script>

<SidebarProvider>
	<Sidebar>
		<SidebarContent>
			<SidebarGroup>
				<SidebarGroupLabel>Small Buttons</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton size="sm"><Home class="size-4" /><span>Home</span></SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
			<SidebarGroup>
				<SidebarGroupLabel>Default Buttons</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton><Inbox class="size-4" /><span>Inbox</span></SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
			<SidebarGroup>
				<SidebarGroupLabel>Large Buttons</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton size="lg"><User class="size-4" /><span>Profile</span></SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
	</Sidebar>
	<SidebarInset>
		<!-- Main content -->
	</SidebarInset>
</SidebarProvider>`;

export const linkNavigationDocs = `
<script lang="ts">
	import { Sidebar, SidebarPrimitives } from "@kareyes/aether";
	import { BookOpen, Code, FileText, Database, HelpCircle } from "@kareyes/aether/icons";

	const {
		SidebarProvider, SidebarContent, SidebarGroup,
		SidebarGroupContent, SidebarGroupLabel, SidebarInset,
		SidebarMenu, SidebarMenuButton, SidebarMenuItem,
		SidebarTrigger,
	} = SidebarPrimitives;
</script>

<SidebarProvider>
	<Sidebar>
		<SidebarContent>
			<SidebarGroup>
				<SidebarGroupLabel>Documentation</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton isActive>
								{#snippet child({ props })}
									<a href="/getting-started" {...props}>
										<BookOpen class="size-4" />
										<span>Getting Started</span>
									</a>
								{/snippet}
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton>
								{#snippet child({ props })}
									<a href="/components" {...props}>
										<Code class="size-4" />
										<span>Components</span>
									</a>
								{/snippet}
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
	</Sidebar>
	<SidebarInset>
		<!-- Main content -->
	</SidebarInset>
</SidebarProvider>`;
