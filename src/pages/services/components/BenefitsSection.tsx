import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Target, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: <Zap className="w-6 h-6 text-[#ff4800]" />,
    title: "Lightning Fast Performance",
    description: "Our websites are optimized for speed to provide the best user experience and improve search rankings."
  },
  {
    icon: <Users className="w-6 h-6 text-[#ff4800]" />,
    title: "User-Focused Design",
    description: "Every element is designed to guide visitors toward taking action and becoming customers."
  },
  {
    icon: <Target className="w-6 h-6 text-[#ff4800]" />,
    title: "SEO Optimized",
    description: "Built-in SEO features help your website rank higher in search results and attract more visitors."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-[#ff4800]" />,
    title: "Modern & Professional",
    description: "Clean, modern designs that establish trust and credibility with your potential customers."
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Website Design</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our websites are designed to not just look great, but to deliver real business results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 p-6 bg-gray-50 rounded-lg"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#ff4800]/10 rounded-lg flex items-center justify-center">
                  {benefit.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}