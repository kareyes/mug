<script lang="ts">
	// import { Slider } from "$core/components/ui/slider";
	// import type { SliderMark } from "$core/components/ui/slider";
	// import * as Field from "$core/components/ui/field";
	import { Badge, Slider, Field, SliderPrimitives } from "@kareyes/aether";

	let basicValue = $state(50);
	let volumeValue = $state(70);
	let tempValue = $state(22);
	let priceRange = $state([100, 500]);
	let ratingValue = $state(3);
	let progressValue = $state(0);
	let brightnessValue = $state(75);
	let zoomValue = $state(100);

	// Marks definitions
	const volumeMarks: SliderPrimitives.SliderMark[] = [
		{ value: 0, label: "🔇" },
		{ value: 50, label: "🔉" },
		{ value: 100, label: "🔊" },
	];

	const ratingMarks: SliderPrimitives.SliderMark[] = [
		{ value: 1, label: "Poor" },
		{ value: 2, label: "Fair" },
		{ value: 3, label: "Good" },
		{ value: 4, label: "Great" },
		{ value: 5, label: "Excellent" },
	];

	const percentageMarks: SliderPrimitives.SliderMark[] = [
		{ value: 0, label: "0%" },
		{ value: 25, label: "25%" },
		{ value: 50, label: "50%" },
		{ value: 75, label: "75%" },
		{ value: 100, label: "100%" },
	];

	// Simulate progress
	let progressInterval: ReturnType<typeof setInterval> | undefined;
	function startProgress() {
		progressValue = 0;
		progressInterval = setInterval(() => {
			if (progressValue < 100) {
				progressValue = progressValue + 1;
			} else {
				if (progressInterval) clearInterval(progressInterval);
			}
		}, 50);
	}

	function resetProgress() {
		if (progressInterval) clearInterval(progressInterval);
		progressValue = 0;
	}
</script>

<svelte:head>
	<title>Slider Demo - Aether UI</title>
</svelte:head>

<div class="container mx-auto p-8 space-y-12">
	<div class="space-y-4">
		<h1 class="text-4xl font-bold">Slider Demo</h1>
		<p class="text-lg text-muted-foreground">
			A comprehensive slider component with variants, sizes, step indicators, marks, and tooltips.
		</p>
	</div>

	<!-- Basic Usage -->
	<section class="space-y-6">
		<h2 class="text-2xl font-semibold">Basic Usage</h2>

		<div class="grid gap-8 md:grid-cols-2">
			<div class="space-y-4">
				<h3 class="text-lg font-medium">Simple Slider</h3>
				<Slider type="single" bind:value={basicValue} min={0} max={100} step={1} />
				<p class="text-sm text-muted-foreground">
					Value: <Badge variant="secondary">{basicValue}</Badge>
				</p>
			</div>

			<div class="space-y-4">
				<h3 class="text-lg font-medium">With Tooltip</h3>
				<Slider type="single" value={50} min={0} max={100} showTooltip={true} />
				<p class="text-sm text-muted-foreground">Hover over the thumb to see the tooltip</p>
			</div>
		</div>
	</section>

	<!-- Variants -->
	<section class="space-y-6">
		<h2 class="text-2xl font-semibold">Variants</h2>

		<div class="space-y-6">
			<div class="space-y-2">
				<h3 class="text-sm font-medium">Default</h3>
				<Slider type="single" variant="default" value={50} />
			</div>

			<div class="space-y-2">
				<h3 class="text-sm font-medium">Primary</h3>
				<Slider type="single" variant="primary" value={50} />
			</div>

			<div class="space-y-2">
				<h3 class="text-sm font-medium">Secondary</h3>
				<Slider type="single" variant="secondary" value={50} />
			</div>

			<div class="space-y-2">
				<h3 class="text-sm font-medium">Success</h3>
				<Slider type="single" variant="success" value={50} />
			</div>

			<div class="space-y-2">
				<h3 class="text-sm font-medium">Warning</h3>
				<Slider type="single" variant="warning" value={50} />
			</div>

			<div class="space-y-2">
				<h3 class="text-sm font-medium">Destructive</h3>
				<Slider type="single" variant="destructive" value={50} />
			</div>
		</div>
	</section>

	<!-- Sizes -->
	<section class="space-y-6">
		<h2 class="text-2xl font-semibold">Sizes</h2>

		<div class="space-y-6">
			<div class="space-y-2">
				<h3 class="text-sm font-medium">Small</h3>
				<Slider type="single" size="sm" value={50} variant="primary" />
			</div>

			<div class="space-y-2">
				<h3 class="text-sm font-medium">Default</h3>
				<Slider type="single" size="default" value={50} variant="primary" />
			</div>

			<div class="space-y-2">
				<h3 class="text-sm font-medium">Large</h3>
				<Slider type="single" size="lg" value={50} variant="primary" />
			</div>
		</div>
	</section>

	<!-- Step Indicators -->
	<section class="space-y-6">
		<h2 class="text-2xl font-semibold">Step Indicators</h2>

		<div class="space-y-6">
			<div class="space-y-2">
				<h3 class="text-sm font-medium">Step 10</h3>
				<Slider type="single" value={50} min={0} max={100} step={10} showSteps={true} />
			</div>

			<div class="space-y-2">
				<h3 class="text-sm font-medium">Step 25 (Primary)</h3>
				<Slider type="single" value={50} min={0} max={100} step={25} showSteps={true} variant="primary" />
			</div>

			<div class="space-y-2">
				<h3 class="text-sm font-medium">Step 5 (Large)</h3>
				<Slider
					type="single"
					value={50}
					min={0}
					max={100}
					step={5}
					showSteps={true}
					variant="success"
					size="lg"
				/>
			</div>
		</div>
	</section>

	<!-- Marks -->
	<section class="space-y-6">
		<h2 class="text-2xl font-semibold">Marks</h2>

		<div class="space-y-6">
			<div class="space-y-2">
				<h3 class="text-sm font-medium">Percentage Marks</h3>
				<Slider type="single" value={50} min={0} max={100} marks={percentageMarks} />
			</div>

			<div class="space-y-2">
				<h3 class="text-sm font-medium">Custom Labels</h3>
				<Slider
					type="single"
					value={50}
					min={0}
					max={100}
					marks={[
						{ value: 0, label: "Min" },
						{ value: 25, label: "Low" },
						{ value: 50, label: "Medium" },
						{ value: 75, label: "High" },
						{ value: 100, label: "Max" },
					]}
					variant="primary"
				/>
			</div>
		</div>
	</section>

	<!-- Combined Features -->
	<section class="space-y-6">
		<h2 class="text-2xl font-semibold">Combined Features</h2>

		<div class="space-y-6">
			<div class="space-y-2">
				<h3 class="text-sm font-medium">Steps + Marks + Tooltip</h3>
				<Slider
					type="single"
					value={50}
					min={0}
					max={100}
					step={10}
					showSteps={true}
					marks={percentageMarks}
					showTooltip={true}
					formatTooltip={(val) => `${val}%`}
					variant="primary"
					size="lg"
				/>
			</div>
		</div>
	</section>

	<!-- Range Slider -->
	<section class="space-y-6">
		<h2 class="text-2xl font-semibold">Range Slider</h2>

		<div class="space-y-6">
			<div class="space-y-4">
				<h3 class="text-lg font-medium">Price Range</h3>
				<Slider
					type="multiple"
					bind:value={priceRange}
					min={0}
					max={1000}
					step={10}
					showTooltip={true}
					formatTooltip={(val) => `$${val}`}
					variant="success"
				/>
				<p class="text-sm text-muted-foreground">
					Price Range:
					<Badge variant="secondary">${priceRange[0]} - ${priceRange[1]}</Badge>
				</p>
			</div>

			<div class="space-y-4">
				<h3 class="text-lg font-medium">With Steps and Marks</h3>
				<Slider
					type="multiple"
					value={[250, 750]}
					min={0}
					max={1000}
					step={50}
					showSteps={true}
					marks={[
						{ value: 0, label: "$0" },
						{ value: 500, label: "$500" },
						{ value: 1000, label: "$1000" },
					]}
					variant="primary"
				/>
			</div>
		</div>
	</section>

	<!-- Practical Examples -->
	<section class="space-y-6">
		<h2 class="text-2xl font-semibold">Practical Examples</h2>

		<div class="grid gap-8 md:grid-cols-2">
			<!-- Volume Control -->
			<div class="space-y-4">
				<h3 class="text-lg font-medium">Volume Control</h3>
				<Slider
					type="single"
					bind:value={volumeValue}
					min={0}
					max={100}
					step={5}
					marks={volumeMarks}
					showTooltip={true}
					formatTooltip={(val) => `${val}%`}
					variant="primary"
				/>
				<p class="text-sm text-muted-foreground">
					Volume: <Badge variant="secondary">{volumeValue}%</Badge>
				</p>
			</div>

			<!-- Temperature -->
			<div class="space-y-4">
				<h3 class="text-lg font-medium">Temperature Control</h3>
				<Slider
					type="single"
					bind:value={tempValue}
					min={16}
					max={30}
					step={0.5}
					showTooltip={true}
					formatTooltip={(val) => `${val}°C`}
					variant="warning"
					size="lg"
				/>
				<p class="text-sm text-muted-foreground">
					Temperature: <Badge variant="secondary">{tempValue}°C</Badge>
				</p>
			</div>

			<!-- Rating -->
			<div class="space-y-4">
				<h3 class="text-lg font-medium">Rating Scale</h3>
				<Slider
					type="single"
					bind:value={ratingValue}
					min={1}
					max={5}
					step={1}
					marks={ratingMarks}
					showSteps={true}
					variant="warning"
					size="lg"
				/>
				<p class="text-sm text-muted-foreground">
					Rating: <Badge variant="secondary">{ratingValue}/5 - {ratingMarks[ratingValue - 1].label}</Badge>
				</p>
			</div>

			<!-- Brightness -->
			<div class="space-y-4">
				<h3 class="text-lg font-medium">Brightness</h3>
				<Slider
					type="single"
					bind:value={brightnessValue}
					min={0}
					max={100}
					step={5}
					showTooltip={true}
					formatTooltip={(val) => `${val}%`}
					variant="primary"
				/>
				<p class="text-sm text-muted-foreground">
					Brightness: <Badge variant="secondary">{brightnessValue}%</Badge>
				</p>
			</div>

			<!-- Zoom -->
			<div class="space-y-4">
				<h3 class="text-lg font-medium">Zoom Level</h3>
				<Slider
					type="single"
					bind:value={zoomValue}
					min={50}
					max={200}
					step={10}
					showSteps={true}
					showTooltip={true}
					formatTooltip={(val) => `${val}%`}
					marks={[
						{ value: 50, label: "50%" },
						{ value: 100, label: "100%" },
						{ value: 200, label: "200%" },
					]}
					variant="primary"
				/>
				<p class="text-sm text-muted-foreground">
					Zoom: <Badge variant="secondary">{zoomValue}%</Badge>
				</p>
			</div>

			<!-- Progress -->
			<div class="space-y-4">
				<h3 class="text-lg font-medium">Progress Indicator</h3>
				<Slider type="single" value={progressValue} min={0} max={100} disabled={true} variant="success" />
				<div class="flex gap-2">
					<button
						onclick={startProgress}
						class="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
					>
						Start
					</button>
					<button
						onclick={resetProgress}
						class="rounded-md border border-input bg-background px-3 py-1.5 text-sm font-medium hover:bg-accent"
					>
						Reset
					</button>
				</div>
				<p class="text-sm text-muted-foreground">
					Progress: <Badge variant="secondary">{progressValue}%</Badge>
				</p>
			</div>
		</div>
	</section>

	<!-- Vertical Orientation -->
	<section class="space-y-6">
		<h2 class="text-2xl font-semibold">Vertical Orientation</h2>

		<div class="flex gap-12">
			<div class="space-y-4">
				<h3 class="text-sm font-medium text-center">Default</h3>
				<Slider type="single" value={50} orientation="vertical" class="h-64" />
			</div>

			<div class="space-y-4">
				<h3 class="text-sm font-medium text-center">With Steps</h3>
				<Slider
					type="single"
					value={50}
					orientation="vertical"
					step={10}
					showSteps={true}
					variant="primary"
					class="h-64"
				/>
			</div>

			<div class="space-y-4">
				<h3 class="text-sm font-medium text-center">With Tooltip</h3>
				<Slider
					type="single"
					value={75}
					orientation="vertical"
					showTooltip={true}
					formatTooltip={(val) => `${val}%`}
					variant="success"
					size="lg"
					class="h-64"
				/>
			</div>

			<div class="space-y-4">
				<h3 class="text-sm font-medium text-center">Volume</h3>
				<Slider
					type="single"
					value={80}
					orientation="vertical"
					step={5}
					showTooltip={true}
					formatTooltip={(val) => `${val}%`}
					variant="primary"
					class="h-64"
				/>
			</div>
		</div>
	</section>

	<!-- With Field Component -->
	<section class="space-y-6">
		<h2 class="text-2xl font-semibold">With Field Component</h2>

		<div class="max-w-2xl space-y-6">
			<Field label="Volume" description="Adjust the audio volume (0-100%)">
				<Slider
					type="single"
					value={70}
					min={0}
					max={100}
					step={5}
					showTooltip={true}
					formatTooltip={(val) => `${val}%`}
					variant="primary"
				/>
			</Field>

			<Field label="Temperature" description="Set the desired temperature (16-30°C)">
				<Slider
					type="single"
					value={22}
					min={16}
					max={30}
					step={0.5}
					showTooltip={true}
					formatTooltip={(val) => `${val}°C`}
					variant="warning"
				/>
			</Field>

			<Field label="Price Range" description="Filter products by price ($0-$1000)">
				<Slider
					type="multiple"
					value={[100, 500]}
					min={0}
					max={1000}
					step={10}
					showTooltip={true}
					formatTooltip={(val) => `$${val}`}
					variant="success"
				/>
			</Field>

			<Field label="Rating" description="Select your rating (1-5 stars)">
				<Slider
					type="single"
					value={3}
					min={1}
					max={5}
					step={1}
					marks={ratingMarks}
					showSteps={true}
					variant="warning"
					size="lg"
				/>
			</Field>
		</div>
	</section>

	<!-- Disabled State -->
	<section class="space-y-6">
		<h2 class="text-2xl font-semibold">Disabled State</h2>

		<div class="space-y-6">
			<div class="space-y-2">
				<h3 class="text-sm font-medium">Disabled Slider</h3>
				<Slider type="single" value={50} disabled={true} />
			</div>

			<div class="space-y-2">
				<h3 class="text-sm font-medium">Disabled with Steps</h3>
				<Slider type="single" value={50} step={10} showSteps={true} disabled={true} variant="primary" />
			</div>
		</div>
	</section>
</div>