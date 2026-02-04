
import React, { useState, useEffect } from 'react';
import { WEEKLY_SCHEDULE } from '../constants';

// Extend Window interface for Calendly
declare global {
  interface Window {
    Calendly: any;
  }
}

interface SessionType {
  id: string;
  name: string;
  duration: string;
  price: string;
  icon: string;
  calendlyUrl: string;
}

interface SchedulePageProps {
  onBack: () => void;
  onShowWaiver?: () => void;
  onViewClinics?: () => void;
}

const SchedulePage: React.FC<SchedulePageProps> = ({ onBack, onShowWaiver, onViewClinics }) => {
  const [selectedSession, setSelectedSession] = useState<SessionType | null>(null);

  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Session types with Calendly URLs
  const sessionTypes: SessionType[] = [
    {
      id: 'private',
      name: 'Private 1-on-1',
      duration: '60 Min',
      price: '$60',
      icon: '👤',
      calendlyUrl: 'https://calendly.com/isaacscheer11/private-1-on-1'
    },
    {
      id: 'group',
      name: 'Small Group (2-5)',
      duration: '60 Min',
      price: '$40/ea',
      icon: '👥',
      calendlyUrl: 'https://calendly.com/isaacscheer11/new-meeting'
    },
  ];

  // Initialize Calendly widget when session is selected
  useEffect(() => {
    if (selectedSession && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: selectedSession.calendlyUrl,
        parentElement: document.getElementById('calendly-embed'),
        prefill: {},
        utm: {},
        // Customize colors to match website theme
        primaryColor: 'eaaa00',
        textColor: 'ffffff',
        backgroundColor: '002855'
      });
    }
  }, [selectedSession]);

  // CALENDLY EMBED VIEW
  if (selectedSession) {
    return (
      <div className="min-h-screen bg-[#001a38] text-white pt-24 pb-20 px-4 animate-in fade-in slide-in-from-right-8 duration-500">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header with Navigation */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="space-y-1">
              <button
                onClick={() => setSelectedSession(null)}
                className="text-[#EAAA00] text-[10px] font-bold uppercase tracking-[0.2em] hover:tracking-[0.4em] transition-all flex items-center gap-2 group mb-1"
              >
                <svg className="w-3 h-3 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Change Package
              </button>
              <h1 className="text-2xl md:text-3xl font-brand font-black uppercase text-white leading-none">{selectedSession.name}</h1>
              <p className="text-white/60 text-sm">{selectedSession.duration} • {selectedSession.price}</p>
            </div>
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-6 py-3 bg-[#EAAA00] text-[#002855] font-bold uppercase tracking-widest rounded-lg hover:bg-white transition-all shadow-lg active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              <span className="hidden md:inline">Home</span>
            </button>
          </div>

          {/* Calendly Inline Widget with darker styling - smaller and no scroll */}
          <div className="bg-[#001a38] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#EAAA00]/30 p-4" style={{ minHeight: '500px' }}>
            <div
              id="calendly-embed"
              className="rounded-xl overflow-hidden"
              style={{ minWidth: '320px', height: '500px', filter: 'brightness(0.95)', overflow: 'hidden' }}
            ></div>
          </div>

          {/* Bottom Home Button */}
          <div className="flex justify-center pt-4">
            <button
              onClick={onBack}
              className="px-8 py-4 bg-transparent border-2 border-[#EAAA00] text-[#EAAA00] font-black uppercase tracking-widest rounded-lg hover:bg-[#EAAA00] hover:text-[#002855] transition-all shadow-lg active:scale-95"
            >
              ← Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // PACKAGE SELECTION VIEW (DEFAULT)
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
          {sessionTypes.map((type) => (
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
              <a href="mailto:train@mountainstatetraining.com" className="whitespace-nowrap px-8 py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest rounded-sm hover:bg-white hover:text-[#002855] transition-all active:scale-95">
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
