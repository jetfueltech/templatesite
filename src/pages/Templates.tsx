import React from 'react';
import { Helmet } from 'react-helmet-async';
import TemplatesSection from './TemplatesSection';

export default function Templates() {
  return (
    <>
      <Helmet>
        <title>Ready-to-Launch Websites | Jetfuel.Tech</title>
        <meta name="description" content="Choose from our collection of professionally designed websites, each optimized for your industry" />
      </Helmet>

      <div className="min-h-screen pt-32">
        <TemplatesSection />
      </div>
    </>
  );
}