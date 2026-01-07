// components/admin/compliance/approval-rules.tsx
"use client"

import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

export function DataApprovalRules() {
    const [limit, setLimit] = useState([5000])

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between p-4 border rounded-xl">
                <div className="space-y-1">
                    <p className="font-semibold">Auto-Approval Threshold</p>
                    <p className="text-sm text-muted-foreground">Transactions below this amount do not require manager review.</p>
                </div>
                <div className="text-xl font-mono font-bold text-primary">${limit[0].toLocaleString()}</div>
            </div>

            <div className="px-2">
                <Slider
                    defaultValue={limit}
                    max={50000}
                    step={500}
                    onValueChange={setLimit}
                />
            </div>

            <div className="grid gap-4">
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm font-medium">Require Dual Authorization for Bank Transfers</p>
                    <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm font-medium">Notify Auditor on Journal Voids</p>
                    <Switch defaultChecked />
                </div>
            </div>
        </div>
    )
}