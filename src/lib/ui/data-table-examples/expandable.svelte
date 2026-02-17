<script lang="ts">
	import { DataTable } from "@kareyes/aether";
	import { data, getColumns } from "./shared";
	const columns = getColumns();
</script>

<DataTable {data} {columns} expandable={true} pageSize={5}>
	{#snippet renderSubComponent({ row })}
		{@const payment = row.original}
		<div class="space-y-2 text-sm">
			<div class="grid grid-cols-2 gap-4">
				<div><span class="font-semibold">Payment ID:</span> {payment.id}</div>
				<div><span class="font-semibold">Status:</span> <span class="capitalize">{payment.status}</span></div>
				<div><span class="font-semibold">Amount:</span> ${payment.amount.toFixed(2)}</div>
				<div><span class="font-semibold">Email:</span> {payment.email}</div>
			</div>
			<div class="mt-4 p-3 bg-background rounded border">
				<p class="text-xs text-muted-foreground">Additional payment details and transaction history would appear here.</p>
			</div>
		</div>
	{/snippet}
</DataTable>
