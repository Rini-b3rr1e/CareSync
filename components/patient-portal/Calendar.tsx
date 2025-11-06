
import React, { useState, useMemo } from 'react';
import { generateScheduleData, ScheduleEvent } from '../../data/mockData';
import { CALENDAR_EXERCISE_ICON, CALENDAR_MED_ICON } from '../../constants';

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const scheduleData = useMemo(() => generateScheduleData(currentDate), [currentDate]);

    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const startDate = new Date(startOfMonth);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const endDate = new Date(endOfMonth);
    endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));

    const calendarDays = [];
    let date = new Date(startDate);
    while (date <= endDate) {
        calendarDays.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    
    const changeMonth = (offset: number) => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + offset, 1));
    }

    const today = new Date();
    const isToday = (d: Date) => d.getDate() === today.getDate() && d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear();
    const isCurrentMonth = (d: Date) => d.getMonth() === currentDate.getMonth();

    const getEventsForDay = (day: Date) => {
        return scheduleData.filter(e => e.date.toDateString() === day.toDateString());
    }

    const eventColors = {
        medication: 'bg-blue-100 text-blue-800',
        exercise: 'bg-yellow-100 text-yellow-800',
        appointment: 'bg-green-100 text-green-800',
        'ai-suggestion': 'border-dashed border-2 border-primary text-primary'
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <button onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-slate-100">&lt;</button>
                <h2 className="text-xl font-bold text-slate-800">
                    {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h2>
                <button onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-slate-100">&gt;</button>
            </div>
            <div className="grid grid-cols-7 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center py-2 bg-slate-100 text-xs font-bold text-slate-600">{day}</div>
                ))}
                {calendarDays.map((day, i) => {
                    const events = getEventsForDay(day);
                    const appointments = events.filter(e => e.type === 'appointment');
                    const recurring = events.filter(e => e.type === 'medication' || e.type === 'exercise');
                    const suggestions = events.filter(e => e.type === 'ai-suggestion');

                    return (
                    <div key={i} className={`p-2 bg-white min-h-[120px] ${isCurrentMonth(day) ? '' : 'bg-slate-50'}`}>
                        <div className={`flex items-center justify-center w-6 h-6 rounded-full text-sm ${isToday(day) ? 'bg-primary text-white' : ''}`}>
                            {day.getDate()}
                        </div>
                         <div className="mt-1 space-y-1">
                             {appointments.map((event, idx) => (
                                <div key={idx} className="flex items-center space-x-1">
                                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                    <p className="text-xs truncate text-slate-700">{event.title}</p>
                                </div>
                            ))}
                            {suggestions.map((event, idx) => (
                                <div key={idx} className={`text-xs p-1 rounded-md ${eventColors[event.type]}`}>
                                    <p className="font-semibold truncate">{event.title}</p>
                                    <p className="text-xs opacity-75">Suggested</p>
                                </div>
                            ))}
                            {recurring.length > 0 && 
                                <div className="flex items-center space-x-2 text-slate-500 pt-1">
                                    {recurring.some(e => e.type === 'medication') && <div title="Medication">{CALENDAR_MED_ICON}</div>}
                                    {recurring.some(e => e.type === 'exercise') && <div title="Exercise">{CALENDAR_EXERCISE_ICON}</div>}
                                </div>
                            }
                        </div>
                    </div>
                )})}
            </div>
        </div>
    );
};

export default Calendar;
