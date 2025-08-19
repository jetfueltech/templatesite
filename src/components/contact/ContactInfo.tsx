import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#ff4800]/10 rounded-lg">
          <Phone className="w-6 h-6 text-[#ff4800]" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">Phone</h3>
          <p className="text-gray-600">+1 (123) 456-7890</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#ff4800]/10 rounded-lg">
          <Mail className="w-6 h-6 text-[#ff4800]" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">Email</h3>
          <p className="text-gray-600">hello@jetfuel.tech</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#ff4800]/10 rounded-lg">
          <MapPin className="w-6 h-6 text-[#ff4800]" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">Address</h3>
          <p className="text-gray-600">123 Tech Street<br />San Francisco, CA 94105</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#ff4800]/10 rounded-lg">
          <Clock className="w-6 h-6 text-[#ff4800]" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">Business Hours</h3>
          <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday - Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}