"use client"

import { IconBook2, IconSearch, IconArrowUpRight, IconArrowDownLeft, IconFileSpreadsheet } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const ledgerAccounts = [
    { code: "1000", name: "Cash on Hand", type: "Asset", debit: "$45,000.00", credit: "$12,200.00", balance: "$32,800.00" },
    { code: "1200", name: "Accounts Receivable", type: "Asset", debit: "$8,400.00", credit: "$2,100.00", balance: "$6,300.00" },
    { code: "2000", name: "Accounts Payable", type: "Liability", debit: "$1,500.00", credit: "$4,500.00", balance: "$3,000.00" },
    { code: "4000", name: "Sales Revenue", type: "Revenue", debit: "$0.00", credit: "$52,000.00", balance: "$52,000.00" },
];

export default function LedgerOverview() {
    return (
        <div className="p-8 space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">General Ledger</h1>
                    <p className="text-sm text-muted-foreground">Summarized balances for all chart of accounts.</p>
                </div>
                <Button variant="outline" className="gap-2">
                    <IconFileSpreadsheet size={18} /> Export Ledger
                </Button>
            </div>

            <div className="relative max-w-sm">
                <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Filter by account code or name..." className="pl-9" />
            </div>

            <div className="border rounded-xl bg-card overflow-hidden">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead className="w-[100px]">Account</TableHead>
                            <TableHead>Account Name</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead className="text-right">Total Debits</TableHead>
                            <TableHead className="text-right">Total Credits</TableHead>
                            <TableHead className="text-right">Net Balance</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {ledgerAccounts.map((acc) => (
                            <TableRow key={acc.code} className="group hover:bg-muted/30">
                                <TableCell className="font-mono text-xs font-bold">{acc.code}</TableCell>
                                <TableCell>
                                    <Link href={`/finance/ledger/${acc.code}`} className="hover:underline text-primary font-medium">
                                        {acc.name}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Badge variant="outline" className="font-normal">{acc.type}</Badge>
                                </TableCell>
                                <TableCell className="text-right text-muted-foreground">{acc.debit}</TableCell>
                                <TableCell className="text-right text-muted-foreground">{acc.credit}</TableCell>
                                <TableCell className="text-right font-bold">{acc.balance}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}