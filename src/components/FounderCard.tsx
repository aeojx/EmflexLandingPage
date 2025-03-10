import React from 'react';
import { Linkedin } from 'lucide-react';
import { TeamMember } from '../types/team';

interface FounderCardProps {
  founder: TeamMember;
}

export function FounderCard({ founder }: FounderCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-8 transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6">
          <img
            src={founder.imageUrl}
            alt={founder.name}
            className="w-48 h-48 rounded-full object-cover"
          />
          {founder.companies.length === 1 ? (
            <img
              src={founder.companies[0].logo}
              alt={founder.companies[0].name}
              className="absolute -bottom-4 -right-4 w-16 h-16 object-contain bg-white rounded-lg shadow-md p-2"
            />
          ) : (
            <div className="absolute -bottom-4 -right-4 flex gap-2">
              {founder.companies.map((company, index) => (
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
          {founder.name}
        </h3>
        <p className="text-lg text-blue-600 font-semibold mb-4">
          {founder.role}
        </p>
        <p className="text-gray-600 mb-6 text-justify hyphens-auto">
          {founder.bio}
        </p>
        <ul className="text-left space-y-2 mb-6 w-full">
          {founder.achievements.map((achievement, index) => (
            <li key={index} className="text-gray-700 flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              {achievement}
            </li>
          ))}
        </ul>
        <a
          href={founder.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
          <span>Connect on LinkedIn</span>
        </a>
      </div>
    </div>
  );
}