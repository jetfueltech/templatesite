import React from 'react';
import FAQItem from './FAQItem';

interface FAQCategoryProps {
  category: string;
  questions: Array<{ question: string; answer: string }>;
  openItems: Set<string>;
  onToggle: (question: string) => void;
}

export default function FAQCategory({ 
  category, 
  questions, 
  openItems, 
  onToggle 
}: FAQCategoryProps) {
  return (
    <div className="mb-8 last:mb-0">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        {questions.map((item) => (
          <FAQItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            isOpen={openItems.has(item.question)}
            onToggle={() => onToggle(item.question)}
          />
        ))}
      </div>
    </div>
  );
}