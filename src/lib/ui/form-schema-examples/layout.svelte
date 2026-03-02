<script lang="ts">
	import {
		singleColumnDocs,
		twoColumnDocs,
		twelveColumnDocs,
		multiSectionDefaultDocs,
		multiSectionCardDocs,
		multiSectionCollapsibleDocs
	} from "$lib/code-blocks/form-schema-layout";
	import { Card, CodeBlock } from "@kareyes/aether";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";
	import { Schema, pipe } from "effect";
	import PreviewContainer from "../../components/preview-container.svelte";

	// --- 1. Single Column Layout ---
	const SingleColumnSchema = pipe(
		Schema.Struct({
			fullName: pipe(
				Schema.String,
				withField({ label: "Full Name", placeholder: "John Doe" })
			),
			email: pipe(
				Schema.String,
				withField({ label: "Email", inputType: "email", placeholder: "you@example.com" })
			),
			subject: pipe(
				Schema.String,
				withField({ label: "Subject", placeholder: "How can we help?" })
			),
			message: pipe(
				Schema.String,
				withField({
					label: "Message",
					inputType: "textarea",
					placeholder: "Describe your question or feedback..."
				})
			)
		}),
		withFormLayout({
			columns: 1,
			sections: [{ id: "main", title: "Contact Us" }]
		})
	);

	const singleColumnController = new FormController(SingleColumnSchema);

	// --- 2. Two Column Layout ---
	const TwoColumnSchema = pipe(
		Schema.Struct({
			firstName: pipe(Schema.String, withField({ label: "First Name", placeholder: "John", colSpan:1 })),
			lastName: pipe(Schema.String, withField({ label: "Last Name", placeholder: "Doe", colSpan:1 })),
			email: pipe(
				Schema.String,
				withField({ label: "Email Address", inputType: "email", placeholder: "you@example.com", colSpan:1 })
			),
			phone: pipe(
				Schema.String,
				withField({ label: "Phone Number", inputType: "tel", mask: "phone", placeholder: "(555) 123-4567", colSpan:1 })
			)
		}),
		withFormLayout({
			columns: 2,
			sections: [{ id: "main", title: "Two Column Layout" }]
		})
	);

	const twoColumnController = new FormController(TwoColumnSchema);

	// --- 3. 12-Column Grid with colSpan ---
	const GridSchema = pipe(
		Schema.Struct({
			firstName: pipe(Schema.String, withField({ label: "First Name", colSpan: 4 })),
			middleName: pipe(
				Schema.String,
				withField({ label: "Middle Name", placeholder: "Optional", colSpan: 4 })
			),
			lastName: pipe(Schema.String, withField({ label: "Last Name", colSpan: 4 })),
			email: pipe(
				Schema.String,
				withField({ label: "Email", inputType: "email", colSpan: 8 })
			),
			zipCode: pipe(Schema.String, withField({ label: "Zip Code", colSpan: 4 })),
			company: pipe(Schema.String, withField({ label: "Company", colSpan: 6 })),
			jobTitle: pipe(Schema.String, withField({ label: "Job Title", colSpan: 6 })),
			bio: pipe(
				Schema.String,
				withField({
					label: "Biography",
					inputType: "textarea",
					placeholder: "Tell us about yourself...",
					colSpan: 12
				})
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [{ id: "main", title: "12-Column Grid — Mixed colSpan" }]
		})
	);

	const gridController = new FormController(GridSchema);

	// --- 4. Multi-Section — Default Variant ---
	const AddressSchema = pipe(
		Schema.Struct({
			firstName: pipe(
				Schema.String,
				withField({ label: "First Name", section: "personal", colSpan: 6 })
			),
			lastName: pipe(
				Schema.String,
				withField({ label: "Last Name", section: "personal", colSpan: 6 })
			),
			dob: pipe(
				Schema.String,
				withField({ label: "Date of Birth", inputType: "date", section: "personal" })
			),
			street: pipe(
				Schema.String,
				withField({ label: "Street Address", section: "address" })
			),
			city: pipe(
				Schema.String,
				withField({ label: "City", section: "address", colSpan: 6 })
			),
			state: pipe(
				Schema.String,
				withField({
					label: "State",
					inputType: "select",
					section: "address",
					colSpan: 4,
					options: [
						{ value: "ca", label: "California" },
						{ value: "ny", label: "New York" },
						{ value: "tx", label: "Texas" },
						{ value: "fl", label: "Florida" },
						{ value: "wa", label: "Washington" }
					]
				})
			),
			zip: pipe(
				Schema.String,
				withField({ label: "Zip Code", section: "address", colSpan: 2 })
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [
				{ id: "personal", title: "Personal Information", order: 1 },
				{ id: "address", title: "Mailing Address", order: 2 }
			]
		})
	);

	const defaultSectionController = new FormController(AddressSchema);

	// --- 5. Card Section Variant ---
	const PaymentSchema = pipe(
		Schema.Struct({
			cardHolder: pipe(
				Schema.String,
				withField({ label: "Name on Card", section: "card", colSpan: 12 })
			),
			cardNumber: pipe(
				Schema.String,
				withField({ label: "Card Number", placeholder: "1234 5678 9012 3456", section: "card", colSpan: 8 })
			),
			cvv: pipe(
				Schema.String,
				withField({ label: "CVV", placeholder: "123", section: "card", colSpan: 4 })
			),
			expiryMonth: pipe(
				Schema.String,
				withField({
					label: "Expiry Month",
					inputType: "select",
					section: "card",
					colSpan: 6,
					options: Array.from({ length: 12 }, (_, i) => ({
						value: String(i + 1).padStart(2, "0"),
						label: String(i + 1).padStart(2, "0")
					}))
				})
			),
			expiryYear: pipe(
				Schema.String,
				withField({
					label: "Expiry Year",
					inputType: "select",
					section: "card",
					colSpan: 6,
					options: Array.from({ length: 8 }, (_, i) => ({
						value: String(2025 + i),
						label: String(2025 + i)
					}))
				})
			),
			billingName: pipe(
				Schema.String,
				withField({ label: "Full Name", section: "billing", colSpan: 12 })
			),
			billingAddress: pipe(
				Schema.String,
				withField({ label: "Address", section: "billing", colSpan: 8 })
			),
			billingZip: pipe(
				Schema.String,
				withField({ label: "Zip", section: "billing", colSpan: 4 })
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [
				{ id: "card", title: "Card Details", order: 1 },
				{ id: "billing", title: "Billing Address", order: 2 }
			]
		})
	);

	const cardSectionController = new FormController(PaymentSchema);

	// --- 6. Collapsible Section Variant ---
	const SettingsSchema = pipe(
		Schema.Struct({
			displayName: pipe(
				Schema.String,
				withField({ label: "Display Name", section: "profile", colSpan: 6 })
			),
			email: pipe(
				Schema.String,
				withField({ label: "Email", inputType: "email", section: "profile", colSpan: 6 })
			),
			bio: pipe(
				Schema.String,
				withField({
					label: "Bio",
					inputType: "textarea",
					placeholder: "A short bio...",
					section: "profile"
				})
			),
			twitter: pipe(
				Schema.String,
				withField({ label: "Twitter", placeholder: "@username", section: "social" })
			),
			github: pipe(
				Schema.String,
				withField({ label: "GitHub", placeholder: "username", section: "social" })
			),
			website: pipe(
				Schema.String,
				withField({ label: "Website", inputType: "url", section: "social" })
			),
			language: pipe(
				Schema.String,
				withField({
					label: "Language",
					inputType: "select",
					section: "preferences",
					colSpan: 6,
					options: [
						{ value: "en", label: "English" },
						{ value: "es", label: "Spanish" },
						{ value: "fr", label: "French" },
						{ value: "de", label: "German" }
					]
				})
			),
			timezone: pipe(
				Schema.String,
				withField({
					label: "Timezone",
					inputType: "select",
					section: "preferences",
					colSpan: 6,
					options: [
						{ value: "utc", label: "UTC" },
						{ value: "est", label: "Eastern (EST)" },
						{ value: "cst", label: "Central (CST)" },
						{ value: "pst", label: "Pacific (PST)" }
					]
				})
			),
			emailNotifications: pipe(
				Schema.Boolean,
				withField({
					label: "Email notifications",
					inputType: "switch",
					section: "preferences"
				})
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [
				{ id: "profile", title: "Profile", order: 1 },
				{ id: "social", title: "Social Links", order: 2 },
				{ id: "preferences", title: "Preferences", order: 3 }
			]
		})
	);

	const collapsibleController = new FormController(SettingsSchema, {
		initialValues: { emailNotifications: true }
	});
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<div class="space-y-12">
		<!-- Single Column -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">Single Column Layout</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Set <code>columns: 1</code> in <code>withFormLayout()</code> for a stacked, full-width
				form. Best for simple forms or narrow containers.
			</p>
			<PreviewContainer>
				<div class="max-w-md">
					<SchemaForm
						controller={singleColumnController}
						onSubmit={(d) => console.log("Sent:", d)}
						submitText="Send Message"
					/>
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
				code={singleColumnDocs}
			/>
		</Card>

		<!-- Two Column -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">Two Column Layout</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Set <code>columns: 2</code> to arrange fields into two equal-width columns automatically.
				Every field without an explicit <code>colSpan</code> takes half the width.
			</p>
			<PreviewContainer>
				<SchemaForm
					controller={twoColumnController}
					onSubmit={(d) => console.log("Saved:", d)}
					submitText="Save Contact"
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
				code={twoColumnDocs}
			/>
		</Card>

		<!-- 12-Column Grid -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">12-Column Grid with colSpan</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Use <code>columns: 12</code> with per-field <code>colSpan</code> for pixel-precise layouts.
				<code>colSpan: 4</code> = one-third, <code>colSpan: 6</code> = half,
				<code>colSpan: 12</code> = full width.
			</p>
			<PreviewContainer>
				<SchemaForm
					controller={gridController}
					onSubmit={(d) => console.log("Submitted:", d)}
					submitText="Submit"
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
				code={twelveColumnDocs}
			/>
		</Card>

		<!-- Multi-Section Default -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">Multi-Section — Default Variant</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Define named sections in <code>withFormLayout()</code> and assign each field with
				<code>section: "id"</code>. The <code>order</code> property controls rendering order.
				No <code>sectionVariant</code> prop renders sections as simple labeled groups.
			</p>
			<PreviewContainer>
				<SchemaForm
					controller={defaultSectionController}
					onSubmit={(d) => console.log("Saved:", d)}
					submitText="Save Details"
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
				code={multiSectionDefaultDocs}
			/>
		</Card>

		<!-- Multi-Section Card -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">Multi-Section — Card Variant</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Pass <code>sectionVariant="card"</code> to wrap each section in its own card. Ideal for
				visually separating logical groups like payment details and billing address.
			</p>
			<PreviewContainer>
				<SchemaForm
					controller={cardSectionController}
					onSubmit={(d) => console.log("Payment:", d)}
					sectionVariant="card"
					submitText="Pay Now"
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
				code={multiSectionCardDocs}
			/>
		</Card>

		<!-- Multi-Section Collapsible -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">Multi-Section — Collapsible Variant</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Pass <code>sectionVariant="collapsible"</code> for accordion-style sections. Great for
				settings pages where users only need to expand the section they're editing.
			</p>
			<PreviewContainer>
				<SchemaForm
					controller={collapsibleController}
					onSubmit={(d) => console.log("Settings:", d)}
					sectionVariant="collapsible"
					submitText="Save Settings"
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
				code={multiSectionCollapsibleDocs}
			/>
		</Card>
	</div>
</div>
