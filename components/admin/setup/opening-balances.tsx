// components/admin/setup/opening-balances.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function OpeningBalances() {
    return (
        <div className="space-y-4">
            <div className="rounded-md border">
                <table className="w-full text-sm">
                    <thead className="bg-muted/50 border-b">
                        <tr>
                            <th className="p-3 text-left">Account</th>
                            <th className="p-3 text-right">Debit ($)</th>
                            <th className="p-3 text-right">Credit ($)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        <tr>
                            <td className="p-3">1001 - Petty Cash</td>
                            <td className="p-3"><Input className="text-right" placeholder="0.00" /></td>
                            <td className="p-3"><Input className="text-right" disabled /></td>
                        </tr>
                        <tr>
                            <td className="p-3">2001 - Accounts Payable</td>
                            <td className="p-3"><Input className="text-right" disabled /></td>
                            <td className="p-3"><Input className="text-right" placeholder="0.00" /></td>
                        </tr>
                    </tbody>
                    <tfoot className="bg-muted/20 font-bold">
                        <tr>
                            <td className="p-3 text-right">Totals:</td>
                            <td className="p-3 text-right text-emerald-600">$5,000.00</td>
                            <td className="p-3 text-right text-emerald-600">$5,000.00</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="flex justify-between items-center bg-orange-50 border border-orange-200 p-3 rounded-md">
                <p className="text-xs text-orange-800">Note: Total Debits must equal Total Credits to save.</p>
                <Button size="sm">Update Balances</Button>
            </div>
        </div>
    )
}