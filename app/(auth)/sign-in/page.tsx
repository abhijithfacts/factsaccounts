'use client'

import { SignIn, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { Book } from "lucide-react";
import Link from "next/link";


export default function Home() {
    const { isSignedIn } = useUser()
    const router = useRouter()

    if (!isSignedIn) {
        return <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-slate-50 overflow-hidden">

            {/* 1. Background Mathematical Layer (Consistency with Landing Page) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] z-0">
                <div className="absolute top-[10%] left-[5%] text-slate-900 text-sm font-mono rotate-12">Assets = Liabilities + Equity</div>
                <div className="absolute top-[40%] right-[10%] text-slate-900 text-sm font-mono -rotate-12">NPV = Σ CFt / (1+r)^t</div>
                <div className="absolute bottom-[10%] left-[15%] text-slate-900 text-sm font-mono rotate-3">DR ≡ CR</div>
            </div>

            {/* 2. Gradient Blurs */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-200/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-[100px] -z-10" />

            {/* 3. Branding Header */}
            <Link href="/" className="relative z-10 mb-8 flex items-center gap-2 group">
                <div className="bg-emerald-600 p-2 rounded-xl shadow-lg shadow-emerald-600/20 transition-transform group-hover:scale-110">
                    <Book className="text-white" size={24} />
                </div>
                <span className="text-2xl font-black tracking-tighter text-slate-900">FACTSaccounts</span>
            </Link>

            {/* 4. Clerk Sign In Component */}
            <div className="relative z-10 shadow-2xl rounded-2xl overflow-hidden">
                <SignIn
                    path="/sign-in"
                    appearance={{
                        elements: {
                            formButtonPrimary:
                                "bg-emerald-600 hover:bg-emerald-700 text-sm normal-case shadow-none",
                            card: "shadow-none border border-slate-200",
                            headerTitle: "text-slate-900 font-bold",
                            headerSubtitle: "text-slate-500",
                            footerActionLink: "text-emerald-600 hover:text-emerald-700 font-semibold"
                        }
                    }}

                />
            </div>

            {/* 5. Simple Footer */}
            <p className="relative z-10 mt-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
                Secure Financial Access • 256-bit Encryption
            </p>
        </div>
    } else {
        router.push('/overview')
    }


}