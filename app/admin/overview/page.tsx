import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
    DollarSign,
    Users,
    Building2,
    AlertCircle,
    Download,
    TrendingUp
} from "lucide-react"

// Import custom components (defined below)
import { RevenueChart } from "@/components/admin/revenue-chart"
import { CompanyStatusTable } from "@/components/admin/company-status-table"

export default function AdminDashboard() {
    return (
        <div className="flex-1 space-y-6">
            {/* <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">System Admin Dashboard</h2>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" /> Export Report
                    </Button>
                </div>
            </div> */}

            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">Financial Overview</TabsTrigger>
                    <TabsTrigger value="analytics">System Health</TabsTrigger>
                    <TabsTrigger value="notifications">Alerts</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                    {/* Top Row Stats */}
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <StatsCard
                            title="Total Platform ARR"
                            value="$128,430"
                            description="+12% from last month"
                            icon={<DollarSign className="h-4 w-4" />}
                        />
                        <StatsCard
                            title="Total Organizations"
                            value="432"
                            description="18 pending verification"
                            icon={<Building2 className="h-4 w-4" />}
                        />
                        <StatsCard
                            title="Active Accountants"
                            value="1,203"
                            description="+48 this week"
                            icon={<Users className="h-4 w-4" />}
                        />
                        <StatsCard
                            title="Pending Disputes"
                            value="7"
                            description="Requires immediate action"
                            icon={<AlertCircle className="h-4 w-4" />}
                            trend="down"
                        />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        {/* Chart Section */}
                        <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle>Platform Revenue Growth</CardTitle>
                                <CardDescription>Monthly recurring revenue across all tenants.</CardDescription>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <RevenueChart />
                            </CardContent>
                        </Card>

                        {/* Recent Activity Section */}
                        <Card className="col-span-3">
                            <CardHeader>
                                <CardTitle>Recent Tenant Activity</CardTitle>
                                <CardDescription>Newest company registrations.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <CompanyStatusTable />
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

// Reusable Stats Card Component
function StatsCard({ title, value, description, icon, trend = "up" }: any) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <div className="text-muted-foreground">{icon}</div>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className={`text-xs mt-1 ${trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {description}
                </p>
            </CardContent>
        </Card>
    )
}