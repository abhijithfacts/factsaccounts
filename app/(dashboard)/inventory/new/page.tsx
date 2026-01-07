"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IconBox, IconBarcode, IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function AddInventoryItem() {
    return (
        <div className="p-8 w-full mx-auto space-y-6">
            <Link href="/inventory" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                <IconArrowLeft size={16} /> Back to Inventory
            </Link>

            <div className="flex justify-between items-end">
                <h1 className="text-3xl font-bold">Add New Product</h1>
                <Button className="px-8">Save Product</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2">
                    <CardHeader><CardTitle>General Information</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Product Name</Label>
                            <Input placeholder="e.g. Ergonomic Keyboard" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>SKU (Barcode)</Label>
                                <div className="relative">
                                    <IconBarcode className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input className="pl-9" placeholder="Unique SKU" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Category</Label>
                                <Input placeholder="e.g. Hardware" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Description</Label>
                            <textarea className="w-full min-h-[100px] border rounded-md p-2 text-sm bg-transparent" />
                        </div>
                    </CardContent>
                </Card>

                <div className="space-y-6">
                    <Card>
                        <CardHeader><CardTitle className="text-sm uppercase text-muted-foreground">Inventory Levels</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Initial Stock</Label>
                                <Input type="number" defaultValue="0" />
                            </div>
                            <div className="space-y-2">
                                <Label>Reorder Point (Min)</Label>
                                <Input type="number" defaultValue="5" />
                                <p className="text-[10px] text-muted-foreground italic">Notify when stock falls below this.</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader><CardTitle className="text-sm uppercase text-muted-foreground">Pricing</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Cost Price</Label>
                                <Input type="number" placeholder="0.00" />
                            </div>
                            <div className="space-y-2">
                                <Label>Selling Price</Label>
                                <Input type="number" placeholder="0.00" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}