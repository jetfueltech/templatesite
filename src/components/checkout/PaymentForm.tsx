import React from 'react';
import { CreditCard, Lock } from 'lucide-react';

interface PaymentFormProps {
  onSubmit: (data: any) => void;
}

export default function PaymentForm({ onSubmit }: PaymentFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(Object.fromEntries(formData));
  };

  return (
    <div>
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-[#ff4800]/10 rounded-full text-[#ff4800] text-sm font-medium mb-4">
          Secure Checkout
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Your Purchase</h2>
        <p className="text-gray-600">Enter your payment details to get started</p>
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
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#ff4800] focus:border-transparent"
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
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#ff4800] focus:border-transparent pl-10"
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
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#ff4800] focus:border-transparent"
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
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#ff4800] focus:border-transparent"
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