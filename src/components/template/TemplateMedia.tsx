import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import type { Template } from '../../types';

interface TemplateMediaProps {
  template: Template;
  onPreviewOpen: () => void;
}

const galleryImages = [
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1200&q=80'
];

export default function TemplateMedia({ template, onPreviewOpen }: TemplateMediaProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const allImages = [template.imageUrl, ...galleryImages];

  const navigate = (direction: 'prev' | 'next') => {
    setCurrentIndex((prev) => {
      if (direction === 'next') {
        return (prev + 1) % allImages.length;
      }
      return (prev - 1 + allImages.length) % allImages.length;
    });
  };

  return (
    <div className="space-y-2">
      <div className="relative rounded-lg overflow-hidden group">
        <img
          src={allImages[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="w-full aspect-video object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => navigate('prev')}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => navigate('next')}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <button
            onClick={onPreviewOpen}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="flex justify-center gap-2">
        {allImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[#ff4800]' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}