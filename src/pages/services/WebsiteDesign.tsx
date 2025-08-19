import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Search, Rocket, Gauge, Award, Monitor, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import ServiceHero from './components/ServiceHero';
import TemplateShowcase from './components/TemplateShowcase';
import ProcessSection from './components/ProcessSection';
import BenefitsSection from './components/BenefitsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import { templates } from '../../data/templates';

const features = [
  {
    icon: <Clock className="w-6 h-6 text-[#ff4800]" />,
    title: "7-Day Launch",
    description: "Get your professional website live and generating leads in less than a week."
  },
  {
    icon: <Monitor className="w-6 h-6 text-[#ff4800]" />,
    title: "Device Optimized",
    description: "Perfect viewing experience across all devices - phones, tablets, and desktops."
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-[#ff4800]" />,
    title: "Service Requests",
    description: "Built-in forms and systems to capture and manage service requests efficiently."
  },
  {
    icon: <Gauge className="w-6 h-6 text-[#ff4800]" />,
    title: "Lightning Fast",
    description: "Optimized for speed to provide the best user experience and improve conversions."
  },
  {
    icon: <Search className="w-6 h-6 text-[#ff4800]" />,
    title: "SEO Ready",
    description: "Built with SEO best practices to help you rank higher in search results."
  },
  {
    icon: <Shield className="w-6 h-6 text-[#ff4800]" />,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and reliability for peace of mind."
  }
];

export default function WebsiteDesign() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        badge="Website Design"
        title="Ready-to-Launch Websites for Service Businesses"
        description="Get your professional website live in less than 7 days. Our ready-to-launch websites are designed to help service businesses attract more customers and grow online."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
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
              <Rocket className="w-4 h-4" />
              Ready to Launch
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Everything You Need to Succeed Online
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our ready-to-launch websites come packed with all the features you need to attract customers and grow your business.
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
      
      <TemplateShowcase 
        templates={templates}
        title="Choose Your Ready-to-Launch Website"
        description="Select from our collection of professionally designed websites, each optimized for your industry."
      />
      
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}