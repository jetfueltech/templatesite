import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforming Businesses<br />
            <span className="text-[#ff4800]">One Website at a Time</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of designers, developers, thinkers, and AI agents using technology 
            to push the limits on what's possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
}