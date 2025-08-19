import React, { useState, useCallback } from 'react';
import { faqs } from './FAQData';
import FAQCategory from './FAQCategory';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const handleToggle = useCallback((question: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(question)) {
        next.delete(question);
      } else {
        next.add(question);
      }
      return next;
    });
  }, []);

  return (
    <section className="py-24 px-4 bg-gray-50">
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

        <div className="space-y-8">
          {faqs.map((category) => (
            <FAQCategory
              key={category.category}
              category={category.category}
              questions={category.questions}
              openItems={openItems}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}