import React from 'react';
import type { BusinessInfo } from '../../types';

interface BusinessFormProps {
  onSubmit: (data: BusinessInfo) => void;
}

const businessCategories = [
  "Cleaning & Maintenance",
  "Home Services",
  "Professional Services",
  "Health & Wellness",
  "Beauty & Personal Care",
  "Consulting & Coaching",
  "Automotive Services",
  "Other Services"
];

export default function BusinessForm({ onSubmit }: BusinessFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      businessName: formData.get('businessName') as string,
      businessType: formData.get('businessType') as string,
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <div className="inline-block px-3 py-1 bg-[#ff4800]/10 rounded-full text-[#ff4800] text-sm font-medium mb-4">
          Business Details
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Tell us about your business</h2>
        <p className="text-gray-600">We'll use this information to customize your website</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#ff4800] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#ff4800] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            required
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#ff4800] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
            Business Category
          </label>
          <select
            id="businessType"
            name="businessType"
            required
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#ff4800] focus:border-transparent"
          >
            <option value="">Select your business category</option>
            {businessCategories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-[#ff4800] text-white rounded-lg font-medium hover:bg-[#ff4800]/90 transition-colors"
        >
          Continue
        </button>
      </form>
    </div>
  );
}