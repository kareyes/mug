import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => {
	return [
		{ slug: 'accordion' },
		{ slug: 'alert' },
		{ slug: 'alert-dialog' },
		{ slug: 'avatar' },
		{ slug: 'badge' },
		{ slug: 'breadcrumb' },
		{ slug: 'button' },
		{ slug: 'button-group' },
		{ slug: 'calendar' },
		{ slug: 'card' },
		{ slug: 'checkbox' },
		{ slug: 'checkbox-group' },
		{ slug: 'combobox' },
		{ slug: 'data-table' },
		{ slug: 'date-picker' },
		{ slug: 'dialog' },
		{ slug: 'dropdown-menu' },
		{ slug: 'field' },
		{ slug: 'file-input' },
		{ slug: 'input' },
		{ slug: 'input-otp' },
		{ slug: 'number-spinner' },
		{ slug: 'popover' },
		{ slug: 'radio' },
		{ slug: 'select' },
		{ slug: 'sheet' },
		{ slug: 'sidebar' },
		{ slug: 'skeleton' },
		{ slug: 'slider' },
		{ slug: 'sonner' },
		{ slug: 'stepper' },
		{ slug: 'switch' },
		{ slug: 'tabs' },
		{ slug: 'textarea' }
	];
};

export const prerender = true;

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
