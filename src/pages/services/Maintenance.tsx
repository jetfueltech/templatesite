import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Wrench, Clock, Cloud, HeadphonesIcon, RefreshCcw, Bell } from 'lucide-react';
import ServiceHero from './components/ServiceHero';
import ServiceStats from './components/ServiceStats';
import ProcessSection from './components/ProcessSection';
import BenefitsSection from './components/BenefitsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';

const features = [
  {
    icon: <Shield className="w-6 h-6 text-[#ff4800]" />,
    title: "Security Updates",
    description: "Regular security updates and monitoring to protect your website."
  },
  {
    icon: <Cloud className="w-6 h-6 text-[#ff4800]" />,
    title: "Daily Backups",
    description: "Automatic daily backups to ensure your data is always safe."
  },
  {
    icon: <Zap className="w-6 h-6 text-[#ff4800]" />,
    title: "Performance Optimization",
    description: "Regular speed optimizations to keep your site running fast."
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6 text-[#ff4800]" />,
    title: "24/7 Support",
    description: "Technical support whenever you need it, day or night."
  },
  {
    icon: <RefreshCcw className="w-6 h-6 text-[#ff4800]" />,
    title: "Content Updates",
    description: "Quick updates to your website content when you need them."
  },
  {
    icon: <Bell className="w-6 h-6 text-[#ff4800]" />,
    title: "Uptime Monitoring",
    description: "Continuous monitoring to ensure your site stays online."
  }
];

export default function Maintenance() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        badge="Website Maintenance"
        title="Keep Your Website Running at Peak Performance"
        description="Focus on your business while we handle the technical details. Our maintenance services ensure your website stays secure, fast, and up-to-date with 24/7 monitoring and support."
        image="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?auto=format&fit=crop&q=80&w=2000"
      />
      
      {/* Key Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff4800]/10 rounded-full text-[#ff4800] text-sm font-medium mb-4">
              <Wrench className="w-4 h-4" />
              Comprehensive Care
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Website Maintenance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep your website secure, fast, and up-to-date with our comprehensive maintenance services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#ff4800]/10 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <ProcessSection />
      <BenefitsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}