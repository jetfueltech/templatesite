import React from 'react';
import { Check } from 'lucide-react';

interface PaymentOptionsProps {
  selectedOption: 'monthly' | 'onetime';
  onSelect: (option: 'monthly' | 'onetime') => void;
}

export default function PaymentOptions({ selectedOption, onSelect }: PaymentOptionsProps) {
  return (
    <div className="space-y-4 mb-6">
      <h3 className="font-medium text-gray-900">Payment Options</h3>
      
      <div className="space-y-3">
        <button
          onClick={() => onSelect('monthly')}
          className={`w-full flex items-start justify-between p-4 rounded-lg border-2 transition-all ${
            selectedOption === 'monthly' 
              ? 'border-[#ff4800] bg-[#ff4800]/5' 
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-gray-900">Monthly Payment</h4>
              <span className="px-2 py-1 text-xs font-medium text-[#ff4800] bg-[#ff4800]/10 rounded-full">
                Most Flexible
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              $150/month with $100 going towards your website balance
            </p>
          </div>
          <Check className={`w-5 h-5 ${selectedOption === 'monthly' ? 'text-[#ff4800]' : 'text-transparent'}`} />
        </button>

        <button
          onClick={() => onSelect('onetime')}
          className={`w-full flex items-start justify-between p-4 rounded-lg border-2 transition-all ${
            selectedOption === 'onetime' 
              ? 'border-[#ff4800] bg-[#ff4800]/5' 
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-gray-900">One-Time Payment</h4>
              <span className="px-2 py-1 text-xs font-medium text-green-600 bg-green-100 rounded-full">
                Save 15%
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              $2,499 one-time payment + $49/month maintenance fee
            </p>
          </div>
          <Check className={`w-5 h-5 ${selectedOption === 'onetime' ? 'text-[#ff4800]' : 'text-transparent'}`} />
        </button>
      </div>
    </div>
  );
}