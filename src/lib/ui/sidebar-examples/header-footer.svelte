<script lang="ts">
	import { Card, Sidebar, SidebarPrimitives } from "@kareyes/aether";
	import { Home, TrendingUp, Users, FileText, Settings, User, MoreHorizontal, LogOut } from "@kareyes/aether/icons";

	const {
		SidebarProvider, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent,
		SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuAction,
		SidebarMenuButton, SidebarMenuItem, SidebarTrigger,
	} = SidebarPrimitives;
</script>

<div class="h-[600px] overflow-hidden rounded-lg border">
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
						<SidebarMenuAction><MoreHorizontal class="size-4" /></SidebarMenuAction>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem><SidebarMenuButton><Home class="size-4" /><span>Dashboard</span></SidebarMenuButton></SidebarMenuItem>
							<SidebarMenuItem><SidebarMenuButton><TrendingUp class="size-4" /><span>Analytics</span></SidebarMenuButton></SidebarMenuItem>
							<SidebarMenuItem><SidebarMenuButton><Users class="size-4" /><span>Team</span></SidebarMenuButton></SidebarMenuItem>
							<SidebarMenuItem><SidebarMenuButton><FileText class="size-4" /><span>Documents</span></SidebarMenuButton></SidebarMenuItem>
							<SidebarMenuItem><SidebarMenuButton><Settings class="size-4" /><span>Settings</span></SidebarMenuButton></SidebarMenuItem>
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
			<header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
				<SidebarTrigger />
				<h1 class="text-lg font-semibold">Company Dashboard</h1>
			</header>
			<div class="flex flex-1 flex-col gap-4 p-4">
				<Card class="flex min-h-[400px] flex-1 items-center justify-center rounded-xl">
					<p class="text-muted-foreground">Workspace content</p>
				</Card>
			</div>
		</SidebarInset>
	</SidebarProvider>
</div>
