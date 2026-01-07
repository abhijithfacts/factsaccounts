"use client"

import * as React from "react"
import { IconHistory, IconDeviceFloppy, IconAlertTriangle, IconInfoCircle, IconArrowLeft } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function OpeningBalances() {
    const [balances, setBalances] = React.useState([
        { code: "1000", name: "Cash on Hand", debit: 25000, credit: 0 },
        { code: "1200", name: "Accounts Receivable", debit: 5200, credit: 0 },
        { code: "2000", name: "Accounts Payable", debit: 0, credit: 3100 },
        { code: "3000", name: "Retained Earnings", debit: 0, credit: 27100 },
    ]);

    const totalDebits = balances.reduce((acc, curr) => acc + curr.debit, 0);
    const totalCredits = balances.reduce((acc, curr) => acc + curr.credit, 0);
    const isBalanced = totalDebits === totalCredits;

    return (
        <div className="p-8 w-full mx-auto space-y-6">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Link href="/finance/ledger">
                        <Button variant="ghost" size="icon"><IconArrowLeft size={20} /></Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Set Opening Balances</h1>
                        <p className="text-sm text-muted-foreground">Initialize your accounts for the fiscal year 2026.</p>
                    </div>
                </div>
                <Button disabled={!isBalanced} className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                    <IconDeviceFloppy size={18} /> Finalize Balances
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg">Account Balances</CardTitle>
                        <Badge variant="outline" className="gap-1">
                            <IconHistory size={14} /> Migration Mode
                        </Badge>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[120px]">Code</TableHead>
                                    <TableHead>Account Name</TableHead>
                                    <TableHead className="w-[150px]">Debit</TableHead>
                                    <TableHead className="w-[150px]">Credit</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {balances.map((row, idx) => (
                                    <TableRow key={row.code}>
                                        <TableCell className="font-mono text-xs">{row.code}</TableCell>
                                        <TableCell className="font-medium">{row.name}</TableCell>
                                        <TableCell>
                                            <Input
                                                type="number"
                                                className="h-8"
                                                value={row.debit}
                                                onChange={(e) => {
                                                    const newBals = [...balances];
                                                    newBals[idx].debit = Number(e.target.value);
                                                    setBalances(newBals);
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Input
                                                type="number"
                                                className="h-8"
                                                value={row.credit}
                                                onChange={(e) => {
                                                    const newBals = [...balances];
                                                    newBals[idx].credit = Number(e.target.value);
                                                    setBalances(newBals);
                                                }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <div className="space-y-6">
                    <Card className={isBalanced ? "border-emerald-200 bg-emerald-50/30" : "border-amber-200 bg-amber-50/30"}>
                        <CardHeader>
                            <CardTitle className="text-sm font-bold uppercase tracking-wider">Balance Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Total Debits</span>
                                <span className="font-bold text-emerald-600">${totalDebits.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Total Credits</span>
                                <span className="font-bold text-blue-600">${totalCredits.toLocaleString()}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-bold">Difference</span>
                                <span className={`text-xl font-black ${isBalanced ? "text-emerald-600" : "text-amber-600"}`}>
                                    ${(totalDebits - totalCredits).toLocaleString()}
                                </span>
                            </div>
                            {!isBalanced && (
                                <div className="p-3 rounded-md bg-amber-100 text-amber-800 text-[11px] flex gap-2">
                                    <IconAlertTriangle size={16} className="shrink-0" />
                                    <span>Opening balances must equal zero. Adjust Equity or Retained Earnings to balance.</span>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-xs font-bold uppercase flex items-center gap-2">
                                <IconInfoCircle size={14} /> Help
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-xs text-muted-foreground space-y-2">
                            <p>Enter the closing balances from your previous accounting system as of Dec 31, 2025.</p>
                            <p>Common accounts to check:</p>
                            <ul className="list-disc pl-4 space-y-1">
                                <li>Bank Statements</li>
                                <li>Accounts Receivable Aging</li>
                                <li>Inventory Valuation</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

// Helper components assumed (Badge, Separator, etc. from Shadcn)