import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Templates from './pages/Templates';
import About from './pages/About';
import Contact from './pages/Contact';
import WebsiteDesign from './pages/services/WebsiteDesign';
import AIIntegration from './pages/services/AIIntegration';
import AIAgents from './pages/services/AIAgents';
import SEOServices from './pages/services/SEOServices';
import Maintenance from './pages/services/Maintenance';
import TemplatePurchase from './pages/TemplatePurchase';
import Checkout from './pages/Checkout';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Pensacola from './pages/locations/Pensacola';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/website-design" element={<WebsiteDesign />} />
              <Route path="/services/ai-integration" element={<AIIntegration />} />
              <Route path="/services/ai-agents" element={<AIAgents />} />
              <Route path="/services/seo" element={<SEOServices />} />
              <Route path="/services/maintenance" element={<Maintenance />} />
              <Route path="/template/:id" element={<TemplatePurchase />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/locations/pensacola" element={<Pensacola />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}