import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => {
	return [
		{ example: 'orientations' },
		{ example: 'sizes-variants' },
		{ example: 'interactive' },
		{ example: 'step-states' },
		{ example: 'circular' },
		{ example: 'practical' },
		{ example: 'custom-content' },
	];
};

export const prerender = true;

export const load: PageLoad = async ({ params }) => {
	return { example: params.example };
};
