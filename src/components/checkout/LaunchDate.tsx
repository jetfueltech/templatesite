import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

export default function LaunchDate() {
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const deadline = new Date();
    deadline.setHours(deadline.getHours() + 4); // 4 hour deadline

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;

      setCountdown({
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calculate estimated launch date (10 business days from now)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 14); // Add 14 days to account for weekends

  return (
    <div className="bg-[#ff4800]/5 rounded-lg border border-[#ff4800]/10 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-[#ff4800]" />
        <h2 className="text-xl font-bold text-gray-900">Estimated Launch Date</h2>
      </div>

      <p className="text-2xl font-bold text-gray-900 mb-4">
        {launchDate.toLocaleDateString('en-US', { 
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>

      <p className="text-gray-600 mb-4">Complete your order in the next:</p>
      
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-white rounded-lg p-3">
          <div className="text-2xl font-bold text-gray-900">{String(countdown.hours).padStart(2, '0')}</div>
          <div className="text-sm text-gray-500">Hours</div>
        </div>
        <div className="bg-white rounded-lg p-3">
          <div className="text-2xl font-bold text-gray-900">{String(countdown.minutes).padStart(2, '0')}</div>
          <div className="text-sm text-gray-500">Minutes</div>
        </div>
        <div className="bg-white rounded-lg p-3">
          <div className="text-2xl font-bold text-gray-900">{String(countdown.seconds).padStart(2, '0')}</div>
          <div className="text-sm text-gray-500">Seconds</div>
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        Order now to secure this launch date and our current pricing!
      </p>
    </div>
  );
}