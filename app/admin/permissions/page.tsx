"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

const ACCOUNTING_PERMISSIONS = [
    { id: "1", action: "journal:post", label: "Post Journal Entries", category: "General Ledger" },
    { id: "2", action: "invoice:delete", label: "Void Invoices", category: "Accounts Receivable" },
    { id: "3", action: "report:tax", label: "Generate Tax Reports", category: "Compliance" },
    { id: "4", action: "vendor:pay", label: "Approve Vendor Payments", category: "Accounts Payable" },
]

export default function PermissionMatrix() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Permission Configuration</CardTitle>
                <CardDescription>Toggle specific financial powers for this role.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {["General Ledger", "Accounts Receivable", "Accounts Payable", "Compliance"].map(cat => (
                        <div key={cat} className="space-y-4">
                            <div className="flex items-center gap-2">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{cat}</h4>
                                <div className="h-[1px] flex-1 bg-border" />
                            </div>
                            <div className="grid gap-4 md:grid-cols-2">
                                {ACCOUNTING_PERMISSIONS.filter(p => p.category === cat).map(p => (
                                    <div key={p.id} className="flex items-center justify-between rounded-lg border p-4 bg-card/50">
                                        <div className="space-y-0.5">
                                            <Label className="text-base">{p.label}</Label>
                                            <p className="text-xs text-muted-foreground font-mono">{p.action}</p>
                                        </div>
                                        <Switch id={p.action} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}