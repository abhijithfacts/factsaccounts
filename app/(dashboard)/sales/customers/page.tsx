import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconMail, IconPhone, IconDots } from "@tabler/icons-react";

const customers = [
    { name: "Alex Rivera", email: "alex@company.com", status: "Active", spent: "$12,400", initials: "AR" },
    { name: "Sarah Chen", email: "sarah.c@tech.io", status: "Lead", spent: "$0", initials: "SC" },
];

export default function CustomersPage() {
    return (
        <div className="p-8 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Customers</h1>
            </div>
            <div className="border rounded-lg bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Total Spent</TableHead>
                            <TableHead>Contact</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {customers.map((c) => (
                            <TableRow key={c.email}>
                                <TableCell className="flex items-center gap-3">
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback>{c.initials}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-medium">{c.name}</div>
                                        <div className="text-xs text-muted-foreground">{c.email}</div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant={c.status === "Active" ? "default" : "secondary"}>{c.status}</Badge>
                                </TableCell>
                                <TableCell className="font-medium">{c.spent}</TableCell>
                                <TableCell>
                                    <div className="flex gap-2">
                                        <IconMail size={16} className="text-muted-foreground" />
                                        <IconPhone size={16} className="text-muted-foreground" />
                                    </div>
                                </TableCell>
                                <TableCell><IconDots size={16} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}