import { DocumentTable } from "@/components/document-table"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, FileText, Users, CheckCircle } from "lucide-react"

export default function DocumentsPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            {/* Header Section */}
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Project Sections</h2>
                    <p className="text-muted-foreground">
                        Manage your document structure and track reviewer progress.
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="outline">Download CSV</Button>
                    <Button className="gap-2">
                        <Plus className="w-4 h-4" /> Add Section
                    </Button>
                </div>
            </div>

            {/* Quick Stats Section */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Sections</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">+2 from last week</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Completed</CardTitle>
                        <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">8</div>
                        <p className="text-xs text-muted-foreground">66% completion rate</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Reviewers</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">4</div>
                        <p className="text-xs text-muted-foreground">2 currently online</p>
                    </CardContent>
                </Card>
            </div>

            {/* Table Section */}
            <div className="space-y-4">
                <DocumentTable />
            </div>
        </div>
    )
}