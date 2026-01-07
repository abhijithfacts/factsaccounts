import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

const PERMISSIONS_LIST = [
    { id: "ledger:view", name: "View Ledger", category: "Finance" },
    { id: "ledger:post", name: "Post Journal Entries", category: "Finance" },
    { id: "tax:manage", name: "Manage Tax Settings", category: "Compliance" },
    { id: "user:invite", name: "Invite New Users", category: "Admin" },
]

export default function PermissionMatrix() {
    return (
        <div className="rounded-md border">
            <table className="w-full text-sm">
                <thead className="bg-muted/50 border-b">
                    <tr>
                        <th className="p-4 text-left font-medium">Permission</th>
                        <th className="p-4 text-left font-medium">Category</th>
                        <th className="p-4 text-center font-medium">Enabled</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {PERMISSIONS_LIST.map((p) => (
                        <tr key={p.id}>
                            <td className="p-4">{p.name}</td>
                            <td className="p-4">
                                <Badge variant="secondary">{p.category}</Badge>
                            </td>
                            <td className="p-4 text-center">
                                <Checkbox id={p.id} defaultChecked={p.id.includes('view')} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}