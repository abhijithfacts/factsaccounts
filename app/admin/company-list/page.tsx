// components/admin/company-list.tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { createClient } from '@supabase/supabase-js'


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

export default async function CompanyList({ companies }: CompanyListProps) {


    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
    const supabase = createClient(supabaseUrl, supabaseKey)



    let { data: organizations, error } = await supabase
        .from('organizations')
        .select('*')


    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Subscription</TableHead>
                        <TableHead>Base Currency</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {organizations?.map((company) => (
                        <TableRow key={company.id}>
                            <TableCell className="font-bold">{company.name}</TableCell>
                            <TableCell>
                                <Badge variant="secondary">{company.plan_tier}</Badge>
                            </TableCell>
                            <TableCell>{company.base_currency}</TableCell>
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