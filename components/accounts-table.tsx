"use client"

import * as React from "react"
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    IconPlus,
    IconSearch,
    IconDotsVertical,
    IconArrowUpRight,
    IconArrowDownLeft
} from "@tabler/icons-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

const accounts = [
    { code: "1000", name: "Operating Account", type: "Asset", detail: "Cash", balance: 45200.50 },
    { code: "1100", name: "Accounts Receivable", type: "Asset", detail: "Current Asset", balance: 12400.00 },
    { code: "2000", name: "Accounts Payable", type: "Liability", detail: "Current Liability", balance: 8320.00 },
    { code: "3000", name: "Owner's Equity", type: "Equity", detail: "Equity", balance: 50000.00 },
    { code: "4000", name: "Product Sales", type: "Revenue", detail: "Income", balance: 125400.00 },
    { code: "5000", name: "Rent Expense", type: "Expense", detail: "Operating Expense", balance: 2400.00 },
]

export function AccountsTable() {
    const [searchTerm, setSearchTerm] = React.useState("")

    const filteredAccounts = accounts.filter(acc =>
        acc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        acc.code.includes(searchTerm)
    )

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
                <div className="relative flex-1 max-w-sm">
                    <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search accounts..."
                        className="pl-9"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">Import</Button>
                    <Button className="gap-2">
                        <IconPlus size={18} /> New Account
                    </Button>
                </div>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-muted/30">
                            <TableHead className="w-[100px]">Code</TableHead>
                            <TableHead>Account Name</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Detail Type</TableHead>
                            <TableHead className="text-right">Balance</TableHead>
                            <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredAccounts.map((acc) => (
                            <TableRow key={acc.code}>
                                <TableCell className="font-mono text-xs font-semibold">{acc.code}</TableCell>
                                <TableCell className="font-medium">{acc.name}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant="outline"
                                        className={
                                            acc.type === "Asset" ? "border-blue-200 text-blue-700 bg-blue-50 dark:bg-blue-900/20" :
                                                acc.type === "Liability" ? "border-orange-200 text-orange-700 bg-orange-50 dark:bg-orange-900/20" :
                                                    "border-slate-200"
                                        }
                                    >
                                        {acc.type}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-muted-foreground text-sm">{acc.detail}</TableCell>
                                <TableCell className="text-right font-mono">
                                    ${acc.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <IconDotsVertical size={16} />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>Edit Account</DropdownMenuItem>
                                            <DropdownMenuItem>View Journal</DropdownMenuItem>
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