# New Component Guide

Step-by-step checklist for adding a new component demo to this documentation site. Every existing component follows this exact pattern — no exceptions.

---

## Overview: 5 files to touch

| # | File | Action |
|---|------|--------|
| 1 | `src/lib/code-blocks/<slug>.ts` | Create — code snippet strings |
| 2 | `src/lib/ui/<slug>.svelte` | Create — live demo file |
| 3 | `src/lib/docs/<slug>.md` | Create — API reference (optional) |
| 4 | `src/routes/components/[slug]/+page.ts` | Edit — register slug for prerender |
| 5 | `src/routes/components/[slug]/+page.svelte` | Edit — import + add to componentMap |
| 6 | `src/routes/+layout.svelte` | Edit — add nav link |

---

## Step 1 — `src/lib/code-blocks/<slug>.ts`

Each section in the demo gets one named export that is a template-literal string containing valid Svelte markup. This string is passed directly to `CodeBlock`'s `code` prop.

```ts
// src/lib/code-blocks/my-component.ts

export const basicUsageDocs = `
<script lang="ts">
  import { MyComponent } from "@kareyes/aether";
</script>

<MyComponent label="Hello" />`;

export const withVariantsDocs = `
<script lang="ts">
  import { MyComponent } from "@kareyes/aether";
</script>

<MyComponent variant="outline" label="Outlined" />
<MyComponent variant="ghost" label="Ghost" />`;

// one export per section — name ends with "Docs" by convention
```

**Rules:**
- Each export is a self-contained Svelte snippet (includes its own `<script>` block).
- Use backtick template literals. Escape `$` in reactive expressions as `\$`.
- The code in these strings must exactly match what is rendered in the `.svelte` demo file (they are displayed side-by-side).
- Use `md:grid-cols-2` in code-block strings (not `@md:`); the `@container` prefix is only for the live PreviewContainer.

---

## Step 2 — `src/lib/ui/<slug>.svelte`

This is the live interactive demo. The structure is always:

```svelte
<script lang="ts">
  // 1. Import code-block strings
  import { basicUsageDocs, withVariantsDocs } from "$lib/code-blocks/my-component";

  // 2. Import aether components and icons
  import { MyComponent, Card, CodeBlock } from "@kareyes/aether";
  import { SomeIcon } from "@kareyes/aether/icons";

  // 3. Import PreviewContainer
  import PreviewContainer from "../components/preview-container.svelte";

  // 4. Local reactive state for interactive demos
  let value = $state("");
</script>

<div class="container mx-auto p-6 max-w-6xl">
  <div class="space-y-12">

    <!-- One Card per section -->
    <Card variant="ghost" class="p-6 bg-background">
      <h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
      <p class="text-sm text-muted-foreground mb-4">
        Short description of what this section shows.
      </p>
      <PreviewContainer>
        <!-- Live demo here -->
        <MyComponent label="Hello" />
      </PreviewContainer>
      <br />
      <CodeBlock
        title="Code"
        language="Svelte"
        showLineNumbers
        collapsible
        maxHeight="250px"
        variant="default"
        code={basicUsageDocs}
      />
    </Card>

    <!-- Repeat Card block for each section -->

  </div>
</div>
```

**Rules:**
- Outer wrapper: `<div class="container mx-auto p-6 max-w-6xl">` with `<div class="space-y-12">` inside.
- Every section is a `<Card variant="ghost" class="p-6 bg-background">`.
- Section heading: `<h2 class="text-2xl font-semibold mb-4">`.
- Sub-headings inside a section (within `PreviewContainer`): `<p class="text-sm font-medium mb-2">` — **not** `<h3>`.
- `<PreviewContainer>` wraps the live demo. Then `<br />` then `<CodeBlock>`.
- `CodeBlock` props are always identical: `title="Code" language="Svelte" showLineNumbers collapsible maxHeight="250px" variant="default"`.
- Use `@container` responsive classes (`@md:grid-cols-2`) inside `PreviewContainer` for breakpoint layouts. Use standard Tailwind (`md:grid-cols-2`) in code-block strings.
- No `<svelte:head>` title tag needed (existing ones from older components are legacy).
- The commented-out `<h1>` block present in older files is intentional dead code — do not add it.

---

## Step 3 — `src/lib/docs/<slug>.md` (optional)

Markdown API reference shown in the "Documentation" tab. If this file does not exist, the Documentation tab is hidden automatically.

```markdown
### Basic Usage

\```svelte
<script lang="ts">
  import { MyComponent } from "@kareyes/aether";
</script>

<MyComponent label="Hello" />
\```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Display label |
| `variant` | `'default' \| 'outline'` | `'default'` | Visual style |
| `disabled` | `boolean` | `false` | Disables interaction |
```

**Rules:**
- No `<h1>` or `<h2>` at the top — the page already renders a title from `componentMap`.
- Start with `### Basic Usage` (h3 level).
- The filename must match the slug exactly: slug `my-component` → file `my-component.md`.

---

## Step 4 — `src/routes/components/[slug]/+page.ts`

Add the slug to the `entries` array so SvelteKit prerenders the page.

```ts
export const entries: EntryGenerator = () => {
  return [
    // ... existing slugs in alphabetical order ...
    { slug: 'my-component' },   // ← add here, keep alphabetical
    // ...
  ];
};
```

The `load` function automatically tries to import `src/lib/docs/<slug>.md?raw` — no changes needed there.

---

## Step 5 — `src/routes/components/[slug]/+page.svelte`

Two changes in this file:

### 5a. Import the demo component (top of `<script>`)

```ts
import MyComponent from "$lib/ui/my-component.svelte";
```

Follow the existing import casing conventions — most are lowercase, some (Calendar, Sheet, etc.) are PascalCase. Be consistent with the variable name used in `componentMap`.

### 5b. Add entry to `componentMap`

```ts
const componentMap: Record<string, { name: string; component: any; title: string; description: string }> = {
  // ... existing entries ...
  "my-component": {
    name: "my-component",
    component: MyComponent,
    title: "My Component",
    description: "One sentence describing what the component does and its key capabilities."
  },
  // ...
};
```

**Rules:**
- Key is the URL slug (kebab-case).
- `name` matches the slug.
- `title` is Title Case display name.
- `description` is a single sentence, no trailing period required. Describe function, not implementation.

---

## Step 6 — `src/routes/+layout.svelte`

Add the nav link to the `components` array. **Keep the list alphabetical by label.**

```ts
const components = [
  // ... existing entries ...
  { label: 'My Component', href: '/components/my-component' },
  // ...
];
```

---

## Complete checklist

```
[ ] src/lib/code-blocks/my-component.ts   — one named export per demo section
[ ] src/lib/ui/my-component.svelte        — Card + PreviewContainer + CodeBlock per section
[ ] src/lib/docs/my-component.md          — optional, omit if no API docs yet
[ ] +page.ts entries[]                    — { slug: 'my-component' } added alphabetically
[ ] +page.svelte imports                  — import MyComponent from "$lib/ui/my-component.svelte"
[ ] +page.svelte componentMap             — "my-component": { name, component, title, description }
[ ] +layout.svelte components[]           — { label: 'My Component', href: '/components/my-component' }
```

---

## Quick reference: CodeBlock props (never change these)

```svelte
<CodeBlock
  title="Code"
  language="Svelte"
  showLineNumbers
  collapsible
  maxHeight="250px"
  variant="default"
  code={sectionNameDocs}
/>
```

## Quick reference: Card section shell (never change this)

```svelte
<Card variant="ghost" class="p-6 bg-background">
  <h2 class="text-2xl font-semibold mb-4">Section Title</h2>
  <p class="text-sm text-muted-foreground mb-4">
    Section description.
  </p>
  <PreviewContainer>
    <!-- demo -->
  </PreviewContainer>
  <br />
  <CodeBlock ... />
</Card>
```

## Quick reference: sub-headings inside PreviewContainer

```svelte
<!-- CORRECT -->
<p class="text-sm font-medium mb-2">Sub-heading</p>

<!-- WRONG — do not use h3 with large text -->
<h3 class="text-lg font-medium mb-2">Sub-heading</h3>
```
