import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FAQItem from './FAQItem';

interface FAQCategory {
  category: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

interface FAQTabsProps {
  categories: FAQCategory[];
}

export default function FAQTabs({ categories }: FAQTabsProps) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((cat, index) => (
          <button
            key={cat.category}
            onClick={() => {
              setActiveCategory(index);
              setOpenQuestion(null);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === index
                ? 'bg-[#ff4800] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {categories[activeCategory].questions.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openQuestion === item.question}
                onToggle={() => 
                  setOpenQuestion(
                    openQuestion === item.question ? null : item.question
                  )
                }
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}