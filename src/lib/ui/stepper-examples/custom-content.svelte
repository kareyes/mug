<script lang="ts">
  import { CardPrimitives, StepperPrimitives } from "@kareyes/aether";
  import { User, Settings, CircleCheck, Package, ShoppingCart, MapPin, FileText, Briefcase, GraduationCap } from "@lucide/svelte";

  const { StepperRoot, StepperStep, StepperSeparator } = StepperPrimitives;
  const { Card, CardHeader, CardTitle, CardDescription, CardContent } = CardPrimitives;
</script>

<div class="grid gap-6">
  <Card>
    <CardHeader>
      <CardTitle>Custom Rich Content</CardTitle>
      <CardDescription>Use children snippet to provide custom label and description with rich formatting</CardDescription>
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
</div>
