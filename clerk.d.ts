// clerk.d.ts
import "@clerk/nextjs/server";

declare module "@clerk/nextjs/server" {
    interface SessionClaims {
        publicMetadata: {
            role?: "super_admin" | "admin" | "user";
        };
    }
}
