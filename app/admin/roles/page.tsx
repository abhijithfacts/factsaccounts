import { Shield, Users, Edit2, Trash2, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const roles = [
    { name: "Super Admin", users: 2, permissions: 48, type: "Global" },
    { name: "Company Admin", users: 145, permissions: 32, type: "Template" },
    { name: "Auditor", users: 24, permissions: 5, type: "Template" },
]

export default function RolesPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Roles</h2>
                    <p className="text-muted-foreground">Define and manage access levels for the platform.</p>
                </div>
                <Button className="gap-2">
                    <Plus className="h-4 w-4" /> Create Role
                </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {roles.map((role) => (
                    <Card key={role.name}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0">
                            <CardTitle className="text-lg font-semibold">{role.name}</CardTitle>
                            <Badge variant={role.type === "Global" ? "default" : "outline"}>{role.type}</Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
                                <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4" /> {role.users} Users assigned
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield className="h-4 w-4" /> {role.permissions} Active Permissions
                                </div>
                            </div>
                            <div className="flex gap-2 mt-4">
                                <Button variant="outline" className="w-full gap-1">
                                    <Edit2 className="h-3 w-3" /> Permissions
                                </Button>
                                <Button variant="ghost" size="icon" className="text-destructive">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}