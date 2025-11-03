
import React from 'react';
import { 
    MEDICATION_ICON, 
    APPOINTMENT_ICON, 
    EXERCISE_ICON, 
    MONITORING_ICON, 
    SCHEDULING_ICON, 
    COMMUNICATION_ICON 
} from '../constants';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-md">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold text-slate-800">{title}</h4>
      <p className="text-slate-600 mt-1">{description}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  const patientFeatures = [
    {
      icon: MEDICATION_ICON,
      title: "Medication Reminders",
      description: "Never miss a dose with intelligent reminders and a clear medication schedule.",
    },
    {
      icon: APPOINTMENT_ICON,
      title: "Appointment Tracking",
      description: "Keep all your doctor follow-ups and consultations organized in one place.",
    },
    {
      icon: EXERCISE_ICON,
      title: "Personalized Exercises",
      description: "Access and track recommended exercises to support your treatment and recovery.",
    },
  ];

  const professionalFeatures = [
    {
      icon: MONITORING_ICON,
      title: "Patient Adherence",
      description: "View real-time data on how well patients are following their prescribed plans.",
    },
    {
      icon: SCHEDULING_ICON,
      title: "Streamlined Scheduling",
      description: "Manage your calendar efficiently and reduce no-shows with automated reminders.",
    },
    {
      icon: COMMUNICATION_ICON,
      title: "Secure Messaging",
      description: "Communicate with your patients through a secure, HIPAA-compliant platform.",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">A Better Way to Manage Health</h2>
          <p className="text-lg text-slate-500 mt-2 max-w-2xl mx-auto">
            Powerful tools designed for both sides of the care equation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Patient Features Column */}
          <div className="bg-slate-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center lg:text-left">For Patients</h3>
            <div className="space-y-8">
              {patientFeatures.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>
          </div>

          {/* Professional Features Column */}
          <div className="bg-slate-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center lg:text-left">For Professionals</h3>
            <div className="space-y-8">
              {professionalFeatures.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
