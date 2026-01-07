"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
    React.useEffect(() => {
        // Look for a saved accent color in localStorage
        const savedAccent = localStorage.getItem("accent-theme") || "default"
        document.documentElement.setAttribute("data-theme", savedAccent)
    }, [])

    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}