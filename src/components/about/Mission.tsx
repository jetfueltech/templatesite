import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap } from 'lucide-react';

export default function Mission() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="inline-block px-3 py-1 bg-[#ff4800]/10 rounded-full text-[#ff4800] text-sm font-medium mb-4">
              Our Mission
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Empowering Service Businesses to Succeed Online
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At Jetfuel.Tech, we believe that every service business deserves a powerful online 
              presence without the hassle of managing complex technology. Our mission is to provide 
              beautiful, high-converting websites that work as hard as you do.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <Target className="w-6 h-6 text-[#ff4800]" />,
                  title: "Results-Driven Approach",
                  description: "We focus on creating websites that generate real business results"
                },
                {
                  icon: <Users className="w-6 h-6 text-[#ff4800]" />,
                  title: "Customer-First Philosophy",
                  description: "Your success is our success - we're invested in your growth"
                },
                {
                  icon: <Zap className="w-6 h-6 text-[#ff4800]" />,
                  title: "Continuous Innovation",
                  description: "We stay ahead of digital trends to keep you competitive"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#ff4800]/10 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=1000"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-[#ff4800]/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}