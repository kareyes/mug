<script lang="ts">
  import { CardPrimitives, Stepper } from "@kareyes/aether";

  const { Card, CardHeader, CardTitle, CardDescription, CardContent } = CardPrimitives;
</script>

<div class="grid gap-6">
  <Card>
    <CardHeader><CardTitle>Extra Small Size</CardTitle></CardHeader>
    <CardContent>
      <Stepper size="xs" activeStep={1} steps={[
        { label: "Start" },
        { label: "Progress" },
        { label: "Complete" },
      ]} />
    </CardContent>
  </Card>

  <Card>
    <CardHeader><CardTitle>Small Size</CardTitle></CardHeader>
    <CardContent>
      <Stepper size="sm" activeStep={1} steps={[
        { label: "Start" },
        { label: "Progress" },
        { label: "Complete" },
      ]} />
    </CardContent>
  </Card>

  <Card>
    <CardHeader><CardTitle>Default Size</CardTitle></CardHeader>
    <CardContent>
      <Stepper size="default" activeStep={1} steps={[
        { label: "Start" },
        { label: "Progress" },
        { label: "Complete" },
      ]} />
    </CardContent>
  </Card>

  <Card>
    <CardHeader><CardTitle>Large Size</CardTitle></CardHeader>
    <CardContent>
      <Stepper size="lg" activeStep={1} steps={[
        { label: "Start" },
        { label: "Progress" },
        { label: "Complete" },
      ]} />
    </CardContent>
  </Card>

  <Card>
    <CardHeader><CardTitle>Outline Variant</CardTitle></CardHeader>
    <CardContent>
      <Stepper variant="outline" activeStep={1} steps={[
        { label: "Start", description: "Begin process" },
        { label: "Progress", description: "In progress" },
        { label: "Complete", description: "Finish" },
      ]} />
    </CardContent>
  </Card>

  <Card>
    <CardHeader><CardTitle>Ghost Variant</CardTitle></CardHeader>
    <CardContent>
      <Stepper variant="ghost" activeStep={1} steps={[
        { label: "Start", description: "Begin process" },
        { label: "Progress", description: "In progress" },
        { label: "Complete", description: "Finish" },
      ]} />
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Flat Variant</CardTitle>
      <CardDescription>Horizontal progress bar style</CardDescription>
    </CardHeader>
    <CardContent class="pt-8 mt-8">
      <Stepper variant="flat" activeStep={1} steps={[
        { label: "Personal Info", description: "Completed" },
        { label: "Education", description: "Completed" },
        { label: "Company", description: "Pending" },
        { label: "Testing", description: "Pending" },
        { label: "Review", description: "Pending" },
      ]} />
    </CardContent>
  </Card>
</div>
