export const customFooterDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";
	import { Button } from "@kareyes/aether";

	const DraftSchema = pipe(
		Schema.Struct({
			title: pipe(Schema.String, Schema.minLength(3), withField({ label: "Article Title" })),
			category: pipe(
				Schema.String,
				withField({
					label: "Category",
					inputType: "select",
					options: [
						{ value: "tech", label: "Technology" },
						{ value: "design", label: "Design" }
					]
				})
			),
			content: pipe(
				Schema.String,
				Schema.minLength(10),
				withField({ label: "Content", inputType: "textarea" })
			)
		}),
		withFormLayout({ columns: 1, sections: [{ id: "main", title: "New Article" }] })
	);

	const controller = new FormController(DraftSchema, { validateOnBlur: true });

	let saveStatus = $state(null);

	function handleSaveDraft() {
		saveStatus = "Draft saved!";
		setTimeout(() => (saveStatus = null), 2000);
	}
</script>

<!-- The footer snippet receives isSubmitting, isValid, and handleSubmit -->
<SchemaForm {controller} onSubmit={(d) => console.log("Published:", d)}>
	{#snippet footer({ isSubmitting, isValid, handleSubmit })}
		<div class="flex items-center justify-between gap-3 pt-2">
			<div class="flex gap-2">
				<Button variant="outline" size="sm" onclick={() => controller.reset()}>
					Discard
				</Button>
				<Button variant="outline" size="sm" onclick={handleSaveDraft}>
					{saveStatus ?? "Save Draft"}
				</Button>
			</div>
			<Button size="sm" onclick={handleSubmit} disabled={isSubmitting || !isValid}>
				{isSubmitting ? "Publishing..." : "Publish Article"}
			</Button>
		</div>
	{/snippet}
</SchemaForm>`;

export const jobApplicationDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import {
		SchemaForm, FormController, withField, withFormLayout,
		RequiredCheckbox, requiredCheckbox
	} from "@kareyes/aether/forms";

	// A 4-step multi-step form.
	// Each field is tagged with step: N and section: "id".
	// The form validates each step independently before allowing progression.
	const JobApplicationSchema = pipe(
		Schema.Struct({
			// Step 1 — Personal Info
			firstName: pipe(
				Schema.String, Schema.minLength(1),
				withField({ label: "First Name", step: 1, section: "personal", colSpan: 6 })
			),
			lastName: pipe(
				Schema.String, Schema.minLength(1),
				withField({ label: "Last Name", step: 1, section: "personal", colSpan: 6 })
			),
			email: pipe(
				Schema.String,
				Schema.pattern(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/),
				Schema.annotations({ message: () => "Enter a valid email" }),
				withField({ label: "Email", inputType: "email", step: 1, section: "personal" })
			),

			// Step 2 — Position
			position: pipe(
				Schema.String,
				withField({
					label: "Position Applied For",
					inputType: "select",
					step: 2,
					section: "position",
					options: [
						{ value: "frontend", label: "Frontend Developer" },
						{ value: "backend", label: "Backend Developer" },
						{ value: "pm", label: "Product Manager" }
					]
				})
			),
			salaryExpectation: pipe(
				Schema.Number,
				withField({ label: "Salary Expectation (USD)", inputType: "number", step: 2, section: "position" })
			),

			// Step 3 — Experience
			coverLetter: pipe(
				Schema.String,
				Schema.minLength(50),
				Schema.annotations({ message: () => "Cover letter must be at least 50 characters" }),
				withField({ label: "Cover Letter", inputType: "textarea", step: 3, section: "experience" })
			),

			// Step 4 — Agreements
			backgroundCheck: pipe(
				RequiredCheckbox,
				withField({ label: "I consent to a background check", inputType: "checkbox", step: 4, section: "agreements" })
			),
			termsAgreement: pipe(
				requiredCheckbox("You must agree to the application terms"),
				withField({ label: "I agree to the terms and conditions", inputType: "checkbox", step: 4, section: "agreements" })
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [
				{ id: "personal", title: "Personal Info" },
				{ id: "position", title: "Position" },
				{ id: "experience", title: "Experience" },
				{ id: "agreements", title: "Agreements" }
			],
			steps: [
				{ step: 1, title: "Personal", description: "Your contact details" },
				{ step: 2, title: "Position", description: "Role and compensation" },
				{ step: 3, title: "Experience", description: "Background and cover letter" },
				{ step: 4, title: "Submit", description: "Review and agree" }
			]
		})
	);

	const controller = new FormController(JobApplicationSchema, {
		validateOnBlur: true,
		initialValues: { salaryExpectation: 0 }
	});
</script>

<SchemaForm
	{controller}
	onSubmit={(d) => console.log("Application submitted:", d)}
	showStepIndicator={true}
	nextText="Next Step"
	prevText="Previous"
	submitText="Submit Application"
/>`;

export const appSettingsDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";
	import { Button } from "@kareyes/aether";

	const AppSettingsSchema = pipe(
		Schema.Struct({
			siteName: pipe(
				Schema.String, Schema.minLength(1),
				Schema.annotations({ message: () => "Site name is required" }),
				withField({ label: "Site Name", placeholder: "My Awesome App", section: "general" })
			),
			siteUrl: pipe(
				Schema.String,
				Schema.pattern(/^https?:\\/\\/.+/),
				Schema.annotations({ message: () => "URL must start with http:// or https://" }),
				withField({ label: "Site URL", inputType: "url", section: "general" })
			),
			maintenanceMode: pipe(
				Schema.Boolean,
				withField({ label: "Enable maintenance mode", inputType: "switch", section: "general" })
			),
			emailProvider: pipe(
				Schema.String,
				withField({
					label: "Email Provider",
					inputType: "select",
					section: "email",
					options: [
						{ value: "smtp", label: "SMTP" },
						{ value: "sendgrid", label: "SendGrid" },
						{ value: "ses", label: "Amazon SES" }
					]
				})
			),
			maxLoginAttempts: pipe(
				Schema.Number,
				withField({ label: "Max Login Attempts", inputType: "number", section: "security", colSpan: 6 })
			),
			twoFactorRequired: pipe(
				Schema.Boolean,
				withField({ label: "Require 2FA", inputType: "switch", section: "security" })
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [
				{ id: "general", title: "General Settings", order: 1 },
				{ id: "email", title: "Email Configuration", order: 2 },
				{ id: "security", title: "Security", order: 3 }
			]
		})
	);

	const controller = new FormController(AppSettingsSchema, {
		validateOnBlur: true,
		initialValues: { maintenanceMode: false, maxLoginAttempts: 5, twoFactorRequired: false }
	});

	let settingsSaved = $state(false);
</script>

<!-- Combining sectionVariant="card" with a custom footer snippet -->
<SchemaForm
	{controller}
	onSubmit={() => { settingsSaved = true; setTimeout(() => settingsSaved = false, 2000); }}
	sectionVariant="card"
>
	{#snippet footer({ isSubmitting, isValid, handleSubmit })}
		<div class="flex items-center justify-between gap-4">
			<Button variant="outline" size="sm" onclick={() => controller.reset()}>
				Reset to Defaults
			</Button>
			<div class="flex items-center gap-3">
				{#if settingsSaved}
					<span class="text-sm text-green-600 font-medium">Settings saved!</span>
				{/if}
				<Button size="sm" onclick={handleSubmit} disabled={isSubmitting || !isValid}>
					{isSubmitting ? "Saving..." : "Save Settings"}
				</Button>
			</div>
		</div>
	{/snippet}
</SchemaForm>`;

export const checkoutFlowDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import {
		SchemaForm, FormController, withField, withFormLayout,
		RequiredCheckbox
	} from "@kareyes/aether/forms";

	// A 3-step checkout with contact, shipping, and payment sections.
	const CheckoutSchema = pipe(
		Schema.Struct({
			// Step 1 — Contact
			email: pipe(
				Schema.String,
				Schema.pattern(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/),
				Schema.annotations({ message: () => "Enter a valid email" }),
				withField({ label: "Email Address", inputType: "email", step: 1, section: "contact" })
			),
			createAccount: pipe(
				Schema.Boolean,
				withField({
					label: "Create an account for faster checkout next time",
					inputType: "checkbox",
					step: 1,
					section: "contact"
				})
			),

			// Step 2 — Shipping
			shippingFirst: pipe(
				Schema.String, Schema.minLength(1),
				withField({ label: "First Name", step: 2, section: "shipping", colSpan: 6 })
			),
			shippingLast: pipe(
				Schema.String, Schema.minLength(1),
				withField({ label: "Last Name", step: 2, section: "shipping", colSpan: 6 })
			),
			shippingAddress: pipe(
				Schema.String, Schema.minLength(5),
				withField({ label: "Street Address", step: 2, section: "shipping" })
			),
			shippingMethod: pipe(
				Schema.String,
				withField({
					label: "Shipping Method",
					inputType: "radio",
					step: 2,
					section: "shipping",
					options: [
						{ value: "standard", label: "Standard (5-7 days) — Free" },
						{ value: "express", label: "Express (2-3 days) — $9.99" },
						{ value: "overnight", label: "Overnight — $24.99" }
					]
				})
			),

			// Step 3 — Payment
			cardNumber: pipe(
				Schema.String,
				withField({ label: "Card Number", placeholder: "1234 5678 9012 3456", step: 3, section: "payment" })
			),
			cardCvv: pipe(
				Schema.String,
				Schema.pattern(/^\\d{3,4}$/),
				Schema.annotations({ message: () => "CVV must be 3 or 4 digits" }),
				withField({ label: "CVV", inputType: "password", step: 3, section: "payment", colSpan: 4 })
			),
			orderTerms: pipe(
				RequiredCheckbox,
				withField({ label: "I agree to the terms of sale", inputType: "checkbox", step: 3, section: "payment" })
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [
				{ id: "contact", title: "Contact" },
				{ id: "shipping", title: "Shipping" },
				{ id: "payment", title: "Payment" }
			],
			steps: [
				{ step: 1, title: "Contact", description: "Your email and phone" },
				{ step: 2, title: "Shipping", description: "Delivery address and method" },
				{ step: 3, title: "Payment", description: "Card and billing info" }
			]
		})
	);

	const controller = new FormController(CheckoutSchema, {
		validateOnBlur: true,
		initialValues: { createAccount: false }
	});
</script>

<SchemaForm
	{controller}
	onSubmit={(d) => console.log("Order placed:", d)}
	showStepIndicator={true}
	nextText="Continue"
	prevText="Back"
	submitText="Place Order"
/>`;
