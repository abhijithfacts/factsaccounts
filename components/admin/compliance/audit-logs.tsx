// components/admin/compliance/audit-logs.tsx
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const logs = [
    { id: 1, user: "admin@system.com", action: "Updated Tax Rate", target: "VAT-20", time: "10 mins ago", ip: "192.168.1.1" },
    { id: 2, user: "accountant_01", action: "Closed Period", target: "Dec 2025", time: "2 hours ago", ip: "203.0.113.4" },
    { id: 3, user: "super_admin", action: "Deleted User", target: "J. Doe", time: "5 hours ago", ip: "104.24.12.9" },
]

export function AuditLogs() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>System Audit Trail</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[400px] w-full pr-4">
                    <div className="space-y-4">
                        {logs.map((log) => (
                            <div key={log.id} className="flex flex-col gap-1 border-b pb-3 last:border-0">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="font-bold text-primary">{log.action}</span>
                                    <span className="text-xs text-muted-foreground">{log.time}</span>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    User: <span className="text-foreground">{log.user}</span> |
                                    Target: <span className="text-foreground">{log.target}</span>
                                </div>
                                <div className="text-[10px] font-mono text-muted-foreground opacity-50">
                                    Origin IP: {log.ip}
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    )
}