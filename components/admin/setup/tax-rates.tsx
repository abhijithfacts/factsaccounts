// components/admin/setup/tax-rates.tsx
import { Switch } from "@/components/ui/switch"

const taxRates = [
    { code: "VAT-20", name: "Standard VAT", rate: "20%", type: "Sales" },
    { code: "GST-15", name: "Standard GST", rate: "15%", type: "Sales/Purchase" },
    { code: "EXMPT", name: "Zero Rated", rate: "0%", type: "Exempt" },
]

export function TaxRates() {
    return (
        <div className="rounded-md border">
            <table className="w-full text-sm">
                <thead className="bg-muted/50 border-b">
                    <tr>
                        <th className="p-4 text-left">Tax Code</th>
                        <th className="p-4 text-left">Rate</th>
                        <th className="p-4 text-left">Type</th>
                        <th className="p-4 text-center">Active</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {taxRates.map((tax) => (
                        <tr key={tax.code}>
                            <td className="p-4">
                                <div className="font-medium">{tax.name}</div>
                                <div className="text-xs text-muted-foreground font-mono">{tax.code}</div>
                            </td>
                            <td className="p-4 font-bold">{tax.rate}</td>
                            <td className="p-4">{tax.type}</td>
                            <td className="p-4 text-center">
                                <Switch defaultChecked />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}