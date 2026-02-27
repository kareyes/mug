<script lang="ts">
  import { CardPrimitives, Stepper } from "@kareyes/aether";
  import { ShoppingCart, CreditCard, CircleCheck } from "@lucide/svelte";

  const { Card, CardHeader, CardTitle, CardDescription, CardContent } = CardPrimitives;

  let circularStep = $state(0);
  let circularAlwaysStep = $state(1);
  let circularLargeStep = $state(0);
  let circularIconStep = $state(1);
  let nonExpandableStep = $state(1);
</script>

<div class="grid gap-6">
  <Card>
    <CardHeader>
      <CardTitle>Basic Circular (resize to see)</CardTitle>
      <CardDescription>Switches to ring below md breakpoint</CardDescription>
    </CardHeader>
    <CardContent>
      <div class="space-y-4">
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
        <p class="text-sm text-muted-foreground">Step {circularStep + 1} of 5</p>
      </div>
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Circular Always (desktop preview)</CardTitle>
      <CardDescription>circularAlways — ring visible at all breakpoints</CardDescription>
    </CardHeader>
    <CardContent>
      <div class="space-y-4">
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
      </div>
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Large Ring (circularSize=200)</CardTitle>
      <CardDescription>Custom ring diameter — all measurements scale</CardDescription>
    </CardHeader>
    <CardContent>
      <div class="space-y-4">
        <Stepper
          bind:activeStep={circularLargeStep}
          clickable
          mobileLayout="circular"
          circularAlways
          circularSize={200}
          steps={[
            { label: "Research", description: "Gather requirements" },
            { label: "Design", description: "Create wireframes" },
            { label: "Implement", description: "Write the code" },
            { label: "Launch", description: "Go live 🚀" },
          ]}
        />
      </div>
    </CardContent>
  </Card>



  <Card>
    <CardHeader>
      <CardTitle>Non-expandable Ring</CardTitle>
      <CardDescription>circularExpandable=false — no drawer on click</CardDescription>
    </CardHeader>
    <CardContent>
      <Stepper
        bind:activeStep={nonExpandableStep}
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
</div>
