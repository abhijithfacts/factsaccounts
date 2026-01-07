"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { IconArrowLeft, IconCheck } from "@tabler/icons-react";
import Link from "next/link";

export default function NewCreditNote() {
    return (
        <div className="p-8 w-full mx-auto space-y-6">
            <Link href="/sales/credit-notes" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                <IconArrowLeft size={16} /> Back to List
            </Link>

            <div className="flex justify-between items-end">
                <h1 className="text-3xl font-bold">Create Credit Note</h1>
                <Button className="gap-2"><IconCheck size={18} /> Issue Credit</Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Credit Information</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label>Customer</Label>
                        <Select>
                            <SelectTrigger><SelectValue placeholder="Select Customer" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="c1">Alex Rivera</SelectItem>
                                <SelectItem value="c2">TechCorp</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Reference Invoice</Label>
                        <Input placeholder="e.g. INV-001" />
                    </div>
                    <div className="space-y-2">
                        <Label>Reason for Credit</Label>
                        <Select>
                            <SelectTrigger><SelectValue placeholder="Select Reason" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="return">Product Return</SelectItem>
                                <SelectItem value="damage">Damaged Goods</SelectItem>
                                <SelectItem value="pricing">Pricing Error</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Date Issued</Label>
                        <Input type="date" />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Description</TableHead>
                            <TableHead className="w-[100px]">Qty</TableHead>
                            <TableHead className="w-[150px]">Unit Credit</TableHead>
                            <TableHead className="text-right">Total</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell><Input placeholder="Item description" /></TableCell>
                            <TableCell><Input type="number" defaultValue="1" /></TableCell>
                            <TableCell><Input type="number" placeholder="0.00" /></TableCell>
                            <TableCell className="text-right font-bold">$0.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
}