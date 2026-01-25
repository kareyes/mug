<script lang="ts">

    import { Card, Button, Sidebar, SidebarPrimitives } from "@kareyes/aether";
    import {
        Home,
        Inbox,
        Calendar,
        Search,
        Settings,
        User,
        ChevronRight,
        Plus,
        MoreHorizontal,
        Folder,
        FileText,
        Star,
        Mail,
        Bell,
        MessageSquare,
        Code,
        Database,
        Cloud,
        Shield,
        Zap,
        TrendingUp,
        Users,
        BookOpen,
        HelpCircle,
        LogOut,
    } from "@kareyes/aether/icons";

    const {
        SidebarProvider,
        SidebarContent,
        SidebarFooter,
        SidebarGroup,
        SidebarGroupAction,
        SidebarGroupContent,
        SidebarGroupLabel,
        SidebarHeader,
        SidebarInput,
        SidebarInset,
        SidebarMenu,
        SidebarMenuAction,
        SidebarMenuBadge,
        SidebarMenuButton,
        SidebarMenuItem,
        SidebarMenuSkeleton,
        SidebarMenuSub,
        SidebarMenuSubButton,
        SidebarMenuSubItem,
        SidebarRail,
        SidebarSeparator,
        SidebarTrigger,
        useSidebar,
    } = SidebarPrimitives;

    // Current page state
    let currentPage = $state("home");

    // Loading state
    let loading = $state(false);

    // Sample data
    const projects = [
        { id: 1, name: "Design System", icon: Folder },
        { id: 2, name: "Marketing Site", icon: Folder },
        { id: 3, name: "Mobile App", icon: Folder },
    ];
</script>

<!-- Example 1: Basic Sidebar with Icon Collapsible -->
<div class="mb-8 space-y-8">
    <div class="space-y-2">
        <h1 class="text-3xl font-bold">Sidebar Component Demo</h1>
        <p class="text-muted-foreground">
            Interactive examples of the collapsible sidebar component with
            various configurations.
        </p>
    </div>
</div>

<div class="space-y-8 pb-8">
    <!-- Basic Example -->
    <section class="space-y-4">


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
                                            onclick={() =>
                                                (currentPage = "home")}
                                        >
                                            <Home class="size-4" />
                                            <span>Home</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            isActive={currentPage === "inbox"}
                                            tooltipContent="Inbox"
                                            onclick={() =>
                                                (currentPage = "inbox")}
                                        >
                                            <Inbox class="size-4" />
                                            <span>Inbox</span>
                                        </SidebarMenuButton>
                                        <SidebarMenuBadge>24</SidebarMenuBadge>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            isActive={currentPage ===
                                                "calendar"}
                                            tooltipContent="Calendar"
                                            onclick={() =>
                                                (currentPage = "calendar")}
                                        >
                                            <Calendar class="size-4" />
                                            <span>Calendar</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            isActive={currentPage === "search"}
                                            tooltipContent="Search"
                                            onclick={() =>
                                                (currentPage = "search")}
                                        >
                                            <Search class="size-4" />
                                            <span>Search</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            isActive={currentPage ===
                                                "settings"}
                                            tooltipContent="Settings"
                                            onclick={() =>
                                                (currentPage = "settings")}
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
                    <header
                        class="flex h-16 shrink-0 items-center gap-2 border-b px-4"
                    >
                        <SidebarTrigger />
                        <div class="flex flex-1 items-center justify-between">
                            <h1 class="text-lg font-semibold capitalize">
                                {currentPage}
                            </h1>
                            <span class="text-sm text-muted-foreground"
                                >Click the menu icon to toggle</span
                            >
                        </div>
                    </header>
                    <div class="flex flex-1 flex-col gap-4 p-4">
                        <Card
                            class="flex min-h-[400px] flex-1 items-center justify-center rounded-xl"
                        >
                            <p class="text-muted-foreground">
                                Main content area - {currentPage}
                            </p>
                        </Card>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    </section>
<!-- 
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">With Header and Footer</h2>
            <p class="text-sm text-muted-foreground">
                Sidebar with organization branding in header and user info in
                footer.
            </p>
        </div>

        <div class="h-[600px] overflow-hidden rounded-lg border">
            <SidebarProvider>
                <Sidebar>
                    <SidebarHeader>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton size="lg">
                                    <div
                                        class="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"
                                    >
                                        <span class="text-lg font-bold">A</span>
                                    </div>
                                    <div
                                        class="flex flex-col gap-0.5 text-start"
                                    >
                                        <span class="font-semibold"
                                            >Acme Inc</span
                                        >
                                        <span
                                            class="text-xs text-muted-foreground"
                                            >Enterprise</span
                                        >
                                    </div>
                                </SidebarMenuButton>
                                <SidebarMenuAction>
                                    <MoreHorizontal class="size-4" />
                                </SidebarMenuAction>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <Home class="size-4" />
                                            <span>Dashboard</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <TrendingUp class="size-4" />
                                            <span>Analytics</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <Users class="size-4" />
                                            <span>Team</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <FileText class="size-4" />
                                            <span>Documents</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <Settings class="size-4" />
                                            <span>Settings</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                    <SidebarFooter>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <User class="size-4" />
                                    <div
                                        class="flex flex-col gap-0.5 text-start"
                                    >
                                        <span class="text-sm font-medium"
                                            >John Doe</span
                                        >
                                        <span
                                            class="text-xs text-muted-foreground"
                                            >john@acme.com</span
                                        >
                                    </div>
                                </SidebarMenuButton>
                                <SidebarMenuAction>
                                    <LogOut class="size-4" />
                                </SidebarMenuAction>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarFooter>
                </Sidebar>
                <SidebarInset>
                    <header
                        class="flex h-16 shrink-0 items-center gap-2 border-b px-4"
                    >
                        <SidebarTrigger />
                        <h1 class="text-lg font-semibold">Company Dashboard</h1>
                    </header>
                    <div class="flex flex-1 flex-col gap-4 p-4">
                        <Card
                            class="flex min-h-[400px] flex-1 items-center justify-center rounded-xl"
                        >
                            <p class="text-muted-foreground">
                                Workspace content
                            </p>
                        </Card>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    </section>


    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">With Nested Submenus</h2>
            <p class="text-sm text-muted-foreground">
                Organize navigation with collapsible submenus for better
                hierarchy.
            </p>
        </div>

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
                                            <Folder class="size-4" />
                                            <span>Design System</span>
                                            <ChevronRight
                                                class="ml-auto size-4 transition-transform group-data-[state=open]:rotate-90"
                                            />
                                        </SidebarMenuButton>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton>
                                                    <span>Components</span>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton>
                                                    <span>Typography</span>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton>
                                                    <span>Colors</span>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton>
                                                    <span>Icons</span>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <Folder class="size-4" />
                                            <span>Documentation</span>
                                            <ChevronRight
                                                class="ml-auto size-4 transition-transform group-data-[state=open]:rotate-90"
                                            />
                                        </SidebarMenuButton>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton>
                                                    <span>Getting Started</span>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton>
                                                    <span>API Reference</span>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton>
                                                    <span>Examples</span>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <Folder class="size-4" />
                                            <span>Marketing Site</span>
                                            <ChevronRight
                                                class="ml-auto size-4"
                                            />
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>
                <SidebarInset>
                    <header
                        class="flex h-16 shrink-0 items-center gap-2 border-b px-4"
                    >
                        <SidebarTrigger />
                        <h1 class="text-lg font-semibold">Project Browser</h1>
                    </header>
                    <div class="flex flex-1 flex-col gap-4 p-4">
                        <Card
                            class="flex min-h-[400px] flex-1 items-center justify-center rounded-xl"
                        >
                            <p class="text-muted-foreground">
                                Select a project or section
                            </p>
                        </Card>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    </section>

    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">With Actions and Badges</h2>
            <p class="text-sm text-muted-foreground">
                Menu items with notification counts and quick actions.
            </p>
        </div>

        <div class="h-[600px] overflow-hidden rounded-lg border">
            <SidebarProvider>
                <Sidebar>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>Communications</SidebarGroupLabel
                            >
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <Mail class="size-4" />
                                            <span>Messages</span>
                                        </SidebarMenuButton>
                                        <SidebarMenuBadge>12</SidebarMenuBadge>
                                        <SidebarMenuAction title="Compose">
                                            <Plus class="size-4" />
                                        </SidebarMenuAction>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <Bell class="size-4" />
                                            <span>Notifications</span>
                                        </SidebarMenuButton>
                                        <SidebarMenuBadge>99+</SidebarMenuBadge>
                                        <SidebarMenuAction title="Settings">
                                            <Settings class="size-4" />
                                        </SidebarMenuAction>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <MessageSquare class="size-4" />
                                            <span>Comments</span>
                                        </SidebarMenuButton>
                                        <SidebarMenuBadge>3</SidebarMenuBadge>
                                        <SidebarMenuAction title="More">
                                            <MoreHorizontal class="size-4" />
                                        </SidebarMenuAction>
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
                                        <SidebarMenuButton>
                                            <Star
                                                class="size-4 fill-yellow-400 text-yellow-400"
                                            />
                                            <span>Starred Items</span>
                                        </SidebarMenuButton>
                                        <SidebarMenuBadge>5</SidebarMenuBadge>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>
                <SidebarInset>
                    <header
                        class="flex h-16 shrink-0 items-center gap-2 border-b px-4"
                    >
                        <SidebarTrigger />
                        <h1 class="text-lg font-semibold">Activity Center</h1>
                    </header>
                    <div class="flex flex-1 flex-col gap-4 p-4">
                        <Card
                            class="flex min-h-[400px] flex-1 items-center justify-center rounded-xl"
                        >
                            <p class="text-muted-foreground">
                                Notifications and messages
                            </p>
                        </Card>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    </section>

    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">
                With Search and Multiple Groups
            </h2>
            <p class="text-sm text-muted-foreground">
                Complex sidebar with search input and organized sections.
            </p>
        </div>

        <div class="h-[600px] overflow-hidden rounded-lg border">
            <SidebarProvider>
                <Sidebar>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupContent>
                                <SidebarInput
                                    type="search"
                                    placeholder="Search..."
                                />
                            </SidebarGroupContent>
                        </SidebarGroup>
                        <SidebarSeparator />
                        <SidebarGroup>
                            <SidebarGroupLabel>Platform</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <Home class="size-4" />
                                            <span>Dashboard</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <TrendingUp class="size-4" />
                                            <span>Analytics</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <FileText class="size-4" />
                                            <span>Reports</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                        <SidebarSeparator />
                        <SidebarGroup>
                            <SidebarGroupLabel>Projects</SidebarGroupLabel>
                            <SidebarGroupAction title="Add Project">
                                <Plus class="size-4" />
                            </SidebarGroupAction>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {#each projects as project}
                                        <SidebarMenuItem>
                                            <SidebarMenuButton>
                                                <Folder class="size-4" />
                                                <span>{project.name}</span>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    {/each}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                        <SidebarSeparator />
                        <SidebarGroup>
                            <SidebarGroupLabel>Resources</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <BookOpen class="size-4" />
                                            <span>Documentation</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <HelpCircle class="size-4" />
                                            <span>Help Center</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>
                <SidebarInset>
                    <header
                        class="flex h-16 shrink-0 items-center gap-2 border-b px-4"
                    >
                        <SidebarTrigger />
                        <h1 class="text-lg font-semibold">Workspace</h1>
                    </header>
                    <div class="flex flex-1 flex-col gap-4 p-4">
                        <Card
                            class="flex min-h-[400px] flex-1 items-center justify-center rounded-xl"
                        >
                            <p class="text-muted-foreground">
                                Project workspace
                            </p>
                        </Card>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    </section>


    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Floating Variant</h2>
            <p class="text-sm text-muted-foreground">
                Sidebar floats over content with shadow effect.
            </p>
        </div>

        <div class="h-[600px] overflow-hidden rounded-lg border">
            <SidebarProvider>
                <Sidebar variant="floating" collapsible="icon">
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>Menu</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            tooltipContent="Dashboard"
                                        >
                                            <Home class="size-4" />
                                            <span>Dashboard</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            tooltipContent="Code"
                                        >
                                            <Code class="size-4" />
                                            <span>Code</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            tooltipContent="Database"
                                        >
                                            <Database class="size-4" />
                                            <span>Database</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            tooltipContent="Cloud"
                                        >
                                            <Cloud class="size-4" />
                                            <span>Cloud</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            tooltipContent="Security"
                                        >
                                            <Shield class="size-4" />
                                            <span>Security</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                    <SidebarRail />
                </Sidebar>
                <SidebarInset>
                    <header
                        class="flex h-16 shrink-0 items-center gap-2 border-b px-4"
                    >
                        <SidebarTrigger />
                        <h1 class="text-lg font-semibold">Floating Sidebar</h1>
                    </header>
                    <div class="flex flex-1 flex-col gap-4 p-4">
                        <Card
                            class="flex min-h-[400px] flex-1 items-center justify-center rounded-xl"
                        >
                            <p class="text-muted-foreground">
                                Sidebar floats with shadow
                            </p>
                        </Card>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    </section>

    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Loading State</h2>
            <p class="text-sm text-muted-foreground">
                Skeleton placeholders while content is loading.
            </p>
        </div>

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
                    <header
                        class="flex h-16 shrink-0 items-center gap-2 border-b px-4"
                    >
                        <SidebarTrigger />
                        <h1 class="text-lg font-semibold">Loading State</h1>
                    </header>
                    <div class="flex flex-1 flex-col gap-4 p-4">
                        <Card
                            class="flex min-h-[400px] flex-1 items-center justify-center rounded-xl"
                        >
                            <div class="text-center">
                                <p class="text-muted-foreground">
                                    Click button to toggle loading state
                                </p>
                                <Button
                                    class="mt-4"
                                    onclick={() => (loading = !loading)}
                                >
                                    Toggle Loading
                                </Button>
                            </div>
                        </Card>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    </section>

    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Button Size Variants</h2>
            <p class="text-sm text-muted-foreground">
                Small, default, and large button sizes for different use cases.
            </p>
        </div>

        <div class="h-[600px] overflow-hidden rounded-lg border">
            <SidebarProvider>
                <Sidebar>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>Small Buttons</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton size="sm">
                                            <Home class="size-4" />
                                            <span>Home</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton size="sm">
                                            <Settings class="size-4" />
                                            <span>Settings</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                        <SidebarGroup>
                            <SidebarGroupLabel
                                >Default Buttons</SidebarGroupLabel
                            >
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <Inbox class="size-4" />
                                            <span>Inbox</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <Calendar class="size-4" />
                                            <span>Calendar</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                        <SidebarGroup>
                            <SidebarGroupLabel>Large Buttons</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton size="lg">
                                            <User class="size-4" />
                                            <span>Profile</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton size="lg">
                                            <Zap class="size-4" />
                                            <span>Quick Actions</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>
                <SidebarInset>
                    <header
                        class="flex h-16 shrink-0 items-center gap-2 border-b px-4"
                    >
                        <SidebarTrigger />
                        <h1 class="text-lg font-semibold">Size Variants</h1>
                    </header>
                    <div class="flex flex-1 flex-col gap-4 p-4">
                        <Card
                            class="flex min-h-[400px] flex-1 items-center justify-center rounded-xl"
                        >
                            <p class="text-muted-foreground">
                                Different button sizes
                            </p>
                        </Card>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    </section>


    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Link-Based Navigation</h2>
            <p class="text-sm text-muted-foreground">
                Using the child snippet pattern with anchor tags for proper
                navigation links.
            </p>
        </div>

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
                                                <a
                                                    href="#getting-started"
                                                    {...props}
                                                >
                                                    <BookOpen class="size-4" />
                                                    <span>Getting Started</span>
                                                </a>
                                            {/snippet}
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            {#snippet child({ props })}
                                                <a
                                                    href="#components"
                                                    {...props}
                                                >
                                                    <Code class="size-4" />
                                                    <span>Components</span>
                                                </a>
                                            {/snippet}
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            {#snippet child({ props })}
                                                <a href="#examples" {...props}>
                                                    <FileText class="size-4" />
                                                    <span>Examples</span>
                                                </a>
                                            {/snippet}
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            {#snippet child({ props })}
                                                <a href="#api" {...props}>
                                                    <Database class="size-4" />
                                                    <span>API Reference</span>
                                                </a>
                                            {/snippet}
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            {#snippet child({ props })}
                                                <a href="#help" {...props}>
                                                    <HelpCircle
                                                        class="size-4"
                                                    />
                                                    <span>Help & Support</span>
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
                    <header
                        class="flex h-16 shrink-0 items-center gap-2 border-b px-4"
                    >
                        <SidebarTrigger />
                        <h1 class="text-lg font-semibold">Documentation</h1>
                    </header>
                    <div class="flex flex-1 flex-col gap-4 p-4">
                        <Card
                            class="flex min-h-[400px] flex-1 items-center justify-center rounded-xl"
                        >
                            <div class="text-center space-y-2">
                                <p class="text-muted-foreground">
                                    Click navigation links to navigate
                                </p>
                                <p class="text-xs text-muted-foreground">
                                    Using child snippet pattern: <code
                                        class="px-2 py-1 bg-muted rounded text-xs"
                                        >{'<a href="#" {...props}>'}</code
                                    >
                                </p>
                            </div>
                        </Card>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    </section> -->
</div> 
