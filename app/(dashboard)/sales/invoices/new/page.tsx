"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
    IconTrash,
    IconPlus,
    IconDeviceFloppy,
    IconPrinter,
    IconSend,
    IconArrowLeft,
    IconRefresh // Added for "Update" feel
} from "@tabler/icons-react"
import Link from "next/link"

// Define a type for your Line Item
interface LineItem {
    id: number;
    description: string;
    quantity: number;
    price: number;
}

interface InvoicePageProps {
    params?: { id?: string }; 
    initialData?: any;        
}

export default function InvoiceFormPage({ params, initialData }: InvoicePageProps) {
    // 1. Determine Mode
    const isEditMode = !!params?.id || !!initialData;

    // 2. Initialize State
    // If editing, we'd normally fetch data here or use initialData
    const [items, setItems] = React.useState<LineItem[]>(
        initialData?.items || [{ id: 1, description: "", quantity: 1, price: 0 }]
    );

    const [invoiceDetails, setInvoiceDetails] = React.useState({
        customer: initialData?.customer || "",
        invoiceNo: initialData?.invoiceNo || "INV-2026-001",
        date: initialData?.date || "",
        dueDate: initialData?.dueDate || "",
        notes: initialData?.notes || ""
    })

    // Actions
    const addItem = () => {
        setItems([...items, { id: Date.now(), description: "", quantity: 1, price: 0 }])
    }

    const removeItem = (id: number) => {
        if (items.length > 1) {
            setItems(items.filter((item) => item.id !== id))
        }
    }

    const updateItem = (index: number, field: keyof LineItem, value: string | number) => {
        const newItems = [...items]
        newItems[index] = { ...newItems[index], [field]: value }
        setItems(newItems)
    }

    // Calculations
    const subtotal = items.reduce((acc, item) => acc + item.quantity * item.price, 0)
    const tax = subtotal * 0.1
    const total = subtotal + tax

    return (
        <div className="p-8 w-full mx-auto space-y-6">
            {/* Header Actions */}
            <div className="flex items-center justify-between">
                <Link
                    href="/sales/invoices"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                    <IconArrowLeft size={16} /> Back to List
                </Link>
            </div>

            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                        {isEditMode ? `Edit Invoice` : "New Invoice"}
                    </h1>
                    {isEditMode && <p className="text-muted-foreground">Editing {invoiceDetails.invoiceNo}</p>}
                </div>

                <div className="flex gap-2">
                    <Button variant="outline" className="gap-2">
                        <IconPrinter size={18} /> Print
                    </Button>
                    <Button variant="outline" className="gap-2">
                        <IconDeviceFloppy size={18} /> {isEditMode ? "Save Changes" : "Save Draft"}
                    </Button>
                    <Button className="gap-2">
                        {isEditMode ? (
                            <>
                                <IconRefresh size={18} /> Update Invoice
                            </>
                        ) : (
                            <>
                                <IconSend size={18} /> Send Invoice
                            </>
                        )}
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Main Invoice Form */}
                <Card className="md:col-span-2">
                    <CardContent className="pt-6 space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="customer">Customer</Label>
                                <Input
                                    id="customer"
                                    value={invoiceDetails.customer}
                                    onChange={(e) => setInvoiceDetails({ ...invoiceDetails, customer: e.target.value })}
                                    placeholder="Select or type customer name"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="invoice-no">Invoice Number</Label>
                                <Input
                                    id="invoice-no"
                                    value={invoiceDetails.invoiceNo}
                                    onChange={(e) => setInvoiceDetails({ ...invoiceDetails, invoiceNo: e.target.value })}
                                    disabled={isEditMode} // Usually ID numbers are read-only in edit mode
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="date">Invoice Date</Label>
                                <Input
                                    id="date"
                                    type="date"
                                    value={invoiceDetails.date}
                                    onChange={(e) => setInvoiceDetails({ ...invoiceDetails, date: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="due-date">Due Date</Label>
                                <Input
                                    id="due-date"
                                    type="date"
                                    value={invoiceDetails.dueDate}
                                    onChange={(e) => setInvoiceDetails({ ...invoiceDetails, dueDate: e.target.value })}
                                />
                            </div>
                        </div>

                        <Separator />

                        {/* Line Items Table */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg">Line Items</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[40%]">Description</TableHead>
                                        <TableHead>Qty</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead>Amount</TableHead>
                                        <TableHead className="w-[50px]"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {items.map((item, index) => (
                                        <TableRow key={item.id}>
                                            <TableCell>
                                                <Input
                                                    placeholder="Item name or service"
                                                    value={item.description}
                                                    onChange={(e) => updateItem(index, "description", e.target.value)}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Input
                                                    type="number"
                                                    value={item.quantity}
                                                    onChange={(e) => updateItem(index, "quantity", Number(e.target.value))}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Input
                                                    type="number"
                                                    placeholder="0.00"
                                                    value={item.price}
                                                    onChange={(e) => updateItem(index, "price", Number(e.target.value))}
                                                />
                                            </TableCell>
                                            <TableCell className="font-medium align-middle">
                                                ${(item.quantity * item.price).toFixed(2)}
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="text-destructive hover:bg-destructive/10"
                                                    onClick={() => removeItem(item.id)}
                                                    disabled={items.length === 1}
                                                >
                                                    <IconTrash size={16} />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <Button variant="outline" size="sm" className="gap-2" onClick={addItem}>
                                <IconPlus size={16} /> Add Line Item
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Summary Sidebar */}
                <div className="space-y-6">
                    <Card>
                        <CardContent className="pt-6 space-y-4">
                            <h3 className="font-bold text-lg">Total Summary</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Tax (10%)</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                                <Separator />
                                <div className="flex justify-between text-base font-bold">
                                    <span>Total Amount</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="pt-6 space-y-2">
                            <Label htmlFor="notes">Notes / Terms</Label>
                            <textarea
                                id="notes"
                                value={invoiceDetails.notes}
                                onChange={(e) => setInvoiceDetails({ ...invoiceDetails, notes: e.target.value })}
                                className="w-full min-h-[100px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                placeholder="Payment terms, bank details, etc."
                            />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}