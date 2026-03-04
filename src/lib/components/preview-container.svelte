<script lang="ts">
  
    import { Monitor, Tablet, Smartphone } from "@kareyes/aether/icons";
    import { cn } from "@kareyes/aether/utils";
    import { untrack } from "svelte";
    import type { Snippet } from "svelte";

    // let { isContainer }: { isContainer: boolean } = $props();

    type DeviceMode = "desktop" | "tablet" | "mobile";

    let { children, enableContainer = true }: { children: Snippet; enableContainer?: boolean } = $props();
    let deviceMode: DeviceMode = $state("desktop");
    let renderKey = $state(0);

    function switchDevice(mode: DeviceMode) {
        if (mode === deviceMode) return;
        deviceMode = mode;
        renderKey = Math.random();
    }

    const deviceWidths: Record<DeviceMode, string> = {
        desktop: "100%",
        tablet: "768px",
        mobile: "375px",
    };

    const modes: { key: DeviceMode; icon: typeof Monitor; label: string }[] = [
        { key: "desktop", icon: Monitor, label: "Desktop" },
        { key: "tablet", icon: Tablet, label: "Tablet" },
        { key: "mobile", icon: Smartphone, label: "Mobile" },
    ];

    // console.log("PreviewContainer initialized with enableContainer =", enableContainer);


</script>

<style>
    .dot-grid {
        background-image: radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
        background-size: 24px 24px;
    }
    :global(.dark) .dot-grid {
        background-image: radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
    }
</style>

<div class="preview-container relative overflow-hidden rounded-xl border border-black/8 bg-neutral-100 p-6 dark:border-white/5 dark:bg-neutral-950">
    <div class="dot-grid pointer-events-none absolute inset-0 rounded-xl"></div>
    <div class="relative z-10">
        <div class="flex justify-end pb-4">
            <div
                class="flex items-center gap-1 rounded-lg border border-black/10 bg-black/5 p-1 backdrop-blur-md dark:border-white/10 dark:bg-black/60"
            >
                {#each modes as { key, icon: Icon, label }}
                    <button
                        class="rounded-md p-1.5 transition-colors {deviceMode === key
                            ? 'bg-black/15 text-black dark:bg-white/20 dark:text-white'
                            : 'text-black/40 hover:text-black/70 dark:text-white/50 dark:hover:text-white/80'}"
                        onclick={() => switchDevice(key)}
                        title={label}
                    >
                        <Icon class="size-4" />
                    </button>
                {/each}
            </div>
        </div>
        <div
            
            class= {cn(enableContainer ?  "@container" : "", "mx-auto transition-[max-width] duration-300 ease-in-out bg-background")}
            style="max-width: {deviceWidths[deviceMode]}"
        >
            {#key renderKey}
                {@render children?.()}
            {/key}
        </div>
    </div>
</div>
