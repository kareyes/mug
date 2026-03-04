export const basicFormDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	const LoginSchema = pipe(
		Schema.Struct({
			email: pipe(
				Schema.String,
				Schema.pattern(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/),
				Schema.annotations({ message: () => "Please enter a valid email" }),
				withField({
					label: "Email",
					inputType: "email",
					placeholder: "you@example.com"
				})
			),
			password: pipe(
				Schema.String,
				Schema.minLength(8),
				withField({
					label: "Password",
					inputType: "password",
					placeholder: "Min 8 characters"
				})
			)
		}),
		withFormLayout({
			columns: 1,
			sections: [{ id: "login", title: "Login" }]
		})
	);

	const controller = new FormController(LoginSchema, {
		validateOnBlur: true,
		validateOnChange: false,
		initialValues: { email: "", password: "" }
	});

	async function handleSubmit(data) {
		console.log("Login submitted:", data);
	}
</script>

<SchemaForm
	{controller}
	onSubmit={handleSubmit}
	submitText="Sign In"
/>`;

export const multiSectionDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	const ProfileSchema = pipe(
		Schema.Struct({
			firstName: pipe(
				Schema.String,
				Schema.minLength(1),
				withField({
					label: "First Name",
					placeholder: "John",
					section: "personal",
					colSpan: 6
				})
			),
			lastName: pipe(
				Schema.String,
				Schema.minLength(1),
				withField({
					label: "Last Name",
					placeholder: "Doe",
					section: "personal",
					colSpan: 6
				})
			),
			bio: pipe(
				Schema.String,
				withField({
					label: "Bio",
					inputType: "textarea",
					placeholder: "Tell us about yourself...",
					section: "personal"
				})
			),
			email: pipe(
				Schema.String,
				Schema.pattern(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/),
				withField({
					label: "Email",
					inputType: "email",
					section: "contact",
					colSpan: 6
				})
			),
			phone: pipe(
				Schema.String,
				withField({
					label: "Phone",
					inputType: "tel",
					mask: "phone",
					placeholder: "(555) 123-4567",
					section: "contact",
					colSpan: 6
				})
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [
				{ id: "personal", title: "Personal Information", order: 1 },
				{ id: "contact", title: "Contact Details", order: 2 }
			]
		})
	);

	const controller = new FormController(ProfileSchema, {
		validateOnBlur: true
	});
</script>

<SchemaForm
	{controller}
	onSubmit={(data) => console.log("Profile:", data)}
	sectionVariant="card"
	submitText="Save Profile"
/>`;

export const multiStepDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	const RegistrationSchema = pipe(
		Schema.Struct({
			email: pipe(
				Schema.String,
				Schema.pattern(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/),
				withField({ label: "Email", inputType: "email", step: 1, section: "account" })
			),
			password: pipe(
				Schema.String,
				Schema.minLength(8),
				withField({ label: "Password", inputType: "password", step: 1, section: "account" })
			),
			firstName: pipe(
				Schema.String,
				Schema.minLength(1),
				withField({ label: "First Name", step: 2, section: "profile", colSpan: 6 })
			),
			lastName: pipe(
				Schema.String,
				Schema.minLength(1),
				withField({ label: "Last Name", step: 2, section: "profile", colSpan: 6 })
			),
			role: pipe(
				Schema.String,
				withField({
					label: "Role",
					inputType: "select",
					step: 2,
					section: "profile",
					options: [
						{ value: "developer", label: "Developer" },
						{ value: "designer", label: "Designer" },
						{ value: "manager", label: "Manager" }
					]
				})
			),
			newsletter: pipe(
				Schema.Boolean,
				withField({ label: "Subscribe to newsletter", step: 3, section: "preferences" })
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [
				{ id: "account", title: "Account" },
				{ id: "profile", title: "Profile" },
				{ id: "preferences", title: "Preferences" }
			],
			steps: [
				{ step: 1, title: "Account", description: "Create your login" },
				{ step: 2, title: "Profile", description: "Personal details" },
				{ step: 3, title: "Finish", description: "Preferences" }
			]
		})
	);

	const controller = new FormController(RegistrationSchema, {
		validateOnBlur: true,
		initialValues: { newsletter: false }
	});
</script>

<SchemaForm
	{controller}
	onSubmit={(data) => console.log("Registered:", data)}
	showStepIndicator={true}
	nextText="Continue"
	prevText="Go Back"
	submitText="Complete Registration"
/>`;

export const inputTypesDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	const InputShowcaseSchema = pipe(
		Schema.Struct({
			fullName: pipe(
				Schema.String,
				withField({ label: "Full Name", inputType: "text", placeholder: "John Doe", colSpan: 6 })
			),
			email: pipe(
				Schema.String,
				withField({ label: "Email", inputType: "email", placeholder: "you@example.com", colSpan: 6 })
			),
			password: pipe(
				Schema.String,
				withField({ label: "Password", inputType: "password", colSpan: 6 })
			),
			age: pipe(
				Schema.Number,
				withField({ label: "Age", inputType: "number", colSpan: 6 })
			),
			website: pipe(
				Schema.String,
				withField({ label: "Website", inputType: "url", placeholder: "https://example.com", colSpan: 6 })
			),
			phone: pipe(
				Schema.String,
				withField({ label: "Phone", inputType: "tel", mask: "phone", colSpan: 6 })
			),
			bio: pipe(
				Schema.String,
				withField({ label: "Biography", inputType: "textarea", placeholder: "Tell us about yourself..." })
			),
			country: pipe(
				Schema.String,
				withField({
					label: "Country",
					inputType: "select",
					colSpan: 6,
					options: [
						{ value: "us", label: "United States" },
						{ value: "uk", label: "United Kingdom" },
						{ value: "ca", label: "Canada" },
						{ value: "au", label: "Australia" }
					]
				})
			),
			priority: pipe(
				Schema.String,
				withField({
					label: "Priority",
					inputType: "radio",
					colSpan: 6,
					options: [
						{ value: "low", label: "Low" },
						{ value: "medium", label: "Medium" },
						{ value: "high", label: "High" }
					]
				})
			),
			notifications: pipe(
				Schema.Boolean,
				withField({ label: "Enable notifications", inputType: "switch", colSpan: 6 })
			),
			acceptTerms: pipe(
				Schema.Boolean,
				withField({ label: "I accept the terms and conditions", inputType: "checkbox", colSpan: 6 })
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [{ id: "main", title: "All Input Types" }]
		})
	);

	const controller = new FormController(InputShowcaseSchema);
</script>

<SchemaForm
	{controller}
	onSubmit={(data) => console.log("Data:", data)}
	submitText="Submit"
/>`;

export const validationDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import {
		SchemaForm, FormController, withField, withFormLayout,
		RequiredCheckbox, requiredCheckbox
	} from "@kareyes/aether/forms";

	const ValidationSchema = pipe(
		Schema.Struct({
			username: pipe(
				Schema.String,
				Schema.minLength(3),
				Schema.maxLength(20),
				Schema.pattern(/^[a-zA-Z0-9_]+$/),
				Schema.annotations({
					message: () => "Username must be 3-20 characters (letters, numbers, underscores)"
				}),
				withField({
					label: "Username",
					placeholder: "john_doe",
					description: "3-20 characters, letters, numbers, underscores only",
					colSpan: 6
				})
			),
			email: pipe(
				Schema.String,
				Schema.pattern(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/),
				Schema.annotations({ message: () => "Please enter a valid email" }),
				withField({ label: "Email", inputType: "email", colSpan: 6 })
			),
			password: pipe(
				Schema.String,
				Schema.minLength(8),
				Schema.annotations({ message: () => "Password must be at least 8 characters" }),
				withField({
					label: "Password",
					inputType: "password",
					description: "Minimum 8 characters"
				})
			),
			acceptTerms: pipe(
				RequiredCheckbox,
				withField({ label: "I accept the terms and conditions", inputType: "checkbox" })
			),
			acceptPrivacy: pipe(
				requiredCheckbox("You must accept the privacy policy"),
				withField({ label: "I accept the privacy policy", inputType: "checkbox" })
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [{ id: "main", title: "Validation Examples" }]
		})
	);

	const controller = new FormController(ValidationSchema, {
		validateOnBlur: true,
		validateOnChange: false
	});
</script>

<SchemaForm
	{controller}
	onSubmit={(data) => console.log("Valid data:", data)}
	submitText="Register"
/>`;

export const sectionVariantsDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	const SectionSchema = pipe(
		Schema.Struct({
			firstName: pipe(
				Schema.String,
				withField({ label: "First Name", section: "personal", colSpan: 6 })
			),
			lastName: pipe(
				Schema.String,
				withField({ label: "Last Name", section: "personal", colSpan: 6 })
			),
			email: pipe(
				Schema.String,
				withField({ label: "Email", inputType: "email", section: "contact" })
			),
			phone: pipe(
				Schema.String,
				withField({ label: "Phone", inputType: "tel", section: "contact" })
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [
				{ id: "personal", title: "Personal Info", order: 1 },
				{ id: "contact", title: "Contact Info", order: 2 }
			]
		})
	);

	// Change sectionVariant to "default", "card", or "collapsible"
	const controller = new FormController(SectionSchema);
</script>

<!-- Default variant -->
<SchemaForm {controller} sectionVariant="default" />

<!-- Card variant -->
<SchemaForm {controller} sectionVariant="card" />

<!-- Collapsible variant -->
<SchemaForm {controller} sectionVariant="collapsible" />`;

export const customFooterDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";
	import { Button } from "@kareyes/aether";

    // --- Custom Footer ---
    const CustomFooterSchema = pipe(
        Schema.Struct({
            title: pipe(
                Schema.String,
                Schema.minLength(1),
                withField({ label: "Title", colSpan: 6 }),
            ),
            slug: pipe(
                Schema.String,
                Schema.minLength(1),
                withField({
                    label: "Slug",
                    colSpan: 6,
                    description: "URL-friendly identifier",
                }),
            ),
            body: pipe(
                Schema.String,
                withField({ label: "Body", inputType: "textarea" }),
            ),
        }),
        withFormLayout({
            columns: 12,
            sections: [{ id: "main", title: "New Post" }],
        }),
    );

    const customFooterController = new FormController(CustomFooterSchema, {
        validateOnBlur: true,
    });
</script>

	<SchemaForm
		controller={customFooterController}
		onSubmit={(data) => console.log("Post:", data)}
	>
		{#snippet footer({ isSubmitting, isValid, handleSubmit })}
			<div class="flex items-center justify-between pt-4 border-t border-border">
				<p class="text-sm text-muted-foreground">
					{isValid ? "Ready to publish" : "Fix errors above"}
				</p>
				<div class="flex gap-2">
					<Button
						variant="outline"
						type="button"
						onclick={() => customFooterController.reset()}
					>
						Discard
					</Button>
					<Button
						variant="outline"
						type="button"
						onclick={handleSubmit}
						disabled={isSubmitting}
					>
						Save Draft
					</Button>
					<Button
						type="button"
						onclick={handleSubmit}
						disabled={isSubmitting || !isValid}
					>
						{isSubmitting ? "Publishing…" : "Publish"}
					</Button>
				</div>
			</div>
		{/snippet}
	</SchemaForm>`;
