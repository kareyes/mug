<script lang="ts">
	import {
		basicFilterDocs,
		multiRuleFilterDocs,
		formatValidationDocs,
		domainSpecificDocs,
		optionalFieldsDocs
	} from "$lib/code-blocks/form-schema-refinements";
	import { Card, CodeBlock } from "@kareyes/aether";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";
	import { Schema, pipe } from "effect";
	import PreviewContainer from "../../components/preview-container.svelte";

	// --- 1. Schema.filter — Single Predicate ---
	const BasicFilterSchema = pipe(
		Schema.Struct({
			quantity: pipe(
				Schema.Number,
				Schema.filter((n) => n > 0 && n % 2 === 0, {
					message: () => "Quantity must be a positive even number"
				}),
				withField({
					label: "Quantity (even only)",
					inputType: "number",
					description: "Must be a positive even number",
					colSpan: 6
				})
			),
			units: pipe(
				Schema.Number,
				Schema.filter((n) => Number.isInteger(n) && n >= 1 && n <= 100, {
					message: () => "Units must be a whole number between 1 and 100"
				}),
				withField({
					label: "Units (1–100)",
					inputType: "number",
					description: "Integer between 1 and 100",
					colSpan: 6
				})
			),
			batchCode: pipe(
				Schema.String,
				Schema.filter((s) => s.toUpperCase().startsWith("BATCH-"), {
					message: () => 'Batch code must start with "BATCH-"'
				}),
				withField({
					label: "Batch Code",
					placeholder: "BATCH-001",
					description: 'Must begin with "BATCH-"'
				})
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [{ id: "main", title: "Basic Filter Predicates" }]
		})
	);

	const basicFilterController = new FormController(BasicFilterSchema, { validateOnBlur: true });

	// --- 2. Multi-Rule Filters (multiple piped filters, each with own message) ---
	const PasswordRulesSchema = pipe(
		Schema.Struct({
			password: pipe(
				Schema.String,
				Schema.filter((s) => s.length >= 8, { message: () => "At least 8 characters required" }),
				Schema.filter((s) => /[A-Z]/.test(s), {
					message: () => "Must contain at least one uppercase letter"
				}),
				Schema.filter((s) => /[a-z]/.test(s), {
					message: () => "Must contain at least one lowercase letter"
				}),
				Schema.filter((s) => /\d/.test(s), {
					message: () => "Must contain at least one number"
				}),
				Schema.filter((s) => /[!@#$%^&*]/.test(s), {
					message: () => "Must contain at least one special character (!@#$%^&*)"
				}),
				withField({
					label: "Password",
					inputType: "password",
					description: "Rules are checked top-to-bottom, one error shown at a time"
				})
			),
			pin: pipe(
				Schema.String,
				Schema.filter((s) => /^\d{4,6}$/.test(s), {
					message: () => "PIN must be 4-6 digits"
				}),
				Schema.filter((s) => !/^(\d)\1+$/.test(s), {
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

	const passwordRulesController = new FormController(PasswordRulesSchema, {
		validateOnBlur: true
	});

	// --- 3. Format Validation with filter ---
	const FormatSchema = pipe(
		Schema.Struct({
			hex: pipe(
				Schema.String,
				Schema.filter((s) => /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(s), {
					message: () => "Enter a valid hex color (e.g., #FF5733 or #F53)"
				}),
				withField({
					label: "Hex Color",
					placeholder: "#FF5733",
					description: "3 or 6 digit hex color code"
				})
			),
			ipAddress: pipe(
				Schema.String,
				Schema.filter(
					(s) =>
						/^(\d{1,3}\.){3}\d{1,3}$/.test(s) &&
						s.split(".").every((n) => parseInt(n) <= 255),
					{ message: () => "Enter a valid IPv4 address (e.g., 192.168.1.1)" }
				),
				withField({
					label: "IP Address",
					placeholder: "192.168.1.1",
					description: "Valid IPv4 address"
				})
			),
			semver: pipe(
				Schema.String,
				Schema.filter(
					(s) => /^\d+\.\d+\.\d+(-[a-zA-Z0-9.]+)?(\+[a-zA-Z0-9.]+)?$/.test(s),
					{ message: () => "Enter a valid semver version (e.g., 1.2.3 or 2.0.0-beta.1)" }
				),
				withField({
					label: "Version (semver)",
					placeholder: "1.0.0",
					description: "Semantic versioning format"
				})
			),
			twitterHandle: pipe(
				Schema.String,
				Schema.filter(
					(s) => {
						const handle = s.startsWith("@") ? s.slice(1) : s;
						return handle.length > 0 && handle.length <= 15 && /^[a-zA-Z0-9_]+$/.test(handle);
					},
					{ message: () => "Handle: max 15 chars, letters/numbers/underscores (@ prefix optional)" }
				),
				withField({
					label: "Twitter Handle",
					placeholder: "@johndoe",
					description: "With or without the @ prefix"
				})
			)
		}),
		withFormLayout({
			columns: 1,
			sections: [{ id: "main", title: "Format Validation via Schema.filter" }]
		})
	);

	const formatController = new FormController(FormatSchema, { validateOnBlur: true });

	// --- 4. Domain-Specific Refinements ---
	const DomainSchema = pipe(
		Schema.Struct({
			creditCard: pipe(
				Schema.String,
				Schema.filter(
					(s) => {
						const digits = s.replace(/[\s-]/g, "");
						if (!/^\d{13,19}$/.test(digits)) return false;
						// Luhn algorithm check
						let sum = 0;
						let alt = false;
						for (let i = digits.length - 1; i >= 0; i--) {
							let n = parseInt(digits[i]);
							if (alt) {
								n *= 2;
								if (n > 9) n -= 9;
							}
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
			ean13: pipe(
				Schema.String,
				Schema.filter(
					(s) => {
						const digits = s.replace(/\s/g, "");
						if (!/^\d{13}$/.test(digits)) return false;
						const sum = digits
							.split("")
							.reduce((acc, d, i) => acc + parseInt(d) * (i % 2 === 0 ? 1 : 3), 0);
						return sum % 10 === 0;
					},
					{ message: () => "Enter a valid EAN-13 barcode (13 digits with valid check digit)" }
				),
				withField({
					label: "EAN-13 Barcode",
					placeholder: "5901234123457",
					description: "13-digit barcode with checksum validation"
				})
			),
			postalCode: pipe(
				Schema.String,
				Schema.filter(
					(s) =>
						/^\d{5}(-\d{4})?$/.test(s) || /^[A-Z]\d[A-Z] \d[A-Z]\d$/.test(s.toUpperCase()),
					{ message: () => "Enter a US (12345) or Canadian (A1A 1A1) postal code" }
				),
				withField({
					label: "Postal Code",
					placeholder: "12345 or A1A 1A1",
					description: "US or Canadian format"
				})
			)
		}),
		withFormLayout({
			columns: 1,
			sections: [{ id: "main", title: "Domain-Specific Refinements" }]
		})
	);

	const domainController = new FormController(DomainSchema, { validateOnBlur: true });

	// --- 5. Optional Fields with Schema.optional ---
	const OptionalSchema = pipe(
		Schema.Struct({
			requiredName: pipe(
				Schema.String,
				Schema.minLength(1),
				Schema.annotations({ message: () => "Name is required" }),
				withField({ label: "Full Name (required)", colSpan: 6 })
			),
			nickname: pipe(
				Schema.String,
				withField({
					label: "Nickname (optional)",
					placeholder: "How friends call you",
					colSpan: 6
				})
			),
			website: pipe(
				Schema.String,
				withField({
					label: "Website (optional)",
					inputType: "url",
					placeholder: "https://yoursite.com"
				})
			),
			newsletter: pipe(
				Schema.Boolean,
				withField({
					label: "Subscribe to newsletter",
					inputType: "switch"
				})
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [{ id: "main", title: "Required vs Optional Fields" }]
		})
	);

	const optionalController = new FormController(OptionalSchema, {
		initialValues: { newsletter: false }
	});
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<div class="space-y-12">
		<!-- Basic Filter -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">Schema.filter — Custom Predicates</h2>
			<p class="text-sm text-muted-foreground mb-4">
				<code>Schema.filter(predicate, {"{ message: () => '...' }"})</code> adds arbitrary
				validation logic beyond built-in string/number constraints. Return <code>true</code> for
				valid or let it evaluate to <code>false</code> to trigger the message.
			</p>
			<PreviewContainer>
				<div class="max-w-lg">
					<SchemaForm
						controller={basicFilterController}
						onSubmit={(d) => console.log("Order:", d)}
						submitText="Submit Order"
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
				code={basicFilterDocs}
			/>
		</Card>

		<!-- Multi-Rule Filters -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">Multi-Rule Piped Filters</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Chain multiple <code>Schema.filter</code> calls in a pipe — each rule gets its own error
				message. Validation runs top-to-bottom and stops at the first failure, giving the user
				targeted, actionable feedback.
			</p>
			<PreviewContainer>
				<div class="max-w-md">
					<SchemaForm
						controller={passwordRulesController}
						onSubmit={(d) => console.log("Password set:", d)}
						submitText="Set Credentials"
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
				code={multiRuleFilterDocs}
			/>
		</Card>

		<!-- Format Validation -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">Format & Structure Validation</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Use <code>Schema.filter</code> to validate complex structural formats like hex colors, IP
				addresses, semantic versions, and social handles. Internal normalization (trimming spaces,
				handling @ prefixes) improves UX without sacrificing correctness.
			</p>
			<PreviewContainer>
				<div class="max-w-lg">
					<SchemaForm
						controller={formatController}
						onSubmit={(d) => console.log("Formats:", d)}
						submitText="Validate"
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
				code={formatValidationDocs}
			/>
		</Card>

		<!-- Domain-Specific -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">Domain-Specific Refinements</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Embed real business logic — like the Luhn algorithm for credit cards, EAN-13 checksum for
				barcodes, or multi-format postal codes — directly in the schema. The schema becomes the
				single source of truth for all data correctness rules.
			</p>
			<PreviewContainer>
				<div class="max-w-lg">
					<SchemaForm
						controller={domainController}
						onSubmit={(d) => console.log("Domain data:", d)}
						submitText="Validate Fields"
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
				code={domainSpecificDocs}
			/>
		</Card>

		<!-- Optional Fields -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">Required vs Optional Fields</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Fields with no validation constraints (plain <code>Schema.String</code> or
				<code>Schema.Boolean</code>) are effectively optional — they accept any value and never
				block form submission. Only add constraints when the data truly requires them.
			</p>
			<PreviewContainer>
				<div class="max-w-lg">
					<SchemaForm
						controller={optionalController}
						onSubmit={(d) => console.log("Profile:", d)}
						submitText="Save Profile"
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
				code={optionalFieldsDocs}
			/>
		</Card>
	</div>
</div>
