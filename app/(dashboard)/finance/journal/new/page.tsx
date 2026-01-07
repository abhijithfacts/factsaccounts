"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IconTrash, IconPlus, IconArrowLeft, IconAlertCircle } from "@tabler/icons-react";
import Link from "next/link";

export default function NewJournalEntry() {
    const [lines, setLines] = React.useState([
        { id: 1, account: "", debit: 0, credit: 0 },
        { id: 2, account: "", debit: 0, credit: 0 },
    ]);

    const totalDebits = lines.reduce((acc, curr) => acc + curr.debit, 0);
    const totalCredits = lines.reduce((acc, curr) => acc + curr.credit, 0);
    const difference = totalDebits - totalCredits;

    return (
        <div className="p-8 w-full mx-auto space-y-6">
            <div className="flex justify-between items-center">
                <Link href="/finance/journal" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                    <IconArrowLeft size={16} /> Back to Journal
                </Link>
                <Button disabled={difference !== 0 || totalDebits === 0} className="px-8">
                    Post Journal Entry
                </Button>
            </div>

            <h1 className="text-3xl font-bold">New Journal Entry</h1>

            <Card>
                <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <Label>Date</Label>
                        <Input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                    </div>
                    <div className="space-y-2">
                        <Label>Reference #</Label>
                        <Input placeholder="e.g. ADJ-001" />
                    </div>
                    <div className="space-y-2 md:col-span-3">
                        <Label>Description / Memo</Label>
                        <Input placeholder="General description of this transaction" />
                    </div>
                </CardContent>
            </Card>

            <div className="border rounded-xl bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[40%]">Account</TableHead>
                            <TableHead>Debit</TableHead>
                            <TableHead>Credit</TableHead>
                            <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {lines.map((line, idx) => (
                            <TableRow key={line.id}>
                                <TableCell>
                                    <Input placeholder="Select Account (e.g. 1000 - Cash)" />
                                </TableCell>
                                <TableCell>
                                    <Input type="number" placeholder="0.00"
                                        onChange={(e) => {
                                            const newLines = [...lines];
                                            newLines[idx].debit = Number(e.target.value);
                                            setLines(newLines);
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input type="number" placeholder="0.00"
                                        onChange={(e) => {
                                            const newLines = [...lines];
                                            newLines[idx].credit = Number(e.target.value);
                                            setLines(newLines);
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="icon" className="text-destructive"><IconTrash size={16} /></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="p-4 bg-muted/20 flex justify-between items-center">
                    <Button variant="outline" size="sm" onClick={() => setLines([...lines, { id: Date.now(), account: "", debit: 0, credit: 0 }])}>
                        <IconPlus size={16} className="mr-2" /> Add Line
                    </Button>

                    <div className="flex gap-8 text-sm">
                        <div className="text-right">
                            <p className="text-muted-foreground">Total Debits</p>
                            <p className="font-bold text-lg">${totalDebits.toFixed(2)}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-muted-foreground">Total Credits</p>
                            <p className="font-bold text-lg">${totalCredits.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>

            {difference !== 0 && (
                <div className="flex items-center gap-2 p-4 rounded-lg bg-destructive/10 text-destructive text-sm font-medium">
                    <IconAlertCircle size={18} />
                    Out of Balance: Your debits and credits must match. Difference: ${Math.abs(difference).toFixed(2)}
                </div>
            )}
        </div>
    );
}