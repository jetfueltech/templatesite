import React, { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import OrderSummary from '../components/checkout/OrderSummary';
import PaymentCapture from '../components/checkout/PaymentCapture';
import NextSteps from '../components/checkout/NextSteps';
import LaunchDate from '../components/checkout/LaunchDate';
import DomainForm from '../components/checkout/DomainForm';

interface DomainInfo {
  hasDomain: boolean;
  domain?: string;
}

interface PaymentFormData {
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
}

export default function Checkout() {
  const location = useLocation();
  const checkoutData = location.state?.checkoutData;
  const [domainInfo, setDomainInfo] = useState<DomainInfo | null>(null);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState<'monthly' | 'onetime'>('monthly');

  if (!checkoutData) {
    return <Navigate to="/" replace />;
  }

  const calculatePlanDetails = () => {
    const monthlyMaintenance = 49;
    const monthlyWebsitePayment = 100;
    const addonTotal = checkoutData.selectedAddons.reduce((sum: number, addonId: string) => {
      const addon = addons.find(a => a.id === addonId);
      return sum + (addon?.price || 0);
    }, 0);

    if (selectedPaymentOption === 'monthly') {
      return {
        type: 'monthly' as const,
        total: monthlyMaintenance + monthlyWebsitePayment + addonTotal,
        maintenance: monthlyMaintenance,
        websitePayment: monthlyWebsitePayment,
        addons: addonTotal
      };
    } else {
      return {
        type: 'onetime' as const,
        total: monthlyMaintenance + addonTotal,
        maintenance: monthlyMaintenance,
        addons: addonTotal,
        oneTimePayment: 2499
      };
    }
  };

  const handleDomainSubmit = (info: DomainInfo) => {
    setDomainInfo(info);
  };

  const handlePaymentSubmit = (paymentData: PaymentFormData) => {
    // Handle payment submission
    console.log('Processing payment:', paymentData);
    // Here you would typically:
    // 1. Send payment info to payment processor
    // 2. Create customer record
    // 3. Initialize website setup process
    // 4. Redirect to success/thank you page
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {!domainInfo ? (
              <DomainForm onDomainSubmit={handleDomainSubmit} />
            ) : (
              <PaymentCapture 
                onSubmit={handlePaymentSubmit}
                selectedPlan={calculatePlanDetails()}
              />
            )}
            <LaunchDate />
          </div>
          <div className="space-y-8">
            <OrderSummary 
              template={checkoutData.template}
              addons={checkoutData.selectedAddons}
              businessInfo={checkoutData.businessInfo}
              onPaymentOptionChange={setSelectedPaymentOption}
              selectedPaymentOption={selectedPaymentOption}
            />
            <NextSteps />
          </div>
        </div>
      </div>
    </div>
  );
}