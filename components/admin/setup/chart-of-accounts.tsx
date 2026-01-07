"use client"

import * as React from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    MoreHorizontal,
    Plus,
    ArrowUpRight,
    ArrowDownLeft
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const accounts = [
    { code: "1000", name: "Cash on Hand", type: "Asset", category: "Current Asset", balance: 25400.00 },
    { code: "1200", name: "Accounts Receivable", type: "Asset", category: "Current Asset", balance: 12500.50 },
    { code: "2000", name: "Accounts Payable", type: "Liability", category: "Current Liability", balance: 8400.00 },
    { code: "3000", name: "Retained Earnings", type: "Equity", category: "Equity", balance: 45000.00 },
    { code: "4000", name: "Sales Revenue", type: "Revenue", category: "Operating Revenue", balance: 125000.00 },
    { code: "5000", name: "Office Supplies", type: "Expense", category: "Operating Expense", balance: 1200.00 },
]

export default function ChartOfAccounts() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h3 className="text-lg font-medium">General Ledger Accounts</h3>
                    <p className="text-sm text-muted-foreground">Manage your organization's financial structure and categories.</p>
                </div>
                <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" /> Add Account
                </Button>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Code</TableHead>
                            <TableHead>Account Name</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead className="text-right">Balance</TableHead>
                            <TableHead className="w-[70px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {accounts.map((account) => (
                            <TableRow key={account.code}>
                                <TableCell className="font-mono text-xs font-bold">{account.code}</TableCell>
                                <TableCell className="font-medium">{account.name}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={account.type === "Asset" || account.type === "Revenue" ? "default" : "outline"}
                                        className="capitalize"
                                    >
                                        {account.type}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-muted-foreground text-sm">{account.category}</TableCell>
                                <TableCell className="text-right font-mono">
                                    <span className={account.balance < 0 ? "text-destructive" : ""}>
                                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(account.balance)}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>Edit Account</DropdownMenuItem>
                                            <DropdownMenuItem>View Ledger</DropdownMenuItem>
                                            <DropdownMenuItem className="text-destructive">Archive</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}