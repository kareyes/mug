// ── Shared schema file (schema.ts) ──────────────────────────────────────────
export const sharedSchemaDocs = `
// src/lib/schemas/contact.ts
// Define the schema once — import it on both client and server.
import { Schema, pipe } from "effect";
import { withField, withFormLayout } from "@kareyes/aether/forms";

export const ContactSchema = pipe(
	Schema.Struct({
		name: pipe(
			Schema.String,
			Schema.minLength(2),
			Schema.annotations({ message: () => "Name must be at least 2 characters" }),
			withField({ label: "Full Name", placeholder: "Jane Doe" })
		),
		email: pipe(
			Schema.String,
			Schema.pattern(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/),
			Schema.annotations({ message: () => "Enter a valid email address" }),
			withField({ label: "Email", inputType: "email" })
		),
		subject: pipe(
			Schema.String,
			Schema.minLength(5),
			Schema.annotations({ message: () => "Subject must be at least 5 characters" }),
			withField({ label: "Subject", placeholder: "How can we help?" })
		),
		message: pipe(
			Schema.String,
			Schema.minLength(20),
			Schema.annotations({ message: () => "Message must be at least 20 characters" }),
			withField({ label: "Message", inputType: "textarea", placeholder: "Describe your issue..." })
		)
	}),
	withFormLayout({ columns: 1, sections: [{ id: "main", title: "Contact Us" }] })
);

// TypeScript type automatically inferred from schema
export type ContactData = typeof ContactSchema.Type;`;

// ── SvelteKit Form Actions (+page.server.ts) ─────────────────────────────────
export const formActionServerDocs = `
// src/routes/contact/+page.server.ts
import { fail, redirect } from "@sveltejs/kit";
import { Schema, Either, pipe } from "effect";
import type { Actions } from "./$types";
import { ContactSchema } from "$lib/schemas/contact";

// Parse Effect ParseError into a flat { field: message } map
function parseSchemaErrors(error: Schema.ParseError): Record<string, string> {
	const errors: Record<string, string> = {};
	for (const issue of error.issues) {
		const field = issue.path?.[0]?.toString();
		if (field) errors[field] = issue.message ?? "Invalid value";
	}
	return errors;
}

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const raw = Object.fromEntries(formData);

		// Server-side validation using the same shared schema
		const result = Schema.decodeUnknownEither(ContactSchema)(raw);

		if (Either.isLeft(result)) {
			// Return 422 with field errors and original values for re-rendering
			return fail(422, {
				errors: parseSchemaErrors(result.left),
				values: raw
			});
		}

		// ✅ Data is validated and typed as ContactData
		const data = result.right;
		await sendContactEmail(data);

		throw redirect(303, "/contact/success");
	}
};`;

// ── SvelteKit Form Actions (+page.svelte client side) ────────────────────────
export const formActionClientDocs = `
<!-- src/routes/contact/+page.svelte -->
<script lang="ts">
	import { enhance } from "$app/forms";
	import { SchemaForm, FormController } from "@kareyes/aether/forms";
	import { ContactSchema } from "$lib/schemas/contact";
	import type { ActionData } from "./$types";

	let { form }: { form: ActionData } = $props();

	const controller = new FormController(ContactSchema, { validateOnBlur: true });

	// Map server-returned errors back to the form on navigation
	$effect(() => {
		if (form?.errors) {
			// controller.setErrors() places server errors on the matching fields
			controller.setErrors(form.errors);
		}
		// Re-populate field values from the failed submission
		if (form?.values) {
			controller.setValues(form.values);
		}
	});
</script>

<!--
	use:enhance upgrades the native <form> with JS:
	- Prevents full page reload
	- Streams action result back
	- Updates $form reactive store
	The form still works without JS (progressive enhancement).
-->
<form method="POST" use:enhance>
	<SchemaForm
		{controller}
		submitText="Send Message"
	/>
</form>`;

// ── API Endpoint (+server.ts) ────────────────────────────────────────────────
export const apiEndpointServerDocs = `
// src/routes/api/register/+server.ts
import { json } from "@sveltejs/kit";
import { Schema, Either, pipe } from "effect";
import type { RequestHandler } from "./$types";

const RegistrationSchema = pipe(
	Schema.Struct({
		username: pipe(Schema.String, Schema.minLength(3), Schema.maxLength(20)),
		email: Schema.String,
		password: pipe(Schema.String, Schema.minLength(8))
	})
);

function parseSchemaErrors(error: Schema.ParseError): Record<string, string> {
	const errors: Record<string, string> = {};
	for (const issue of error.issues) {
		const field = issue.path?.[0]?.toString();
		if (field) errors[field] = issue.message ?? "Invalid value";
	}
	return errors;
}

export const POST: RequestHandler = async ({ request }) => {
	// 1. Parse JSON body
	const body = await request.json();

	// 2. Validate with schema
	const result = Schema.decodeUnknownEither(RegistrationSchema)(body);

	if (Either.isLeft(result)) {
		return json({ errors: parseSchemaErrors(result.left) }, { status: 422 });
	}

	const { username, email, password } = result.right;

	// 3. Business-logic checks (uniqueness, etc.)
	const existingUser = await db.users.findByUsername(username);
	if (existingUser) {
		return json({ errors: { username: "Username is already taken" } }, { status: 409 });
	}

	// 4. Save and return
	const user = await db.users.create({ username, email, password });
	return json({ success: true, id: user.id }, { status: 201 });
};`;

// ── Client-side fetch submission ──────────────────────────────────────────────
export const fetchSubmitDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	const RegistrationSchema = pipe(
		Schema.Struct({
			username: pipe(
				Schema.String, Schema.minLength(3),
				withField({ label: "Username" })
			),
			email: pipe(
				Schema.String,
				Schema.pattern(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/),
				withField({ label: "Email", inputType: "email" })
			),
			password: pipe(
				Schema.String, Schema.minLength(8),
				withField({ label: "Password", inputType: "password" })
			)
		}),
		withFormLayout({ columns: 1, sections: [{ id: "main", title: "Create Account" }] })
	);

	const controller = new FormController(RegistrationSchema, { validateOnBlur: true });

	async function handleSubmit(data: typeof RegistrationSchema.Type) {
		const res = await fetch("/api/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		});

		const result = await res.json();

		if (!res.ok && result.errors) {
			// Map server errors (e.g. "username taken") directly onto form fields
			controller.setErrors(result.errors);
			return;
		}

		// ✅ Success — redirect or show confirmation
		console.log("Registered:", result.id);
	}
</script>

<SchemaForm {controller} onSubmit={handleSubmit} submitText="Create Account" />`;

// ── Server error mapping ──────────────────────────────────────────────────────
export const serverErrorMappingDocs = `
<script lang="ts">
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";
	import { Schema, pipe } from "effect";

	const schema = pipe(
		Schema.Struct({
			username: pipe(Schema.String, withField({ label: "Username" })),
			email: pipe(Schema.String, withField({ label: "Email", inputType: "email" }))
		}),
		withFormLayout({ columns: 1, sections: [{ id: "main", title: "Update Profile" }] })
	);

	const controller = new FormController(schema);

	async function handleSubmit(data) {
		const res = await fetch("/api/profile", {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		});

		const result = await res.json();

		if (res.status === 409) {
			// Conflict — e.g. duplicate email or username
			controller.setErrors(result.errors);
			// { email: "This email is already registered" }
			return;
		}

		if (res.status === 422) {
			// Server-side validation failure
			controller.setErrors(result.errors);
			return;
		}

		if (!res.ok) {
			// Generic server error — set on a specific field or show a toast
			controller.setFieldError("username", "Server error. Please try again.");
			return;
		}

		// ✅ Success
		console.log("Profile updated:", result);
	}
</script>

<!--
	controller.setErrors({ field: "message" }) — map a { field: message } object to the form
	controller.setFieldError("field", "message") — set a single field error
	Both work the same as client-side validation errors — shown inline below the field.
-->
<SchemaForm {controller} onSubmit={handleSubmit} submitText="Save Profile" />`;
