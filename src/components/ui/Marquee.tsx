import React from 'react';
import { cn } from '../../lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
}

export default function Marquee({ 
  children, 
  className, 
  reverse,
  pauseOnHover = false
}: MarqueeProps) {
  return (
    <div className="relative overflow-hidden whitespace-nowrap">
      <div 
        className={cn(
          "inline-flex gap-4 animate-scroll",
          reverse && "animate-scroll-reverse",
          pauseOnHover && "hover:[animation-play-state:paused]",
          className
        )}
      >
        <div className="inline-flex gap-4">
          {children}
        </div>
        <div className="inline-flex gap-4">
          {children}
        </div>
      </div>
    </div>
  );
}