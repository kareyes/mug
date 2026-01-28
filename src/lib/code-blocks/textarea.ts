export const variantsDocs = `
<script lang="ts">
  import { Textarea, Label } from "@kareyes/aether";

  let defaultValue = \$state("");
  let outlineValue = \$state("");
  let filledValue = \$state("");
  let ghostValue = \$state("");
  let underlineValue = \$state("");
</script>

<div class="grid gap-6 md:grid-cols-2">
  <div class="space-y-2">
    <Label class="text-sm font-medium">Default</Label>
    <Textarea bind:value={defaultValue} placeholder="Default variant..." />
  </div>

  <div class="space-y-2">
    <Label class="text-sm font-medium">Outline</Label>
    <Textarea variant="outline" bind:value={outlineValue} placeholder="Outline variant..." />
  </div>

  <div class="space-y-2">
    <Label class="text-sm font-medium">Filled</Label>
    <Textarea variant="filled" bind:value={filledValue} placeholder="Filled variant..." />
  </div>

  <div class="space-y-2">
    <Label class="text-sm font-medium">Ghost</Label>
    <Textarea variant="ghost" bind:value={ghostValue} placeholder="Ghost variant..." />
  </div>

  <div class="space-y-2">
    <Label class="text-sm font-medium">Underline</Label>
    <Textarea variant="underline" bind:value={underlineValue} placeholder="Underline variant..." />
  </div>
</div>`;

export const sizesDocs = `
<script lang="ts">
  import { Textarea, Label } from "@kareyes/aether";
</script>

<div class="grid gap-6">
  <div class="space-y-2">
    <Label class="text-sm font-medium">Small</Label>
    <Textarea size="sm" placeholder="Small size textarea..." />
  </div>

  <div class="space-y-2">
    <Label class="text-sm font-medium">Default</Label>
    <Textarea size="default" placeholder="Default size textarea..." />
  </div>

  <div class="space-y-2">
    <Label class="text-sm font-medium">Large</Label>
    <Textarea size="lg" placeholder="Large size textarea..." />
  </div>
</div>`;

export const featuresDocs = `
<script lang="ts">
  import { Textarea, Label } from "@kareyes/aether";

  let autoResizeValue = \$state("");
  let withCountValue = \$state("");
</script>

<div class="grid gap-6 md:grid-cols-2">
  <div class="space-y-2">
    <Label class="text-sm font-medium">Auto-Resize (3-8 rows)</Label>
    <Textarea
      bind:value={autoResizeValue}
      autoResize
      minRows={3}
      maxRows={8}
      placeholder="Type multiple lines to see auto-resize..."
    />
  </div>

  <div class="space-y-2">
    <Label class="text-sm font-medium">Character Counter (max 200)</Label>
    <Textarea
      bind:value={withCountValue}
      maxLength={200}
      showCount
      placeholder="Type to see counter..."
    />
  </div>

  <div class="space-y-2">
    <Label class="text-sm font-medium">Disabled</Label>
    <Textarea disabled value="This textarea is disabled" />
  </div>

  <div class="space-y-2">
    <Label class="text-sm font-medium">Error State</Label>
    <Textarea error={true} placeholder="This field has an error..." />
    <p class="text-xs text-destructive">This field is required</p>
  </div>

  <div class="space-y-2">
    <Label class="text-sm font-medium">Resize: None</Label>
    <Textarea resize="none" placeholder="Cannot be manually resized..." />
  </div>

  <div class="space-y-2">
    <Label class="text-sm font-medium">Resize: Both</Label>
    <Textarea resize="both" placeholder="Resize in any direction..." />
  </div>
</div>`;

export const formExampleDocs = `
<script lang="ts">
  import { Textarea, Button, Label } from "@kareyes/aether";

  let formData = \$state({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit() {
    console.log("Form submitted:", formData);
    alert(\\\`Message submitted:\\n\\n\\\${formData.message}\\\`);
  }
</script>

<form class="space-y-4" on:submit|preventDefault={handleSubmit}>
  <div class="space-y-2">
    <Label for="name">Name <span class="text-destructive">*</span></Label>
    <input
      id="name"
      type="text"
      bind:value={formData.name}
      placeholder="John Doe"
      required
    />
  </div>

  <div class="space-y-2">
    <Label for="message">Message <span class="text-destructive">*</span></Label>
    <Textarea
      id="message"
      bind:value={formData.message}
      variant="outline"
      size="lg"
      maxLength={500}
      showCount
      autoResize
      minRows={4}
      maxRows={10}
      placeholder="Type your message here..."
      required
    />
  </div>

  <Button type="submit">Submit Message</Button>
</form>`;

export const combinedFeaturesDocs = `
<script lang="ts">
  import { Textarea, Label } from "@kareyes/aether";
</script>

<div class="grid gap-6 md:grid-cols-2">
  <div class="space-y-2">
    <Label class="text-sm font-medium">Small + Filled + Counter</Label>
    <Textarea
      variant="filled"
      size="sm"
      maxLength={100}
      showCount
      placeholder="Compact with counter..."
    />
  </div>

  <div class="space-y-2">
    <Label class="text-sm font-medium">Large + Auto-Resize + Counter</Label>
    <Textarea
      variant="outline"
      size="lg"
      autoResize
      minRows={3}
      maxRows={6}
      showCount
      placeholder="Full-featured textarea..."
    />
  </div>
</div>`;

export const textareaFieldDocs = `
<script lang="ts">
  import { Textarea, Card, Field } from "@kareyes/aether";

  let description = \$state("");
</script>

<div class="grid gap-6 md:grid-cols-2">
  <Card>
    <Field label="Error State inside Field Textarea" error="This field has an error">
      <Textarea
        error={true}
        maxLength={100}
        showCount
        placeholder="Message exceeds limit..."
      />
    </Field>
  </Card>

  <Card>
    <Field label="Outline Textarea">
      <Textarea placeholder="Enter your text..." variant="outline" />
    </Field>
  </Card>

  <Card>
    <Field label="With Character Counter" description="Maximum 200 characters">
      <Textarea
        bind:value={description}
        placeholder="Enter your text..."
        maxLength={200}
        showCount
      />
    </Field>
  </Card>

  <Card>
    <Field label="Auto-Resize" description="Automatically grows with content">
      <Textarea placeholder="Start typing..." autoResize minRows={2} maxRows={6} />
    </Field>
  </Card>
</div>`;
