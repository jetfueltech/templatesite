import React from 'react';
import { Eye, ArrowRight } from 'lucide-react';

interface TemplateActionsProps {
  onPreview: () => void;
  onGetStarted: () => void;
  price: number;
}

export default function TemplateActions({ onPreview, onGetStarted, price }: TemplateActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
      <button
        onClick={(e) => {
          e.preventDefault();
          onPreview();
        }}
        className="flex items-center gap-2 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <Eye className="w-5 h-5" />
        <span>Preview Website</span>
      </button>
      
      <div className="flex items-center gap-4">
        <span className="text-3xl font-bold text-gray-900">${price}/mo</span>
        <button
          onClick={onGetStarted}
          className="px-6 py-3 bg-[#ff4800] text-white rounded-lg font-medium hover:bg-[#ff4800]/90 flex items-center gap-2 transition-colors"
        >
          Get Started
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}