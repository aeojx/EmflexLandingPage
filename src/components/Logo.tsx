import React from 'react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img 
        src="/EmflexLogo.jpeg" 
        alt="EmFlex Logo" 
        className="w-10 h-10 object-contain"
      />
      <span className="text-2xl font-bold text-gray-900">EmFlex</span>
    </Link>
  );
}