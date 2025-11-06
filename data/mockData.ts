
export interface HealthDataPoint {
  date: Date;
  value: number;
}

export interface ComplianceData {
  day: string;
  taken: number;
  missed: number;
}

export interface ScheduleEvent {
    date: Date;
    type: 'medication' | 'exercise' | 'appointment' | 'ai-suggestion';
    title: string;
    time?: string;
}

// Generate semi-realistic blood pressure data
export const generateBloodPressureData = (days: number): HealthDataPoint[] => {
  const data: HealthDataPoint[] = [];
  const baseSystolic = 120;
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const fluctuation = (Math.random() - 0.5) * 10;
    data.push({ date, value: Math.round(baseSystolic + fluctuation) });
  }
  return data;
};

// Generate semi-realistic blood sugar data
export const generateBloodSugarData = (days: number): HealthDataPoint[] => {
  const data: HealthDataPoint[] = [];
  const baseValue = 90;
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    // Simulate meals and fasting
    const hourFluctuation = Math.sin(date.getHours() / 4) * 20;
    const randomFluctuation = (Math.random() - 0.5) * 15;
    data.push({ date, value: Math.round(baseValue + hourFluctuation + randomFluctuation) });
  }
  return data;
};

// Generate weekly compliance data
export const generateComplianceData = (): ComplianceData[] => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map(day => {
        const taken = Math.floor(Math.random() * 3) + 1; // 1 to 3 meds taken
        const missed = Math.random() > 0.7 ? 1 : 0; // chance of missing one
        return { day, taken, missed };
    });
};

// Generate schedule events for the current month
export const generateScheduleData = (date: Date): ScheduleEvent[] => {
    const events: ScheduleEvent[] = [];
    const year = date.getFullYear();
    const month = date.getMonth();

    // Daily medication and exercise
    for (let i = 1; i <= 31; i++) {
        const currentDate = new Date(year, month, i);
        if (currentDate.getMonth() !== month) continue;

        events.push({ date: currentDate, type: 'medication', title: 'Heart Medication', time: '8:00 AM'});
        events.push({ date: currentDate, type: 'medication', title: 'Vitamin D', time: '8:00 AM'});
        events.push({ date: currentDate, type: 'exercise', title: 'Morning Walk', time: '9:00 AM'});
        events.push({ date: currentDate, type: 'medication', title: 'Heart Medication', time: '8:00 PM'});
    }

    // Specific appointments
    events.push({ date: new Date(year, month, 8), type: 'appointment', title: 'Dentist Checkup' });
    events.push({ date: new Date(year, month, 15), type: 'appointment', title: 'Cardiologist Follow-up' });

    // AI Suggestion
    events.push({ date: new Date(year, month, 25), type: 'ai-suggestion', title: 'Follow-up blood test' });

    return events;
}
