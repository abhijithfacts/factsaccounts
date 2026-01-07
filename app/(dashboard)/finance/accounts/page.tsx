import { AccountsTable } from "@/components/accounts-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconArrowUpRight, IconArrowDownLeft, IconWallet } from "@tabler/icons-react"

export default function ChartOfAccountsPage() {
    return (
        <div className="p-8 space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Chart of Accounts</h1>
                <p className="text-muted-foreground">Manage your organization's financial structure and account balances.</p>
            </div>

            {/* Financial Overview Cards */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
                        <IconWallet className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$57,600.50</div>
                        <div className="flex items-center text-xs text-green-500 font-medium mt-1">
                            <IconArrowUpRight size={14} /> +4.5% from last month
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Total Liabilities</CardTitle>
                        <IconArrowDownLeft className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$8,320.00</div>
                        <div className="flex items-center text-xs text-red-500 font-medium mt-1">
                            <IconArrowUpRight size={14} /> +12% from last month
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Net Equity</CardTitle>
                        <div className="h-4 w-4 rounded-full bg-primary/20" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$49,280.50</div>
                        <p className="text-xs text-muted-foreground mt-1">Calculated in real-time</p>
                    </CardContent>
                </Card>
            </div>

            {/* Main Table Section */}
            <AccountsTable />
        </div>
    )
}