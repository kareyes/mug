export const orientationsDocs = `
<script lang="ts">
	import { Button, CardPrimitives, StepperPrimitives } from "@kareyes/aether";

	const { Stepper, StepperStep, StepperSeparator } = StepperPrimitives;
	const { Card, CardHeader, CardTitle, CardDescription, CardContent } = CardPrimitives;

	let basicStep = $state(1);
	let verticalStep = $state(0);
</script>

<div class="grid gap-8 lg:grid-cols-2">
	<Card>
		<CardHeader>
			<CardTitle>Horizontal Stepper</CardTitle>
			<CardDescription>Default layout, perfect for wide screens</CardDescription>
		</CardHeader>
		<CardContent class="space-y-6">
			<Stepper bind:activeStep={basicStep}>
				<StepperStep step={0} label="Step 1" description="Choose a plan" />
				<StepperSeparator completed={basicStep > 0} />
				<StepperStep step={1} label="Step 2" description="Enter details" />
				<StepperSeparator completed={basicStep > 1} />
				<StepperStep step={2} label="Step 3" description="Confirm" />
			</Stepper>
			<div class="flex gap-3">
				<Button variant="outline" disabled={basicStep === 0} onclick={() => basicStep--}>
					Previous
				</Button>
				<Button disabled={basicStep === 2} onclick={() => basicStep++}>
					Next
				</Button>
			</div>
		</CardContent>
	</Card>

	<Card>
		<CardHeader>
			<CardTitle>Vertical Stepper</CardTitle>
			<CardDescription>Great for mobile and detailed steps</CardDescription>
		</CardHeader>
		<CardContent class="space-y-6">
			<Stepper orientation="vertical" bind:activeStep={verticalStep}>
				<StepperStep step={0} label="Personal Info" description="Enter your basic information" />
				<StepperSeparator completed={verticalStep > 0} />
				<StepperStep step={1} label="Address" description="Add your address details" />
				<StepperSeparator completed={verticalStep > 1} />
				<StepperStep step={2} label="Review" description="Review and submit" />
			</Stepper>
			<div class="flex gap-3">
				<Button variant="outline" disabled={verticalStep === 0} onclick={() => verticalStep--}>
					Previous
				</Button>
				<Button disabled={verticalStep === 2} onclick={() => verticalStep++}>
					Next
				</Button>
			</div>
		</CardContent>
	</Card>
</div>`;

export const sizesVariantsDocs = `
<script lang="ts">
	import { CardPrimitives, StepperPrimitives } from "@kareyes/aether";

	const { Stepper, StepperStep, StepperSeparator } = StepperPrimitives;
	const { Card, CardHeader, CardTitle, CardDescription, CardContent } = CardPrimitives;
</script>

<div class="grid gap-6">
	<Card>
		<CardHeader><CardTitle>Small Size</CardTitle></CardHeader>
		<CardContent>
			<Stepper size="sm" activeStep={1}>
				<StepperStep step={0} label="Start" />
				<StepperSeparator completed />
				<StepperStep step={1} label="Progress" />
				<StepperSeparator />
				<StepperStep step={2} label="Complete" />
			</Stepper>
		</CardContent>
	</Card>

	<Card>
		<CardHeader><CardTitle>Default Size</CardTitle></CardHeader>
		<CardContent>
			<Stepper size="default" activeStep={1}>
				<StepperStep step={0} label="Start" />
				<StepperSeparator completed />
				<StepperStep step={1} label="Progress" />
				<StepperSeparator />
				<StepperStep step={2} label="Complete" />
			</Stepper>
		</CardContent>
	</Card>

	<Card>
		<CardHeader><CardTitle>Outline Variant</CardTitle></CardHeader>
		<CardContent>
			<Stepper variant="outline" activeStep={1}>
				<StepperStep step={0} label="Start" description="Begin process" />
				<StepperSeparator completed />
				<StepperStep step={1} label="Progress" description="In progress" />
				<StepperSeparator />
				<StepperStep step={2} label="Complete" description="Finish" />
			</Stepper>
		</CardContent>
	</Card>

	<Card>
		<CardHeader>
			<CardTitle>Flat Variant</CardTitle>
			<CardDescription>Horizontal progress bar style</CardDescription>
		</CardHeader>
		<CardContent class="pt-8 mt-8">
			<Stepper variant="flat" activeStep={1}>
				<StepperStep step={0} label="Personal Info" description="Completed" />
				<StepperSeparator completed />
				<StepperStep step={1} label="Education" description="Completed" />
				<StepperSeparator />
				<StepperStep step={2} label="Company" description="Pending" />
				<StepperSeparator />
				<StepperStep step={3} label="Review" description="Pending" />
			</Stepper>
		</CardContent>
	</Card>
</div>`;

export const interactiveFeaturesDocs = `
<script lang="ts">
	import { CardPrimitives, StepperPrimitives } from "@kareyes/aether";
	import { User, CreditCard, CheckCircle } from "@lucide/svelte";

	const { Stepper, StepperStep, StepperSeparator } = StepperPrimitives;
	const { Card, CardHeader, CardTitle, CardDescription, CardContent } = CardPrimitives;

	let clickableStep = $state(1);
	let result = $state("");
</script>

<div class="grid gap-6">
	<Card>
		<CardHeader>
			<CardTitle>Clickable Steps</CardTitle>
			<CardDescription>Click on any step to navigate directly</CardDescription>
		</CardHeader>
		<CardContent>
			<Stepper clickable bind:activeStep={clickableStep}
				onStepClick={(step) => result = \`Clicked step \${step + 1}\`}
			>
				<StepperStep step={0} label="Step 1" description="First step" />
				<StepperSeparator completed={clickableStep > 0} />
				<StepperStep step={1} label="Step 2" description="Second step" />
				<StepperSeparator completed={clickableStep > 1} />
				<StepperStep step={2} label="Step 3" description="Third step" />
			</Stepper>
		</CardContent>
	</Card>

	<Card>
		<CardHeader>
			<CardTitle>With Custom Icons</CardTitle>
			<CardDescription>Using Lucide icons for visual clarity</CardDescription>
		</CardHeader>
		<CardContent>
			<Stepper activeStep={1}>
				<StepperStep step={0} label="Account" description="Create account">
					{#snippet icon()}
						<User class="size-4" />
					{/snippet}
				</StepperStep>
				<StepperSeparator completed />
				<StepperStep step={1} label="Payment" description="Add payment">
					{#snippet icon()}
						<CreditCard class="size-4" />
					{/snippet}
				</StepperStep>
				<StepperSeparator />
				<StepperStep step={2} label="Done" description="All set!">
					{#snippet icon()}
						<CheckCircle class="size-4" />
					{/snippet}
				</StepperStep>
			</Stepper>
		</CardContent>
	</Card>
</div>`;

export const practicalExamplesDocs = `
<script lang="ts">
	import { Button, Input, Label, CardPrimitives, StepperPrimitives } from "@kareyes/aether";
	import { Mail, User, CheckCircle } from "@lucide/svelte";

	const { Stepper, StepperStep, StepperSeparator } = StepperPrimitives;
	const { Card, CardHeader, CardTitle, CardDescription, CardContent } = CardPrimitives;

	let registrationStep = $state(0);
</script>

<Card>
	<CardHeader>
		<CardTitle>Registration Flow</CardTitle>
		<CardDescription>Multi-step account creation process</CardDescription>
	</CardHeader>
	<CardContent class="space-y-6">
		<Stepper bind:activeStep={registrationStep}>
			<StepperStep step={0} label="Account" description="Create your account">
				{#snippet icon()}
					<Mail class="size-4" />
				{/snippet}
			</StepperStep>
			<StepperSeparator completed={registrationStep > 0} />
			<StepperStep step={1} label="Profile" description="Personal information">
				{#snippet icon()}
					<User class="size-4" />
				{/snippet}
			</StepperStep>
			<StepperSeparator completed={registrationStep > 1} />
			<StepperStep step={2} label="Complete" description="Review and finish">
				{#snippet icon()}
					<CheckCircle class="size-4" />
				{/snippet}
			</StepperStep>
		</Stepper>

		<div class="min-h-[200px]">
			{#if registrationStep === 0}
				<div class="space-y-4">
					<h3 class="text-lg font-semibold">Create Your Account</h3>
					<div class="space-y-2">
						<Label for="reg-email">Email</Label>
						<Input id="reg-email" type="email" placeholder="john@example.com" />
					</div>
				</div>
			{:else if registrationStep === 1}
				<div class="space-y-4">
					<h3 class="text-lg font-semibold">Personal Information</h3>
					<div class="space-y-2">
						<Label for="reg-name">Full Name</Label>
						<Input id="reg-name" placeholder="John Doe" />
					</div>
				</div>
			{:else}
				<div class="space-y-4">
					<h3 class="text-lg font-semibold">Review Your Information</h3>
					<p class="text-muted-foreground">Review and submit your registration.</p>
				</div>
			{/if}
		</div>

		<div class="flex gap-3">
			<Button variant="outline" disabled={registrationStep === 0}
				onclick={() => registrationStep--}>Previous</Button>
			<Button disabled={registrationStep === 2}
				onclick={() => registrationStep++}>Next</Button>
		</div>
	</CardContent>
</Card>`;

export const customContentDocs = `
<script lang="ts">
	import { CardPrimitives, StepperPrimitives } from "@kareyes/aether";
	import { User, Settings, CheckCircle } from "@lucide/svelte";

	const { Stepper, StepperStep, StepperSeparator } = StepperPrimitives;
	const { Card, CardHeader, CardTitle, CardDescription, CardContent } = CardPrimitives;
</script>

<Card>
	<CardHeader>
		<CardTitle>Custom Rich Content</CardTitle>
		<CardDescription>Use children snippet for custom step content</CardDescription>
	</CardHeader>
	<CardContent class="space-y-6">
		<Stepper activeStep={1}>
			<StepperStep step={0}>
				{#snippet icon()}
					<User class="size-4" />
				{/snippet}
				<div class="space-y-1">
					<div class="font-medium">Account Setup</div>
					<div class="text-sm text-muted-foreground">Create your credentials</div>
				</div>
			</StepperStep>
			<StepperSeparator completed />
			<StepperStep step={1}>
				{#snippet icon()}
					<Settings class="size-4" />
				{/snippet}
				<div class="space-y-1">
					<div class="font-medium flex items-center gap-2">
						Configuration
						<span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Active</span>
					</div>
					<div class="text-sm text-muted-foreground">Customize your settings</div>
				</div>
			</StepperStep>
			<StepperSeparator />
			<StepperStep step={2}>
				{#snippet icon()}
					<CheckCircle class="size-4" />
				{/snippet}
				<div class="space-y-1">
					<div class="font-medium">Completion</div>
					<div class="text-sm text-muted-foreground">Review and launch</div>
				</div>
			</StepperStep>
		</Stepper>
	</CardContent>
</Card>`;
