import React from 'react';
import { Building2, Store, Users } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-7xl font-extrabold text-gray-900 mb-8 tracking-tight">
            Making financing <span className="text-blue-600">easy</span>
          </h1>
          <p className="text-xl text-gray-600">
            EmFlex bridges banks and merchants through seamless APIs, enabling real-time pre-approval and flexible financing solutions across industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Building2 className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Banks</h3>
            <p className="text-gray-600">Offering pre-approved financing options</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Store className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Merchants</h3>
            <p className="text-gray-600">Displaying financing at checkout</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customers</h3>
            <p className="text-gray-600">Selecting ideal financing options</p>
          </div>
        </div>
      </div>
    </section>
  );
}