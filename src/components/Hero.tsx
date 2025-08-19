import React from 'react';
import { ArrowRight, Sparkles, Zap, CheckCircle } from 'lucide-react';

export default function Hero() {
  const scrollToTemplates = () => {
    const templatesSection = document.getElementById('templates-section');
    if (templatesSection) {
      templatesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <img 
            src="https://jetfuel.tech/wp-content/uploads/2024/01/J_v1_transparent-ezgif.com-optimize-3-450x450.gif"
            alt="JetFuel Logo" 
            className="h-24 w-24 mx-auto mb-8 animate-pulse"
          />
          
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Ready-to-Launch Website
            <span className="block text-[#ff4800] mt-2">Built by Humans + AI in Less Than 7 Days</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Get your website live capturing new service requests and leads in just 7 days or less. 
            Our AI-powered design team creates a custom website tailored to your brand and needs, fast.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={scrollToTemplates}
              className="group bg-[#ff4800] px-8 py-3 text-white rounded-lg font-medium hover:bg-[#ff4800]/90 transition-colors flex items-center gap-2"
            >
              Launch Your Website Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-x-2">
              <Zap className="h-5 w-5 text-[#ff4800]" />
              <span className="font-medium text-gray-900">Fast Setup</span>
            </div>
            <div className="flex items-center gap-x-2">
              <CheckCircle className="h-5 w-5 text-[#ff4800]" />
              <span className="font-medium text-gray-900">Real Results</span>
            </div>
            <div className="flex items-center gap-x-2">
              <Sparkles className="h-5 w-5 text-[#ff4800]" />
              <span className="font-medium text-gray-900">7-Day Launch Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}