"use client"

import { IconArrowLeft, IconPrinter, IconFilter } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

const accountActivity = [
    { date: "2026-01-01", je: "JE-001", desc: "Opening Balance", debit: 30000.00, credit: 0, balance: 30000.00 },
    { date: "2026-01-04", je: "JE-042", desc: "Payment from INV-8821", debit: 2800.00, credit: 0, balance: 32800.00 },
    { date: "2026-01-05", je: "JE-045", desc: "Office Rent Payment", debit: 0, credit: 1500.00, balance: 31300.00 },
];

export default function AccountDetail({ params }: { params: { code: string } }) {
    return (
        <div className="p-8 space-y-6">
            <Link href="/finance/ledger" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                <IconArrowLeft size={16} /> Back to General Ledger
            </Link>

            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">1000 - Cash on Hand</h1>
                    <p className="text-muted-foreground text-sm uppercase font-semibold">Asset Account activity</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm"><IconFilter size={16} className="mr-2" /> Date Range</Button>
                    <Button variant="outline" size="sm"><IconPrinter size={16} className="mr-2" /> Print Statement</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-primary/5 border-primary/20">
                    <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Starting Balance</CardTitle></CardHeader>
                    <CardContent><div className="text-2xl font-bold">$30,000.00</div></CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Period Activity</CardTitle></CardHeader>
                    <CardContent><div className="text-2xl font-bold text-green-600">+$1,300.00</div></CardContent>
                </Card>
                <Card className="bg-slate-900 text-white">
                    <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Closing Balance</CardTitle></CardHeader>
                    <CardContent><div className="text-2xl font-bold">$31,300.00</div></CardContent>
                </Card>
            </div>

            <div className="border rounded-xl bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Journal Ref</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead className="text-right">Debit</TableHead>
                            <TableHead className="text-right">Credit</TableHead>
                            <TableHead className="text-right">Running Balance</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {accountActivity.map((row, i) => (
                            <TableRow key={i}>
                                <TableCell>{row.date}</TableCell>
                                <TableCell className="font-mono text-blue-600 cursor-pointer">{row.je}</TableCell>
                                <TableCell>{row.desc}</TableCell>
                                <TableCell className="text-right text-green-600">{row.debit > 0 ? row.debit.toFixed(2) : ""}</TableCell>
                                <TableCell className="text-right text-red-600">{row.credit > 0 ? row.credit.toFixed(2) : ""}</TableCell>
                                <TableCell className="text-right font-bold">${row.balance.toLocaleString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}