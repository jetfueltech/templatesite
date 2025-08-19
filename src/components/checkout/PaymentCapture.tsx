import React from 'react';
import { CreditCard, Lock, CheckCircle } from 'lucide-react';

interface PaymentCaptureProps {
  onSubmit: (data: PaymentFormData) => void;
  selectedPlan: {
    type: 'monthly' | 'onetime';
    total: number;
    maintenance?: number;
    websitePayment?: number;
    addons?: number;
    oneTimePayment?: number;
  };
}

interface PaymentFormData {
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
}

export default function PaymentCapture({ onSubmit, selectedPlan }: PaymentCaptureProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      cardName: formData.get('cardName') as string,
      cardNumber: formData.get('cardNumber') as string,
      expiry: formData.get('expiry') as string,
      cvc: formData.get('cvc') as string,
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Package Summary */}
      <div className="mb-8 pb-8 border-b border-gray-200">
        <div className="flex items-center gap-2 text-[#ff4800] font-medium mb-4">
          <CheckCircle className="w-5 h-5" />
          <span>Selected Package</span>
        </div>

        {selectedPlan.type === 'monthly' ? (
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-2xl font-bold text-gray-900">Monthly Plan</h3>
              <span className="text-3xl font-bold text-gray-900">${selectedPlan.total}/mo</span>
            </div>
            <div className="space-y-1 text-sm text-gray-600">
              {selectedPlan.maintenance && (
                <div className="flex justify-between">
                  <span>Monthly Maintenance</span>
                  <span>${selectedPlan.maintenance}/mo</span>
                </div>
              )}
              {selectedPlan.websitePayment && (
                <div className="flex justify-between">
                  <span>Website Payment</span>
                  <span>${selectedPlan.websitePayment}/mo</span>
                </div>
              )}
              {selectedPlan.addons && selectedPlan.addons > 0 && (
                <div className="flex justify-between">
                  <span>Add-ons</span>
                  <span>${selectedPlan.addons}/mo</span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-2xl font-bold text-gray-900">One-Time Payment Plan</h3>
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-900">${selectedPlan.oneTimePayment}</div>
                <div className="text-sm text-gray-600">+ ${selectedPlan.total}/mo</div>
              </div>
            </div>
            <div className="space-y-1 text-sm text-gray-600">
              {selectedPlan.maintenance && (
                <div className="flex justify-between">
                  <span>Monthly Maintenance</span>
                  <span>${selectedPlan.maintenance}/mo</span>
                </div>
              )}
              {selectedPlan.addons && selectedPlan.addons > 0 && (
                <div className="flex justify-between">
                  <span>Add-ons</span>
                  <span>${selectedPlan.addons}/mo</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Payment Form */}
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-[#ff4800]/10 rounded-full text-[#ff4800] text-sm font-medium mb-4">
          Payment Details
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Complete Your Purchase</h2>
        <p className="text-gray-600">Enter your payment information to get started</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-2">
            Name on Card
          </label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4800] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
            Card Number
          </label>
          <div className="relative">
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              required
              pattern="[0-9]{16}"
              placeholder="1234 5678 9012 3456"
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4800] focus:border-transparent"
            />
            <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-2">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiry"
              name="expiry"
              placeholder="MM/YY"
              required
              pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4800] focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-2">
              CVC
            </label>
            <input
              type="text"
              id="cvc"
              name="cvc"
              required
              pattern="[0-9]{3,4}"
              placeholder="123"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4800] focus:border-transparent"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-[#ff4800] text-white rounded-lg font-medium hover:bg-[#ff4800]/90 transition-colors flex items-center justify-center gap-2"
        >
          <Lock className="w-4 h-4" />
          Complete Purchase
        </button>

        <p className="text-center text-sm text-gray-500">
          Your payment is secure and encrypted
        </p>
      </form>
    </div>
  );
}