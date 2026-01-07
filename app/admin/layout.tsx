import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { AdminSidebar } from "@/components/admin-sidebar";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ThemePicker } from "@/components/theme-toggle";


export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { sessionClaims } = await auth();

    const role = (sessionClaims?.publicMetadata as { role?: string })?.role;

    // if (role !== "super_admin") {
    //     redirect("/dashboard");
    // }

    return (
        <SidebarProvider>
            <AdminSidebar />
            <main className="w-full p-4 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <SidebarTrigger />
                        <Breadcrumbs />
                    </div>
                    <ThemePicker />
                </div>
                {children}
            </main>
        </SidebarProvider>
    );
}
