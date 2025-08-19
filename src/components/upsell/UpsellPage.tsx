import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addons } from '../../data/addons';
import AddOnCard from './AddOnCard';

interface UpsellPageProps {
  template: Template;
  businessInfo: BusinessInfo;
}

export default function UpsellPage({ template, businessInfo }: UpsellPageProps) {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleAddon = (id: string) => {
    setSelectedAddons((current) =>
      current.includes(id)
        ? current.filter((addonId) => addonId !== id)
        : [...current, id]
    );
  };

  const handleCheckout = () => {
    navigate('/checkout', {
      state: {
        checkoutData: {
          template,
          selectedAddons,
          businessInfo
        }
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-block px-3 py-1 bg-[#ff4800]/10 rounded-full text-[#ff4800] text-sm font-medium mb-4">
          Enhance Your Website
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Add Powerful Features
        </h2>
        <p className="text-gray-600 text-lg">
          Supercharge your website with these powerful add-ons
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {addons.map((addon) => (
          <AddOnCard
            key={addon.id}
            addon={addon}
            selected={selectedAddons.includes(addon.id)}
            onSelect={toggleAddon}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleCheckout}
          className="px-8 py-3 bg-[#ff4800] text-white rounded-lg font-medium hover:bg-[#ff4800]/90 transition-colors"
        >
          Continue to Checkout
        </button>
      </div>
    </div>
  );
}