# @kareyes/aether Implementation Guide

Complete guide for implementing the @kareyes/aether component library in a SvelteKit project.

## Overview

@kareyes/aether is a Svelte component library that provides pre-built UI components with Tailwind CSS v4 styling. This document outlines all necessary changes to properly integrate it into your SvelteKit project.

---

## 1. Package Installation & Registry Configuration

### 1.1 Create `.npmrc` file

**File:** `.npmrc` (root of project)

```properties
@kareyes:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

**Purpose:** Configure npm to use GitHub Packages registry for the @kareyes scope. Replace `YOUR_GITHUB_TOKEN` with your actual GitHub Personal Access Token with `read:packages` permission.

### 1.2 Update `package.json`

**File:** `package.json`

Add the following dependencies:

```json
{
  "dependencies": {
    "@kareyes/aether": "^0.0.4",
    "@tailwindcss/vite": "^4.1.18",
    "tailwindcss": "^4.1.18"
  }
}
```

**Run installation:**
```bash
pnpm install
# or
npm install
# or
yarn install
```

---

## 2. Tailwind CSS v4 Configuration

### 2.1 Install Tailwind CSS Vite Plugin

Already included in package.json dependencies above.

### 2.2 Update `vite.config.ts`

**File:** `vite.config.ts`

```typescript
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [sveltekit(), tailwindcss()],
});
```

**Changes:**
- Import `@tailwindcss/vite`
- Add `tailwindcss()` to the plugins array

---

## 3. Styles Configuration

### 3.1 Create/Update `src/app.css`

**File:** `src/app.css`

```css
@import "tailwindcss";

@import "@kareyes/aether/styles";

@source "../node_modules/@kareyes/aether/dist/**/*.{svelte,js}";
```

**Explanation:**
- `@import "tailwindcss"` - Import Tailwind CSS v4 base styles
- `@import "@kareyes/aether/styles"` - Import aether component styles and theme variables
- `@source` directive - Tell Tailwind CSS v4 to scan aether components for utility classes

### 3.2 Import `app.css` in Layout

**File:** `src/routes/+layout.svelte`

```svelte
<script lang="ts">
  import "../app.css";
  
  let { children } = $props();
</script>

{@render children()}
```

**Changes:**
- Add `import "../app.css";` at the top of the script section

---

## 4. Component Usage

### 4.1 Import Components

Components from @kareyes/aether can be imported in your Svelte files:

```svelte
<script>
  import { Card, Button, Input } from '@kareyes/aether';
</script>
```

### 4.2 Available Components

Based on the current implementation, the following components are available:

- **Card** - Container component with title, description, and content areas
- **Button** - Interactive button with multiple variants
- **Input** - Form input component with variants

### 4.3 Usage Examples

**File:** `src/routes/+page.svelte`

```svelte
<script>
  import { Card, Button, Input } from '@kareyes/aether';
</script>

<section class="space-y-6">
  <div>
    <h2 class="text-2xl font-bold">Basic Cards</h2>
    <p class="text-muted-foreground">Simple card examples</p>
  </div>

  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <!-- Basic Card -->
    <Card.Card title="Simple Card" description="A basic card with title and description">
      <p class="text-sm">Card content goes here.</p>
    </Card.Card>

    <!-- Card with Input -->
    <Card.Card title="Without Description" variant="elevated">
      <p class="text-sm">A card without a description subtitle.</p>
      <Input.Input variant="default" class="mt-4" />
    </Card.Card>

    <!-- Card with Button -->
    <Card.Card description="Only description, no title">
      <p class="text-sm">This card only has a description.</p>
      <Button.Button 
        variant="destructive" 
        class="mt-4" 
        onclick={() => alert('Action clicked!')} 
        text="Click me">
      </Button.Button>
    </Card.Card>
  </div>
</section>
```

---

## 5. Utility Functions (Optional)

### 5.1 Import Utilities

If the library provides utility functions like `cn` (classname merger):

```svelte
<script>
  import { cn } from '@kareyes/aether/utils';
</script>
```

**Note:** Currently commented out in the implementation. Uncomment when needed.

---

## 6. TypeScript Configuration

### 6.1 Verify `tsconfig.json`

**File:** `tsconfig.json`

Ensure the following options are set:

```json
{
  "extends": "./.svelte-kit/tsconfig.json",
  "compilerOptions": {
    "rewriteRelativeImportExtensions": true,
    "allowJs": true,
    "checkJs": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": true,
    "moduleResolution": "bundler"
  }
}
```

**Important:** `skipLibCheck: true` helps avoid potential type checking issues with node_modules.

---

## 7. SvelteKit Configuration

### 7.1 Verify `svelte.config.js`

**File:** `svelte.config.js`

```javascript
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter()
  }
};

export default config;
```

**Required:**
- `vitePreprocess()` is necessary for processing styles and TypeScript

---

## 8. Development Workflow

### 8.1 Package Scripts

**File:** `package.json`

```json
{
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "vite preview",
    "prepare": "svelte-kit sync || echo ''",
    "check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
    "check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch"
  }
}
```

### 8.2 Running the Project

```bash
# Development mode
pnpm dev

# Type checking
pnpm check

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## 9. Component API Reference

### 9.1 Card Component

```svelte
<Card.Card 
  title="Card Title"           {/* Optional */}
  description="Description"    {/* Optional */}
  variant="elevated"          {/* Optional: default, elevated */}
  class="custom-class"        {/* Optional */}
>
  <!-- Card content -->
</Card.Card>
```

### 9.2 Button Component

```svelte
<Button.Button 
  variant="destructive"       {/* Optional: default, destructive, outline, ghost, etc. */}
  text="Button Text"          {/* Button label */}
  onclick={() => {}}          {/* Click handler */}
  class="custom-class"        {/* Optional */}
/>
```

### 9.3 Input Component

```svelte
<Input.Input 
  variant="default"           {/* Optional: default, error, etc. */}
  class="custom-class"        {/* Optional */}
  {/* Standard input props: value, placeholder, type, etc. */}
/>
```

---

## 10. Troubleshooting

### 10.1 Authentication Issues

**Error:** `Unable to authenticate to GitHub Packages`

**Solution:**
1. Verify your GitHub token has `read:packages` permission
2. Ensure `.npmrc` file is properly configured
3. Check that the token is not expired

### 10.2 Style Not Loading

**Error:** Components render but have no styling

**Solution:**
1. Verify `app.css` imports are in the correct order
2. Check that `@tailwindcss/vite` plugin is installed and configured
3. Ensure `app.css` is imported in `+layout.svelte`
4. Clear `.svelte-kit` cache and rebuild: `rm -rf .svelte-kit && pnpm dev`

### 10.3 Import Errors

**Error:** `Cannot find module '@kareyes/aether'`

**Solution:**
1. Verify package is installed: `pnpm list @kareyes/aether`
2. Check `.npmrc` registry configuration
3. Reinstall: `rm -rf node_modules pnpm-lock.yaml && pnpm install`

### 10.4 Build Errors

**Error:** Build fails with Tailwind CSS errors

**Solution:**
1. Ensure you're using Tailwind CSS v4 (not v3)
2. Verify `@source` directive in `app.css` points to correct path
3. Check that Vite plugin is properly configured

---

## 11. Best Practices

### 11.1 Component Import Organization

```svelte
<script>
  // External libraries
  import { Card, Button, Input } from '@kareyes/aether';
  
  // SvelteKit imports
  import { page } from '$app/stores';
  
  // Local imports
  import CustomComponent from '$lib/components/CustomComponent.svelte';
</script>
```

### 11.2 Class Customization

Aether components accept a `class` prop for custom styling:

```svelte
<Card.Card class="bg-gradient-to-r from-purple-500 to-pink-500">
  <!-- Custom styled card -->
</Card.Card>
```

### 11.3 Component Composition

Build complex UIs by composing aether components:

```svelte
<Card.Card title="Form Example">
  <div class="space-y-4">
    <Input.Input placeholder="Enter your name" />
    <Input.Input placeholder="Enter your email" type="email" />
    <Button.Button text="Submit" onclick={handleSubmit} />
  </div>
</Card.Card>
```

---

## 12. Checklist

Use this checklist to ensure proper implementation:

- [ ] `.npmrc` file created with GitHub registry configuration
- [ ] GitHub Personal Access Token added to `.npmrc`
- [ ] `@kareyes/aether` added to `package.json` dependencies
- [ ] `@tailwindcss/vite` and `tailwindcss` v4 installed
- [ ] Packages installed with `pnpm install`
- [ ] `vite.config.ts` updated with Tailwind CSS Vite plugin
- [ ] `src/app.css` created with proper imports and `@source` directive
- [ ] `app.css` imported in `src/routes/+layout.svelte`
- [ ] `tsconfig.json` properly configured
- [ ] `svelte.config.js` includes `vitePreprocess()`
- [ ] Development server runs without errors: `pnpm dev`
- [ ] Components import successfully: `import { Card } from '@kareyes/aether'`
- [ ] Components render with proper styling
- [ ] Type checking passes: `pnpm check`
- [ ] Production build succeeds: `pnpm build`

---

## 13. Additional Resources

### 13.1 Documentation Links

- SvelteKit: https://kit.svelte.dev/
- Tailwind CSS v4: https://tailwindcss.com/docs
- Vite: https://vitejs.dev/
- GitHub Packages: https://docs.github.com/en/packages

### 13.2 Package Information

- **Package Name:** `@kareyes/aether`
- **Current Version:** `^0.0.4`
- **Registry:** GitHub Packages (https://npm.pkg.github.com)
- **Scope:** `@kareyes`

---

## 14. Version History

| Date | Version | Changes |
|------|---------|---------|
| 2026-01-19 | 0.0.4 | Current implementation with Card, Button, Input components |

---

## Summary

To properly implement @kareyes/aether in your SvelteKit project:

1. **Configure GitHub Packages authentication** via `.npmrc`
2. **Install the package** along with Tailwind CSS v4
3. **Configure Vite** with the Tailwind CSS plugin
4. **Set up styles** in `app.css` with proper imports and `@source` directive
5. **Import components** in your Svelte files
6. **Use components** with proper props and variants

Once configured, you'll have access to a comprehensive set of styled components that work seamlessly with Tailwind CSS v4 in your SvelteKit application.
