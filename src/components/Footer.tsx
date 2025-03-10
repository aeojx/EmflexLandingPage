import React from 'react';
import { Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blue-600 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/company/riyada-wealth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-100 transition-colors flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5" />
            <span>Follow us on LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}