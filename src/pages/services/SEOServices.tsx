import React from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart, Globe, Target, Map, Star, Zap, Users } from 'lucide-react';
import ServiceHero from './components/ServiceHero';
import ServiceStats from './components/ServiceStats';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';

const features = [
  {
    icon: <Map className="w-6 h-6 text-[#ff4800]" />,
    title: "Local SEO",
    description: "Dominate local search results and attract customers in your service area."
  },
  {
    icon: <Search className="w-6 h-6 text-[#ff4800]" />,
    title: "Keyword Optimization",
    description: "Target the right keywords to attract qualified service leads."
  },
  {
    icon: <Globe className="w-6 h-6 text-[#ff4800]" />,
    title: "Google Business Profile",
    description: "Optimize your Google Business Profile for better local visibility."
  },
  {
    icon: <Star className="w-6 h-6 text-[#ff4800]" />,
    title: "Review Management",
    description: "Build and manage your online reputation to attract more customers."
  },
  {
    icon: <BarChart className="w-6 h-6 text-[#ff4800]" />,
    title: "Performance Tracking",
    description: "Monitor your rankings and traffic with detailed analytics."
  },
  {
    icon: <Target className="w-6 h-6 text-[#ff4800]" />,
    title: "Competitor Analysis",
    description: "Stay ahead of local competitors with strategic insights."
  }
];

const seoSteps = [
  {
    icon: <Search className="w-6 h-6 text-[#ff4800]" />,
    title: "SEO Audit",
    description: "Comprehensive analysis of your current search performance and opportunities."
  },
  {
    icon: <Target className="w-6 h-6 text-[#ff4800]" />,
    title: "Strategy Development",
    description: "Custom SEO strategy based on your business goals and target market."
  },
  {
    icon: <Zap className="w-6 h-6 text-[#ff4800]" />,
    title: "Optimization",
    description: "Implementation of on-page and off-page SEO improvements."
  },
  {
    icon: <BarChart className="w-6 h-6 text-[#ff4800]" />,
    title: "Monitoring & Reporting",
    description: "Regular tracking of rankings, traffic, and conversions."
  }
];

export default function SEOServices() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        badge="SEO Services"
        title="Get Found by More Customers Online"
        description="Boost your online visibility and attract more local customers. Our SEO services help service businesses rank higher in search results and drive qualified traffic to your website."
        image="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=2000"
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
              <Search className="w-4 h-4" />
              Local SEO
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Dominate Your Local Market
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our local SEO services help service businesses attract more customers in their target service areas.
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

      {/* SEO Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff4800]/10 rounded-full text-[#ff4800] text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              Our Approach
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Strategic SEO Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven SEO methodology helps your business climb the rankings and attract more customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 bg-[#ff4800]/10 rounded-lg flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <ServiceStats />
      <FAQSection />
      <CTASection />
    </div>
  );
}