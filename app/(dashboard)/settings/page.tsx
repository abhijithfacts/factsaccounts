import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
    return (
        <div className="p-8 w-full mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold">Settings</h1>
                <p className="text-muted-foreground">Manage your account and preferences.</p>
            </div>
            <Separator />
            <div className="space-y-6">
                <div className="space-y-2">
                    <Label>Organization Name</Label>
                    <Input placeholder="Acme Corp" />
                </div>
                <div className="space-y-2">
                    <Label>Support Email</Label>
                    <Input placeholder="support@acme.com" type="email" />
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-0.5">
                        <Label>Email Notifications</Label>
                        <div className="text-sm text-muted-foreground">Receive weekly reports.</div>
                    </div>
                    <Switch />
                </div>
                <Button className="w-full">Save Changes</Button>
            </div>
        </div>
    );
}