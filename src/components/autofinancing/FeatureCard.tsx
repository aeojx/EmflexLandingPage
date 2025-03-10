import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Feature {
  title: string;
  subtitle: string;
  description: string;
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  features: Feature[];
}

export function FeatureCard({ icon: Icon, title, features }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-8">
        <Icon className="w-8 h-8 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="space-y-8">
        {features.map((feature, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-sm font-medium text-blue-600">{feature.subtitle}</p>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}