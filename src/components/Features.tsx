import React from 'react';
import { LineChart, Shield, Zap, ArrowRight } from 'lucide-react';

export function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Revolutionizing Financial Connectivity for Banks and Merchants
          </h2>
          <p className="text-xl text-gray-600">
            We enable banks to innovate and merchants to thrive by simplifying the lending journey. Our platform integrates seamlessly with merchant platforms, allowing banks to showcase their financing products and customers to access pre-approved offers in real time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">For Banks</h3>
            <ul className="space-y-6 mb-8">
              {[
                { icon: LineChart, title: 'Access to new merchant verticals' },
                { icon: Shield, title: 'Retain compliance and control over lending' },
                { icon: Zap, title: 'Expand customer reach with pre-approval APIs' },
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-lg text-gray-700">{feature.title}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
              Partner with Us <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">For Merchants</h3>
            <ul className="space-y-6 mb-8">
              {[
                { icon: LineChart, title: 'Increase conversions with financing options' },
                { icon: Shield, title: 'Offer customers multiple financing solutions' },
                { icon: Zap, title: 'Boost sales through flexible lending options' },
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-lg text-gray-700">{feature.title}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2">
              Explore Financing Options <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}