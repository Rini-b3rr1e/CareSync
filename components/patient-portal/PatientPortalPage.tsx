
import React, { useState } from 'react';
import PatientHeader from './PatientHeader';
import Dashboard from './Dashboard';
import Schedule from './Schedule';
import Footer from '../Footer';

interface PatientPortalPageProps {
  onLogout: () => void;
}

type ActiveTab = 'dashboard' | 'schedule';

const PatientPortalPage: React.FC<PatientPortalPageProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <PatientHeader onLogout={onLogout} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 border-b border-slate-200">
          <nav className="-mb-px flex space-x-6" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`${
                activeTab === 'dashboard'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg transition-colors`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`${
                activeTab === 'schedule'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg transition-colors`}
            >
              Schedule
            </button>
          </nav>
        </div>

        <div>
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'schedule' && <Schedule />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PatientPortalPage;
