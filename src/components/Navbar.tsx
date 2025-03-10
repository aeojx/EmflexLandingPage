import React from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

export function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/autofinancing" 
              className={`text-gray-600 hover:text-blue-600 ${location.pathname === '/autofinancing' ? 'text-blue-600' : ''}`}
            >
              Autofinancing
            </Link>
            <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>

          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </nav>
  );
}