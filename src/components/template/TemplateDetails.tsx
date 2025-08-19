import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { Template } from '../../types';
import TemplateFeatures from './TemplateFeatures';
import TemplateActions from './TemplateActions';
import TemplatePreview from './TemplatePreview';
import TemplateTechStack from './TemplateTechStack';
import TemplateLayout from './TemplateLayout';
import TemplateMedia from './TemplateMedia';
import TemplateInfo from './TemplateInfo';
import TemplateSubscription from './TemplateSubscription';

interface TemplateDetailsProps {
  template: Template;
  onGetStarted: () => void;
}

export default function TemplateDetails({ template, onGetStarted }: TemplateDetailsProps) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <TemplateLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <TemplateMedia 
            template={template} 
            onPreviewOpen={() => setShowPreview(true)}
          />
          <TemplateFeatures features={template.features} />
        </div>
        <div className="space-y-8">
          <TemplateInfo 
            template={template} 
            onGetStarted={onGetStarted}
            onPreview={() => setShowPreview(true)}
          />
          <TemplateSubscription />
        </div>
      </div>

      {showPreview && template.previewUrl && (
        <TemplatePreview
          previewUrl={template.previewUrl}
          onClose={() => setShowPreview(false)}
        />
      )}

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-4">
            <div>
              <p className="text-lg font-semibold text-gray-900">
                {template.name.split(' Ready to Launch Website')[0]}
              </p>
              <p className="text-[#ff4800]">Ready to Launch Website</p>
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="text-2xl font-bold text-gray-900">${template.price}/mo</div>
          </div>
          <button 
            onClick={onGetStarted}
            className="px-8 py-3 bg-[#ff4800] text-white rounded-lg font-medium hover:bg-[#ff4800]/90 transition-colors flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </TemplateLayout>
  );
}