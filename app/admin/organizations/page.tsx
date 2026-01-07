import {
    Plus,
    Search,
    MoreHorizontal,
    Building2,
    CreditCard
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function OrganizationsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Organizations</h2>
                    <p className="text-muted-foreground">Manage tenant companies and their subscription tiers.</p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Add Company
                </Button>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search companies..." className="pl-8" />
                </div>
                <Button variant="outline">Filter Status</Button>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Organization</TableHead>
                            <TableHead>Plan</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Users</TableHead>
                            <TableHead>Last Audit</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <OrgRow
                            name="Acme Financial"
                            email="contact@acme.com"
                            plan="Enterprise"
                            status="Active"
                            users={12}
                            date="Jan 05, 2026"
                        />
                        <OrgRow
                            name="Globex Corp"
                            email="admin@globex.io"
                            plan="Professional"
                            status="Past Due"
                            users={5}
                            date="Dec 28, 2025"
                        />
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

function OrgRow({ name, email, plan, status, users, date }: any) {
    return (
        <TableRow>
            <TableCell>
                <div className="flex flex-col">
                    <span className="font-medium text-sm">{name}</span>
                    <span className="text-xs text-muted-foreground">{email}</span>
                </div>
            </TableCell>
            <TableCell>
                <Badge variant="outline">{plan}</Badge>
            </TableCell>
            <TableCell>
                <Badge variant={status === "Active" ? "success" : "destructive"}>
                    {status}
                </Badge>
            </TableCell>
            <TableCell>{users}</TableCell>
            <TableCell className="text-muted-foreground text-sm">{date}</TableCell>
            <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </TableCell>
        </TableRow>
    )
}