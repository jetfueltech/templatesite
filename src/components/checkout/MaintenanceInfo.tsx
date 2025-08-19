import React from 'react';
import { Shield, Zap, Wrench, HeadphonesIcon } from 'lucide-react';

export default function MaintenanceInfo() {
  const benefits = [
    {
      icon: <Shield className="w-5 h-5 text-[#ff4800]" />,
      title: "Security Protection",
      description: "24/7 monitoring and protection"
    },
    {
      icon: <Zap className="w-5 h-5 text-[#ff4800]" />,
      title: "Performance",
      description: "Regular speed optimizations"
    },
    {
      icon: <Wrench className="w-5 h-5 text-[#ff4800]" />,
      title: "Maintenance",
      description: "Continuous updates & backups"
    },
    {
      icon: <HeadphonesIcon className="w-5 h-5 text-[#ff4800]" />,
      title: "Support",
      description: "On-demand technical assistance"
    }
  ];

  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-6">
      <h3 className="font-medium text-gray-900 mb-3">Monthly Maintenance Includes</h3>
      <div className="grid grid-cols-2 gap-3">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="flex items-start gap-2">
            {benefit.icon}
            <div>
              <h4 className="text-sm font-medium text-gray-900">{benefit.title}</h4>
              <p className="text-xs text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}