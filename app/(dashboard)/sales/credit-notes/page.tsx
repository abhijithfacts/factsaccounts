"use client"

import { IconReceiptRefund, IconPlus, IconFileDescription, IconUser } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const creditNotes = [
    { id: "CN-001", customer: "Alex Rivera", amount: "$50.00", date: "Jan 04, 2026", reason: "Product Return", status: "Applied" },
    { id: "CN-002", customer: "TechCorp", amount: "$120.00", date: "Jan 06, 2026", reason: "Pricing Correction", status: "Open" },
];

export default function CreditNotesPage() {
    return (
        <div className="p-8 space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Credit Notes</h1>
                    <p className="text-sm text-muted-foreground">Manage refunds and customer credits.</p>
                </div>
                <Link href="/sales/credit-notes/new">
                    <Button className="gap-2 bg-orange-600 hover:bg-orange-700">
                        <IconPlus size={18} /> New Credit Note
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-3">
                {creditNotes.map((cn) => (
                    <div key={cn.id} className="flex items-center justify-between p-4 border rounded-xl bg-card hover:shadow-md transition-all">
                        <div className="flex gap-4 items-center">
                            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600">
                                <IconReceiptRefund size={24} />
                            </div>
                            <div>
                                <div className="font-bold text-lg">{cn.id}</div>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1"><IconUser size={14} /> {cn.customer}</span>
                                    <span>•</span>
                                    <span>{cn.reason}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-8">
                            <div className="text-right">
                                <div className="text-lg font-bold text-orange-600">-{cn.amount}</div>
                                <Badge variant={cn.status === "Applied" ? "secondary" : "outline"} className="rounded-full">
                                    {cn.status}
                                </Badge>
                            </div>
                            <Button variant="ghost" size="icon"><IconFileDescription size={18} /></Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}