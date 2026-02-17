import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => {
	return [
		{ example: 'default' },
		{ example: 'underline' },
		{ example: 'pills' },
		{ example: 'solid' },
		{ example: 'segmented' },
		{ example: 'size-variants' },
		{ example: 'animation' },
		{ example: 'overflow-scroll' },
		{ example: 'vertical' },
		{ example: 'dropdown-mobile' },
		{ example: 'disabled' },
		{ example: 'combinations' },
	];
};

export const prerender = true;

export const load: PageLoad = async ({ params }) => {
	return { example: params.example };
};
