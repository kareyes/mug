<script lang="ts">
	import { unifiedModeDocs, dedicatedComponentsDocs, regularInputShowcaseDocs, styleVariantsDocs, sizeOptionsDocs } from "$lib/code-blocks/file-input";
	import { FileInput, FileInputDragDrop, FileInputRegular, FileInputButton, Card, CodeBlock } from '@kareyes/aether';

	let dragDropFiles: FileList | null = $state(null);
	let regularFiles: FileList | null = $state(null);
	let buttonFiles: FileList | null = $state(null);

	function handleFilesChange(name: string) {
		return (files: FileList | null) => {
			console.log(`${name} files changed:`, files ? Array.from(files).map(f => f.name) : 'No files');
		};
	}

	function handleError(name: string) {
		return (error: string) => {
			console.error(`${name} error:`, error);
		};
	}
</script>

<div class="container mx-auto p-6 max-w-6xl">
	<!-- <div class="mb-8">
		<h1 class="text-3xl font-bold mb-2">File Input Components</h1>
		<p class="text-muted-foreground">
			Showcasing the modular architecture with three distinct UI modes.
		</p>
	</div> -->

	<div class="space-y-12">
		<!-- Unified Component with Mode Selection -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Unified Component (Mode-Based)</h2>
			<p class="text-sm text-muted-foreground mb-4">A single component with different modes for various use cases</p>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="space-y-2">
					<h3 class="text-sm font-medium">Drag & Drop Mode</h3>
					<FileInput
						mode="drag-drop"
						validation={{
							maxSize: 10 * 1024 * 1024,
							acceptedTypes: ['image/*', '.pdf']
						}}
						onFilesChange={(files) => {
							dragDropFiles = files;
							handleFilesChange('Drag & Drop')(files);
						}}
						onError={handleError('Drag & Drop')}
						dragDropProps={{
							label: "Drop images or PDFs here",
							description: "Max 10MB per file",
							showFileList: true
						}}
					/>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Regular Input Mode</h3>
					<FileInput
						mode="regular"
						validation={{
							maxFiles: 3,
							acceptedTypes: ['.doc', '.docx', '.txt']
						}}
						onFilesChange={(files) => {
							regularFiles = files;
							handleFilesChange('Regular')(files);
						}}
						onError={handleError('Regular')}
						regularProps={{
							placeholder: "Select up to 3 files...",
							showFileCount: true
						}}
					/>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Button-Only Mode</h3>
					<FileInput
						mode="button-only"
						validation={{
							maxFiles: 1,
							maxSize: 5 * 1024 * 1024,
							acceptedTypes: ['image/*']
						}}
						onFilesChange={(files) => {
							buttonFiles = files;
							handleFilesChange('Button')(files);
						}}
						onError={handleError('Button')}
						buttonProps={{
							buttonText: "Upload Avatar",
							variant: "filled",
							size: "lg",
							showCount: true
						}}
					/>
				</div>
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={unifiedModeDocs}
			/>
		</Card>

		<!-- Separate Components -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Dedicated Components</h2>
			<p class="text-sm text-muted-foreground mb-4">Each component optimized for specific use cases with sleek UI</p>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="space-y-2">
					<h3 class="text-sm font-medium">FileInputDragDrop</h3>
					<p class="text-xs text-muted-foreground">Best for large file uploads with visual feedback</p>
					<FileInputDragDrop
						validation={{
							maxSize: 10 * 1024 * 1024,
							acceptedTypes: ['image/*', 'video/*']
						}}
						onFilesChange={handleFilesChange('Direct Drag Drop')}
						onError={handleError('Direct Drag Drop')}
						label="Drop media files here"
						description="Images and videos only"
						multiple={true}
					/>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">FileInputRegular (Sleek UI)</h3>
					<p class="text-xs text-muted-foreground">Input-group based design with clear/browse actions</p>
					<FileInputRegular
						validation={{
							maxFiles: 5,
							acceptedTypes: ['.csv', '.xlsx', '.json']
						}}
						onFilesChange={handleFilesChange('Direct Regular')}
						onError={handleError('Direct Regular')}
						placeholder="Choose spreadsheets..."
						showFileCount={true}
						multiple={true}
					/>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">FileInputButton</h3>
					<p class="text-xs text-muted-foreground">Minimal footprint for inline forms</p>
					<FileInputButton
						validation={{
							maxFiles: 1,
							maxSize: 2 * 1024 * 1024,
							acceptedTypes: ['.png', '.jpg', '.jpeg', '.gif']
						}}
						onFilesChange={handleFilesChange('Direct Button')}
						onError={handleError('Direct Button')}
						buttonText="Choose Image"
						variant="ghost"
						showCount={false}
						showFileList={true}
					/>
				</div>
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={dedicatedComponentsDocs}
			/>
		</Card>

		<!-- Regular Input Showcase -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Regular Input - Sleek UI Showcase</h2>
			<p class="text-sm text-muted-foreground mb-4">Enhanced with input-group component for a modern, polished experience</p>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="space-y-2">
					<h3 class="text-sm font-medium">Single File Upload</h3>
					<FileInputRegular
						validation={{
							maxFiles: 1,
							maxSize: 5 * 1024 * 1024,
							acceptedTypes: ['image/*', '.pdf']
						}}
						onFilesChange={handleFilesChange('Single File')}
						onError={handleError('Single File')}
						placeholder="Select an image or PDF..."
						showFileCount={false}
						showFileList={true}
						multiple={false}
					/>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Multiple Files with Count</h3>
					<FileInputRegular
						validation={{
							maxFiles: 10,
							acceptedTypes: ['.jpg', '.png', '.gif', '.webp']
						}}
						onFilesChange={handleFilesChange('Multiple Images')}
						onError={handleError('Multiple Images')}
						placeholder="Select up to 10 images..."
						showFileCount={true}
						showFileList={true}
						multiple={true}
					/>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Without File List</h3>
					<FileInputRegular
						validation={{
							acceptedTypes: ['.doc', '.docx', '.txt']
						}}
						onFilesChange={handleFilesChange('Documents')}
						onError={handleError('Documents')}
						placeholder="Choose document files..."
						showFileCount={true}
						showFileList={false}
						multiple={true}
					/>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Required Field</h3>
					<FileInputRegular
						validation={{
							maxFiles: 1,
							acceptedTypes: ['.pdf']
						}}
						onFilesChange={handleFilesChange('Resume')}
						onError={handleError('Resume')}
						placeholder="Upload your resume (PDF only)..."
						showFileCount={false}
						showFileList={true}
						multiple={false}
						required={true}
					/>
				</div>
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={regularInputShowcaseDocs}
			/>
		</Card>

		<!-- Variant Showcase -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Style Variants</h2>
			<p class="text-sm text-muted-foreground mb-4">Different button styles for the file input trigger</p>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="space-y-2">
					<h3 class="text-sm font-medium">Default Variant</h3>
					<FileInput
						mode="button-only"
						buttonProps={{
							buttonText: "Default Button",
							variant: "default",
							size: "default"
						}}
					/>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Filled Variant</h3>
					<FileInput
						mode="button-only"
						buttonProps={{
							buttonText: "Filled Button",
							variant: "filled",
							size: "default"
						}}
					/>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Ghost Variant</h3>
					<FileInput
						mode="button-only"
						buttonProps={{
							buttonText: "Ghost Button",
							variant: "ghost",
							size: "default"
						}}
					/>
				</div>
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={styleVariantsDocs}
			/>
		</Card>

		<!-- Size Showcase -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">Size Options</h2>
			<p class="text-sm text-muted-foreground mb-4">Available button sizes for the file input</p>

			<div class="flex flex-wrap gap-4 items-end">
				<div class="space-y-2">
					<h3 class="text-sm font-medium">Small</h3>
					<FileInput
						mode="button-only"
						buttonProps={{
							buttonText: "Small",
							size: "sm"
						}}
					/>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Default</h3>
					<FileInput
						mode="button-only"
						buttonProps={{
							buttonText: "Default",
							size: "default"
						}}
					/>
				</div>

				<div class="space-y-2">
					<h3 class="text-sm font-medium">Large</h3>
					<FileInput
						mode="button-only"
						buttonProps={{
							buttonText: "Large",
							size: "lg"
						}}
					/>
				</div>
			</div>

			<br />
			<CodeBlock
				title="Code"
				language="Svelte"
				showLineNumbers
				collapsible
				maxHeight="250px"
				variant="default"
				code={sizeOptionsDocs}
			/>
		</Card>

		<!-- File Status Display -->
		<Card variant="outline" class="p-6">
			<h2 class="text-2xl font-semibold mb-4">File Status</h2>
			<p class="text-sm text-muted-foreground mb-4">Current file selection state from the examples above</p>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="space-y-2">
					<h3 class="font-medium">Drag & Drop Files</h3>
					{#if dragDropFiles && dragDropFiles.length > 0}
						<ul class="text-sm text-muted-foreground">
							{#each Array.from(dragDropFiles) as file}
								<li>{file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</li>
							{/each}
						</ul>
					{:else}
						<p class="text-sm text-muted-foreground">No files selected</p>
					{/if}
				</div>

				<div class="space-y-2">
					<h3 class="font-medium">Regular Input Files</h3>
					{#if regularFiles && regularFiles.length > 0}
						<ul class="text-sm text-muted-foreground">
							{#each Array.from(regularFiles) as file}
								<li>{file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</li>
							{/each}
						</ul>
					{:else}
						<p class="text-sm text-muted-foreground">No files selected</p>
					{/if}
				</div>

				<div class="space-y-2">
					<h3 class="font-medium">Button Files</h3>
					{#if buttonFiles && buttonFiles.length > 0}
						<ul class="text-sm text-muted-foreground">
							{#each Array.from(buttonFiles) as file}
								<li>{file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</li>
							{/each}
						</ul>
					{:else}
						<p class="text-sm text-muted-foreground">No files selected</p>
					{/if}
				</div>
			</div>
		</Card>
	</div>
</div>
