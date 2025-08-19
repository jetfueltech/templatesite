import React from 'react';
import ContactForm from '../components/contact/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-[#ff4800]/10 rounded-full text-[#ff4800] text-sm font-medium mb-4">
            Get in Touch
          </div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <h1 className="text-4xl font-bold text-gray-900">
              Contact Us
            </h1>
            <div className="flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-medium text-green-700">Online</span>
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our services? We're here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}