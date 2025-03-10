import React, { useState } from 'react';
import { Building2, Store, Car } from 'lucide-react';
import { AutofinancingHero } from '../components/autofinancing/AutofinancingHero';
import { CollapsibleCard } from '../components/autofinancing/CollapsibleCard';
import { IntegrationDemo } from '../components/autofinancing/IntegrationDemo';

export function Autofinancing() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const features = {
    financial: [
      {
        title: 'API Integration',
        subtitle: 'Connect & Grow',
        description: 'Access a steady stream of qualified leads through our API marketplace. Connect directly with merchants and dealerships in real-time.'
      },
      {
        title: 'Risk Management',
        subtitle: 'Smart Decisions',
        description: 'Our system filters out applications that are not suitable for your preferences, increasing your average approvals.'
      },
      {
        title: 'Portfolio Analytics',
        subtitle: 'Track & Monitor',
        description: 'Comprehensive dashboard to manage and monitor your lending portfolio with real-time analytics and reporting.'
      }
    ],
    merchants: [
      {
        title: 'Quick Integration',
        subtitle: 'Simple Setup',
        description: 'Seamlessly integrate financing options into your checkout process with our customizable widgets and APIs.'
      },
      {
        title: 'Customer Experience',
        subtitle: 'Smooth Journey',
        description: 'Increase conversions and customer lifetime value through seamless financing options and improved user experience.'
      },
      {
        title: 'Real-time Decisions',
        subtitle: 'Instant Results',
        description: 'Offer real-time financing decisions to your customers, reducing cart abandonment and increasing sales.'
      }
    ],
    dealerships: [
      {
        title: 'Floor Planning',
        subtitle: 'Inventory Finance',
        description: 'Access flexible floor planning and inventory financing solutions to optimize your cash flow.'
      },
      {
        title: 'Customer Finance',
        subtitle: 'Quick Approvals',
        description: 'Reduce customer wait time and eliminate financing issues with instant approvals and streamlined processes.'
      },
      {
        title: 'Performance Metrics',
        subtitle: 'Data Insights',
        description: 'Track performance metrics and financing trends to make data-driven decisions for your dealership.'
      }
    ]
  };

  const cards = [
    {
      id: 'financial',
      icon: Building2,
      title: 'Financial Institutions',
      features: features.financial
    },
    {
      id: 'merchants',
      icon: Store,
      title: 'Online Merchants',
      features: features.merchants
    },
    {
      id: 'dealerships',
      icon: Car,
      title: 'Dealerships/OEMs',
      features: features.dealerships
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AutofinancingHero />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {cards.map((card) => (
              <CollapsibleCard
                key={card.id}
                icon={card.icon}
                title={card.title}
                features={card.features}
                isExpanded={expandedCard === card.id}
                onToggle={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <IntegrationDemo />
    </div>
  );
}