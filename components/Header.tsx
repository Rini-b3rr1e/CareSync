
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
           <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span className="text-2xl font-bold text-slate-800">CareSync</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-slate-600 hover:text-primary transition-colors">Features</a>
          <a href="#portals" className="text-slate-600 hover:text-primary transition-colors">Portals</a>
          <a href="#" className="text-slate-600 hover:text-primary transition-colors">About Us</a>
        </nav>
        <div className="flex items-center space-x-2">
          <button className="text-slate-600 hover:text-primary font-medium px-4 py-2 rounded-lg transition-colors">
            Log In
          </button>
          <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
