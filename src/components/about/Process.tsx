import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, FileText, Code2, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: <MousePointerClick className="w-6 h-6" />,
      title: "Select Your Website",
      description: "Choose from our collection of ready-to-launch websites designed for your industry."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Provide Information",
      description: "Share your business details and preferences to personalize your website."
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Development",
      description: "Our team customizes your selected website with your branding and content."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Review & Launch",
      description: "After your approval, we launch your new website and provide ongoing support."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-3 py-1 bg-[#ff4800]/10 rounded-full text-[#ff4800] text-sm font-medium mb-4">
            Our Process
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures a smooth journey from selection to launch
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-gray-50 rounded-xl p-6 h-full">
                <div className="w-12 h-12 bg-[#ff4800]/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-[#ff4800]">{step.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-gray-200 transform translate-x-4">
                  <div className="absolute right-0 w-2 h-2 bg-[#ff4800] rounded-full transform -translate-y-1/2" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}