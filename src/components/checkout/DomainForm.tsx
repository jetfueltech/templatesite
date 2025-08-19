import React, { useState } from 'react';
import { Globe } from 'lucide-react';

interface DomainFormProps {
  onDomainSubmit: (domainInfo: { hasDomain: boolean; domain?: string }) => void;
}

export default function DomainForm({ onDomainSubmit }: DomainFormProps) {
  const [hasDomain, setHasDomain] = useState<boolean | null>(null);
  const [domain, setDomain] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onDomainSubmit({ hasDomain: !!hasDomain, domain: hasDomain ? domain : undefined });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Globe className="w-5 h-5 text-[#ff4800]" />
        <h2 className="text-xl font-bold text-gray-900">Domain Name</h2>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-gray-700">Do you already have a domain name?</p>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setHasDomain(true)}
              className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                hasDomain === true
                  ? 'border-[#ff4800] bg-[#ff4800]/5 text-[#ff4800]'
                  : 'border-gray-200 text-gray-700 hover:border-gray-300'
              }`}
            >
              Yes, I have a domain
            </button>
            <button
              type="button"
              onClick={() => setHasDomain(false)}
              className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                hasDomain === false
                  ? 'border-[#ff4800] bg-[#ff4800]/5 text-[#ff4800]'
                  : 'border-gray-200 text-gray-700 hover:border-gray-300'
              }`}
            >
              No, I need one
            </button>
          </div>
        </div>

        {hasDomain && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-2">
                Enter your domain name
              </label>
              <input
                type="text"
                id="domain"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4800] focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#ff4800] text-white rounded-lg font-medium hover:bg-[#ff4800]/90 transition-colors"
            >
              Continue
            </button>
          </form>
        )}

        {hasDomain === false && (
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800">
                No problem! We'll help you register a domain name during the setup process.
              </p>
            </div>
            <button
              onClick={() => onDomainSubmit({ hasDomain: false })}
              className="w-full px-6 py-3 bg-[#ff4800] text-white rounded-lg font-medium hover:bg-[#ff4800]/90 transition-colors"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}