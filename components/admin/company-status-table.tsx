import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const data = [
    { id: "1", name: "Horizon Global", status: "Active", plan: "Enterprise", date: "2 mins ago" },
    { id: "2", name: "Acme Accounting", status: "Trial", plan: "Pro", date: "1 hour ago" },
    { id: "3", name: "Sterling & Co", status: "Delinquent", plan: "Basic", date: "4 hours ago" },
]

export function CompanyStatusTable() {
    return (
        <div className="space-y-6">
            {data.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                    <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge variant={item.status === "Delinquent" ? "destructive" : "secondary"}>
                            {item.status}
                        </Badge>
                        <p className="text-xs font-mono font-semibold text-muted-foreground">{item.plan}</p>
                    </div>
                </div>
            ))}
            <Button variant="ghost" className="w-full text-xs text-muted-foreground hover:text-primary">
                View All Companies
            </Button>
        </div>
    )
}