<script lang="ts">
  import { Button, CardPrimitives, Stepper } from "@kareyes/aether";

  const { Card, CardHeader, CardTitle, CardDescription, CardContent } = CardPrimitives;

  let basicStep = $state(1);
  let verticalStep = $state(0);
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
</div>
