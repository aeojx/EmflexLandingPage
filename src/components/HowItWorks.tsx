import React from 'react';
import { Database, CheckCircle, Link, Workflow } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Database,
      title: 'Merchant Catalog API',
      description: 'Merchants list their products and financing needs.',
    },
    {
      icon: CheckCircle,
      title: 'Pre-Approval API',
      description: 'Banks showcase pre-approved offers based on customer profiles.',
    },
    {
      icon: Link,
      title: 'Merchant Connect API',
      description: 'Customers select and apply for financing options in real time.',
    },
    {
      icon: Workflow,
      title: 'Expand API Capabilities',
      description: 'Automate loan origination, disbursement, and repayment workflows.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Streamlining the Lending Journey, Step by Step
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center h-full">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-blue-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}