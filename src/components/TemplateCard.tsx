import React from 'react';
import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Template } from '../types';

interface TemplateCardProps {
  template: Template;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/template/${template.id}`);
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative aspect-[3/2] group">
        <img
          src={template.imageUrl}
          alt={template.name}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-[#ff4800] text-white text-sm font-medium rounded-full">
          {template.themeName}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
          <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {template.tags.slice(0, 1).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm text-[#ff4800] bg-[#ff4800]/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-1 mb-6">
          <h3 className="text-xl font-bold text-gray-900">{template.name.split(' Ready to Launch Website')[0]}</h3>
          <p className="text-[#ff4800] font-medium">Ready to Launch Website</p>
        </div>

        <p className="text-gray-600 mb-6 line-clamp-2">{template.description}</p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-[#ff4800] font-semibold">${template.price}/mo</span>
          <button 
            className="text-gray-400 hover:text-[#ff4800] transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              window.open(template.previewUrl, '_blank');
            }}
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}