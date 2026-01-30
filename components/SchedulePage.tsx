
import React, { useState, useMemo } from 'react';
import { WEEKLY_SCHEDULE } from '../constants';

interface SessionType {
  id: string;
  name: string;
  duration: string;
  price: string;
  icon: string;
}

interface SelectedSlot {
  day: string;
  date: string;
  time: string;
}

interface SchedulePageProps {
  onBack: () => void;
  onShowWaiver?: () => void;
  onViewClinics?: () => void;
}

const SchedulePage: React.FC<SchedulePageProps> = ({ onBack, onShowWaiver, onViewClinics }) => {
  const [selectedSession, setSelectedSession] = useState<SessionType | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState<SelectedSlot | null>(null);
  const [isBooking, setIsBooking] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    athleteName: '',
    parentName: '',
    email: '',
    phone: '',
    age: '',
    notes: ''
  });

  // Calendar Logic
  const daysInMonth = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    // Padding for first week
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    // Days of month
    for (let d = 1; d <= lastDate; d++) {
      days.push(new Date(year, month, d));
    }
    return days;
  }, [currentMonth]);

  const changeMonth = (offset: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1));
  };

  const handleTimeClick = (time: string) => {
    if (!selectedDate) return;
    const dayName = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
    const dateStr = selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    setSelectedSlot({ day: dayName, date: dateStr, time });
    setIsBooking(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  const resetAll = () => {
    setSelectedSession(null);
    setSelectedDate(new Date());
    setSelectedSlot(null);
    setIsBooking(false);
    setIsConfirmed(false);
    setFormData({ athleteName: '', parentName: '', email: '', phone: '', age: '', notes: '' });
  };

  const getAvailableTimes = (date: Date | null) => {
    if (!date) return [];
    const day = date.getDay();
    if (day === 0) return []; // Sunday off
    if (day === 6) return ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM']; // Saturday
    return ['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '5:00 PM', '6:00 PM', '7:00 PM']; // Weekdays
  };

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-[#001a38] text-white pt-32 pb-24 px-4 animate-in zoom-in duration-500">
        <div className="max-w-2xl mx-auto text-center space-y-8 bg-[#002855] p-12 rounded-3xl border border-[#EAAA00]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-[#EAAA00]"></div>
          <div className="text-7xl mb-4">✅</div>
          <h1 className="text-4xl font-brand font-black uppercase tracking-tight">Booking Requested!</h1>
          <div className="space-y-2 text-white/70">
            <p className="text-lg">We've received your request for <span className="text-[#EAAA00] font-bold">{selectedSession?.name}</span>.</p>
            <p className="font-bold text-white">{selectedSlot?.day}, {selectedSlot?.date} @ {selectedSlot?.time}</p>
          </div>
          <button 
            onClick={resetAll}
            className="w-full py-5 bg-[#EAAA00] text-[#002855] font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl shadow-[#EAAA00]/20"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  if (isBooking && selectedSlot) {
    return (
      <div className="min-h-screen bg-[#001a38] text-white pt-32 pb-24 px-4 animate-in fade-in slide-in-from-bottom-8 duration-500">
        <div className="max-w-2xl mx-auto space-y-10">
          <button 
            onClick={() => setIsBooking(false)}
            className="text-[#EAAA00] text-xs font-bold uppercase tracking-[0.3em] hover:tracking-[0.5em] transition-all flex items-center gap-2 group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Change Time
          </button>

          <div className="bg-[#002855] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl space-y-8">
            <h2 className="text-3xl font-brand font-black uppercase tracking-tight">Athlete Details</h2>
            <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Athlete Name</label>
                <input required type="text" placeholder="First & Last Name" className="w-full bg-[#001a38] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#EAAA00] transition-colors" value={formData.athleteName} onChange={(e) => setFormData({...formData, athleteName: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Athlete Age</label>
                <input required type="number" placeholder="Age" className="w-full bg-[#001a38] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#EAAA00] transition-colors" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                <input required type="email" placeholder="your@email.com" className="w-full bg-[#001a38] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#EAAA00] transition-colors" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="md:col-span-2 pt-4">
                <button type="submit" className="w-full py-5 bg-[#EAAA00] text-[#002855] font-black uppercase tracking-widest rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#EAAA00]/10">Confirm Booking</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // CALENDAR SELECTION VIEW
  if (selectedSession) {
    const availableTimes = getAvailableTimes(selectedDate);

    return (
      <div className="min-h-screen bg-[#001a38] text-white pt-24 pb-20 px-4 animate-in fade-in slide-in-from-right-8 duration-500">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Compact Header */}
          <div className="flex items-end justify-between border-b border-white/10 pb-4">
            <div className="space-y-1">
              <button 
                onClick={() => setSelectedSession(null)}
                className="text-[#EAAA00] text-[10px] font-bold uppercase tracking-[0.2em] hover:tracking-[0.4em] transition-all flex items-center gap-2 group mb-1"
              >
                <svg className="w-3 h-3 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Change Package
              </button>
              <h1 className="text-2xl md:text-3xl font-brand font-black uppercase text-white leading-none">{selectedSession.name}</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Calendar Column - Compressed */}
            <div className="md:col-span-7 bg-[#002855]/50 p-6 rounded-2xl border border-white/5">
              <div className="flex items-center justify-between mb-6">
                <button onClick={() => changeMonth(-1)} className="p-1 hover:bg-white/10 rounded-full text-[#EAAA00]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <h2 className="text-xl font-brand italic text-white">
                  {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </h2>
                <button onClick={() => changeMonth(1)} className="p-1 hover:bg-white/10 rounded-full text-[#EAAA00]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                  <div key={d} className="text-[#EAAA00] text-[10px] font-bold uppercase tracking-widest mb-2 italic opacity-60">{d}</div>
                ))}
                {daysInMonth.map((date, idx) => (
                  <div key={idx} className="aspect-square flex flex-col items-center justify-center p-0.5">
                    {date ? (
                      <button
                        onClick={() => setSelectedDate(date)}
                        className={`w-full aspect-square flex flex-col items-center justify-center rounded-lg transition-all relative group ${
                          selectedDate?.toDateString() === date.toDateString()
                            ? 'bg-[#EAAA00] text-[#002855] font-black shadow-[0_0_15px_rgba(234,170,0,0.3)] scale-105'
                            : 'text-white/80 hover:bg-white/10 italic'
                        }`}
                      >
                        <span className="text-sm md:text-base">{date.getDate()}</span>
                        {date.getDay() !== 0 && (
                          <span className={`w-0.5 h-0.5 rounded-full mt-0.5 ${selectedDate?.toDateString() === date.toDateString() ? 'bg-[#002855]' : 'bg-[#EAAA00]'}`}></span>
                        )}
                      </button>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Column - Compact Side-by-Side */}
            <div className="md:col-span-5 space-y-4 animate-in slide-in-from-right-4">
              <div className="space-y-1">
                <h3 className="text-xl font-brand italic text-white">
                  Availability for {selectedDate?.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                </h3>
              </div>

              {availableTimes.length > 0 ? (
                <div className="grid grid-cols-2 gap-3">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeClick(time)}
                      className="group relative overflow-hidden bg-transparent border border-white/10 p-4 transition-all hover:border-[#EAAA00] hover:bg-white/5 active:scale-95"
                    >
                      <div className="relative z-10 flex flex-col items-center justify-center italic text-base font-medium tracking-tight group-hover:text-[#EAAA00]">
                        {time.toLowerCase()}
                      </div>
                      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-10">
                        <svg className="w-full h-full" preserveAspectRatio="none">
                          <line x1="0" y1="100%" x2="100%" y2="0" stroke="white" strokeWidth="1" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white/5 rounded-2xl border border-dashed border-white/10">
                  <p className="text-white/20 font-brand text-sm italic">No availability for this date</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. PACKAGE SELECTION VIEW (DEFAULT)
  return (
    <div className="min-h-screen bg-[#001a38] text-white pt-32 pb-24 px-4 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-6 text-center">
          <button 
            onClick={onBack}
            className="text-[#EAAA00] text-xs font-bold uppercase tracking-[0.3em] hover:tracking-[0.5em] transition-all mb-4 inline-flex items-center gap-2 group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Home
          </button>
          <h1 className="text-5xl md:text-7xl font-brand font-black tracking-tight leading-none uppercase">
            BOOK YOUR<br/><span className="text-[#EAAA00]">TRAINING</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Ready to reach your peak? Select a training path below to view available dates and times in the Morgantown area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {WEEKLY_SCHEDULE.sessions.map((type) => (
            <div 
              key={type.name} 
              className="relative overflow-hidden bg-gradient-to-r from-[#EAAA00] to-[#ffcc00] p-1 shadow-2xl rounded-3xl group transition-all duration-500 hover:-translate-y-2 hover:shadow-[#EAAA00]/20"
            >
              <div 
                onClick={() => setSelectedSession(type)}
                className="bg-[#002855] p-12 md:p-14 rounded-[1.4rem] relative z-10 h-full flex flex-col cursor-pointer"
              >
                <div className="absolute -top-4 -right-4 text-9xl opacity-[0.03] rotate-12 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                  {type.icon}
                </div>
                <div className="text-6xl mb-8 group-hover:scale-125 transition-transform duration-500 relative z-10">{type.icon}</div>
                <h3 className="text-3xl font-brand font-black mb-2 group-hover:text-[#EAAA00] transition-colors relative z-10 uppercase tracking-tight">{type.name}</h3>
                <div className="flex items-center justify-between text-white/50 text-sm font-bold uppercase tracking-widest mt-auto pt-10 relative z-10 border-t border-white/5">
                  <span>{type.duration}</span>
                  <span className="text-[#EAAA00] text-2xl font-black">{type.price}</span>
                </div>
                <button className="w-full mt-10 py-5 bg-[#EAAA00] text-[#002855] text-sm font-black uppercase tracking-widest rounded-lg relative z-10 shadow-lg group-hover:bg-white transition-all transform hover:scale-[1.02] active:scale-95">
                  Select Session
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden bg-gradient-to-r from-[#EAAA00] to-[#ffcc00] p-1 shadow-2xl rounded-3xl group">
           <div className="bg-[#002855] p-12 rounded-[1.4rem] relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                 <div className="text-7xl bg-[#001a38] p-8 rounded-full border-4 border-[#EAAA00] animate-bounce-slow group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(234,170,0,0.3)]">
                    ⚽
                 </div>
                 <div className="flex-grow space-y-4 text-center lg:text-left">
                    <div className="inline-block px-3 py-1 bg-[#EAAA00] text-[#002855] text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-2">
                       Special Event
                    </div>
                    <h2 className="text-4xl md:text-5xl font-brand font-black text-white leading-none uppercase">
                       YOUTH <span className="text-[#EAAA00]">CLINICS</span>
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
                       {WEEKLY_SCHEDULE.youthClinics.length > 0 && (
                         <span className="block mt-2 text-[#EAAA00] font-bold">
                           Next Clinic: {WEEKLY_SCHEDULE.youthClinics[0].date} at {WEEKLY_SCHEDULE.youthClinics[0].location}
                         </span>
                       )}
                    </p>
                    <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
                       <button 
                        onClick={onViewClinics}
                        className="px-10 py-5 bg-[#EAAA00] text-[#002855] font-black uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-xl hover:shadow-[#EAAA00]/20 active:scale-95"
                       >
                          View Upcoming Clinics
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="bg-[#002855]/50 backdrop-blur-sm p-10 border border-white/5 rounded-2xl">
           <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="flex-grow space-y-2">
                <h4 className="text-xl font-brand font-bold">Custom Team Inquiries?</h4>
                <p className="text-white/60">Looking for team-wide training or recurring seasonal clinics? Contact our staff directly for custom package pricing.</p>
              </div>
              <a href="mailto:train@mountainstate.com" className="whitespace-nowrap px-8 py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest rounded-sm hover:bg-white hover:text-[#002855] transition-all active:scale-95">
                Contact Staff
              </a>
           </div>
        </div>
      </div>
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default SchedulePage;
