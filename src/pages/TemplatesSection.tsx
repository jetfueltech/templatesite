import React, { useState } from 'react';
import { templates, businessTypes } from '../data/templates';
import TemplateCard from '../components/TemplateCard';
import BusinessTypeFilter from '../components/BusinessTypeFilter';

export default function TemplatesSection() {
  const [selectedType, setSelectedType] = useState('All');

  const filteredTemplates = templates.filter(template => 
    selectedType === 'All' || template.tags.includes(selectedType)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Ready-to-Launch Websites
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose from our collection of professionally designed websites, each optimized for your industry
        </p>
      </div>

      <BusinessTypeFilter selectedType={selectedType} onSelect={setSelectedType} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTemplates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );
}