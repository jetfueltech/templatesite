import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does it take to get my website live?",
    answer: "Our streamlined process typically takes 7-10 business days from start to finish. This includes design customization, content integration, and thorough testing before launch."
  },
  {
    question: "Do I need technical knowledge to manage my website?",
    answer: "Not at all! Our websites come with an intuitive dashboard that makes it easy to update content, add new services, and manage bookings without any technical expertise."
  },
  {
    question: "What's included in the monthly maintenance?",
    answer: "Monthly maintenance includes security updates, performance optimization, regular backups, technical support, and hosting on our premium servers with 99.9% uptime guarantee."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time. If you've paid upfront, we'll provide a prorated refund for the unused portion of your service."
  },
  {
    question: "Do you help with SEO?",
    answer: "Yes! All our websites are built with SEO best practices in mind. We also offer additional SEO services to help improve your search engine rankings and online visibility."
  }
];

function FAQItem({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-[#ff4800]" />
        ) : (
          <Plus className="w-5 h-5 text-[#ff4800]" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-[#ff4800]/10 rounded-full text-[#ff4800] text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about our website services
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}