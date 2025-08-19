import React from 'react';
import { Clock, Users, Zap } from 'lucide-react';

interface OverviewItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export default function TemplateOverview() {
  const overviewItems: OverviewItem[] = [
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Setup Time",
      value: "< 5 minutes"
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Team Size",
      value: "1 - 100+"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      label: "Updates",
      value: "Lifetime"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      {overviewItems.map((item) => (
        <div key={item.label} className="bg-gray-800 rounded-lg p-4">
          <div className="flex items-center gap-2 text-gray-400 mb-2">
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </div>
          <div className="text-white font-semibold">{item.value}</div>
        </div>
      ))}
    </div>
  );
}