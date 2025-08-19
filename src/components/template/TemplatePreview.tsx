import React from 'react';
import { X } from 'lucide-react';

interface TemplatePreviewProps {
  previewUrl: string;
  onClose: () => void;
}

export default function TemplatePreview({ previewUrl, onClose }: TemplatePreviewProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
      <div className="relative w-full h-full max-w-7xl mx-auto p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        >
          <X className="w-6 h-6" />
        </button>
        <iframe
          src={previewUrl}
          className="w-full h-full rounded-lg bg-white"
          title="Template Preview"
        />
      </div>
    </div>
  );
}