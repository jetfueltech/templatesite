import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Search, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pensacola() {
  return (
    <>
      <Helmet>
        <title>Web Design Services in Pensacola, FL | Jetfuel.Tech</title>
        <meta name="description" content="Professional web design services in Pensacola, FL. Get a ready-to-launch website that drives more traffic, leads, and sales for your local business." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-block px-3 py-1 bg-[#ff4800]/10 rounded-full text-[#ff4800] text-sm font-medium mb-8">
                Pensacola Web Design
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
                Web Design Services in Pensacola, Florida
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Looking to gain new customers and grow your business in Pensacola, FL? A powerful online presence is key to attracting local customers and standing out in today's competitive market. At Jet Fuel Technologies, we don't just build websites—we build high-performance, ready-to-launch websites that work for your business, driving more traffic, leads, and sales.
              </p>

              <Link
                to="/templates"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#ff4800] text-white rounded-lg font-medium hover:bg-[#ff4800]/90 transition-colors"
              >
                View Our Website Templates
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Ready-to-Launch Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose a Ready-to-Launch Website?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                As a service business owner in Pensacola, you know that every minute counts, and every customer is important. Here's why our ready-to-launch websites are the best choice for growing your business:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff4800]/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#ff4800]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Speed Matters</h3>
                    <p className="text-gray-600">Loads in under 1 second</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Did you know that 53% of mobile users will leave a site if it takes more than 3 seconds to load? Our ready-to-launch websites are optimized for speed, ensuring you keep potential customers on your site and increase conversions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff4800]/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#ff4800]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Security You Can Trust</h3>
                    <p className="text-gray-600">Built-in security features</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Our ready-to-launch websites come with enterprise-grade security features built-in. No plugins to update, no vulnerabilities to patch, and no ongoing maintenance headaches.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff4800]/10 rounded-lg flex items-center justify-center">
                    <Search className="w-6 h-6 text-[#ff4800]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">SEO Optimized</h3>
                    <p className="text-gray-600">Rank higher in search results</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Our ready-to-launch websites are built with SEO best practices from the ground up. Clean, efficient code ensures that Google ranks your website higher, driving more local traffic to your business.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff4800]/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#ff4800]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">7-Day Launch</h3>
                    <p className="text-gray-600">Get online fast</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  In today's fast-paced world, you can't afford to wait months for your website. Our ready-to-launch solution is designed to get your business online in just 7 days, complete with all the features you need to succeed.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What's Included in Your Ready-to-Launch Website
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to attract and convert new customers from day one
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Core Features</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff4800]"></div>
                    <span>Fast loading speed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff4800]"></div>
                    <span>Mobile optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff4800]"></div>
                    <span>SEO-friendly design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff4800]"></div>
                    <span>Secure structure</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Tools</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff4800]"></div>
                    <span>Lead capture forms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff4800]"></div>
                    <span>Service area maps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff4800]"></div>
                    <span>Review management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff4800]"></div>
                    <span>Analytics tracking</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Support & Updates</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff4800]"></div>
                    <span>24/7 support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff4800]"></div>
                    <span>Regular updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff4800]"></div>
                    <span>Content management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff4800]"></div>
                    <span>Training included</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#ff4800]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Launch Your Pensacola Business Online?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get started with a professional website that works as hard as you do.
              </p>
              <Link
                to="/templates"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#ff4800] rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                View Our Templates
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}