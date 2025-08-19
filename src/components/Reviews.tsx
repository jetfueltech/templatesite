import React from 'react';
import { cn } from '../lib/utils';
import Marquee from './ui/Marquee';

const services = [
  {
    name: "Expert Electrician",
    category: "Electrical Service",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Pressure Washing Pro",
    category: "Pressure Washing",
    image: "https://images.unsplash.com/photo-1558402529-d2638a7023e9?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dog Walking",
    category: "Pet Services",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Gutter Solutions",
    category: "Gutter Cleaning",
    image: "https://images.unsplash.com/photo-1632923057155-39a34f0f2b41?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Professional Cleaning",
    category: "Cleaning Service",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mobile Car Service",
    category: "Auto Service",
    image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Lawn Care",
    category: "Landscaping",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mobile Auto Detail",
    category: "Mobile Detailing",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80",
  },
];

const firstRow = services.slice(0, services.length / 2);
const secondRow = services.slice(services.length / 2);

const ServiceCard = ({
  image,
  name,
  category,
}: {
  image: string;
  name: string;
  category: string;
}) => {
  return (
    <div className={cn(
      "relative group w-[300px] h-[200px] overflow-hidden rounded-xl cursor-pointer",
      "transform transition-all hover:scale-[1.02]"
    )}>
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
          <p className="text-sm text-gray-300">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default function Reviews() {
  return (
    <section className="py-20">
      <div className="text-center mb-10">
        <div className="inline-block px-3 py-1 bg-[#ff4800]/10 rounded-full text-[#ff4800] text-sm font-medium mb-4">
          Service Businesses
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Trusted by Service Professionals
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join thousands of service businesses who have transformed their online presence with our platform.
        </p>
      </div>

      <div className="relative">
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {secondRow.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
      </div>
    </section>
  );
}