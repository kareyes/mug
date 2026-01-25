<script>

  import { Button, Badge, ButtonGroupPrimitives } from "@kareyes/aether";

  const { ButtonGroup, ButtonGroupText, ButtonGroupSeparator } = ButtonGroupPrimitives;
</script>


<svelte:head>
  <title>Button Group Demo - Aether UI</title>
</svelte:head>

<div class="container mx-auto p-8 space-y-12">
  <div class="space-y-4">
    <h1 class="text-4xl font-bold">Button Group Demo</h1>
    <p class="text-lg text-muted-foreground">
      Demonstration of the ButtonGroup component with variants, orientations, and different combinations.
    </p>
  </div>

  <!-- Basic Examples -->
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">Basic Button Groups</h2>
    
    <div class="space-y-4">
      <div>
        <h3 class="text-lg font-medium mb-2">Default (Background Variant)</h3>
        <ButtonGroup variant="bg">
          <Button variant="outline">First</Button>
          <Button variant="outline">Second</Button>
          <Button variant="outline">Third</Button>
        </ButtonGroup>
      </div>

      <div>
        <h3 class="text-lg font-medium mb-2">Ghost Variant</h3>
        <ButtonGroup variant="ghost">
          <Button variant="ghost">Copy</Button>
          <Button variant="ghost">Paste</Button>
          <Button variant="ghost">Cut</Button>
        </ButtonGroup>
      </div>
    </div>
  </section>

  <!-- With Text Labels -->
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">With Text Labels</h2>
    
    <div class="space-y-4">
      <div>
        <h3 class="text-lg font-medium mb-2">Toolbar with Label (Background)</h3>
        <ButtonGroup variant="bg">
          <ButtonGroupText variant="bg">
            <Badge variant="secondary" size="sm">Tools</Badge>
          </ButtonGroupText>
          <Button variant="outline" size="sm">🔧 Settings</Button>
          <Button variant="outline" size="sm">📊 Analytics</Button>
          <Button variant="outline" size="sm">🔍 Search</Button>
        </ButtonGroup>
      </div>

      <div>
        <h3 class="text-lg font-medium mb-2">Actions with Label (Ghost)</h3>
        <ButtonGroup variant="ghost">
          <ButtonGroupText variant="ghost">
            Actions
          </ButtonGroupText>
          <Button variant="ghost" size="sm">Save</Button>
          <Button variant="ghost" size="sm">Export</Button>
          <Button variant="ghost" size="sm">Share</Button>
        </ButtonGroup>
      </div>
    </div>
  </section>

  <!-- With Separators -->
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">With Separators</h2>
    
    <div class="space-y-4">
      <div>
        <h3 class="text-lg font-medium mb-2">File Menu Style</h3>
        <ButtonGroup variant="bg">
          <Button variant="outline">New</Button>
          <Button variant="outline">Open</Button>
          <ButtonGroupSeparator />
          <Button variant="outline">Save</Button>
          <Button variant="outline">Save As</Button>
          <ButtonGroupSeparator />
          <Button variant="outline">Print</Button>
        </ButtonGroup>
      </div>

      <div>
        <h3 class="text-lg font-medium mb-2">Text Formatting Toolbar</h3>
        <ButtonGroup variant="bg">
          <ButtonGroupText variant="bg">Format</ButtonGroupText>
          <Button variant="outline" size="sm"><strong>B</strong></Button>
          <Button variant="outline" size="sm"><em>I</em></Button>
          <Button variant="outline" size="sm"><u>U</u></Button>
          <ButtonGroupSeparator />
          <Button variant="outline" size="sm">⬅️</Button>
          <Button variant="outline" size="sm">⬇️</Button>
          <Button variant="outline" size="sm">➡️</Button>
        </ButtonGroup>
      </div>
    </div>
  </section>

  <!-- Vertical Orientation -->
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">Vertical Orientation</h2>
    
    <div class="flex gap-8">
      <div>
        <h3 class="text-lg font-medium mb-2">Navigation Menu (Background)</h3>
        <ButtonGroup orientation="vertical" variant="bg">
          <Button variant="outline">Dashboard</Button>
          <Button variant="outline">Projects</Button>
          <Button variant="outline">Tasks</Button>
          <Button variant="outline">Settings</Button>
        </ButtonGroup>
      </div>

      <div>
        <h3 class="text-lg font-medium mb-2">Sidebar Actions (Ghost)</h3>
        <ButtonGroup orientation="vertical" variant="ghost">
          <ButtonGroupText variant="ghost">Quick Actions</ButtonGroupText>
          <Button variant="ghost">📝 New Note</Button>
          <Button variant="ghost">📁 New Folder</Button>
          <Button variant="ghost">🔗 Add Link</Button>
        </ButtonGroup>
      </div>
    </div>
  </section>

  <!-- Complex Examples -->
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">Complex Examples</h2>
    
    <div class="space-y-4">
      <div>
        <h3 class="text-lg font-medium mb-2">Editor Toolbar</h3>
        <div class="flex flex-wrap gap-4">
          <ButtonGroup variant="bg">
            <ButtonGroupText variant="bg">File</ButtonGroupText>
            <Button variant="outline" size="sm">New</Button>
            <Button variant="outline" size="sm">Open</Button>
            <Button variant="outline" size="sm">Save</Button>
          </ButtonGroup>
          
          <ButtonGroup variant="bg">
            <ButtonGroupText variant="bg">Edit</ButtonGroupText>
            <Button variant="outline" size="sm">Undo</Button>
            <Button variant="outline" size="sm">Redo</Button>
            <ButtonGroupSeparator />
            <Button variant="outline" size="sm">Cut</Button>
            <Button variant="outline" size="sm">Copy</Button>
            <Button variant="outline" size="sm">Paste</Button>
          </ButtonGroup>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-medium mb-2">Media Player Controls</h3>
        <ButtonGroup variant="ghost">
          <Button variant="ghost">⏮️</Button>
          <Button variant="ghost">⏯️</Button>
          <Button variant="ghost">⏭️</Button>
          <ButtonGroupSeparator />
          <Button variant="ghost">🔀</Button>
          <Button variant="ghost">🔁</Button>
          <ButtonGroupSeparator />
          <ButtonGroupText variant="ghost">Volume</ButtonGroupText>
          <Button variant="ghost" size="sm">🔊</Button>
        </ButtonGroup>
      </div>

      <div>
        <h3 class="text-lg font-medium mb-2">Status Actions</h3>
        <ButtonGroup variant="bg">
          <ButtonGroupText variant="bg">
            <Badge variant="flat" color="green">Online</Badge>
          </ButtonGroupText>
          <Button variant="outline" size="sm">View Profile</Button>
          <Button variant="outline" size="sm">Edit Status</Button>
          <Button variant="outline" size="sm">Settings</Button>
        </ButtonGroup>
      </div>
    </div>
  </section>

  <!-- Mixed Button Variants -->
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">Mixed Button Variants</h2>
    
    <div class="space-y-4">
      <div>
        <h3 class="text-lg font-medium mb-2">Call-to-Action Group</h3>
        <ButtonGroup variant="bg">
          <Button variant="default">Get Started</Button>
          <Button variant="outline">Learn More</Button>
          <Button variant="ghost">Skip</Button>
        </ButtonGroup>
      </div>

      <div>
        <h3 class="text-lg font-medium mb-2">Form Actions</h3>
        <ButtonGroup variant="bg">
          <ButtonGroupText variant="bg">Actions</ButtonGroupText>
          <Button variant="default">Submit</Button>
          <Button variant="outline">Save Draft</Button>
          <Button variant="ghost">Cancel</Button>
        </ButtonGroup>
      </div>
    </div>
  </section>

  <!-- Usage Notes -->
  <section class="space-y-4">
    <h2 class="text-2xl font-semibold">Usage Notes</h2>
    <div class="bg-muted/50 p-6 rounded-lg space-y-4">
      <div>
        <h3 class="font-medium">Variants</h3>
        <ul class="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
          <li><code>bg</code> - Default variant with background styling for text elements</li>
          <li><code>ghost</code> - Minimal variant with transparent background for text elements</li>
        </ul>
      </div>
      <div>
        <h3 class="font-medium">Orientations</h3>
        <ul class="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
          <li><code>horizontal</code> - Default horizontal layout</li>
          <li><code>vertical</code> - Vertical stacked layout</li>
        </ul>
      </div>
      <div>
        <h3 class="font-medium">Components</h3>
        <ul class="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
          <li><code>ButtonGroup</code> - Main container component</li>
          <li><code>ButtonGroupText</code> - Text label component that adapts to variant</li>
          <li><code>ButtonGroupSeparator</code> - Visual separator between elements</li>
        </ul>
      </div>
    </div>
  </section>
</div>