import React from 'react';
import { Check } from 'lucide-react';

interface TemplateFeaturesProps {
  features: string[];
}

const featureImages = {
  "Online Booking System": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&h=300&q=80",
  "Service Area Maps": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&h=300&q=80",
  "Customer Reviews": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=300&q=80",
  "Service Packages": "https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&w=800&h=300&q=80",
  "Team Profiles": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=300&q=80",
  "Contact Forms": "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?auto=format&fit=crop&w=800&h=300&q=80",
  "Photo Gallery": "https://images.unsplash.com/photo-1493857671505-72967e2e2760?auto=format&fit=crop&w=800&h=300&q=80",
  "Mobile Responsive": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=300&q=80"
};

export default function TemplateFeatures({ features }: TemplateFeaturesProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
      <div className="space-y-6">
        {features.map((feature) => (
          <div 
            key={feature} 
            className="bg-white rounded-lg border border-gray-100 hover:border-gray-200 transition-colors overflow-hidden"
          >
            <div className="w-full h-[300px] overflow-hidden">
              <img
                src={featureImages[feature as keyof typeof featureImages]}
                alt={feature}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex items-center">
              <Check className="w-5 h-5 text-[#ff4800] mr-3 flex-shrink-0" />
              <span className="text-gray-700 text-lg">{feature}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}