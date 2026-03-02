export const basicFilterDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	// Schema.filter(predicate, { message: () => "..." }) adds custom validation logic
	// beyond built-in string/number constraints.
	// Return true (or let it evaluate truthy) = valid.
	// Return false (or falsy) = invalid — triggers the message.
	const FilterSchema = pipe(
		Schema.Struct({
			quantity: pipe(
				Schema.Number,
				Schema.filter((n) => n > 0 && n % 2 === 0, {
					message: () => "Quantity must be a positive even number"
				}),
				withField({ label: "Quantity (even only)", inputType: "number", colSpan: 6 })
			),
			units: pipe(
				Schema.Number,
				Schema.filter((n) => Number.isInteger(n) && n >= 1 && n <= 100, {
					message: () => "Units must be a whole number between 1 and 100"
				}),
				withField({ label: "Units (1–100)", inputType: "number", colSpan: 6 })
			),
			batchCode: pipe(
				Schema.String,
				Schema.filter((s) => s.toUpperCase().startsWith("BATCH-"), {
					message: () => 'Batch code must start with "BATCH-"'
				}),
				withField({ label: "Batch Code", placeholder: "BATCH-001" })
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [{ id: "main", title: "Custom Filter Predicates" }]
		})
	);

	const controller = new FormController(FilterSchema, { validateOnBlur: true });
</script>

<SchemaForm {controller} onSubmit={(d) => console.log(d)} submitText="Submit Order" />`;

export const multiRuleFilterDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	// Chain multiple Schema.filter calls in a pipe.
	// Each rule has its own specific error message.
	// Validation runs top-to-bottom and stops at the first failure —
	// giving the user one targeted, actionable error at a time.
	const PasswordRulesSchema = pipe(
		Schema.Struct({
			password: pipe(
				Schema.String,
				Schema.filter((s) => s.length >= 8, {
					message: () => "At least 8 characters required"
				}),
				Schema.filter((s) => /[A-Z]/.test(s), {
					message: () => "Must contain at least one uppercase letter"
				}),
				Schema.filter((s) => /[a-z]/.test(s), {
					message: () => "Must contain at least one lowercase letter"
				}),
				Schema.filter((s) => /\\d/.test(s), {
					message: () => "Must contain at least one number"
				}),
				Schema.filter((s) => /[!@#$%^&*]/.test(s), {
					message: () => "Must contain at least one special character (!@#$%^&*)"
				}),
				withField({
					label: "Password",
					inputType: "password",
					description: "Rules checked top-to-bottom — one error shown at a time"
				})
			),
			pin: pipe(
				Schema.String,
				Schema.filter((s) => /^\\d{4,6}$/.test(s), {
					message: () => "PIN must be 4-6 digits"
				}),
				Schema.filter((s) => !/^(\\d)\\1+$/.test(s), {
					message: () => "PIN cannot be all the same digit"
				}),
				Schema.filter((s) => !["1234", "0000", "1111", "123456"].includes(s), {
					message: () => "PIN is too common, please choose a different one"
				}),
				withField({
					label: "PIN",
					inputType: "password",
					description: "4-6 digits, not all identical, not a common sequence"
				})
			)
		}),
		withFormLayout({
			columns: 1,
			sections: [{ id: "main", title: "Multi-Rule Piped Filters" }]
		})
	);

	const controller = new FormController(PasswordRulesSchema, { validateOnBlur: true });
</script>

<SchemaForm {controller} onSubmit={(d) => console.log(d)} submitText="Set Credentials" />`;

export const formatValidationDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	// Schema.filter is ideal for structured format validation.
	// Internal normalization (stripping spaces, handling optional prefixes)
	// allows flexible user input while still enforcing correctness.
	const FormatSchema = pipe(
		Schema.Struct({
			hex: pipe(
				Schema.String,
				Schema.filter((s) => /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(s), {
					message: () => "Enter a valid hex color (e.g., #FF5733 or #F53)"
				}),
				withField({ label: "Hex Color", placeholder: "#FF5733" })
			),
			ipAddress: pipe(
				Schema.String,
				Schema.filter(
					(s) =>
						/^(\\d{1,3}\\.){3}\\d{1,3}$/.test(s) &&
						s.split(".").every((n) => parseInt(n) <= 255),
					{ message: () => "Enter a valid IPv4 address (e.g., 192.168.1.1)" }
				),
				withField({ label: "IP Address", placeholder: "192.168.1.1" })
			),
			semver: pipe(
				Schema.String,
				Schema.filter(
					(s) => /^\\d+\\.\\d+\\.\\d+(-[a-zA-Z0-9.]+)?(\\+[a-zA-Z0-9.]+)?$/.test(s),
					{ message: () => "Enter a valid semver (e.g., 1.2.3 or 2.0.0-beta.1)" }
				),
				withField({ label: "Version (semver)", placeholder: "1.0.0" })
			),
			twitterHandle: pipe(
				Schema.String,
				Schema.filter(
					(s) => {
						const handle = s.startsWith("@") ? s.slice(1) : s;
						return (
							handle.length > 0 &&
							handle.length <= 15 &&
							/^[a-zA-Z0-9_]+$/.test(handle)
						);
					},
					{ message: () => "Handle: max 15 chars, letters/numbers/underscores (@ optional)" }
				),
				withField({ label: "Twitter Handle", placeholder: "@johndoe" })
			)
		}),
		withFormLayout({
			columns: 1,
			sections: [{ id: "main", title: "Format Validation" }]
		})
	);

	const controller = new FormController(FormatSchema, { validateOnBlur: true });
</script>

<SchemaForm {controller} onSubmit={(d) => console.log(d)} submitText="Validate" />`;

export const domainSpecificDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	// Embed real business logic directly in the schema.
	// The schema becomes the single source of truth for data correctness.
	const DomainSchema = pipe(
		Schema.Struct({
			creditCard: pipe(
				Schema.String,
				Schema.filter(
					(s) => {
						const digits = s.replace(/[\\s-]/g, "");
						if (!/^\\d{13,19}$/.test(digits)) return false;
						// Luhn algorithm check
						let sum = 0;
						let alt = false;
						for (let i = digits.length - 1; i >= 0; i--) {
							let n = parseInt(digits[i]);
							if (alt) { n *= 2; if (n > 9) n -= 9; }
							sum += n;
							alt = !alt;
						}
						return sum % 10 === 0;
					},
					{ message: () => "Invalid card number — please double-check your card" }
				),
				withField({
					label: "Credit Card Number",
					placeholder: "4111 1111 1111 1111",
					description: "Luhn algorithm validated (try: 4111 1111 1111 1111)"
				})
			),
			postalCode: pipe(
				Schema.String,
				Schema.filter(
					(s) =>
						/^\\d{5}(-\\d{4})?$/.test(s) ||
						/^[A-Z]\\d[A-Z] \\d[A-Z]\\d$/.test(s.toUpperCase()),
					{ message: () => "Enter a US (12345) or Canadian (A1A 1A1) postal code" }
				),
				withField({ label: "Postal Code", placeholder: "12345 or A1A 1A1" })
			)
		}),
		withFormLayout({
			columns: 1,
			sections: [{ id: "main", title: "Domain-Specific Refinements" }]
		})
	);

	const controller = new FormController(DomainSchema, { validateOnBlur: true });
</script>

<SchemaForm {controller} onSubmit={(d) => console.log(d)} submitText="Validate Fields" />`;

export const optionalFieldsDocs = `
<script lang="ts">
	import { Schema, pipe } from "effect";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";

	// Fields with no validation constraints are effectively optional —
	// they accept any value and never block form submission.
	// Only add Schema constraints when the data truly requires them.
	const ProfileSchema = pipe(
		Schema.Struct({
			// Required: minLength(1) ensures the field is non-empty
			requiredName: pipe(
				Schema.String,
				Schema.minLength(1),
				Schema.annotations({ message: () => "Name is required" }),
				withField({ label: "Full Name (required)", colSpan: 6 })
			),
			// Optional: plain Schema.String — any value (including empty) is valid
			nickname: pipe(
				Schema.String,
				withField({ label: "Nickname (optional)", placeholder: "How friends call you", colSpan: 6 })
			),
			// Optional URL — no constraints enforced
			website: pipe(
				Schema.String,
				withField({ label: "Website (optional)", inputType: "url" })
			),
			// Schema.Boolean defaults to false — always optional
			newsletter: pipe(
				Schema.Boolean,
				withField({ label: "Subscribe to newsletter", inputType: "switch" })
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [{ id: "main", title: "Required vs Optional Fields" }]
		})
	);

	const controller = new FormController(ProfileSchema, {
		initialValues: { newsletter: false }
	});
</script>

<SchemaForm {controller} onSubmit={(d) => console.log(d)} submitText="Save Profile" />`;
