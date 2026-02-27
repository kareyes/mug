<script lang="ts">
  import { CardPrimitives, Stepper } from "@kareyes/aether";
  import { ShoppingCart, CreditCard, CircleCheck } from "@lucide/svelte";

  const { Card, CardHeader, CardTitle, CardDescription, CardContent } = CardPrimitives;
</script>

<div class="grid gap-6">
  <Card>
    <CardHeader>
      <CardTitle>Error State</CardTitle>
      <CardDescription>Renders a red X icon with destructive colors — useful for failed validation</CardDescription>
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
      <CardDescription>Renders a spinning loader with active colors — useful for async operations</CardDescription>
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
</div>
