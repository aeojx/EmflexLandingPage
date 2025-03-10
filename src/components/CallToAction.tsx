import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CallToAction() {
  const calendarUrl = "https://calendar.app.google/MED5tZYpy6EmqYm27";

  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Start Your Financing Revolution Today
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Join leading banks and merchants using EmFlex to redefine financing. Let's build a future of seamless, customer-centric lending.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2"
          >
            Request a Demo <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
          >
            Contact Us to Learn More <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}