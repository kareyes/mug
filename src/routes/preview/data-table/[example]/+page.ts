import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => {
	return [
		{ example: 'multi-select' },
		{ example: 'single-select' },
		{ example: 'no-selection' },
		{ example: 'striped' },
		{ example: 'bordered' },
		{ example: 'compact' },
		{ example: 'minimal' },
		{ example: 'no-pagination' },
		{ example: 'expandable' },
		{ example: 'responsive' },
		{ example: 'column-meta' },
	];
};

export const prerender = true;

export const load: PageLoad = async ({ params }) => {
	return { example: params.example };
};
