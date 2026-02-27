export const orientationsDocs = `
<script lang="ts">
  import { Button, CardPrimitives, Stepper } from "@kareyes/aether";

  const { Card, CardHeader, CardTitle, CardDescription, CardContent } = CardPrimitives;

  let basicStep = $state(1);
  let verticalStep = $state(0);
</script>

<div class="grid gap-8 lg:grid-cols-2">
  <Card>
    <CardHeader>
      <CardTitle>Horizontal Stepper</CardTitle>
      <CardDescription>Default layout, perfect for wide screens</CardDescription>
    </CardHeader>
    <CardContent class="space-y-6">
      <Stepper
        bind:activeStep={basicStep}
        steps={[
          { label: "Step 1", description: "Choose a plan" },
          { label: "Step 2", description: "Enter details" },
          { label: "Step 3", description: "Confirm" },
        ]}
      />
      <div class="flex gap-3">
        <Button variant="outline" disabled={basicStep === 0} onclick={() => basicStep--}>
          Previous
        </Button>
        <Button disabled={basicStep === 2} onclick={() => basicStep++}>
          Next
        </Button>
      </div>
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Vertical Stepper</CardTitle>
      <CardDescription>Great for mobile and detailed steps</CardDescription>
    </CardHeader>
    <CardContent class="space-y-6">
      <Stepper
        orientation="vertical"
        bind:activeStep={verticalStep}
        steps={[
          { label: "Personal Info", description: "Enter your basic information" },
          { label: "Address", description: "Add your address details" },
          { label: "Review", description: "Review and submit" },
        ]}
      />
      <div class="flex gap-3">
        <Button variant="outline" disabled={verticalStep === 0} onclick={() => verticalStep--}>
          Previous
        </Button>
        <Button disabled={verticalStep === 2} onclick={() => verticalStep++}>
          Next
        </Button>
      </div>
    </CardContent>
  </Card>
</div>`;

export const sizesVariantsDocs = `
<script lang="ts">
  import { CardPrimitives, Stepper } from "@kareyes/aether";

  const { Card, CardHeader, CardTitle, CardDescription, CardContent } = CardPrimitives;
</script>

<div class="grid gap-6">
  <Card>
    <CardHeader><CardTitle>Extra Small Size</CardTitle></CardHeader>
    <CardContent>
      <Stepper size="xs" activeStep={1} steps={[
        { label: "Start" },
        { label: "Progress" },
        { label: "Complete" },
      ]} />
    </CardContent>
  </Card>

  <Card>
    <CardHeader><CardTitle>Small Size</CardTitle></CardHeader>
    <CardContent>
      <Stepper size="sm" activeStep={1} steps={[
        { label: "Start" },
        { label: "Progress" },
        { label: "Complete" },
      ]} />
    </CardContent>
  </Card>

  <Card>
    <CardHeader><CardTitle>Default Size</CardTitle></CardHeader>
    <CardContent>
      <Stepper size="default" activeStep={1} steps={[
        { label: "Start" },
        { label: "Progress" },
        { label: "Complete" },
      ]} />
    </CardContent>
  </Card>

  <Card>
    <CardHeader><CardTitle>Large Size</CardTitle></CardHeader>
    <CardContent>
      <Stepper size="lg" activeStep={1} steps={[
        { label: "Start" },
        { label: "Progress" },
        { label: "Complete" },
      ]} />
    </CardContent>
  </Card>

  <Card>
    <CardHeader><CardTitle>Outline Variant</CardTitle></CardHeader>
    <CardContent>
      <Stepper variant="outline" activeStep={1} steps={[
        { label: "Start", description: "Begin process" },
        { label: "Progress", description: "In progress" },
        { label: "Complete", description: "Finish" },
      ]} />
    </CardContent>
  </Card>

  <Card>
    <CardHeader><CardTitle>Ghost Variant</CardTitle></CardHeader>
    <CardContent>
      <Stepper variant="ghost" activeStep={1} steps={[
        { label: "Start", description: "Begin process" },
        { label: "Progress", description: "In progress" },
        { label: "Complete", description: "Finish" },
      ]} />
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Flat Variant</CardTitle>
      <CardDescription>Horizontal progress bar style</CardDescription>
    </CardHeader>
    <CardContent class="pt-8 mt-8">
      <Stepper variant="flat" activeStep={1} steps={[
        { label: "Personal Info", description: "Completed" },
        { label: "Education", description: "Completed" },
        { label: "Company", description: "Pending" },
        { label: "Testing", description: "Pending" },
        { label: "Review", description: "Pending" },
      ]} />
    </CardContent>
  </Card>
</div>`;

export const interactiveFeaturesDocs = `
<script lang="ts">
  import { CardPrimitives, Stepper } from "@kareyes/aether";
  import { User, CreditCard, CircleCheck } from "@lucide/svelte";

  const { Card, CardHeader, CardTitle, CardDescription, CardContent } = CardPrimitives;

  let clickableStep = $state(1);
  let result = $state("");
</script>

<div class="grid gap-6">
  <Card>
    <CardHeader>
      <CardTitle>Clickable Steps</CardTitle>
      <CardDescription>Click on any step to navigate directly</CardDescription>
    </CardHeader>
    <CardContent>
      <Stepper
        clickable
        bind:activeStep={clickableStep}
        onStepClick={(step: number) => result = \`Clicked step \${step + 1}\`}
        steps={[
          { label: "Step 1", description: "First step" },
          { label: "Step 2", description: "Second step" },
          { label: "Step 3", description: "Third step" },
        ]}
      />
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>With Custom Icons</CardTitle>
      <CardDescription>Pass icon components via the steps array</CardDescription>
    </CardHeader>
    <CardContent>
      <Stepper
        activeStep={1}
        steps={[
          { label: "Account", description: "Create account", icon: User },
          { label: "Payment", description: "Add payment", icon: CreditCard },
          { label: "Done", description: "All set!", icon: CircleCheck },
        ]}
      />
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Numbers Only</CardTitle>
      <CardDescription>Minimal stepper with just numbers</CardDescription>
    </CardHeader>
    <CardContent>
      <Stepper activeStep={2} steps={[{}, {}, {}, {}]} />
    </CardContent>
  </Card>
</div>`;

export const practicalExamplesDocs = `
<script lang="ts">
  import { Button, Input, Label, Textarea, CardPrimitives, Stepper } from "@kareyes/aether";
  import { User, CreditCard, CircleCheck, ShoppingCart, Package, Mail, Briefcase, FileText } from "@lucide/svelte";

  const { Card, CardHeader, CardTitle, CardDescription, CardContent } = CardPrimitives;

  // Registration flow
  let registrationStep = $state(0);
  let registrationData = $state({ email: "", password: "", name: "", phone: "", address: "" });

  function nextRegistrationStep() { if (registrationStep < 2) registrationStep++; }
  function previousRegistrationStep() { if (registrationStep > 0) registrationStep--; }

  // Checkout flow
  let checkoutStep = $state(1);
  let checkoutData = $state({ items: 3, total: "$127.50", cardNumber: "", shippingMethod: "" });

  function nextCheckoutStep() { if (checkoutStep < 3) checkoutStep++; }
  function previousCheckoutStep() { if (checkoutStep > 0) checkoutStep--; }

  // Job application flow
  let applicationStep = $state(0);
  let applicationData = $state({ fullName: "", email: "", position: "", experience: "", education: "" });

  function nextApplicationStep() { if (applicationStep < 2) applicationStep++; }
  function previousApplicationStep() { if (applicationStep > 0) applicationStep--; }
</script>

<div class="grid gap-6">
  <!-- Registration Flow -->
  <Card>
    <CardHeader>
      <CardTitle>Registration Flow</CardTitle>
      <CardDescription>Multi-step account creation process</CardDescription>
    </CardHeader>
    <CardContent class="space-y-6">
      <Stepper
        bind:activeStep={registrationStep}
        steps={[
          { label: "Account", description: "Create your account", icon: Mail },
          { label: "Profile", description: "Personal information", icon: User },
          { label: "Complete", description: "Review and finish", icon: CircleCheck },
        ]}
      />

      <div class="min-h-[200px]">
        {#if registrationStep === 0}
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Create Your Account</h3>
            <div class="space-y-2">
              <Label for="reg-email">Email</Label>
              <Input id="reg-email" type="email" bind:value={registrationData.email} placeholder="john@example.com" />
            </div>
            <div class="space-y-2">
              <Label for="reg-password">Password</Label>
              <Input id="reg-password" type="password" bind:value={registrationData.password} placeholder="••••••••" />
            </div>
          </div>
        {:else if registrationStep === 1}
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Personal Information</h3>
            <div class="space-y-2">
              <Label for="reg-name">Full Name</Label>
              <Input id="reg-name" bind:value={registrationData.name} placeholder="John Doe" />
            </div>
            <div class="space-y-2">
              <Label for="reg-phone">Phone Number</Label>
              <Input id="reg-phone" bind:value={registrationData.phone} placeholder="+1 (555) 000-0000" />
            </div>
          </div>
        {:else}
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Review Your Information</h3>
            <dl class="space-y-3">
              <div><dt class="font-medium">Email:</dt><dd class="text-muted-foreground">{registrationData.email || "Not provided"}</dd></div>
              <div><dt class="font-medium">Name:</dt><dd class="text-muted-foreground">{registrationData.name || "Not provided"}</dd></div>
              <div><dt class="font-medium">Phone:</dt><dd class="text-muted-foreground">{registrationData.phone || "Not provided"}</dd></div>
            </dl>
          </div>
        {/if}
      </div>

      <div class="flex gap-3">
        {#if registrationStep > 0}
          <Button variant="outline" onclick={previousRegistrationStep}>Previous</Button>
        {/if}
        {#if registrationStep < 2}
          <Button onclick={nextRegistrationStep}>Next</Button>
        {:else}
          <Button>Complete Registration</Button>
        {/if}
      </div>
    </CardContent>
  </Card>

  <!-- Checkout Process -->
  <Card>
    <CardHeader>
      <CardTitle>Checkout Process</CardTitle>
      <CardDescription>E-commerce checkout flow with vertical stepper</CardDescription>
    </CardHeader>
    <CardContent class="space-y-6">
      <div class="grid gap-6 lg:grid-cols-[300px_1fr]">
        <Stepper
          orientation="vertical"
          bind:activeStep={checkoutStep}
          size="sm"
          steps={[
            { label: "Cart", description: "Review items", icon: ShoppingCart },
            { label: "Payment", description: "Payment details", icon: CreditCard },
            { label: "Shipping", description: "Shipping method", icon: Package },
            { label: "Confirm", description: "Place order", icon: CircleCheck },
          ]}
        />

        <div class="min-h-[200px]">
          {#if checkoutStep === 0}
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Your Cart</h3>
              <p class="text-sm text-muted-foreground">You have {checkoutData.items} items in your cart</p>
              <div class="text-2xl font-bold">{checkoutData.total}</div>
            </div>
          {:else if checkoutStep === 1}
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Payment Information</h3>
              <div class="space-y-2">
                <Label for="card-number">Card Number</Label>
                <Input id="card-number" bind:value={checkoutData.cardNumber} placeholder="1234 5678 9012 3456" />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                  <Label for="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div class="space-y-2">
                  <Label for="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
            </div>
          {:else if checkoutStep === 2}
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Shipping Method</h3>
              <div class="space-y-2">
                <label class="flex items-center gap-3 rounded-lg border p-4 cursor-pointer hover:bg-muted">
                  <input type="radio" name="shipping" value="standard" bind:group={checkoutData.shippingMethod} />
                  <div>
                    <div class="font-medium">Standard Shipping</div>
                    <div class="text-sm text-muted-foreground">5-7 business days - Free</div>
                  </div>
                </label>
                <label class="flex items-center gap-3 rounded-lg border p-4 cursor-pointer hover:bg-muted">
                  <input type="radio" name="shipping" value="express" bind:group={checkoutData.shippingMethod} />
                  <div>
                    <div class="font-medium">Express Shipping</div>
                    <div class="text-sm text-muted-foreground">2-3 business days - $12.99</div>
                  </div>
                </label>
              </div>
            </div>
          {:else}
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Review Order</h3>
              <dl class="space-y-2">
                <div class="flex justify-between"><dt>Items:</dt><dd>{checkoutData.items}</dd></div>
                <div class="flex justify-between"><dt>Subtotal:</dt><dd>{checkoutData.total}</dd></div>
                <div class="flex justify-between"><dt>Shipping:</dt><dd>{checkoutData.shippingMethod === "express" ? "$12.99" : "Free"}</dd></div>
                <div class="flex justify-between text-lg font-bold border-t pt-2">
                  <dt>Total:</dt>
                  <dd>{checkoutData.shippingMethod === "express" ? "$140.49" : checkoutData.total}</dd>
                </div>
              </dl>
            </div>
          {/if}
        </div>
      </div>

      <div class="flex gap-3">
        {#if checkoutStep > 0}
          <Button variant="outline" onclick={previousCheckoutStep}>Previous</Button>
        {/if}
        {#if checkoutStep < 3}
          <Button onclick={nextCheckoutStep}>Continue</Button>
        {:else}
          <Button>Place Order</Button>
        {/if}
      </div>
    </CardContent>
  </Card>

  <!-- Job Application -->
  <Card>
    <CardHeader>
      <CardTitle>Job Application</CardTitle>
      <CardDescription>Multi-step job application form</CardDescription>
    </CardHeader>
    <CardContent class="space-y-6">
      <Stepper
        bind:activeStep={applicationStep}
        clickable
        steps={[
          { label: "Personal", description: "Basic info", icon: User },
          { label: "Experience", description: "Work history", icon: Briefcase },
          { label: "Review", description: "Submit", icon: FileText },
        ]}
      />

      <div class="min-h-[200px]">
        {#if applicationStep === 0}
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Personal Information</h3>
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="space-y-2">
                <Label for="app-name">Full Name</Label>
                <Input id="app-name" bind:value={applicationData.fullName} />
              </div>
              <div class="space-y-2">
                <Label for="app-email">Email</Label>
                <Input id="app-email" type="email" bind:value={applicationData.email} />
              </div>
            </div>
            <div class="space-y-2">
              <Label for="app-position">Position Applied For</Label>
              <Input id="app-position" bind:value={applicationData.position} />
            </div>
          </div>
        {:else if applicationStep === 1}
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Experience & Education</h3>
            <div class="space-y-2">
              <Label for="app-experience">Work Experience</Label>
              <Textarea id="app-experience" bind:value={applicationData.experience} rows={4} />
            </div>
            <div class="space-y-2">
              <Label for="app-education">Education</Label>
              <Textarea id="app-education" bind:value={applicationData.education} rows={3} />
            </div>
          </div>
        {:else}
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Review Application</h3>
            <dl class="space-y-2">
              <div><dt class="font-medium">Name:</dt><dd class="text-muted-foreground">{applicationData.fullName || "Not provided"}</dd></div>
              <div><dt class="font-medium">Email:</dt><dd class="text-muted-foreground">{applicationData.email || "Not provided"}</dd></div>
              <div><dt class="font-medium">Position:</dt><dd class="text-muted-foreground">{applicationData.position || "Not provided"}</dd></div>
            </dl>
          </div>
        {/if}
      </div>

      <div class="flex gap-3">
        {#if applicationStep > 0}
          <Button variant="outline" onclick={previousApplicationStep}>Previous</Button>
        {/if}
        {#if applicationStep < 2}
          <Button onclick={nextApplicationStep}>Next</Button>
        {:else}
          <Button>Submit Application</Button>
        {/if}
      </div>
    </CardContent>
  </Card>
</div>




`

export const stepStatesDocs = `
<script lang="ts">
  import { CardPrimitives, Stepper } from "@kareyes/aether";
  import { ShoppingCart, CreditCard, CircleCheck } from "@lucide/svelte";

  const { Card, CardHeader, CardTitle, CardDescription, CardContent } = CardPrimitives;
</script>

<div class="grid gap-6">
  <Card>
    <CardHeader>
      <CardTitle>Error State</CardTitle>
      <CardDescription>Renders a red X icon with destructive colors</CardDescription>
    </CardHeader>
    <CardContent>
      <Stepper
        activeStep={1}
        steps={[
          { label: "Upload", description: "File uploaded" },
          { label: "Validate", description: "Checksum failed", error: true },
          { label: "Process", description: "Waiting" },
        ]}
      />
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Loading State</CardTitle>
      <CardDescription>Renders a spinning loader with active colors</CardDescription>
    </CardHeader>
    <CardContent>
      <Stepper
        activeStep={1}
        steps={[
          { label: "Upload", description: "Done" },
          { label: "Processing", description: "Converting file…", loading: true },
          { label: "Complete", description: "Waiting" },
        ]}
      />
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Disabled Steps</CardTitle>
      <CardDescription>Grayed out and not clickable even when the stepper is clickable</CardDescription>
    </CardHeader>
    <CardContent>
      <Stepper
        activeStep={1}
        clickable
        steps={[
          { label: "Starter", description: "Current plan" },
          { label: "Pro", description: "Active step" },
          { label: "Enterprise", description: "Contact sales", disabled: true },
          { label: "Custom", description: "Contact sales", disabled: true },
        ]}
      />
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Mixed States</CardTitle>
      <CardDescription>error, loading, disabled, and normal steps together</CardDescription>
    </CardHeader>
    <CardContent>
      <Stepper
        activeStep={2}
        variant="ghost"
        steps={[
          { label: "Upload", description: "Done" },
          { label: "Validate", description: "Checksum error", error: true },
          { label: "Process", description: "Converting…", loading: true },
          { label: "Review", description: "Pending" },
          { label: "Deploy", description: "Restricted", disabled: true },
        ]}
      />
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Icons + States</CardTitle>
      <CardDescription>Custom icons still render in inactive/completed — error and loading override them</CardDescription>
    </CardHeader>
    <CardContent>
      <Stepper
        activeStep={1}
        steps={[
          { label: "Cart", description: "Items ready", icon: ShoppingCart },
          { label: "Payment", description: "Card declined", icon: CreditCard, error: true },
          { label: "Confirm", description: "Waiting", icon: CircleCheck, disabled: true },
        ]}
      />
    </CardContent>
  </Card>
</div>`;

export const circularDocs = `
<script lang="ts">
  import { CardPrimitives, Stepper } from "@kareyes/aether";
  import { ShoppingCart, CreditCard, CircleCheck } from "@lucide/svelte";

  const { Card, CardHeader, CardTitle, CardDescription, CardContent } = CardPrimitives;

  let circularStep = $state(0);
  let circularAlwaysStep = $state(1);
</script>

<div class="grid gap-6">
  <Card>
    <CardHeader>
      <CardTitle>Basic Circular (resize to see)</CardTitle>
      <CardDescription>Switches to ring below md breakpoint</CardDescription>
    </CardHeader>
    <CardContent>
      <Stepper
        bind:activeStep={circularStep}
        clickable
        mobileLayout="circular"
        steps={[
          { label: "Account", description: "Create your account" },
          { label: "Profile", description: "Complete your profile" },
          { label: "Billing", description: "Add a payment method" },
          { label: "Review", description: "Confirm your details" },
          { label: "Done", description: "All set!" },
        ]}
      />
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Circular Always</CardTitle>
      <CardDescription>circularAlways — ring visible at all breakpoints</CardDescription>
    </CardHeader>
    <CardContent>
      <Stepper
        bind:activeStep={circularAlwaysStep}
        clickable
        mobileLayout="circular"
        circularAlways
        steps={[
          { label: "Plan", description: "Define scope" },
          { label: "Build", description: "Implement features" },
          { label: "Test", description: "QA and review" },
          { label: "Ship", description: "Deploy to production" },
        ]}
      />
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Large Ring (circularSize=200)</CardTitle>
      <CardDescription>Custom ring diameter</CardDescription>
    </CardHeader>
    <CardContent>
      <Stepper
        mobileLayout="circular"
        circularAlways
        circularSize={200}
        activeStep={1}
        steps={[
          { label: "Research", description: "Gather requirements" },
          { label: "Design", description: "Create wireframes" },
          { label: "Implement", description: "Write the code" },
          { label: "Launch", description: "Go live 🚀" },
        ]}
      />
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Non-expandable Ring</CardTitle>
      <CardDescription>circularExpandable=false — no drawer on click</CardDescription>
    </CardHeader>
    <CardContent>
      <Stepper
        activeStep={1}
        mobileLayout="circular"
        circularAlways
        circularExpandable={false}
        steps={[
          { label: "Step 1", description: "First step" },
          { label: "Step 2", description: "Second step" },
          { label: "Step 3", description: "Third step" },
          { label: "Step 4", description: "Final step" },
        ]}
      />
    </CardContent>
  </Card>
</div>`;

export const customContentDocs = `
<script lang="ts">
  import { CardPrimitives, StepperPrimitives } from "@kareyes/aether";
   import { User, Settings, CircleCheck, Package, ShoppingCart, MapPin, FileText, Briefcase, GraduationCap } from "@kareyes/aether/icons";

  const { StepperRoot, StepperStep, StepperSeparator } = StepperPrimitives;
  const { Card, CardHeader, CardTitle, CardDescription, CardContent } = CardPrimitives;
</script>

<Card>
  <CardHeader>
    <CardTitle>Custom Rich Content</CardTitle>
    <CardDescription>Use StepperRoot for per-step children snippets and rich content</CardDescription>
  </CardHeader>
  <CardContent class="space-y-6">
    <StepperRoot activeStep={1}>
      <StepperStep step={0}>
        {#snippet icon()}
          <User class="size-4" />
        {/snippet}
        <div class="space-y-1">
          <div class="font-medium">Account Setup</div>
          <div class="text-sm text-muted-foreground">Create your credentials</div>
        </div>
      </StepperStep>
      <StepperSeparator completed />
      <StepperStep step={1}>
        {#snippet icon()}
          <Settings class="size-4" />
        {/snippet}
        <div class="space-y-1">
          <div class="font-medium flex items-center gap-2">
            Configuration
            <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Active</span>
          </div>
          <div class="text-sm text-muted-foreground">Customize your settings</div>
        </div>
      </StepperStep>
      <StepperSeparator />
      <StepperStep step={2}>
        {#snippet icon()}
          <CircleCheck class="size-4" />
        {/snippet}
        <div class="space-y-1">
          <div class="font-medium">Completion</div>
          <div class="text-sm text-muted-foreground">Review and launch</div>
        </div>
      </StepperStep>
    </StepperRoot>
  </CardContent>
</Card>
  <Card>
    <CardHeader>
      <CardTitle>Custom Styling</CardTitle>
      <CardDescription>Apply custom styles and components within step content</CardDescription>
    </CardHeader>
    <CardContent class="space-y-6">
      <div class="max-w-md">
        <StepperRoot orientation="vertical" activeStep={1} size="sm">
          <StepperStep step={0}>
            {#snippet icon()}
              <Package class="size-3" />
            {/snippet}
            <div class="space-y-2 pb-4">
              <div class="font-semibold text-base">Order Placed</div>
              <div class="text-sm text-muted-foreground">
                Your order <span class="font-mono text-foreground">#ORD-12345</span> has been confirmed
              </div>
              <div class="text-xs text-muted-foreground">Jan 14, 2026 • 10:30 AM</div>
            </div>
          </StepperStep>
          <StepperSeparator completed />
          <StepperStep step={1}>
            {#snippet icon()}
              <ShoppingCart class="size-3" />
            {/snippet}
            <div class="space-y-2 pb-4">
              <div class="font-semibold text-base flex items-center gap-2">
                Processing
                <span class="inline-flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              </div>
              <div class="text-sm text-muted-foreground">Your order is being prepared for shipment</div>
              <div class="text-xs text-muted-foreground">Estimated: 2-3 hours</div>
            </div>
          </StepperStep>
          <StepperSeparator />
          <StepperStep step={2}>
            {#snippet icon()}
              <MapPin class="size-3" />
            {/snippet}
            <div class="space-y-2">
              <div class="font-semibold text-base">Out for Delivery</div>
              <div class="text-sm text-muted-foreground">Package will arrive at your address</div>
              <div class="text-xs text-muted-foreground">Pending</div>
            </div>
          </StepperStep>
        </StepperRoot>
      </div>
    </CardContent>
  </Card>

  <div class="grid gap-6 md:grid-cols-2">
    <Card>
      <CardHeader>
        <CardTitle>With Status Badges</CardTitle>
      </CardHeader>
      <CardContent>
        <StepperRoot activeStep={1} variant="outline">
          <StepperStep step={0}>
            {#snippet icon()}
              <FileText class="size-4" />
            {/snippet}
            <div class="space-y-1">
              <div class="font-medium text-sm">Draft</div>
              <div class="text-xs text-green-600 dark:text-green-400">✓ Completed</div>
            </div>
          </StepperStep>
          <StepperSeparator completed />
          <StepperStep step={1}>
            {#snippet icon()}
              <User class="size-4" />
            {/snippet}
            <div class="space-y-1">
              <div class="font-medium text-sm">Review</div>
              <div class="text-xs text-blue-600 dark:text-blue-400">⟳ In Progress</div>
            </div>
          </StepperStep>
          <StepperSeparator />
          <StepperStep step={2}>
            {#snippet icon()}
              <CircleCheck class="size-4" />
            {/snippet}
            <div class="space-y-1">
              <div class="font-medium text-sm">Publish</div>
              <div class="text-xs text-muted-foreground">○ Pending</div>
            </div>
          </StepperStep>
        </StepperRoot>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>With Time Estimates</CardTitle>
      </CardHeader>
      <CardContent>
        <StepperRoot activeStep={0} variant="ghost">
          <StepperStep step={0}>
            {#snippet icon()}
              <Briefcase class="size-4" />
            {/snippet}
            <div class="space-y-0.5">
              <div class="font-medium text-sm">Interview</div>
              <div class="text-xs text-muted-foreground">~30 minutes</div>
            </div>
          </StepperStep>
          <StepperSeparator />
          <StepperStep step={1}>
            {#snippet icon()}
              <GraduationCap class="size-4" />
            {/snippet}
            <div class="space-y-0.5">
              <div class="font-medium text-sm">Assessment</div>
              <div class="text-xs text-muted-foreground">~45 minutes</div>
            </div>
          </StepperStep>
          <StepperSeparator />
          <StepperStep step={2}>
            {#snippet icon()}
              <CircleCheck class="size-4" />
            {/snippet}
            <div class="space-y-0.5">
              <div class="font-medium text-sm">Results</div>
              <div class="text-xs text-muted-foreground">Instant</div>
            </div>
          </StepperStep>
        </StepperRoot>
      </CardContent>
    </Card>
  </div>



`;
