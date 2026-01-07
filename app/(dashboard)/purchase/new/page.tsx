"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    IconTrash,
    IconPlus,
    IconTruckDelivery,
    IconFileCheck,
    IconChevronLeft,
    IconBuildingStore
} from "@tabler/icons-react"
import Link from "next/link"

export default function NewPurchaseOrderPage() {
    const [items, setItems] = React.useState([
        { id: 1, sku: "", name: "", qty: 1, cost: 0 },
    ])

    const addItem = () => {
        setItems([...items, { id: Date.now(), sku: "", name: "", qty: 1, cost: 0 }])
    }

    const subtotal = items.reduce((acc, item) => acc + item.qty * item.cost, 0)

    return (
        <div className="p-8 w-full mx-auto space-y-6">
            {/* Top Navigation & Actions */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/purchase-orders">
                        <Button variant="ghost" size="icon">
                            <IconChevronLeft size={20} />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">New Purchase Order</h1>
                        <p className="text-sm text-muted-foreground">Request inventory or services from a vendor.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="gap-2">
                        Save as Draft
                    </Button>
                    <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                        <IconFileCheck size={18} /> Approve & Send
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Left Side: Vendor & Order Details */}
                <div className="lg:col-span-3 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <IconBuildingStore size={20} className="text-muted-foreground" />
                                Vendor Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label>Vendor</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a vendor" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="v1">Acme Supplies Co.</SelectItem>
                                        <SelectItem value="v2">Global Logistics Ltd</SelectItem>
                                        <SelectItem value="v3">TechParts Inc.</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label>Purchase Order #</Label>
                                <Input defaultValue="PO-2026-8842" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="pt-6">
                            <Table>
                                <TableHeader className="bg-muted/50">
                                    <TableRow>
                                        <TableHead className="w-[150px]">SKU / Ref</TableHead>
                                        <TableHead>Item Name</TableHead>
                                        <TableHead className="w-[100px]">Qty</TableHead>
                                        <TableHead className="w-[120px]">Unit Cost</TableHead>
                                        <TableHead className="text-right">Total</TableHead>
                                        <TableHead className="w-[50px]"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {items.map((item, index) => (
                                        <TableRow key={item.id}>
                                            <TableCell>
                                                <Input placeholder="SKU-001" className="font-mono text-xs" />
                                            </TableCell>
                                            <TableCell>
                                                <Input placeholder="Item description" />
                                            </TableCell>
                                            <TableCell>
                                                <Input
                                                    type="number"
                                                    value={item.qty}
                                                    onChange={(e) => {
                                                        const newItems = [...items];
                                                        newItems[index].qty = Number(e.target.value);
                                                        setItems(newItems);
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Input
                                                    type="number"
                                                    placeholder="0.00"
                                                    onChange={(e) => {
                                                        const newItems = [...items];
                                                        newItems[index].cost = Number(e.target.value);
                                                        setItems(newItems);
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell className="text-right font-medium align-middle">
                                                ${(item.qty * item.cost).toLocaleString()}
                                            </TableCell>
                                            <TableCell>
                                                <Button variant="ghost" size="icon" className="text-destructive">
                                                    <IconTrash size={16} />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <Button variant="ghost" className="mt-4 text-blue-600 gap-2" onClick={addItem}>
                                <IconPlus size={16} /> Add Item from Inventory
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Side: Logistics & Totals */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                                Shipping & Delivery
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label className="flex items-center gap-2">
                                    <IconTruckDelivery size={16} /> Expected Date
                                </Label>
                                <Input type="date" />
                            </div>
                            <div className="space-y-2">
                                <Label>Ship Via</Label>
                                <Select defaultValue="ground">
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="ground">Standard Ground</SelectItem>
                                        <SelectItem value="express">Express Air</SelectItem>
                                        <SelectItem value="pickup">Self-Pickup</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-muted/20 border-dashed">
                        <CardContent className="pt-6 space-y-4">
                            <div className="flex justify-between text-sm">
                                <span>Subtotal</span>
                                <span className="font-semibold">${subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Est. Shipping</span>
                                <span className="font-semibold">$0.00</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between items-end">
                                <span className="text-sm font-bold">Total Cost</span>
                                <span className="text-2xl font-bold text-blue-600">
                                    ${subtotal.toLocaleString()}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}