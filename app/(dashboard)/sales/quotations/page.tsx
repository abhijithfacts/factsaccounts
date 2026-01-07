"use client"

import { IconPlus, IconDotsVertical, IconCheck, IconX, IconSend } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";

const quotations = [
    { id: "QT-1001", customer: "Horizon Ventures", date: "Jan 06, 2026", expiry: "Jan 20, 2026", amount: "$4,200.00", status: "Sent" },
    { id: "QT-1002", customer: "Blue Sky Media", date: "Jan 05, 2026", expiry: "Jan 12, 2026", amount: "$1,850.00", status: "Accepted" },
    { id: "QT-1003", customer: "Initech Corp", date: "Jan 02, 2026", expiry: "Jan 09, 2026", amount: "$900.00", status: "Expired" },
];

export default function QuotationsPage() {
    return (
        <div className="p-8 space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Quotations</h1>
                    <p className="text-sm text-muted-foreground">Draft and send price estimates to your leads.</p>
                </div>
                <Link href="/sales/quotations/new">
                    <Button className="gap-2 bg-indigo-600 hover:bg-indigo-700">
                        <IconPlus size={18} /> New Quotation
                    </Button>
                </Link>
            </div>

            <div className="border rounded-xl bg-card">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-muted/50">
                            <TableHead>Quote #</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Expires</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {quotations.map((qt) => (
                            <TableRow key={qt.id}>
                                <TableCell className="font-mono font-medium">{qt.id}</TableCell>
                                <TableCell>{qt.customer}</TableCell>
                                <TableCell>{qt.date}</TableCell>
                                <TableCell className="text-muted-foreground">{qt.expiry}</TableCell>
                                <TableCell className="text-right font-bold">{qt.amount}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={qt.status === "Accepted" ? "secondary" : "outline"}
                                        className={
                                            qt.status === "Accepted" ? "bg-green-100 text-green-700 border-none" :
                                                qt.status === "Expired" ? "bg-red-50 text-red-600 border-red-100" : ""
                                        }
                                    >
                                        {qt.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon"><IconDotsVertical size={16} /></Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem className="gap-2"><IconCheck size={14} /> Convert to Invoice</DropdownMenuItem>
                                            <DropdownMenuItem className="gap-2"><IconSend size={14} /> Resend Email</DropdownMenuItem>
                                            <DropdownMenuItem className="gap-2 text-destructive"><IconX size={14} /> Mark as Declined</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}