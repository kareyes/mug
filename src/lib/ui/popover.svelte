<script lang="ts">
    import {
        Card,
        Button,
        Input,
        Label,
        PopoverPrimitives,
    } from "@kareyes/aether";
    import {
        Settings,
        User,
        Info,
        MoreVertical,
        HelpCircle,
        Bell,
        Calendar,
        MapPin,
        Share2,
    } from "@kareyes/aether/icons";

    const {
        Popover,
        PopoverTrigger,
        PopoverContent,
        PopoverClose,
        PopoverArrow,
    } = PopoverPrimitives;
</script>

<div class="container mx-auto space-y-8 py-8">
    <div class="space-y-2">
        <h1 class="text-3xl font-bold">Popover Component Variants</h1>
        <p class="text-muted-foreground">
            Comprehensive showcase of popover component with various styles,
            sizes, and animations.
        </p>
    </div>

    <!-- Default Variant -->
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Default Variant</h2>
            <p class="text-sm text-muted-foreground">
                Standard popover style with medium shadow and border.
            </p>
        </div>
        <Card class="p-6">
            <div class="flex flex-wrap gap-4">
                <Popover>
                    <PopoverTrigger variant="button"
                        >Open Popover</PopoverTrigger
                    >
                    <PopoverContent>
                        <div class="space-y-2">
                            <h4 class="font-medium leading-none">
                                Default Style
                            </h4>
                            <p class="text-sm text-muted-foreground">
                                This is the standard popover appearance with
                                balanced shadow and border.
                            </p>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </Card>
    </section>

    <!-- Bordered Variant -->
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Bordered Variant</h2>
            <p class="text-sm text-muted-foreground">
                Emphasized border with lighter shadow for a more defined look.
            </p>
        </div>
        <Card class="p-6">
            <div class="flex flex-wrap gap-4">
                <Popover>
                    <PopoverTrigger variant="outline"
                        >Bordered Popover</PopoverTrigger
                    >
                    <PopoverContent variant="bordered">
                        <div class="space-y-2">
                            <h4 class="font-medium leading-none">
                                Bordered Style
                            </h4>
                            <p class="text-sm text-muted-foreground">
                                Features a prominent border with lighter shadow
                                for clear definition.
                            </p>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </Card>
    </section>

    <!-- Elevated Variant -->
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Elevated Variant</h2>
            <p class="text-sm text-muted-foreground">
                Floating appearance with larger shadow and no border.
            </p>
        </div>
        <Card class="p-6">
            <div class="flex flex-wrap gap-4">
                <Popover>
                    <PopoverTrigger variant="button"
                        >Elevated Popover</PopoverTrigger
                    >
                    <PopoverContent variant="elevated">
                        <div class="space-y-2">
                            <h4 class="font-medium leading-none">
                                Elevated Style
                            </h4>
                            <p class="text-sm text-muted-foreground">
                                Creates a floating effect with enhanced shadow
                                and no border.
                            </p>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </Card>
    </section>

    <!-- Minimal Variant -->
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Minimal Variant</h2>
            <p class="text-sm text-muted-foreground">
                Subtle appearance with light border and small shadow.
            </p>
        </div>
        <Card class="p-6">
            <div class="flex flex-wrap gap-4">
                <Popover>
                    <PopoverTrigger variant="ghost"
                        >Minimal Popover</PopoverTrigger
                    >
                    <PopoverContent variant="minimal">
                        <div class="space-y-2">
                            <h4 class="font-medium leading-none">
                                Minimal Style
                            </h4>
                            <p class="text-sm text-muted-foreground">
                                Understated design with subtle border and
                                shadow.
                            </p>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </Card>
    </section>

    <!-- Ghost Variant -->
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Ghost Variant</h2>
            <p class="text-sm text-muted-foreground">
                Transparent background for complete custom styling.
            </p>
        </div>
        <Card class="p-6">
            <div class="flex flex-wrap gap-4">
                <Popover>
                    <PopoverTrigger variant="button"
                        >Custom Styled</PopoverTrigger
                    >
                    <PopoverContent
                        variant="ghost"
                        class="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    >
                        <div class="space-y-2">
                            <h4 class="font-medium leading-none">
                                Custom Style
                            </h4>
                            <p class="text-sm">
                                Ghost variant allows complete custom styling
                                with gradients and colors.
                            </p>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </Card>
    </section>

    <!-- Size Variants -->
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Size Variants</h2>
            <p class="text-sm text-muted-foreground">
                Small, default, and large sizes for different content amounts.
            </p>
        </div>
        <Card class="p-6">
            <div class="flex flex-wrap gap-4">
                <Popover>
                    <PopoverTrigger variant="button" size="sm"
                        >Small</PopoverTrigger
                    >
                    <PopoverContent size="sm">
                        <p class="text-sm">
                            Compact popover for brief content.
                        </p>
                    </PopoverContent>
                </Popover>

                <Popover>
                    <PopoverTrigger variant="button">Default</PopoverTrigger>
                    <PopoverContent>
                        <div class="space-y-2">
                            <h4 class="font-medium">Default Size</h4>
                            <p class="text-sm text-muted-foreground">
                                Standard size for most use cases.
                            </p>
                        </div>
                    </PopoverContent>
                </Popover>

                <Popover>
                    <PopoverTrigger variant="button" size="lg"
                        >Large</PopoverTrigger
                    >
                    <PopoverContent size="lg">
                        <div class="space-y-3">
                            <h3 class="text-lg font-semibold">Large Popover</h3>
                            <p class="text-sm text-muted-foreground">
                                Spacious layout for detailed content and complex
                                interactions.
                            </p>
                            <div class="flex gap-2 pt-2">
                                <Button size="sm">Confirm</Button>
                                <Button variant="outline" size="sm"
                                    >Cancel</Button
                                >
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>

                <Popover>
                    <PopoverTrigger variant="outline">Auto Width</PopoverTrigger
                    >
                    <PopoverContent size="auto" class="w-auto">
                        <p>Content determines width</p>
                    </PopoverContent>
                </Popover>
            </div>
        </Card>
    </section>

    <!-- Animation Variants -->
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Animation Variants</h2>
            <p class="text-sm text-muted-foreground">
                Different entry and exit animations for visual variety.
            </p>
        </div>
        <Card class="p-6">
            <div class="flex flex-wrap gap-4">
                <Popover>
                    <PopoverTrigger variant="button"
                        >Default (Combined)</PopoverTrigger
                    >
                    <PopoverContent animation="default">
                        <p class="text-sm">Fade, zoom, and slide combined</p>
                    </PopoverContent>
                </Popover>

                <Popover>
                    <PopoverTrigger variant="button">Fade</PopoverTrigger>
                    <PopoverContent animation="fade">
                        <p class="text-sm">Simple fade in/out effect</p>
                    </PopoverContent>
                </Popover>

                <Popover>
                    <PopoverTrigger variant="button">Scale</PopoverTrigger>
                    <PopoverContent animation="scale">
                        <p class="text-sm">Zoom in/out effect</p>
                    </PopoverContent>
                </Popover>

                <Popover>
                    <PopoverTrigger variant="button">Slide</PopoverTrigger>
                    <PopoverContent animation="slide">
                        <p class="text-sm">Slide from placement direction</p>
                    </PopoverContent>
                </Popover>

                <Popover>
                    <PopoverTrigger variant="button">None</PopoverTrigger>
                    <PopoverContent animation="none">
                        <p class="text-sm">Instant show/hide</p>
                    </PopoverContent>
                </Popover>
            </div>
        </Card>
    </section>

    <!-- Placement -->
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Placement Options</h2>
            <p class="text-sm text-muted-foreground">
                Position popover on any side of the trigger element.
            </p>
        </div>
        <Card class="p-6">
            <div
                class="flex flex-wrap gap-4 items-center justify-center min-h-[200px]"
            >
                <Popover>
                    <PopoverTrigger variant="outline">Top</PopoverTrigger>
                    <PopoverContent side="top">
                        <p class="text-sm">Positioned above trigger</p>
                    </PopoverContent>
                </Popover>

                <Popover>
                    <PopoverTrigger variant="outline">Right</PopoverTrigger>
                    <PopoverContent side="right">
                        <p class="text-sm">Positioned to the right</p>
                    </PopoverContent>
                </Popover>

                <Popover>
                    <PopoverTrigger variant="outline">Bottom</PopoverTrigger>
                    <PopoverContent side="bottom">
                        <p class="text-sm">Positioned below trigger</p>
                    </PopoverContent>
                </Popover>

                <Popover>
                    <PopoverTrigger variant="outline">Left</PopoverTrigger>
                    <PopoverContent side="left">
                        <p class="text-sm">Positioned to the left</p>
                    </PopoverContent>
                </Popover>
            </div>
        </Card>
    </section>

    <!-- Alignment -->
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Alignment Options</h2>
            <p class="text-sm text-muted-foreground">
                Align popover to start, center, or end of trigger.
            </p>
        </div>
        <Card class="p-6">
            <div class="flex flex-wrap gap-4">
                <Popover>
                    <PopoverTrigger variant="outline"
                        >Align Start</PopoverTrigger
                    >
                    <PopoverContent align="start">
                        <p class="text-sm">Aligned to start of trigger</p>
                    </PopoverContent>
                </Popover>

                <Popover>
                    <PopoverTrigger variant="outline"
                        >Align Center</PopoverTrigger
                    >
                    <PopoverContent align="center">
                        <p class="text-sm">Aligned to center (default)</p>
                    </PopoverContent>
                </Popover>

                <Popover>
                    <PopoverTrigger variant="outline">Align End</PopoverTrigger>
                    <PopoverContent align="end">
                        <p class="text-sm">Aligned to end of trigger</p>
                    </PopoverContent>
                </Popover>
            </div>
        </Card>
    </section>

    <!-- Trigger Variants -->
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Trigger Variants</h2>
            <p class="text-sm text-muted-foreground">
                Different trigger styles for various use cases.
            </p>
        </div>
        <Card class="p-6">
            <div class="flex flex-wrap gap-4">
                <Popover>
                    <PopoverTrigger variant="button"
                        >Button Style</PopoverTrigger
                    >
                    <PopoverContent>
                        <p class="text-sm">Primary button trigger</p>
                    </PopoverContent>
                </Popover>

                <Popover>
                    <PopoverTrigger variant="outline"
                        >Outline Style</PopoverTrigger
                    >
                    <PopoverContent>
                        <p class="text-sm">Outlined button trigger</p>
                    </PopoverContent>
                </Popover>

                <Popover>
                    <PopoverTrigger variant="ghost">Ghost Style</PopoverTrigger>
                    <PopoverContent>
                        <p class="text-sm">Ghost button trigger</p>
                    </PopoverContent>
                </Popover>

                <Popover>
                    <PopoverTrigger variant="link">Link Style</PopoverTrigger>
                    <PopoverContent>
                        <p class="text-sm">Link-style trigger</p>
                    </PopoverContent>
                </Popover>

                <Popover>
                    <PopoverTrigger
                        variant="default"
                        class="rounded-full p-2 hover:bg-accent"
                    >
                        <Info class="h-4 w-4" />
                    </PopoverTrigger>
                    <PopoverContent size="sm">
                        <p class="text-sm">Custom icon trigger</p>
                    </PopoverContent>
                </Popover>
            </div>
        </Card>
    </section>

    <!-- With Arrow -->
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">With Arrow Indicator</h2>
            <p class="text-sm text-muted-foreground">
                Add a visual arrow pointing to the trigger element.
            </p>
        </div>
        <Card class="p-6">
            <div class="flex flex-wrap gap-4">
                <Popover>
                    <PopoverTrigger variant="button">With Arrow</PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow class="fill-popover" />
                        <div class="space-y-2">
                            <h4 class="font-medium leading-none">
                                Arrow Indicator
                            </h4>
                            <p class="text-sm text-muted-foreground">
                                The arrow clearly points to the trigger element.
                            </p>
                        </div>
                    </PopoverContent>
                </Popover>

                <Popover>
                    <PopoverTrigger variant="outline">Arrow Top</PopoverTrigger>
                    <PopoverContent side="top">
                        <PopoverArrow class="fill-popover" />
                        <p class="text-sm">
                            Arrow on the bottom when placed on top
                        </p>
                    </PopoverContent>
                </Popover>
            </div>
        </Card>
    </section>

    <!-- Advanced Examples -->
    <section class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-2xl font-semibold">Advanced Examples</h2>
            <p class="text-sm text-muted-foreground">
                Real-world use cases with complex content and interactions.
            </p>
        </div>

        <!-- Form in Popover -->
        <Card class="p-6">
            <div class="space-y-3">
                <h3 class="text-lg font-medium">Form in Popover</h3>
                <Popover>
                    <PopoverTrigger variant="button">
                        <Settings class="mr-2 h-4 w-4" />
                        Dimensions
                    </PopoverTrigger>
                    <PopoverContent class="w-80">
                        <div class="grid gap-4">
                            <div class="space-y-2">
                                <h4 class="font-medium leading-none">
                                    Dimensions
                                </h4>
                                <p class="text-sm text-muted-foreground">
                                    Set the dimensions for the layer.
                                </p>
                            </div>
                            <div class="grid gap-2">
                                <div
                                    class="grid grid-cols-3 items-center gap-4"
                                >
                                    <Label for="width">Width</Label>
                                    <Input
                                        id="width"
                                        value="100%"
                                        class="col-span-2 h-8"
                                    />
                                </div>
                                <div
                                    class="grid grid-cols-3 items-center gap-4"
                                >
                                    <Label for="maxWidth">Max. width</Label>
                                    <Input
                                        id="maxWidth"
                                        value="300px"
                                        class="col-span-2 h-8"
                                    />
                                </div>
                                <div
                                    class="grid grid-cols-3 items-center gap-4"
                                >
                                    <Label for="height">Height</Label>
                                    <Input
                                        id="height"
                                        value="25px"
                                        class="col-span-2 h-8"
                                    />
                                </div>
                                <div
                                    class="grid grid-cols-3 items-center gap-4"
                                >
                                    <Label for="maxHeight">Max. height</Label>
                                    <Input
                                        id="maxHeight"
                                        value="none"
                                        class="col-span-2 h-8"
                                    />
                                </div>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </Card>

        <!-- User Profile Popover -->
        <Card class="p-6">
            <div class="space-y-3">
                <h3 class="text-lg font-medium">User Profile Popover</h3>
                <Popover>
                    <PopoverTrigger variant="default" class="rounded-full">
                        <div
                            class="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-accent"
                        >
                            <User class="h-5 w-5" />
                            <span class="text-sm font-medium">John Doe</span>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent variant="elevated" size="sm" align="start">
                        <div class="flex flex-col gap-3">
                            <div class="flex items-center gap-3">
                                <div
                                    class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
                                >
                                    <User class="h-5 w-5" />
                                </div>
                                <div>
                                    <p class="font-medium">John Doe</p>
                                    <p class="text-sm text-muted-foreground">
                                        john@example.com
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-col gap-1">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    class="justify-start">Profile</Button
                                >
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    class="justify-start">Settings</Button
                                >
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    class="justify-start">Sign out</Button
                                >
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </Card>

        <!-- Action Menu -->
        <Card class="p-6">
            <div class="space-y-3">
                <h3 class="text-lg font-medium">Action Menu</h3>
                <Popover>
                    <PopoverTrigger variant="ghost" size="sm">
                        <MoreVertical class="h-4 w-4" />
                    </PopoverTrigger>
                    <PopoverContent
                        variant="minimal"
                        size="auto"
                        class="p-1 w-40"
                    >
                        <div class="flex flex-col">
                            <button
                                class="px-3 py-2 text-sm hover:bg-accent rounded text-left"
                                >Edit</button
                            >
                            <button
                                class="px-3 py-2 text-sm hover:bg-accent rounded text-left"
                                >Duplicate</button
                            >
                            <button
                                class="px-3 py-2 text-sm hover:bg-accent rounded text-left"
                                >Archive</button
                            >
                            <div class="h-px bg-border my-1"></div>
                            <button
                                class="px-3 py-2 text-sm hover:bg-accent rounded text-left text-destructive"
                                >Delete</button
                            >
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </Card>

        <!-- With Close Button -->
        <Card class="p-6">
            <div class="space-y-3">
                <h3 class="text-lg font-medium">With Close Button</h3>
                <Popover>
                    <PopoverTrigger variant="button">Open</PopoverTrigger>
                    <PopoverContent>
                        <div class="space-y-4">
                            <div class="space-y-2">
                                <h4 class="font-medium leading-none">
                                    Confirmation
                                </h4>
                                <p class="text-sm text-muted-foreground">
                                    Are you sure you want to proceed with this
                                    action?
                                </p>
                            </div>
                            <div class="flex gap-2">
                                <PopoverClose class="flex-1">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        class="w-full">Cancel</Button
                                    >
                                </PopoverClose>
                                <PopoverClose class="flex-1">
                                    <Button size="sm" class="w-full"
                                        >Confirm</Button
                                    >
                                </PopoverClose>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </Card>

        <!-- Info Icon Helper -->
        <Card class="p-6">
            <div class="space-y-3">
                <h3 class="text-lg font-medium">Contextual Help</h3>
                <div class="flex items-center gap-2">
                    <span class="text-sm font-medium">Advanced Settings</span>
                    <Popover>
                        <PopoverTrigger
                            variant="default"
                            class="rounded-full p-1 hover:bg-accent"
                        >
                            <HelpCircle class="h-4 w-4 text-muted-foreground" />
                        </PopoverTrigger>
                        <PopoverContent size="sm" variant="minimal">
                            <div class="space-y-2">
                                <p class="text-sm font-medium">
                                    What are Advanced Settings?
                                </p>
                                <p class="text-sm text-muted-foreground">
                                    These settings allow you to customize
                                    advanced features and configurations that
                                    may affect system behavior.
                                </p>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </Card>

        <!-- Multiple Popovers -->
        <Card class="p-6">
            <div class="space-y-3">
                <h3 class="text-lg font-medium">Multiple Popovers</h3>
                <div class="flex flex-wrap gap-4">
                    <Popover>
                        <PopoverTrigger variant="outline">
                            <Calendar class="mr-2 h-4 w-4" />
                            Schedule
                        </PopoverTrigger>
                        <PopoverContent size="sm">
                            <div class="space-y-2">
                                <p class="font-medium text-sm">
                                    Schedule Meeting
                                </p>
                                <p class="text-sm text-muted-foreground">
                                    Select a date and time
                                </p>
                            </div>
                        </PopoverContent>
                    </Popover>

                    <Popover>
                        <PopoverTrigger variant="outline">
                            <Bell class="mr-2 h-4 w-4" />
                            Notifications
                        </PopoverTrigger>
                        <PopoverContent size="sm">
                            <div class="space-y-2">
                                <p class="font-medium text-sm">
                                    3 New Notifications
                                </p>
                                <div class="space-y-1">
                                    <p class="text-xs text-muted-foreground">
                                        New message received
                                    </p>
                                    <p class="text-xs text-muted-foreground">
                                        Task assigned to you
                                    </p>
                                    <p class="text-xs text-muted-foreground">
                                        Meeting in 30 minutes
                                    </p>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>

                    <Popover>
                        <PopoverTrigger variant="outline">
                            <Share2 class="mr-2 h-4 w-4" />
                            Share
                        </PopoverTrigger>
                        <PopoverContent size="sm">
                            <div class="space-y-2">
                                <p class="font-medium text-sm">
                                    Share this page
                                </p>
                                <div class="flex gap-2">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        class="flex-1">Copy Link</Button
                                    >
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        class="flex-1">Email</Button
                                    >
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </Card>
    </section>
</div>
