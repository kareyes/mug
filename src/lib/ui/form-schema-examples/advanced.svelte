<script lang="ts">
	import {
		customFooterDocs,
		jobApplicationDocs,
		appSettingsDocs,
		checkoutFlowDocs
	} from "$lib/code-blocks/form-schema-advanced";
	import { Card, Button, CodeBlock } from "@kareyes/aether";
	import {
		SchemaForm,
		FormController,
		withField,
		withFormLayout,
		RequiredCheckbox,
		requiredCheckbox
	} from "@kareyes/aether/forms";
	import { Schema, pipe } from "effect";
	import PreviewContainer from "../../components/preview-container.svelte";

	// --- 1. Custom Footer with multiple actions ---
	const DraftSchema = pipe(
		Schema.Struct({
			title: pipe(
				Schema.String,
				Schema.minLength(3),
				withField({ label: "Article Title", placeholder: "Enter your title..." })
			),
			category: pipe(
				Schema.String,
				withField({
					label: "Category",
					inputType: "select",
					colSpan: 6,
					options: [
						{ value: "tech", label: "Technology" },
						{ value: "design", label: "Design" },
						{ value: "business", label: "Business" },
						{ value: "other", label: "Other" }
					]
				})
			),
			visibility: pipe(
				Schema.String,
				withField({
					label: "Visibility",
					inputType: "radio",
					colSpan: 6,
					options: [
						{ value: "public", label: "Public" },
						{ value: "private", label: "Private" },
						{ value: "draft", label: "Draft" }
					]
				})
			),
			content: pipe(
				Schema.String,
				Schema.minLength(10),
				withField({
					label: "Content",
					inputType: "textarea",
					placeholder: "Write your article content here..."
				})
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [{ id: "main", title: "New Article" }]
		})
	);

	const draftController = new FormController(DraftSchema, {
		validateOnBlur: true
	});

	let saveStatus = $state<string | null>(null);

	function handleSaveDraft() {
		saveStatus = "Draft saved!";
		setTimeout(() => (saveStatus = null), 2000);
	}

	// --- 2. Complex 4-Step Job Application ---
	const JobApplicationSchema = pipe(
		Schema.Struct({
			// Step 1 — Personal Info
			firstName: pipe(
				Schema.String,
				Schema.minLength(1),
				withField({ label: "First Name", step: 1, section: "personal", colSpan: 6 })
			),
			lastName: pipe(
				Schema.String,
				Schema.minLength(1),
				withField({ label: "Last Name", step: 1, section: "personal", colSpan: 6 })
			),
			email: pipe(
				Schema.String,
				Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
				Schema.annotations({ message: () => "Enter a valid email address" }),
				withField({ label: "Email", inputType: "email", step: 1, section: "personal" })
			),
			phone: pipe(
				Schema.String,
				withField({
					label: "Phone",
					inputType: "tel",
					mask: "phone",
					step: 1,
					section: "personal"
				})
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
						{ value: "fullstack", label: "Full Stack Developer" },
						{ value: "designer", label: "UI/UX Designer" },
						{ value: "pm", label: "Product Manager" }
					]
				})
			),
			department: pipe(
				Schema.String,
				withField({
					label: "Department",
					inputType: "select",
					step: 2,
					section: "position",
					colSpan: 6,
					options: [
						{ value: "engineering", label: "Engineering" },
						{ value: "product", label: "Product" },
						{ value: "design", label: "Design" },
						{ value: "marketing", label: "Marketing" }
					]
				})
			),
			startDate: pipe(
				Schema.String,
				withField({
					label: "Earliest Start Date",
					inputType: "date",
					step: 2,
					section: "position",
					colSpan: 6
				})
			),
			salaryExpectation: pipe(
				Schema.Number,
				withField({
					label: "Salary Expectation (USD)",
					inputType: "number",
					step: 2,
					section: "position"
				})
			),

			// Step 3 — Experience
			yearsOfExperience: pipe(
				Schema.String,
				withField({
					label: "Years of Experience",
					inputType: "select",
					step: 3,
					section: "experience",
					colSpan: 6,
					options: [
						{ value: "0-1", label: "0–1 years" },
						{ value: "2-4", label: "2–4 years" },
						{ value: "5-9", label: "5–9 years" },
						{ value: "10+", label: "10+ years" }
					]
				})
			),
			currentEmployer: pipe(
				Schema.String,
				withField({
					label: "Current Employer",
					placeholder: "Company name",
					step: 3,
					section: "experience",
					colSpan: 6
				})
			),
			coverLetter: pipe(
				Schema.String,
				Schema.minLength(50),
				Schema.annotations({ message: () => "Cover letter must be at least 50 characters" }),
				withField({
					label: "Cover Letter",
					inputType: "textarea",
					placeholder:
						"Tell us why you're a great fit for this role and what excites you about joining our team...",
					step: 3,
					section: "experience"
				})
			),

			// Step 4 — Agreements
			workAuthorization: pipe(
				Schema.String,
				withField({
					label: "Work Authorization",
					inputType: "radio",
					step: 4,
					section: "agreements",
					options: [
						{ value: "citizen", label: "US Citizen" },
						{ value: "permanent", label: "Permanent Resident" },
						{ value: "visa", label: "Requires Visa Sponsorship" }
					]
				})
			),
			backgroundCheck: pipe(
				RequiredCheckbox,
				withField({
					label: "I consent to a background check",
					inputType: "checkbox",
					step: 4,
					section: "agreements"
				})
			),
			termsAgreement: pipe(
				requiredCheckbox("You must agree to the application terms"),
				withField({
					label: "I agree to the application terms and conditions",
					inputType: "checkbox",
					step: 4,
					section: "agreements"
				})
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

	const jobController = new FormController(JobApplicationSchema, {
		validateOnBlur: true,
		initialValues: { salaryExpectation: 0 }
	});

	// --- 3. Settings Form with Card Sections and Custom Footer ---
	const AppSettingsSchema = pipe(
		Schema.Struct({
			siteName: pipe(
				Schema.String,
				Schema.minLength(1),
				Schema.annotations({ message: () => "Site name is required" }),
				withField({ label: "Site Name", placeholder: "My Awesome App", section: "general" })
			),
			siteUrl: pipe(
				Schema.String,
				Schema.pattern(/^https?:\/\/.+/),
				Schema.annotations({ message: () => "URL must start with http:// or https://" }),
				withField({
					label: "Site URL",
					inputType: "url",
					placeholder: "https://myapp.com",
					section: "general"
				})
			),
			supportEmail: pipe(
				Schema.String,
				Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
				Schema.annotations({ message: () => "Enter a valid support email" }),
				withField({
					label: "Support Email",
					inputType: "email",
					section: "general"
				})
			),
			maintenanceMode: pipe(
				Schema.Boolean,
				withField({
					label: "Enable maintenance mode",
					inputType: "switch",
					section: "general",
					description: "Temporarily block access to non-admin users"
				})
			),
			emailProvider: pipe(
				Schema.String,
				withField({
					label: "Email Provider",
					inputType: "select",
					section: "email",
					colSpan: 6,
					options: [
						{ value: "smtp", label: "SMTP" },
						{ value: "sendgrid", label: "SendGrid" },
						{ value: "mailgun", label: "Mailgun" },
						{ value: "ses", label: "Amazon SES" }
					]
				})
			),
			fromAddress: pipe(
				Schema.String,
				withField({
					label: "From Address",
					inputType: "email",
					placeholder: "no-reply@myapp.com",
					section: "email",
					colSpan: 6
				})
			),
			maxLoginAttempts: pipe(
				Schema.Number,
				withField({
					label: "Max Login Attempts",
					inputType: "number",
					section: "security",
					colSpan: 6
				})
			),
			sessionTimeout: pipe(
				Schema.Number,
				withField({
					label: "Session Timeout (minutes)",
					inputType: "number",
					section: "security",
					colSpan: 6
				})
			),
			twoFactorRequired: pipe(
				Schema.Boolean,
				withField({
					label: "Require two-factor authentication",
					inputType: "switch",
					section: "security"
				})
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

	const settingsController = new FormController(AppSettingsSchema, {
		validateOnBlur: true,
		initialValues: {
			maintenanceMode: false,
			maxLoginAttempts: 5,
			sessionTimeout: 60,
			twoFactorRequired: false
		}
	});

	let settingsSaved = $state(false);

	// --- 4. E-commerce Checkout: Multi-Step with Mixed Section Variants ---
	const CheckoutSchema = pipe(
		Schema.Struct({
			// Step 1 — Contact
			email: pipe(
				Schema.String,
				Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
				Schema.annotations({ message: () => "Enter a valid email" }),
				withField({ label: "Email Address", inputType: "email", step: 1, section: "contact" })
			),
			phone: pipe(
				Schema.String,
				withField({
					label: "Phone",
					inputType: "tel",
					mask: "phone",
					step: 1,
					section: "contact"
				})
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
				Schema.String,
				Schema.minLength(1),
				withField({ label: "First Name", step: 2, section: "shipping", colSpan: 6 })
			),
			shippingLast: pipe(
				Schema.String,
				Schema.minLength(1),
				withField({ label: "Last Name", step: 2, section: "shipping", colSpan: 6 })
			),
			shippingAddress: pipe(
				Schema.String,
				Schema.minLength(5),
				withField({ label: "Street Address", step: 2, section: "shipping" })
			),
			shippingCity: pipe(
				Schema.String,
				Schema.minLength(1),
				withField({ label: "City", step: 2, section: "shipping", colSpan: 6 })
			),
			shippingState: pipe(
				Schema.String,
				withField({
					label: "State",
					inputType: "select",
					step: 2,
					section: "shipping",
					colSpan: 3,
					options: [
						{ value: "ca", label: "CA" },
						{ value: "ny", label: "NY" },
						{ value: "tx", label: "TX" },
						{ value: "fl", label: "FL" }
					]
				})
			),
			shippingZip: pipe(
				Schema.String,
				Schema.pattern(/^\d{5}$/),
				Schema.annotations({ message: () => "Enter a valid 5-digit zip code" }),
				withField({ label: "Zip Code", step: 2, section: "shipping", colSpan: 3 })
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
			cardName: pipe(
				Schema.String,
				Schema.minLength(2),
				withField({ label: "Name on Card", step: 3, section: "payment" })
			),
			cardNumber: pipe(
				Schema.String,
				Schema.minLength(13),
				Schema.maxLength(19),
				withField({
					label: "Card Number",
					placeholder: "1234 5678 9012 3456",
					step: 3,
					section: "payment",
					colSpan: 8
				})
			),
			cardCvv: pipe(
				Schema.String,
				Schema.pattern(/^\d{3,4}$/),
				Schema.annotations({ message: () => "CVV must be 3 or 4 digits" }),
				withField({
					label: "CVV",
					inputType: "password",
					placeholder: "123",
					step: 3,
					section: "payment",
					colSpan: 4
				})
			),
			billingsSameAsShipping: pipe(
				Schema.Boolean,
				withField({
					label: "Billing address same as shipping",
					inputType: "checkbox",
					step: 3,
					section: "payment"
				})
			),
			orderTerms: pipe(
				RequiredCheckbox,
				withField({
					label: "I agree to the terms of sale and return policy",
					inputType: "checkbox",
					step: 3,
					section: "payment"
				})
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

	const checkoutController = new FormController(CheckoutSchema, {
		validateOnBlur: true,
		initialValues: {
			createAccount: false,
			billingsSameAsShipping: true
		}
	});
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<div class="space-y-12">
		<!-- Custom Footer -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">Custom Footer with Multiple Actions</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Replace the default submit button using the <code>footer</code> snippet. The snippet receives
				<code>isSubmitting</code>, <code>isValid</code>, and <code>handleSubmit</code>. Use
				<code>controller.reset()</code> to reset all fields programmatically.
			</p>
			<PreviewContainer>
				<div class="max-w-lg">
					<SchemaForm controller={draftController} onSubmit={(d) => console.log("Published:", d)}>
						{#snippet footer({ isSubmitting, isValid, handleSubmit })}
							<div class="flex items-center justify-between gap-3 pt-2">
								<div class="flex gap-2">
									<Button
										variant="outline"
										size="sm"
										onclick={() => {
											draftController.reset();
										}}
									>
										Discard
									</Button>
									<Button
										variant="outline"
										size="sm"
										onclick={handleSaveDraft}
									>
										{saveStatus ?? "Save Draft"}
									</Button>
								</div>
								<Button
									size="sm"
									onclick={handleSubmit}
									disabled={isSubmitting || !isValid}
								>
									{isSubmitting ? "Publishing..." : "Publish Article"}
								</Button>
							</div>
						{/snippet}
					</SchemaForm>
				</div>
			</PreviewContainer>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={customFooterDocs}
			/>
		</Card>

		<!-- 4-Step Job Application -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">4-Step Job Application</h2>
			<p class="text-sm text-muted-foreground mb-4">
				A real-world multi-step form with 4 steps and 13 fields across personal info, position
				details, experience, and agreement sections. Each step validates independently before
				allowing progression.
			</p>
			<PreviewContainer>
				<SchemaForm
					controller={jobController}
					onSubmit={(d) => console.log("Application submitted:", d)}
					showStepIndicator={true}
					nextText="Next Step"
					prevText="Previous"
					submitText="Submit Application"
				/>
			</PreviewContainer>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={jobApplicationDocs}
			/>
		</Card>

		<!-- App Settings with Card Sections + Custom Footer -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">App Settings — Card Sections + Custom Footer</h2>
			<p class="text-sm text-muted-foreground mb-4">
				A settings panel combining <code>sectionVariant="card"</code> for visual grouping with a
				custom footer snippet that shows a "Saved!" confirmation. Demonstrates how layout props and
				footer customization compose together.
			</p>
			<PreviewContainer>
				<SchemaForm
					controller={settingsController}
					onSubmit={() => {
						settingsSaved = true;
						setTimeout(() => (settingsSaved = false), 2000);
					}}
					sectionVariant="card"
				>
					{#snippet footer({ isSubmitting, isValid, handleSubmit })}
						<div class="flex items-center justify-between gap-4">
							<Button
								variant="outline"
								size="sm"
								onclick={() => settingsController.reset()}
							>
								Reset to Defaults
							</Button>
							<div class="flex items-center gap-3">
								{#if settingsSaved}
									<span class="text-sm text-green-600 dark:text-green-400 font-medium">
										Settings saved!
									</span>
								{/if}
								<Button
									size="sm"
									onclick={handleSubmit}
									disabled={isSubmitting || !isValid}
								>
									{isSubmitting ? "Saving..." : "Save Settings"}
								</Button>
							</div>
						</div>
					{/snippet}
				</SchemaForm>
			</PreviewContainer>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={appSettingsDocs}
			/>
		</Card>

		<!-- E-commerce Checkout -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">E-commerce Checkout Flow</h2>
			<p class="text-sm text-muted-foreground mb-4">
				A 3-step checkout form covering contact, shipping (with method selection and address
				validation), and payment fields. Features mixed input types including radio groups, switches,
				and required checkboxes for terms agreement.
			</p>
			<PreviewContainer>
				<SchemaForm
					controller={checkoutController}
					onSubmit={(d) => console.log("Order placed:", d)}
					showStepIndicator={true}
					nextText="Continue"
					prevText="Back"
					submitText="Place Order"
				/>
			</PreviewContainer>
			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={checkoutFlowDocs}
			/>
		</Card>
	</div>
</div>
