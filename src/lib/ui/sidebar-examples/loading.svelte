<script lang="ts">
	import { Card, Button, Sidebar, SidebarPrimitives } from "@kareyes/aether";

	const {
		SidebarProvider, SidebarContent, SidebarGroup, SidebarGroupContent,
		SidebarGroupLabel, SidebarInset, SidebarMenu, SidebarMenuSkeleton,
		SidebarTrigger,
	} = SidebarPrimitives;

	let loading = $state(false);
</script>

<div class="h-[600px] overflow-hidden rounded-lg border">
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
							<SidebarMenuSkeleton />
							<SidebarMenuSkeleton />
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
		<SidebarInset>
			<header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
				<SidebarTrigger />
				<h1 class="text-lg font-semibold">Loading State</h1>
			</header>
			<div class="flex flex-1 flex-col gap-4 p-4">
				<Card class="flex min-h-[400px] flex-1 items-center justify-center rounded-xl">
					<div class="text-center">
						<p class="text-muted-foreground">Click button to toggle loading state</p>
						<Button class="mt-4" onclick={() => (loading = !loading)}>Toggle Loading</Button>
					</div>
				</Card>
			</div>
		</SidebarInset>
	</SidebarProvider>
</div>
