"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Loader2, ArrowLeft } from "lucide-react";

export default function PromptsPage() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setError("");
    setResult("");
    
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to generate prompt");
      }
      
      setResult(data.response);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] overflow-hidden flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl w-full mx-auto border-b border-white/5">
        <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          Promptify <span className="text-white/70">AI</span>
        </Link>
        <Link 
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </nav>

      <main className="flex-1 max-w-4xl w-full mx-auto px-8 py-12 flex flex-col">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 flex items-center gap-3">
            <Zap className="w-8 h-8 text-red-500" />
            Prompt Enhancement Engine
          </h1>
          <p className="text-white/60 text-lg">
            Describe what you want to accomplish, and our AI will engineer the perfect advanced prompt for you.
          </p>
        </div>
        
        <div className="flex flex-col gap-6 flex-1">
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Your basic idea</label>
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. Write a marketing email for our new shoe product line..."
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 min-h-[160px] resize-y transition-all text-lg shadow-inner"
            />
          </div>

          <button 
            onClick={handleGenerate}
            disabled={isGenerating || !prompt.trim()}
            className="w-full md:w-auto self-start bg-red-500 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-[0_0_20px_rgba(239,68,68,0.3)] text-lg"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Analyzing Intent & Enhancing...
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                Generate Powerful Prompt
              </>
            )}
          </button>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-500 p-4 rounded-xl text-sm mt-4 animate-in fade-in duration-300">
              {error}
            </div>
          )}

          {result && (
            <div className="flex flex-col gap-3 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 pb-12">
              <h4 className="font-bold text-2xl border-b border-white/10 pb-4">Enhanced Output</h4>
              <div className="bg-[#111111] border border-white/10 rounded-xl p-8 text-white/90 whitespace-pre-wrap font-mono text-base leading-relaxed overflow-x-auto shadow-2xl">
                {result}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
