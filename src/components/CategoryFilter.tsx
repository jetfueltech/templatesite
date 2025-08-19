import React from 'react';

const categories = [
  'All Templates',
  'Business',
  'E-commerce',
  'Portfolio',
  'Blog',
  'Landing Page',
];

export default function CategoryFilter() {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {category}
        </button>
      ))}
    </div>
  );
}