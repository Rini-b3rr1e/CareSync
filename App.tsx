
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PortalSelection from './components/PortalSelection';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PortalSelection />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;
