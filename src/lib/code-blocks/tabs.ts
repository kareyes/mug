export const defaultVariantDocs = `
<script lang="ts">
  import { TabsPrimitives } from "@kareyes/aether";

  const { Tabs, TabsList, TabsTrigger, TabsContent } = TabsPrimitives;
</script>

<Tabs value="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <h3 class="text-lg font-medium">Account Information</h3>
    <p class="text-sm text-muted-foreground">View and manage your account details here.</p>
  </TabsContent>
  <TabsContent value="password">
    <h3 class="text-lg font-medium">Password Settings</h3>
    <p class="text-sm text-muted-foreground">Change your password and security preferences.</p>
  </TabsContent>
  <TabsContent value="settings">
    <h3 class="text-lg font-medium">Application Settings</h3>
    <p class="text-sm text-muted-foreground">Configure your application preferences and options.</p>
  </TabsContent>
</Tabs>`;

export const underlineVariantDocs = `
<Tabs value="overview">
  <TabsList variant="underline">
    <TabsTrigger variant="underline" value="overview">Overview</TabsTrigger>
    <TabsTrigger variant="underline" value="analytics">Analytics</TabsTrigger>
    <TabsTrigger variant="underline" value="reports">Reports</TabsTrigger>
    <TabsTrigger variant="underline" value="notifications">Notifications</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <h3 class="text-lg font-medium">Overview Dashboard</h3>
    <p class="text-sm text-muted-foreground">Your main dashboard overview with key metrics.</p>
  </TabsContent>
</Tabs>`;

export const pillsVariantDocs = `
<script lang="ts">
  import { TabsPrimitives } from "@kareyes/aether";
  import { Home, User, Settings } from "@kareyes/aether/icons";

  const { Tabs, TabsList, TabsTrigger, TabsContent } = TabsPrimitives;
</script>

<Tabs value="home">
  <TabsList variant="pills">
    <TabsTrigger variant="pills" value="home">
      <Home class="size-4" />
      Home
    </TabsTrigger>
    <TabsTrigger variant="pills" value="profile">
      <User class="size-4" />
      Profile
    </TabsTrigger>
    <TabsTrigger variant="pills" value="settings">
      <Settings class="size-4" />
      Settings
    </TabsTrigger>
  </TabsList>
  <TabsContent value="home">
    <h3 class="text-lg font-medium">Home Page</h3>
    <p class="text-sm text-muted-foreground">Welcome to your home page.</p>
  </TabsContent>
</Tabs>`;

export const solidVariantDocs = `
<script lang="ts">
  import { TabsPrimitives } from "@kareyes/aether";
  import { Mail, Calendar, Bell } from "@kareyes/aether/icons";

  const { Tabs, TabsList, TabsTrigger, TabsContent } = TabsPrimitives;
</script>

<Tabs value="inbox">
  <TabsList variant="solid">
    <TabsTrigger variant="solid" value="inbox">
      <Mail class="size-4" />
      Inbox
    </TabsTrigger>
    <TabsTrigger variant="solid" value="scheduled">
      <Calendar class="size-4" />
      Scheduled
    </TabsTrigger>
    <TabsTrigger variant="solid" value="notifications">
      <Bell class="size-4" />
      Alerts
    </TabsTrigger>
  </TabsList>
  <TabsContent value="inbox">
    <h3 class="text-lg font-medium">Inbox Messages</h3>
    <p class="text-sm text-muted-foreground">View all your incoming messages.</p>
  </TabsContent>
</Tabs>`;

export const segmentedVariantDocs = `
<Tabs value="daily">
  <TabsList variant="segmented">
    <TabsTrigger variant="segmented" value="daily">Daily</TabsTrigger>
    <TabsTrigger variant="segmented" value="weekly">Weekly</TabsTrigger>
    <TabsTrigger variant="segmented" value="monthly">Monthly</TabsTrigger>
    <TabsTrigger variant="segmented" value="yearly">Yearly</TabsTrigger>
  </TabsList>
  <TabsContent value="daily">
    <h3 class="text-lg font-medium">Daily Statistics</h3>
    <p class="text-sm text-muted-foreground">View your daily performance metrics.</p>
  </TabsContent>
</Tabs>`;

export const sizeVariantsDocs = `
<!-- Small Size -->
<Tabs value="tab1">
  <TabsList size="sm">
    <TabsTrigger size="sm" value="tab1">Small Tab 1</TabsTrigger>
    <TabsTrigger size="sm" value="tab2">Small Tab 2</TabsTrigger>
    <TabsTrigger size="sm" value="tab3">Small Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1" padding="sm">
    <p class="text-sm text-muted-foreground">Small size content area</p>
  </TabsContent>
</Tabs>

<!-- Large Size -->
<Tabs value="tab1">
  <TabsList size="lg">
    <TabsTrigger size="lg" value="tab1">Large Tab 1</TabsTrigger>
    <TabsTrigger size="lg" value="tab2">Large Tab 2</TabsTrigger>
    <TabsTrigger size="lg" value="tab3">Large Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1" padding="lg">
    <p class="text-sm text-muted-foreground">Large size for better touch targets</p>
  </TabsContent>
</Tabs>`;

export const animationVariantsDocs = `
<!-- Slide Animation -->
<Tabs value="slide1">
  <TabsList variant="pills">
    <TabsTrigger variant="pills" value="slide1">Slide 1</TabsTrigger>
    <TabsTrigger variant="pills" value="slide2">Slide 2</TabsTrigger>
    <TabsTrigger variant="pills" value="slide3">Slide 3</TabsTrigger>
  </TabsList>
  <TabsContent value="slide1" animation="slide">
    <div class="rounded-lg border border-border p-4">
      <p class="text-sm">Content slides in from bottom</p>
    </div>
  </TabsContent>
</Tabs>

<!-- Scale Animation -->
<Tabs value="scale1">
  <TabsList variant="solid">
    <TabsTrigger variant="solid" value="scale1">Scale 1</TabsTrigger>
    <TabsTrigger variant="solid" value="scale2">Scale 2</TabsTrigger>
    <TabsTrigger variant="solid" value="scale3">Scale 3</TabsTrigger>
  </TabsList>
  <TabsContent value="scale1" animation="scale">
    <div class="rounded-lg border border-border p-4">
      <p class="text-sm">Content zooms in on appear</p>
    </div>
  </TabsContent>
</Tabs>`;
