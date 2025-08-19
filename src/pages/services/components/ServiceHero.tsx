import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

interface ServiceHeroProps {
  badge: string;
  title: string;
  description: string;
  image: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ badge, title, description, image }) => {
  return (
    <>
      <Helmet>
        <title>{title} | Jetfuel.Tech</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

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
              {badge}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
              {title}
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceHero;