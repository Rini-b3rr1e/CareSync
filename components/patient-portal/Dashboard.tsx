
import React from 'react';
import HealthMetrics from './HealthMetrics';
import ComplianceChart from './ComplianceChart';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <HealthMetrics />
        </div>
        <div>
            <ComplianceChart />
        </div>
    </div>
  );
};

export default Dashboard;
