import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { PenSquare } from 'lucide-react'; // Import PenSquare for Medium icon

const services = [
  { name: 'Website Design', path: '/services/website-design' },
  { name: 'AI Integration', path: '/services/ai-integration' },
  { name: 'AI Agents', path: '/services/ai-agents' },
  { name: 'SEO Services', path: '/services/seo' },
  { name: 'Maintenance', path: '/services/maintenance' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-50 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-gray-900">Jetfuel.Tech</Link>
            <p className="text-gray-500">
              Transforming businesses with AI-powered websites that convert visitors into customers.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/jetfueltechnologies/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#ff4800] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://medium.com/@Jetfuel/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#ff4800] transition-colors"
              >
                <PenSquare className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/jetfuel.tech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#ff4800] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/jetfueltech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#ff4800] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#ff4800] transition-colors">Templates</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#ff4800] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#ff4800] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path} 
                    className="hover:text-[#ff4800] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Get Business Growth Tips</h4>
            <p className="text-gray-600 mb-4">
              Join our newsletter for expert tips and insights to help grow your service business online.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff4800] focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#ff4800] text-white rounded-lg font-medium hover:bg-[#ff4800]/90 transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Jetfuel.Tech. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-[#ff4800] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#ff4800] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}