"use client";

import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPage() {
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
          <Shield className="w-8 h-8 text-red-500" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Privacy Policy</h1>
        </div>
        
        <div className="prose prose-invert prose-red max-w-none text-white/70">
          <p className="text-lg mb-8">Last updated: May 2026</p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Data Collection</h2>
          <p className="mb-6">
            At Promptify AI, we take your privacy seriously. We only collect the necessary information required to provide our prompt generation services. The prompts you submit are processed securely and are not used to train our fundamental models without your explicit consent.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. API Usage</h2>
          <p className="mb-6">
            Our platform interacts with third-party AI APIs (like NVIDIA NIM). When you generate a prompt, your input is sent securely over encrypted channels to these providers. We do not store your API keys on our servers—they are strictly used client-side or securely vaulted for the duration of the session.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Data Retention</h2>
          <p className="mb-6">
            We do not persistently store the results of your generations unless you explicitly save them to your account. Transient data is automatically purged from our systems within 24 hours.
          </p>
        </div>
      </main>
    </div>
  );
}
