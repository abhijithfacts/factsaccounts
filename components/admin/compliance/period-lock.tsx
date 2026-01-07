// components/admin/compliance/period-lock.tsx
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PeriodLocking() {
    const periods = [
        { month: "December 2025", status: "Closed", lockedBy: "Admin" },
        { month: "January 2026", status: "Open", lockedBy: "-" },
    ]

    return (
        <Card>
            <CardHeader>
                <CardTitle>Financial Period Locking</CardTitle>
                <CardDescription>Locked periods cannot be edited by any user, including accountants.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {periods.map((p) => (
                    <div key={p.month} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                            <p className="font-medium">{p.month}</p>
                            <p className="text-xs text-muted-foreground italic">Status: {p.status}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-xs text-muted-foreground">Lock Period</span>
                            <Switch checked={p.status === "Closed"} />
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}