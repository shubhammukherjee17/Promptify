"use client";

import Link from "next/link";
import { ArrowLeft, Activity, CheckCircle2 } from "lucide-react";

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] overflow-hidden flex flex-col">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl w-full mx-auto border-b border-white/5">
        <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          Promptify <span className="text-white/70">AI</span>
        </Link>
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </nav>

      <main className="flex-1 max-w-4xl w-full mx-auto px-8 py-16 flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <Activity className="w-8 h-8 text-red-500" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">System Status</h1>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-500 text-sm font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            All Systems Operational
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="bg-[#111111] border border-white/10 rounded-xl p-6 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white mb-1">Prompt Enhancement Engine</h3>
              <p className="text-white/50 text-sm">Processing queries normally</p>
            </div>
            <CheckCircle2 className="w-6 h-6 text-green-500" />
          </div>
          
          <div className="bg-[#111111] border border-white/10 rounded-xl p-6 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white mb-1">NVIDIA Integration (gemma-4-31b-it)</h3>
              <p className="text-white/50 text-sm">API Latency: 120ms</p>
            </div>
            <CheckCircle2 className="w-6 h-6 text-green-500" />
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-xl p-6 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white mb-1">Web Application UI</h3>
              <p className="text-white/50 text-sm">Serving requests normally</p>
            </div>
            <CheckCircle2 className="w-6 h-6 text-green-500" />
          </div>
        </div>
      </main>
    </div>
  );
}
