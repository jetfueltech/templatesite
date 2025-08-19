import React from 'react';
import Hero from '../components/Hero';
import Reviews from '../components/Reviews';
import IdealClientSection from '../components/IdealClientSection';
import LatestTemplates from '../components/LatestTemplates';
import FAQSection from '../components/faq/FAQSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Reviews />
      <IdealClientSection />
      <LatestTemplates />
      <FAQSection />
    </>
  );
}