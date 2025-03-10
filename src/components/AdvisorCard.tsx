import React from 'react';
import { Linkedin } from 'lucide-react';
import { AdvisorMember } from '../types/team';

interface AdvisorCardProps {
  advisor: AdvisorMember;
}

export function AdvisorCard({ advisor }: AdvisorCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-8 transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6">
          <img
            src={advisor.imageUrl}
            alt={advisor.name}
            className="w-48 h-48 rounded-full object-cover"
          />
          {advisor.companies.length === 1 ? (
            <img
              src={advisor.companies[0].logo}
              alt={advisor.companies[0].name}
              className="absolute -bottom-4 -right-4 w-16 h-16 object-contain bg-white rounded-lg shadow-md p-2"
            />
          ) : (
            <div className="absolute -bottom-4 -right-4 flex gap-2">
              {advisor.companies.map((company, index) => (
                <img
                  key={index}
                  src={company.logo}
                  alt={company.name}
                  className="w-12 h-12 object-contain bg-white rounded-lg shadow-md p-2"
                />
              ))}
            </div>
          )}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {advisor.name}
        </h3>
        <p className="text-lg text-blue-600 font-semibold mb-4">
          {advisor.role}
        </p>
        <p className="text-gray-600 mb-6 text-left w-full">
          {advisor.bio}
        </p>
        {advisor.linkedIn && (
          <a
            href={advisor.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>Connect on LinkedIn</span>
          </a>
        )}
      </div>
    </div>
  );
}