
import React from 'react';
import { generateComplianceData, ComplianceData } from '../../data/mockData';

const ComplianceChart: React.FC = () => {
    const data: ComplianceData[] = generateComplianceData();
    const maxVal = Math.max(...data.map(d => d.taken + d.missed));

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg h-full">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Weekly Compliance</h3>
            <div className="flex justify-between items-end space-x-2 h-64">
                {data.map(({ day, taken, missed }) => (
                    <div key={day} className="flex-1 flex flex-col items-center justify-end">
                        <div className="flex items-end h-full w-full justify-center space-x-1">
                             <div 
                                className="w-1/2 bg-secondary" 
                                style={{ height: `${(taken / maxVal) * 100}%` }}
                                title={`Taken: ${taken}`}
                            ></div>
                            <div 
                                className="w-1/2 bg-accent" 
                                style={{ height: `${(missed / maxVal) * 100}%` }}
                                title={`Missed: ${missed}`}
                            ></div>
                        </div>
                        <span className="text-xs font-medium text-slate-500 mt-2">{day}</span>
                    </div>
                ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200 flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span className="text-slate-600">Taken</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <span className="text-slate-600">Missed</span>
                </div>
            </div>
        </div>
    );
};

export default ComplianceChart;
