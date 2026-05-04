export const basicUsageDocs = `
<script lang="ts">
  import { Progress } from "@kareyes/aether";
</script>

<div class="space-y-4">
  <Progress value={0} />
  <Progress value={33} />
  <Progress value={66} />
  <Progress value={100} />
</div>`;

export const labelValueDocs = `
<script lang="ts">
  import { Progress } from "@kareyes/aether";
</script>

<div class="space-y-6">
  <Progress value={72} label="Storage used" showValue />
  <Progress value={45} label="Upload progress" showValue />
  <Progress
    value={8}
    max={10}
    label="Steps completed"
    showValue
    valueFormat={(v, m) => \`\${v} of \${m}\`}
  />
  <Progress value={91} label="CPU usage" showValue variant="destructive" />
</div>`;

export const labelInsideBarDocs = `
<script lang="ts">
  import { Progress } from "@kareyes/aether";
</script>

<div class="space-y-4">
  <Progress value={72} label="Storage used" labelPosition="inside" size="xl" />
  <Progress value={45} showValue labelPosition="inside" size="xl" />
  <Progress value={88} label="Upload" showValue labelPosition="inside" size="xl" variant="success" />
  <Progress
    value={6}
    max={10}
    label="Steps"
    showValue
    valueFormat={(v, m) => \`\${v} / \${m}\`}
    labelPosition="inside"
    size="xl"
    variant="accent"
  />
  <Progress value={60} label="Processing…" showValue labelPosition="inside" size="xl" variant="warning" animation="stripe" />
  <Progress value={null} label="Syncing…" labelPosition="inside" size="xl" variant="accent" animation="shimmer" />
</div>`;

export const variantsDocs = `
<script lang="ts">
  import { Progress } from "@kareyes/aether";
</script>

<div class="space-y-4">
  {#each ["default", "success", "warning", "destructive", "secondary", "accent"] as variant}
    <div class="flex items-center gap-4">
      <span class="w-24 shrink-0 text-xs text-muted-foreground font-mono">{variant}</span>
      <Progress value={65} variant={variant} class="flex-1" />
    </div>
  {/each}
</div>`;

export const sizesDocs = `
<script lang="ts">
  import { Progress } from "@kareyes/aether";
</script>

<div class="space-y-5">
  {#each ["xs", "sm", "default", "lg", "xl"] as size}
    <div class="flex items-center gap-4">
      <span class="w-16 shrink-0 text-xs text-muted-foreground font-mono">{size}</span>
      <Progress value={65} size={size} class="flex-1" />
    </div>
  {/each}
</div>`;

export const radiusDocs = `
<script lang="ts">
  import { Progress } from "@kareyes/aether";
</script>

<div class="space-y-4">
  {#each ["none", "sm", "default", "lg"] as radius}
    <div class="flex items-center gap-4">
      <span class="w-16 shrink-0 text-xs text-muted-foreground font-mono">{radius}</span>
      <Progress value={65} size="lg" radius={radius} class="flex-1" />
    </div>
  {/each}
</div>`;

export const indeterminateDocs = `
<script lang="ts">
  import { Progress } from "@kareyes/aether";
</script>

<div class="space-y-4">
  <Progress value={null} label="Processing…" />
  <Progress value={null} variant="success" />
  <Progress value={null} variant="accent" size="lg" />
</div>`;

export const animationsDocs = `
<script lang="ts">
  import { Progress } from "@kareyes/aether";
</script>

<div class="space-y-4">
  {#each ["none", "pulse", "stripe", "shimmer"] as animation}
    <div class="flex items-center gap-4">
      <span class="w-16 shrink-0 text-xs text-muted-foreground font-mono">{animation}</span>
      <Progress value={65} animation={animation} class="flex-1" />
    </div>
  {/each}
</div>`;

export const interactiveDocs = `
<script lang="ts">
  import { Progress } from "@kareyes/aether";

  let liveValue = \$state(65);
</script>

<div class="space-y-4">
  <Progress value={liveValue} label="Live value" showValue size="lg" variant="success" />
  <div class="flex items-center gap-3">
    <input type="range" min="0" max="100" bind:value={liveValue} class="flex-1" />
    <span class="w-10 text-right text-sm tabular-nums text-muted-foreground">{liveValue}%</span>
  </div>
</div>`;

export const useCasesDocs = `
<script lang="ts">
  import { Progress } from "@kareyes/aether";
</script>

<div class="space-y-8">
  <div class="space-y-3">
    <p class="text-xs font-medium text-muted-foreground uppercase tracking-wide">File Upload</p>
    <Progress value={78} label="quarterly-report.pdf" showValue size="sm" />
    <Progress value={34} label="payroll-march-2026.xlsx" showValue size="sm" variant="warning" />
    <Progress value={100} label="headcount-snapshot.csv" showValue size="sm" variant="success" />
  </div>

  <div class="space-y-3">
    <p class="text-xs font-medium text-muted-foreground uppercase tracking-wide">Proficiency</p>
    <Progress value={90} label="TypeScript" showValue size="xl" radius="sm" variant="accent" />
    <Progress value={75} label="Svelte" showValue size="xl" radius="sm" variant="accent" />
    <Progress value={60} label="Rust" showValue size="xl" radius="sm" variant="accent" />
  </div>

  <div class="space-y-3">
    <p class="text-xs font-medium text-muted-foreground uppercase tracking-wide">System Metrics</p>
    <Progress value={42} label="CPU" showValue size="sm" />
    <Progress value={81} label="Memory" showValue size="sm" variant="warning" />
    <Progress value={95} label="Disk" showValue size="sm" variant="destructive" />
  </div>
</div>`;

export const compositionalDocs = `
<script lang="ts">
  import { ProgressPrimitives } from "@kareyes/aether";
  const { ProgressRoot: Root } = ProgressPrimitives;
</script>

<div class="space-y-4">
  <p class="text-xs font-medium text-muted-foreground uppercase tracking-wide">Custom gradient</p>
  <Root
    value={55}
    class="h-6 rounded-lg [&>[data-slot=progress-indicator]]:bg-gradient-to-r [&>[data-slot=progress-indicator]]:from-violet-500 [&>[data-slot=progress-indicator]]:to-pink-500"
  />

  <p class="text-xs font-medium text-muted-foreground uppercase tracking-wide">Striped via class</p>
  <Root
    value={70}
    size="xl"
    radius="sm"
    class="[&>[data-slot=progress-indicator]]:[background-image:repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.15)_10px,rgba(255,255,255,0.15)_20px)]"
  />
</div>`;
