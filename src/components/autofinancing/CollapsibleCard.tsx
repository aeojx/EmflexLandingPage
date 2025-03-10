import React from 'react';
import { ChevronDown, LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

interface Feature {
  title: string;
  subtitle: string;
  description: string;
}

interface CollapsibleCardProps {
  icon: LucideIcon;
  title: string;
  features: Feature[];
  isExpanded: boolean;
  onToggle: () => void;
}

export function CollapsibleCard({ 
  icon: Icon, 
  title, 
  features, 
  isExpanded, 
  onToggle 
}: CollapsibleCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-8 flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3">
          <Icon className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
        <ChevronDown 
          className={cn(
            "w-6 h-6 text-gray-400 transition-transform duration-200",
            isExpanded && "transform rotate-180"
          )}
        />
      </button>
      
      <div
        className={cn(
          "grid transition-all duration-200 ease-in-out",
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="p-8 pt-0 space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-sm font-medium text-blue-600">{feature.subtitle}</p>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}