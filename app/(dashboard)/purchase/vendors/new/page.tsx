"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { IconArrowLeft, IconBuildingStore, IconCreditCard } from "@tabler/icons-react";
import Link from "next/link";

export default function NewVendor() {
    return (
        <div className="p-8 w-full mx-auto space-y-6">
            <Link href="/vendors" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                <IconArrowLeft size={16} /> Back to Vendors
            </Link>

            <div className="flex justify-between items-end">
                <h1 className="text-3xl font-bold">New Vendor</h1>
                <Button className="px-10">Save Vendor Profile</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <IconBuildingStore size={20} /> Basic Details
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Company Legal Name</Label>
                            <Input placeholder="e.g. Acme Corp LLC" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Tax ID / EIN</Label>
                                <Input placeholder="12-3456789" />
                            </div>
                            <div className="space-y-2">
                                <Label>Category</Label>
                                <Input placeholder="e.g. Logistics" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Website</Label>
                            <Input placeholder="https://..." />
                        </div>
                    </CardContent>
                </Card>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <IconCreditCard size={20} /> Payment Terms
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Default Terms</Label>
                                <Select>
                                    <SelectTrigger><SelectValue placeholder="Net 30" /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="due">Due on Receipt</SelectItem>
                                        <SelectItem value="n15">Net 15</SelectItem>
                                        <SelectItem value="n30">Net 30</SelectItem>
                                        <SelectItem value="n60">Net 60</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label>Currency</Label>
                                <Select defaultValue="usd">
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="usd">USD - US Dollar</SelectItem>
                                        <SelectItem value="eur">EUR - Euro</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}