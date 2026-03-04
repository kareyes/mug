<script lang="ts">
	import {
		sharedSchemaDocs,
		formActionServerDocs,
		formActionClientDocs,
		apiEndpointServerDocs,
		fetchSubmitDocs,
		serverErrorMappingDocs
	} from "$lib/code-blocks/form-schema-server";
	import { Card, CodeBlock, Badge } from "@kareyes/aether";
	import { SchemaForm, FormController, withField, withFormLayout } from "@kareyes/aether/forms";
	import { Schema, pipe } from "effect";
	import PreviewContainer from "../../components/preview-container.svelte";

	// ── Shared schema ────────────────────────────────────────────────────────────
	// In a real app this lives in $lib/schemas/contact.ts and is imported
	// by both the client component and the +page.server.ts action.
	const ContactSchema = pipe(
		Schema.Struct({
			name: pipe(
				Schema.String,
				Schema.minLength(2),
				Schema.annotations({ message: () => "Name must be at least 2 characters" }),
				withField({ label: "Full Name", placeholder: "Jane Doe" })
			),
			email: pipe(
				Schema.String,
				Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
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
				withField({
					label: "Message",
					inputType: "textarea",
					placeholder: "Describe your issue..."
				})
			)
		}),
		withFormLayout({ columns: 1, sections: [{ id: "main", title: "Contact Us" }] })
	);

	const contactController = new FormController(ContactSchema, { validateOnBlur: true });

	let contactStatus = $state<"idle" | "loading" | "success">("idle");

	// Simulates a server action that rejects one submission with a server error
	let contactAttempts = $state(0);
	async function simulateContactServer(data: Record<string, unknown>) {
		contactAttempts++;
		await new Promise((r) => setTimeout(r, 1000));

		// First attempt: simulate a server-side "email already registered" error
		if (contactAttempts === 1) {
			contactController.setErrors({
				email: "This email is already in our system — please use a different one"
			});
			return;
		}

		contactStatus = "success";
	}

	// ── Fetch-based registration form ────────────────────────────────────────────
	const RegistrationSchema = pipe(
		Schema.Struct({
			username: pipe(
				Schema.String,
				Schema.minLength(3),
				Schema.maxLength(20),
				Schema.pattern(/^[a-zA-Z0-9_]+$/),
				Schema.annotations({ message: () => "3-20 chars, letters/numbers/underscores" }),
				withField({ label: "Username", placeholder: "cooluser42" })
			),
			email: pipe(
				Schema.String,
				Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
				Schema.annotations({ message: () => "Enter a valid email address" }),
				withField({ label: "Email", inputType: "email" })
			),
			password: pipe(
				Schema.String,
				Schema.minLength(8),
				Schema.annotations({ message: () => "Password must be at least 8 characters" }),
				withField({
					label: "Password",
					inputType: "password",
					description: "Min 8 characters"
				})
			)
		}),
		withFormLayout({ columns: 1, sections: [{ id: "main", title: "Create Account" }] })
	);

	const regController = new FormController(RegistrationSchema, { validateOnBlur: true });

	let regStatus = $state<"idle" | "loading" | "conflict" | "success">("idle");
	let regAttempts = $state(0);

	// Simulates POST /api/register — first try returns 409 Conflict on username
	async function simulateRegisterAPI(data: Record<string, unknown>) {
		regAttempts++;
		regStatus = "loading";
		await new Promise((r) => setTimeout(r, 900));

		if (regAttempts === 1) {
			regStatus = "conflict";
			// Simulates the server returning: { errors: { username: "Already taken" } }
			regController.setErrors({
				username: `"${data.username}" is already taken — try another username`
			});
			return;
		}

		regStatus = "success";
	}

	// ── Error mapping demo ───────────────────────────────────────────────────────
	const ProfileSchema = pipe(
		Schema.Struct({
			username: pipe(
				Schema.String,
				Schema.minLength(2),
				withField({ label: "Username", colSpan: 6 })
			),
			email: pipe(
				Schema.String,
				Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
				Schema.annotations({ message: () => "Enter a valid email" }),
				withField({ label: "Email", inputType: "email", colSpan: 6 })
			),
			displayName: pipe(
				Schema.String,
				withField({ label: "Display Name", colSpan: 6 })
			),
			website: pipe(
				Schema.String,
				withField({ label: "Website", inputType: "url", colSpan: 6 })
			)
		}),
		withFormLayout({ columns: 12, sections: [{ id: "main", title: "Update Profile" }] })
	);

	const profileController = new FormController(ProfileSchema, { validateOnBlur: true });

	let profileScenario = $state<"conflict" | "server-error" | "success">("conflict");
	let profileStatus = $state<"idle" | "loading" | "done">("idle");

	// Simulates different server error scenarios based on the selected scenario
	async function simulateProfileUpdate() {
		profileStatus = "loading";
		await new Promise((r) => setTimeout(r, 800));

		if (profileScenario === "conflict") {
			profileController.setErrors({
				username: "Username is already taken by another account",
				email: "This email is already registered"
			});
		} else if (profileScenario === "server-error") {
			profileController.setFieldError(
				"username",
				"Service unavailable — please try again in a moment"
			);
		} else {
			// success — clear any errors
			profileController.setErrors({});
		}

		profileStatus = "done";
		setTimeout(() => (profileStatus = "idle"), 2000);
	}
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<div class="space-y-12">
		<!-- 1. Shared Schema -->
		<Card variant="ghost" class="p-6 bg-background">
			<div class="flex items-start gap-3 mb-2">
				<h2 class="text-2xl font-semibold">Shared Schema (Client + Server)</h2>
				<Badge variant="secondary">Step 1</Badge>
			</div>
			<p class="text-sm text-muted-foreground mb-4">
				Define the schema <em>once</em> in a shared file (e.g.
				<code>$lib/schemas/contact.ts</code>) and import it on both the client component and the
				server action. Effect Schema runs identically in both environments — no duplication, no
				drift between client and server validation rules.
			</p>
			<CodeBlock
				title="$lib/schemas/contact.ts"
				language="TypeScript"
				showLineNumbers
				collapsible
				maxHeight="280px"
				variant="default"
				code={sharedSchemaDocs}
			/>
		</Card>

		<!-- 2. SvelteKit Form Actions -->
		<Card variant="ghost" class="p-6 bg-background">
			<div class="flex items-start gap-3 mb-2">
				<h2 class="text-2xl font-semibold">SvelteKit Form Actions</h2>
				<Badge variant="secondary">Pattern A</Badge>
			</div>
			<p class="text-sm text-muted-foreground mb-4">
				The classic SvelteKit server pattern. The <code>action</code> in
				<code>+page.server.ts</code> receives native <code>FormData</code>, validates it with the
				shared schema using <code>Schema.decodeUnknownEither</code>, and returns
				<code>fail(422, {"{ errors }"} )</code> on failure. The client uses
				<code>use:enhance</code> for progressive enhancement and maps
				<code>form?.errors</code> back to the controller via
				<code>controller.setErrors()</code>.
			</p>

			<!-- Live demo simulates the server error on first submit -->
			<PreviewContainer>
				<div class="max-w-md">
					{#if contactStatus === "success"}
						<div
							class="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800 p-6 text-center"
						>
							<p class="text-green-700 dark:text-green-300 font-medium">
								Message sent successfully!
							</p>
							<button
								class="mt-3 text-sm text-muted-foreground underline"
								onclick={() => {
									contactStatus = "idle";
									contactAttempts = 0;
									contactController.reset();
								}}
							>
								Reset demo
							</button>
						</div>
					{:else}
						<div class="mb-3 rounded-md bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 px-3 py-2 text-xs text-amber-700 dark:text-amber-300">
							<strong>Demo:</strong> First submit returns a simulated server error on the email
							field. Second submit succeeds.
						</div>
						<SchemaForm
							controller={contactController}
							onSubmit={simulateContactServer}
							submitText={contactAttempts === 0 ? "Send Message" : "Try Again"}
						/>
					{/if}
				</div>
			</PreviewContainer>
			<br />
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<CodeBlock
					title="+page.server.ts"
					language="TypeScript"
					showLineNumbers
					collapsible
					maxHeight="280px"
					variant="default"
					code={formActionServerDocs}
				/>
				<CodeBlock
					title="+page.svelte (client)"
					language="Svelte"
					showLineNumbers
					collapsible
					maxHeight="280px"
					variant="default"
					code={formActionClientDocs}
				/>
			</div>
		</Card>

		<!-- 3. API Endpoint + fetch submission -->
		<Card variant="ghost" class="p-6 bg-background">
			<div class="flex items-start gap-3 mb-2">
				<h2 class="text-2xl font-semibold">API Endpoint + fetch Submission</h2>
				<Badge variant="secondary">Pattern B</Badge>
			</div>
			<p class="text-sm text-muted-foreground mb-4">
				For JSON APIs or SPAs, create a <code>+server.ts</code> endpoint that validates the request
				body and returns JSON errors. The client's <code>onSubmit</code> handler calls
				<code>fetch</code>, checks the response, and maps errors onto the form using
				<code>controller.setErrors(result.errors)</code>. No page reload required.
			</p>

			<!-- Live demo: first submit triggers 409 conflict on username -->
			<PreviewContainer>
				<div class="max-w-md">
					{#if regStatus === "success"}
						<div
							class="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800 p-6 text-center"
						>
							<p class="text-green-700 dark:text-green-300 font-medium">Account created!</p>
							<button
								class="mt-3 text-sm text-muted-foreground underline"
								onclick={() => {
									regStatus = "idle";
									regAttempts = 0;
									regController.reset();
								}}
							>
								Reset demo
							</button>
						</div>
					{:else}
						<div class="mb-3 rounded-md bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 px-3 py-2 text-xs text-amber-700 dark:text-amber-300">
							<strong>Demo:</strong> First submit returns a simulated
							<code>409 Conflict</code> on the username field. Second submit succeeds.
						</div>
						<SchemaForm
							controller={regController}
							onSubmit={simulateRegisterAPI}
							submitText={regStatus === "loading" ? "Creating account..." : "Create Account"}
						/>
					{/if}
				</div>
			</PreviewContainer>
			<br />
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<CodeBlock
					title="+server.ts (API endpoint)"
					language="TypeScript"
					showLineNumbers
					collapsible
					maxHeight="280px"
					variant="default"
					code={apiEndpointServerDocs}
				/>
				<CodeBlock
					title="+page.svelte (fetch client)"
					language="Svelte"
					showLineNumbers
					collapsible
					maxHeight="280px"
					variant="default"
					code={fetchSubmitDocs}
				/>
			</div>
		</Card>

		<!-- 4. Server Error Mapping -->
		<Card variant="ghost" class="p-6 bg-background">
			<div class="flex items-start gap-3 mb-2">
				<h2 class="text-2xl font-semibold">Server Error Mapping</h2>
				<Badge variant="secondary">controller.setErrors</Badge>
			</div>
			<p class="text-sm text-muted-foreground mb-4">
				<code>controller.setErrors({"{ field: 'message' }"})</code> accepts any
				<code>{"{field: message}"}</code> object and places each error inline below its field —
				exactly like client-side validation. <code>controller.setFieldError("field", "msg")</code>
				sets a single field. Use this to surface uniqueness conflicts, rate-limit errors, or any
				business-logic failure from the server.
			</p>

			<!-- Scenario switcher -->
			<div class="flex gap-2 mb-4 flex-wrap">
				<span class="text-sm text-muted-foreground self-center">Simulate server response:</span>
				{#each [
					{ value: "conflict", label: "409 Conflict" },
					{ value: "server-error", label: "503 Server Error" },
					{ value: "success", label: "200 Success" }
				] as scenario}
					<button
						class="px-3 py-1 rounded-full border text-xs font-medium transition-colors {profileScenario === scenario.value
							? 'bg-primary text-primary-foreground border-primary'
							: 'border-border hover:bg-muted'}"
						onclick={() => (profileScenario = scenario.value as typeof profileScenario)}
					>
						{scenario.label}
					</button>
				{/each}
			</div>

			<PreviewContainer>
				<div class="max-w-lg">
					<SchemaForm
						controller={profileController}
						onSubmit={simulateProfileUpdate}
						submitText={profileStatus === "loading" ? "Saving..." : "Save Profile"}
					/>
				</div>
			</PreviewContainer>
			<br />
			<CodeBlock
				title="Server error mapping patterns"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="280px"
				variant="default"
				code={serverErrorMappingDocs}
			/>
		</Card>
	</div>
</div>
