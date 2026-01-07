import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { sessionClaims } = await auth();

    const role = (sessionClaims?.publicMetadata as { role?: string })?.role;

    if (role !== "super_admin") {
        redirect("/dashboard");
    }

    return <>{children}</>;
}
