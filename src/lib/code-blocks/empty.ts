export const basicUsageDocs = `
<script lang="ts">
  import { Empty, Button } from "@kareyes/aether";
  import { Inbox, Search } from "@kareyes/aether/icons";
</script>

<div class="grid gap-6 md:grid-cols-2">
  <Empty
    variant="outline"
    title="No Messages"
    description="Your inbox is empty. Messages you receive will appear here."
  >
    {#snippet icon()}<Inbox />{/snippet}
    {#snippet action()}
      <Button>Compose Message</Button>
    {/snippet}
  </Empty>

  <Empty
    variant="outline"
    title="No Results Found"
    description="Try adjusting your search terms or clearing the active filters."
  >
    {#snippet icon()}<Search />{/snippet}
    {#snippet action()}
      <div class="flex gap-2">
        <Button variant="outline">Clear Filters</Button>
        <Button>New Search</Button>
      </div>
    {/snippet}
  </Empty>
</div>`;

export const variantsDocs = `
<script lang="ts">
  import { Empty } from "@kareyes/aether";
  import { Folder } from "@kareyes/aether/icons";
</script>

<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
  <Empty variant="default" title="Default" description="No border by default.">
    {#snippet icon()}<Folder />{/snippet}
  </Empty>
  <Empty variant="outline" title="Outline" description="Visible dashed border.">
    {#snippet icon()}<Folder />{/snippet}
  </Empty>
  <Empty variant="filled" title="Filled" description="Dashed border with muted background.">
    {#snippet icon()}<Folder />{/snippet}
  </Empty>
  <Empty variant="ghost" title="Ghost" description="No border, no background.">
    {#snippet icon()}<Folder />{/snippet}
  </Empty>
</div>`;

export const sizesDocs = `
<script lang="ts">
  import { Empty, Button } from "@kareyes/aether";
  import { Bell } from "@kareyes/aether/icons";
</script>

<div class="grid gap-6 md:grid-cols-3">
  <Empty variant="outline" size="sm" title="Small"
    description="Compact padding for inline or sidebar contexts."
  >
    {#snippet icon()}<Bell />{/snippet}
    {#snippet action()}<Button size="sm">Enable</Button>{/snippet}
  </Empty>

  <Empty variant="outline" size="default" title="Default"
    description="Standard padding for most use cases."
  >
    {#snippet icon()}<Bell />{/snippet}
    {#snippet action()}<Button>Enable</Button>{/snippet}
  </Empty>

  <Empty variant="outline" size="lg" title="Large"
    description="Generous padding for full-page empty states."
  >
    {#snippet icon()}<Bell />{/snippet}
    {#snippet action()}<Button size="lg">Enable</Button>{/snippet}
  </Empty>
</div>`;

export const iconVariantsDocs = `
<script lang="ts">
  import { Empty, Button } from "@kareyes/aether";
  import { Database } from "@kareyes/aether/icons";
</script>

<div class="grid gap-6 md:grid-cols-2">
  <Empty variant="outline" iconVariant="icon" title="Icon Wrapper"
    description="The icon sits inside a small rounded box. Good for small SVG icons."
  >
    {#snippet icon()}<Database />{/snippet}
    {#snippet action()}<Button variant="outline">Add Entry</Button>{/snippet}
  </Empty>

  <Empty variant="outline" iconVariant="default" title="Bare Icon"
    description="The icon renders without a wrapper — use for larger illustrations."
  >
    {#snippet icon()}
      <Database class="size-12 text-muted-foreground" />
    {/snippet}
    {#snippet action()}<Button variant="outline">Add Entry</Button>{/snippet}
  </Empty>
</div>`;

export const useCasesDocs = `
<script lang="ts">
  import { Empty, Button } from "@kareyes/aether";
  import { Users, Bell, CloudUpload, ShoppingCart, WifiOff, Lock } from "@kareyes/aether/icons";
</script>

<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  <Empty variant="outline" title="No Team Members"
    description="Invite colleagues to collaborate on this project."
  >
    {#snippet icon()}<Users />{/snippet}
    {#snippet action()}<Button size="sm">Invite Members</Button>{/snippet}
  </Empty>

  <Empty variant="filled" title="All Caught Up"
    description="No new notifications. Check back later."
  >
    {#snippet icon()}<Bell />{/snippet}
  </Empty>

  <Empty variant="outline" title="No Files Yet"
    description="Upload files to access them from any device."
  >
    {#snippet icon()}<CloudUpload />{/snippet}
    {#snippet action()}
      <div class="flex gap-2">
        <Button variant="outline" size="sm">Browse</Button>
        <Button size="sm">Upload</Button>
      </div>
    {/snippet}
  </Empty>

  <Empty variant="ghost" title="Your Cart is Empty"
    description="Add items from the store to see them here."
  >
    {#snippet icon()}<ShoppingCart />{/snippet}
    {#snippet action()}<Button size="sm">Browse Store</Button>{/snippet}
  </Empty>

  <Empty variant="outline" title="You're Offline"
    description="Check your connection and try again."
    class="border-destructive/40"
  >
    {#snippet icon()}<WifiOff />{/snippet}
    {#snippet action()}<Button variant="outline" size="sm">Retry</Button>{/snippet}
  </Empty>

  <Empty variant="filled" title="Access Restricted"
    description="You don't have permission to view this content."
  >
    {#snippet icon()}<Lock />{/snippet}
    {#snippet action()}<Button variant="outline" size="sm">Request Access</Button>{/snippet}
  </Empty>
</div>`;

export const fullPageDocs = `
<script lang="ts">
  import { Empty, Button } from "@kareyes/aether";
  import { Folder } from "@kareyes/aether/icons";
</script>

<Empty
  variant="outline"
  size="lg"
  title="No Projects Yet"
  description="Create your first project to get started. Projects help you organise work, track progress, and collaborate with your team."
>
  {#snippet icon()}<Folder />{/snippet}
  {#snippet action()}
    <div class="flex flex-col items-center gap-3">
      <div class="flex gap-2">
        <Button>Create Project</Button>
        <Button variant="outline">Import Project</Button>
      </div>
      <p class="text-xs text-muted-foreground">
        Need help? <a href="#" class="underline underline-offset-4 hover:text-primary">Read the docs</a>
      </p>
    </div>
  {/snippet}
</Empty>`;

export const customStylingDocs = `
<script lang="ts">
  import { Empty, Badge } from "@kareyes/aether";
  import { Bell, Search, Inbox } from "@kareyes/aether/icons";
</script>

<div class="grid gap-6 md:grid-cols-3">
  <Empty variant="outline" title="Gradient Background"
    description="Using bg-gradient-* utilities."
    class="from-muted/50 to-background bg-gradient-to-b from-30%"
  >
    {#snippet icon()}<Bell />{/snippet}
  </Empty>

  <Empty variant="outline" title="Colored Border"
    description="Override border color with border-* utilities."
    class="border-primary/40"
  >
    {#snippet icon()}<Search />{/snippet}
  </Empty>

  <Empty variant="filled" size="sm" title="Compact Badge"
    description="Combine with other components for richer states."
  >
    {#snippet icon()}<Inbox />{/snippet}
    {#snippet action()}<Badge>Beta</Badge>{/snippet}
  </Empty>
</div>`;

export const compositionalDocs = `
<script lang="ts">
  import { EmptyPrimitives, Button } from "@kareyes/aether";
  import { Users } from "@kareyes/aether/icons";
</script>

<div class="grid gap-6 md:grid-cols-2">
  <EmptyPrimitives.Root variant="outline">
    <EmptyPrimitives.Header>
      <EmptyPrimitives.Media variant="icon">
        <Users />
      </EmptyPrimitives.Media>
      <EmptyPrimitives.Title>No Collaborators</EmptyPrimitives.Title>
      <EmptyPrimitives.Description>
        Share this project with your team to start collaborating in real time.
      </EmptyPrimitives.Description>
    </EmptyPrimitives.Header>
    <EmptyPrimitives.Content>
      <Button>Invite People</Button>
      <Button variant="link" class="text-muted-foreground text-sm">
        Learn about permissions
      </Button>
    </EmptyPrimitives.Content>
  </EmptyPrimitives.Root>

  <EmptyPrimitives.Root variant="filled">
    <EmptyPrimitives.Header>
      <EmptyPrimitives.Media variant="default">
        <div class="flex -space-x-3">
          <div class="size-10 rounded-full bg-primary/20 ring-2 ring-background"></div>
          <div class="size-10 rounded-full bg-primary/30 ring-2 ring-background"></div>
          <div class="size-10 rounded-full bg-primary/40 ring-2 ring-background flex items-center justify-center text-xs font-medium">+5</div>
        </div>
      </EmptyPrimitives.Media>
      <EmptyPrimitives.Title>Join the Community</EmptyPrimitives.Title>
      <EmptyPrimitives.Description>
        Connect with others, share ideas, and get support from the community.
      </EmptyPrimitives.Description>
    </EmptyPrimitives.Header>
    <EmptyPrimitives.Content>
      <div class="flex gap-2">
        <Button size="sm">Join Now</Button>
        <Button variant="outline" size="sm">Learn More</Button>
      </div>
    </EmptyPrimitives.Content>
  </EmptyPrimitives.Root>
</div>`;
