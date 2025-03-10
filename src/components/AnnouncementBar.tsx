import React from 'react';
import { Rocket } from 'lucide-react';

export function AnnouncementBar() {
  return (
    <a
      href="https://calendar.app.google/SPwwEKDRfGrDZPot9"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-blue-600 text-white py-2 text-center hover:bg-blue-700 transition-colors"
    >
      <div className="container mx-auto px-4 flex items-center justify-center gap-2">
        <span>Now Raising Pre-Seed – Schedule a Call with Our Founders!</span>
        <Rocket className="w-4 h-4" />
      </div>
    </a>
  );
}