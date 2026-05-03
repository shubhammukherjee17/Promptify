"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Zap, Hexagon, Maximize2, LayoutTemplate, Layers, Gauge, Target, Share2, Globe } from "lucide-react";

export default function Home() {
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] overflow-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-white/5">
        <div className="text-xl font-bold tracking-tight">Promptify <span className="text-white/70">AI</span></div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors pb-1 cursor-pointer">Features</button>
          <button onClick={() => scrollToSection('process')} className="hover:text-white transition-colors pb-1 cursor-pointer">Solutions</button>
          <button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors pb-1 cursor-pointer">Pricing</button>
          <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors pb-1 cursor-pointer">Docs</button>
        </div>
        <button 
          onClick={() => router.push('/prompts')}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md text-sm font-semibold transition-colors cursor-pointer"
        >
          Try Now
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-8">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center pt-24 pb-20 gap-16">
          <div className="flex-1 space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-bold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              v2.0 HYPER-ENGINE LIVE
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Turn Simple<br />
              Prompts Into<br />
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Powerful AI</span><br />
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Outputs</span>
            </h1>
            
            <p className="text-lg text-white/60 max-w-md leading-relaxed">
              Transform basic ideas into structured, high-performance prompts designed for better, faster, and more accurate AI results.
            </p>
            
            <div className="flex items-center gap-4 pt-4">
              <button 
                onClick={() => router.push('/prompts')}
                className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors shadow-[0_0_20px_rgba(239,68,68,0.3)]"
              >
                Generate Prompt <Zap className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="bg-[#111111] hover:bg-[#1a1a1a] cursor-pointer text-white border border-white/10 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Examples
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-red-500/20 blur-[100px] rounded-full"></div>
            <div className="relative border border-white/5 rounded-2xl overflow-hidden bg-[#0a0a0a]">
              <Image 
                src="/hero_3d_wave.png" 
                alt="3D Red Wave" 
                width={800} 
                height={600} 
                className="w-full h-auto object-cover opacity-90"
                priority
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 border-t border-white/5">
          <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-8 flex flex-col justify-center">
            <h3 className="text-4xl font-bold mb-2">50K+</h3>
            <p className="text-xs font-bold tracking-wider text-white/40 uppercase">Prompts Generated</p>
          </div>
          <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-8 flex flex-col justify-center">
            <h3 className="text-4xl font-bold mb-2">92%</h3>
            <p className="text-xs font-bold tracking-wider text-white/40 uppercase">Better Output Accuracy</p>
          </div>
          <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-8 flex flex-col justify-center">
            <h3 className="text-4xl font-bold mb-2">10x</h3>
            <p className="text-xs font-bold tracking-wider text-white/40 uppercase">Faster Prompt Creation</p>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-16 text-center border-b border-white/5">
          <p className="text-xs font-bold tracking-widest text-white/40 uppercase mb-8">Trusted by global innovation teams</p>
          <div className="flex justify-center items-center gap-12 opacity-50 grayscale flex-wrap">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><Zap className="w-4 h-4" /></div>
            <div className="w-8 h-8 flex items-center justify-center"><Hexagon className="w-5 h-5" /></div>
            <div className="w-8 h-8 rounded bg-white/20"></div>
            <div className="w-8 h-8 rounded-full border-2 border-white/20"></div>
            <div className="w-8 h-8 flex items-center justify-center"><Target className="w-5 h-5" /></div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section id="features" className="py-24 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">We enhance your prompts so AI performs at its best</h2>
            <p className="text-white/50">
              Generic prompts yield generic results. Our engine injects context, structure, and
              advanced parameter logic into your simple instructions, forcing LLMs to operate at their
              peak intelligence level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-8 hover:border-red-500/30 transition-colors group">
              <Zap className="w-6 h-6 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Prompt Enhancement Engine</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Real-time optimization that rewrites your basic queries into complex, instruction-heavy prompts.
              </p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-8 hover:border-red-500/30 transition-colors group">
              <Maximize2 className="w-6 h-6 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Context Expansion</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Automatically scrapes and attaches relevant project context to ensure zero-shot accuracy.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-8 hover:border-red-500/30 transition-colors group">
              <LayoutTemplate className="w-6 h-6 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Structure Optimization</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Formats outputs using Chain-of-Thought and Few-Shot methods.
              </p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-8 hover:border-red-500/30 transition-colors group">
              <Layers className="w-6 h-6 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Multi-Model Compatibility</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Optimized for GPT-4, Claude 3, and Gemini with specialized token logic.
              </p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-8 hover:border-red-500/30 transition-colors group">
              <Gauge className="w-6 h-6 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Speed & Simplicity</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Zero learning curve. Go from idea to prompt in under 2 seconds.
              </p>
            </div>
          </div>
        </section>

        {/* Engineering Process Section */}
        <section id="process" className="py-24 text-center scroll-mt-24">
          <h2 className="text-3xl font-bold mb-16">The Engineering Process</h2>
          
          <div className="flex flex-col md:flex-row items-start justify-between relative max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-white/10 z-0"></div>
            
            <div className="flex flex-col items-center flex-1 relative z-10 px-4 mb-12 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-[#1a0a0a] border border-red-500/30 flex items-center justify-center text-white/80 font-bold mb-6">1</div>
              <h3 className="text-lg font-bold mb-3">Enter simple prompt</h3>
              <p className="text-sm text-white/50 leading-relaxed">Just type your core requirement without worrying about the formatting.</p>
            </div>
            
            <div className="flex flex-col items-center flex-1 relative z-10 px-4 mb-12 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-[#1a0a0a] border border-red-500/30 flex items-center justify-center text-white/80 font-bold mb-6">2</div>
              <h3 className="text-lg font-bold mb-3">AI enhances</h3>
              <p className="text-sm text-white/50 leading-relaxed">Our Hyper Engine analyzes intent and builds a high-performance framework.</p>
            </div>
            
            <div className="flex flex-col items-center flex-1 relative z-10 px-4">
              <div className="w-12 h-12 rounded-full bg-[#1a0a0a] border border-red-500/30 flex items-center justify-center text-white/80 font-bold mb-6">3</div>
              <h3 className="text-lg font-bold mb-3">Get advanced output</h3>
              <p className="text-sm text-white/50 leading-relaxed">Copies your new professional-grade prompt directly into any AI platform.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12 scroll-mt-24">
          <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-10 flex flex-col justify-between">
            <div>
              <div className="text-red-500 text-6xl font-serif leading-none h-10 mb-4">&quot;</div>
              <p className="text-lg font-medium leading-relaxed mb-10">
                &quot;This tool completely changed how I use AI. My outputs are sharper and more consistent. It&apos;s like having a senior prompt engineer on demand.&quot;
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/avatar_elena.png" alt="Elena Vance" width={48} height={48} className="rounded-full object-cover w-12 h-12" />
              <div>
                <h4 className="font-bold text-sm">Elena Vance</h4>
                <p className="text-xs text-white/40 uppercase tracking-wider">Product Design Lead</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-10 flex flex-col justify-between">
            <div>
              <div className="text-red-500 text-6xl font-serif leading-none h-10 mb-4">&quot;</div>
              <p className="text-lg font-medium leading-relaxed mb-10">
                &quot;The multi-model compatibility is a lifesaver. One prompt that works perfectly across Claude and GPT-4 every single time. Incredible ROI.&quot;
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/avatar_marcus.png" alt="Marcus Thorne" width={48} height={48} className="rounded-full object-cover w-12 h-12" />
              <div>
                <h4 className="font-bold text-sm">Marcus Thorne</h4>
                <p className="text-xs text-white/40 uppercase tracking-wider">AI Operations Manager</p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Creators Section */}
        <section className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden flex flex-col md:flex-row items-center my-16">
          <div className="flex-1 p-12 md:p-16 z-10">
            <h2 className="text-3xl font-bold mb-4">Built for global creators</h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-md">
              Whether you&apos;re in San Francisco, London, or Tokyo, Promptify is powering the next generation of AI-native workflows worldwide.
            </p>
            <button 
              onClick={() => router.push('/prompts')}
              className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Generating
            </button>
          </div>
          <div className="flex-1 relative w-full h-[300px] md:h-[400px]">
            <Image 
              src="/world_map_red.png" 
              alt="Global Map" 
              fill
              className="object-cover opacity-80"
            />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-32 text-center flex flex-col items-center justify-center relative">
          <div className="absolute inset-0 bg-red-500/5 blur-[120px] rounded-full max-w-3xl mx-auto"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Upgrade Your Prompts.</h2>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-6">Upgrade Your Results.</h2>
            <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed mb-10">
              Join over 10,000 professionals who use Promptify to get the most out of their AI models every single day.
            </p>
            <button 
              onClick={() => router.push('/prompts')}
              className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-[0_0_30px_rgba(239,68,68,0.3)]"
            >
              Try Promptify Now — It&apos;s Free
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-12 py-8 px-8 relative z-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <div className="text-lg font-bold tracking-tight">Promptify <span className="text-white/70 text-sm">AI</span></div>
            <p className="text-[10px] text-white/30 tracking-widest uppercase">© 2026 Promptify AI. Built for the hyper-internet.</p>
          </div>
          
          <div className="flex items-center gap-8 text-xs font-bold tracking-widest text-white/40 uppercase">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/security" className="hover:text-white transition-colors">Security</Link>
            <Link href="/status" className="hover:text-white transition-colors">Status</Link>
          </div>
          
          <div className="flex items-center gap-4 text-white/40">
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-white transition-colors bg-white/5 p-2 rounded-full cursor-pointer">
              <Share2 className="w-4 h-4" />
            </button>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-white transition-colors bg-white/5 p-2 rounded-full cursor-pointer">
              <Globe className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
