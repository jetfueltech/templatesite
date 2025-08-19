import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Layout, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Palette className="w-6 h-6 text-[#ff4800]" />,
    title: "Design Consultation",
    description: "We start by understanding your brand, goals, and target audience to create the perfect design strategy."
  },
  {
    icon: <Layout className="w-6 h-6 text-[#ff4800]" />,
    title: "Template Selection",
    description: "Choose from our premium templates or opt for a custom design tailored to your needs."
  },
  {
    icon: <Code className="w-6 h-6 text-[#ff4800]" />,
    title: "Customization",
    description: "We customize every aspect of your website to match your brand and business requirements."
  },
  {
    icon: <Rocket className="w-6 h-6 text-[#ff4800]" />,
    title: "Launch",
    description: "After thorough testing, we launch your website and provide training on how to manage it."
  }
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Design Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven process to ensure your website perfectly represents your brand and achieves your business goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-[#ff4800]/10 rounded-lg flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}