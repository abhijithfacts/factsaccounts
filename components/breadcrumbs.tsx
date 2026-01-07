"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function Breadcrumbs() {
    const pathname = usePathname()

    // Split the pathname into segments and filter out empty strings
    // Example: /docs/components/breadcrumb -> ["docs", "components", "breadcrumb"]
    const segments = pathname.split("/").filter((item) => item !== "")

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {/* Always show Home */}
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {segments.map((segment, index) => {
                    const isLast = index === segments.length - 1
                    // Build the href for this specific segment
                    const href = `/${segments.slice(0, index + 1).join("/")}`

                    // Format the text (capitalize and replace hyphens with spaces)
                    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ")

                    return (
                        <React.Fragment key={href}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage>{label}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link href={href}>{label}</Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </React.Fragment>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}