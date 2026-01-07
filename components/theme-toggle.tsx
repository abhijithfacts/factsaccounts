"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const THEMES = [
    { name: "Light", value: "light", icon: Sun, class: "bg-orange-100 text-orange-600" },
    { name: "Dark", value: "dark", icon: Moon, class: "bg-slate-900 text-slate-100" },
    { name: "System", value: "system", icon: Monitor, class: "bg-zinc-200 text-zinc-600" },
]

export function ThemePicker() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Prevent hydration mismatch by waiting for mount
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="flex items-center gap-2 p-1 border rounded-lg w-fit bg-background">
            {THEMES.map((t) => {
                const Icon = t.icon
                const isActive = theme === t.value

                return (
                    <button
                        key={t.value}
                        onClick={() => setTheme(t.value)}
                        className={cn(
                            "flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all",
                            isActive
                                ? "bg-primary text-primary-foreground shadow-sm"
                                : "hover:bg-muted text-muted-foreground"
                        )}
                    >
                        <Icon className="h-4 w-4" />
                        <span>{t.name}</span>
                    </button>
                )
            })}
        </div>
    )
}