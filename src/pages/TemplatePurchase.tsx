import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTemplate } from '../hooks/useTemplate';
import TemplateDetails from '../components/template/TemplateDetails';
import BusinessForm from '../components/questionnaire/BusinessForm';
import UpsellPage from '../components/upsell/UpsellPage';
import type { BusinessInfo } from '../types';

type Step = 'details' | 'questionnaire' | 'upsell';

export default function TemplatePurchase() {
  const { id } = useParams();
  const { template, loading } = useTemplate(id);
  const [step, setStep] = useState<Step>('details');
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo | null>(null);

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading template...</p>
      </div>
    );
  }

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Template not found</p>
      </div>
    );
  }

  const handleBusinessSubmit = (data: BusinessInfo) => {
    setBusinessInfo(data);
    setStep('upsell');
  };

  const steps = {
    details: <TemplateDetails template={template} onGetStarted={() => setStep('questionnaire')} />,
    questionnaire: <BusinessForm onSubmit={handleBusinessSubmit} />,
    upsell: businessInfo ? (
      <UpsellPage template={template} businessInfo={businessInfo} />
    ) : null
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {steps[step]}
    </div>
  );
}