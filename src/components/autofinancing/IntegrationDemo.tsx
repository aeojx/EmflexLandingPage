import React from 'react';
import { Code2 } from 'lucide-react';

export function IntegrationDemo() {
  const codeExample = `<EmFlexWidget
  merchantId="your-merchant-id"
  amount={50000}
  currency="SAR"
  onApproval={(result) => {
    console.log("Loan approved!", result);
  }}
/>`;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Easy Integration for Online Merchants
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Our flexible widgets seamlessly integrate into your existing customer journey, providing a smooth financing experience for your customers.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Simple API</h3>
              <p className="text-gray-600">
                Quick and easy integration with just a few lines of code.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Custom UI</h3>
              <p className="text-gray-600">
                Fully customizable widgets that match your brand.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-blue-400" />
              <span className="text-gray-400">Example Integration Code</span>
            </div>
            <pre className="text-blue-400 font-mono text-sm overflow-x-auto">
              {codeExample}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}