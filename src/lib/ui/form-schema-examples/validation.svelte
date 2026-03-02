<script lang="ts">
	import {
		patternMatchingDocs,
		passwordStrengthDocs,
		requiredCheckboxDocs,
		lengthConstraintsDocs,
		chainedConstraintsDocs
	} from "$lib/code-blocks/form-schema-validation";
	import { Card, CodeBlock } from "@kareyes/aether";
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

	// --- 1. Pattern Matching & Custom Messages ---
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
				Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
				Schema.annotations({ message: () => "Please enter a valid email address" }),
				withField({ label: "Email", inputType: "email", placeholder: "you@example.com", colSpan: 6 })
			),
			zipCode: pipe(
				Schema.String,
				Schema.pattern(/^\d{5}(-\d{4})?$/),
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
				withField({
					label: "URL Slug",
					placeholder: "my-article-title",
					description: "Lowercase, hyphens only",
					colSpan: 6
				})
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [{ id: "main", title: "Pattern Validation" }]
		})
	);

	const patternController = new FormController(PatternSchema, { validateOnBlur: true });

	// --- 2. Password Strength Validation ---
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
				Schema.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/),
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

	const passwordController = new FormController(PasswordSchema, {
		validateOnBlur: true,
		validateOnChange: false
	});

	// --- 3. Required vs Optional Checkboxes ---
	const CheckboxSchema = pipe(
		Schema.Struct({
			acceptTerms: pipe(
				RequiredCheckbox,
				withField({ label: "I accept the Terms of Service", inputType: "checkbox" })
			),
			acceptPrivacy: pipe(
				requiredCheckbox("You must accept the Privacy Policy to continue"),
				withField({ label: "I accept the Privacy Policy", inputType: "checkbox" })
			),
			ageConfirmation: pipe(
				requiredCheckbox("You must confirm you are 18 years or older"),
				withField({ label: "I confirm I am 18 years or older", inputType: "checkbox" })
			),
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

	const checkboxController = new FormController(CheckboxSchema, {
		validateOnBlur: true,
		initialValues: { marketingOptIn: false }
	});

	// --- 4. String Length Constraints ---
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
					placeholder: "A short summary of your post for search engines...",
					description: "20 to 160 characters — ideal for SEO meta descriptions"
				})
			),
			tag: pipe(
				Schema.String,
				Schema.minLength(2),
				Schema.maxLength(30),
				Schema.annotations({ message: () => "Tag must be 2-30 characters" }),
				withField({
					label: "Tag",
					placeholder: "svelte",
					description: "Optional label, max 30 characters"
				})
			)
		}),
		withFormLayout({
			columns: 1,
			sections: [{ id: "main", title: "String Length Constraints" }]
		})
	);

	const lengthController = new FormController(LengthSchema, { validateOnBlur: true });

	// --- 5. Multi-Field Validation (chained constraints) ---
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
				withField({
					label: "Username",
					placeholder: "cooluser42",
					description: "Must start with a letter",
					colSpan: 6
				})
			),
			handle: pipe(
				Schema.String,
				Schema.minLength(1),
				Schema.maxLength(15),
				Schema.pattern(/^[a-zA-Z0-9_]+$/),
				Schema.annotations({
					message: () => "Handle: 1-15 chars, letters/numbers/underscores only"
				}),
				withField({ label: "Twitter Handle", placeholder: "johndoe", colSpan: 6 })
			),
			website: pipe(
				Schema.String,
				Schema.pattern(/^https?:\/\/.+\..+/),
				Schema.annotations({ message: () => "Enter a valid URL starting with http:// or https://" }),
				withField({
					label: "Website",
					inputType: "url",
					placeholder: "https://mysite.com",
					description: "Must start with http:// or https://"
				})
			),
			inviteCode: pipe(
				Schema.String,
				Schema.minLength(8),
				Schema.maxLength(8),
				Schema.pattern(/^[A-Z0-9]{8}$/),
				Schema.annotations({ message: () => "Invite code must be exactly 8 uppercase alphanumeric characters" }),
				withField({
					label: "Invite Code",
					placeholder: "ABCD1234",
					description: "8-character uppercase code"
				})
			)
		}),
		withFormLayout({
			columns: 12,
			sections: [{ id: "main", title: "Chained Constraints" }]
		})
	);

	const signupController = new FormController(SignupSchema, { validateOnBlur: true });
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<div class="space-y-12">
		<!-- Pattern Matching -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">Pattern Matching & Custom Messages</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Use <code>Schema.pattern(regex)</code> for format validation. Chain with
				<code>Schema.annotations({`{ message: () => '...' }`})</code> to replace the default
				technical error with a user-friendly message.
			</p>
			<PreviewContainer>
				<div class="max-w-lg">
					<SchemaForm
						controller={patternController}
						onSubmit={(data) => console.log("Pattern validated:", data)}
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
				code={patternMatchingDocs}
			/>
		</Card>

		<!-- Password Strength -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">Password Strength Validation</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Chain <code>minLength</code>, <code>maxLength</code>, and <code>pattern</code> to enforce
				complex password policies. Use a single <code>annotations.message</code> to give one clear,
				holistic error rather than multiple messages.
			</p>
			<PreviewContainer>
				<div class="max-w-md">
					<SchemaForm
						controller={passwordController}
						onSubmit={(data) => console.log("Password updated:", data)}
						submitText="Update Password"
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
				code={passwordStrengthDocs}
			/>
		</Card>

		<!-- Required Checkboxes -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">Required vs Optional Checkboxes</h2>
			<p class="text-sm text-muted-foreground mb-4">
				<code>RequiredCheckbox</code> enforces the checked state with a default message.
				<code>requiredCheckbox("Custom message")</code> uses your own error text. Regular
				<code>Schema.Boolean</code> checkboxes are optional and never block submission.
			</p>
			<PreviewContainer>
				<div class="max-w-md">
					<SchemaForm
						controller={checkboxController}
						onSubmit={(data) => console.log("Agreed:", data)}
						submitText="Create Account"
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
				code={requiredCheckboxDocs}
			/>
		</Card>

		<!-- String Length -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">String Length Constraints</h2>
			<p class="text-sm text-muted-foreground mb-4">
				<code>Schema.minLength(n)</code> and <code>Schema.maxLength(n)</code> set character bounds
				at the schema level. Use the <code>description</code> field in <code>withField()</code> to
				communicate these bounds inline below the input.
			</p>
			<PreviewContainer>
				<div class="max-w-lg">
					<SchemaForm
						controller={lengthController}
						onSubmit={(data) => console.log("Published:", data)}
						submitText="Publish Post"
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
				code={lengthConstraintsDocs}
			/>
		</Card>

		<!-- Chained Constraints -->
		<Card variant="ghost" class="p-6 bg-background">
			<h2 class="text-2xl font-semibold mb-2">Chained Validation Constraints</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Multiple validators pipe together for each field. All rules must pass before the field is
				considered valid. A single <code>Schema.annotations</code> at the end of the chain sets one
				unified error message covering all the rules.
			</p>
			<PreviewContainer>
				<div class="max-w-lg">
					<SchemaForm
						controller={signupController}
						onSubmit={(data) => console.log("Signed up:", data)}
						submitText="Create Account"
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
				code={chainedConstraintsDocs}
			/>
		</Card>
	</div>
</div>
