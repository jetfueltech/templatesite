import React from 'react';
import { Shield, Zap, Clock, CheckCircle } from 'lucide-react';
import Card from '../shared/Card';

const features = [
  "Design and Development",
  "Hosting",
  "5 Pages Included",
  "Blog Add-On Available",
  "Unlimited Edits",
  "24/7 Support",
  "Lifetime Updates"
];

export default function TemplateSubscription() {
  return (
    <Card>
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">Choose the Plan That Fits Your Needs</h3>
        
        <div className="relative">
          {/* Left plan */}
          <div className="bg-gray-800/50 rounded-lg p-6 mb-8 relative">
            <div className="absolute -top-3 left-6 bg-[#ff4800] text-white text-sm font-medium px-3 py-1 rounded-full">
              Most Popular
            </div>
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-lg font-medium text-white">Lump Sum Payment</h4>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">$3,800</div>
                <div className="text-sm text-gray-400">one-time</div>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              {features.map((feature) => (
                <div key={feature} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#ff4800] mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-sm text-gray-400 space-y-2">
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></div>
                <span>$25/month Hosting</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></div>
                <span>$100/Page Fee (After 5 Pages)</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></div>
                <span>$50/month for Unlimited Edits Add-On</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></div>
                <span>$250 to Add a Blog</span>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="relative py-4 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative">
              <span className="px-4 py-1 text-sm text-gray-400 bg-gray-800 rounded-full">OR</span>
            </div>
          </div>

          {/* Right plan */}
          <div className="bg-gray-800/50 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-lg font-medium text-white">Monthly Payment</h4>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">$149</div>
                <div className="text-sm text-gray-400">per month</div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {features.map((feature) => (
                <div key={feature} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#ff4800] mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-sm text-gray-400 space-y-2">
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></div>
                <span>Hosting Included</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></div>
                <span>$100/Page Fee (After 5 Pages)</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></div>
                <span>$250 to Add a Blog</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-4">
          <Shield className="w-6 h-6 text-[#ff4800]" />
          <div>
            <h4 className="font-medium text-white">Secure & Protected</h4>
            <p className="text-sm text-gray-400">24/7 monitoring and security updates</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-4">
          <Zap className="w-6 h-6 text-[#ff4800]" />
          <div>
            <h4 className="font-medium text-white">Lightning Fast</h4>
            <p className="text-sm text-gray-400">Optimized for speed and performance</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-4">
          <Clock className="w-6 h-6 text-[#ff4800]" />
          <div>
            <h4 className="font-medium text-white">Always Up-to-Date</h4>
            <p className="text-sm text-gray-400">Regular updates and maintenance</p>
          </div>
        </div>
      </div>
    </Card>
  );
}