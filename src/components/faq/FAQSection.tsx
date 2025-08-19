import React from 'react';
import { motion } from 'framer-motion';
import FAQTabs from './FAQTabs';
import { faqs } from './FAQData';

export default function FAQSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-[#ff4800]/10 rounded-full text-[#ff4800] text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our website services and how we can help your business grow online
          </p>
        </div>

        <FAQTabs categories={faqs} />
      </motion.div>
    </section>
  );
}