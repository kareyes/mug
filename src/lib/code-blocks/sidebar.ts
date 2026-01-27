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
