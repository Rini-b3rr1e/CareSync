
import React, { useState, useMemo } from 'react';
import { generateBloodPressureData, generateBloodSugarData, HealthDataPoint } from '../../data/mockData';

type Metric = 'blood_pressure' | 'blood_sugar';
type Timespan = 7 | 30 | 90;

const HealthLineChart: React.FC<{ data: HealthDataPoint[], color: string }> = ({ data, color }) => {
    if (!data || data.length === 0) return <div className="h-64 flex items-center justify-center text-slate-500">No data available.</div>;

    const maxValue = Math.max(...data.map(p => p.value)) * 1.1;
    const minValue = Math.min(...data.map(p => p.value)) * 0.9;
    const range = maxValue - minValue;

    const points = data.map((point, i) => {
        const x = (i / (data.length - 1)) * 100;
        const y = 100 - ((point.value - minValue) / range) * 100;
        return `${x},${y}`;
    }).join(' ');

    return (
        <div className="w-full h-64 bg-slate-50 rounded-lg p-4">
             <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                <polyline
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={points}
                />
            </svg>
        </div>
    );
};


const HealthMetrics: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<Metric>('blood_pressure');
  const [activeTimespan, setActiveTimespan] = useState<Timespan>(30);

  const data = useMemo(() => {
    if (activeMetric === 'blood_pressure') {
      return generateBloodPressureData(activeTimespan);
    }
    return generateBloodSugarData(activeTimespan);
  }, [activeMetric, activeTimespan]);

  const metricDetails = {
      blood_pressure: { title: 'Blood Pressure (Systolic)', color: '#06b6d4', unit: 'mmHg' },
      blood_sugar: { title: 'Blood Sugar', color: '#10b981', unit: 'mg/dL' },
  }

  const quickRead = useMemo(() => {
      if(data.length < 2) return "Not enough data to generate a summary.";
      const startValue = data[0].value;
      const endValue = data[data.length - 1].value;
      const change = endValue - startValue;

      let summary = `Your ${metricDetails[activeMetric].title.toLowerCase()} has remained relatively stable.`;
      if (Math.abs(change) > 5) {
          summary = `Your ${metricDetails[activeMetric].title.toLowerCase()} has ${change > 0 ? 'increased' : 'decreased'} slightly over this period.`
      }
      return summary;
  }, [data, activeMetric]);

  const lastValue = data.length > 0 ? data[data.length - 1].value : 'N/A';

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
        <div>
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                <button onClick={() => setActiveMetric('blood_pressure')} className={`px-3 py-1 text-sm font-semibold rounded-full ${activeMetric === 'blood_pressure' ? 'bg-primary text-white' : 'bg-slate-200 text-slate-700'}`}>Blood Pressure</button>
                <button onClick={() => setActiveMetric('blood_sugar')} className={`px-3 py-1 text-sm font-semibold rounded-full ${activeMetric === 'blood_sugar' ? 'bg-secondary text-white' : 'bg-slate-200 text-slate-700'}`}>Blood Sugar</button>
            </div>
        </div>
        <div className="flex items-center space-x-2">
            {( [7, 30, 90] as Timespan[]).map(span => (
                <button key={span} onClick={() => setActiveTimespan(span)} className={`px-3 py-1 text-xs font-medium rounded-full ${activeTimespan === span ? 'bg-slate-800 text-white' : 'bg-slate-200 text-slate-600'}`}>
                    {span}d
                </button>
            ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="text-xl font-bold text-slate-800">{metricDetails[activeMetric].title}</h3>
        <p className="text-3xl font-extrabold text-slate-900">{lastValue} <span className="text-lg font-medium text-slate-500">{metricDetails[activeMetric].unit}</span></p>
      </div>

      <HealthLineChart data={data} color={metricDetails[activeMetric].color} />

       <div className="mt-4 pt-4 border-t border-slate-200">
            <h4 className="font-bold text-slate-700">Quick Read</h4>
            <p className="text-slate-600 text-sm">{quickRead}</p>
            <p className="text-xs text-slate-400 mt-2">
                This information is for tracking and scheduling purposes only. Consult your healthcare provider for medical advice.
            </p>
        </div>
    </div>
  );
};

export default HealthMetrics;
