// components/admin/settings/general-settings.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function SystemSettings() {
    return (
        <div className="grid gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Platform Identity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                        <Label>System Display Name</Label>
                        <Input defaultValue="Quantum Accounting Engine" />
                    </div>
                    <div className="grid gap-2">
                        <Label>Support Contact Email</Label>
                        <Input defaultValue="ops@quantum.finance" />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Global API Keys</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                        <Label>Tax Engine Provider (Stripe Tax/Avalara)</Label>
                        <Input type="password" value="••••••••••••••••" readOnly />
                    </div>
                    <Button className="w-fit">Save Global Settings</Button>
                </CardContent>
            </Card>
        </div>
    )
}