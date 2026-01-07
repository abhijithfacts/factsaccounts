import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg";
    text?: string;
}

export function Loader({ size = "md", text, className, ...props }: LoaderProps) {
    const sizeClasses = {
        sm: "w-4 h-4",
        md: "w-8 h-8",
        lg: "w-12 h-12",
    };

    return (
        <div className={cn("flex flex-col items-center justify-center gap-4", className)} {...props}>
            <div className="relative">
                {/* Background Glow */}
                <div className={cn(
                    "absolute inset-0 rounded-full bg-emerald-500/20 blur-xl animate-pulse",
                    sizeClasses[size]
                )} />

                {/* Shadcn-style Spinner */}
                <Loader2 className={cn(
                    "animate-spin text-emerald-600 relative z-10",
                    sizeClasses[size]
                )} />
            </div>

            {text && (
                <p className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase animate-pulse">
                    {text}
                </p>
            )}
        </div>
    );
}