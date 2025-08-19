import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Jetfuel.Tech</title>
        <meta name="description" content="Terms of Service for Jetfuel.Tech website services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing or using Jetfuel.Tech's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
              <p className="text-gray-600 mb-4">
                Jetfuel.Tech provides website design and development services for service-based businesses. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Website design and development</li>
                <li>Website hosting and maintenance</li>
                <li>Content management system setup</li>
                <li>Technical support</li>
                <li>SEO services</li>
                <li>Website analytics</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                Payment terms vary based on the selected service plan. Monthly payments are due in advance of service. All fees are non-refundable unless otherwise specified in writing.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software code, are owned by Jetfuel.Tech and are protected by intellectual property laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Service Modifications</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify, suspend, or discontinue any part of our services at any time. We will provide notice of significant changes when possible.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                Jetfuel.Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Information</h2>
              <p className="text-gray-600">
                Questions about these Terms of Service should be sent to us at hello@jetfuel.tech.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}