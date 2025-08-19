import React from 'react';
import { Users2, Calendar, ClipboardCheck, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Users2 className="w-6 h-6 text-[#ff4800]" />,
    title: "Website Setup",
    duration: "1-2 business days",
    description: "Our team will begin building your custom website using your selected template and branding."
  },
  {
    icon: <Calendar className="w-6 h-6 text-[#ff4800]" />,
    title: "Content Integration",
    duration: "2-3 business days",
    description: "We will integrate your business information, services, and any additional content you provide."
  },
  {
    icon: <ClipboardCheck className="w-6 h-6 text-[#ff4800]" />,
    title: "Review & Revisions",
    duration: "2-3 business days",
    description: "You will receive a preview link to review your website and request any adjustments."
  },
  {
    icon: <Rocket className="w-6 h-6 text-[#ff4800]" />,
    title: "Launch",
    duration: "1 business day",
    description: "Once approved, we will launch your website and ensure everything is working perfectly."
  }
];

export default function NextSteps() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h2>
      
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={step.title} className="flex gap-4">
            <div className="flex-shrink-0 mt-1">{step.icon}</div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium text-gray-900">{step.title}</h3>
                <span className="text-sm text-[#ff4800]">{step.duration}</span>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-gray-600">
        Our team is ready to start working on your website as soon as your order is completed. The entire process typically takes 7-10 business days from start to finish.
      </p>
    </div>
  );
}