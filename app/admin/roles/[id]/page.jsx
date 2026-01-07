import PermissionMatrix from "@/components/admin/permission-matrix"
import { Button } from "@/components/ui/button"

export default function EditRolePage({ params  }) {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">Edit Role Permissions</h1>
                <p className="text-muted-foreground">Adjust what the "{params.id}" role can access.</p>
            </div>

            {/* The Matrix Component */}
            <PermissionMatrix roleId={params.id} />

            <div className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
            </div>
        </div>
    )
}