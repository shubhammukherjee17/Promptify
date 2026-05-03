"use client";

import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";

export default function SecurityPage() {
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
        <div className="flex items-center gap-4 mb-8">
          <Lock className="w-8 h-8 text-red-500" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Security Center</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-[#111111] border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-white">End-to-End Encryption</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              All data transmitted between your browser, our servers, and the NVIDIA APIs is protected using state-of-the-art TLS 1.3 encryption.
            </p>
          </div>
          
          <div className="bg-[#111111] border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-white">No Persistent Storage</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              We process your prompts in memory. Unless explicitly requested, your raw data is never written to a persistent database.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-white">API Key Security</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Server-side API keys are stored in secure environment vaults and are never exposed to the client or logged in our systems.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-white">Vulnerability Reporting</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              If you discover a security vulnerability, please contact our security team immediately at security@promptify.ai.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
