<script lang="ts">
	import { Card, Sidebar, SidebarPrimitives } from "@kareyes/aether";
	import { Home, TrendingUp, FileText, Folder, Plus, BookOpen, HelpCircle } from "@kareyes/aether/icons";

	const {
		SidebarProvider, SidebarContent, SidebarGroup, SidebarGroupAction,
		SidebarGroupContent, SidebarGroupLabel, SidebarInput, SidebarInset,
		SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator,
		SidebarTrigger,
	} = SidebarPrimitives;

	const projects = [
		{ id: 1, name: "Design System" },
		{ id: 2, name: "Marketing Site" },
		{ id: 3, name: "Mobile App" },
	];
</script>

<div class="h-[600px] overflow-hidden rounded-lg border">
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
							<SidebarMenuItem><SidebarMenuButton><Home class="size-4" /><span>Dashboard</span></SidebarMenuButton></SidebarMenuItem>
							<SidebarMenuItem><SidebarMenuButton><TrendingUp class="size-4" /><span>Analytics</span></SidebarMenuButton></SidebarMenuItem>
							<SidebarMenuItem><SidebarMenuButton><FileText class="size-4" /><span>Reports</span></SidebarMenuButton></SidebarMenuItem>
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
								<SidebarMenuItem><SidebarMenuButton><Folder class="size-4" /><span>{project.name}</span></SidebarMenuButton></SidebarMenuItem>
							{/each}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarSeparator />
				<SidebarGroup>
					<SidebarGroupLabel>Resources</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem><SidebarMenuButton><BookOpen class="size-4" /><span>Documentation</span></SidebarMenuButton></SidebarMenuItem>
							<SidebarMenuItem><SidebarMenuButton><HelpCircle class="size-4" /><span>Help Center</span></SidebarMenuButton></SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
		<SidebarInset>
			<header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
				<SidebarTrigger />
				<h1 class="text-lg font-semibold">Workspace</h1>
			</header>
			<div class="flex flex-1 flex-col gap-4 p-4">
				<Card class="flex min-h-[400px] flex-1 items-center justify-center rounded-xl">
					<p class="text-muted-foreground">Project workspace</p>
				</Card>
			</div>
		</SidebarInset>
	</SidebarProvider>
</div>
