<script lang="ts">
	import { Card, Sidebar, SidebarPrimitives } from "@kareyes/aether";
	import { Folder, ChevronRight } from "@kareyes/aether/icons";

	const {
		SidebarProvider, SidebarContent, SidebarGroup, SidebarGroupContent,
		SidebarGroupLabel, SidebarInset, SidebarMenu, SidebarMenuButton,
		SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem,
		SidebarTrigger,
	} = SidebarPrimitives;
</script>

<div class="h-[600px] overflow-hidden rounded-lg border">
	<SidebarProvider>
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Projects</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<Folder class="size-4" /><span>Design System</span>
									<ChevronRight class="ml-auto size-4 transition-transform group-data-[state=open]:rotate-90" />
								</SidebarMenuButton>
								<SidebarMenuSub>
									<SidebarMenuSubItem><SidebarMenuSubButton><span>Components</span></SidebarMenuSubButton></SidebarMenuSubItem>
									<SidebarMenuSubItem><SidebarMenuSubButton><span>Typography</span></SidebarMenuSubButton></SidebarMenuSubItem>
									<SidebarMenuSubItem><SidebarMenuSubButton><span>Colors</span></SidebarMenuSubButton></SidebarMenuSubItem>
									<SidebarMenuSubItem><SidebarMenuSubButton><span>Icons</span></SidebarMenuSubButton></SidebarMenuSubItem>
								</SidebarMenuSub>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<Folder class="size-4" /><span>Documentation</span>
									<ChevronRight class="ml-auto size-4 transition-transform group-data-[state=open]:rotate-90" />
								</SidebarMenuButton>
								<SidebarMenuSub>
									<SidebarMenuSubItem><SidebarMenuSubButton><span>Getting Started</span></SidebarMenuSubButton></SidebarMenuSubItem>
									<SidebarMenuSubItem><SidebarMenuSubButton><span>API Reference</span></SidebarMenuSubButton></SidebarMenuSubItem>
									<SidebarMenuSubItem><SidebarMenuSubButton><span>Examples</span></SidebarMenuSubButton></SidebarMenuSubItem>
								</SidebarMenuSub>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<Folder class="size-4" /><span>Marketing Site</span>
									<ChevronRight class="ml-auto size-4" />
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
		<SidebarInset>
			<header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
				<SidebarTrigger />
				<h1 class="text-lg font-semibold">Project Browser</h1>
			</header>
			<div class="flex flex-1 flex-col gap-4 p-4">
				<Card class="flex min-h-[400px] flex-1 items-center justify-center rounded-xl">
					<p class="text-muted-foreground">Select a project or section</p>
				</Card>
			</div>
		</SidebarInset>
	</SidebarProvider>
</div>
