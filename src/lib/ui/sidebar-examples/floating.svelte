<script lang="ts">
	import { Card, Sidebar, SidebarPrimitives } from "@kareyes/aether";
	import { Home, Code, Database, Cloud, Shield } from "@kareyes/aether/icons";

	const {
		SidebarProvider, SidebarContent, SidebarGroup, SidebarGroupContent,
		SidebarGroupLabel, SidebarInset, SidebarMenu, SidebarMenuButton,
		SidebarMenuItem, SidebarRail, SidebarTrigger,
	} = SidebarPrimitives;
</script>

<div class="h-[600px] overflow-hidden rounded-lg border">
	<SidebarProvider>
		<Sidebar variant="floating" collapsible="icon">
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Menu</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem><SidebarMenuButton tooltipContent="Dashboard"><Home class="size-4" /><span>Dashboard</span></SidebarMenuButton></SidebarMenuItem>
							<SidebarMenuItem><SidebarMenuButton tooltipContent="Code"><Code class="size-4" /><span>Code</span></SidebarMenuButton></SidebarMenuItem>
							<SidebarMenuItem><SidebarMenuButton tooltipContent="Database"><Database class="size-4" /><span>Database</span></SidebarMenuButton></SidebarMenuItem>
							<SidebarMenuItem><SidebarMenuButton tooltipContent="Cloud"><Cloud class="size-4" /><span>Cloud</span></SidebarMenuButton></SidebarMenuItem>
							<SidebarMenuItem><SidebarMenuButton tooltipContent="Security"><Shield class="size-4" /><span>Security</span></SidebarMenuButton></SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
		<SidebarInset>
			<header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
				<SidebarTrigger />
				<h1 class="text-lg font-semibold">Floating Sidebar</h1>
			</header>
			<div class="flex flex-1 flex-col gap-4 p-4">
				<Card class="flex min-h-[400px] flex-1 items-center justify-center rounded-xl">
					<p class="text-muted-foreground">Sidebar floats with shadow</p>
				</Card>
			</div>
		</SidebarInset>
	</SidebarProvider>
</div>
