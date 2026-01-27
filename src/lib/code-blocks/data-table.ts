export const multiSelectDocs = `
<script lang="ts">
	import { DataTable, DataTablePrimitives } from "@kareyes/aether";

	const { DataTableCheckbox, DataTableColumnHeader, renderComponent } = DataTablePrimitives;

	type Payment = {
		id: string;
		amount: number;
		status: "Pending" | "Processing" | "Success" | "Failed";
		email: string;
	};

	const data: Payment[] = [
		{ id: "m5gr84i9", amount: 316, status: "Success", email: "ken99@yahoo.com" },
		{ id: "3u1reuv4", amount: 242, status: "Success", email: "Abe45@gmail.com" },
		{ id: "derv1ws0", amount: 837, status: "Processing", email: "Monserrat44@gmail.com" },
		{ id: "5kma53ae", amount: 874, status: "Success", email: "Silas22@gmail.com" },
		{ id: "bhqecj4p", amount: 721, status: "Failed", email: "carmella@hotmail.com" },
		{ id: "a1b2c3d4", amount: 450, status: "Pending", email: "john.doe@example.com" },
		{ id: "e5f6g7h8", amount: 920, status: "Success", email: "jane.smith@gmail.com" },
		{ id: "i9j0k1l2", amount: 350, status: "Processing", email: "bob.wilson@yahoo.com" },
		{ id: "m3n4o5p6", amount: 680, status: "Failed", email: "alice.brown@hotmail.com" },
		{ id: "q7r8s9t0", amount: 530, status: "Success", email: "charlie.davis@gmail.com" },
		{ id: "u1v2w3x4", amount: 290, status: "Pending", email: "diana.miller@example.com" },
		{ id: "y5z6a7b8", amount: 775, status: "Processing", email: "edward.jones@yahoo.com" },
	];

	const columns: DataTablePrimitives.ColumnDef<Payment>[] = [
		{
			id: "select",
			header: ({ table }: DataTablePrimitives.HeaderContext<Payment, unknown>) =>
				renderComponent(DataTableCheckbox, {
					checked: table.getIsAllPageRowsSelected(),
					indeterminate: table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected(),
					onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
					"aria-label": "Select all",
				}),
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) =>
				renderComponent(DataTableCheckbox, {
					checked: row.getIsSelected(),
					onCheckedChange: (value) => row.toggleSelected(!!value),
					"aria-label": "Select row",
				}),
			enableSorting: false,
			enableHiding: false,
		},
		{
			accessorKey: "status",
			header: "Status",
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) => {
				const statusSnippet = createRawSnippet<[{ status: string }]>((getStatus) => {
					const { status } = getStatus();
					return { render: () => \`<div class="capitalize">\${status}</div>\` };
				});
				return renderSnippet(statusSnippet, { status: row.original.status });
			},
		},
		{
			accessorKey: "email",
			header: ({ column }: DataTablePrimitives.HeaderContext<Payment, unknown>) =>
				renderComponent(DataTableColumnHeader, {
					title: "Email",
					onclick: column.getToggleSortingHandler(),
				}),
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) => {
				const emailSnippet = createRawSnippet<[{ email: string }]>((getEmail) => {
					const { email } = getEmail();
					return { render: () => \`<div class="lowercase">\${email}</div>\` };
				});
				return renderSnippet(emailSnippet, { email: row.original.email });
			},
		},
		{
			accessorKey: "amount",
			header: () => {
				const amountHeaderSnippet = createRawSnippet(() => {
					return { render: () => \`<div class="text-end">Amount</div>\` };
				});
				return renderSnippet(amountHeaderSnippet);
			},
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) => {
				const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
				const amountCellSnippet = createRawSnippet<[{ amount: number }]>((getAmount) => {
					const { amount } = getAmount();
					const formatted = formatter.format(amount);
					return { render: () => \`<div class="text-end font-medium">\${formatted}</div>\` };
				});
				return renderSnippet(amountCellSnippet, { amount: row.original.amount });
			},
		},
		{
			id: "actions",
			enableHiding: false,
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) =>
				renderComponent(DataTableActions, {
					id: row.original.id,
					copyLabel: "Copy payment ID",
					actions: [
						{ label: "View details", onclick: () => console.log("View details for", row.original.id) },
						{ label: "Edit payment", onclick: () => console.log("Edit payment", row.original.id) },
						{ label: "Delete", onclick: () => console.log("Delete payment", row.original.id) },
					],
				}),
		},
	];
</script>

<DataTable
	{data}
	{columns}
	filterColumn="email"
	filterPlaceholder="Filter emails..."
	pageSize={5}
	pageSizeOptions={[5, 10, 20, 50]}
	selectionMode="multi"
	onRowSelectionChange={(selected) => console.log("Selected rows:", selected)}
/>`;

export const singleSelectDocs = `
<script lang="ts">
	import { DataTable } from "@kareyes/aether";
	
	const { DataTableCheckbox, DataTableColumnHeader, renderComponent } = DataTablePrimitives;

	type Payment = {
		id: string;
		amount: number;
		status: "Pending" | "Processing" | "Success" | "Failed";
		email: string;
	};

	const data: Payment[] = [
		{ id: "m5gr84i9", amount: 316, status: "Success", email: "ken99@yahoo.com" },
		{ id: "3u1reuv4", amount: 242, status: "Success", email: "Abe45@gmail.com" },
		{ id: "derv1ws0", amount: 837, status: "Processing", email: "Monserrat44@gmail.com" },
		{ id: "5kma53ae", amount: 874, status: "Success", email: "Silas22@gmail.com" },
		{ id: "bhqecj4p", amount: 721, status: "Failed", email: "carmella@hotmail.com" },
		{ id: "a1b2c3d4", amount: 450, status: "Pending", email: "john.doe@example.com" },
		{ id: "e5f6g7h8", amount: 920, status: "Success", email: "jane.smith@gmail.com" },
		{ id: "i9j0k1l2", amount: 350, status: "Processing", email: "bob.wilson@yahoo.com" },
		{ id: "m3n4o5p6", amount: 680, status: "Failed", email: "alice.brown@hotmail.com" },
		{ id: "q7r8s9t0", amount: 530, status: "Success", email: "charlie.davis@gmail.com" },
		{ id: "u1v2w3x4", amount: 290, status: "Pending", email: "diana.miller@example.com" },
		{ id: "y5z6a7b8", amount: 775, status: "Processing", email: "edward.jones@yahoo.com" },
	];

	const columns: DataTablePrimitives.ColumnDef<Payment>[] = [
		{
			id: "select",
			header: ({ table }: DataTablePrimitives.HeaderContext<Payment, unknown>) =>
				renderComponent(DataTableCheckbox, {
					checked: table.getIsAllPageRowsSelected(),
					indeterminate: table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected(),
					onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
					"aria-label": "Select all",
				}),
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) =>
				renderComponent(DataTableCheckbox, {
					checked: row.getIsSelected(),
					onCheckedChange: (value) => row.toggleSelected(!!value),
					"aria-label": "Select row",
				}),
			enableSorting: false,
			enableHiding: false,
		},
		{
			accessorKey: "status",
			header: "Status",
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) => {
				const statusSnippet = createRawSnippet<[{ status: string }]>((getStatus) => {
					const { status } = getStatus();
					return { render: () => \`<div class="capitalize">\${status}</div>\` };
				});
				return renderSnippet(statusSnippet, { status: row.original.status });
			},
		},
		{
			accessorKey: "email",
			header: ({ column }: DataTablePrimitives.HeaderContext<Payment, unknown>) =>
				renderComponent(DataTableColumnHeader, {
					title: "Email",
					onclick: column.getToggleSortingHandler(),
				}),
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) => {
				const emailSnippet = createRawSnippet<[{ email: string }]>((getEmail) => {
					const { email } = getEmail();
					return { render: () => \`<div class="lowercase">\${email}</div>\` };
				});
				return renderSnippet(emailSnippet, { email: row.original.email });
			},
		},
		{
			accessorKey: "amount",
			header: () => {
				const amountHeaderSnippet = createRawSnippet(() => {
					return { render: () => \`<div class="text-end">Amount</div>\` };
				});
				return renderSnippet(amountHeaderSnippet);
			},
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) => {
				const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
				const amountCellSnippet = createRawSnippet<[{ amount: number }]>((getAmount) => {
					const { amount } = getAmount();
					const formatted = formatter.format(amount);
					return { render: () => \`<div class="text-end font-medium">\${formatted}</div>\` };
				});
				return renderSnippet(amountCellSnippet, { amount: row.original.amount });
			},
		},
		{
			id: "actions",
			enableHiding: false,
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) =>
				renderComponent(DataTableActions, {
					id: row.original.id,
					copyLabel: "Copy payment ID",
					actions: [
						{ label: "View details", onclick: () => console.log("View details for", row.original.id) },
						{ label: "Edit payment", onclick: () => console.log("Edit payment", row.original.id) },
						{ label: "Delete", onclick: () => console.log("Delete payment", row.original.id) },
					],
				}),
		},
	];
</script>

<DataTable
	{data}
	{columns}
	filterColumn="email"
	filterPlaceholder="Filter emails..."
	pageSize={5}
	selectionMode="single"
	onRowSelectionChange={(selected) => console.log("Selected row:", selected)}
/>`;

export const noSelectionDocs = `
<script lang="ts">
	import { DataTable } from "@kareyes/aether";
	
	const { DataTableCheckbox, DataTableColumnHeader, renderComponent } = DataTablePrimitives;

	type Payment = {
		id: string;
		amount: number;
		status: "Pending" | "Processing" | "Success" | "Failed";
		email: string;
	};

	const data: Payment[] = [
		{ id: "m5gr84i9", amount: 316, status: "Success", email: "ken99@yahoo.com" },
		{ id: "3u1reuv4", amount: 242, status: "Success", email: "Abe45@gmail.com" },
		{ id: "derv1ws0", amount: 837, status: "Processing", email: "Monserrat44@gmail.com" },
		{ id: "5kma53ae", amount: 874, status: "Success", email: "Silas22@gmail.com" },
		{ id: "bhqecj4p", amount: 721, status: "Failed", email: "carmella@hotmail.com" },
		{ id: "a1b2c3d4", amount: 450, status: "Pending", email: "john.doe@example.com" },
		{ id: "e5f6g7h8", amount: 920, status: "Success", email: "jane.smith@gmail.com" },
		{ id: "i9j0k1l2", amount: 350, status: "Processing", email: "bob.wilson@yahoo.com" },
		{ id: "m3n4o5p6", amount: 680, status: "Failed", email: "alice.brown@hotmail.com" },
		{ id: "q7r8s9t0", amount: 530, status: "Success", email: "charlie.davis@gmail.com" },
		{ id: "u1v2w3x4", amount: 290, status: "Pending", email: "diana.miller@example.com" },
		{ id: "y5z6a7b8", amount: 775, status: "Processing", email: "edward.jones@yahoo.com" },
	];

	const columns: DataTablePrimitives.ColumnDef<Payment>[] = [
		{
			accessorKey: "status",
			header: "Status",
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) => {
				const statusSnippet = createRawSnippet<[{ status: string }]>((getStatus) => {
					const { status } = getStatus();
					return { render: () => \`<div class="capitalize">\${status}</div>\` };
				});
				return renderSnippet(statusSnippet, { status: row.original.status });
			},
		},
		{
			accessorKey: "email",
			header: ({ column }: DataTablePrimitives.HeaderContext<Payment, unknown>) =>
				renderComponent(DataTableColumnHeader, {
					title: "Email",
					onclick: column.getToggleSortingHandler(),
				}),
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) => {
				const emailSnippet = createRawSnippet<[{ email: string }]>((getEmail) => {
					const { email } = getEmail();
					return { render: () => \`<div class="lowercase">\${email}</div>\` };
				});
				return renderSnippet(emailSnippet, { email: row.original.email });
			},
		},
		{
			accessorKey: "amount",
			header: () => {
				const amountHeaderSnippet = createRawSnippet(() => {
					return { render: () => \`<div class="text-end">Amount</div>\` };
				});
				return renderSnippet(amountHeaderSnippet);
			},
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) => {
				const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
				const amountCellSnippet = createRawSnippet<[{ amount: number }]>((getAmount) => {
					const { amount } = getAmount();
					const formatted = formatter.format(amount);
					return { render: () => \`<div class="text-end font-medium">\${formatted}</div>\` };
				});
				return renderSnippet(amountCellSnippet, { amount: row.original.amount });
			},
		},
		{
			id: "actions",
			enableHiding: false,
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) =>
				renderComponent(DataTableActions, {
					id: row.original.id,
					copyLabel: "Copy payment ID",
					actions: [
						{ label: "View details", onclick: () => console.log("View details for", row.original.id) },
						{ label: "Edit payment", onclick: () => console.log("Edit payment", row.original.id) },
						{ label: "Delete", onclick: () => console.log("Delete payment", row.original.id) },
					],
				}),
		},
	];
</script>

<DataTable
	{data}
	{columns}
	filterColumn="email"
	filterPlaceholder="Filter emails..."
	pageSize={5}
	selectionMode="none"
/>`;

export const stripedVariantDocs = `
<script lang="ts">
	import { DataTable } from "@kareyes/aether";
	
	const { DataTableCheckbox, DataTableColumnHeader, renderComponent } = DataTablePrimitives;

	type Payment = {
		id: string;
		amount: number;
		status: "Pending" | "Processing" | "Success" | "Failed";
		email: string;
	};

	const data: Payment[] = [
		{ id: "m5gr84i9", amount: 316, status: "Success", email: "ken99@yahoo.com" },
		{ id: "3u1reuv4", amount: 242, status: "Success", email: "Abe45@gmail.com" },
		{ id: "derv1ws0", amount: 837, status: "Processing", email: "Monserrat44@gmail.com" },
		{ id: "5kma53ae", amount: 874, status: "Success", email: "Silas22@gmail.com" },
		{ id: "bhqecj4p", amount: 721, status: "Failed", email: "carmella@hotmail.com" },
		{ id: "a1b2c3d4", amount: 450, status: "Pending", email: "john.doe@example.com" },
		{ id: "e5f6g7h8", amount: 920, status: "Success", email: "jane.smith@gmail.com" },
		{ id: "i9j0k1l2", amount: 350, status: "Processing", email: "bob.wilson@yahoo.com" },
		{ id: "m3n4o5p6", amount: 680, status: "Failed", email: "alice.brown@hotmail.com" },
		{ id: "q7r8s9t0", amount: 530, status: "Success", email: "charlie.davis@gmail.com" },
		{ id: "u1v2w3x4", amount: 290, status: "Pending", email: "diana.miller@example.com" },
		{ id: "y5z6a7b8", amount: 775, status: "Processing", email: "edward.jones@yahoo.com" },
	];

	const columns: DataTablePrimitives.ColumnDef<Payment>[] = [
		{
			id: "select",
			header: ({ table }: DataTablePrimitives.HeaderContext<Payment, unknown>) =>
				renderComponent(DataTableCheckbox, {
					checked: table.getIsAllPageRowsSelected(),
					indeterminate: table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected(),
					onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
					"aria-label": "Select all",
				}),
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) =>
				renderComponent(DataTableCheckbox, {
					checked: row.getIsSelected(),
					onCheckedChange: (value) => row.toggleSelected(!!value),
					"aria-label": "Select row",
				}),
			enableSorting: false,
			enableHiding: false,
		},
		{
			accessorKey: "status",
			header: "Status",
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) => {
				const statusSnippet = createRawSnippet<[{ status: string }]>((getStatus) => {
					const { status } = getStatus();
					return { render: () => \`<div class="capitalize">\${status}</div>\` };
				});
				return renderSnippet(statusSnippet, { status: row.original.status });
			},
		},
		{
			accessorKey: "email",
			header: ({ column }: DataTablePrimitives.HeaderContext<Payment, unknown>) =>
				renderComponent(DataTableColumnHeader, {
					title: "Email",
					onclick: column.getToggleSortingHandler(),
				}),
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) => {
				const emailSnippet = createRawSnippet<[{ email: string }]>((getEmail) => {
					const { email } = getEmail();
					return { render: () => \`<div class="lowercase">\${email}</div>\` };
				});
				return renderSnippet(emailSnippet, { email: row.original.email });
			},
		},
		{
			accessorKey: "amount",
			header: () => {
				const amountHeaderSnippet = createRawSnippet(() => {
					return { render: () => \`<div class="text-end">Amount</div>\` };
				});
				return renderSnippet(amountHeaderSnippet);
			},
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) => {
				const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
				const amountCellSnippet = createRawSnippet<[{ amount: number }]>((getAmount) => {
					const { amount } = getAmount();
					const formatted = formatter.format(amount);
					return { render: () => \`<div class="text-end font-medium">\${formatted}</div>\` };
				});
				return renderSnippet(amountCellSnippet, { amount: row.original.amount });
			},
		},
		{
			id: "actions",
			enableHiding: false,
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) =>
				renderComponent(DataTableActions, {
					id: row.original.id,
					copyLabel: "Copy payment ID",
					actions: [
						{ label: "View details", onclick: () => console.log("View details for", row.original.id) },
						{ label: "Edit payment", onclick: () => console.log("Edit payment", row.original.id) },
						{ label: "Delete", onclick: () => console.log("Delete payment", row.original.id) },
					],
				}),
		},
	];
</script>

<DataTable
	{data}
	{columns}
	variant="striped"
	filterColumn="email"
	filterPlaceholder="Filter emails..."
	pageSize={5}
/>`;

export const borderedVariantDocs = `
<script lang="ts">
	import { DataTable } from "@kareyes/aether";
	
	const { DataTableCheckbox, DataTableColumnHeader, renderComponent } = DataTablePrimitives;

	type Payment = {
		id: string;
		amount: number;
		status: "Pending" | "Processing" | "Success" | "Failed";
		email: string;
	};

	const data: Payment[] = [
		{ id: "m5gr84i9", amount: 316, status: "Success", email: "ken99@yahoo.com" },
		{ id: "3u1reuv4", amount: 242, status: "Success", email: "Abe45@gmail.com" },
		{ id: "derv1ws0", amount: 837, status: "Processing", email: "Monserrat44@gmail.com" },
		{ id: "5kma53ae", amount: 874, status: "Success", email: "Silas22@gmail.com" },
		{ id: "bhqecj4p", amount: 721, status: "Failed", email: "carmella@hotmail.com" },
		{ id: "a1b2c3d4", amount: 450, status: "Pending", email: "john.doe@example.com" },
		{ id: "e5f6g7h8", amount: 920, status: "Success", email: "jane.smith@gmail.com" },
		{ id: "i9j0k1l2", amount: 350, status: "Processing", email: "bob.wilson@yahoo.com" },
		{ id: "m3n4o5p6", amount: 680, status: "Failed", email: "alice.brown@hotmail.com" },
		{ id: "q7r8s9t0", amount: 530, status: "Success", email: "charlie.davis@gmail.com" },
		{ id: "u1v2w3x4", amount: 290, status: "Pending", email: "diana.miller@example.com" },
		{ id: "y5z6a7b8", amount: 775, status: "Processing", email: "edward.jones@yahoo.com" },
	];

	const columns: DataTablePrimitives.ColumnDef<Payment>[] = [
		{
			id: "select",
			header: ({ table }: DataTablePrimitives.HeaderContext<Payment, unknown>) =>
				renderComponent(DataTableCheckbox, {
					checked: table.getIsAllPageRowsSelected(),
					indeterminate: table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected(),
					onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
					"aria-label": "Select all",
				}),
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) =>
				renderComponent(DataTableCheckbox, {
					checked: row.getIsSelected(),
					onCheckedChange: (value) => row.toggleSelected(!!value),
					"aria-label": "Select row",
				}),
			enableSorting: false,
			enableHiding: false,
		},
		{
			accessorKey: "status",
			header: "Status",
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) => {
				const statusSnippet = createRawSnippet<[{ status: string }]>((getStatus) => {
					const { status } = getStatus();
					return { render: () => \`<div class="capitalize">\${status}</div>\` };
				});
				return renderSnippet(statusSnippet, { status: row.original.status });
			},
		},
		{
			accessorKey: "email",
			header: ({ column }: DataTablePrimitives.HeaderContext<Payment, unknown>) =>
				renderComponent(DataTableColumnHeader, {
					title: "Email",
					onclick: column.getToggleSortingHandler(),
				}),
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) => {
				const emailSnippet = createRawSnippet<[{ email: string }]>((getEmail) => {
					const { email } = getEmail();
					return { render: () => \`<div class="lowercase">\${email}</div>\` };
				});
				return renderSnippet(emailSnippet, { email: row.original.email });
			},
		},
		{
			accessorKey: "amount",
			header: () => {
				const amountHeaderSnippet = createRawSnippet(() => {
					return { render: () => \`<div class="text-end">Amount</div>\` };
				});
				return renderSnippet(amountHeaderSnippet);
			},
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) => {
				const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
				const amountCellSnippet = createRawSnippet<[{ amount: number }]>((getAmount) => {
					const { amount } = getAmount();
					const formatted = formatter.format(amount);
					return { render: () => \`<div class="text-end font-medium">\${formatted}</div>\` };
				});
				return renderSnippet(amountCellSnippet, { amount: row.original.amount });
			},
		},
		{
			id: "actions",
			enableHiding: false,
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) =>
				renderComponent(DataTableActions, {
					id: row.original.id,
					copyLabel: "Copy payment ID",
					actions: [
						{ label: "View details", onclick: () => console.log("View details for", row.original.id) },
						{ label: "Edit payment", onclick: () => console.log("Edit payment", row.original.id) },
						{ label: "Delete", onclick: () => console.log("Delete payment", row.original.id) },
					],
				}),
		},
	];
</script>

<DataTable
	{data}
	{columns}
	variant="bordered"
	filterColumn="email"
	filterPlaceholder="Filter emails..."
	pageSize={5}
/>`;

export const compactVariantDocs = `
<script lang="ts">
	import { DataTable } from "@kareyes/aether";
</script>

<DataTable
	{data}
	{columns}
	variant="compact"
	filterColumn="email"
	filterPlaceholder="Filter emails..."
	pageSize={8}
/>`;

export const minimalConfigDocs = `
<script lang="ts">
	import { DataTable } from "@kareyes/aether";
	
	const { DataTableCheckbox, DataTableColumnHeader, renderComponent } = DataTablePrimitives;

	type Payment = {
		id: string;
		amount: number;
		status: "Pending" | "Processing" | "Success" | "Failed";
		email: string;
	};

	const data: Payment[] = [
		{ id: "m5gr84i9", amount: 316, status: "Success", email: "ken99@yahoo.com" },
		{ id: "3u1reuv4", amount: 242, status: "Success", email: "Abe45@gmail.com" },
		{ id: "derv1ws0", amount: 837, status: "Processing", email: "Monserrat44@gmail.com" },
		{ id: "5kma53ae", amount: 874, status: "Success", email: "Silas22@gmail.com" },
		{ id: "bhqecj4p", amount: 721, status: "Failed", email: "carmella@hotmail.com" },
		{ id: "a1b2c3d4", amount: 450, status: "Pending", email: "john.doe@example.com" },
		{ id: "e5f6g7h8", amount: 920, status: "Success", email: "jane.smith@gmail.com" },
		{ id: "i9j0k1l2", amount: 350, status: "Processing", email: "bob.wilson@yahoo.com" },
		{ id: "m3n4o5p6", amount: 680, status: "Failed", email: "alice.brown@hotmail.com" },
		{ id: "q7r8s9t0", amount: 530, status: "Success", email: "charlie.davis@gmail.com" },
		{ id: "u1v2w3x4", amount: 290, status: "Pending", email: "diana.miller@example.com" },
		{ id: "y5z6a7b8", amount: 775, status: "Processing", email: "edward.jones@yahoo.com" },
	];

	const columns: DataTablePrimitives.ColumnDef<Payment>[] = [
		{
			id: "select",
			header: ({ table }: DataTablePrimitives.HeaderContext<Payment, unknown>) =>
				renderComponent(DataTableCheckbox, {
					checked: table.getIsAllPageRowsSelected(),
					indeterminate: table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected(),
					onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
					"aria-label": "Select all",
				}),
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) =>
				renderComponent(DataTableCheckbox, {
					checked: row.getIsSelected(),
					onCheckedChange: (value) => row.toggleSelected(!!value),
					"aria-label": "Select row",
				}),
			enableSorting: false,
			enableHiding: false,
		},
		{
			accessorKey: "status",
			header: "Status",
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) => {
				const statusSnippet = createRawSnippet<[{ status: string }]>((getStatus) => {
					const { status } = getStatus();
					return { render: () => \`<div class="capitalize">\${status}</div>\` };
				});
				return renderSnippet(statusSnippet, { status: row.original.status });
			},
		},
		{
			accessorKey: "email",
			header: ({ column }: DataTablePrimitives.HeaderContext<Payment, unknown>) =>
				renderComponent(DataTableColumnHeader, {
					title: "Email",
					onclick: column.getToggleSortingHandler(),
				}),
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) => {
				const emailSnippet = createRawSnippet<[{ email: string }]>((getEmail) => {
					const { email } = getEmail();
					return { render: () => \`<div class="lowercase">\${email}</div>\` };
				});
				return renderSnippet(emailSnippet, { email: row.original.email });
			},
		},
		{
			accessorKey: "amount",
			header: () => {
				const amountHeaderSnippet = createRawSnippet(() => {
					return { render: () => \`<div class="text-end">Amount</div>\` };
				});
				return renderSnippet(amountHeaderSnippet);
			},
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) => {
				const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
				const amountCellSnippet = createRawSnippet<[{ amount: number }]>((getAmount) => {
					const { amount } = getAmount();
					const formatted = formatter.format(amount);
					return { render: () => \`<div class="text-end font-medium">\${formatted}</div>\` };
				});
				return renderSnippet(amountCellSnippet, { amount: row.original.amount });
			},
		},
		{
			id: "actions",
			enableHiding: false,
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) =>
				renderComponent(DataTableActions, {
					id: row.original.id,
					copyLabel: "Copy payment ID",
					actions: [
						{ label: "View details", onclick: () => console.log("View details for", row.original.id) },
						{ label: "Edit payment", onclick: () => console.log("Edit payment", row.original.id) },
						{ label: "Delete", onclick: () => console.log("Delete payment", row.original.id) },
					],
				}),
		},
	];
</script>

<DataTable
	{data}
	{columns}
	showFilter={false}
	showColumnToggle={false}
	pageSize={10}
/>`;

export const noPaginationDocs = `
<script lang="ts">
	import { DataTable } from "@kareyes/aether";
</script>

<DataTable
	{data}
	{columns}
	showPagination={false}
	pageSize={100}
/>`;

export const expandableRowsDocs = `
<script lang="ts">
	import { DataTable } from "@kareyes/aether";
	
	const { DataTableCheckbox, DataTableColumnHeader, renderComponent } = DataTablePrimitives;

	type Payment = {
		id: string;
		amount: number;
		status: "Pending" | "Processing" | "Success" | "Failed";
		email: string;
	};

	const data: Payment[] = [
		{ id: "m5gr84i9", amount: 316, status: "Success", email: "ken99@yahoo.com" },
		{ id: "3u1reuv4", amount: 242, status: "Success", email: "Abe45@gmail.com" },
		{ id: "derv1ws0", amount: 837, status: "Processing", email: "Monserrat44@gmail.com" },
		{ id: "5kma53ae", amount: 874, status: "Success", email: "Silas22@gmail.com" },
		{ id: "bhqecj4p", amount: 721, status: "Failed", email: "carmella@hotmail.com" },
		{ id: "a1b2c3d4", amount: 450, status: "Pending", email: "john.doe@example.com" },
		{ id: "e5f6g7h8", amount: 920, status: "Success", email: "jane.smith@gmail.com" },
		{ id: "i9j0k1l2", amount: 350, status: "Processing", email: "bob.wilson@yahoo.com" },
		{ id: "m3n4o5p6", amount: 680, status: "Failed", email: "alice.brown@hotmail.com" },
		{ id: "q7r8s9t0", amount: 530, status: "Success", email: "charlie.davis@gmail.com" },
		{ id: "u1v2w3x4", amount: 290, status: "Pending", email: "diana.miller@example.com" },
		{ id: "y5z6a7b8", amount: 775, status: "Processing", email: "edward.jones@yahoo.com" },
	];

	const columns: DataTablePrimitives.ColumnDef<Payment>[] = [
		{
			id: "select",
			header: ({ table }: DataTablePrimitives.HeaderContext<Payment, unknown>) =>
				renderComponent(DataTableCheckbox, {
					checked: table.getIsAllPageRowsSelected(),
					indeterminate: table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected(),
					onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
					"aria-label": "Select all",
				}),
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) =>
				renderComponent(DataTableCheckbox, {
					checked: row.getIsSelected(),
					onCheckedChange: (value) => row.toggleSelected(!!value),
					"aria-label": "Select row",
				}),
			enableSorting: false,
			enableHiding: false,
		},
		{
			accessorKey: "status",
			header: "Status",
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) => {
				const statusSnippet = createRawSnippet<[{ status: string }]>((getStatus) => {
					const { status } = getStatus();
					return { render: () => \`<div class="capitalize">\${status}</div>\` };
				});
				return renderSnippet(statusSnippet, { status: row.original.status });
			},
		},
		{
			accessorKey: "email",
			header: ({ column }: DataTablePrimitives.HeaderContext<Payment, unknown>) =>
				renderComponent(DataTableColumnHeader, {
					title: "Email",
					onclick: column.getToggleSortingHandler(),
				}),
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) => {
				const emailSnippet = createRawSnippet<[{ email: string }]>((getEmail) => {
					const { email } = getEmail();
					return { render: () => \`<div class="lowercase">\${email}</div>\` };
				});
				return renderSnippet(emailSnippet, { email: row.original.email });
			},
		},
		{
			accessorKey: "amount",
			header: () => {
				const amountHeaderSnippet = createRawSnippet(() => {
					return { render: () => \`<div class="text-end">Amount</div>\` };
				});
				return renderSnippet(amountHeaderSnippet);
			},
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) => {
				const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
				const amountCellSnippet = createRawSnippet<[{ amount: number }]>((getAmount) => {
					const { amount } = getAmount();
					const formatted = formatter.format(amount);
					return { render: () => \`<div class="text-end font-medium">\${formatted}</div>\` };
				});
				return renderSnippet(amountCellSnippet, { amount: row.original.amount });
			},
		},
		{
			id: "actions",
			enableHiding: false,
			cell: ({ row }: DataTablePrimitives.CellContext<Payment, unknown>) =>
				renderComponent(DataTableActions, {
					id: row.original.id,
					copyLabel: "Copy payment ID",
					actions: [
						{ label: "View details", onclick: () => console.log("View details for", row.original.id) },
						{ label: "Edit payment", onclick: () => console.log("Edit payment", row.original.id) },
						{ label: "Delete", onclick: () => console.log("Delete payment", row.original.id) },
					],
				}),
		},
	];
</script>

<DataTable {data} {columns} expandable={true} pageSize={5}>
	{#snippet renderSubComponent({ row })}
		{@const payment = row.original}
		<div class="space-y-2 text-sm">
			<div class="grid grid-cols-2 gap-4">
				<div>
					<span class="font-semibold">Payment ID:</span>
					{payment.id}
				</div>
				<div>
					<span class="font-semibold">Status:</span>
					<span class="capitalize">{payment.status}</span>
				</div>
				<div>
					<span class="font-semibold">Amount:</span>
					\${payment.amount.toFixed(2)}
				</div>
				<div>
					<span class="font-semibold">Email:</span>
					{payment.email}
				</div>
			</div>
		</div>
	{/snippet}
</DataTable>`;
