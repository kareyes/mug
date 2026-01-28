<script lang="ts">
    import { basicInputDocs, iconAddonsDocs, textAddonsDocs, buttonAddonsDocs, inputMasksDocs, combinedFeaturesDocs, inputStatesDocs, customAddonsDocs, withFieldDocs, completeFormDocs } from "$lib/code-blocks/input";
    import {
        Input,
        Card,
        Button,
        Field,
        FieldPrimitives,
        InputGroupPrimitives,
        Label,
        CodeBlock
    } from "@kareyes/aether";
    import {
        Search,
        Mail,
        DollarSign,
        Lock,
        Eye,
        EyeOff,
        Copy,
        Check,
        Send,
        User,
        Phone,
        CreditCard,
    } from "@kareyes/aether/icons";

    const { InputGroupButton } = InputGroupPrimitives;

    let searchValue = $state("");
    let emailValue = $state("");
    let priceValue = $state("");
    let passwordValue = $state("");
    let showPassword = $state(false);
    let copiedUrl = $state(false);
    let urlValue = $state("https://example.com");
    let messageValue = $state("");
    let usernameValue = $state("");

    // Field demo state
    let formData = $state({
        email: "",
        password: "",
        username: "",
        phone: "",
        price: "",
        apiKey: "sk_live_1234567890abcdef",
    });

    let errors = $state<Record<string, string>>({});
    let showFormPassword = $state(false);

    function handleCopy() {
        navigator.clipboard.writeText(urlValue);
        copiedUrl = true;
        setTimeout(() => (copiedUrl = false), 2000);
    }

    function handleSend() {
        console.log("Sending message:", messageValue);
        messageValue = "";
    }

    function validateForm() {
        errors = {};
        if (!formData.email) errors.email = "Email is required";
        else if (!formData.email.includes("@"))
            errors.email = "Invalid email address";
        if (!formData.password) errors.password = "Password is required";
        else if (formData.password.length < 8)
            errors.password = "Password must be at least 8 characters";
        if (!formData.username) errors.username = "Username is required";
    }
</script>

<div class="container mx-auto p-6 max-w-6xl">
    <!-- <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Input Component</h1>
        <p class="text-muted-foreground">
            Enhanced input with built-in InputGroup addon support, masks, and
            variants
        </p>
    </div> -->

    <div class="space-y-12">
        <!-- Basic Input -->
        <Card variant="outline" class="p-6">
            <h2 class="text-2xl font-semibold mb-4">Basic Input</h2>
            <p class="text-sm text-muted-foreground mb-4">
                Standard input without addons
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <div class="space-y-2">
                    <Label for="basic-text" class="text-sm font-medium"
                        >Text Input</Label
                    >
                    <Input id="basic-text" placeholder="Enter text..." />
                </div>

                <div class="space-y-2">
                    <Label for="basic-email" class="text-sm font-medium"
                        >Email Input</Label
                    >
                    <Input
                        id="basic-email"
                        type="email"
                        placeholder="Enter email..."
                    />
                </div>

                <div class="space-y-2">
                    <Label for="basic-password" class="text-sm font-medium"
                        >Password Input</Label
                    >
                    <Input
                        id="basic-password"
                        type="password"
                        placeholder="Enter password..."
                    />
                </div>

                <div class="space-y-2">
                    <Label for="basic-number" class="text-sm font-medium"
                        >Number Input</Label
                    >
                    <Input
                        id="basic-number"
                        type="number"
                        placeholder="Enter number..."
                    />
                </div>
            </div>

            <br />
            <CodeBlock
                title="Code"
                language="Svelte"
                showLineNumbers
                collapsible
                maxHeight="250px"
                variant="default"
                code={basicInputDocs}
            />
        </Card>

        <!-- Icon Addons -->
        <Card variant="outline" class="p-6">
            <h2 class="text-2xl font-semibold mb-4">Icon Addons</h2>
            <p class="text-sm text-muted-foreground mb-4">
                Add icons to enhance visual clarity
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <!-- Start Icon -->
                <div class="space-y-2">
                    <Label class="text-sm font-medium"
                        >Search (Start Icon)</Label
                    >
                    <Input bind:value={searchValue} placeholder="Search...">
                        {#snippet startIcon()}
                            <Search class="size-4" />
                        {/snippet}
                    </Input>
                </div>

                <!-- End Icon -->
                <div class="space-y-2">
                    <Label class="text-sm font-medium">Email (End Icon)</Label>
                    <Input
                        bind:value={emailValue}
                        type="email"
                        placeholder="Enter your email"
                    >
                        {#snippet endIcon()}
                            <Mail class="size-4" />
                        {/snippet}
                    </Input>
                </div>

                <!-- Both Icons -->
                <div class="space-y-2">
                    <Label class="text-sm font-medium">Price (Both Icons)</Label
                    >
                    <Input
                        bind:value={priceValue}
                        type="number"
                        placeholder="0.00"
                    >
                        {#snippet startIcon()}
                            <DollarSign class="size-4" />
                        {/snippet}
                        {#snippet endIcon()}
                            <span class="text-xs text-muted-foreground"
                                >USD</span
                            >
                        {/snippet}
                    </Input>
                </div>

                <!-- Password with Toggle -->
                <div class="space-y-2">
                    <Label class="text-sm font-medium"
                        >Password (Interactive Icon)</Label
                    >
                    <Input
                        bind:value={passwordValue}
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                    >
                        {#snippet startIcon()}
                            <Lock class="size-4" />
                        {/snippet}
                        {#snippet endButton()}
                            <InputGroupButton
                                size="icon-xs"
                                variant="ghost"
                                onclick={() => (showPassword = !showPassword)}
                                aria-label={showPassword
                                    ? "Hide password"
                                    : "Show password"}
                            >
                                {#if showPassword}
                                    <EyeOff class="size-4" />
                                {:else}
                                    <Eye class="size-4" />
                                {/if}
                            </InputGroupButton>
                        {/snippet}
                    </Input>
                </div>
            </div>

            <br />
            <CodeBlock
                title="Code"
                language="Svelte"
                showLineNumbers
                collapsible
                maxHeight="250px"
                variant="default"
                code={iconAddonsDocs}
            />
        </Card>

        <!-- Text Addons -->
        <Card variant="outline" class="p-6">
            <h2 class="text-2xl font-semibold mb-4">Text Addons</h2>
            <p class="text-sm text-muted-foreground mb-4">
                Display additional text context
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <!-- URL Prefix -->
                <div class="space-y-2">
                    <Label class="text-sm font-medium">Website URL</Label>
                    <Input
                        placeholder="example.com"
                        startText="https://"
                        endText=".com"
                    />
                </div>

                <!-- Currency -->
                <div class="space-y-2">
                    <Label class="text-sm font-medium">Price</Label>
                    <Input
                        type="number"
                        placeholder="0.00"
                        startText="$"
                        endText="USD"
                    />
                </div>

                <!-- Email Domain -->
                <div class="space-y-2">
                    <Label class="text-sm font-medium">Company Email</Label>
                    <Input
                        bind:value={usernameValue}
                        placeholder="username"
                        endText="@company.com"
                    >
                        {#snippet startIcon()}
                            <User class="size-4" />
                        {/snippet}
                    </Input>
                </div>

                <!-- Unit Suffix -->
                <div class="space-y-2">
                    <Label class="text-sm font-medium">Weight</Label>
                    <Input type="number" placeholder="0" endText="kg" />
                </div>
            </div>

            <br />
            <CodeBlock
                title="Code"
                language="Svelte"
                showLineNumbers
                collapsible
                maxHeight="250px"
                variant="default"
                code={textAddonsDocs}
            />
        </Card>

        <!-- Button Addons -->
        <Card variant="outline" class="p-6">
            <h2 class="text-2xl font-semibold mb-4">Button Addons</h2>
            <p class="text-sm text-muted-foreground mb-4">
                Add interactive buttons for actions
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <!-- Copy Button -->
                <div class="space-y-2">
                    <Label class="text-sm font-medium">Share URL</Label>
                    <Input bind:value={urlValue} readonly>
                        {#snippet endButton()}
                            <InputGroupButton
                                size="icon-xs"
                                onclick={handleCopy}
                                aria-labelledby="Copy URL"
                            >
                                {#if copiedUrl}
                                    <Check class="size-4 text-green-500" />
                                {:else}
                                    <Copy class="size-4" />
                                {/if}
                            </InputGroupButton>
                        {/snippet}
                    </Input>
                </div>

                <!-- Search Button -->
                <div class="space-y-2">
                    <Label class="text-sm font-medium">Search</Label>
                    <Input placeholder="Type to search...">
                        {#snippet startIcon()}
                            <Search class="size-4" />
                        {/snippet}
                        {#snippet endButton()}
                            <InputGroupButton size="xs" variant="default">
                                Search
                            </InputGroupButton>
                        {/snippet}
                    </Input>
                </div>

                <!-- Send Message -->
                <div class="space-y-2">
                    <Label class="text-sm font-medium">Quick Message</Label>
                    <Input
                        bind:value={messageValue}
                        placeholder="Type your message..."
                    >
                        {#snippet endButton()}
                            <InputGroupButton
                                size="icon-xs"
                                variant="default"
                                onclick={handleSend}
                                disabled={!messageValue}
                                aria-labelledby="Send message"
                            >
                                <Send class="size-4" />
                            </InputGroupButton>
                        {/snippet}
                    </Input>
                </div>

                <!-- Clear Button -->
                <div class="space-y-2">
                    <Label class="text-sm font-medium">Clearable Input</Label>
                    <Input
                        bind:value={searchValue}
                        placeholder="Type something..."
                    >
                        {#if searchValue}
                            {#snippet endButton()}
                                <InputGroupButton
                                    size="icon-xs"
                                    variant="ghost"
                                    onclick={() => (searchValue = "")}
                                    aria-labelledby="Clear"
                                >
                                    <span class="text-lg">×</span>
                                </InputGroupButton>
                            {/snippet}
                        {/if}
                    </Input>
                </div>
            </div>

            <br />
            <CodeBlock
                title="Code"
                language="Svelte"
                showLineNumbers
                collapsible
                maxHeight="250px"
                variant="default"
                code={buttonAddonsDocs}
            />
        </Card>

        <!-- Input Masks -->
        <Card variant="outline" class="p-6">
            <h2 class="text-2xl font-semibold mb-4">Input Masks</h2>
            <p class="text-sm text-muted-foreground mb-4">
                Automatic formatting with input masks
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <!-- Phone -->
                <div class="space-y-2">
                    <Label class="text-sm font-medium">Phone Number</Label>
                    <Input mask="phone" placeholder="(555) 555-5555">
                        {#snippet startIcon()}
                            <Phone class="size-4" />
                        {/snippet}
                    </Input>
                </div>

                <!-- Credit Card -->
                <div class="space-y-2">
                    <Label class="text-sm font-medium">Credit Card</Label>
                    <Input mask="creditCard" placeholder="1234 5678 9012 3456">
                        {#snippet startIcon()}
                            <CreditCard class="size-4" />
                        {/snippet}
                    </Input>
                </div>

                <!-- SSN -->
                <div class="space-y-2">
                    <Label class="text-sm font-medium">SSN</Label>
                    <Input mask="ssn" placeholder="123-45-6789" />
                </div>

                <!-- Date -->
                <div class="space-y-2">
                    <Label class="text-sm font-medium">Date</Label>
                    <Input mask="date" placeholder="MM/DD/YYYY" />
                </div>
            </div>

            <br />
            <CodeBlock
                title="Code"
                language="Svelte"
                showLineNumbers
                collapsible
                maxHeight="250px"
                variant="default"
                code={inputMasksDocs}
            />
        </Card>

        <!-- Combined Features -->
        <Card variant="outline" class="p-6">
            <h2 class="text-2xl font-semibold mb-4">Combined Features</h2>
            <p class="text-sm text-muted-foreground mb-4">
                Mix addons with masks and other features
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <!-- Phone with Icon and Mask -->
                <div class="space-y-2">
                    <Label class="text-sm font-medium">Contact Number</Label>
                    <Input mask="phone" placeholder="(555) 555-5555">
                        {#snippet startIcon()}
                            <Phone class="size-4" />
                        {/snippet}
                        {#snippet endButton()}
                            <InputGroupButton size="icon-xs" variant="ghost">
                                <Copy class="size-4" />
                            </InputGroupButton>
                        {/snippet}
                    </Input>
                </div>

                <!-- Price with Icons and Text -->
                <div class="space-y-2">
                    <Label class="text-sm font-medium">Secure Payment</Label>
                    <Input type="number" placeholder="0.00" startText="$">
                        {#snippet endIcon()}
                            <Lock class="size-4 text-green-600" />
                        {/snippet}
                        {#snippet endText()}
                            <span class="text-xs text-muted-foreground"
                                >Secure</span
                            >
                        {/snippet}
                    </Input>
                </div>
            </div>

            <br />
            <CodeBlock
                title="Code"
                language="Svelte"
                showLineNumbers
                collapsible
                maxHeight="250px"
                variant="default"
                code={combinedFeaturesDocs}
            />
        </Card>

        <!-- States -->
        <Card variant="outline" class="p-6">
            <h2 class="text-2xl font-semibold mb-4">Input States</h2>
            <p class="text-sm text-muted-foreground mb-4">
                Different input states with addons
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <!-- Error State -->
                <div class="space-y-2">
                    <Label class="text-sm font-medium">Error State</Label>
                    <Input
                        value="invalid@"
                        error={true}
                        placeholder="Enter email"
                    >
                        {#snippet startIcon()}
                            <Mail class="size-4" />
                        {/snippet}
                    </Input>
                    <p class="text-xs text-destructive">
                        Please enter a valid email address
                    </p>
                </div>

                <!-- Disabled State -->
                <div class="space-y-2">
                    <Label class="text-sm font-medium">Disabled State</Label>
                    <Input value="Disabled input" disabled>
                        {#snippet startIcon()}
                            <Lock class="size-4" />
                        {/snippet}
                    </Input>
                </div>

                <!-- Readonly State -->
                <div class="space-y-2">
                    <Label class="text-sm font-medium">Readonly State</Label>
                    <Input value="Read-only value" readonly>
                        {#snippet endIcon()}
                            <Eye class="size-4" />
                        {/snippet}
                    </Input>
                </div>
            </div>

            <br />
            <CodeBlock
                title="Code"
                language="Svelte"
                showLineNumbers
                collapsible
                maxHeight="250px"
                variant="default"
                code={inputStatesDocs}
            />
        </Card>

        <!-- Custom Addons -->
        <Card variant="outline" class="p-6">
            <h2 class="text-2xl font-semibold mb-4">Custom Addons</h2>
            <p class="text-sm text-muted-foreground mb-4">
                Use custom snippets for complete control
            </p>

            <div class="grid grid-cols-1 gap-6 max-w-2xl">
                <div class="space-y-2">
                    <Label class="text-sm font-medium">Custom Start Addon</Label
                    >
                    <Input placeholder="Enter value">
                        {#snippet startAddon()}
                            <div class="flex items-center gap-2">
                                <div
                                    class="size-2 rounded-full bg-green-500 animate-pulse"
                                ></div>
                                <span class="text-xs font-medium">Live</span>
                            </div>
                        {/snippet}
                    </Input>
                </div>

                <div class="space-y-2">
                    <Label class="text-sm font-medium">Custom End Addon</Label>
                    <Input placeholder="Type your message...">
                        {#snippet endAddon()}
                            <div class="flex items-center gap-1">
                                <InputGroupButton
                                    size="icon-xs"
                                    variant="ghost"
                                >
                                    <span>😀</span>
                                </InputGroupButton>
                                <InputGroupButton
                                    size="icon-xs"
                                    variant="default"
                                >
                                    <Send class="size-4" />
                                </InputGroupButton>
                            </div>
                        {/snippet}
                    </Input>
                </div>
            </div>

            <br />
            <CodeBlock
                title="Code"
                language="Svelte"
                showLineNumbers
                collapsible
                maxHeight="250px"
                variant="default"
                code={customAddonsDocs}
            />
        </Card>

        <!-- With Field Component -->
        <Card variant="outline" class="p-6">
            <h2 class="text-2xl font-semibold mb-4">
                Using Input with Field Component
            </h2>
            <p class="text-sm text-muted-foreground mb-4">
                Recommended pattern for forms with labels, descriptions, and
                error handling
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <Field
                    label="Email"
                    description="We'll never share your email"
                    required
                    error={errors.email}
                >
                    <Input
                        type="email"
                        bind:value={formData.email}
                        placeholder="you@example.com"
                        error={!!errors.email}
                    >
                        {#snippet startIcon()}
                            <Mail class="size-4" />
                        {/snippet}
                    </Input>
                </Field>

                <Field
                    label="Username"
                    description="Choose a unique username"
                    required
                    error={errors.username}
                >
                    <Input
                        bind:value={formData.username}
                        placeholder="johndoe"
                        error={!!errors.username}
                    >
                        {#snippet startIcon()}
                            <User class="size-4" />
                        {/snippet}
                    </Input>
                </Field>

                <Field
                    label="Password"
                    description="Must be at least 8 characters"
                    required
                    error={errors.password}
                >
                    <Input
                        type={showFormPassword ? "text" : "password"}
                        bind:value={formData.password}
                        placeholder="••••••••"
                        error={!!errors.password}
                    >
                        {#snippet startIcon()}
                            <Lock class="size-4" />
                        {/snippet}
                        {#snippet endButton()}
                            <InputGroupButton
                                size="icon-xs"
                                variant="ghost"
                                onclick={() =>
                                    (showFormPassword = !showFormPassword)}
                            >
                                {#if showFormPassword}
                                    <EyeOff class="size-4" />
                                {:else}
                                    <Eye class="size-4" />
                                {/if}
                            </InputGroupButton>
                        {/snippet}
                    </Input>
                </Field>

                <Field
                    label="Phone Number"
                    description="Enter your phone number"
                >
                    <Input
                        bind:value={formData.phone}
                        mask="phone"
                        placeholder="(555) 555-5555"
                    >
                        {#snippet startIcon()}
                            <Phone class="size-4" />
                        {/snippet}
                    </Input>
                </Field>

                <Field
                    label="Price"
                    description="Enter the product price"
                >
                    <Input
                        type="number"
                        bind:value={formData.price}
                        placeholder="0.00"
                        startText="$"
                        endText="USD"
                    />
                </Field>

                <Field
                    label="API Key"
                    description="Your secret API key (read-only)"
                >
                    <Input value={formData.apiKey} readonly>
                        {#snippet endButton()}
                            <InputGroupButton
                                size="icon-xs"
                                onclick={() =>
                                    navigator.clipboard.writeText(
                                        formData.apiKey,
                                    )}
                            >
                                <Copy class="size-4" />
                            </InputGroupButton>
                        {/snippet}
                    </Input>
                </Field>
            </div>

            <div class="mt-6">
                <Button onclick={validateForm}>Validate Form</Button>
            </div>

            <br />
            <CodeBlock
                title="Code"
                language="Svelte"
                showLineNumbers
                collapsible
                maxHeight="250px"
                variant="default"
                code={withFieldDocs}
            />
        </Card>

        <!-- Complete Form Example -->
        <Card variant="outline" class="p-6">
            <h2 class="text-2xl font-semibold mb-4">
                Complete Form with Field Component
            </h2>
            <p class="text-sm text-muted-foreground mb-4">
                Full form using Field.Set and Field.Group for proper structure
            </p>

            <form
                class="max-w-2xl"
                onsubmit={(e) => {
                    e.preventDefault();
                    validateForm();
                }}
            >
                <FieldPrimitives.Set>
                    <FieldPrimitives.Legend>Create Account</FieldPrimitives.Legend>
                    <FieldPrimitives.Description>
                        Enter your details to create a new account
                    </FieldPrimitives.Description>

                    <FieldPrimitives.Separator />
                    <FieldPrimitives.Group class="gap-6">
                        <Field
                            label="Email Address"
                            description="We'll send a verification email"
                            required
                            error={errors.email}
                        >
                            <Input
                                type="email"
                                bind:value={formData.email}
                                placeholder="you@example.com"
                                error={!!errors.email}
                            >
                                {#snippet startIcon()}
                                    <Mail class="size-4" />
                                {/snippet}
                            </Input>
                        </Field>

                        <Field
                            label="Username"
                            description="Choose a unique username (3-20 characters)"
                            required
                            error={errors.username}
                        >
                            <Input
                                bind:value={formData.username}
                                placeholder="johndoe"
                                error={!!errors.username}
                                minlength={3}
                                maxlength={20}
                            >
                                {#snippet startIcon()}
                                    <User class="size-4" />
                                {/snippet}
                            </Input>
                        </Field>

                        <Field
                            label="Password"
                            description="Must be at least 8 characters with a mix of letters and numbers"
                            required
                            error={errors.password}
                        >
                            <Input
                                type={showFormPassword ? "text" : "password"}
                                bind:value={formData.password}
                                placeholder="••••••••"
                                error={!!errors.password}
                            >
                                {#snippet startIcon()}
                                    <Lock class="size-4" />
                                {/snippet}
                                {#snippet endButton()}
                                    <InputGroupButton
                                        size="icon-xs"
                                        variant="ghost"
                                        onclick={() =>
                                            (showFormPassword =
                                                !showFormPassword)}
                                        aria-label={showFormPassword
                                            ? "Hide password"
                                            : "Show password"}
                                    >
                                        {#if showFormPassword}
                                            <EyeOff class="size-4" />
                                        {:else}
                                            <Eye class="size-4" />
                                        {/if}
                                    </InputGroupButton>
                                {/snippet}
                            </Input>
                        </Field>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Field
                                label="Phone Number"
                                description="For account verification"
                            >
                                <Input
                                    bind:value={formData.phone}
                                    mask="phone"
                                    placeholder="(555) 555-5555"
                                >
                                    {#snippet startIcon()}
                                        <Phone class="size-4" />
                                    {/snippet}
                                </Input>
                            </Field>

                            <Field
                                label="Credit Card"
                                description="Payment information"
                            >
                                <Input
                                    mask="creditCard"
                                    placeholder="1234 5678 9012 3456"
                                >
                                    {#snippet startIcon()}
                                        <CreditCard class="size-4" />
                                    {/snippet}
                                </Input>
                            </Field>
                        </div>
                    </FieldPrimitives.Group>

                    <div class="flex gap-4 pt-4">
                        <Button type="submit">Create Account</Button>
                        <Button type="button" variant="outline">Cancel</Button>
                    </div>
                </FieldPrimitives.Set>
            </form>

            <br />
            <CodeBlock
                title="Code"
                language="Svelte"
                showLineNumbers
                collapsible
                maxHeight="250px"
                variant="default"
                code={completeFormDocs}
            />
        </Card>
    </div>
</div>
