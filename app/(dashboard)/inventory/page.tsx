"use client"

import { IconPackage, IconAlertTriangle, IconPlus, IconSearch, IconHistory } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

const inventoryItems = [
    { id: "SKU-102", name: "Wireless Mouse", category: "Electronics", stock: 12, minStock: 20, price: "$25.00", status: "Low Stock" },
    { id: "SKU-105", name: "Office Chair", category: "Furniture", stock: 45, minStock: 10, price: "$150.00", status: "In Stock" },
    { id: "SKU-201", name: "USB-C Cable", category: "Accessories", stock: 0, minStock: 50, price: "$12.00", status: "Out of Stock" },
];

export default function InventoryPage() {
    return (
        <div className="p-8 space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold">Inventory</h1>
                    <p className="text-muted-foreground">Monitor stock levels and warehouse movement.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="gap-2"><IconHistory size={18} /> Movement Log</Button>
                    <Link href="/inventory/new">
                        <Button className="gap-2"><IconPlus size={18} /> Add Product</Button>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-xl bg-card">
                    <div className="text-sm text-muted-foreground">Total Items</div>
                    <div className="text-2xl font-bold">1,284</div>
                </div>
                <div className="p-4 border rounded-xl bg-orange-50 dark:bg-orange-900/10 border-orange-200">
                    <div className="text-sm text-orange-600 font-medium flex items-center gap-1">
                        <IconAlertTriangle size={16} /> Low Stock Alerts
                    </div>
                    <div className="text-2xl font-bold text-orange-700">14 Items</div>
                </div>
                <div className="p-4 border rounded-xl bg-card">
                    <div className="text-sm text-muted-foreground">Inventory Value</div>
                    <div className="text-2xl font-bold">$42,500.00</div>
                </div>
            </div>

            <div className="flex items-center gap-4 py-2">
                <div className="relative flex-1">
                    <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search by SKU or Product Name..." className="pl-9" />
                </div>
                <Button variant="secondary">Filter Category</Button>
            </div>

            <div className="border rounded-lg bg-card overflow-hidden">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead>Product & SKU</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead className="text-center">Stock Level</TableHead>
                            <TableHead>Unit Price</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {inventoryItems.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    <div className="font-bold">{item.name}</div>
                                    <div className="text-xs font-mono text-muted-foreground">{item.id}</div>
                                </TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell className="text-center">
                                    <div className="font-medium">{item.stock}</div>
                                    <div className="text-[10px] text-muted-foreground">Min: {item.minStock}</div>
                                </TableCell>
                                <TableCell className="font-medium">{item.price}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={item.status === "In Stock" ? "secondary" : "destructive"}
                                        className={item.status === "Low Stock" ? "bg-orange-500 hover:bg-orange-600 border-none" : ""}
                                    >
                                        {item.status}
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