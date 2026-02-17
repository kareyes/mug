<script lang="ts">
	import { Card, Sidebar, SidebarPrimitives } from "@kareyes/aether";
	import { BookOpen, Code, FileText, Database, HelpCircle } from "@kareyes/aether/icons";

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
					<SidebarGroupLabel>Documentation</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton isActive>
									{#snippet child({ props })}
										<a href="#getting-started" {...props}><BookOpen class="size-4" /><span>Getting Started</span></a>
									{/snippet}
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									{#snippet child({ props })}
										<a href="#components" {...props}><Code class="size-4" /><span>Components</span></a>
									{/snippet}
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									{#snippet child({ props })}
										<a href="#examples" {...props}><FileText class="size-4" /><span>Examples</span></a>
									{/snippet}
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									{#snippet child({ props })}
										<a href="#api" {...props}><Database class="size-4" /><span>API Reference</span></a>
									{/snippet}
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									{#snippet child({ props })}
										<a href="#help" {...props}><HelpCircle class="size-4" /><span>Help & Support</span></a>
									{/snippet}
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
				<h1 class="text-lg font-semibold">Documentation</h1>
			</header>
			<div class="flex flex-1 flex-col gap-4 p-4">
				<Card class="flex min-h-[400px] flex-1 items-center justify-center rounded-xl">
					<div class="text-center space-y-2">
						<p class="text-muted-foreground">Click navigation links to navigate</p>
						<p class="text-xs text-muted-foreground">
							Using child snippet pattern: <code class="px-2 py-1 bg-muted rounded text-xs">{'<a href="#" {...props}>'}</code>
						</p>
					</div>
				</Card>
			</div>
		</SidebarInset>
	</SidebarProvider>
</div>
