export const basicUsageDocs = `
<script lang="ts">
  import { Checkbox } from "@kareyes/aether";

  let basicChecked = \$state(false);
  let withLabelChecked = \$state(false);
  let withDescriptionChecked = \$state(false);
</script>

<div class="space-y-4">
  <Checkbox bind:checked={basicChecked} />
  <Checkbox
    bind:checked={withLabelChecked}
    label="Accept terms and conditions"
  />
  <Checkbox
    bind:checked={withDescriptionChecked}
    label="Enable notifications"
    description="Get notified about updates and new features"
  />
</div>`;

export const sizesDocs = `
<script lang="ts">
  import { Checkbox } from "@kareyes/aether";

  let smallChecked = \$state(false);
  let defaultChecked = \$state(false);
  let largeChecked = \$state(false);
  let xlChecked = \$state(false);
</script>

<div class="flex items-center gap-6">
  <Checkbox bind:checked={smallChecked} size="sm" label="Small" />
  <Checkbox bind:checked={defaultChecked} size="default" label="Default" />
  <Checkbox bind:checked={largeChecked} size="lg" label="Large" />
  <Checkbox bind:checked={xlChecked} size="xl" label="Extra Large" />
</div>`;

export const variantsDocs = `
<script lang="ts">
  import { Checkbox } from "@kareyes/aether";

  let destructiveChecked = \$state(false);
  let successChecked = \$state(false);
  let warningChecked = \$state(false);
</script>

<div class="space-y-4">
  <Checkbox
    bind:checked={destructiveChecked}
    variant="destructive"
    label="Delete all data"
    description="This action cannot be undone"
  />
  <Checkbox
    bind:checked={successChecked}
    variant="success"
    label="Mark as completed"
    description="This will mark the task as done"
  />
  <Checkbox
    bind:checked={warningChecked}
    variant="warning"
    label="Proceed with caution"
    description="This action requires attention"
  />
</div>`;

export const lineThroughDocs = `
<script lang="ts">
  import { Checkbox } from "@kareyes/aether";

  let lineThroughChecked = \$state(true);
</script>

<Checkbox
  bind:checked={lineThroughChecked}
  lineThrough={true}
  label="Completed task with line-through"
  description="This text gets crossed out when checked"
/>`;

export const indeterminateDocs = `
<script lang="ts">
  import { Checkbox } from "@kareyes/aether";

  let indeterminateState = \$state(false);
</script>

<Checkbox
  bind:indeterminate={indeterminateState}
  label="Partially selected"
  description="This checkbox is in an indeterminate state"
/>`;

export const todoListDocs = `
<script lang="ts">
  import { Checkbox } from "@kareyes/aether";

  let todos = \$state([
    { id: 1, text: "Complete project setup", completed: true },
    { id: 2, text: "Design components", completed: true },
    { id: 3, text: "Implement checkbox variants", completed: false },
    { id: 4, text: "Write documentation", completed: false },
    { id: 5, text: "Test in different browsers", completed: false },
  ]);
</script>

<div class="space-y-3 bg-card p-6 rounded-lg border">
  {#each todos as todo (todo.id)}
    <Checkbox
      bind:checked={todo.completed}
      label={todo.text}
      lineThrough={true}
      size="default"
      class="w-full"
    />
  {/each}
</div>

<div class="text-sm text-muted-foreground">
  Completed: {todos.filter(t => t.completed).length} / {todos.length}
</div>`;

export const errorStatesDocs = `
<script lang="ts">
  import { Checkbox } from "@kareyes/aether";
</script>

<div class="space-y-4">
  <Checkbox
    error={true}
    label="Checkbox with Error"
    description="This checkbox must be checked"
    onError={(err) => console.log('Error state:', err)}
  />
  <Checkbox
    variant="destructive"
    error={true}
    checked={true}
    label="Error with Destructive Variant"
    description="Invalid selection detected"
  />
  <Checkbox
    size="lg"
    error={true}
    label="Large Error Checkbox"
  />
</div>`;

export const withFieldDocs = `
<script lang="ts">
  import { Checkbox, Field, FieldPrimitives } from "@kareyes/aether";

  let withLabelChecked = \$state(false);
  let basicChecked = \$state(false);
  let withDescriptionChecked = \$state(false);
  let successChecked = \$state(false);
</script>

<!-- Single Checkbox with Field -->
<Field
  label="Agreements"
  description="Please review and accept our policies"
  required
>
  <Checkbox
    label="I accept the terms and conditions"
    bind:checked={withLabelChecked}
  />
</Field>

<!-- With Validation -->
<Field
  label="Privacy Policy"
  description="You must accept to continue"
  required
  error={!basicChecked ? "Please accept the privacy policy" : undefined}
>
  <Checkbox
    label="I accept the privacy policy"
    bind:checked={basicChecked}
    error={!basicChecked}
  />
</Field>

<!-- Multiple Checkboxes with FieldPrimitives.Set -->
<FieldPrimitives.Set>
  <FieldPrimitives.Legend>Email Preferences</FieldPrimitives.Legend>
  <FieldPrimitives.Description>Choose which emails you'd like to receive</FieldPrimitives.Description>
  <FieldPrimitives.Separator />
  <FieldPrimitives.Group class="gap-4">
    <Checkbox label="Notifications" variant="default" bind:checked={withDescriptionChecked} />
    <Checkbox label="Marketing Emails" variant="default" checked={false} />
    <Checkbox label="Product Updates" variant="success" bind:checked={successChecked} />
  </FieldPrimitives.Group>
</FieldPrimitives.Set>`;

export const disabledStatesDocs = `
<script lang="ts">
  import { Checkbox } from "@kareyes/aether";
</script>

<div class="space-y-4">
  <Checkbox
    checked={false}
    disabled
    label="Disabled unchecked"
    description="This checkbox is disabled"
  />
  <Checkbox
    checked={true}
    disabled
    label="Disabled checked"
    description="This checkbox is disabled and checked"
  />
</div>`;
