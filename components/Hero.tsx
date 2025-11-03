
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-4">
              Synchronize Your <span className="text-primary">Health Journey</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
              CareSync simplifies healthcare coordination. Manage medications, appointments, and wellness plans with ease, connecting patients and professionals on one seamless platform.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="#portals" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Get Started
              </a>
              <a href="#features" className="bg-white border-2 border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400 font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Learn More
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img src="https://picsum.photos/id/365/600/400" alt="Happy and healthy people" className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
