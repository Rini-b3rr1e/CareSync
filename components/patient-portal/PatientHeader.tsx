
import React from 'react';

interface PatientHeaderProps {
    onLogout: () => void;
}

const PatientHeader: React.FC<PatientHeaderProps> = ({ onLogout }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
           <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span className="text-2xl font-bold text-slate-800">CareSync</span>
          <span className="text-xl font-light text-slate-500 hidden sm:inline">| Patient Portal</span>
        </div>
        <div className="flex items-center space-x-4">
            <p className="text-slate-700 hidden md:block">Welcome, Alex!</p>
          <button onClick={onLogout} className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium px-4 py-2 rounded-lg transition-colors">
            Log Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default PatientHeader;
