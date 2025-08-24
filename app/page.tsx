'use client';

import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [generatedResponse, setGeneratedResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setGeneratedResponse('');

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate response');
      }

      setGeneratedResponse(data.response);
    } catch (error) {
      console.error('Error:', error);
      setGeneratedResponse('Error generating response. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-sans flex flex-col">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h1 className="text-xl font-semibold text-neutral-900">Promptify-AI</h1>
            </div>
            <div className="flex items-center space-x-2 text-sm text-neutral-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Build by Shubham Mukherjee</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
        {/* Hero Section */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-neutral-900 mb-5 tracking-tight">
            Advanced Prompt Generator
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Create optimized prompts using 30+ advanced AI techniques. 
            Transform your ideas into powerful, effective prompts.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden mb-14">
          {/* Card Header */}
          <div className="px-8 py-7 border-b border-neutral-100">
            <h3 className="text-lg font-semibold text-neutral-900 mb-1">
              Generate Your Prompt
            </h3>
            <p className="text-sm text-neutral-600">
              Describe what you want to create, and we&apos;ll craft the perfect prompt for you
            </p>
          </div>

          {/* Form Section */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="prompt" className="block text-sm font-medium text-neutral-700 mb-3">
                  What would you like to create?
                </label>
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., 'A creative writing prompt for a sci-fi story', 'A prompt for analyzing customer feedback', 'A prompt for teaching math concepts to children'"
                  className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-neutral-900 placeholder-neutral-400 text-base leading-relaxed transition-all duration-200 hover:border-neutral-400"
                  rows={4}
                  disabled={isLoading}
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading || !prompt.trim()}
                className="w-full bg-neutral-900 text-white py-4 px-6 rounded-xl hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium text-base shadow-sm hover:shadow-md"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Generating...</span>
                  </div>
                ) : (
                  'Generate Prompt'
                )}
              </button>
            </form>

            {/* Response Section */}
            {generatedResponse && (
              <div className="mt-12 pt-10 border-t border-neutral-100">
                <div className="flex items-center space-x-2 mb-5">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Generated Response with Accuracy Metrics
                  </h3>
                </div>
                
                {/* Accuracy Summary Card */}
                <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-sm font-medium text-blue-800">Accuracy Analysis</span>
                  </div>
                  <p className="text-sm text-blue-700">
                    Each prompt variation includes accuracy ratings based on expected effectiveness. 
                    Higher accuracy indicates better expected results for your specific use case.
                  </p>
                </div>

                {/* Main Response */}
                <div className="bg-neutral-50 rounded-xl p-7 border border-neutral-200 mb-6">
                  <div className="prose prose-neutral max-w-none">
                    <div className="text-neutral-800 whitespace-pre-wrap leading-relaxed text-base">
                      {generatedResponse}
                    </div>
                  </div>
                </div>

                {/* Accuracy Legend */}
                <div className="mt-4 bg-white rounded-lg p-5 border border-neutral-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-neutral-700">Accuracy Scale</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-neutral-600">90-100%: Excellent</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-neutral-600">80-89%: Very Good</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-neutral-600">70-79%: Good</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      <span className="text-neutral-600">Below 70%: Basic</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-7 border border-neutral-200">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="font-semibold text-neutral-900 mb-2">30+ Techniques</h4>
            <p className="text-sm text-neutral-600">
              Advanced prompting methods including Chain-of-Thought, Few-Shot, and more
            </p>
          </div>

          <div className="bg-white rounded-xl p-7 border border-neutral-200">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-neutral-900 mb-2">Instant Results</h4>
            <p className="text-sm text-neutral-600">
              Get optimized prompts in seconds with detailed explanations
            </p>
          </div>

          <div className="bg-white rounded-xl p-7 border border-neutral-200">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h4 className="font-semibold text-neutral-900 mb-2">Customizable</h4>
            <p className="text-sm text-neutral-600">
              Tailored prompts for any use case or domain
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
