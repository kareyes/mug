import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => {
	return [
		{ example: 'basic' },
		{ example: 'header-footer' },
		{ example: 'nested-submenus' },
		{ example: 'actions-badges' },
		{ example: 'search-groups' },
		{ example: 'floating' },
		{ example: 'loading' },
		{ example: 'size-variants' },
		{ example: 'link-navigation' },
	];
};

export const prerender = true;

export const load: PageLoad = async ({ params }) => {
	return {
		example: params.example
	};
};
