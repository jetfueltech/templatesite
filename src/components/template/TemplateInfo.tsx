import React from 'react';
import type { Template } from '../../types';
import TemplateActions from './TemplateActions';
import FeatureItem from '../shared/FeatureItem';

interface TemplateInfoProps {
  template: Template;
  onGetStarted: () => void;
  onPreview: () => void;
}

export default function TemplateInfo({ template, onGetStarted, onPreview }: TemplateInfoProps) {
  return (
    <div>
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-[#ff4800] text-white text-sm font-medium rounded-full mb-4">
          {template.themeName}
        </div>
        
        <div className="space-y-1 mb-4">
          <h1 className="text-4xl font-bold text-gray-900">
            {template.name.split(' Ready to Launch Website')[0]}
          </h1>
          <p className="text-xl text-[#ff4800] font-medium">Ready to Launch Website</p>
        </div>

        <p className="text-gray-600 text-lg">{template.description}</p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Main Features</h3>
        <div className="grid gap-4">
          {template.mainFeatures.map((feature) => (
            <FeatureItem
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
      
      <TemplateActions
        price={template.price}
        onPreview={onPreview}
        onGetStarted={onGetStarted}
      />
    </div>
  );
}