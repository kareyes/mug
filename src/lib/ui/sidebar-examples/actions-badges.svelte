<script lang="ts">
	import { Card, Sidebar, SidebarPrimitives } from "@kareyes/aether";
	import { Mail, Bell, MessageSquare, Star, Plus, Settings, MoreHorizontal } from "@kareyes/aether/icons";

	const {
		SidebarProvider, SidebarContent, SidebarGroup, SidebarGroupContent,
		SidebarGroupLabel, SidebarInset, SidebarMenu, SidebarMenuAction,
		SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarSeparator,
		SidebarTrigger,
	} = SidebarPrimitives;
</script>

<div class="h-[600px] overflow-hidden rounded-lg border">
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
							<SidebarMenuItem>
								<SidebarMenuButton><MessageSquare class="size-4" /><span>Comments</span></SidebarMenuButton>
								<SidebarMenuBadge>3</SidebarMenuBadge>
								<SidebarMenuAction title="More"><MoreHorizontal class="size-4" /></SidebarMenuAction>
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
			<header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
				<SidebarTrigger />
				<h1 class="text-lg font-semibold">Activity Center</h1>
			</header>
			<div class="flex flex-1 flex-col gap-4 p-4">
				<Card class="flex min-h-[400px] flex-1 items-center justify-center rounded-xl">
					<p class="text-muted-foreground">Notifications and messages</p>
				</Card>
			</div>
		</SidebarInset>
	</SidebarProvider>
</div>
