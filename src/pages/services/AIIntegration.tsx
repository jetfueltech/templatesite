import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Target, Zap, Brain, Users, Sparkles } from 'lucide-react';
import ServiceHero from './components/ServiceHero';
import ServiceStats from './components/ServiceStats';
import ProcessSection from './components/ProcessSection';
import BenefitsSection from './components/BenefitsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';

const features = [
  {
    icon: <Bot className="w-6 h-6 text-[#ff4800]" />,
    title: "AI Chat Assistant",
    description: "24/7 intelligent chatbot that handles customer inquiries and qualifies leads automatically."
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-[#ff4800]" />,
    title: "Smart Responses",
    description: "Automated responses that sound natural and provide accurate information about your services."
  },
  {
    icon: <Target className="w-6 h-6 text-[#ff4800]" />,
    title: "Lead Qualification",
    description: "AI-powered lead scoring and qualification to focus on your best prospects."
  },
  {
    icon: <Zap className="w-6 h-6 text-[#ff4800]" />,
    title: "Instant Support",
    description: "Provide immediate support to customers, even outside business hours."
  },
  {
    icon: <Brain className="w-6 h-6 text-[#ff4800]" />,
    title: "Learning System",
    description: "AI that learns from interactions to provide better responses over time."
  },
  {
    icon: <Users className="w-6 h-6 text-[#ff4800]" />,
    title: "Personal Touch",
    description: "Maintain a personal connection while automating routine interactions."
  }
];

export default function AIIntegration() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        badge="AI Integration"
        title="Supercharge Your Website with AI"
        description="Transform your online presence with intelligent automation. Our AI solutions help you engage customers 24/7, qualify leads automatically, and deliver personalized experiences at scale."
        image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000"
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
              <Sparkles className="w-4 h-4" />
              AI-Powered Features
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Intelligent Automation for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let AI handle routine tasks while you focus on growing your business. Our AI solutions work 24/7 to engage customers and generate leads.
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