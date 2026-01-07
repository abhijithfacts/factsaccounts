"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";

export function SidebarClientProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [defaultOpen, setDefaultOpen] = useState(true);

    // Read cookie ONLY once on mount
    useEffect(() => {
        const match = document.cookie.match(/sidebar_state=(true|false)/);
        if (match) {
            setDefaultOpen(match[1] === "true");
        }
    }, []);

    return (
        <SidebarProvider
            defaultOpen={defaultOpen}
            onOpenChange={(open) => {
                document.cookie = `sidebar_state=${open}; path=/; max-age=31536000`;
            }}
        >
            {children}
        </SidebarProvider>
    );
}
