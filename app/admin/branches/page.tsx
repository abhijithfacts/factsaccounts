import { MapPin, Plus, Store, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BranchesPage() {
    const branches = [
        { id: 1, name: "Main Office (HQ)", city: "New York", manager: "Sarah Chen", status: "Open", revenue: "$1.2M" },
        { id: 2, name: "Downtown Branch", city: "Chicago", manager: "Marcus Ross", status: "Open", revenue: "$450k" },
        { id: 3, name: "West Coast Logistics", city: "Los Angeles", manager: "Elena Rodriguez", status: "Closed", revenue: "$0" },
    ]

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Branches</h2>
                    <p className="text-muted-foreground">Manage multi-location accounting and branch-specific reporting.</p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Add Branch
                </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {branches.map((branch) => (
                    <Card key={branch.id} className="hover:border-primary/50 transition-colors">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{branch.name}</CardTitle>
                            <Store className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{branch.revenue}</div>
                            <div className="flex items-center gap-2 mt-2">
                                <MapPin className="h-3 w-3 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{branch.city}</span>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <Badge variant={branch.status === "Open" ? "outline" : "secondary"}>
                                    {branch.status}
                                </Badge>
                                <Button variant="ghost" size="sm" className="gap-1">
                                    Details <ArrowRight className="h-3 w-3" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}