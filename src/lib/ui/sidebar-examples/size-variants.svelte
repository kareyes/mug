<script lang="ts">
	import { Card, Sidebar, SidebarPrimitives } from "@kareyes/aether";
	import { Home, Settings, Inbox, Calendar, User, Zap } from "@kareyes/aether/icons";

	const {
		SidebarProvider, SidebarContent, SidebarGroup, SidebarGroupContent,
		SidebarGroupLabel, SidebarInset, SidebarMenu, SidebarMenuButton,
		SidebarMenuItem, SidebarTrigger,
	} = SidebarPrimitives;
</script>

<div class="h-[600px] overflow-hidden rounded-lg border">
	<SidebarProvider>
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Small Buttons</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem><SidebarMenuButton size="sm"><Home class="size-4" /><span>Home</span></SidebarMenuButton></SidebarMenuItem>
							<SidebarMenuItem><SidebarMenuButton size="sm"><Settings class="size-4" /><span>Settings</span></SidebarMenuButton></SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupLabel>Default Buttons</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem><SidebarMenuButton><Inbox class="size-4" /><span>Inbox</span></SidebarMenuButton></SidebarMenuItem>
							<SidebarMenuItem><SidebarMenuButton><Calendar class="size-4" /><span>Calendar</span></SidebarMenuButton></SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupLabel>Large Buttons</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem><SidebarMenuButton size="lg"><User class="size-4" /><span>Profile</span></SidebarMenuButton></SidebarMenuItem>
							<SidebarMenuItem><SidebarMenuButton size="lg"><Zap class="size-4" /><span>Quick Actions</span></SidebarMenuButton></SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
		<SidebarInset>
			<header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
				<SidebarTrigger />
				<h1 class="text-lg font-semibold">Size Variants</h1>
			</header>
			<div class="flex flex-1 flex-col gap-4 p-4">
				<Card class="flex min-h-[400px] flex-1 items-center justify-center rounded-xl">
					<p class="text-muted-foreground">Different button sizes</p>
				</Card>
			</div>
		</SidebarInset>
	</SidebarProvider>
</div>
