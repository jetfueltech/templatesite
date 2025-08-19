import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, CheckCircle, Award } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-6 h-6 text-[#ff4800]" />,
    value: "500+",
    label: "Happy Clients"
  },
  {
    icon: <Clock className="w-6 h-6 text-[#ff4800]" />,
    value: "24/7",
    label: "Support"
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-[#ff4800]" />,
    value: "99.9%",
    label: "Uptime"
  },
  {
    icon: <Award className="w-6 h-6 text-[#ff4800]" />,
    value: "5-Star",
    label: "Rated Service"
  }
];

export default function ServiceStats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-[#ff4800]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}