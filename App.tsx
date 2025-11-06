
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PortalSelection from './components/PortalSelection';
import Features from './components/Features';
import Footer from './components/Footer';
import PatientPortalPage from './components/patient-portal/PatientPortalPage';

const App: React.FC = () => {
  const [activePortal, setActivePortal] = useState<'landing' | 'patient'>('landing');

  const handlePortalSelection = (portal: 'patient') => {
    setActivePortal(portal);
  };

  const handleLogout = () => {
    setActivePortal('landing');
  };

  if (activePortal === 'patient') {
    return <PatientPortalPage onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PortalSelection onSelectPortal={handlePortalSelection} />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;
