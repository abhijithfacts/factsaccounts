// components/admin/setup/financial-years.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"

const years = [
    { label: "FY 2025-26", start: "2025-04-01", end: "2026-03-31", status: "Current" },
    { label: "FY 2024-25", start: "2024-04-01", end: "2025-03-31", status: "Closed" },
]

export function FinancialYears() {
    return (
        <div className="grid gap-4">
            {years.map((year) => (
                <Card key={year.label}>
                    <CardContent className="flex items-center justify-between p-6">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-primary/10 rounded-full text-primary">
                                <CalendarDays className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="font-bold">{year.label}</p>
                                <p className="text-xs text-muted-foreground italic">
                                    {year.start} to {year.end}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Badge variant={year.status === "Current" ? "default" : "secondary"}>
                                {year.status}
                            </Badge>
                            <Button variant="outline" size="sm">Manage Periods</Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}