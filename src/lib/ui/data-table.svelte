<script lang="ts">
    import { createRawSnippet } from "svelte";
    import { DataTable, DataTablePrimitives as Prim } from "@kareyes/aether";

    const {
        DataTableCheckbox,
        DataTableColumnHeader,
        DataTableActions,
        renderComponent,
        renderSnippet,
    } = Prim;

    type Payment = {
        id: string;
        amount: number;
        status: "Pending" | "Processing" | "Success" | "Failed";
        email: string;
    };

    const data: Payment[] = [
        {
            id: "m5gr84i9",
            amount: 316,
            status: "Success",
            email: "ken99@yahoo.com",
        },
        {
            id: "3u1reuv4",
            amount: 242,
            status: "Success",
            email: "Abe45@gmail.com",
        },
        {
            id: "derv1ws0",
            amount: 837,
            status: "Processing",
            email: "Monserrat44@gmail.com",
        },
        {
            id: "5kma53ae",
            amount: 874,
            status: "Success",
            email: "Silas22@gmail.com",
        },
        {
            id: "bhqecj4p",
            amount: 721,
            status: "Failed",
            email: "carmella@hotmail.com",
        },
        {
            id: "a1b2c3d4",
            amount: 450,
            status: "Pending",
            email: "john.doe@example.com",
        },
        {
            id: "e5f6g7h8",
            amount: 920,
            status: "Success",
            email: "jane.smith@gmail.com",
        },
        {
            id: "i9j0k1l2",
            amount: 350,
            status: "Processing",
            email: "bob.wilson@yahoo.com",
        },
        {
            id: "m3n4o5p6",
            amount: 680,
            status: "Failed",
            email: "alice.brown@hotmail.com",
        },
        {
            id: "q7r8s9t0",
            amount: 530,
            status: "Success",
            email: "charlie.davis@gmail.com",
        },
        {
            id: "u1v2w3x4",
            amount: 290,
            status: "Pending",
            email: "diana.miller@example.com",
        },
        {
            id: "y5z6a7b8",
            amount: 775,
            status: "Processing",
            email: "edward.jones@yahoo.com",
        },
    ];

    const columns: Prim.ColumnDef<Payment>[] = [
        {
            id: "select",
            header: ({ table }: Prim.HeaderContext<Payment, unknown>) =>
                renderComponent(DataTableCheckbox, {
                    checked: table.getIsAllPageRowsSelected(),
                    indeterminate:
                        table.getIsSomePageRowsSelected() &&
                        !table.getIsAllPageRowsSelected(),
                    onCheckedChange: (value) =>
                        table.toggleAllPageRowsSelected(!!value),
                    "aria-label": "Select all",
                }),
            cell: ({ row }: Prim.CellContext<Payment, unknown>) =>
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
            cell: ({ row }: Prim.CellContext<Payment, unknown>) => {
                const statusSnippet = createRawSnippet<[{ status: string }]>(
                    (getStatus) => {
                        const { status } = getStatus();
                        return {
                            render: () =>
                                `<div class="capitalize">${status}</div>`,
                        };
                    },
                );
                return renderSnippet(statusSnippet, {
                    status: row.original.status,
                });
            },
        },
        {
            accessorKey: "email",
            header: ({ column }: Prim.HeaderContext<Payment, unknown>) =>
                renderComponent(DataTableColumnHeader, {
                    title: "Email",
                    onclick: column.getToggleSortingHandler(),
                }),
            cell: ({ row }: Prim.CellContext<Payment, unknown>) => {
                const emailSnippet = createRawSnippet<[{ email: string }]>(
                    (getEmail) => {
                        const { email } = getEmail();
                        return {
                            render: () =>
                                `<div class="lowercase">${email}</div>`,
                        };
                    },
                );
                return renderSnippet(emailSnippet, {
                    email: row.original.email,
                });
            },
        },
        {
            accessorKey: "amount",
            header: () => {
                const amountHeaderSnippet = createRawSnippet(() => {
                    return {
                        render: () => `<div class="text-end">Amount</div>`,
                    };
                });
                return renderSnippet(amountHeaderSnippet);
            },
            cell: ({ row }: Prim.CellContext<Payment, unknown>) => {
                const formatter = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                });
                const amountCellSnippet = createRawSnippet<
                    [{ amount: number }]
                >((getAmount) => {
                    const { amount } = getAmount();
                    const formatted = formatter.format(amount);
                    return {
                        render: () =>
                            `<div class="text-end font-medium">${formatted}</div>`,
                    };
                });
                return renderSnippet(amountCellSnippet, {
                    amount: row.original.amount,
                });
            },
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }: Prim.CellContext<Payment, unknown>) =>
                renderComponent(DataTableActions, {
                    id: row.original.id,
                    copyLabel: "Copy payment ID",
                    actions: [
                        {
                            label: "View details",
                            onclick: () =>
                                console.log(
                                    "View details for",
                                    row.original.id,
                                ),
                        },
                        {
                            label: "Edit payment",
                            onclick: () =>
                                console.log("Edit payment", row.original.id),
                        },
                        {
                            label: "Delete",
                            onclick: () =>
                                console.log("Delete payment", row.original.id),
                        },
                    ],
                }),
        },
    ];
</script>

<div class="container mx-auto py-10">
    <h1 class="mb-8 text-3xl font-bold">Data Table Demo</h1>

    <!-- Default table with multi-select -->
    <section class="mb-12">
        <h2 class="mb-4 text-2xl font-semibold">
            Multi-Select with Page Size Selector
        </h2>
        <p class="text-muted-foreground mb-4">
            Standard table with checkbox multi-selection and page size options
        </p>
        <DataTable
            {data}
            {columns}
            filterColumn="email"
            filterPlaceholder="Filter emails..."
            pageSize={5}
            pageSizeOptions={[5, 10, 20, 50]}
            selectionMode="multi"
            onPageChange={(page, action) =>
                console.log(`Page changed to: ${page}, action: ${action}`)}
            onPageSizeChange={(size) =>
                console.log("Page size changed to:", size)}
            onRowSelectionChange={(selected) =>
                console.log("Selected rows:", selected)}
        />
    </section>

    <!-- Single select table -->
    <section class="mb-12">
        <h2 class="mb-4 text-2xl font-semibold">Single Select</h2>
        <p class="text-muted-foreground mb-4">
            Table with single row selection (radio button behavior)
        </p>
        <DataTable
            {data}
            {columns}
            filterColumn="email"
            filterPlaceholder="Filter emails..."
            pageSize={5}
            selectionMode="single"
            onRowSelectionChange={(selected) =>
                console.log("Selected row:", selected)}
        />
    </section>

    <!-- No selection table -->
    <section class="mb-12">
        <h2 class="mb-4 text-2xl font-semibold">No Selection</h2>
        <p class="text-muted-foreground mb-4">
            Table without row selection capability
        </p>
        <DataTable
            {data}
            {columns}
            filterColumn="email"
            filterPlaceholder="Filter emails..."
            pageSize={5}
            selectionMode="none"
        />
    </section>

    <!-- Striped variant -->
    <section class="mb-12">
        <h2 class="mb-4 text-2xl font-semibold">Striped Variant</h2>
        <p class="text-muted-foreground mb-4">
            Alternating row background colors for better readability
        </p>
        <DataTable
            {data}
            {columns}
            variant="striped"
            filterColumn="email"
            filterPlaceholder="Filter emails..."
            pageSize={5}
        />
    </section>

    <!-- Bordered variant -->
    <section class="mb-12">
        <h2 class="mb-4 text-2xl font-semibold">Bordered Variant</h2>
        <p class="text-muted-foreground mb-4">
            Enhanced borders between columns and around the table
        </p>
        <DataTable
            {data}
            {columns}
            variant="bordered"
            filterColumn="email"
            filterPlaceholder="Filter emails..."
            pageSize={5}
        />
    </section>

    <!-- Compact variant -->
    <section class="mb-12">
        <h2 class="mb-4 text-2xl font-semibold">Compact Variant</h2>
        <p class="text-muted-foreground mb-4">
            Reduced padding and smaller text for dense data display
        </p>
        <DataTable
            {data}
            {columns}
            variant="compact"
            filterColumn="email"
            filterPlaceholder="Filter emails..."
            pageSize={8}
        />
    </section>

    <!-- Compact table without filter and column toggle -->
    <section class="mb-12">
        <h2 class="mb-4 text-2xl font-semibold">Minimal Configuration</h2>
        <p class="text-muted-foreground mb-4">
            No filter, no column toggle, larger page size
        </p>
        <DataTable
            {data}
            {columns}
            showFilter={false}
            showColumnToggle={false}
            pageSize={10}
        />
    </section>

    <!-- Simple table without pagination -->
    <section class="mb-12">
        <h2 class="mb-4 text-2xl font-semibold">No Pagination</h2>
        <p class="text-muted-foreground mb-4">
            Shows all rows without pagination controls
        </p>
        <DataTable {data} {columns} showPagination={false} pageSize={100} />
    </section>

    <!-- Expandable rows -->
    <section class="mb-12">
        <h2 class="mb-4 text-2xl font-semibold">Expandable Rows</h2>
        <p class="text-muted-foreground mb-4">
            Click the chevron to expand rows and view additional details
        </p>
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
                            ${payment.amount.toFixed(2)}
                        </div>
                        <div>
                            <span class="font-semibold">Email:</span>
                            {payment.email}
                        </div>
                    </div>
                    <div class="mt-4 p-3 bg-background rounded border">
                        <p class="text-xs text-muted-foreground">
                            Additional payment details and transaction history
                            would appear here.
                        </p>
                    </div>
                </div>
            {/snippet}
        </DataTable>
    </section>
</div>
