import React from 'react';
import { motion } from 'framer-motion';

interface ServiceFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceFeature({
  icon,
  title,
  description,
  delay = 0
}: ServiceFeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100"
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-[#ff4800]/10 rounded-lg flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}