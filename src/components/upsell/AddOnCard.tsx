import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { AddOn } from '../../types';

interface AddOnCardProps {
  addon: AddOn;
  selected: boolean;
  onSelect: (id: string) => void;
}

export default function AddOnCard({ addon, selected, onSelect }: AddOnCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`rounded-lg transition-all ${
        selected
          ? 'border-2 border-[#ff4800] bg-white shadow-lg'
          : 'border border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1 pr-4">
            <h3 className="text-xl font-bold text-gray-900">{addon.name}</h3>
            <p className="text-gray-600">{addon.description}</p>
          </div>
          <div className="flex-shrink-0 text-right">
            <span className="text-2xl font-bold text-gray-900">${addon.price}</span>
            <span className="block text-sm text-gray-500">/month</span>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          {addon.features.slice(0, 2).map((feature) => (
            <div key={feature} className="flex items-center text-gray-700">
              <Check className="w-4 h-4 text-[#ff4800] mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-3 mb-4 overflow-hidden"
            >
              {addon.features.slice(2).map((feature) => (
                <div key={feature} className="flex items-center text-gray-700">
                  <Check className="w-4 h-4 text-[#ff4800] mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
              
              {addon.benefits && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="font-medium text-gray-900 mb-2">Benefits</h4>
                  <ul className="space-y-2">
                    {addon.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-600 text-sm">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-[#ff4800] transition-colors flex items-center gap-1 text-sm"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show more
              </>
            )}
          </button>
          <button
            onClick={() => onSelect(addon.id)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selected
                ? 'bg-[#ff4800] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {selected ? 'Selected' : 'Select'}
          </button>
        </div>
      </div>
    </div>
  );
}