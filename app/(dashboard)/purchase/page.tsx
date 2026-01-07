"use client"

import { IconTruckDelivery, IconDownload, IconPlus, IconShoppingCart } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const purchaseOrders = [
    {
        id: "PO-8842",
        vendor: "Acme Supplies Co.",
        amount: "$2,450.00",
        date: "Jan 05, 2026",
        status: "Received",
        delivery: "Delivered"
    },
    {
        id: "PO-8843",
        vendor: "TechParts Inc.",
        amount: "$12,200.00",
        date: "Jan 10, 2026",
        status: "Pending",
        delivery: "In Transit"
    },
];

export default function PurchaseOrders() {
    return (
        <div className="p-8 space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">Purchase Orders</h1>
                    <p className="text-sm text-muted-foreground">Manage outgoing orders and vendor deliveries.</p>
                </div>
                <Link href="/purchase-orders/new">
                    <Button className="gap-2">
                        <IconPlus size={18} /> New Purchase Order
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {purchaseOrders.map((po) => (
                    <div
                        key={po.id}
                        className="flex items-center justify-between p-4 border rounded-lg bg-card hover:border-primary/50 transition-all group"
                    >
                        <div className="flex gap-4 items-center">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600">
                                <IconShoppingCart size={24} />
                            </div>
                            <div>
                                <div className="font-bold flex items-center gap-2">
                                    {po.id} <span className="text-muted-foreground/50">|</span> {po.vendor}
                                </div>
                                <div className="text-sm text-muted-foreground flex items-center gap-1">
                                    <IconTruckDelivery size={14} /> Expected: {po.date}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-8">
                            {/* Delivery Status */}
                            <div className="hidden md:block text-right">
                                <div className="text-xs uppercase text-muted-foreground font-semibold mb-1">Logistics</div>
                                <Badge variant="outline" className="rounded-full font-normal">
                                    {po.delivery}
                                </Badge>
                            </div>

                            {/* Financial Status */}
                            <div className="text-right min-w-[100px]">
                                <div className="font-bold">{po.amount}</div>
                                <Badge
                                    variant={po.status === "Received" ? "secondary" : "destructive"}
                                    className="text-[10px] uppercase px-2"
                                >
                                    {po.status}
                                </Badge>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-1">
                                <Button variant="ghost" size="icon" title="Download PDF">
                                    <IconDownload size={18} />
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}