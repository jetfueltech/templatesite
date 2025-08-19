import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Phone, Brain, Clock, DollarSign, ArrowUpRight, Scale } from 'lucide-react';
import ServiceHero from './components/ServiceHero';

interface AgentType {
  icon: React.ReactNode;
  title: string;
  description: string;
  example: {
    name: string;
    description: string;
  };
}

const agentTypes: AgentType[] = [
  {
    icon: <MessageSquare className="w-6 h-6 text-[#ff4800]" />,
    title: "AI Chat Agents",
    description: "Enhance your customer support with intelligent, automated chatbots. These agents can engage with visitors on your website, answer questions, process orders, and direct customers to the right departments—all in real time.",
    example: {
      name: "Sales Assistant AI",
      description: "Helps customers with product inquiries, guides them through checkout, and can even upsell related items."
    }
  },
  {
    icon: <Phone className="w-6 h-6 text-[#ff4800]" />,
    title: "AI Phone Agents",
    description: "Transform how your business handles incoming and outgoing calls. AI phone agents can answer customer inquiries, provide information, set appointments, and even capture lead data.",
    example: {
      name: "Lead Intake AI",
      description: "When someone calls your business, this AI agent will gather key lead information, schedule follow-ups, and pass qualified leads to your sales team."
    }
  },
  {
    icon: <Brain className="w-6 h-6 text-[#ff4800]" />,
    title: "Internal Business AI Agents",
    description: "Optimize internal operations with custom AI agents designed for your specific business needs. From HR management to automated financial reporting, we create solutions that improve efficiency and reduce human error.",
    example: {
      name: "Task Management AI",
      description: "Automatically organizes tasks, assigns them to team members, and sends reminders for pending work, ensuring everything is on track without manual oversight."
    }
  }
];

const benefits = [
  {
    icon: <Clock className="w-6 h-6 text-[#ff4800]" />,
    title: "24/7 Availability",
    description: "Never miss an opportunity, even outside of business hours."
  },
  {
    icon: <DollarSign className="w-6 h-6 text-[#ff4800]" />,
    title: "Cost-Efficiency",
    description: "Reduce operational costs by automating routine tasks."
  },
  {
    icon: <Scale className="w-6 h-6 text-[#ff4800]" />,
    title: "Scalability",
    description: "Seamlessly scale your operations with AI agents that grow with your business."
  },
  {
    icon: <ArrowUpRight className="w-6 h-6 text-[#ff4800]" />,
    title: "Enhanced Experience",
    description: "Provide fast, personalized interactions with AI-driven solutions."
  }
];

const agentFeatures = [
  "24/7 Availability",
  "Lead Capture",
  "Appointment Scheduling",
  "Customer Support",
  "Data Collection & Analysis",
  "Custom Workflows"
];

export default function AIAgents() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen">
      <ServiceHero
        badge="AI Agents"
        title="Unlock the Power of AI with Tailored Agents"
        description="Transform your business operations with intelligent AI agents that work 24/7 to engage customers, qualify leads, and streamline processes."
        image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Agent Types Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-3 py-1 bg-[#ff4800]/10 rounded-full text-[#ff4800] text-sm font-medium mb-4">
              Our Solutions
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Types of AI Agents We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of specialized AI agents designed to enhance different aspects of your business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {agentTypes.map((agent, index) => (
              <motion.div
                key={agent.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="w-12 h-12 bg-[#ff4800]/10 rounded-lg flex items-center justify-center mb-6">
                  {agent.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{agent.title}</h3>
                <p className="text-gray-600 mb-6">{agent.description}</p>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-medium text-gray-900 mb-2">Example:</div>
                  <h4 className="font-medium text-[#ff4800] mb-2">{agent.example.name}</h4>
                  <p className="text-sm text-gray-600">{agent.example.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Benefits of AI Agents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI agents can transform your business operations and drive growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-[#ff4800]/10 rounded-lg flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get Your Custom AI Agent Today
              </h2>
              <p className="text-gray-600">
                Fill out the form below to help us understand your business needs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4800] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type of AI Agent You Are Interested In
                </label>
                <div className="space-y-2">
                  {agentTypes.map((type) => (
                    <label key={type.title} className="flex items-center">
                      <input
                        type="radio"
                        name="agentType"
                        value={type.title}
                        className="text-[#ff4800] focus:ring-[#ff4800]"
                      />
                      <span className="ml-2 text-gray-700">{type.title}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="tasks" className="block text-sm font-medium text-gray-700 mb-2">
                  What Specific Tasks Do You Want the AI Agent to Handle?
                </label>
                <textarea
                  id="tasks"
                  name="tasks"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4800] focus:border-transparent"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Agent Features
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {agentFeatures.map((feature) => (
                    <label key={feature} className="flex items-center">
                      <input
                        type="checkbox"
                        name="features"
                        value={feature}
                        className="text-[#ff4800] focus:ring-[#ff4800]"
                      />
                      <span className="ml-2 text-gray-700">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes or Special Requirements
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4800] focus:border-transparent"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4800] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4800] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4800] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="consultation"
                    className="text-[#ff4800] focus:ring-[#ff4800]"
                  />
                  <span className="ml-2 text-gray-700">
                    I would like a consultation call to discuss further
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#ff4800] text-white rounded-lg font-medium hover:bg-[#ff4800]/90 transition-colors"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}