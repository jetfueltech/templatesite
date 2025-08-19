import React from 'react';
import { businessTypes } from '../data/templates';

interface BusinessTypeFilterProps {
  selectedType: string;
  onSelect: (type: string) => void;
}

export default function BusinessTypeFilter({ selectedType, onSelect }: BusinessTypeFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {businessTypes.map((type) => (
        <button
          key={type}
          onClick={() => onSelect(type)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedType === type
              ? 'bg-[#ff4800] text-white'
              : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}