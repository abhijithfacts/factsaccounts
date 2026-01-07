// components/admin/setup/settings-table.tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function ChartOfAccounts({ accounts }) {
    return (
        <div className="rounded-md border bg-card">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Code</TableHead>
                        <TableHead>Account Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Tax Rate</TableHead>
                        <TableHead className="text-right">Balance</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {accounts.map((acc) => (
                        <TableRow key={acc.code}>
                            <TableCell className="font-mono text-xs">{acc.code}</TableCell>
                            <TableCell className="font-medium">{acc.name}</TableCell>
                            <TableCell><Badge variant="outline">{acc.type}</Badge></TableCell>
                            <TableCell>{acc.taxRate}%</TableCell>
                            <TableCell className="text-right font-semibold">
                                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(acc.balance)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}