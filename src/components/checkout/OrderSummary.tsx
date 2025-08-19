import React from 'react';
import { Template, BusinessInfo } from '../../types';
import { addons } from '../../data/addons';
import PaymentOptions from './PaymentOptions';
import MaintenanceInfo from './MaintenanceInfo';

interface OrderSummaryProps {
  template: Template;
  addons: string[];
  businessInfo: BusinessInfo;
  selectedPaymentOption: 'monthly' | 'onetime';
  onPaymentOptionChange: (option: 'monthly' | 'onetime') => void;
}

export default function OrderSummary({ 
  template, 
  addons: selectedAddonIds, 
  businessInfo,
  selectedPaymentOption,
  onPaymentOptionChange
}: OrderSummaryProps) {
  const selectedAddons = addons.filter(addon => selectedAddonIds.includes(addon.id));
  const addonTotal = selectedAddons.reduce((sum, addon) => sum + addon.price, 0);
  const monthlyMaintenance = 49;
  const monthlyWebsitePayment = template.price;
  const oneTimePayment = template.price * 24; // 24 months worth of payments
  const numberOfPayments = 24; // 2 years of payments
  
  const calculateTotal = () => {
    if (selectedPaymentOption === 'monthly') {
      return {
        monthly: monthlyMaintenance + monthlyWebsitePayment + addonTotal,
        breakdown: {
          maintenance: monthlyMaintenance,
          websitePayment: monthlyWebsitePayment,
          addons: addonTotal
        }
      };
    } else {
      return {
        oneTime: oneTimePayment,
        monthly: monthlyMaintenance + addonTotal,
        breakdown: {
          maintenance: monthlyMaintenance,
          addons: addonTotal
        }
      };
    }
  };

  const total = calculateTotal();
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
      
      <PaymentOptions
        selectedOption={selectedPaymentOption}
        onSelect={onPaymentOptionChange}
      />

      <MaintenanceInfo />

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-start pb-4 border-b border-gray-200">
          <div>
            <h3 className="font-medium text-gray-900">{template.themeName}</h3>
            <p className="text-sm text-gray-500">Website Template</p>
          </div>
        </div>

        {selectedAddons.map((addon) => (
          <div key={addon.id} className="flex justify-between items-start pb-4 border-b border-gray-200">
            <div>
              <h3 className="font-medium text-gray-900">{addon.name}</h3>
              <p className="text-sm text-gray-500">Add-on Feature</p>
            </div>
            <span className="font-medium text-gray-900">${addon.price}/mo</span>
          </div>
        ))}
      </div>

      <div className="space-y-2 mb-6">
        {selectedPaymentOption === 'monthly' ? (
          <>
            <div className="flex justify-between text-gray-600">
              <span>Monthly Maintenance</span>
              <span>${total.breakdown.maintenance}/mo</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <div>
                <span>Website Payment</span>
                <p className="text-sm text-gray-500">({numberOfPayments} monthly payments)</p>
              </div>
              <span>${total.breakdown.websitePayment}/mo</span>
            </div>
            {addonTotal > 0 && (
              <div className="flex justify-between text-gray-600">
                <span>Add-ons</span>
                <span>${total.breakdown.addons}/mo</span>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="flex justify-between text-gray-600">
              <div>
                <span>One-Time Website Payment</span>
                <p className="text-sm text-gray-500">(Save 15% vs monthly payments)</p>
              </div>
              <span>${total.oneTime}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Monthly Maintenance</span>
              <span>${total.breakdown.maintenance}/mo</span>
            </div>
            {addonTotal > 0 && (
              <div className="flex justify-between text-gray-600">
                <span>Add-ons</span>
                <span>${total.breakdown.addons}/mo</span>
              </div>
            )}
          </>
        )}
      </div>

      <div className="flex justify-between text-lg font-bold text-gray-900 pt-4 border-t border-gray-200">
        {selectedPaymentOption === 'monthly' ? (
          <>
            <span>Monthly Total</span>
            <span>${total.monthly}/mo</span>
          </>
        ) : (
          <div className="w-full space-y-2">
            <div className="flex justify-between">
              <span>One-Time Payment</span>
              <span>${total.oneTime}</span>
            </div>
            <div className="flex justify-between text-base text-gray-600">
              <span>Monthly Maintenance & Add-ons</span>
              <span>${total.monthly}/mo</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 bg-gray-50 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 mb-2">Business Information</h4>
        <div className="space-y-1 text-sm text-gray-600">
          <p>{businessInfo.name}</p>
          <p>{businessInfo.businessName}</p>
          <p>{businessInfo.email}</p>
          <p className="capitalize">{businessInfo.businessType}</p>
        </div>
      </div>
    </div>
  );
}