<script lang="ts">
	import formSchema from "$lib/ui/form-schema.svelte";
	import formValidation from "$lib/ui/form-schema-examples/validation.svelte";
	import formLayout from "$lib/ui/form-schema-examples/layout.svelte";
	import formRefinements from "$lib/ui/form-schema-examples/refinements.svelte";
	import formAdvanced from "$lib/ui/form-schema-examples/advanced.svelte";
	import formAsync from "$lib/ui/form-schema-examples/async.svelte";
	import formServer from "$lib/ui/form-schema-examples/server.svelte";
	import { TabsPrimitives } from "@kareyes/aether";
	import { page } from "$app/state";
	import { marked } from "marked";
	import { onMount, getContext } from "svelte";
	import type { PageData } from "./$types";

	const { Tabs, TabsList, TabsTrigger, TabsContent } = TabsPrimitives;

	let { data }: { data: PageData } = $props();
	let slug = $derived(page.params?.slug);

	// ── On This Page (writes to layout context) ───────────────────────────────
	const toc = getContext<{ headings: { id: string; text: string; level: number }[]; activeId: string }>('toc');
	let contentEl = $state<HTMLElement | null>(null);
	let observer: IntersectionObserver | null = null;

	function slugify(text: string) {
		return text
			.toLowerCase()
			.replace(/[^\w\s-]/g, "")
			.replace(/\s+/g, "-")
			.replace(/-+/g, "-")
			.trim();
	}

	function refreshHeadings() {
		if (!contentEl) return;
		observer?.disconnect();
		const els = Array.from(contentEl.querySelectorAll("h2"));
		toc.headings = els.map((el) => {
			if (!el.id) el.id = slugify(el.textContent ?? "");
			return { id: el.id, text: el.textContent?.trim() ?? "", level: el.tagName === "H2" ? 2 : 3 };
		});
		els.forEach((el) => observer?.observe(el));
	}

	onMount(() => {
		observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) toc.activeId = entry.target.id;
				}
			},
			{ rootMargin: "-16px 0px -65% 0px", threshold: 0 }
		);
		return () => {
			observer?.disconnect();
			toc.headings = [];
			toc.activeId = "";
		};
	});

	let markdownContent = $derived.by(() => {
		if (data?.markdown) {
			return marked.parse(data.markdown, {
				gfm: true,
				breaks: true,
			});
		}
		return null;
	});

	$effect(() => {
		slug;
		markdownContent;
		setTimeout(refreshHeadings, 80);
	});

	const formMap: Record<
		string,
		{ name: string; component: any; title: string; description: string }
	> = {
		generic: {
			name: "generic",
			component: formSchema,
			title: "Form Schema",
			description:
				"A schema-first form system powered by @effect/schema. Define your form once with validation, types, and UI metadata - the form renders itself.",
		},
		validation: {
			name: "validation",
			component: formValidation,
			title: "Validation Examples",
			description:
				"Deep dive into formSchema validation: pattern matching, custom error messages, password strength rules, required checkboxes, and chained length constraints.",
		},
		layout: {
			name: "layout",
			component: formLayout,
			title: "UI Layout Examples",
			description:
				"Explore layout options in formSchema: single-column, two-column, 12-column grid with colSpan, multi-section forms, and all three section variants (default, card, collapsible).",
		},
		refinements: {
			name: "refinements",
			component: formRefinements,
			title: "Schema Refinements",
			description:
				"Advanced schema refinements using Schema.filter: custom predicates, multi-rule piped filters, format validation, domain-specific logic like Luhn and EAN-13 checksums.",
		},
		advanced: {
			name: "advanced",
			component: formAdvanced,
			title: "Advanced Patterns",
			description:
				"Complex real-world formSchema patterns: custom footer snippets with multiple actions, a 4-step job application, settings panels with card sections, and an e-commerce checkout flow.",
		},
		async: {
			name: "async",
			component: formAsync,
			title: "Async Data Loading",
			description:
				"Load form options dynamically from an API using schema factory functions, Promise.all for concurrent fetches, and cascading dependent selects — demonstrated with the PokéAPI.",
		},
		server: {
			name: "server",
			component: formServer,
			title: "Server-Side Integration",
			description:
				"Integrate formSchema with SvelteKit's server layer: Form Actions with use:enhance, JSON API endpoints with +server.ts, and mapping server errors back to form fields via controller.setErrors().",
		},
	};


</script>

<div bind:this={contentEl}>
	{#if slug && formMap[slug]}
		<div>
			{@render formMap[slug].component()}
		</div>
	{:else}
		<div class="github-markdown py-8 px-6">
			<div class="markdown-body">
				{@html markdownContent}
			</div>
		</div>
	{/if}
</div>

<style>
	/* Header is outside the scroll container, so just a small breathing room */
	:global(h2),
	:global(h3) {
		scroll-margin-top: 16px;
	}

	:global(.markdown-body) {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans",
			Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
		font-size: 16px;
		line-height: 1.6;
		color: rgb(31, 35, 40);
	}

	:global(.dark .markdown-body) {
		color: rgb(230, 237, 243);
	}

	:global(.markdown-body h1),
	:global(.markdown-body h2) {
		padding-bottom: 0.3em;
		border-bottom: 1px solid rgb(208, 215, 222);
	}

	:global(.dark .markdown-body h1),
	:global(.dark .markdown-body h2) {
		border-bottom-color: rgb(48, 54, 61);
	}

	:global(.markdown-body h1) {
		font-size: 2em;
		margin: 0.67em 0;
		font-weight: 600;
	}

	:global(.markdown-body h2) {
		font-size: 1.5em;
		margin: 0.75em 0 0.5em 0;
		font-weight: 600;
	}

	:global(.markdown-body h3) {
		font-size: 1.25em;
		margin: 1em 0 0.5em 0;
		font-weight: 600;
	}

	:global(.markdown-body h4) {
		font-size: 1em;
		margin: 1em 0 0.5em 0;
		font-weight: 600;
	}

	:global(.markdown-body h5) {
		font-size: 0.875em;
		margin: 1em 0 0.5em 0;
		font-weight: 600;
	}

	:global(.markdown-body h6) {
		font-size: 0.85em;
		margin: 1em 0 0.5em 0;
		font-weight: 600;
		color: rgb(87, 96, 106);
	}

	:global(.dark .markdown-body h6) {
		color: rgb(139, 148, 159);
	}

	:global(.markdown-body p) {
		margin: 0 0 10px 0;
	}

	:global(.markdown-body blockquote) {
		padding: 0 1em;
		color: rgb(87, 96, 106);
		border-left: 0.25em solid rgb(208, 215, 222);
		margin: 0 0 16px 0;
	}

	:global(.dark .markdown-body blockquote) {
		color: rgb(139, 148, 159);
		border-left-color: rgb(48, 54, 61);
	}

	:global(.markdown-body ul),
	:global(.markdown-body ol) {
		padding-left: 2em;
		margin-bottom: 16px;
	}

	:global(.markdown-body li) {
		margin-bottom: 4px;
	}

	:global(.markdown-body code) {
		background-color: rgb(240, 244, 247);
		border-radius: 6px;
		margin: 0;
		padding: 0.2em 0.4em;
		font-family: "Courier New", "Courier", monospace;
		font-size: 0.9em;
		color: rgb(31, 35, 40);
	}

	:global(.dark .markdown-body code) {
		background-color: transparent;
		color: rgb(230, 237, 243);
	}

	:global(.markdown-body pre) {
		background-color: rgb(240, 244, 247);
		border-radius: 6px;
		padding: 16px;
		overflow: auto;
		margin-bottom: 16px;
		line-height: 1.45;
	}

	:global(.dark .markdown-body pre) {
		background-color: rgb(13, 17, 23);
	}

	:global(.markdown-body pre code) {
		background-color: transparent;
		border: 0;
		display: inline;
		margin: 0;
		padding: 0;
		overflow: visible;
		line-height: inherit;
		color: inherit;
		font-size: 0.9em;
	}

	:global(.markdown-body a) {
		color: rgb(9, 105, 218);
		text-decoration: none;
	}

	:global(.markdown-body a:hover) {
		text-decoration: underline;
	}

	:global(.dark .markdown-body a) {
		color: rgb(88, 166, 255);
	}

	:global(.markdown-body table) {
		border-collapse: collapse;
		width: 100%;
		margin-bottom: 16px;
	}

	:global(.markdown-body table tr) {
		background-color: rgb(255, 255, 255);
		border-top-color: rgb(208, 215, 222);
	}

	:global(.dark .markdown-body table tr) {
		background-color: rgb(13, 17, 23);
	}

	:global(.markdown-body table tr:nth-child(2n)) {
		background-color: rgb(248, 250, 252);
	}

	:global(.dark .markdown-body table tr:nth-child(2n)) {
		background-color: rgb(22, 27, 35);
	}

	:global(.markdown-body table th),
	:global(.markdown-body table td) {
		border: 1px solid rgb(208, 215, 222);
		padding: 6px 13px;
		text-align: left;
	}

	:global(.dark .markdown-body table th),
	:global(.dark .markdown-body table td) {
		border-color: rgb(48, 54, 61);
	}

	:global(.markdown-body table th) {
		font-weight: 600;
		background-color: rgb(245, 248, 250);
	}

	:global(.dark .markdown-body table th) {
		background-color: rgb(22, 27, 35);
	}

	:global(.markdown-body strong) {
		font-weight: 600;
	}

	:global(.markdown-body em) {
		font-style: italic;
	}

	:global(.markdown-body hr) {
		height: 2px;
		padding: 0;
		background-color: rgb(208, 215, 222);
		border: 0;
		margin: 24px 0;
	}

	:global(.dark .markdown-body hr) {
		background-color: rgb(48, 54, 61);
	}

	:global(.markdown-body img) {
		max-width: 100%;
		height: auto;
		display: block;
		margin: 16px 0;
	}

	:global(.markdown-body .highlight) {
		background-color: rgb(255, 255, 0);
		margin: -2px;
		padding: 2px;
		border-radius: 3px;
	}
</style>
