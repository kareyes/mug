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
        onStepClick={(step: number) => (result = `Clicked step ${step + 1}`)}
        steps={[
          { label: "Step 1", description: "First step" },
          { label: "Step 2", description: "Second step" },
          { label: "Step 3", description: "Third step" },
        ]}
      />
      {#if result}
        <p class="mt-3 text-sm text-muted-foreground">{result}</p>
      {/if}
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>With Custom Icons</CardTitle>
      <CardDescription>Using Lucide icons for visual clarity</CardDescription>
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
</div>
