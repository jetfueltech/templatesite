import React from 'react';
import { Clock, Briefcase, Target, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import Marquee from './ui/Marquee';

const clientTraits = [
  {
    icon: <Briefcase className="w-6 h-6 text-[#ff4800]" />,
    title: "Business Focused",
    description: "You're passionate about growing\nyour business and serving\nyour customers, not wrestling\nwith website technicalities."
  },
  {
    icon: <Clock className="w-6 h-6 text-[#ff4800]" />,
    title: "Time Conscious",
    description: "Your time is valuable and\nbetter spent on your core\nbusiness activities rather than\nmanaging website updates."
  },
  {
    icon: <Target className="w-6 h-6 text-[#ff4800]" />,
    title: "Results Driven",
    description: "You want a website that\nactively generates leads and\nconverts visitors, not just a\ndigital business card."
  },
  {
    icon: <Settings className="w-6 h-6 text-[#ff4800]" />,
    title: "Hands-Off Approach",
    description: "You prefer to delegate technical\ntasks to experts while maintaining\nfocus on your business growth."
  }
];

export default function IdealClientSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-3 py-1 bg-[#ff4800]/10 rounded-full text-[#ff4800] text-sm font-medium mb-4">
            Perfect Fit
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Is This Right For You?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our service is perfect for busy professionals who want to focus on their business while leaving their online presence to the experts
          </p>
        </motion.div>

        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {clientTraits.map((trait, index) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 min-h-[250px] flex flex-col"
            >
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-sm flex-shrink-0">
                {trait.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {trait.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {trait.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="lg:hidden relative">
          <Marquee className="[--duration:30s]" pauseOnHover>
            {clientTraits.map((trait) => (
              <div
                key={trait.title}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 w-[300px] min-h-[250px] flex flex-col mr-4"
              >
                <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-sm flex-shrink-0">
                  {trait.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {trait.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                  {trait.description}
                </p>
              </div>
            ))}
          </Marquee>
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white pointer-events-none"></div>
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Let us handle the technical details while you focus on what matters most - running and growing your business.
          </p>
          <button className="px-8 py-3 bg-[#ff4800] text-white rounded-lg font-medium hover:bg-[#ff4800]/90 transition-colors">
            Select Your New Website Below
          </button>
        </motion.div>
      </div>
    </section>
  );
}