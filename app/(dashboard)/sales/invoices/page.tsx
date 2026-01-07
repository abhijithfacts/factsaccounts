import { IconReceipt, IconDownload, IconSend } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const invoices = [
    { id: "INV-001", client: "Alex Rivera", amount: "$450.00", date: "Jan 12, 2026", status: "Paid" },
    { id: "INV-002", client: "Sarah Chen", amount: "$1,200.00", date: "Jan 15, 2026", status: "Pending" },
];

export default function InvoicesPage() {
    return (
        <div className="p-8 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Invoices</h1>
                <Link href={'/sales/invoices/new'}><Button className="gap-2 cursor-pointer"><IconReceipt size={18} /> Create Invoice</Button></Link>

            </div>
            <div className="grid grid-cols-1 gap-4">
                {invoices.map((inv) => (
                    <div key={inv.id} className="flex items-center justify-between p-4 border rounded-lg bg-card hover:border-primary/50 transition-colors">
                        <div className="flex gap-4 items-center">
                            <div className="p-2 bg-primary/10 rounded-full text-primary">
                                <IconReceipt size={24} />
                            </div>
                            <div>
                                <div className="font-bold">{inv.id} — {inv.client}</div>
                                <div className="text-sm text-muted-foreground">Due {inv.date}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="text-right">
                                <div className="font-bold">{inv.amount}</div>
                                <Badge variant={inv.status === "Paid" ? "outline" : "destructive"} className="text-[10px] uppercase">
                                    {inv.status}
                                </Badge>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="ghost" size="icon"><IconDownload size={18} /></Button>
                                <Button variant="ghost" size="icon"><IconSend size={18} /></Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}