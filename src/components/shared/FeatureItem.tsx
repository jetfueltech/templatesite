import React from 'react';
import { Sparkles } from 'lucide-react';

interface FeatureItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function FeatureItem({ 
  title, 
  description, 
  icon = <Sparkles className="w-5 h-5 text-[#ff4800]" /> 
}: FeatureItemProps) {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h4 className="font-semibold text-gray-900">{title}</h4>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}