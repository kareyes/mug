export const completeFormDocs = `
<script lang="ts">
  import { Button, Input, Textarea, Checkbox, Switch, Select, Field, FieldPrimitives } from "@kareyes/aether";

  let username = \$state("");
  let email = \$state("");
  let password = \$state("");
  let bio = \$state("");
  let country = \$state("");
  let newsletter = \$state(false);
  let notifications = \$state(true);
  let plan = \$state("");
  let errors = \$state<Record<string, string>>({});

  const countries = [
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
  ];

  const plans = [
    { value: "free", label: "Free - \$0/month" },
    { value: "basic", label: "Basic - \$9/month" },
    { value: "pro", label: "Pro - \$29/month" },
  ];

  function handleSubmit(event: Event) {
    event.preventDefault();
    errors = {};
    if (!username) errors.username = "Username is required";
    if (!email) errors.email = "Email is required";
    if (Object.keys(errors).length === 0) alert("Form submitted!");
  }
</script>

<form onsubmit={handleSubmit} class="rounded-lg border bg-card p-6">
  <FieldPrimitives.Set>
    <FieldPrimitives.Legend>Account Information</FieldPrimitives.Legend>
    <FieldPrimitives.Description>
      Create your account by filling out the information below.
    </FieldPrimitives.Description>
    <FieldPrimitives.Separator />

    <FieldPrimitives.Group class="gap-6">
      <Field label="Username" description="Choose a unique username." required error={errors.username}>
        <Input id="username" error={!!errors.username} bind:value={username} placeholder="johndoe" required />
      </Field>

      <Field label="Email" description="We'll never share your email." required error={errors.email}>
        <Input id="email" error={!!errors.email} type="email" bind:value={email} placeholder="you@example.com" />
      </Field>

      <Field label="Bio" description="Tell us about yourself.">
        <Textarea id="bio" bind:value={bio} placeholder="I am a..." rows={4} />
      </Field>

      <Field label="Country" description="Select your country." required>
        <Select bind:value={country} placeholder="Select a country..." options={countries} />
      </Field>
    </FieldPrimitives.Group>
  </FieldPrimitives.Set>

  <FieldPrimitives.Set>
    <FieldPrimitives.Legend>Preferences</FieldPrimitives.Legend>
    <FieldPrimitives.Group class="gap-4">
      <Field label="Newsletter subscription" description="Receive weekly updates." orientation="horizontal">
        <Checkbox id="newsletter" bind:checked={newsletter} />
      </Field>
      <Field label="Enable notifications" description="Get notified about updates." orientation="horizontal">
        <Switch id="notifications" bind:checked={notifications} />
      </Field>
    </FieldPrimitives.Group>
  </FieldPrimitives.Set>

  <div class="flex gap-4">
    <Button type="submit">Submit</Button>
    <Button type="button" variant="outline">Reset</Button>
  </div>
</form>`;

export const inputVariantsDocs = `
<script lang="ts">
  import { Input, Card, Field } from "@kareyes/aether";
</script>

<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  <Card>
    <Field label="Default Variant">
      <Input placeholder="Default style" variant="default" />
    </Field>
  </Card>

  <Card>
    <Field label="Outline Variant">
      <Input placeholder="Outline style" variant="outline" />
    </Field>
  </Card>

  <Card>
    <Field label="Filled Variant">
      <Input placeholder="Filled style" variant="filled" />
    </Field>
  </Card>

  <Card>
    <Field label="Ghost Variant">
      <Input placeholder="Ghost style" variant="ghost" />
    </Field>
  </Card>

  <Card>
    <Field label="Underline Variant">
      <Input placeholder="Underline style" variant="underline" />
    </Field>
  </Card>
</div>`;

export const inputSizesDocs = `
<script lang="ts">
  import { Input, Card, Field } from "@kareyes/aether";
</script>

<div class="grid gap-6 md:grid-cols-3">
  <Card>
    <Field label="Small Size">
      <Input placeholder="Small input" size="sm" />
    </Field>
  </Card>

  <Card>
    <Field label="Default Size">
      <Input placeholder="Default input" size="default" />
    </Field>
  </Card>

  <Card>
    <Field label="Large Size">
      <Input placeholder="Large input" size="lg" />
    </Field>
  </Card>
</div>`;

export const inputMasksDocs = `
<script lang="ts">
  import { Input, Card, Field } from "@kareyes/aether";

  let phone = \$state("");
  let ssn = \$state("");
</script>

<div class="grid gap-6 md:grid-cols-2">
  <Card>
    <Field label="Phone Number">
      <Input bind:value={phone} placeholder="(555) 555-5555" mask="phone" />
    </Field>
  </Card>

  <Card>
    <Field label="Social Security Number">
      <Input bind:value={ssn} placeholder="***-**-****" mask="ssn" />
    </Field>
  </Card>

  <Card>
    <Field label="Credit Card">
      <Input placeholder="**** **** **** ****" mask="creditCard" />
    </Field>
  </Card>

  <Card>
    <Field label="Date">
      <Input placeholder="MM/DD/YYYY" mask="date" />
    </Field>
  </Card>
</div>`;

export const textareaVariantsDocs = `
<script lang="ts">
  import { Textarea, Card, Field } from "@kareyes/aether";

  let description = \$state("");
</script>

<div class="grid gap-6 md:grid-cols-2">
  <Card>
    <Field label="Default Textarea">
      <Textarea placeholder="Enter your text..." variant="default" />
    </Field>
  </Card>

  <Card>
    <Field label="Outline Textarea">
      <Textarea placeholder="Enter your text..." variant="outline" />
    </Field>
  </Card>

  <Card>
    <Field label="With Character Counter" description="Maximum 200 characters">
      <Textarea bind:value={description} placeholder="Enter your text..." maxLength={200} showCount />
    </Field>
  </Card>

  <Card>
    <Field label="Auto-Resize" description="Automatically grows with content">
      <Textarea placeholder="Start typing..." autoResize minRows={2} maxRows={6} />
    </Field>
  </Card>
</div>`;

export const checkboxVariantsDocs = `
<script lang="ts">
  import { Checkbox, Card, Field } from "@kareyes/aether";
</script>

<!-- Variants -->
<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
  <Card>
    <Field label="Default Variant" orientation="horizontal">
      <Checkbox variant="default" />
    </Field>
  </Card>

  <Card>
    <Field label="Destructive Variant" orientation="horizontal">
      <Checkbox variant="destructive" />
    </Field>
  </Card>

  <Card>
    <Field label="Success Variant" orientation="horizontal">
      <Checkbox variant="success" />
    </Field>
  </Card>

  <Card>
    <Field label="Warning Variant" orientation="horizontal">
      <Checkbox variant="warning" />
    </Field>
  </Card>
</div>

<!-- Sizes -->
<div class="grid gap-6 md:grid-cols-4">
  <Card>
    <Field label="Small Size" orientation="horizontal">
      <Checkbox size="sm" />
    </Field>
  </Card>

  <Card>
    <Field label="Default Size" orientation="horizontal">
      <Checkbox size="default" />
    </Field>
  </Card>

  <Card>
    <Field label="Large Size" orientation="horizontal">
      <Checkbox size="lg" />
    </Field>
  </Card>

  <Card>
    <Field label="Extra Large" orientation="horizontal">
      <Checkbox size="xl" />
    </Field>
  </Card>
</div>`;

export const checkboxGroupDocs = `
<script lang="ts">
  import { CheckboxGroup, Card, Field, FieldPrimitives } from "@kareyes/aether";
  import type { CheckboxPrimitives } from "@kareyes/aether";

  type CheckboxGroupOption = CheckboxPrimitives.CheckboxGroupOption;

  let selectedFeatures = \$state<string[]>([]);

  const featureOptions: CheckboxGroupOption[] = [
    { id: "feature-api", label: "API Access", value: "api", description: "Access to REST API" },
    { id: "feature-analytics", label: "Analytics Dashboard", value: "analytics", description: "View detailed analytics" },
    { id: "feature-export", label: "Data Export", value: "export", description: "Export data to CSV/JSON" },
  ];
</script>

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
    </div>`;

export const radioGroupDocs = `
<script lang="ts">
  import { RadioGroup, Card, Field, FieldPrimitives } from "@kareyes/aether";
  import type { RadioGroupPrimitives } from "@kareyes/aether";

  type RadioGroupOption = RadioGroupPrimitives.RadioGroupOption;

  let selectedPlan = \$state("basic");
  let selectedPayment = \$state("");

  const planOptions: RadioGroupOption[] = [
    { id: "plan-free", label: "Free Plan", value: "free", description: "Basic features - \$0/month" },
    { id: "plan-basic", label: "Basic Plan", value: "basic", description: "Essential features - \$9/month" },
    { id: "plan-pro", label: "Pro Plan", value: "pro", description: "Advanced features - \$29/month" },
  ];

  const paymentOptions: RadioGroupOption[] = [
    { id: "pay-credit", label: "Credit Card", value: "credit", description: "Visa, Mastercard, Amex" },
    { id: "pay-paypal", label: "PayPal", value: "paypal", description: "Secure PayPal payment" },
    { id: "pay-bank", label: "Bank Transfer", value: "bank", description: "Direct bank transfer", disabled: true },
  ];
</script>

<!-- Basic RadioGroup -->
<Card>
  <Field label="Choose Your Plan" description="Select the subscription plan that best fits your needs.">
    <RadioGroup options={planOptions} bind:value={selectedPlan} />
  </Field>
  <div class="mt-4 rounded-md bg-muted p-3">
    <p class="text-sm font-medium">Selected: {selectedPlan || "None"}</p>
  </div>
</Card>

<!-- RadioGroup with Error State -->
<Card>
  <Field
    label="Payment Method"
    description="Select your preferred payment method."
    required
    error={!selectedPayment ? "Please select a payment method" : undefined}
  >
    <RadioGroup options={paymentOptions} bind:value={selectedPayment} error={!selectedPayment} required />
  </Field>
</Card>

<!-- RadioGroup in Form Context -->
<Card class="bg-muted/50">
  <FieldPrimitives.Set>
    <FieldPrimitives.Legend>Product Configuration</FieldPrimitives.Legend>
    <FieldPrimitives.Description>Configure your product preferences</FieldPrimitives.Description>
    <FieldPrimitives.Separator />
    <FieldPrimitives.Group class="gap-6">
      <Field label="Select Size" description="Choose your preferred size">
        <RadioGroup options={sizeRadioOptions} bind:value={selectedSize} />
      </Field>
    </FieldPrimitives.Group>
  </FieldPrimitives.Set>
</Card>`;

export const switchVariantsDocs = `
<script lang="ts">
  import { Switch, Card, Field } from "@kareyes/aether";
</script>

<!-- Variants -->
<div class="grid gap-6 md:grid-cols-2">
  <Card>
    <Field label="Default Variant" description="Standard switch style" orientation="horizontal">
      <Switch variant="default" />
    </Field>
  </Card>

  <Card>
    <Field label="Success Variant" description="Success-themed switch" orientation="horizontal">
      <Switch variant="success" />
    </Field>
  </Card>
</div>

<!-- Sizes -->
<div class="grid gap-6 md:grid-cols-3">
  <Card>
    <Field label="Small Size" orientation="horizontal">
      <Switch size="sm" />
    </Field>
  </Card>

  <Card>
    <Field label="Default Size" orientation="horizontal">
      <Switch size="default" />
    </Field>
  </Card>

  <Card>
    <Field label="Large Size" orientation="horizontal">
      <Switch size="lg" />
    </Field>
  </Card>
</div>`;

export const horizontalLayoutsDocs = `
<script lang="ts">
  import { Checkbox, Switch, Card, Field } from "@kareyes/aether";

  let agreeToTerms = \$state(false);
  let darkMode = \$state(false);
</script>

<div class="grid gap-6">
  <Card>
    <Field label="Email notifications" description="Receive updates via email" orientation="horizontal">
      <Switch />
    </Field>
  </Card>

  <Card>
    <Field label="I agree to terms" description="You must agree to continue" orientation="horizontal">
      <Checkbox bind:checked={agreeToTerms} />
    </Field>
  </Card>

  <Card>
    <Field label="Dark mode" description="Toggle dark mode theme" orientation="horizontal">
      <Switch bind:checked={darkMode} variant="success" />
    </Field>
  </Card>
</div>`;

export const errorStatesDocs = `
<script lang="ts">
  import { Input, Card, Field } from "@kareyes/aether";
</script>

<div class="grid gap-6 md:grid-cols-2">
  <Card>
    <Field
      label="Username"
      description="Enter a unique username"
      error="This username is already taken"
      required
    >
      <Input placeholder="username" />
    </Field>
  </Card>

  <Card>
    <Field label="Email" error="Please enter a valid email address" required>
      <Input type="email" placeholder="email@example.com" />
    </Field>
  </Card>
</div>`;

export const cardVariantsDocs = `
<script lang="ts">
  import { Button, Input, Switch, Select, Card, Field, FieldPrimitives } from "@kareyes/aether";

  let plan = \$state("");
  const plans = [
    { value: "free", label: "Free - \$0/month" },
    { value: "pro", label: "Pro - \$29/month" },
  ];
</script>

<!-- Card with Header Actions -->
<Card title="User Profile" description="Manage your profile settings">
  {#snippet headerAction()}
    <Button variant="ghost" size="sm">Edit</Button>
  {/snippet}
  <Field label="Display Name">
    <Input value="John Doe" />
  </Field>
</Card>

<!-- Card with Footer -->
<Card title="Delete Account" description="This action cannot be undone" variant="outline">
  <p class="text-sm text-muted-foreground">
    Deleting your account will permanently remove all your data.
  </p>
  {#snippet footer()}
    <Button variant="outline" size="sm" class="mr-2">Cancel</Button>
    <Button variant="destructive" size="sm">Delete Account</Button>
  {/snippet}
</Card>

<!-- Complex Card Example -->
<Card title="Team Subscription" description="Manage your team plan" variant="elevated" hover>
  {#snippet headerAction()}
    <Button variant="outline" size="sm">Upgrade</Button>
  {/snippet}
  <div class="space-y-4">
    <Field label="Plan Type">
      <Select bind:value={plan} options={plans} placeholder="Select a plan..." />
    </Field>
    <Field label="Auto-renew subscription" orientation="horizontal">
      <Switch checked variant="success" />
    </Field>
  </div>
  {#snippet footer()}
    <div class="flex-1">
      <p class="text-xs text-muted-foreground">Next billing date: Dec 1, 2025</p>
    </div>
    <Button size="sm">Update Plan</Button>
  {/snippet}
</Card>`;

export const sliderFieldDocs = `
<script lang="ts">
  import { Slider, Card, Field } from "@kareyes/aether";

  let volume = \$state(50);
  let priceRange = \$state([100, 500]);
</script>

<div class="grid gap-6 md:grid-cols-2">
  <Card>
    <Field label="Volume" description={\`Current volume: \${volume}%\`}>
      <Slider type="single" bind:value={volume} min={0} max={100} step={1} />
    </Field>
  </Card>

  <Card>
    <Field label="Price Range" description={\`\$\${priceRange[0]} - \$\${priceRange[1]}\`}>
      <Slider type="multiple" bind:value={priceRange} min={0} max={1000} step={10} />
    </Field>
  </Card>
</div>`;

export const inputOtpFieldDocs = `
<script lang="ts">
  import { InputOTP, Card, Field } from "@kareyes/aether";

  let otpCode = \$state("");
</script>

<div class="grid gap-6 md:grid-cols-2">
  <Card>
    <Field label="Verification Code" description="Enter the 6-digit code sent to your email">
      <InputOTP maxlength={6} groups={2} bind:value={otpCode} />
    </Field>
    {#if otpCode}
      <div class="mt-4 rounded-md bg-muted p-3">
        <p class="text-sm font-medium">Code: {otpCode}</p>
      </div>
    {/if}
  </Card>

  <Card>
    <Field label="PIN Code" description="Enter your 4-digit PIN" required>
      <InputOTP maxlength={4} groups={2} />
    </Field>
  </Card>
</div>`;

export const numberSpinnerFieldDocs = `
<script lang="ts">
  import { NumberSpinner, Card, Field } from "@kareyes/aether";

  let quantity = \$state(1);
</script>

<div class="grid gap-6 md:grid-cols-3">
  <Card>
    <Field label="Quantity" description="Select the number of items">
      <NumberSpinner bind:value={quantity} min={1} max={100} />
    </Field>
    <div class="mt-4 rounded-md bg-muted p-3">
      <p class="text-sm font-medium">Selected: {quantity}</p>
    </div>
  </Card>

  <Card>
    <Field label="Amount" description="Increments of \$10">
      <NumberSpinner value={50} min={0} max={1000} step={10} />
    </Field>
  </Card>

  <Card>
    <Field label="Age" description="Your age in years" required>
      <NumberSpinner value={25} min={18} max={120} />
    </Field>
  </Card>
</div>`;

export const fileInputFieldDocs = `
<script lang="ts">
  import { FileInput, Card, Field } from "@kareyes/aether";
</script>

<div class="grid gap-6 md:grid-cols-2">
  <Card>
    <Field label="Upload Document" description="PDF or Word document (max 5MB)">
      <FileInput
        mode="regular"
        validation={{ maxFiles: 3, acceptedTypes: [".doc", ".docx", ".txt"] }}
      />
    </Field>
  </Card>

  <Card>
    <Field label="Upload Images" description="Drag and drop or click to browse">
      <FileInput
        mode="drag-drop"
        validation={{ maxSize: 10 * 1024 * 1024, acceptedTypes: ["image/*", ".pdf"] }}
        dragDropProps={{ label: "Drop images or PDFs here", description: "Max 10MB per file", showFileList: true }}
      />
    </Field>
  </Card>
</div>

<Card>
  <Field label="Upload document" error="File size exceeds 5MB limit">
    <FileInput
      mode="regular"
      validation={{ maxSize: 5 * 1024 * 1024, acceptedTypes: ["application/pdf"] }}
    />
  </Field>
</Card>`;

export const datePickerFieldDocs = `
<script lang="ts">
  import type { DateValue } from "@internationalized/date";
  import { DatePicker, Card, Field } from "@kareyes/aether";

  let deliveryDate = \$state<DateValue | undefined>(undefined);
</script>

<div class="grid gap-6 md:grid-cols-2">
  <Card>
    <Field label="Date of Birth" description="Select your birth date">
      <DatePicker />
    </Field>
  </Card>

  <Card>
    <Field label="Delivery Date" description="Choose your preferred delivery date" required>
      <DatePicker bind:value={deliveryDate} />
    </Field>
  </Card>
</div>`;

export const labelPositionDocs = `
<script lang="ts">
  import { Checkbox, Switch, Card, Field } from "@kareyes/aether";

  let acceptTerms = \$state(false);
  let enableNotifications = \$state(false);
</script>

<div class="grid gap-6 md:grid-cols-2">
  <!-- Checkbox with label after -->
  <Card>
    <Field
      label="Accept terms and conditions"
      description="You must accept to continue"
      labelPosition="after"
      orientation="horizontal"
    >
      <Checkbox bind:checked={acceptTerms} />
    </Field>
  </Card>

  <!-- Switch with label after -->
  <Card>
    <Field
      label="Enable notifications"
      description="Receive email updates"
      labelPosition="after"
      orientation="horizontal"
    >
      <Switch bind:checked={enableNotifications} />
    </Field>
  </Card>
</div>

<!-- Before vs After Comparison -->
<Card>
  <div class="space-y-6">
    <div>
      <p class="text-xs font-medium text-muted-foreground mb-2">Label Before (Default)</p>
      <Field label="Enable feature" description="Turn on this feature" labelPosition="before" orientation="horizontal">
        <Switch />
      </Field>
    </div>
    <div>
      <p class="text-xs font-medium text-muted-foreground mb-2">Label After</p>
      <Field label="Enable feature" description="Turn on this feature" labelPosition="after" orientation="horizontal">
        <Switch />
      </Field>
    </div>
  </div>
</Card>`;

export const completeOrderFormDocs = `
<script lang="ts">
  import { Button, Slider, InputOTP, NumberSpinner, FileInput, Switch, Field, FieldPrimitives, Card } from "@kareyes/aether";

  let quantity = \$state(1);
  let volume = \$state(50);
  let otpCode = \$state("");
</script>

<Card class="bg-muted/50">
  <FieldPrimitives.Set>
    <FieldPrimitives.Legend>Place Your Order</FieldPrimitives.Legend>
    <FieldPrimitives.Description>
      Fill out the order form with all the necessary details
    </FieldPrimitives.Description>
    <FieldPrimitives.Separator />

    <FieldPrimitives.Group class="gap-6">
      <Field label="Quantity" description="Number of items to order" required>
        <NumberSpinner bind:value={quantity} min={1} max={100} />
      </Field>

      <Field label="Volume Level" description={\`Set notification volume: \${volume}%\`}>
        <Slider type="single" bind:value={volume} min={0} max={100} step={1} />
      </Field>

      <Field label="Verification Code" description="Enter the code from your email" required>
        <InputOTP maxlength={6} groups={2} bind:value={otpCode} />
      </Field>

      <Field label="Upload Receipt" description="Upload proof of payment (PDF, max 5MB)">
        <FileInput
          mode="regular"
          validation={{ maxSize: 5 * 1024 * 1024, acceptedTypes: ["application/pdf"] }}
        />
      </Field>

      <Field label="Enable Rush Delivery" description="Get your order within 24 hours" orientation="horizontal">
        <Switch />
      </Field>
    </FieldPrimitives.Group>

    <div class="flex gap-4 pt-4">
      <Button>Place Order</Button>
      <Button variant="outline">Cancel</Button>
    </div>
  </FieldPrimitives.Set>
</Card>`;
