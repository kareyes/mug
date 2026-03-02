export const patternMatchingDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	const PatternSchema = pipe(
		Schema.Struct({
			username: pipe(
				Schema.String,
				Schema.minLength(3),
				Schema.maxLength(20),
				Schema.pattern(/^[a-zA-Z0-9_]+$/),
				Schema.annotations({
					message: () => "3-20 characters — letters, numbers, underscores only"
				}),
				withField({
					label: "Username",
					placeholder: "john_doe",
					description: "3-20 characters, letters, numbers, underscores",
					colSpan: 6
				})
			),
			email: pipe(
				Schema.String,
				Schema.pattern(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/),
				Schema.annotations({ message: () => "Please enter a valid email address" }),
				withField({ label: "Email", inputType: "email", colSpan: 6 })
			),
			zipCode: pipe(
				Schema.String,
				Schema.pattern(/^\\d{5}(-\\d{4})?$/),
				Schema.annotations({
					message: () => "Enter a valid US zip code (e.g., 90210 or 90210-1234)"
				}),
				withField({ label: "Zip Code", placeholder: "90210", colSpan: 6 })
			),
			slug: pipe(
				Schema.String,
				Schema.pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
				Schema.annotations({
					message: () => "Slug must be lowercase letters, numbers, and hyphens only"
				}),
				withField({ label: "URL Slug", placeholder: "my-article-title", colSpan: 6 })
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [{ id: "main", title: "Pattern Validation" }]
		})
	);

	const controller = new FormController(PatternSchema, { validateOnBlur: true });
</script>

<SchemaForm {controller} onSubmit={(d) => console.log(d)} submitText="Validate Fields" />`;

export const passwordStrengthDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	const PasswordSchema = pipe(
		Schema.Struct({
			currentPassword: pipe(
				Schema.String,
				Schema.minLength(1),
				Schema.annotations({ message: () => "Current password is required" }),
				withField({ label: "Current Password", inputType: "password" })
			),
			newPassword: pipe(
				Schema.String,
				Schema.minLength(8),
				Schema.maxLength(128),
				// Requires: uppercase, lowercase, number, special character
				Schema.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).+$/),
				Schema.annotations({
					message: () =>
						"Must have uppercase, lowercase, number, and special character (@$!%*?&)"
				}),
				withField({
					label: "New Password",
					inputType: "password",
					description: "Min 8 chars with uppercase, lowercase, number, and special character"
				})
			)
		}),
		withFormLayout({
			columns: 1,
			sections: [{ id: "main", title: "Password Strength Rules" }]
		})
	);

	// validateOnChange: false prevents jittery errors while typing
	const controller = new FormController(PasswordSchema, {
		validateOnBlur: true,
		validateOnChange: false
	});
</script>

<SchemaForm {controller} onSubmit={(d) => console.log(d)} submitText="Update Password" />`;

export const requiredCheckboxDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import {
		SchemaForm, FormController, withField, withFormLayout,
		RequiredCheckbox, requiredCheckbox
	} from "@kareyes/aether/forms";

	const CheckboxSchema = pipe(
		Schema.Struct({
			// Default error: "This field is required"
			acceptTerms: pipe(
				RequiredCheckbox,
				withField({ label: "I accept the Terms of Service", inputType: "checkbox" })
			),
			// Custom error message
			acceptPrivacy: pipe(
				requiredCheckbox("You must accept the Privacy Policy to continue"),
				withField({ label: "I accept the Privacy Policy", inputType: "checkbox" })
			),
			// Also custom error
			ageConfirmation: pipe(
				requiredCheckbox("You must confirm you are 18 years or older"),
				withField({ label: "I confirm I am 18 years or older", inputType: "checkbox" })
			),
			// Plain Schema.Boolean — never blocks submission
			marketingOptIn: pipe(
				Schema.Boolean,
				withField({ label: "Receive marketing emails (optional)", inputType: "checkbox" })
			)
		}),
		withFormLayout({
			columns: 1,
			sections: [{ id: "main", title: "Checkbox Validation" }]
		})
	);

	const controller = new FormController(CheckboxSchema, {
		validateOnBlur: true,
		initialValues: { marketingOptIn: false }
	});
</script>

<SchemaForm {controller} onSubmit={(d) => console.log(d)} submitText="Create Account" />`;

export const lengthConstraintsDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	const LengthSchema = pipe(
		Schema.Struct({
			title: pipe(
				Schema.String,
				Schema.minLength(5),
				Schema.maxLength(60),
				Schema.annotations({ message: () => "Title must be 5-60 characters" }),
				withField({
					label: "Post Title",
					placeholder: "Enter a compelling title...",
					description: "5 to 60 characters"
				})
			),
			excerpt: pipe(
				Schema.String,
				Schema.minLength(20),
				Schema.maxLength(160),
				Schema.annotations({ message: () => "Excerpt must be 20-160 characters" }),
				withField({
					label: "Meta Excerpt",
					inputType: "textarea",
					placeholder: "Short summary for search engines...",
					// Use description to surface constraints inline
					description: "20 to 160 characters — ideal for SEO meta descriptions"
				})
			),
			tag: pipe(
				Schema.String,
				Schema.minLength(2),
				Schema.maxLength(30),
				Schema.annotations({ message: () => "Tag must be 2-30 characters" }),
				withField({ label: "Tag", placeholder: "svelte", description: "Max 30 characters" })
			)
		}),
		withFormLayout({
			columns: 1,
			sections: [{ id: "main", title: "String Length Constraints" }]
		})
	);

	const controller = new FormController(LengthSchema, { validateOnBlur: true });
</script>

<SchemaForm {controller} onSubmit={(d) => console.log(d)} submitText="Publish Post" />`;

export const chainedConstraintsDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	// All validators pipe together — all must pass before the field is valid.
	// Schema.annotations at the end sets one unified error that covers all rules.
	const SignupSchema = pipe(
		Schema.Struct({
			username: pipe(
				Schema.String,
				Schema.minLength(3),
				Schema.maxLength(20),
				Schema.pattern(/^[a-zA-Z][a-zA-Z0-9_]*$/),
				Schema.annotations({
					message: () =>
						"Must start with a letter, 3-20 chars, letters/numbers/underscores"
				}),
				withField({ label: "Username", placeholder: "cooluser42", colSpan: 6 })
			),
			handle: pipe(
				Schema.String,
				Schema.minLength(1),
				Schema.maxLength(15),
				Schema.pattern(/^[a-zA-Z0-9_]+$/),
				Schema.annotations({
					message: () => "Handle: 1-15 chars, letters/numbers/underscores"
				}),
				withField({ label: "Twitter Handle", placeholder: "johndoe", colSpan: 6 })
			),
			website: pipe(
				Schema.String,
				Schema.pattern(/^https?:\\/\\/.+\\..+/),
				Schema.annotations({
					message: () => "Enter a valid URL starting with http:// or https://"
				}),
				withField({ label: "Website", inputType: "url", placeholder: "https://mysite.com" })
			),
			inviteCode: pipe(
				Schema.String,
				Schema.minLength(8),
				Schema.maxLength(8),
				Schema.pattern(/^[A-Z0-9]{8}$/),
				Schema.annotations({
					message: () => "Invite code must be exactly 8 uppercase alphanumeric characters"
				}),
				withField({ label: "Invite Code", placeholder: "ABCD1234" })
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [{ id: "main", title: "Chained Constraints" }]
		})
	);

	const controller = new FormController(SignupSchema, { validateOnBlur: true });
</script>

<SchemaForm {controller} onSubmit={(d) => console.log(d)} submitText="Create Account" />`;
