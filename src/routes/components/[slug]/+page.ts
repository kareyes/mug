import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const module = await import(`../../../lib/docs/${params.slug}.md?raw`);
		const markdown = module.default;
		
		return {
			markdown,
			slug: params.slug
		};
	} catch (e) {
		// Documentation is optional, so we don't error out
		return {
			markdown: null,
			slug: params.slug
		};
	}
};
