import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import ImageModal from './ImageModal';

interface ImageGalleryProps {
  images: string[];
  onPreview?: () => void;
}

export default function ImageGallery({ images, onPreview }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const navigate = (direction: 'prev' | 'next') => {
    setCurrentIndex((prev) => {
      const total = images.length;
      return direction === 'next' 
        ? (prev + 1) % total
        : (prev - 1 + total) % total;
    });
  };

  return (
    <>
      <div className="space-y-2">
        <div className="relative rounded-lg overflow-hidden group">
          <img
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="w-full aspect-video object-cover cursor-pointer"
            onClick={() => setShowModal(true)}
          />
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('prev');
                  }}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('next');
                  }}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
            <button
              onClick={() => setShowModal(true)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
          {onPreview && (
            <button
              onClick={onPreview}
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-medium"
            >
              Click to preview
            </button>
          )}
        </div>
        
        {images.length > 1 && (
          <div className="flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#ff4800]' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <ImageModal
          imageUrl={images[currentIndex]}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}