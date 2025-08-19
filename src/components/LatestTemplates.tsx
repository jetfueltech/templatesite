import React, { useState } from 'react';
import TemplateCard from './TemplateCard';
import BusinessTypeFilter from './BusinessTypeFilter';
import { templates } from '../data/templates';
import { ArrowRight } from 'lucide-react';

export default function LatestTemplates() {
  const [selectedType, setSelectedType] = useState('All');

  const filteredTemplates = templates.filter(template => 
    selectedType === 'All' || template.tags.includes(selectedType)
  );

  const handleGetStarted = () => {
    const solutionSection = document.getElementById('solution-section');
    if (solutionSection) {
      solutionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="templates-section" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-[#ff4800]/10 rounded-full text-[#ff4800] text-sm font-medium mb-4">
            Common Challenges
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Are Your Customers Struggling<br />to Find You Online?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Many businesses face challenges with being found online. Here's why:
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="bg-[#ff4800]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#ff4800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Low Visibility in Search Results</h3>
            <p className="text-gray-600">
              Many service-based businesses struggle with low visibility online, making it difficult for potential customers to find them.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="bg-[#ff4800]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#ff4800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ineffective Website Design</h3>
            <p className="text-gray-600">
              An outdated or poorly designed website can turn away potential customers, reducing conversion rates significantly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="bg-[#ff4800]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#ff4800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Lack of Automated Response</h3>
            <p className="text-gray-600">
              Most websites don't have an automated response system, leading to hot leads sitting for days turn cold.
            </p>
          </div>
        </div>

        {/* Solution Section */}
        <div id="solution-section" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Solution: A CONVERSION-Focused Website
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Times are different and competition is fierce. That's why we go beyond just creating a simple web page.
          </p>

          <BusinessTypeFilter selectedType={selectedType} onSelect={setSelectedType} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="hidden md:block">
            <p className="text-lg font-semibold text-gray-900">Ready to launch your professional website?</p>
            <p className="text-gray-600">Choose a template to get started</p>
          </div>
          <button 
            onClick={handleGetStarted}
            className="px-8 py-3 bg-[#ff4800] text-white rounded-lg font-medium hover:bg-[#ff4800]/90 transition-colors flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}