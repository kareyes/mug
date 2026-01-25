<script lang="ts">
  import { RadioGroup, RadioGroupPrimitives, Field, Badge, Button } from "@kareyes/aether";


  type RadioGroupOption = RadioGroupPrimitives.RadioGroupOption
  let selectedPlan = $state("pro");
  let notificationPreference = $state("email");
  let themeSelection = $state("auto");
  let deliveryMethod = $state("standard");
  let paymentMethod = $state("credit");
  let errorSelection = $state("");
  let clusterType = $state("kubernetes");
  let cardPlan = $state("pro");
  
  // Error states
  let planError = $derived(!selectedPlan);

  // Sample options
  const basicOptions: RadioGroupOption[] = [
    { id: "1", label: "Option 1", value: "option1" },
    { id: "2", label: "Option 2", value: "option2" },
    { id: "3", label: "Option 3", value: "option3" },
  ];

  const planOptions: RadioGroupOption[] = [
    { id: "free", label: "Free", value: "free", description: "$0/month - Basic features" },
    { id: "pro", label: "Pro", value: "pro", description: "$29/month - Advanced features" },
    { id: "enterprise", label: "Enterprise", value: "enterprise", description: "$99/month - Full features" },
  ];

  const notificationOptions: RadioGroupOption[] = [
    { id: "email", label: "Email", value: "email", description: "Receive notifications via email" },
    { id: "sms", label: "SMS", value: "sms", description: "Receive notifications via text message" },
    { id: "push", label: "Push", value: "push", description: "Receive push notifications" },
    { id: "none", label: "None", value: "none", description: "Don't receive notifications", disabled: true },
  ];

  const themeOptions: RadioGroupOption[] = [
    { id: "light", label: "Light", value: "light" },
    { id: "dark", label: "Dark", value: "dark" },
    { id: "auto", label: "Auto", value: "auto" },
  ];

  const clusterOptions: RadioGroupOption[] = [
    { 
      id: "kubernetes", 
      label: "Kubernetes", 
      value: "kubernetes", 
      description: "Run GPU workloads on a K8s configured cluster." 
    },
    { 
      id: "vm", 
      label: "Virtual Machine", 
      value: "vm", 
      description: "Access a VM configured cluster to run GPU workloads." 
    },
  ];

  const cardPlanOptions: RadioGroupOption[] = [
    { 
      id: "card-free", 
      label: "Free Plan", 
      value: "free", 
      description: "Basic features for personal use - $0/month" 
    },
    { 
      id: "card-pro", 
      label: "Pro Plan", 
      value: "pro", 
      description: "Advanced features for professionals - $29/month" 
    },
    { 
      id: "card-enterprise", 
      label: "Enterprise Plan", 
      value: "enterprise", 
      description: "Full features with priority support - $99/month" 
    },
  ];
</script>

<svelte:head>
  <title>Radio Group Demo - Aether UI</title>
</svelte:head>

<div class="container mx-auto p-8 space-y-12">
  <div class="space-y-4">
    <h1 class="text-4xl font-bold">Radio Group Demo</h1>
    <p class="text-lg text-muted-foreground">
      Demonstration of the RadioGroup component with different variants, sizes, and practical use cases.
    </p>
  </div>

  <!-- Basic Usage -->
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">Basic Usage</h2>
    
    <div class="grid gap-8 md:grid-cols-2">
      <RadioGroup
        options={basicOptions}
        bind:value={themeSelection}
        label="Choose an option"
        description="Select one option from the list"
      />

      <RadioGroup
        options={themeOptions}
        bind:value={themeSelection}
        label="Theme Selection"
        description="Choose your preferred theme"
        onValueChange={(val) => console.log('Theme changed:', val)}
      />
    </div>
  </section>

  <!-- With Descriptions -->
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">With Descriptions</h2>
    
    <div class="grid gap-8 md:grid-cols-2">
      <RadioGroup
        options={planOptions}
        bind:value={selectedPlan}
        label="Subscription Plan"
        description="Select your pricing tier"
        radioSize="lg"
      />

      <RadioGroup
        options={notificationOptions}
        bind:value={notificationPreference}
        label="Notification Preferences"
        description="How would you like to be notified?"
      />
    </div>
  </section>

  <!-- Orientations -->
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">Orientations</h2>
    
    <div class="grid gap-8">
      <div>
        <h3 class="text-lg font-medium mb-4">Vertical (Default)</h3>
        <RadioGroup
          options={basicOptions}
          bind:value={themeSelection}
          orientation="vertical"
          label="Vertical Layout"
        />
      </div>

      <div>
        <h3 class="text-lg font-medium mb-4">Horizontal</h3>
        <RadioGroup
          options={themeOptions}
          bind:value={themeSelection}
          orientation="horizontal"
          label="Horizontal Layout"
        />
      </div>
    </div>
  </section>

  <!-- Sizes -->
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">Sizes</h2>
    
    <div class="grid gap-8 md:grid-cols-3">
      <RadioGroup
        options={basicOptions.slice(0, 2)}
        value="option1"
        radioSize="sm"
        label="Small Radio"
      />

      <RadioGroup
        options={basicOptions.slice(0, 2)}
        value="option1"
        radioSize="default"
        label="Default Radio"
      />

      <RadioGroup
        options={basicOptions.slice(0, 2)}
        value="option1"
        radioSize="lg"
        label="Large Radio"
      />
    </div>
  </section>

  <!-- Variants -->
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">Variants</h2>
    
    <div class="grid gap-8 md:grid-cols-2">
      <RadioGroup
        options={basicOptions}
        value="option1"
        variant="default"
        label="Default Variant"
      />

      <RadioGroup
        options={basicOptions}
        value="option1"
        variant="destructive"
        label="Destructive Variant"
      />

      <RadioGroup
        options={basicOptions}
        value="option1"
        variant="success"
        label="Success Variant"
      />

      <RadioGroup
        options={basicOptions}
        value="option1"
        variant="warning"
        label="Warning Variant"
      />
    </div>
  </section>

  <!-- Error States -->
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">Error States</h2>
    
    <div class="grid gap-8 md:grid-cols-2">
      <RadioGroup
        options={basicOptions}
        bind:value={errorSelection}
        label="Required Selection"
        description="Please select an option"
        error={!errorSelection}
        required
      />

      <RadioGroup
        options={planOptions}
        value=""
        label="Plan Selection (Error)"
        description="Selection required"
        error={true}
        radioSize="lg"
      />
    </div>
  </section>

  <!-- With Field Component -->
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">With Field Component</h2>
    
    <div class="grid gap-8 md:grid-cols-2">
      <Field
        label="Choose Your Plan"
        description="Select the plan that fits your needs"
        required
      >
        <RadioGroup
          options={planOptions}
          bind:value={selectedPlan}
        />
      </Field>

      <Field
        label="Notification Preference"
        description="How would you like to be notified?"
        error={!notificationPreference ? "Please select a notification method" : undefined}
      >
        <RadioGroup
          options={notificationOptions}
          bind:value={notificationPreference}
          error={!notificationPreference}
        />
      </Field>
    </div>
    
    <div class="space-y-2">
      <p class="text-sm text-muted-foreground">
        Selected Plan: <Badge variant="secondary">{selectedPlan}</Badge>
      </p>
      <p class="text-sm text-muted-foreground">
        Notification: <Badge variant="outline">{notificationPreference}</Badge>
      </p>
    </div>
  </section>

  <!-- Interactive Examples -->
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">Interactive Examples</h2>
    
    <div class="grid gap-8">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Theme Selection</h3>
        <p class="text-sm text-muted-foreground">Current theme: <Badge variant="outline">{themeSelection}</Badge></p>
        <RadioGroup
          options={themeOptions}
          bind:value={themeSelection}
          orientation="horizontal"
        />
      </div>
    </div>
  </section>

  <!-- Disabled State -->
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">Disabled State</h2>
    
    <RadioGroup
      options={basicOptions}
      value="option2"
      label="Disabled Radio Group"
      description="This group is disabled"
      disabled
    />
  </section>

  <!-- Card Style -->
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">Card Style</h2>
    <p class="text-muted-foreground">
      Use the card style for more prominent selections with clickable cards.
    </p>
    
    <div class="grid gap-8">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Cluster Type Selection</h3>
        <RadioGroup
          options={clusterOptions}
          bind:value={clusterType}
          label="Select Cluster Type"
          description="Choose how you want to run your workloads"
          isCard={true}
          radioSize="lg"
        />
        <p class="text-sm text-muted-foreground">
          Selected: <Badge variant="secondary">{clusterType}</Badge>
        </p>
      </div>

      <div class="space-y-4">
        <h3 class="text-lg font-medium">Subscription Plans (Card Style)</h3>
        <RadioGroup
          options={cardPlanOptions}
          bind:value={cardPlan}
          label="Choose Your Plan"
          description="Select the plan that best fits your needs"
          isCard={true}
        />
        <p class="text-sm text-muted-foreground">
          Selected: <Badge variant="secondary">{cardPlan}</Badge>
        </p>
      </div>
    </div>
  </section>

  <!-- Card Style vs Regular Comparison -->
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">Card Style vs Regular</h2>
    <p class="text-muted-foreground">
      Comparison between card style and regular radio group layouts.
    </p>
    
    <div class="grid gap-8 md:grid-cols-2">
      <div>
        <h3 class="text-lg font-medium mb-4">Regular Style</h3>
        <RadioGroup
          options={clusterOptions}
          value="kubernetes"
          label="Cluster Type"
          description="Regular radio button layout"
          isCard={false}
        />
      </div>

      <div>
        <h3 class="text-lg font-medium mb-4">Card Style</h3>
        <RadioGroup
          options={clusterOptions}
          value="kubernetes"
          label="Cluster Type"
          description="Card-based layout (clickable cards)"
          isCard={true}
        />
      </div>
    </div>
  </section>

  <!-- Card Style with Variants -->
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">Card Style with Variants</h2>
    
    <div class="grid gap-8 md:grid-cols-2">
      <RadioGroup
        options={cardPlanOptions.slice(0, 2)}
        value="pro"
        label="Success Variant"
        isCard={true}
        variant="success"
      />

      <RadioGroup
        options={[
          { id: "soft-del", label: "Soft Delete", value: "soft", description: "Move items to trash (recoverable)" },
          { id: "perm-del", label: "Permanent Delete", value: "permanent", description: "Delete permanently (cannot be undone)" },
        ]}
        value="soft"
        label="Warning Variant"
        isCard={true}
        variant="warning"
      />
    </div>
  </section>
</div>