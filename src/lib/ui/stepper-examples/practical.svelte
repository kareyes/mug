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
