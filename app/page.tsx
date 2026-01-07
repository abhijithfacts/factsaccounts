'use client'
import React from 'react';
import {
  ArrowRight,
  ChevronRight,
  Book,
  Receipt,
  BarChart3,
  Shield
} from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { ChartAreaInteractive } from '@/components/charts/chart-area-interactive';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs'


// Fixed: Corrected prop destructuring for the Icon component
function FeatureCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-8 border border-slate-200 rounded-2xl bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
      <div className="mb-4 bg-emerald-50 w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300">
        <Icon className="text-emerald-600" size={24} />
      </div>
      <h3 className="text-xl font-bold mb-2 text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
      <button className="inline-flex items-center gap-1 mt-4 text-emerald-600 text-sm font-bold group-hover:gap-2 transition-all">
        Learn more <ChevronRight size={14} />
      </button>
    </div>
  );
}

// --- Main Page ---

export default function LandingPage() {
  const router = useRouter();
  const { isSignedIn } = useUser();

  React.useEffect(() => {
    if (isSignedIn) {
      router.push('/overview');
    }
  }, [isSignedIn]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 selection:bg-emerald-100 selection:text-emerald-900">

      {/* 1. Mathematical Expressions Background Overlay */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-[0.7] z-0 select-none">
        {/* Standard Mono Text for simple logic */}
        <div className="absolute top-[10%] left-[5%] text-slate-900 text-sm font-mono rotate-12">
          ∑ Assets = Liabilities + Equity
        </div>

        {/* KaTeX for complex expressions to avoid "not declared" or string errors */}
        <div className="absolute top-[45%] left-[8%] text-slate-900 rotate-6">
          <InlineMath math="ROI = \frac{Gain - Cost}{Cost}" />
        </div>

        <div className="absolute top-[55%] right-[20%] text-slate-900 -rotate-3">
          <InlineMath math="\int_{0}^{t} Revenue(x) dx" />
        </div>

        <div className="absolute top-[40%] left-[45%] text-slate-900 rotate-6 scale-110">
          <InlineMath math="NPV = \sum_{t=1}^{n} \frac{CF_t}{(1 + r)^t}" />
        </div>

        <div className="absolute bottom-[15%] left-[25%] text-slate-900 text-sm font-mono rotate-3">
          EBITDA = NI + I + T + D + A
        </div>
      </div>

      {/* 2. Gradient Blurs */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-[120px] -z-10" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] -z-10" />

      {/* 3. Navigation */}
      <nav className="flex items-center justify-between px-6 lg:px-12 py-5 bg-white/70 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-200/50">
        <div className="flex items-center gap-2.5">
          <div className="bg-emerald-600 p-2 rounded-xl shadow-lg shadow-emerald-600/20 transition-transform hover:scale-105 cursor-pointer">
            <Book className="text-white" size={20} />
          </div>
          <span className="text-xl font-extrabold tracking-tighter text-slate-900">FACTSaccounts</span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm font-bold text-slate-500">
          <a href="#" className="hover:text-emerald-600 transition-colors">Features</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Solutions</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/sign-in" className="text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors">Sign In</Link>
          <Link href="/signup" className="text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors">Sign Up</Link>
        </div>
      </nav>

      {/* 4. Hero Section */}
      <header className="relative z-10 px-6 lg:px-12 pt-12 lg:pt-24 pb-20 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/50 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Ledger Analytics 2.0 is Live
            </div>

            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[0.95]">
              Accounting <br />
              <span className="text-emerald-600 italic">Redefined.</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-500 max-w-[500px] leading-relaxed font-medium">
              Eliminate the manual grind. Manage your General Ledger, automate receipts, and forecast cash flow in one high-performance ERP.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-600/30 hover:-translate-y-1">
                Start Free Trial <ArrowRight size={20} strokeWidth={3} />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 bg-white/50 backdrop-blur-sm hover:border-emerald-500 font-bold text-slate-700 rounded-2xl transition-all">
                Book a Demo
              </button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-[40px] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative p-2 border border-slate-200 rounded-[32px] bg-white/80 backdrop-blur shadow-2xl overflow-hidden transition-all duration-700 hover:border-emerald-200">
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                      <BarChart3 size={20} className="text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900">Revenue Stream</h3>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Live Updates • Q1 2026</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  </div>
                </div>
                <ChartAreaInteractive />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 5. Features Grid */}
      <section className="relative z-10 py-24 lg:py-32 border-t border-slate-200 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-slate-900 mb-6 uppercase leading-none">
              Built for <span className="text-emerald-600 underline decoration-8 decoration-emerald-100 underline-offset-4">Precision.</span>
            </h2>
            <p className="text-slate-500 text-lg font-bold">
              Trusted by 1,200+ high-growth businesses. We've replaced spreadsheets with a single source of truth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Book}
              title="Smart Ledger"
              desc="Automated double-entry accounting that keeps your books balanced 24/7 without manual intervention."
            />
            <FeatureCard
              icon={Receipt}
              title="AI Receipts"
              desc="Scan, extract, and categorize receipts instantly. Match payments to invoices with 99.9% accuracy."
            />
            <FeatureCard
              icon={Shield}
              title="Audit Ready"
              desc="Enterprise-grade security and full version control. Every entry is tracked, verified, and immutable."
            />
          </div>
        </div>
      </section>

      {/* 6. Footer CTA */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[40px] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight">Ready to scale?</h2>
            <p className="text-slate-400 font-bold text-lg max-w-xl mx-auto leading-relaxed">
              No hidden fees. No messy onboarding. Start your journey toward financial excellence today.
            </p>
            <button className="px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl transition-all shadow-xl shadow-emerald-500/20 active:scale-95">
              GET STARTED NOW
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-200 text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">
          &copy; 2026 FACTSaccounts ERP — The Standard in Financial Intelligence
        </p>
      </footer>
    </div>
  );
}