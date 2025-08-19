import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to build my website?",
    answer: "Our streamlined process typically takes 7-10 business days from start to finish. This includes design customization, content integration, and thorough testing before launch."
  },
  {
    question: "Do I need technical knowledge to manage my website?",
    answer: "No technical knowledge needed - that's the point! We handle all website updates and maintenance so you can focus on running your business. Simply submit your requested changes through our client portal, and our team will implement them within 24 hours. Our white glove service means you never have to worry about technical details or website management."
  },
  {
    question: "What's included in the website package?",
    answer: "Our website packages include custom design, mobile optimization, SEO setup, content integration, contact forms, analytics, and training. We also provide ongoing maintenance and support."
  },
  {
    question: "Do you provide website hosting?",
    answer: "Yes, all our websites include premium hosting with 99.9% uptime guarantee, SSL security, and daily backups to ensure your website stays fast, secure, and reliable."
  },
  {
    question: "What happens if I need to pause my payments?",
    answer: "For monthly payment plans, your website must remain current on payments to stay active. While you can pause or defer payments to later months, your website will be temporarily deactivated until the account is brought up to date. For one-time payment plans, the full payment is non-refundable as it covers the complete development and setup of your website."
  },
  {
    question: "What if I need help after the website is launched?",
    answer: "Our team handles everything post-launch. We manage all updates, maintenance, and technical aspects of your website. When you need changes or have questions, our experts are available 24/7 via email and chat to assist you."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div 
      initial={false}
      className="border-b border-gray-200 last:border-0 px-6"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-6 text-left"
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-[#ff4800] flex-shrink-0 ml-4" />
        ) : (
          <Plus className="w-5 h-5 text-[#ff4800] flex-shrink-0 ml-4" />
        )}
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-600">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 bg-[#ff4800]/10 rounded-full text-[#ff4800] text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our website design services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}