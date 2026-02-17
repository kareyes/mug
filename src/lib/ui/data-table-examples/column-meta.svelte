<div class="overflow-x-auto">
	<table class="w-full text-sm">
		<thead>
			<tr class="border-b">
				<th class="text-left py-2 px-4 font-medium">Property</th>
				<th class="text-left py-2 px-4 font-medium">Type</th>
				<th class="text-left py-2 px-4 font-medium">Description</th>
			</tr>
		</thead>
		<tbody>
			<tr class="border-b">
				<td class="py-2 px-4 font-mono text-xs">hiddenOnMobile</td>
				<td class="py-2 px-4 text-muted-foreground">boolean</td>
				<td class="py-2 px-4">Hide this column in mobile card view</td>
			</tr>
			<tr class="border-b">
				<td class="py-2 px-4 font-mono text-xs">mobileLabel</td>
				<td class="py-2 px-4 text-muted-foreground">string</td>
				<td class="py-2 px-4">Custom label for mobile (defaults to header)</td>
			</tr>
			<tr class="border-b">
				<td class="py-2 px-4 font-mono text-xs">priority</td>
				<td class="py-2 px-4 text-muted-foreground">number</td>
				<td class="py-2 px-4">Display order in cards (lower = first, default: 100)</td>
			</tr>
			<tr>
				<td class="py-2 px-4 font-mono text-xs">alwaysVisible</td>
				<td class="py-2 px-4 text-muted-foreground">boolean</td>
				<td class="py-2 px-4">Highlight with bold text in card view</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mt-6 p-4 bg-muted rounded-lg">
	<p class="text-sm font-medium mb-2">Example Usage:</p>
	<pre class="text-xs overflow-x-auto"><code>{`{
  accessorKey: "status",
  header: "Status",
  meta: {
    mobileLabel: "Payment Status",
    priority: 1,
    alwaysVisible: true
  } as DataTableColumnMeta,
}`}</code></pre>
</div>
