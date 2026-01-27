<script lang="ts">
    import { controlledStateDocs, customConfigurationsDocs, ecommerceExamplesDocs, formExamplesDocs, navigationMenuDocs, notificationsDocs, settingsPanelDocs, sidePositionsDocs, userProfileDocs } from "$lib/code-blocks/sheet";
import {
        Sheet,
        SheetPrimitives,
        Tabs,
        TabsPrimitives,
        Card,
        Button,
        Input,
        Label,
        Textarea,
        CodeBlock
    } from "@kareyes/aether";

    import {
        Menu,
        Settings,
        Bell,
        User,
        Mail,
        Lock,
        ShoppingCart,
        Home,
        FileText,
        HelpCircle,
        CreditCard,
    } from "@kareyes/aether/icons";

    const {
        SheetTrigger,
        SheetContent,
        SheetHeader,
        SheetFooter,
        SheetTitle,
        SheetDescription,
        SheetClose,
    } = SheetPrimitives;

    const { TabsList, TabsTrigger, TabsContent } = TabsPrimitives;

    // Controlled state example
    let openControlled = $state(false);
</script>

<div class="container mx-auto space-y-8 py-8">
    <div class="space-y-2">
        <h1 class="text-3xl font-bold">Sheet Component</h1>
        <p class="text-muted-foreground">
            A sliding panel component that overlays content from the edges of
            the viewport.
        </p>
    </div>

    <!-- Side Positions -->
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Side Positions</h2>
            <p class="text-sm text-muted-foreground">
                Sheets can slide from any edge of the viewport.
            </p>
        </div>

        <Card class="p-6">
            <div class="flex flex-wrap gap-4">
                <!-- Right Side (Default) -->
                <Sheet>
                    <SheetTrigger>
                        <Button variant="outline">Right (Default)</Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <SheetHeader>
                            <SheetTitle>Right Side Sheet</SheetTitle>
                            <SheetDescription>
                                This sheet slides in from the right side of the
                                screen.
                            </SheetDescription>
                        </SheetHeader>
                        <div class="py-4">
                            <p class="text-sm text-muted-foreground">
                                Commonly used for forms, settings, and detail
                                panels.
                            </p>
                        </div>
                    </SheetContent>
                </Sheet>

                <!-- Left Side -->
                <Sheet>
                    <SheetTrigger>
                        <Button variant="outline">
                            <Menu class="mr-2 size-4" />
                            Left
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle>Left Side Sheet</SheetTitle>
                            <SheetDescription>
                                This sheet slides in from the left side of the
                                screen.
                            </SheetDescription>
                        </SheetHeader>
                        <div class="py-4">
                            <p class="text-sm text-muted-foreground">
                                Perfect for navigation menus and sidebars.
                            </p>
                        </div>
                    </SheetContent>
                </Sheet>

                <!-- Top Side -->
                <Sheet>
                    <SheetTrigger>
                        <Button variant="outline">Top</Button>
                    </SheetTrigger>
                    <SheetContent side="top">
                        <SheetHeader>
                            <SheetTitle>Top Side Sheet</SheetTitle>
                            <SheetDescription>
                                This sheet slides down from the top of the
                                screen.
                            </SheetDescription>
                        </SheetHeader>
                        <div class="py-4">
                            <p class="text-sm text-muted-foreground">
                                Great for announcements and banners.
                            </p>
                        </div>
                    </SheetContent>
                </Sheet>

                <!-- Bottom Side -->
                <Sheet>
                    <SheetTrigger>
                        <Button variant="outline">Bottom</Button>
                    </SheetTrigger>
                    <SheetContent side="bottom">
                        <SheetHeader>
                            <SheetTitle>Bottom Side Sheet</SheetTitle>
                            <SheetDescription>
                                This sheet slides up from the bottom of the
                                screen.
                            </SheetDescription>
                        </SheetHeader>
                        <div class="py-4">
                            <p class="text-sm text-muted-foreground">
                                Ideal for mobile-style notifications and quick
                                actions.
                            </p>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            <br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={sidePositionsDocs}
			/>
        </Card>
    </section>

    <!-- Form Examples -->
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Form Examples</h2>
            <p class="text-sm text-muted-foreground">
                Sheets are perfect for containing forms and input workflows.
            </p>
        </div>

        <Card class="p-6 space-y-4">
            <!-- Profile Edit Form -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium">Profile Edit</h3>
                <Sheet>
                    <SheetTrigger>
                        <Button variant="outline">Edit Profile</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Edit Profile</SheetTitle>
                            <SheetDescription>
                                Make changes to your profile here. Click save
                                when you're done.
                            </SheetDescription>
                        </SheetHeader>
                        <div class="grid gap-4 py-4">
                            <div class="grid grid-cols-4 items-center gap-4">
                                <Label for="name" class="text-end">Name</Label>
                                <Input
                                    id="name"
                                    value="Pedro Duarte"
                                    class="col-span-3"
                                />
                            </div>
                            <div class="grid grid-cols-4 items-center gap-4">
                                <Label for="username" class="text-end"
                                    >Username</Label
                                >
                                <Input
                                    id="username"
                                    value="@peduarte"
                                    class="col-span-3"
                                />
                            </div>
                            <div class="grid grid-cols-4 items-center gap-4">
                                <Label for="email" class="text-end">Email</Label
                                >
                                <Input
                                    id="email"
                                    type="email"
                                    value="pedro@example.com"
                                    class="col-span-3"
                                />
                            </div>
                            <div class="grid grid-cols-4 items-center gap-4">
                                <Label for="bio" class="text-end">Bio</Label>
                                <Textarea
                                    id="bio"
                                    class="col-span-3"
                                    rows={3}
                                    value="Software developer and designer."
                                />
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetClose>
                                <Button variant="outline">Cancel</Button>
                            </SheetClose>
                            <Button type="submit">Save changes</Button>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>

            <!-- Contact Form -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium">Contact Form</h3>
                <Sheet>
                    <SheetTrigger>
                        <Button variant="outline">
                            <Mail class="mr-2 size-4" />
                            Contact Us
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Contact Us</SheetTitle>
                            <SheetDescription>
                                Send us a message and we'll get back to you
                                soon.
                            </SheetDescription>
                        </SheetHeader>
                        <div class="grid gap-4 py-4">
                            <div class="grid gap-2">
                                <Label for="contact-name">Name</Label>
                                <Input
                                    id="contact-name"
                                    placeholder="Your name"
                                />
                            </div>
                            <div class="grid gap-2">
                                <Label for="contact-email">Email</Label>
                                <Input
                                    id="contact-email"
                                    type="email"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div class="grid gap-2">
                                <Label for="subject">Subject</Label>
                                <Input
                                    id="subject"
                                    placeholder="What is this about?"
                                />
                            </div>
                            <div class="grid gap-2">
                                <Label for="message">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Type your message here..."
                                    rows={5}
                                />
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetClose>
                                <Button variant="outline">Cancel</Button>
                            </SheetClose>
                            <Button>Send Message</Button>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>

            <!-- Create Account -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium">Account Creation</h3>
                <Sheet>
                    <SheetTrigger>
                        <Button>Create Account</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Create Account</SheetTitle>
                            <SheetDescription>
                                Fill in your details to create a new account.
                            </SheetDescription>
                        </SheetHeader>
                        <div class="grid gap-4 py-4">
                            <div class="grid gap-2">
                                <Label for="new-name">Full Name</Label>
                                <Input id="new-name" placeholder="John Doe" />
                            </div>
                            <div class="grid gap-2">
                                <Label for="new-email">Email</Label>
                                <Input
                                    id="new-email"
                                    type="email"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div class="grid gap-2">
                                <Label for="new-password">Password</Label>
                                <Input id="new-password" type="password" />
                            </div>
                            <div class="grid gap-2">
                                <Label for="confirm-password"
                                    >Confirm Password</Label
                                >
                                <Input id="confirm-password" type="password" />
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetClose>
                                <Button variant="outline">Cancel</Button>
                            </SheetClose>
                            <Button type="submit">Create Account</Button>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>

            <br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={formExamplesDocs}
			/>
        </Card>
    </section>

    <!-- Navigation & Menu -->
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Navigation & Menu</h2>
            <p class="text-sm text-muted-foreground">
                Use sheets for mobile-friendly navigation menus.
            </p>
        </div>

        <Card class="p-6">
            <Sheet>
                <SheetTrigger>
                    <Button variant="outline">
                        <Menu class="mr-2 size-4" />
                        Open Menu
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>Navigation Menu</SheetTitle>
                        <SheetDescription>
                            Browse different sections of the application.
                        </SheetDescription>
                    </SheetHeader>
                    <nav class="flex flex-col gap-4 py-4">
                        <a
                            href="#home"
                            class="flex items-center gap-2 text-lg font-medium hover:underline"
                        >
                            <Home class="size-5" />
                            Home
                        </a>
                        <a
                            href="#about"
                            class="flex items-center gap-2 text-lg font-medium hover:underline"
                        >
                            <FileText class="size-5" />
                            About
                        </a>
                        <a
                            href="#services"
                            class="flex items-center gap-2 text-lg font-medium hover:underline"
                        >
                            <Settings class="size-5" />
                            Services
                        </a>
                        <a
                            href="#contact"
                            class="flex items-center gap-2 text-lg font-medium hover:underline"
                        >
                            <Mail class="size-5" />
                            Contact
                        </a>
                        <a
                            href="#help"
                            class="flex items-center gap-2 text-lg font-medium hover:underline"
                        >
                            <HelpCircle class="size-5" />
                            Help
                        </a>
                    </nav>
                </SheetContent>
            </Sheet>
            
            <br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={navigationMenuDocs}
			/>
        </Card>
    </section>

    <!-- Settings Panel -->
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Settings Panel</h2>
            <p class="text-sm text-muted-foreground">
                Complex settings interfaces with tabs and sections.
            </p>
        </div>

        <Card class="p-6">
            <Sheet>
                <SheetTrigger>
                    <Button variant="outline">
                        <Settings class="mr-2 size-4" />
                        Settings
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Settings</SheetTitle>
                        <SheetDescription>
                            Manage your account settings and preferences.
                        </SheetDescription>
                    </SheetHeader>
                    <Tabs value="account" class="py-4">
                        <TabsList class="grid w-full grid-cols-2">
                            <TabsTrigger value="account">Account</TabsTrigger>
                            <TabsTrigger value="security">Security</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account" class="space-y-4">
                            <div class="space-y-2">
                                <Label for="display-name">Display Name</Label>
                                <Input
                                    id="display-name"
                                    placeholder="Your name"
                                />
                            </div>
                            <div class="space-y-2">
                                <Label for="language">Language</Label>
                                <select
                                    id="language"
                                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                >
                                    <option>English</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                </select>
                            </div>
                            <div class="space-y-2">
                                <h4 class="text-sm font-medium">
                                    Email Notifications
                                </h4>
                                <div class="flex items-center justify-between">
                                    <Label
                                        for="newsletter"
                                        class="text-sm font-normal"
                                        >Newsletter</Label
                                    >
                                    <input
                                        type="checkbox"
                                        id="newsletter"
                                        checked
                                    />
                                </div>
                                <div class="flex items-center justify-between">
                                    <Label
                                        for="updates"
                                        class="text-sm font-normal"
                                        >Product Updates</Label
                                    >
                                    <input type="checkbox" id="updates" />
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="security" class="space-y-4">
                            <div class="space-y-2">
                                <Label for="current-password"
                                    >Current Password</Label
                                >
                                <Input id="current-password" type="password" />
                            </div>
                            <div class="space-y-2">
                                <Label for="new-pass">New Password</Label>
                                <Input id="new-pass" type="password" />
                            </div>
                            <div class="space-y-2">
                                <Label for="confirm-pass"
                                    >Confirm Password</Label
                                >
                                <Input id="confirm-pass" type="password" />
                            </div>
                        </TabsContent>
                    </Tabs>
                    <SheetFooter>
                        <SheetClose>
                            <Button variant="outline">Cancel</Button>
                        </SheetClose>
                        <Button>Save Changes</Button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
            
            <br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={settingsPanelDocs}
			/>
        </Card>
    </section>

    <!-- Notifications -->
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Notifications</h2>
            <p class="text-sm text-muted-foreground">
                Display notifications and alerts from different positions.
            </p>
        </div>

        <Card class="p-6 space-y-4">
            <!-- Top Notifications -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium">Announcements (Top)</h3>
                <Sheet>
                    <SheetTrigger>
                        <Button variant="outline">
                            <Bell class="mr-2 size-4" />
                            Announcements
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="top">
                        <SheetHeader>
                            <SheetTitle>Important Announcements</SheetTitle>
                            <SheetDescription>
                                Read the latest updates and announcements.
                            </SheetDescription>
                        </SheetHeader>
                        <div class="space-y-4 py-4">
                            <div class="rounded-lg border p-4">
                                <h4 class="font-semibold">
                                    System Maintenance
                                </h4>
                                <p class="text-sm text-muted-foreground">
                                    Scheduled maintenance on Sunday, 2AM - 4AM
                                    EST.
                                </p>
                            </div>
                            <div class="rounded-lg border p-4">
                                <h4 class="font-semibold">
                                    New Features Released
                                </h4>
                                <p class="text-sm text-muted-foreground">
                                    Check out our latest features in the
                                    dashboard.
                                </p>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            <!-- Bottom Notifications -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium">Recent Activity (Bottom)</h3>
                <Sheet>
                    <SheetTrigger>
                        <Button variant="outline">
                            <Bell class="mr-2 size-4" />
                            Recent Activity
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="bottom">
                        <SheetHeader>
                            <SheetTitle>Recent Notifications</SheetTitle>
                            <SheetDescription>
                                You have 3 unread notifications.
                            </SheetDescription>
                        </SheetHeader>
                        <div class="space-y-4 py-4">
                            <div class="flex items-start gap-4 border-b pb-4">
                                <div class="flex-1">
                                    <p class="font-medium">
                                        New message received
                                    </p>
                                    <p class="text-sm text-muted-foreground">
                                        2 minutes ago
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4 border-b pb-4">
                                <div class="flex-1">
                                    <p class="font-medium">Update available</p>
                                    <p class="text-sm text-muted-foreground">
                                        1 hour ago
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="flex-1">
                                    <p class="font-medium">Task completed</p>
                                    <p class="text-sm text-muted-foreground">
                                        3 hours ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            
            <br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={notificationsDocs}
			/>
        </Card>
    </section>

    <!-- E-commerce Examples -->
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">E-commerce Examples</h2>
            <p class="text-sm text-muted-foreground">
                Common patterns for shopping and checkout flows.
            </p>
        </div>

        <Card class="p-6 space-y-4">
            <!-- Shopping Cart -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium">Shopping Cart</h3>
                <Sheet>
                    <SheetTrigger>
                        <Button variant="outline">
                            <ShoppingCart class="mr-2 size-4" />
                            Cart (3)
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Shopping Cart</SheetTitle>
                            <SheetDescription>
                                You have 3 items in your cart.
                            </SheetDescription>
                        </SheetHeader>
                        <div class="space-y-4 py-4">
                            <div class="flex items-center gap-4 border-b pb-4">
                                <div class="size-16 rounded bg-muted"></div>
                                <div class="flex-1">
                                    <p class="font-medium">
                                        Wireless Headphones
                                    </p>
                                    <p class="text-sm text-muted-foreground">
                                        $79.99
                                    </p>
                                </div>
                                <Button variant="ghost" size="sm">Remove</Button
                                >
                            </div>
                            <div class="flex items-center gap-4 border-b pb-4">
                                <div class="size-16 rounded bg-muted"></div>
                                <div class="flex-1">
                                    <p class="font-medium">Smart Watch</p>
                                    <p class="text-sm text-muted-foreground">
                                        $199.99
                                    </p>
                                </div>
                                <Button variant="ghost" size="sm">Remove</Button
                                >
                            </div>
                            <div class="flex items-center gap-4 border-b pb-4">
                                <div class="size-16 rounded bg-muted"></div>
                                <div class="flex-1">
                                    <p class="font-medium">Phone Case</p>
                                    <p class="text-sm text-muted-foreground">
                                        $19.99
                                    </p>
                                </div>
                                <Button variant="ghost" size="sm">Remove</Button
                                >
                            </div>
                            <div class="flex items-center justify-between pt-4">
                                <span class="font-semibold">Total:</span>
                                <span class="text-xl font-bold">$299.97</span>
                            </div>
                        </div>
                        <SheetFooter class="flex-col gap-2 sm:flex-col">
                            <Button class="w-full">
                                <CreditCard class="mr-2 size-4" />
                                Checkout
                            </Button>
                            <SheetClose>
                                <Button variant="outline" class="w-full"
                                    >Continue Shopping</Button
                                >
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
            
            <br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={ecommerceExamplesDocs}
			/>
        </Card>
    </section>

    <!-- User Profile -->
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">User Profile</h2>
            <p class="text-sm text-muted-foreground">
                Display user information and account actions.
            </p>
        </div>

        <Card class="p-6">
            <Sheet>
                <SheetTrigger>
                    <Button variant="ghost" size="icon">
                        <User class="size-4" />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>User Profile</SheetTitle>
                        <SheetDescription>
                            View and manage your profile information.
                        </SheetDescription>
                    </SheetHeader>
                    <div class="space-y-6 py-4">
                        <div class="flex items-center gap-4">
                            <div
                                class="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground"
                            >
                                <User class="size-8" />
                            </div>
                            <div>
                                <p class="font-semibold">John Doe</p>
                                <p class="text-sm text-muted-foreground">
                                    john.doe@example.com
                                </p>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <h4 class="text-sm font-medium">Account Details</h4>
                            <div class="space-y-1 text-sm">
                                <p>
                                    <span class="text-muted-foreground"
                                        >Member since:</span
                                    > January 2024
                                </p>
                                <p>
                                    <span class="text-muted-foreground"
                                        >Account type:</span
                                    > Premium
                                </p>
                                <p>
                                    <span class="text-muted-foreground"
                                        >Location:</span
                                    > San Francisco, CA
                                </p>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <Button
                                variant="outline"
                                class="w-full justify-start"
                            >
                                <User class="mr-2 size-4" />
                                Edit Profile
                            </Button>
                            <Button
                                variant="outline"
                                class="w-full justify-start"
                            >
                                <Lock class="mr-2 size-4" />
                                Change Password
                            </Button>
                            <Button
                                variant="outline"
                                class="w-full justify-start"
                            >
                                <Settings class="mr-2 size-4" />
                                Account Settings
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
            
            <br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={userProfileDocs}
			/>
        </Card>
    </section>

    <!-- Controlled State -->
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Controlled State</h2>
            <p class="text-sm text-muted-foreground">
                Control the sheet's open state programmatically.
            </p>
        </div>

        <Card class="p-6">
            <div class="space-y-4">
                <div class="flex items-center gap-4">
                    <Button onclick={() => (openControlled = true)}>
                        Open Sheet
                    </Button>
                    <Button
                        variant="outline"
                        onclick={() => (openControlled = false)}
                    >
                        Close Sheet
                    </Button>
                    <span class="text-sm text-muted-foreground">
                        State: {openControlled ? "Open" : "Closed"}
                    </span>
                </div>

                <Sheet bind:open={openControlled}>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Controlled Sheet</SheetTitle>
                            <SheetDescription>
                                This sheet's state is controlled
                                programmatically.
                            </SheetDescription>
                        </SheetHeader>
                        <div class="py-4">
                            <p class="text-sm text-muted-foreground">
                                You can open and close this sheet using the
                                buttons outside, or use the close button here.
                            </p>
                        </div>
                        <SheetFooter>
                            <SheetClose>
                                <Button>Close</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
            
            <br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={controlledStateDocs}
			/>
        </Card>
    </section>

    <!-- Without Close Button -->
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Custom Configurations</h2>
            <p class="text-sm text-muted-foreground">
                Advanced customization options.
            </p>
        </div>

        <Card class="p-6 space-y-4">
            <!-- Without Default Close Button -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium">Without Close Button</h3>
                <Sheet>
                    <SheetTrigger>
                        <Button variant="outline">Important Action</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Confirm Action</SheetTitle>
                            <SheetDescription>
                                This action requires your confirmation.
                            </SheetDescription>
                        </SheetHeader>
                        <div class="py-4">
                            <div
                                class="rounded-lg border border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-950"
                            >
                                <p class="text-sm font-medium">Warning</p>
                                <p class="text-sm text-muted-foreground">
                                    This action cannot be undone. Please confirm
                                    to proceed.
                                </p>
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetClose>
                                <Button variant="outline">Cancel</Button>
                            </SheetClose>
                            <SheetClose>
                                <Button variant="destructive">Confirm</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>

            <!-- Custom Width -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium">Custom Width</h3>
                <Sheet>
                    <SheetTrigger>
                        <Button variant="outline">Wide Sheet</Button>
                    </SheetTrigger>
                    <SheetContent class="w-[400px] sm:w-[540px]">
                        <SheetHeader>
                            <SheetTitle>Custom Width Sheet</SheetTitle>
                            <SheetDescription>
                                This sheet has a custom width for more space.
                            </SheetDescription>
                        </SheetHeader>
                        <div class="py-4">
                            <p class="text-sm text-muted-foreground">
                                Content with more horizontal space to
                                accommodate detailed information.
                            </p>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            
            <br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={customConfigurationsDocs}
			/>
        </Card>
    </section>
</div>
