# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm preview      # Preview production build
pnpm check        # Type-check with svelte-check
pnpm check:watch  # Type-check in watch mode
pnpm deploy       # Build and deploy (runs deploy.sh)
```

No test suite is configured.

## Architecture

This is a **SvelteKit documentation/demo site** for the `@kareyes/aether` UI component library. It is statically prerendered (`export const prerender = true` in `+layout.ts`).

### Routing

- `/components/[slug]` — component demos (e.g. `/components/button`)
- `/forms/[slug]` — form schema examples (e.g. `/forms/validation`)
- `/preview` — bare preview mode (no sidebar chrome, used for iframe embeds)

Both slug routes are fully prerendered; the slugs that exist are registered in each `+page.ts` via `entries: EntryGenerator`.

### How a component demo page works

1. **`src/routes/components/[slug]/+page.svelte`** — imports every demo component from `$lib/ui/` and maps slugs to components. Navigating to `/components/button` renders `$lib/ui/button.svelte`.

2. **`src/lib/ui/<component>.svelte`** — the actual demo file. It renders a `PreviewContainer` + `CodeBlock` pattern for each section:
   - `PreviewContainer` wraps the live interactive demo with a dot-grid background and device-mode switcher (desktop/tablet/mobile).
   - `CodeBlock` shows the corresponding source snippet from `$lib/code-blocks/<component>.ts`.

3. **`src/lib/code-blocks/<component>.ts`** — exports named string constants (e.g. `basicGroupsDocs`) that are the code snippets shown in the `CodeBlock`. These strings must stay in sync with what's actually rendered in the `.svelte` file above them.

4. **`src/lib/docs/<component>.md`** — Markdown API reference docs. For the `/forms/[slug]` route, loading a `schema` slug loads `form-schema.md` from here. The markdown is rendered with `marked` and styled via `.markdown-body` CSS in `+page.svelte`.

### Layout and TOC sidebar

`src/routes/+layout.svelte` sets up the shell:
- `SidebarProvider class="h-svh overflow-hidden"` — pins viewport height so child flex rows create independent scroll areas.
- Inside `SidebarInset`: a `flex` row with `<main class="overflow-y-auto">` (the scrollable content area) and a conditional `<aside>` (the "On This Page" TOC). The aside is a sibling to `<main>`, not a child, so it stays fixed while main scrolls.
- TOC state (`headings`, `activeId`) lives in `+layout.svelte` as `$state` and is shared with pages via `setContext('toc', toc)`.
- Pages use `getContext('toc')` and scrape `h2` elements from the DOM via `IntersectionObserver` to populate and track active headings.

### Styling

- **Tailwind CSS v4** via `@tailwindcss/vite` plugin. No `tailwind.config.js`.
- `src/app.css` imports `tailwindcss`, then `@kareyes/aether/styles`, then adds a `@source` directive so Tailwind scans the aether dist files through the pnpm symlink: `@source "../node_modules/@kareyes/aether/dist/**/*.{svelte,js}"`.
- Dark mode is managed by `DarkModePrimitives.ModeWatcher` from aether.

### `@kareyes/aether` component library

All UI primitives come from this private GitHub Packages registry package. Key imports:
- Components: `import { Button, Card, CodeBlock, Field, ... } from "@kareyes/aether"`
- Compound primitives (e.g. `ButtonGroupPrimitives`, `TabsPrimitives`, `SidebarPrimitives`, `FieldPrimitives`): destructure the sub-components after importing the primitive object.
- Icons: `import { Bold, Italic, ... } from "@kareyes/aether/icons"` (re-exports all Lucide icons)
- Utilities: `import { cn } from "@kareyes/aether/utils"`

The `Field` component accepts `label`, `description`, `error`, `required`, and `disabled` props to wrap form controls with consistent labeling and error display.

The `Button` component supports an `icon` prop (pass a Lucide icon component) with `size="icon"` for square icon-only buttons.

### Adding a new component demo

See **[COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md)** for the full step-by-step checklist. In brief, six edits are needed:

1. Create `src/lib/code-blocks/<slug>.ts` — one named export per demo section.
2. Create `src/lib/ui/<slug>.svelte` — Card + PreviewContainer + CodeBlock per section.
3. Optionally create `src/lib/docs/<slug>.md` — API reference markdown.
4. Add `{ slug: '<slug>' }` to `entries` in `src/routes/components/[slug]/+page.ts`.
5. Import and add to `componentMap` in `src/routes/components/[slug]/+page.svelte`.
6. Add `{ label, href }` to the `components` array in `src/routes/+layout.svelte`.
