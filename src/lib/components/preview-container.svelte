<script lang="ts">
  
    import { Monitor, Tablet, Smartphone } from "@kareyes/aether/icons";
    import { untrack } from "svelte";
    import type { Snippet } from "svelte";

    type DeviceMode = "desktop" | "tablet" | "mobile";

    let { children }: { children: Snippet } = $props();
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


</script>

<div class="preview-container relative overflow-hidden rounded-xl border border-white/5 bg-neutral-950 p-6">
    <div
        class="pointer-events-none absolute inset-0 rounded-xl"
        style="background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px); background-size: 24px 24px;"
    ></div>
    <div class="relative z-10">
        <div class="flex justify-end pb-4">
            <div
                class="flex items-center gap-1 rounded-lg border border-white/10 bg-black/60 p-1 backdrop-blur-md"
            >
                {#each modes as { key, icon: Icon, label }}
                    <button
                        class="rounded-md p-1.5 transition-colors {deviceMode ===
                        key
                            ? 'bg-white/20 text-white'
                            : 'text-white/50 hover:text-white/80'}"
                        onclick={() => switchDevice(key)}
                        title={label}
                    >
                        <Icon class="size-4" />
                    </button>
                {/each}
            </div>
        </div>
        <div
            class="@container mx-auto transition-[max-width] duration-300 ease-in-out bg-background"
            style="max-width: {deviceWidths[deviceMode]}"
        >
            {#key renderKey}
                {@render children?.()}
            {/key}
        </div>
    </div>
</div>
