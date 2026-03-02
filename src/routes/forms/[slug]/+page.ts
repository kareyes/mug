import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => {
	return [
		{ slug: 'schema' },
		{ slug: 'validation' },
		{ slug: 'layout' },
		{ slug: 'refinements' },
		{ slug: 'advanced' },
		{ slug: 'async' }
	];
};

export const prerender = true;

export const load: PageLoad = async ({ params }) => {
	try {
		const module = await import(`../../../lib/docs/form-${params.slug}.md?raw`);
		const markdown = module.default;

		return {
			markdown,
			slug: params.slug
		};
	} catch (e) {
		return {
			markdown: null,
			slug: params.slug
		};
	}
};
