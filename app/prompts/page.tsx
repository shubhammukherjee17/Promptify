"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Loader2, ArrowLeft, Copy, Check, Info } from "lucide-react";

type PromptVariant = {
  level: string;
  accuracy: number;
  text: string;
  techniques: string[];
  explanation: string;
  useCases: string;
};

type GenerateResponse = {
  analysis: string;
  prompts: PromptVariant[];
  recommendation: string;
};

export default function PromptsPage() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<GenerateResponse | null>(null);
  const [error, setError] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setError("");
    setResult(null);
    setCopiedIndex(null);
    
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
      
      setResult(data.response as GenerateResponse);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
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

      <main className="flex-1 max-w-5xl w-full mx-auto px-8 py-12 flex flex-col">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 flex items-center justify-center md:justify-start gap-3">
            <Zap className="w-8 h-8 text-red-500" />
            Prompt Enhancement Engine
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Describe what you want to accomplish, and our AI will engineer the perfect advanced prompts tailored to different accuracy needs.
          </p>
        </div>
        
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Your basic idea</label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. Write a marketing email for our new shoe product line..."
                className="w-full bg-[#111111] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 min-h-[140px] resize-y transition-all text-lg shadow-inner"
              />
            </div>

            <button 
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full md:w-auto self-start bg-red-500 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors shadow-[0_0_20px_rgba(239,68,68,0.2)] text-lg"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Enhancing...</span>
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  <span>Generate</span>
                </>
              )}
            </button>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-500 p-4 rounded-xl text-sm animate-in fade-in duration-300">
              {error}
            </div>
          )}

          {result && (
            <div className="flex flex-col gap-8 mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 pb-12">
              <div className="bg-[#111111] border border-white/10 p-6 rounded-xl flex items-start gap-4">
                <Info className="w-6 h-6 text-white/40 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Analysis</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{result.analysis}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {result.prompts.map((variant, index) => (
                  <div key={index} className="bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col relative group">
                    {/* Header */}
                    <div className="bg-white/5 border-b border-white/5 p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/10 px-3 py-1 rounded-full text-sm font-bold tracking-wider">
                          {variant.level}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-white/50 uppercase tracking-widest font-bold">Accuracy</span>
                          <span className="text-sm font-bold text-red-400">{variant.accuracy}%</span>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => handleCopy(variant.text, index)}
                        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg text-sm font-semibold"
                      >
                        {copiedIndex === index ? (
                          <>
                            <Check className="w-4 h-4 text-green-400" />
                            <span className="text-green-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy Prompt
                          </>
                        )}
                      </button>
                    </div>

                    {/* Content - Removed font-mono to use Space Grotesk */}
                    <div className="p-6 bg-[#0a0a0a]">
                      <p className="whitespace-pre-wrap text-white/90 text-base leading-relaxed">
                        {variant.text}
                      </p>
                    </div>
                    
                    {/* Details */}
                    <div className="bg-white/5 p-5 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-white/40 font-bold uppercase tracking-wider text-[10px] block mb-2">Techniques Used</span>
                        <div className="flex flex-wrap gap-2">
                          {variant.techniques.map((tech, i) => (
                            <span key={i} className="text-xs bg-red-500/10 border border-red-500/20 text-red-400 px-2 py-1 rounded-md">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-white/40 font-bold uppercase tracking-wider text-[10px] block mb-2">Why it works</span>
                        <p className="text-white/60 text-xs leading-relaxed">{variant.explanation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-xl flex flex-col items-center text-center mt-4">
                <Zap className="w-6 h-6 text-red-500 mb-3" />
                <h4 className="font-bold text-lg mb-2">Recommendation</h4>
                <p className="text-white/70 text-sm leading-relaxed max-w-2xl">{result.recommendation}</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
