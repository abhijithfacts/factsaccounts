// components/admin/company-list.tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Company {
    id: string;
    name: string;
    plan: string;
    _count: {
        users: number;
    };
}

interface CompanyListProps {
    companies: Company[];
}

export default function CompanyList({ companies }: CompanyListProps) {
    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Subscription</TableHead>
                        <TableHead>Users</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companies?.map((company) => (
                        <TableRow key={company.id}>
                            <TableCell className="font-bold">{company.name}</TableCell>
                            <TableCell>
                                <Badge variant="secondary">{company.plan}</Badge>
                            </TableCell>
                            <TableCell>{company._count.users}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-green-500" /> Active
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}