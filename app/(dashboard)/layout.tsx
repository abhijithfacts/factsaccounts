// app/(dashboard)/layout.tsx
import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ThemeToggle } from "@/components/theme-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarClientProvider } from "./sidebar-client-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarClientProvider>
      <AppSidebar />
      <main className="w-full p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <SidebarTrigger />
            <Breadcrumbs />
          </div>
          <ThemeToggle />
        </div>
        {children}
      </main>
    </SidebarClientProvider>
  );
}
