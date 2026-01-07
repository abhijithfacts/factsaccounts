"use client"

import { IconBuildingStore, IconPlus, IconSearch, IconPhone, IconMail, IconExternalLink } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

const vendors = [
    { id: "VEN-001", name: "Acme Supplies Co.", category: "Office Supplies", balance: "$2,450.00", status: "Active", contact: "John Doe" },
    { id: "VEN-002", name: "TechParts Inc.", category: "Hardware", balance: "$0.00", status: "Active", contact: "Sarah Smith" },
    { id: "VEN-003", name: "Global Logistics", category: "Shipping", balance: "$850.20", status: "On Hold", contact: "Mike Ross" },
];

export default function VendorsPage() {
    return (
        <div className="p-8 space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Vendors</h1>
                    <p className="text-sm text-muted-foreground">Manage your suppliers and procurement contacts.</p>
                </div>
                <Link href="/purchase/vendors/new">
                    <Button className="gap-2 bg-slate-900 dark:bg-slate-50 dark:text-slate-900">
                        <IconPlus size={18} /> Add Vendor
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 border rounded-xl bg-card">
                    <div className="text-xs font-semibold text-muted-foreground uppercase">Total Vendors</div>
                    <div className="text-2xl font-bold">142</div>
                </div>
                <div className="p-4 border rounded-xl bg-card">
                    <div className="text-xs font-semibold text-muted-foreground uppercase">Accounts Payable</div>
                    <div className="text-2xl font-bold text-red-600">$12,300.20</div>
                </div>
            </div>

            <div className="relative">
                <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by vendor name or category..." className="pl-9 max-w-sm" />
            </div>

            <div className="border rounded-xl bg-card overflow-hidden">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead>Vendor Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Primary Contact</TableHead>
                            <TableHead className="text-right">Balance Due</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {vendors.map((v) => (
                            <TableRow key={v.id}>
                                <TableCell>
                                    <div className="font-bold">{v.name}</div>
                                    <div className="text-xs text-muted-foreground font-mono">{v.id}</div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant="outline" className="font-normal">{v.category}</Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="text-sm">{v.contact}</div>
                                    <div className="flex gap-2 mt-1">
                                        <IconPhone size={14} className="text-muted-foreground cursor-pointer hover:text-primary" />
                                        <IconMail size={14} className="text-muted-foreground cursor-pointer hover:text-primary" />
                                    </div>
                                </TableCell>
                                <TableCell className={`text-right font-mono font-medium ${v.balance !== "$0.00" ? "text-red-600" : ""}`}>
                                    {v.balance}
                                </TableCell>
                                <TableCell>
                                    <Badge variant={v.status === "Active" ? "secondary" : "destructive"}>
                                        {v.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="icon"><IconExternalLink size={16} /></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}