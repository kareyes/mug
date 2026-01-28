<script lang="ts">

    import type { DateValue } from "@internationalized/date";
    import {
        Button,
        Input,
        Textarea,
        Checkbox,
        CheckboxPrimitives,
        RadioGroup,
        RadioGroupPrimitives,
        Switch,
        Select,
        Card,
        Slider,
        InputOTP,
        NumberSpinner,
        FileInput,
        Field,
        FieldPrimitives,
        CodeBlock,
        DatePicker,
        CheckboxGroup,
    } from "@kareyes/aether";

    type CheckboxGroupOption = CheckboxPrimitives.CheckboxGroupOption;
    type RadioGroupOption = RadioGroupPrimitives.RadioGroupOption;

    import {
        completeFormDocs,
        inputVariantsDocs,
        inputSizesDocs,
        inputMasksDocs,
        textareaVariantsDocs,
        checkboxVariantsDocs,
        checkboxGroupDocs,
        radioGroupDocs,
        switchVariantsDocs,
        horizontalLayoutsDocs,
        errorStatesDocs,
        cardVariantsDocs,
        sliderFieldDocs,
        inputOtpFieldDocs,
        numberSpinnerFieldDocs,
        fileInputFieldDocs,
        datePickerFieldDocs,
        labelPositionDocs,
        completeOrderFormDocs,
    } from "$lib/code-blocks/field";

    // Form state
    let username = $state("");
    let email = $state("");
    let password = $state("");
    let bio = $state("");
    let country = $state("");
    let newsletter = $state(false);
    let notifications = $state(true);
    let plan = $state("");

    // Additional state for variant demos
    let phone = $state("");
    let ssn = $state("");
    let description = $state("");
    let agreeToTerms = $state(false);
    let darkMode = $state(false);

    // Label position demo state
    let acceptTerms = $state(false);
    let enableNotifications = $state(false);
    let subscribeNewsletter = $state(false);
    let receiveMarketing = $state(false);

    // CheckboxGroup state
    let selectedFeatures = $state<string[]>([]);
    let selectedPreferences = $state<string[]>(["email"]);
    let selectedPermissions = $state<string[]>([]);

    // RadioGroup state
    let selectedPlan = $state("basic");
    let selectedTheme = $state("light");
    let selectedNotification = $state("email");
    let selectedPayment = $state("");
    let selectedSize = $state("medium");
    let selectedCluster = $state("kubernetes");

    // Additional form component state
    let volume = $state(50);
    let priceRange = $state([100, 500]);
    let otpCode = $state("");
    let quantity = $state(1);
    let deliveryDate = $state<DateValue | undefined>(undefined);
    let uploadedFiles = $state<File[]>([]);
    let uploadedImages = $state<File[]>([]);

    // Validation state
    let errors = $state<Record<string, string>>({});

    // CheckboxGroup options
    const featureOptions: CheckboxGroupOption[] = [
        {
            id: "feature-api",
            label: "API Access",
            value: "api",
            description: "Access to REST API",
        },
        {
            id: "feature-analytics",
            label: "Analytics Dashboard",
            value: "analytics",
            description: "View detailed analytics",
        },
        {
            id: "feature-export",
            label: "Data Export",
            value: "export",
            description: "Export data to CSV/JSON",
        },
        {
            id: "feature-webhooks",
            label: "Webhooks",
            value: "webhooks",
            description: "Real-time event notifications",
        },
    ];

    const preferenceOptions: CheckboxGroupOption[] = [
        { id: "pref-email", label: "Email Updates", value: "email" },
        { id: "pref-sms", label: "SMS Notifications", value: "sms" },
        { id: "pref-push", label: "Push Notifications", value: "push" },
        {
            id: "pref-newsletter",
            label: "Monthly Newsletter",
            value: "newsletter",
        },
    ];

    const interestOptions: CheckboxGroupOption[] = [
        { id: "int-tech", label: "💻 Technology", value: "technology" },
        { id: "int-design", label: "🎨 Design", value: "design" },
        { id: "int-business", label: "📊 Business", value: "business" },
        { id: "int-marketing", label: "📢 Marketing", value: "marketing" },
    ];

    const permissionOptions: CheckboxGroupOption[] = [
        {
            id: "perm-read",
            label: "Read",
            value: "read",
            description: "View content",
        },
        {
            id: "perm-write",
            label: "Write",
            value: "write",
            description: "Create and edit content",
        },
        {
            id: "perm-delete",
            label: "Delete",
            value: "delete",
            description: "Remove content",
            disabled: true,
        },
        {
            id: "perm-admin",
            label: "Admin",
            value: "admin",
            description: "Full system access",
        },
    ];

    // RadioGroup options
    const planRadioOptions: RadioGroupOption[] = [
        {
            id: "radio-plan-free",
            label: "Free Plan",
            value: "free",
            description: "Basic features for personal use - $0/month",
        },
        {
            id: "radio-plan-basic",
            label: "Basic Plan",
            value: "basic",
            description: "Essential features for small teams - $9/month",
        },
        {
            id: "radio-plan-pro",
            label: "Pro Plan",
            value: "pro",
            description: "Advanced features for professionals - $29/month",
        },
        {
            id: "radio-plan-enterprise",
            label: "Enterprise Plan",
            value: "enterprise",
            description: "Full features for large organizations - $99/month",
        },
    ];

    const themeRadioOptions: RadioGroupOption[] = [
        {
            id: "radio-theme-light",
            label: "☀️ Light Theme",
            value: "light",
            description: "Bright and clear appearance",
        },
        {
            id: "radio-theme-dark",
            label: "🌙 Dark Theme",
            value: "dark",
            description: "Easy on the eyes at night",
        },
        {
            id: "radio-theme-auto",
            label: "🔄 Auto Theme",
            value: "auto",
            description: "Matches your system preferences",
        },
    ];

    const notificationRadioOptions: RadioGroupOption[] = [
        { id: "radio-notify-email", label: "Email", value: "email" },
        { id: "radio-notify-sms", label: "SMS", value: "sms" },
        { id: "radio-notify-push", label: "Push", value: "push" },
        { id: "radio-notify-none", label: "None", value: "none" },
    ];

    const paymentRadioOptions: RadioGroupOption[] = [
        {
            id: "radio-pay-credit",
            label: "Credit Card",
            value: "credit",
            description: "Visa, Mastercard, Amex",
        },
        {
            id: "radio-pay-paypal",
            label: "PayPal",
            value: "paypal",
            description: "Secure PayPal payment",
        },
        {
            id: "radio-pay-bank",
            label: "Bank Transfer",
            value: "bank",
            description: "Direct bank transfer",
            disabled: true,
        },
        {
            id: "radio-pay-crypto",
            label: "Cryptocurrency",
            value: "crypto",
            description: "Bitcoin, Ethereum",
        },
    ];

    const sizeRadioOptions: RadioGroupOption[] = [
        { id: "radio-size-xs", label: "Extra Small", value: "xs" },
        { id: "radio-size-sm", label: "Small", value: "small" },
        { id: "radio-size-md", label: "Medium", value: "medium" },
        { id: "radio-size-lg", label: "Large", value: "large" },
        { id: "radio-size-xl", label: "Extra Large", value: "xl" },
    ];

    const clusterRadioOptions: RadioGroupOption[] = [
        {
            id: "cluster-k8s",
            label: "Kubernetes",
            value: "kubernetes",
            description: "Run GPU workloads on a K8s configured cluster.",
        },
        {
            id: "cluster-vm",
            label: "Virtual Machine",
            value: "vm",
            description: "Access a VM configured cluster to run GPU workloads.",
        },
    ];

    // Form submission
    function handleSubmit(event: Event) {
        event.preventDefault();
        errors = {};

        // Simple validation
        if (!username) {
            errors.username = "Username is required";
        } else if (username.length < 3) {
            errors.username = "Username must be at least 3 characters";
        }

        if (!email) {
            errors.email = "Email is required";
        } else if (!email.includes("@")) {
            errors.email = "Please enter a valid email address";
        }

        if (!password) {
            errors.password = "Password is required";
        } else if (password.length < 8) {
            errors.password = "Password must be at least 8 characters";
        }

        if (!country) {
            errors.country = "Please select a country";
        }

        if (!plan) {
            errors.plan = "Please select a subscription plan";
        }

        // If no errors, show success
        if (Object.keys(errors).length === 0) {
            alert("Form submitted successfully!");
            console.log({
                username,
                email,
                password,
                bio,
                country,
                newsletter,
                notifications,
                plan,
            });
        }
    }

    function resetForm() {
        username = "";
        email = "";
        password = "";
        bio = "";
        country = "";
        newsletter = false;
        notifications = true;
        plan = "";
        errors = {};
    }

    const countries = [
        { value: "us", label: "United States" },
        { value: "uk", label: "United Kingdom" },
        { value: "ca", label: "Canada" },
        { value: "au", label: "Australia" },
        { value: "de", label: "Germany" },
        { value: "fr", label: "France" },
        { value: "jp", label: "Japan" },
        { value: "cn", label: "China" },
    ];

    const plans = [
        { value: "free", label: "Free - $0/month" },
        { value: "basic", label: "Basic - $9/month" },
        { value: "pro", label: "Pro - $29/month" },
        { value: "enterprise", label: "Enterprise - $99/month" },
    ];
</script>

<div class="container mx-auto p-6 max-w-6xl">
    <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Field Component</h1>
        <p class="text-muted-foreground">
            Simplified field component using slots for maximum flexibility. Pass
            any form control as a child.
        </p>
    </div>

    <div class="space-y-12">

    <!-- 1. Complete Form Example -->
    <Card variant="outline" class="p-6">
        <h2 class="text-2xl font-semibold mb-4">Complete Form Example</h2>
        <p class="text-sm text-muted-foreground mb-4">
            A full form using Field with form controls passed as
            slots.
        </p>

        <form onsubmit={handleSubmit} class="rounded-lg border bg-card p-6">
            <FieldPrimitives.Set>
                <FieldPrimitives.Legend>Account Information</FieldPrimitives.Legend>
                <FieldPrimitives.Description>
                    Create your account by filling out the information below.
                </FieldPrimitives.Description>

                <FieldPrimitives.Separator />

                <FieldPrimitives.Group class="gap-6">
                    <!-- Username Input -->
                    <Field
                        label="Username"
                        description="Choose a unique username for your account."
                        required
                        error={errors.username}
                    >
                        <Input
                            id="username"
                            error={!!errors.username}
                            bind:value={username}
                            placeholder="johndoe"
                            required
                        />
                    </Field>

                    <!-- Email Input -->
                    <Field
                        label="Email"
                        description="We'll never share your email with anyone."
                        required
                        error={errors.email}
                    >
                        <Input
                            id="email"
                            error={!!errors.email}
                            type="email"
                            bind:value={email}
                            placeholder="you@example.com"
                            required
                        />
                    </Field>

                    <!-- Password Input -->
                    <Field
                        label="Password"
                        description="Must be at least 8 characters long."
                        required
                        error={errors.password}
                    >
                        <Input
                            id="password"
                            error={!!errors.password}
                            type="password"
                            bind:value={password}
                            placeholder="••••••••"
                            required
                        />
                    </Field>

                    <!-- Bio Textarea -->
                    <Field
                        label="Bio"
                        description="Tell us a little about yourself."
                    >
                        <Textarea
                            id="bio"
                            bind:value={bio}
                            placeholder="I am a..."
                            rows={4}
                        />
                    </Field>

                    <!-- Country Select -->
                    <Field
                        label="Country"
                        description="Select your country of residence."
                        required
                        error={errors.country}
                    >
                        <Select
                            bind:value={country}
                            placeholder="Select a country..."
                            options={countries}
                            error={!!errors.country}
                        />
                    </Field>
                </FieldPrimitives.Group>
            </FieldPrimitives.Set>

            <FieldPrimitives.Set>
                <FieldPrimitives.Legend>Preferences</FieldPrimitives.Legend>

                <FieldPrimitives.Group class="gap-4">
                    <!-- Newsletter Checkbox -->
                    <Field
                        label="Newsletter subscription"
                        description="Receive weekly updates about new features."
                        orientation="horizontal"
                    >
                        <Checkbox id="newsletter" bind:checked={newsletter} />
                    </Field>

                    <!-- Notifications Switch -->
                    <Field
                        label="Enable notifications"
                        description="Get notified about important updates."
                        orientation="horizontal"
                    >
                        <Switch
                            id="notifications"
                            bind:checked={notifications}
                        />
                    </Field>
                </FieldPrimitives.Group>
            </FieldPrimitives.Set>

            <FieldPrimitives.Set>
                <FieldPrimitives.Legend>Subscription Plan</FieldPrimitives.Legend>
                <FieldPrimitives.Description
                    >Choose the plan that works best for you.</FieldPrimitives.Description
                >

                <FieldPrimitives.Separator />

                <FieldPrimitives.Group>
                    <Field
                        label="Plan"
                        description="Select your subscription tier."
                        required
                        error={errors.plan}
                    >
                        <Select
                            bind:value={plan}
                            required
                            options={plans}
                            placeholder="Select a plan..."
                            error={!!errors.plan}
                        />
                    </Field>
                </FieldPrimitives.Group>
            </FieldPrimitives.Set>

            <div class="flex gap-4">
                <Button type="submit">Submit</Button>
                <Button type="button" variant="outline" onclick={resetForm}
                    >Reset</Button
                >
            </div>
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

    <!-- 2. Input Variants -->
    <Card variant="outline" class="p-6">
        <h2 class="text-2xl font-semibold mb-4">Input Variants</h2>
        <p class="text-sm text-muted-foreground mb-4">
            Different visual styles for input fields
        </p>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
                <Field label="Default Variant">
                    <Input
                        id="input-default"
                        placeholder="Default style"
                        variant="default"
                    />
                </Field>
            </Card>

            <Card>
                <Field label="Outline Variant">
                    <Input
                        id="input-outline"
                        placeholder="Outline style"
                        variant="outline"
                    />
                </Field>
            </Card>

            <Card>
                <Field label="Filled Variant">
                    <Input
                        id="input-filled"
                        placeholder="Filled style"
                        variant="filled"
                    />
                </Field>
            </Card>

            <Card>
                <Field label="Ghost Variant">
                    <Input
                        id="input-ghost"
                        placeholder="Ghost style"
                        variant="ghost"
                    />
                </Field>
            </Card>

            <Card>
                <Field label="Underline Variant">
                    <Input
                        id="input-underline"
                        placeholder="Underline style"
                        variant="underline"
                    />
                </Field>
            </Card>
        </div>
        <br />
        <CodeBlock
            title="Code"
            language="Svelte"
            showLineNumbers
            collapsible
            maxHeight="250px"
            variant="default"
            code={inputVariantsDocs}
        />
    </Card>

    <!-- 3. Input Sizes -->
    <Card variant="outline" class="p-6">
        <h2 class="text-2xl font-semibold mb-4">Input Sizes</h2>
        <p class="text-sm text-muted-foreground mb-4">
            Different size options for input fields
        </p>

        <div class="grid gap-6 md:grid-cols-3">
            <Card>
                <Field label="Small Size">
                    <Input id="input-sm" placeholder="Small input" size="sm" />
                </Field>
            </Card>

            <Card>
                <Field label="Default Size">
                    <Input
                        id="input-default-size"
                        placeholder="Default input"
                        size="default"
                    />
                </Field>
            </Card>

            <Card>
                <Field label="Large Size">
                    <Input id="input-lg" placeholder="Large input" size="lg" />
                </Field>
            </Card>
        </div>
        <br />
        <CodeBlock
            title="Code"
            language="Svelte"
            showLineNumbers
            collapsible
            maxHeight="250px"
            variant="default"
            code={inputSizesDocs}
        />
    </Card>

    <!-- 4. Input Masks -->
    <Card variant="outline" class="p-6">
        <h2 class="text-2xl font-semibold mb-4">Input Masks</h2>
        <p class="text-sm text-muted-foreground mb-4">
            Formatted input fields with automatic masking
        </p>

        <div class="grid gap-6 md:grid-cols-2">
            <Card>
                <Field label="Phone Number">
                    <Input
                        id="phone-mask"
                        bind:value={phone}
                        placeholder="(555) 555-5555"
                        mask="phone"
                    />
                </Field>
            </Card>

            <Card>
                <Field label="Social Security Number">
                    <Input
                        id="ssn-mask"
                        bind:value={ssn}
                        placeholder="***-**-****"
                        mask="ssn"
                    />
                </Field>
            </Card>

            <Card>
                <Field label="Credit Card">
                    <Input
                        id="creditcard-mask"
                        placeholder="**** **** **** ****"
                        mask="creditCard"
                    />
                </Field>
            </Card>

            <Card>
                <Field label="Date">
                    <Input
                        id="date-mask"
                        placeholder="MM/DD/YYYY"
                        mask="date"
                    />
                </Field>
            </Card>
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

    <!-- 5. Textarea Variants & Features -->
    <Card variant="outline" class="p-6">
        <h2 class="text-2xl font-semibold mb-4">Textarea Variants & Features</h2>
        <p class="text-sm text-muted-foreground mb-4">
            Different styles and features for textarea fields
        </p>

        <div class="grid gap-6 md:grid-cols-2">
            <Card>
                <Field label="Default Textarea">
                    <Textarea
                        id="textarea-default"
                        placeholder="Enter your text..."
                        variant="default"
                    />
                </Field>
            </Card>

            <Card>
                <Field label="Outline Textarea">
                    <Textarea
                        id="textarea-outline"
                        placeholder="Enter your text..."
                        variant="outline"
                    />
                </Field>
            </Card>

            <Card>
                <Field
                    label="With Character Counter"
                    description="Maximum 200 characters"
                >
                    <Textarea
                        id="textarea-counter"
                        bind:value={description}
                        placeholder="Enter your text..."
                        maxLength={200}
                        showCount
                    />
                </Field>
            </Card>

            <Card>
                <Field
                    label="Auto-Resize"
                    description="Automatically grows with content"
                >
                    <Textarea
                        id="textarea-autoresize"
                        placeholder="Start typing..."
                        autoResize
                        minRows={2}
                        maxRows={6}
                    />
                </Field>
            </Card>

            <Card>
                <Field label="Vertical Resize">
                    <Textarea
                        id="textarea-resize-vertical"
                        placeholder="Resize vertically only"
                        resize="vertical"
                    />
                </Field>
            </Card>

            <Card>
                <Field label="No Resize">
                    <Textarea
                        id="textarea-resize-none"
                        placeholder="Cannot be resized"
                        resize="none"
                    />
                </Field>
            </Card>
        </div>
        <br />
        <CodeBlock
            title="Code"
            language="Svelte"
            showLineNumbers
            collapsible
            maxHeight="250px"
            variant="default"
            code={textareaVariantsDocs}
        />
    </Card>

    <!-- 6. Checkbox Variants & Sizes -->
    <Card variant="outline" class="p-6">
        <h2 class="text-2xl font-semibold mb-4">Checkbox Variants & Sizes</h2>
        <p class="text-sm text-muted-foreground mb-4">
            Different styles and sizes for checkbox fields
        </p>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <Field label="Default Variant" orientation="horizontal">
                    <Checkbox id="checkbox-default-variant" variant="default" />
                </Field>
            </Card>

            <Card>
                <Field
                    label="Destructive Variant"
                    orientation="horizontal"
                >
                    <Checkbox id="checkbox-destructive" variant="destructive" />
                </Field>
            </Card>

            <Card>
                <Field label="Success Variant" orientation="horizontal">
                    <Checkbox id="checkbox-success" variant="success" />
                </Field>
            </Card>

            <Card>
                <Field label="Warning Variant" orientation="horizontal">
                    <Checkbox id="checkbox-warning" variant="warning" />
                </Field>
            </Card>
        </div>

        <div class="grid gap-6 md:grid-cols-4 mt-6">
            <Card>
                <Field label="Small Size" orientation="horizontal">
                    <Checkbox id="checkbox-sm" size="sm" />
                </Field>
            </Card>

            <Card>
                <Field label="Default Size" orientation="horizontal">
                    <Checkbox id="checkbox-default-size" size="default" />
                </Field>
            </Card>

            <Card>
                <Field label="Large Size" orientation="horizontal">
                    <Checkbox id="checkbox-lg" size="lg" />
                </Field>
            </Card>

            <Card>
                <Field label="Extra Large" orientation="horizontal">
                    <Checkbox id="checkbox-xl" size="xl" />
                </Field>
            </Card>
        </div>
        <br />
        <CodeBlock
            title="Code"
            language="Svelte"
            showLineNumbers
            collapsible
            maxHeight="250px"
            variant="default"
            code={checkboxVariantsDocs}
        />
    </Card>

    <!-- 7. CheckboxGroup with Field Component -->
    <Card variant="outline" class="p-6">
        <h2 class="text-2xl font-semibold mb-4">
            CheckboxGroup with Field Component
        </h2>
        <p class="text-sm text-muted-foreground mb-4">
            Multiple checkbox selection with Field wrapper for labels,
            descriptions, and error handling
        </p>

        <div class="space-y-8">
            <!-- Basic CheckboxGroup -->
            <Card>
                <Field
                    label="Select Features"
                    description="Choose the features you want to enable for your account."
                >
                    <CheckboxGroup
                        options={featureOptions}
                        bind:values={selectedFeatures}
                    />
                </Field>
                <div class="mt-4 rounded-md bg-muted p-3">
                    <p class="text-sm font-medium">
                        Selected: {selectedFeatures.length > 0
                            ? selectedFeatures.join(", ")
                            : "None"}
                    </p>
                </div>
            </Card>

            <!-- CheckboxGroup Orientations -->
            <div class="grid gap-6 md:grid-cols-2">
                <Card>
                    <Field
                        label="Vertical Layout"
                        description="Default vertical orientation"
                    >
                        <CheckboxGroup
                            options={interestOptions}
                            values={[]}
                            orientation="vertical"
                        />
                    </Field>
                </Card>

                <Card>
                    <Field
                        label="Horizontal Layout"
                        description="Horizontal orientation for inline display"
                    >
                        <CheckboxGroup
                            options={interestOptions}
                            values={[]}
                            orientation="horizontal"
                        />
                    </Field>
                </Card>
            </div>

            <!-- CheckboxGroup with Error State -->
            <Card>
                <Field
                    label="User Permissions"
                    description="Select at least one permission to continue."
                    required
                    error={selectedPermissions.length === 0
                        ? "Please select at least one permission"
                        : undefined}
                >
                    <CheckboxGroup
                        options={permissionOptions}
                        bind:values={selectedPermissions}
                        error={selectedPermissions.length === 0}
                        required
                    />
                </Field>
                <div class="mt-4 rounded-md bg-muted p-3">
                    <p class="text-sm font-medium">
                        Selected: {selectedPermissions.length > 0
                            ? selectedPermissions.join(", ")
                            : "None"}
                    </p>
                </div>
            </Card>

            <!-- CheckboxGroup in Form Context -->
            <Card class="bg-muted/50">
                <FieldPrimitives.Set>
                    <FieldPrimitives.Legend>Account Setup</FieldPrimitives.Legend>
                    <FieldPrimitives.Description
                        >Configure your account features and preferences</FieldPrimitives.Description
                    >

                    <FieldPrimitives.Separator />

                    <FieldPrimitives.Group class="gap-6">
                        <Field
                            label="Enable Features"
                            description="Select the features you want to use"
                        >
                            <CheckboxGroup
                                options={featureOptions}
                                bind:values={selectedFeatures}
                                size="default"
                            />
                        </Field>

                        <Field
                            label="Communication Preferences"
                            description="How should we contact you?"
                        >
                            <CheckboxGroup
                                options={preferenceOptions}
                                bind:values={selectedPreferences}
                                variant="default"
                            />
                        </Field>
                    </FieldPrimitives.Group>
                </FieldPrimitives.Set>
            </Card>
        </div>
        <br />
        <CodeBlock
            title="Code"
            language="Svelte"
            showLineNumbers
            collapsible
            maxHeight="250px"
            variant="default"
            code={checkboxGroupDocs}
        />
    </Card>

    <!-- 8. RadioGroup with Field Component -->
    <Card variant="outline" class="p-6">
        <h2 class="text-2xl font-semibold mb-4">RadioGroup with Field Component</h2>
        <p class="text-sm text-muted-foreground mb-4">
            Single selection radio groups with Field wrapper for labels,
            descriptions, and error handling
        </p>

        <div class="space-y-8">
            <!-- Basic RadioGroup -->
            <Card>
                <Field
                    label="Choose Your Plan"
                    description="Select the subscription plan that best fits your needs."
                >
                    <RadioGroup
                        options={planRadioOptions}
                        bind:value={selectedPlan}
                    />
                </Field>
                <div class="mt-4 rounded-md bg-muted p-3">
                    <p class="text-sm font-medium">
                        Selected: {selectedPlan || "None"}
                    </p>
                </div>
            </Card>

            <!-- RadioGroup with Default Value -->
            <Card>
                <Field
                    label="Theme Preference"
                    description="Choose your preferred color theme."
                >
                    <RadioGroup
                        options={themeRadioOptions}
                        bind:value={selectedTheme}
                    />
                </Field>
                <div class="mt-4 rounded-md bg-muted p-3">
                    <p class="text-sm font-medium">Selected: {selectedTheme}</p>
                </div>
            </Card>

            <!-- RadioGroup Orientations -->
            <div class="grid gap-6 md:grid-cols-2">
                <Card>
                    <Field
                        label="Vertical Layout"
                        description="Default vertical orientation"
                    >
                        <RadioGroup
                            options={themeRadioOptions}
                            value="light"
                            orientation="vertical"
                        />
                    </Field>
                </Card>

                <Card>
                    <Field
                        label="Horizontal Layout"
                        description="Horizontal orientation for inline display"
                    >
                        <RadioGroup
                            options={notificationRadioOptions}
                            value="email"
                            orientation="horizontal"
                        />
                    </Field>
                </Card>
            </div>

            <!-- RadioGroup with Error State -->
            <Card>
                <Field
                    label="Payment Method"
                    description="Select your preferred payment method."
                    required
                    error={!selectedPayment
                        ? "Please select a payment method"
                        : undefined}
                >
                    <RadioGroup
                        options={paymentRadioOptions}
                        bind:value={selectedPayment}
                        error={!selectedPayment}
                        required
                    />
                </Field>
                <div class="mt-4 rounded-md bg-muted p-3">
                    <p class="text-sm font-medium">
                        Selected: {selectedPayment || "None"}
                    </p>
                </div>
            </Card>

            <!-- RadioGroup in Form Context -->
            <Card class="bg-muted/50">
                <FieldPrimitives.Set>
                    <FieldPrimitives.Legend>Product Configuration</FieldPrimitives.Legend>
                    <FieldPrimitives.Description
                        >Configure your product preferences</FieldPrimitives.Description
                    >

                    <FieldPrimitives.Separator />

                    <FieldPrimitives.Group class="gap-6">
                        <Field
                            label="Select Size"
                            description="Choose your preferred size"
                        >
                            <RadioGroup
                                options={sizeRadioOptions}
                                bind:value={selectedSize}
                                radioSize="default"
                            />
                        </Field>

                        <Field
                            label="Notification Method"
                            description="How would you like to be notified?"
                        >
                            <RadioGroup
                                options={notificationRadioOptions}
                                bind:value={selectedNotification}
                                variant="default"
                            />
                        </Field>
                    </FieldPrimitives.Group>
                </FieldPrimitives.Set>
            </Card>

            <!-- Card-Style RadioGroup Example -->
            <Card>
                <Field
                    label="Select Cluster Type"
                    description="Choose how you want to run your GPU workloads."
                >
                    <RadioGroup
                        options={clusterRadioOptions}
                        bind:value={selectedCluster}
                        isCard={true}
                        radioSize="default"
                    />
                </Field>
                <div class="mt-4 rounded-md bg-muted p-3">
                    <p class="text-sm font-medium">
                        Selected: {selectedCluster}
                    </p>
                </div>
            </Card>
        </div>
        <br />
        <CodeBlock
            title="Code"
            language="Svelte"
            showLineNumbers
            collapsible
            maxHeight="250px"
            variant="default"
            code={radioGroupDocs}
        />
    </Card>

    <!-- 9. Switch Variants & Sizes -->
    <Card variant="outline" class="p-6">
        <h2 class="text-2xl font-semibold mb-4">Switch Variants & Sizes</h2>
        <p class="text-sm text-muted-foreground mb-4">
            Different styles and sizes for switch fields
        </p>

        <div class="grid gap-6 md:grid-cols-2">
            <Card>
                <Field
                    label="Default Variant"
                    description="Standard switch style"
                    orientation="horizontal"
                >
                    <Switch id="switch-default-variant" variant="default" />
                </Field>
            </Card>

            <Card>
                <Field
                    label="Success Variant"
                    description="Success-themed switch"
                    orientation="horizontal"
                >
                    <Switch id="switch-success" variant="success" />
                </Field>
            </Card>
        </div>

        <div class="grid gap-6 md:grid-cols-3 mt-6">
            <Card>
                <Field label="Small Size" orientation="horizontal">
                    <Switch id="switch-sm" size="sm" />
                </Field>
            </Card>

            <Card>
                <Field label="Default Size" orientation="horizontal">
                    <Switch id="switch-default-size" size="default" />
                </Field>
            </Card>

            <Card>
                <Field label="Large Size" orientation="horizontal">
                    <Switch id="switch-lg" size="lg" />
                </Field>
            </Card>
        </div>
        <br />
        <CodeBlock
            title="Code"
            language="Svelte"
            showLineNumbers
            collapsible
            maxHeight="250px"
            variant="default"
            code={switchVariantsDocs}
        />
    </Card>

    <!-- 10. Horizontal Layouts -->
    <Card variant="outline" class="p-6">
        <h2 class="text-2xl font-semibold mb-4">Horizontal Layouts</h2>
        <p class="text-sm text-muted-foreground mb-4">
            Fields with horizontal orientation
        </p>

        <div class="grid gap-6">
            <Card>
                <Field
                    label="Email notifications"
                    description="Receive updates via email"
                    orientation="horizontal"
                >
                    <Switch id="email-notifications" />
                </Field>
            </Card>

            <Card>
                <Field
                    label="I agree to terms"
                    description="You must agree to continue"
                    orientation="horizontal"
                >
                    <Checkbox id="agree-terms" bind:checked={agreeToTerms} />
                </Field>
            </Card>

            <Card>
                <Field
                    label="Dark mode"
                    description="Toggle dark mode theme"
                    orientation="horizontal"
                >
                    <Switch
                        id="dark-mode"
                        bind:checked={darkMode}
                        variant="success"
                    />
                </Field>
            </Card>
        </div>
        <br />
        <CodeBlock
            title="Code"
            language="Svelte"
            showLineNumbers
            collapsible
            maxHeight="250px"
            variant="default"
            code={horizontalLayoutsDocs}
        />
    </Card>

    <!-- 11. Error States -->
    <Card variant="outline" class="p-6">
        <h2 class="text-2xl font-semibold mb-4">Error States</h2>
        <p class="text-sm text-muted-foreground mb-4">
            Fields displaying validation errors
        </p>

        <div class="grid gap-6 md:grid-cols-2">
            <Card>
                <Field
                    label="Username"
                    description="Enter a unique username"
                    error="This username is already taken"
                    required
                >
                    <Input id="error-input" placeholder="username" />
                </Field>
            </Card>

            <Card>
                <Field
                    label="Email"
                    error="Please enter a valid email address"
                    required
                >
                    <Input
                        id="error-email"
                        type="email"
                        placeholder="email@example.com"
                    />
                </Field>
            </Card>
        </div>
        <br />
        <CodeBlock
            title="Code"
            language="Svelte"
            showLineNumbers
            collapsible
            maxHeight="250px"
            variant="default"
            code={errorStatesDocs}
        />
    </Card>

    <!-- 12. Card Component Variants -->
    <Card variant="outline" class="p-6">
        <h2 class="text-2xl font-semibold mb-4">Card Component Variants</h2>
        <p class="text-sm text-muted-foreground mb-4">
            Different visual styles and configurations for the Card
            component
        </p>

        <!-- Card with Header Actions -->
        <div>
            <h3 class="text-xl font-semibold mb-4">Cards with Actions</h3>
            <div class="grid gap-6 md:grid-cols-2">
                <Card
                    title="User Profile"
                    description="Manage your profile settings"
                >
                    {#snippet headerAction()}
                        <Button variant="ghost" size="sm">Edit</Button>
                    {/snippet}
                    <Field label="Display Name">
                        <Input id="display-name" value="John Doe" />
                    </Field>
                </Card>

                <Card
                    title="Notification Settings"
                    description="Configure how you receive alerts"
                >
                    {#snippet headerAction()}
                        <Button variant="ghost" size="sm">Reset</Button>
                    {/snippet}
                    <Field
                        label="Email Notifications"
                        orientation="horizontal"
                    >
                        <Switch id="email-notif" checked />
                    </Field>
                </Card>
            </div>
        </div>

        <!-- Card with Footer -->
        <div class="mt-8">
            <h3 class="text-xl font-semibold mb-4">Cards with Footers</h3>
            <div class="grid gap-6 md:grid-cols-2">
                <Card
                    title="Delete Account"
                    description="This action cannot be undone"
                    variant="outline"
                >
                    <p class="text-sm text-muted-foreground">
                        Deleting your account will permanently remove all your
                        data from our servers.
                    </p>
                    {#snippet footer()}
                        <Button variant="outline" size="sm" class="mr-2"
                            >Cancel</Button
                        >
                        <Button variant="destructive" size="sm"
                            >Delete Account</Button
                        >
                    {/snippet}
                </Card>

                <Card
                    title="Save Changes"
                    description="Update your preferences"
                    variant="elevated"
                >
                    <Field label="Username">
                        <Input id="save-username" value="johndoe" />
                    </Field>
                    {#snippet footer()}
                        <div class="flex-1 text-xs text-muted-foreground">
                            Last saved: 5 mins ago
                        </div>
                        <Button size="sm">Save</Button>
                    {/snippet}
                </Card>
            </div>
        </div>

        <!-- Complex Example -->
        <div class="mt-8">
            <h3 class="text-xl font-semibold mb-4">Complex Card Example</h3>
            <Card
                title="Team Subscription"
                description="Manage your team plan and billing"
                variant="elevated"
                hover
            >
                {#snippet headerAction()}
                    <Button variant="outline" size="sm">Upgrade</Button>
                {/snippet}

                <div class="space-y-4">
                    <div class="grid gap-4 md:grid-cols-2">
                        <Field label="Plan Type">
                            <Select
                                bind:value={plan}
                                options={plans}
                                placeholder="Select a plan..."
                            />
                        </Field>

                        <Field label="Team Size">
                            <Input id="team-size" type="number" value="5" />
                        </Field>
                    </div>

                    <Field
                        label="Auto-renew subscription"
                        orientation="horizontal"
                    >
                        <Switch id="auto-renew" checked variant="success" />
                    </Field>
                </div>

                {#snippet footer()}
                    <div class="flex-1">
                        <p class="text-xs text-muted-foreground">
                            Next billing date: Dec 1, 2025
                        </p>
                    </div>
                    <Button variant="outline" size="sm" class="mr-2">
                        View Invoice</Button
                    >
                    <Button size="sm">Update Plan</Button>
                {/snippet}
            </Card>
        </div>
        <br />
        <CodeBlock
            title="Code"
            language="Svelte"
            showLineNumbers
            collapsible
            maxHeight="250px"
            variant="default"
            code={cardVariantsDocs}
        />
    </Card>

    <!-- 13. Slider with Field Component -->
    <Card variant="outline" class="p-6">
        <h2 class="text-2xl font-semibold mb-4">Slider with Field Component</h2>
        <p class="text-sm text-muted-foreground mb-4">
            Range slider controls with Field wrapper
        </p>

        <div class="grid gap-6 md:grid-cols-2">
            <Card>
                <Field
                    label="Volume"
                    description={`Current volume: ${volume}%`}
                >
                    <Slider
                        type="single"
                        bind:value={volume}
                        min={0}
                        max={100}
                        step={1}
                    />
                </Field>
            </Card>

            <Card>
                <Field
                    label="Price Range"
                    description={`$${priceRange[0]} - $${priceRange[1]}`}
                >
                    <Slider
                        type="multiple"
                        bind:value={priceRange}
                        min={0}
                        max={1000}
                        step={10}
                    />
                </Field>
            </Card>
        </div>
        <br />
        <CodeBlock
            title="Code"
            language="Svelte"
            showLineNumbers
            collapsible
            maxHeight="250px"
            variant="default"
            code={sliderFieldDocs}
        />
    </Card>

    <!-- 14. Input OTP with Field Component -->
    <Card variant="outline" class="p-6">
        <h2 class="text-2xl font-semibold mb-4">Input OTP with Field Component</h2>
        <p class="text-sm text-muted-foreground mb-4">
            One-time password inputs with Field wrapper
        </p>

        <div class="grid gap-6 md:grid-cols-2">
            <Card>
                <Field
                    label="Verification Code"
                    description="Enter the 6-digit code sent to your email"
                >
                    <InputOTP maxlength={6} groups={2} bind:value={otpCode} />
                </Field>
                {#if otpCode}
                    <div class="mt-4 rounded-md bg-muted p-3">
                        <p class="text-sm font-medium">Code: {otpCode}</p>
                    </div>
                {/if}
            </Card>

            <Card>
                <Field
                    label="PIN Code"
                    description="Enter your 4-digit PIN"
                    required
                >
                    <InputOTP maxlength={4} groups={2} />
                </Field>
            </Card>
        </div>
        <br />
        <CodeBlock
            title="Code"
            language="Svelte"
            showLineNumbers
            collapsible
            maxHeight="250px"
            variant="default"
            code={inputOtpFieldDocs}
        />
    </Card>

    <!-- 15. NumberSpinner with Field Component -->
    <Card variant="outline" class="p-6">
        <h2 class="text-2xl font-semibold mb-4">
            Number Spinner with Field Component
        </h2>
        <p class="text-sm text-muted-foreground mb-4">
            Numeric spinners with Field wrapper
        </p>

        <div class="grid gap-6 md:grid-cols-3">
            <Card>
                <Field
                    label="Quantity"
                    description="Select the number of items"
                >
                    <NumberSpinner bind:value={quantity} min={1} max={100} />
                </Field>
                <div class="mt-4 rounded-md bg-muted p-3">
                    <p class="text-sm font-medium">Selected: {quantity}</p>
                </div>
            </Card>

            <Card>
                <Field label="Amount" description="Increments of $10">
                    <NumberSpinner value={50} min={0} max={1000} step={10} />
                </Field>
            </Card>

            <Card>
                <Field
                    label="Age"
                    description="Your age in years"
                    required
                >
                    <NumberSpinner value={25} min={18} max={120} />
                </Field>
            </Card>
        </div>
        <br />
        <CodeBlock
            title="Code"
            language="Svelte"
            showLineNumbers
            collapsible
            maxHeight="250px"
            variant="default"
            code={numberSpinnerFieldDocs}
        />
    </Card>

    <!-- 16. FileInput with Field Component -->
    <Card variant="outline" class="p-6">
        <h2 class="text-2xl font-semibold mb-4">File Input with Field Component</h2>
        <p class="text-sm text-muted-foreground mb-4">
            File upload controls with Field wrapper
        </p>

        <div class="grid gap-6 md:grid-cols-2">
            <Card>
                <Field
                    label="Upload Document"
                    description="PDF or Word document (max 5MB)"
                >
                    <FileInput
                        mode="regular"
                        validation={{
                            maxFiles: 3,
                            acceptedTypes: [".doc", ".docx", ".txt"],
                        }}
                    />
                </Field>
            </Card>

            <Card>
                <Field
                    label="Upload Images"
                    description="Drag and drop or click to browse"
                >
                    <FileInput
                        mode="drag-drop"
                        validation={{
                            maxSize: 10 * 1024 * 1024,
                            acceptedTypes: ["image/*", ".pdf"],
                        }}
                        dragDropProps={{
                            label: "Drop images or PDFs here",
                            description: "Max 10MB per file",
                            showFileList: true,
                        }}
                    />
                </Field>
            </Card>
        </div>

        <Card class="mt-6">
            <Field
                label="Upload document"
                error="File size exceeds 5MB limit"
            >
                <FileInput
                    mode="regular"
                    validation={{
                        maxSize: 5 * 1024 * 1024,
                        acceptedTypes: ["application/pdf"],
                    }}
                />
            </Field>
        </Card>
        <br />
        <CodeBlock
            title="Code"
            language="Svelte"
            showLineNumbers
            collapsible
            maxHeight="250px"
            variant="default"
            code={fileInputFieldDocs}
        />
    </Card>

    <!-- 17. DatePicker with Field Component -->
    <Card variant="outline" class="p-6">
        <h2 class="text-2xl font-semibold mb-4">Date Picker with Field Component</h2>
        <p class="text-sm text-muted-foreground mb-4">
            Date selection with Field wrapper
        </p>
		<div class="grid gap-6 md:grid-cols-2">
			<Card>
				<Field
					label="Date of Birth"
					description="Select your birth date"
				>
					<DatePicker />
				</Field>
			</Card>

			<Card>
				<Field
					label="Delivery Date"
					description="Choose your preferred delivery date"
					required
				>
					<DatePicker bind:value={deliveryDate} />
				</Field>
				{#if deliveryDate}
					<div class="mt-4 rounded-md bg-muted p-3">
						<p class="text-sm font-medium">Selected: {deliveryDate.toDate}</p>
					</div>
				{/if}
			</Card>
		</div>
        <br />
        <CodeBlock
            title="Code"
            language="Svelte"
            showLineNumbers
            collapsible
            maxHeight="250px"
            variant="default"
            code={datePickerFieldDocs}
        />
    </Card>

    <!-- 18. Label Position -->
    <Card variant="outline" class="p-6">
        <h2 class="text-2xl font-semibold mb-4">Label Position</h2>
        <p class="text-sm text-muted-foreground mb-4">
            Control label placement with labelPosition prop - useful for
            Checkbox and Switch components
        </p>

        <div class="grid gap-6 md:grid-cols-2">
            <!-- Checkbox with label after -->
            <Card>
                <div class="space-y-4">
                    <div>
                        <h3 class="text-lg font-medium mb-2">
                            Checkbox - Label After
                        </h3>
                        <p class="text-sm text-muted-foreground">
                            Control appears before label (common pattern for
                            checkboxes)
                        </p>
                    </div>

                    <Field
                        label="Accept terms and conditions"
                        description="You must accept to continue"
                        labelPosition="after"
                        orientation="horizontal"
                    >
                        <Checkbox id="terms-after" bind:checked={acceptTerms} />
                    </Field>
                </div>
            </Card>

            <!-- Switch with label after -->
            <Card>
                <div class="space-y-4">
                    <div>
                        <h3 class="text-lg font-medium mb-2">
                            Switch - Label After
                        </h3>
                        <p class="text-sm text-muted-foreground">
                            Toggle appears before label
                        </p>
                    </div>

                    <Field
                        label="Enable notifications"
                        description="Receive email updates"
                        labelPosition="after"
                        orientation="horizontal"
                    >
                        <Switch
                            id="notifications-after"
                            bind:checked={enableNotifications}
                        />
                    </Field>
                </div>
            </Card>

            <!-- Multiple checkboxes with label after -->
            <Card>
                <div class="space-y-4">
                    <div>
                        <h3 class="text-lg font-medium mb-2">
                            Multiple Checkboxes
                        </h3>
                        <p class="text-sm text-muted-foreground">
                            Group of checkboxes with labels after
                        </p>
                    </div>

                    <div class="space-y-3">
                        <Field
                            label="Subscribe to newsletter"
                            description="Receive weekly updates and news"
                            labelPosition="after"
                            orientation="horizontal"
                        >
                            <Checkbox
                                id="newsletter-after"
                                bind:checked={subscribeNewsletter}
                            />
                        </Field>

                        <Field
                            label="Receive marketing emails"
                            description="Promotional offers and discounts"
                            labelPosition="after"
                            orientation="horizontal"
                        >
                            <Checkbox
                                id="marketing-after"
                                bind:checked={receiveMarketing}
                            />
                        </Field>
                    </div>
                </div>
            </Card>

            <!-- Label Position Comparison -->
            <Card>
                <div class="space-y-4">
                    <div>
                        <h3 class="text-lg font-medium mb-2">
                            Before vs After Comparison
                        </h3>
                        <p class="text-sm text-muted-foreground">
                            Visual comparison of label positions
                        </p>
                    </div>

                    <div class="space-y-6">
                        <div>
                            <p
                                class="text-xs font-medium text-muted-foreground mb-2"
                            >
                                Label Before (Default)
                            </p>
                            <Field
                                label="Enable feature"
                                description="Turn on this feature"
                                labelPosition="before"
                                orientation="horizontal"
                            >
                                <Switch id="feature-before" />
                            </Field>
                        </div>

                        <div>
                            <p
                                class="text-xs font-medium text-muted-foreground mb-2"
                            >
                                Label After
                            </p>
                            <Field
                                label="Enable feature"
                                description="Turn on this feature"
                                labelPosition="after"
                                orientation="horizontal"
                            >
                                <Switch id="feature-after" />
                            </Field>
                        </div>
                    </div>
                </div>
            </Card>
        </div>

        <!-- Vertical orientation with label after -->
        <Card class="mt-6">
            <div class="space-y-4">
                <div>
                    <h3 class="text-lg font-medium mb-2">
                        Vertical Orientation with Label After
                    </h3>
                    <p class="text-sm text-muted-foreground">
                        Label after also works with vertical layouts
                    </p>
                </div>

                <Field
                    label="Accept terms and conditions"
                    description="Please read and accept our terms of service"
                    labelPosition="after"
                    orientation="vertical"
                >
                    <Checkbox id="terms-vertical" bind:checked={acceptTerms} />
                </Field>
            </div>
        </Card>
        <br />
        <CodeBlock
            title="Code"
            language="Svelte"
            showLineNumbers
            collapsible
            maxHeight="250px"
            variant="default"
            code={labelPositionDocs}
        />
    </Card>

    <!-- 19. Complete Order Form -->
    <Card variant="outline" class="p-6">
        <h2 class="text-2xl font-semibold mb-4">Complete Order Form</h2>
        <p class="text-sm text-muted-foreground mb-4">
            Comprehensive form with all advanced components
        </p>

        <Card class="bg-muted/50">
            <FieldPrimitives.Set>
                <FieldPrimitives.Legend>Place Your Order</FieldPrimitives.Legend>
                <FieldPrimitives.Description>
                    Fill out the order form with all the necessary details
                </FieldPrimitives.Description>
                <FieldPrimitives.Separator />

                <FieldPrimitives.Group class="gap-6">
                    <div class="grid gap-6 md:grid-cols-2">
                        <Field
                            label="Quantity"
                            description="Number of items to order"
                            required
                        >
                            <NumberSpinner
                                bind:value={quantity}
                                min={1}
                                max={100}
                            />
                        </Field>

                        <!-- <Field
                            label="Delivery Date"
                            description="When should we deliver?"
                            required
                        >
                            <DatePicker bind:value={deliveryDate} />
                        </Field> -->
                    </div>

                    <Field
                        label="Volume Level"
                        description={`Set notification volume: ${volume}%`}
                    >
                        <Slider
                            type="single"
                            bind:value={volume}
                            min={0}
                            max={100}
                            step={1}
                        />
                    </Field>

                    <Field
                        label="Verification Code"
                        description="Enter the code from your email"
                        required
                    >
                        <InputOTP
                            maxlength={6}
                            groups={2}
                            bind:value={otpCode}
                        />
                    </Field>

                    <Field
                        label="Upload Receipt"
                        description="Upload proof of payment (PDF, max 5MB)"
                    >
                        <FileInput
                            mode="regular"
                            validation={{
                                maxSize: 5 * 1024 * 1024,
                                acceptedTypes: ["application/pdf"],
                            }}
                        />
                    </Field>

                    <Field
                        label="Product Images"
                        description="Drag and drop product images"
                    >
                        <FileInput
                            mode="drag-drop"
                            validation={{
                                maxSize: 10 * 1024 * 1024,
                                acceptedTypes: ["image/*"],
                            }}
                            dragDropProps={{
                                label: "Drop images here",
                                description: "Max 10MB per image",
                                showFileList: true,
                            }}
                        />
                    </Field>

                    <Field
                        label="Enable Rush Delivery"
                        description="Get your order within 24 hours"
                        orientation="horizontal"
                    >
                        <Switch id="rush-delivery" />
                    </Field>
                </FieldPrimitives.Group>

                <div class="flex gap-4 pt-4">
                    <Button>Place Order</Button>
                    <Button variant="outline">Cancel</Button>
                </div>
            </FieldPrimitives.Set>
        </Card>
        <br />
        <CodeBlock
            title="Code"
            language="Svelte"
            showLineNumbers
            collapsible
            maxHeight="250px"
            variant="default"
            code={completeOrderFormDocs}
        />
    </Card>

    </div>
</div>
