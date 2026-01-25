<script lang="ts">
	import {AccordionPrimitives as Accordion} from "@kareyes/aether";
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<div class="mb-8">
		<h1 class="text-3xl font-bold mb-2">Accordion Component</h1>
		<p class="text-muted-foreground">
			Expandable panels for organizing content into sections.
		</p>
	</div>

	<div class="space-y-12">
		<!-- Default Variant -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Default Variant</h2>
			<p class="text-sm text-muted-foreground mb-4">
				The default accordion with bottom borders and underline hover effect.
			</p>
			<Accordion.Root type="single" class="w-full">
				<Accordion.Item value="item-1">
					<Accordion.Trigger>Is it accessible?</Accordion.Trigger>
					<Accordion.Content>
						Yes. It adheres to the WAI-ARIA design pattern.
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-2">
					<Accordion.Trigger>Is it styled?</Accordion.Trigger>
					<Accordion.Content>
						Yes. It comes with default styles that match the other components' aesthetics.
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-3">
					<Accordion.Trigger>Is it animated?</Accordion.Trigger>
					<Accordion.Content>
						Yes. It's animated by default, but you can disable it if you prefer.
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</section>

		<!-- Bordered Variant -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Bordered Variant</h2>
			<p class="text-sm text-muted-foreground mb-4">
				A bordered container with dividers between items.
			</p>
			<Accordion.Root type="single" variant="bordered" class="w-full">
				<Accordion.Item value="item-1">
					<Accordion.Trigger>What payment methods do you accept?</Accordion.Trigger>
					<Accordion.Content>
						We accept all major credit cards, PayPal, and bank transfers. 
						For enterprise customers, we also offer invoice-based payments.
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-2">
					<Accordion.Trigger>How do I cancel my subscription?</Accordion.Trigger>
					<Accordion.Content>
						You can cancel your subscription at any time from your account settings. 
						Your access will continue until the end of your billing period.
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-3">
					<Accordion.Trigger>Do you offer refunds?</Accordion.Trigger>
					<Accordion.Content>
						Yes, we offer a 30-day money-back guarantee for all new subscriptions. 
						If you're not satisfied, contact our support team for a full refund.
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</section>

		<!-- Splitted Variant -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Splitted Variant</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Separate bordered cards for each item with spacing between them.
			</p>
			<Accordion.Root type="single" variant="splitted" class="w-full">
				<Accordion.Item value="item-1">
					<Accordion.Trigger>How do I create an account?</Accordion.Trigger>
					<Accordion.Content>
						Click the "Sign Up" button in the top right corner. Fill in your email, 
						create a password, and you're ready to go!
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-2">
					<Accordion.Trigger>How do I reset my password?</Accordion.Trigger>
					<Accordion.Content>
						Click "Forgot Password" on the login page. Enter your email address, 
						and we'll send you a link to reset your password.
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-3">
					<Accordion.Trigger>Can I change my username?</Accordion.Trigger>
					<Accordion.Content>
						Yes, you can change your username in your profile settings. 
						Note that this can only be done once every 30 days.
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</section>

		<!-- Shadow Variant -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Shadow Variant</h2>
			<p class="text-sm text-muted-foreground mb-4">
				A bordered container with shadow for elevated appearance.
			</p>
			<Accordion.Root type="single" variant="shadow" class="w-full">
				<Accordion.Item value="item-1">
					<Accordion.Trigger>What is your data retention policy?</Accordion.Trigger>
					<Accordion.Content>
						We retain your data for as long as your account is active. 
						Upon account deletion, your data is permanently removed within 30 days.
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-2">
					<Accordion.Trigger>How is my data protected?</Accordion.Trigger>
					<Accordion.Content>
						We use industry-standard encryption (AES-256) for data at rest 
						and TLS 1.3 for data in transit. Our systems are regularly audited.
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-3">
					<Accordion.Trigger>Can I export my data?</Accordion.Trigger>
					<Accordion.Content>
						Yes, you can export all your data at any time from your account settings. 
						We provide exports in JSON and CSV formats.
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</section>

		<!-- Multiple Selection -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Multiple Selection</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Allow multiple items to be expanded at the same time.
			</p>
			<Accordion.Root type="multiple" variant="bordered" class="w-full">
				<Accordion.Item value="item-1">
					<Accordion.Trigger>Frontend Development</Accordion.Trigger>
					<Accordion.Content>
						<ul class="list-disc list-inside space-y-1">
							<li>React, Vue, Svelte</li>
							<li>TypeScript</li>
							<li>CSS & Tailwind</li>
							<li>State Management</li>
						</ul>
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-2">
					<Accordion.Trigger>Backend Development</Accordion.Trigger>
					<Accordion.Content>
						<ul class="list-disc list-inside space-y-1">
							<li>Node.js, Python, Go</li>
							<li>REST & GraphQL APIs</li>
							<li>Database Design</li>
							<li>Authentication & Security</li>
						</ul>
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-3">
					<Accordion.Trigger>DevOps & Cloud</Accordion.Trigger>
					<Accordion.Content>
						<ul class="list-disc list-inside space-y-1">
							<li>Docker & Kubernetes</li>
							<li>CI/CD Pipelines</li>
							<li>AWS, GCP, Azure</li>
							<li>Infrastructure as Code</li>
						</ul>
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</section>

		<!-- Disabled Items -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Disabled Items</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Some items can be disabled to prevent interaction.
			</p>
			<Accordion.Root type="single" variant="splitted" class="w-full">
				<Accordion.Item value="item-1">
					<Accordion.Trigger>Available Feature</Accordion.Trigger>
					<Accordion.Content>
						This feature is fully available and ready to use.
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-2" disabled>
					<Accordion.Trigger>Premium Feature (Locked)</Accordion.Trigger>
					<Accordion.Content>
						Upgrade to premium to unlock this feature.
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-3">
					<Accordion.Trigger>Another Available Feature</Accordion.Trigger>
					<Accordion.Content>
						This feature is also available for all users.
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</section>

		<!-- Default Expanded -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Default Expanded</h2>
			<p class="text-sm text-muted-foreground mb-4">
				An accordion with an item expanded by default.
			</p>
			<Accordion.Root type="single" value="item-2" variant="bordered" class="w-full">
				<Accordion.Item value="item-1">
					<Accordion.Trigger>First Section</Accordion.Trigger>
					<Accordion.Content>
						This section is collapsed by default.
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-2">
					<Accordion.Trigger>Second Section (Default Open)</Accordion.Trigger>
					<Accordion.Content>
						This section is expanded by default. Users can still collapse it.
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-3">
					<Accordion.Trigger>Third Section</Accordion.Trigger>
					<Accordion.Content>
						This section is also collapsed by default.
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</section>

		<!-- All Variants Comparison -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Variants Comparison</h2>
			<p class="text-sm text-muted-foreground mb-4">
				Side-by-side comparison of all variants.
			</p>
			<div class="grid md:grid-cols-2 gap-6">
				<div>
					<h3 class="text-sm font-medium mb-2 text-muted-foreground">Default</h3>
					<Accordion.Root type="single" class="w-full">
						<Accordion.Item value="item-1">
							<Accordion.Trigger>Accordion Item</Accordion.Trigger>
							<Accordion.Content>
								Content for the default variant.
							</Accordion.Content>
						</Accordion.Item>
					</Accordion.Root>
				</div>
				<div>
					<h3 class="text-sm font-medium mb-2 text-muted-foreground">Bordered</h3>
					<Accordion.Root type="single" variant="bordered" class="w-full">
						<Accordion.Item value="item-1">
							<Accordion.Trigger>Accordion Item</Accordion.Trigger>
							<Accordion.Content>
								Content for the bordered variant.
							</Accordion.Content>
						</Accordion.Item>
					</Accordion.Root>
				</div>
				<div>
					<h3 class="text-sm font-medium mb-2 text-muted-foreground">Splitted</h3>
					<Accordion.Root type="single" variant="splitted" class="w-full">
						<Accordion.Item value="item-1">
							<Accordion.Trigger>Accordion Item</Accordion.Trigger>
							<Accordion.Content>
								Content for the splitted variant.
							</Accordion.Content>
						</Accordion.Item>
					</Accordion.Root>
				</div>
				<div>
					<h3 class="text-sm font-medium mb-2 text-muted-foreground">Shadow</h3>
					<Accordion.Root type="single" variant="shadow" class="w-full">
						<Accordion.Item value="item-1">
							<Accordion.Trigger>Accordion Item</Accordion.Trigger>
							<Accordion.Content>
								Content for the shadow variant.
							</Accordion.Content>
						</Accordion.Item>
					</Accordion.Root>
				</div>
			</div>
		</section>

		<!-- FAQ Example -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Real-World Example: FAQ</h2>
			<div class="max-w-2xl">
				<Accordion.Root type="single" variant="splitted" class="w-full">
					<Accordion.Item value="shipping">
						<Accordion.Trigger>What are your shipping options?</Accordion.Trigger>
						<Accordion.Content>
							<p class="mb-2">We offer several shipping options:</p>
							<ul class="list-disc list-inside space-y-1 text-muted-foreground">
								<li><strong>Standard Shipping:</strong> 5-7 business days - Free on orders over $50</li>
								<li><strong>Express Shipping:</strong> 2-3 business days - $9.99</li>
								<li><strong>Overnight Shipping:</strong> Next business day - $24.99</li>
							</ul>
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="returns">
						<Accordion.Trigger>What is your return policy?</Accordion.Trigger>
						<Accordion.Content>
							We offer a hassle-free 30-day return policy. Items must be unused and in 
							their original packaging. Once we receive your return, refunds are processed 
							within 5-7 business days.
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="warranty">
						<Accordion.Trigger>Do your products come with a warranty?</Accordion.Trigger>
						<Accordion.Content>
							Yes! All our products come with a 1-year manufacturer's warranty. 
							Extended warranty options are available at checkout for an additional 
							2 years of coverage.
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="international">
						<Accordion.Trigger>Do you ship internationally?</Accordion.Trigger>
						<Accordion.Content>
							We currently ship to over 50 countries worldwide. International shipping 
							rates and delivery times vary by location. You can see the available options 
							at checkout.
						</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>
			</div>
		</section>
	</div>
</div>