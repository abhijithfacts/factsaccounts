// components/admin/setup/numbering-series.tsx
"use client"

import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

const docTypes = [
    { id: "inv", label: "Invoices", prefix: "INV-2026-", start: "0001" },
    { id: "exp", label: "Expenses", prefix: "EXP-", start: "500" },
    { id: "cn", label: "Credit Notes", prefix: "CR-", start: "001" },
]

export function NumberingSeries() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Document Numbering</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {docTypes.map((doc) => (
                    <div key={doc.id} className="grid grid-cols-3 gap-4 items-end border-b pb-4 last:border-0">
                        <div className="space-y-2">
                            <Label>{doc.label} Prefix</Label>
                            <Input defaultValue={doc.prefix} />
                        </div>
                        <div className="space-y-2">
                            <Label>Next Number</Label>
                            <Input type="number" defaultValue={doc.start} />
                        </div>
                        <div className="text-xs text-muted-foreground pb-2">
                            Preview: <span className="font-mono font-bold text-primary">{doc.prefix}{doc.start}</span>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}