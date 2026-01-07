"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { GripVertical, CheckCircle2, Circle } from "lucide-react"
import { IconTrendingUp, IconTrendingDown } from "@tabler/icons-react"

const data = [
    { id: 1, header: "Cover page", type: "Cover page", status: "In Process", target: 18, limit: 5, reviewer: "Eddie Lake" },
    { id: 2, header: "Table of contents", type: "Table of contents", status: "Done", target: 29, limit: 24, reviewer: "Eddie Lake" },
    { id: 3, header: "Executive summary", type: "Narrative", status: "Done", target: 10, limit: 13, reviewer: "Eddie Lake" },
    { id: 4, header: "Technical approach", type: "Narrative", status: "Done", target: 27, limit: 23, reviewer: "Jamik Tashpulatov" },
    { id: 5, header: "Design", type: "Narrative", status: "In Process", target: 2, limit: 16, reviewer: "Jamik Tashpulatov" },
]

export function DocumentTable() {
    return (
        <div className="rounded-md border bg-card">
            <Table>
                <TableHeader>
                    <TableRow className="bg-muted/50 hover:bg-muted/50">
                        <TableHead className="w-[40px]"></TableHead>
                        <TableHead className="w-[40px]"><Checkbox /></TableHead>
                        <TableHead>Header</TableHead>
                        <TableHead>Section Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Target</TableHead>
                        <TableHead className="text-right">Limit</TableHead>
                        <TableHead>Reviewer</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.id} className="group transition-colors">
                            <TableCell className="w-[40px]">
                                <GripVertical className="w-4 h-4 text-muted-foreground/50 group-hover:text-muted-foreground cursor-grab" />
                            </TableCell>
                            <TableCell><Checkbox /></TableCell>
                            <TableCell className="font-medium">{item.header}</TableCell>
                            <TableCell>
                                <Badge variant="outline" className="rounded-full font-normal">{item.type}</Badge>
                            </TableCell>
                            <TableCell>
                                {item.status === "Done" ? (
                                    <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full gap-1">
                                        <CheckCircle2 className="w-3 h-3" /> Done
                                    </Badge>
                                ) : (
                                    <Badge variant="outline" className="rounded-full gap-1 text-muted-foreground">
                                        <Circle className="w-3 h-3" /> In Process
                                    </Badge>
                                )}
                            </TableCell>
                            <TableCell className="text-right font-mono">
                                <span className="flex items-center justify-end gap-1">
                                    {item.target} <IconTrendingUp size={14} className="text-green-500" />
                                </span>
                            </TableCell>
                            <TableCell className="text-right font-mono">{item.limit}</TableCell>
                            <TableCell className="text-muted-foreground">{item.reviewer}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}