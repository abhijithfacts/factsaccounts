// app/(dashboard)/layout.tsx
import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ThemePicker } from "@/components/theme-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
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
