"use client"

import { IconBook, IconPlus, IconSearch, IconFilter, IconCalendar } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

const journalEntries = [
    { id: "JE-001", date: "Jan 06, 2026", reference: "INV-8821", description: "Sales Revenue Recognition", amount: "$1,200.00", status: "Posted" },
    { id: "JE-002", date: "Jan 05, 2026", reference: "PO-4412", description: "Inventory Purchase - Acme", amount: "$4,500.00", status: "Posted" },
    { id: "JE-003", date: "Jan 05, 2026", reference: "ADJ-001", description: "Year-end Depreciation Adjustment", amount: "$300.00", status: "Draft" },
];

export default function JournalPage() {
    return (
        <div className="p-8 space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">General Journal</h1>
                    <p className="text-sm text-muted-foreground">View and manage all double-entry accounting records.</p>
                </div>
                <Link href="/finance/journal/new">
                    <Button className="gap-2">
                        <IconPlus size={18} /> New Journal Entry
                    </Button>
                </Link>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                    <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search references or descriptions..." className="pl-9" />
                </div>
                <Button variant="outline" className="gap-2"><IconFilter size={16} /> Filter</Button>
            </div>

            <div className="border rounded-xl bg-card overflow-hidden">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead className="w-[120px]">Date</TableHead>
                            <TableHead>Journal ID</TableHead>
                            <TableHead>Reference</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead className="text-right">Total Amount</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {journalEntries.map((je) => (
                            <TableRow key={je.id} className="cursor-pointer hover:bg-muted/30">
                                <TableCell className="text-muted-foreground">{je.date}</TableCell>
                                <TableCell className="font-bold">{je.id}</TableCell>
                                <TableCell className="font-mono text-xs">{je.reference}</TableCell>
                                <TableCell>{je.description}</TableCell>
                                <TableCell className="text-right font-medium">{je.amount}</TableCell>
                                <TableCell>
                                    <Badge variant={je.status === "Posted" ? "secondary" : "outline"}>
                                        {je.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}