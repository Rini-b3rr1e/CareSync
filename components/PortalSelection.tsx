
import React from 'react';
import { PATIENT_ICON, DOCTOR_ICON } from '../constants';

interface PortalCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    buttonText: string;
    bgColorClass: string;
    hoverBgColorClass: string;
    textColorClass: string;
    onClick: () => void;
}

const PortalCard: React.FC<PortalCardProps> = ({ icon, title, description, buttonText, bgColorClass, hoverBgColorClass, textColorClass, onClick }) => (
    <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 w-full">
        <div className="mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-slate-800 mb-3">{title}</h3>
        <p className="text-slate-600 mb-6 flex-grow">{description}</p>
        <button 
            onClick={onClick}
            className={`${bgColorClass} ${textColorClass} ${hoverBgColorClass} font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200`}>
            {buttonText}
        </button>
    </div>
);


const PortalSelection: React.FC<{ onSelectPortal: (portal: 'patient') => void }> = ({ onSelectPortal }) => {
    return (
        <section id="portals" className="py-20 lg:py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Choose Your Portal</h2>
                    <p className="text-lg text-slate-500 mt-2 max-w-2xl mx-auto">
                        Whether you're a patient managing your health or a professional providing care, we have a dedicated space for you.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    <PortalCard 
                        icon={PATIENT_ICON}
                        title="For Patients"
                        description="Take control of your health. Track your medications, view upcoming appointments, and follow your personalized exercise plans."
                        buttonText="Enter Patient Portal"
                        bgColorClass="bg-primary"
                        hoverBgColorClass="hover:bg-primary-dark"
                        textColorClass="text-white"
                        onClick={() => onSelectPortal('patient')}
                    />
                    <PortalCard 
                        icon={DOCTOR_ICON}
                        title="For Medical Professionals"
                        description="Streamline your workflow. Monitor patient progress, manage schedules, and communicate securely with your patients."
                        buttonText="Enter Professional Portal"
                        bgColorClass="bg-secondary"
                        hoverBgColorClass="hover:bg-emerald-600"
                        textColorClass="text-white"
                        onClick={() => alert('Professional Portal coming soon!')}
                    />
                </div>
            </div>
        </section>
    );
};

export default PortalSelection;
