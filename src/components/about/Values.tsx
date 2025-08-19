import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Lightbulb, Target } from 'lucide-react';

export default function Values() {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      description: "We're passionate about helping businesses succeed online and it shows in everything we do."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust",
      description: "We build lasting relationships through transparency, reliability, and consistent results."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "We constantly evolve our solutions to stay ahead of digital trends and technologies."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excellence",
      description: "We maintain the highest standards in design, development, and customer service."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-3 py-1 bg-[#ff4800]/10 rounded-full text-[#ff4800] text-sm font-medium mb-4">
            Our Values
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Drives Us Forward
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our core values shape every decision we make and every website we create
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="w-12 h-12 bg-[#ff4800]/10 rounded-lg flex items-center justify-center mb-4">
                <div className="text-[#ff4800]">{value.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}