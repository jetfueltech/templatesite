import React from 'react';
import { motion } from 'framer-motion';

export default function ClientsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 bg-[#ff4800]/10 rounded-full text-[#ff4800] text-sm font-medium mb-4">
            Our Clients
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Available for Website Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These premium services are exclusively available for our website clients as part of our commitment to your online success.
          </p>
        </motion.div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Already a website client? Log in to your dashboard to access these services. 
            Not yet a client? View our website templates to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-[#ff4800] text-white rounded-lg font-medium hover:bg-[#ff4800]/90 transition-colors">
              View Website Templates
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Client Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}