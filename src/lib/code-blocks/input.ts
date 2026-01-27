export const basicInputDocs = `
<script lang="ts">
	import { Input, Label } from "@kareyes/aether";
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
	<div class="space-y-2">
		<Label for="basic-text">Text Input</Label>
		<Input id="basic-text" placeholder="Enter text..." />
	</div>
	<div class="space-y-2">
		<Label for="basic-email">Email Input</Label>
		<Input id="basic-email" type="email" placeholder="Enter email..." />
	</div>
	<div class="space-y-2">
		<Label for="basic-password">Password Input</Label>
		<Input id="basic-password" type="password" placeholder="Enter password..." />
	</div>
	<div class="space-y-2">
		<Label for="basic-number">Number Input</Label>
		<Input id="basic-number" type="number" placeholder="Enter number..." />
	</div>
</div>`;

export const iconAddonsDocs = `
<script lang="ts">
	import { Input, Label, InputGroupPrimitives } from "@kareyes/aether";
	import { Search, Mail, DollarSign, Lock, Eye, EyeOff } from "@kareyes/aether/icons";

	const { InputGroupButton } = InputGroupPrimitives;

	let searchValue = $state("");
	let emailValue = $state("");
	let priceValue = $state("");
	let passwordValue = $state("");
	let showPassword = $state(false);
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
	<!-- Start Icon -->
	<Input bind:value={searchValue} placeholder="Search...">
		{#snippet startIcon()}<Search class="size-4" />{/snippet}
	</Input>

	<!-- End Icon -->
	<Input bind:value={emailValue} type="email" placeholder="Enter your email">
		{#snippet endIcon()}<Mail class="size-4" />{/snippet}
	</Input>

	<!-- Both Icons -->
	<Input bind:value={priceValue} type="number" placeholder="0.00">
		{#snippet startIcon()}<DollarSign class="size-4" />{/snippet}
		{#snippet endIcon()}<span class="text-xs text-muted-foreground">USD</span>{/snippet}
	</Input>

	<!-- Password with Toggle -->
	<Input bind:value={passwordValue} type={showPassword ? "text" : "password"} placeholder="Enter password">
		{#snippet startIcon()}<Lock class="size-4" />{/snippet}
		{#snippet endButton()}
			<InputGroupButton size="icon-xs" variant="ghost" onclick={() => (showPassword = !showPassword)}>
				{#if showPassword}<EyeOff class="size-4" />{:else}<Eye class="size-4" />{/if}
			</InputGroupButton>
		{/snippet}
	</Input>
</div>`;

export const textAddonsDocs = `
<script lang="ts">
	import { Input, Label } from "@kareyes/aether";
	import { User } from "@kareyes/aether/icons";

	let usernameValue = $state("");
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
	<!-- URL Prefix -->
	<Input placeholder="example.com" startText="https://" endText=".com" />

	<!-- Currency -->
	<Input type="number" placeholder="0.00" startText="$" endText="USD" />

	<!-- Email Domain -->
	<Input bind:value={usernameValue} placeholder="username" endText="@company.com">
		{#snippet startIcon()}<User class="size-4" />{/snippet}
	</Input>

	<!-- Unit Suffix -->
	<Input type="number" placeholder="0" endText="kg" />
</div>`;

export const buttonAddonsDocs = `
<script lang="ts">
	import { Input, Label, InputGroupPrimitives } from "@kareyes/aether";
	import { Search, Copy, Check, Send } from "@kareyes/aether/icons";

	const { InputGroupButton } = InputGroupPrimitives;

	let urlValue = $state("https://example.com");
	let copiedUrl = $state(false);
	let messageValue = $state("");
	let searchValue = $state("");

	function handleCopy() {
		navigator.clipboard.writeText(urlValue);
		copiedUrl = true;
		setTimeout(() => (copiedUrl = false), 2000);
	}
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
	<!-- Copy Button -->
	<Input bind:value={urlValue} readonly>
		{#snippet endButton()}
			<InputGroupButton size="icon-xs" onclick={handleCopy}>
				{#if copiedUrl}<Check class="size-4 text-green-500" />{:else}<Copy class="size-4" />{/if}
			</InputGroupButton>
		{/snippet}
	</Input>

	<!-- Search Button -->
	<Input placeholder="Type to search...">
		{#snippet startIcon()}<Search class="size-4" />{/snippet}
		{#snippet endButton()}
			<InputGroupButton size="xs" variant="default">Search</InputGroupButton>
		{/snippet}
	</Input>

	<!-- Send Message -->
	<Input bind:value={messageValue} placeholder="Type your message...">
		{#snippet endButton()}
			<InputGroupButton size="icon-xs" variant="default" disabled={!messageValue}>
				<Send class="size-4" />
			</InputGroupButton>
		{/snippet}
	</Input>

	<!-- Clear Button -->
	<Input bind:value={searchValue} placeholder="Type something...">
		{#if searchValue}
			{#snippet endButton()}
				<InputGroupButton size="icon-xs" variant="ghost" onclick={() => (searchValue = "")}>
					<span class="text-lg">x</span>
				</InputGroupButton>
			{/snippet}
		{/if}
	</Input>
</div>`;

export const inputMasksDocs = `
<script lang="ts">
	import { Input, Label } from "@kareyes/aether";
	import { Phone, CreditCard } from "@kareyes/aether/icons";
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
	<!-- Phone -->
	<Input mask="phone" placeholder="(555) 555-5555">
		{#snippet startIcon()}<Phone class="size-4" />{/snippet}
	</Input>

	<!-- Credit Card -->
	<Input mask="creditCard" placeholder="1234 5678 9012 3456">
		{#snippet startIcon()}<CreditCard class="size-4" />{/snippet}
	</Input>

	<!-- SSN -->
	<Input mask="ssn" placeholder="123-45-6789" />

	<!-- Date -->
	<Input mask="date" placeholder="MM/DD/YYYY" />
</div>`;

export const combinedFeaturesDocs = `
<script lang="ts">
	import { Input, Label, InputGroupPrimitives } from "@kareyes/aether";
	import { Phone, Lock, Copy } from "@kareyes/aether/icons";

	const { InputGroupButton } = InputGroupPrimitives;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
	<!-- Phone with Icon and Mask -->
	<Input mask="phone" placeholder="(555) 555-5555">
		{#snippet startIcon()}<Phone class="size-4" />{/snippet}
		{#snippet endButton()}
			<InputGroupButton size="icon-xs" variant="ghost">
				<Copy class="size-4" />
			</InputGroupButton>
		{/snippet}
	</Input>

	<!-- Price with Icons and Text -->
	<Input type="number" placeholder="0.00" startText="$">
		{#snippet endIcon()}<Lock class="size-4 text-green-600" />{/snippet}
		{#snippet endText()}<span class="text-xs text-muted-foreground">Secure</span>{/snippet}
	</Input>
</div>`;

export const inputStatesDocs = `
<script lang="ts">
	import { Input, Label } from "@kareyes/aether";
	import { Mail, Lock, Eye } from "@kareyes/aether/icons";
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
	<!-- Error State -->
	<Input value="invalid@" error={true} placeholder="Enter email">
		{#snippet startIcon()}<Mail class="size-4" />{/snippet}
	</Input>

	<!-- Disabled State -->
	<Input value="Disabled input" disabled>
		{#snippet startIcon()}<Lock class="size-4" />{/snippet}
	</Input>

	<!-- Readonly State -->
	<Input value="Read-only value" readonly>
		{#snippet endIcon()}<Eye class="size-4" />{/snippet}
	</Input>
</div>`;

export const customAddonsDocs = `
<script lang="ts">
	import { Input, InputGroupPrimitives } from "@kareyes/aether";
	import { Send } from "@kareyes/aether/icons";

	const { InputGroupButton } = InputGroupPrimitives;
</script>

<div class="grid grid-cols-1 gap-6 max-w-2xl">
	<!-- Custom Start Addon -->
	<Input placeholder="Enter value">
		{#snippet startAddon()}
			<div class="flex items-center gap-2">
				<div class="size-2 rounded-full bg-green-500 animate-pulse"></div>
				<span class="text-xs font-medium">Live</span>
			</div>
		{/snippet}
	</Input>

	<!-- Custom End Addon -->
	<Input placeholder="Type your message...">
		{#snippet endAddon()}
			<div class="flex items-center gap-1">
				<InputGroupButton size="icon-xs" variant="ghost"><span>😀</span></InputGroupButton>
				<InputGroupButton size="icon-xs" variant="default"><Send class="size-4" /></InputGroupButton>
			</div>
		{/snippet}
	</Input>
</div>`;

export const withFieldDocs = `
<script lang="ts">
	import { Input, Field, Button, InputGroupPrimitives } from "@kareyes/aether";
	import { Mail, User, Lock, Eye, EyeOff, Phone, Copy } from "@kareyes/aether/icons";

	const { InputGroupButton } = InputGroupPrimitives;

	let formData = $state({
		email: "", password: "", username: "",
		phone: "", price: "", apiKey: "sk_live_1234567890abcdef",
	});
	let errors = $state<Record<string, string>>({});
	let showFormPassword = $state(false);

	function validateForm() {
		errors = {};
		if (!formData.email) errors.email = "Email is required";
		if (!formData.password) errors.password = "Password is required";
		if (!formData.username) errors.username = "Username is required";
	}
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
	<Field label="Email" description="We'll never share your email" required error={errors.email}>
		<Input type="email" bind:value={formData.email} placeholder="you@example.com" error={!!errors.email}>
			{#snippet startIcon()}<Mail class="size-4" />{/snippet}
		</Input>
	</Field>

	<Field label="Username" description="Choose a unique username" required error={errors.username}>
		<Input bind:value={formData.username} placeholder="johndoe" error={!!errors.username}>
			{#snippet startIcon()}<User class="size-4" />{/snippet}
		</Input>
	</Field>

	<Field label="Password" description="Must be at least 8 characters" required error={errors.password}>
		<Input type={showFormPassword ? "text" : "password"} bind:value={formData.password} placeholder="••••••••" error={!!errors.password}>
			{#snippet startIcon()}<Lock class="size-4" />{/snippet}
			{#snippet endButton()}
				<InputGroupButton size="icon-xs" variant="ghost" onclick={() => (showFormPassword = !showFormPassword)}>
					{#if showFormPassword}<EyeOff class="size-4" />{:else}<Eye class="size-4" />{/if}
				</InputGroupButton>
			{/snippet}
		</Input>
	</Field>

	<Field label="Phone Number" description="Enter your phone number">
		<Input bind:value={formData.phone} mask="phone" placeholder="(555) 555-5555">
			{#snippet startIcon()}<Phone class="size-4" />{/snippet}
		</Input>
	</Field>
</div>
<Button onclick={validateForm}>Validate Form</Button>`;

export const completeFormDocs = `
<script lang="ts">
	import { Input, Field, FieldPrimitives, Button, InputGroupPrimitives } from "@kareyes/aether";
	import { Mail, User, Lock, Eye, EyeOff, Phone, CreditCard } from "@kareyes/aether/icons";

	const { InputGroupButton } = InputGroupPrimitives;

	let formData = $state({ email: "", password: "", username: "", phone: "" });
	let errors = $state<Record<string, string>>({});
	let showFormPassword = $state(false);
</script>

<form onsubmit={(e) => { e.preventDefault(); }}>
	<FieldPrimitives.Set>
		<FieldPrimitives.Legend>Create Account</FieldPrimitives.Legend>
		<FieldPrimitives.Description>Enter your details to create a new account</FieldPrimitives.Description>
		<FieldPrimitives.Separator />
		<FieldPrimitives.Group class="gap-6">
			<Field label="Email Address" required error={errors.email}>
				<Input type="email" bind:value={formData.email} placeholder="you@example.com" error={!!errors.email}>
					{#snippet startIcon()}<Mail class="size-4" />{/snippet}
				</Input>
			</Field>

			<Field label="Username" required error={errors.username}>
				<Input bind:value={formData.username} placeholder="johndoe" error={!!errors.username}>
					{#snippet startIcon()}<User class="size-4" />{/snippet}
				</Input>
			</Field>

			<Field label="Password" required error={errors.password}>
				<Input type={showFormPassword ? "text" : "password"} bind:value={formData.password} placeholder="••••••••">
					{#snippet startIcon()}<Lock class="size-4" />{/snippet}
					{#snippet endButton()}
						<InputGroupButton size="icon-xs" variant="ghost" onclick={() => (showFormPassword = !showFormPassword)}>
							{#if showFormPassword}<EyeOff class="size-4" />{:else}<Eye class="size-4" />{/if}
						</InputGroupButton>
					{/snippet}
				</Input>
			</Field>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Field label="Phone Number">
					<Input bind:value={formData.phone} mask="phone" placeholder="(555) 555-5555">
						{#snippet startIcon()}<Phone class="size-4" />{/snippet}
					</Input>
				</Field>
				<Field label="Credit Card">
					<Input mask="creditCard" placeholder="1234 5678 9012 3456">
						{#snippet startIcon()}<CreditCard class="size-4" />{/snippet}
					</Input>
				</Field>
			</div>
		</FieldPrimitives.Group>

		<div class="flex gap-4 pt-4">
			<Button type="submit">Create Account</Button>
			<Button type="button" variant="outline">Cancel</Button>
		</div>
	</FieldPrimitives.Set>
</form>`;
