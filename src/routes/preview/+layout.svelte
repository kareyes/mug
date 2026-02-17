<script lang="ts">
	import { DarkModePrimitives } from '@kareyes/aether';
	import "../../app.css";

	const { ModeWatcher } = DarkModePrimitives;

	let { children } = $props();
</script>

<ModeWatcher />

{@render children()}
