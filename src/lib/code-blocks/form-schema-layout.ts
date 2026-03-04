export const singleColumnDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	// columns: 1 stacks every field full-width, top to bottom
	const ContactSchema = pipe(
		Schema.Struct({
			fullName: pipe(Schema.String, withField({ label: "Full Name", placeholder: "John Doe" })),
			email: pipe(
				Schema.String,
				withField({ label: "Email", inputType: "email", placeholder: "you@example.com" })
			),
			subject: pipe(Schema.String, withField({ label: "Subject" })),
			message: pipe(
				Schema.String,
				withField({ label: "Message", inputType: "textarea" })
			)
		}),
		withFormLayout({
			columns: 1,
			sections: [{ id: "main", title: "Contact Us" }]
		})
	);

	const controller = new FormController(ContactSchema);
</script>

<SchemaForm {controller} onSubmit={(d) => console.log(d)} submitText="Send Message" />`;

export const twoColumnDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	// columns: 2 places every field in a two-column grid automatically.
	// All fields without an explicit colSpan take equal half-width.
	const TwoColumnSchema = pipe(
		Schema.Struct({
			firstName: pipe(Schema.String, withField({ label: "First Name" , colSpan:1 })),
			lastName: pipe(Schema.String, withField({ label: "Last Name", colSpan:1 })),
			email: pipe(Schema.String, withField({ label: "Email", inputType: "email", colSpan:1 })),
			phone: pipe(Schema.String, withField({ label: "Phone", inputType: "tel", mask: "phone", colSpan:1 }))
		}),
		withFormLayout({
			columns: 2,
			sections: [{ id: "main", title: "Two Column Layout" }]
		})
	);

	const controller = new FormController(TwoColumnSchema);
</script>

<SchemaForm {controller} onSubmit={(d) => console.log(d)} submitText="Save" />`;

export const twelveColumnDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	// columns: 12 with per-field colSpan for precise layout control:
	//   colSpan: 4  = one-third width
	//   colSpan: 6  = half width
	//   colSpan: 8  = two-thirds width
	//   colSpan: 12 = full width
	const GridSchema = pipe(
		Schema.Struct({
			firstName: pipe(Schema.String, withField({ label: "First Name", colSpan: 4 })),
			middleName: pipe(Schema.String, withField({ label: "Middle Name", colSpan: 4 })),
			lastName: pipe(Schema.String, withField({ label: "Last Name", colSpan: 4 })),
			email: pipe(Schema.String, withField({ label: "Email", inputType: "email", colSpan: 8 })),
			zipCode: pipe(Schema.String, withField({ label: "Zip Code", colSpan: 4 })),
			bio: pipe(
				Schema.String,
				withField({ label: "Biography", inputType: "textarea", colSpan: 12 })
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [{ id: "main", title: "12-Column Grid" }]
		})
	);

	const controller = new FormController(GridSchema);
</script>

<SchemaForm {controller} onSubmit={(d) => console.log(d)} submitText="Submit" />`;

export const multiSectionDefaultDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	// Assign fields to sections via section: "id".
	// Sections render as labeled dividers in the default variant.
	// The order property controls which section appears first.
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
			street: pipe(Schema.String, withField({ label: "Street Address", section: "address" })),
			city: pipe(Schema.String, withField({ label: "City", section: "address", colSpan: 8 })),
			zip: pipe(Schema.String, withField({ label: "Zip Code", section: "address", colSpan: 4 }))
		}),
		withFormLayout({
			columns: 12,
			sections: [
				{ id: "personal", title: "Personal Information", order: 1 },
				{ id: "address", title: "Mailing Address", order: 2 }
			]
		})
	);

	const controller = new FormController(AddressSchema);
</script>

<!-- No sectionVariant prop = default labeled dividers -->
<SchemaForm {controller} onSubmit={(d) => console.log(d)} submitText="Save Details" />`;

export const multiSectionCardDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	const PaymentSchema = pipe(
		Schema.Struct({
			cardHolder: pipe(
				Schema.String,
				withField({ label: "Name on Card", section: "card", colSpan: 12 })
			),
			cardNumber: pipe(
				Schema.String,
				withField({ label: "Card Number", section: "card", colSpan: 8 })
			),
			cvv: pipe(
				Schema.String,
				withField({ label: "CVV", section: "card", colSpan: 4 })
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

	const controller = new FormController(PaymentSchema);
</script>

<!-- sectionVariant="card" wraps each section in its own card -->
<SchemaForm
	{controller}
	onSubmit={(d) => console.log(d)}
	sectionVariant="card"
	submitText="Pay Now"
/>`;

export const multiSectionCollapsibleDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	const SettingsSchema = pipe(
		Schema.Struct({
			displayName: pipe(Schema.String, withField({ label: "Display Name", section: "profile" })),
			email: pipe(
				Schema.String,
				withField({ label: "Email", inputType: "email", section: "profile" })
			),
			twitter: pipe(
				Schema.String,
				withField({ label: "Twitter", placeholder: "@username", section: "social" })
			),
			github: pipe(
				Schema.String,
				withField({ label: "GitHub", placeholder: "username", section: "social" })
			),
			language: pipe(
				Schema.String,
				withField({
					label: "Language",
					inputType: "select",
					section: "preferences",
					options: [
						{ value: "en", label: "English" },
						{ value: "es", label: "Spanish" },
						{ value: "fr", label: "French" }
					]
				})
			),
			emailNotifications: pipe(
				Schema.Boolean,
				withField({ label: "Email notifications", inputType: "switch", section: "preferences" })
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

	const controller = new FormController(SettingsSchema, {
		initialValues: { emailNotifications: true }
	});
</script>

<!-- sectionVariant="collapsible" makes sections accordion-style -->
<SchemaForm
	{controller}
	onSubmit={(d) => console.log(d)}
	sectionVariant="collapsible"
	submitText="Save Settings"
/>`;

// ── Responsive Column Spans ───────────────────────────────────────────────────
export const responsiveColSpanDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	// Use columns: 12 and combine colSpan (mobile) with colSpanMd / colSpanLg
	// for fields that should reflow at different breakpoints.
	//
	//   colSpan   → applied on all screen sizes (mobile-first default)
	//   colSpanMd → overrides at the md breakpoint (≥768 px)
	//   colSpanLg → overrides at the lg breakpoint (≥1024 px)
	//
	// colSpan: "full" is shorthand for colSpan: 12 (always full width).
	const ProfileSchema = pipe(
		Schema.Struct({
			// Full width on mobile, half on md, one-third on lg
			firstName: pipe(
				Schema.String,
				withField({ label: "First Name", colSpan: "full", colSpanMd: 6, colSpanLg: 4 })
			),
			lastName: pipe(
				Schema.String,
				withField({ label: "Last Name", colSpan: "full", colSpanMd: 6, colSpanLg: 4 })
			),
			// Full width on mobile & md, two-thirds on lg
			email: pipe(
				Schema.String,
				withField({ label: "Email", inputType: "email", colSpan: "full", colSpanMd: "full", colSpanLg: 8 })
			),
			// Full width on mobile, one-third on lg
			phone: pipe(
				Schema.String,
				withField({ label: "Phone", inputType: "tel", mask: "phone", colSpan: "full", colSpanLg: 4 })
			),
			// Always full width regardless of screen size
			bio: pipe(
				Schema.String,
				withField({ label: "Bio", inputType: "textarea", colSpan: "full" })
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [{ id: "main", title: "Edit Profile" }]
		})
	);

	const controller = new FormController(ProfileSchema);
</script>

<SchemaForm {controller} onSubmit={(d) => console.log(d)} submitText="Save Profile" />`;
