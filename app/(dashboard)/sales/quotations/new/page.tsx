"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IconArrowLeft, IconSend, IconDeviceFloppy, IconCheck } from "@tabler/icons-react";
import { IconQuote } from "@tabler/icons-react";
import Link from "next/link";

export default function NewQuotation() {
    return (
        <div className="p-8 w-full mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/sales/quotations" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                        <IconArrowLeft size={16} /> Back to List
                    </Link>
                </div>
            </div>
            <div className="flex justify-between items-end">
                <h1 className="text-3xl font-bold">New Quotation</h1>
                <div className="flex gap-2">
                    <Button variant="ghost" className="gap-2"><IconDeviceFloppy size={18} /> Save Draft</Button>
                    <Button className="gap-2 bg-indigo-600 hover:bg-indigo-700"><IconSend size={18} /> Send Quote</Button>
                </div>
            </div>

            <Card>
                <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <Label>Customer</Label>
                        <Input placeholder="Search Leads or Customers" />
                    </div>
                    <div className="space-y-2">
                        <Label>Quote Date</Label>
                        <Input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                    </div>
                    <div className="space-y-2">
                        <Label>Expiry Date</Label>
                        <Input type="date" />
                        <p className="text-[10px] text-muted-foreground italic">Pricing usually valid for 14 days.</p>
                    </div>
                </CardContent>
            </Card>

            {/* Line items would follow the same logic as the Invoice module */}
            <Card className="border-dashed bg-muted/20">
                <CardContent className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                    <IconQuote size={48} stroke={1} />
                    <p className="mt-2 font-medium">Add products or services to generate totals.</p>
                    <Button variant="link" className="text-indigo-600">Add Line Item</Button>
                </CardContent>
            </Card>
        </div>
    );
}