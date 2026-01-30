
import React, { useState, useEffect } from 'react';
import { WEEKLY_SCHEDULE } from '../constants';

interface ClinicsPageProps {
  onBack: () => void;
  onBook: () => void;
}

const ClinicsPage: React.FC<ClinicsPageProps> = ({ onBack, onBook }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [selectedClinicTitle, setSelectedClinicTitle] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    athleteName: '',
    age: '',
    email: '',
    notes: ''
  });

  // Ensure we start at the top when switching to the registration form
  useEffect(() => {
    if (isRegistering || isConfirmed) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isRegistering, isConfirmed]);

  const handleRegisterInitiation = (title: string) => {
    setSelectedClinicTitle(title);
    setIsRegistering(true);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-[#001a38] text-white pt-32 pb-24 px-4 animate-in zoom-in duration-500">
        <div className="max-w-2xl mx-auto text-center space-y-8 bg-[#002855] p-12 rounded-3xl border border-[#EAAA00]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-[#EAAA00]"></div>
          <div className="text-7xl mb-4">⚽</div>
          <h1 className="text-4xl font-brand font-black uppercase tracking-tight">Registration Sent!</h1>
          <div className="space-y-2 text-white/70">
            <p className="text-lg">We've received your registration for <span className="text-[#EAAA00] font-bold">{selectedClinicTitle}</span>.</p>
            <p className="font-bold text-white">We will reach out shortly with payment details and final instructions.</p>
          </div>
          <button 
            onClick={onBack}
            className="w-full py-5 bg-[#EAAA00] text-[#002855] font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl shadow-[#EAAA00]/20"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (isRegistering) {
    return (
      <div className="min-h-screen bg-[#001a38] text-white pt-32 pb-24 px-4 animate-in fade-in slide-in-from-bottom-8 duration-500">
        <div className="max-w-2xl mx-auto space-y-10">
          <button 
            onClick={() => setIsRegistering(false)}
            className="text-[#EAAA00] text-xs font-bold uppercase tracking-[0.3em] hover:tracking-[0.5em] transition-all flex items-center gap-2 group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Details
          </button>

          <div className="bg-[#002855] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-brand font-black uppercase tracking-tight">Register for Clinic</h2>
              <p className="text-white/40 text-sm italic">{selectedClinicTitle}</p>
            </div>
            
            <form onSubmit={handleRegisterSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Athlete Name</label>
                <input required type="text" placeholder="First & Last Name" className="w-full bg-[#001a38] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#EAAA00] transition-colors" value={formData.athleteName} onChange={(e) => setFormData({...formData, athleteName: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Athlete Age</label>
                <input required type="number" placeholder="Age" className="w-full bg-[#001a38] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#EAAA00] transition-colors" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Parent Email Address</label>
                <input required type="email" placeholder="your@email.com" className="w-full bg-[#001a38] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#EAAA00] transition-colors" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="md:col-span-2 pt-4">
                <button type="submit" className="w-full py-5 bg-[#EAAA00] text-[#002855] font-black uppercase tracking-widest rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#EAAA00]/10">Submit Registration</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#001a38] text-white pt-24 md:pt-32 pb-24 px-4 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EAAA00]/5 blur-[100px] rounded-full -mr-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#EAAA00]/5 blur-[100px] rounded-full -ml-48 -mb-48 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-10 md:space-y-12 relative z-10">
        <div className="space-y-4 text-center">
          <button 
            onClick={onBack}
            className="text-[#EAAA00] text-xs font-bold uppercase tracking-[0.3em] hover:tracking-[0.5em] transition-all mb-2 inline-flex items-center gap-2 group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Home
          </button>
          <h1 className="text-5xl md:text-7xl font-brand font-black tracking-tighter leading-none uppercase">
            Soccer Skills <span className="text-[#EAAA00]">Clinic</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Elevate your technical development with professional-grade drills in a high-energy, community environment. We focus on technical mastery while keeping the sessions fun and engaging for every player.
          </p>
        </div>

        {/* Clinic Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {WEEKLY_SCHEDULE.youthClinics.map((clinic, index) => (
            <div 
              key={index}
              className="relative group h-full"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#EAAA00] to-[#ffcc00] rounded-3xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative h-full bg-[#002855] border border-white/10 p-6 md:p-8 rounded-3xl shadow-xl flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                <div className="space-y-4 md:space-y-6">
                  <div className="inline-block px-4 py-1.5 bg-[#EAAA00]/10 text-[#EAAA00] text-[10px] font-black uppercase tracking-widest rounded-full border border-[#EAAA00]/20">
                    Ages {clinic.ages}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-brand font-black uppercase leading-tight">{clinic.title}</h2>
                  
                  <div className="grid grid-cols-1 gap-3 md:gap-4 pt-2">
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#EAAA00]">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-white/40">Date</p>
                        <p className="text-sm md:text-base font-bold">{clinic.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#EAAA00]">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-white/40">Time</p>
                        <p className="text-sm md:text-base font-bold">{clinic.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#EAAA00] shrink-0 mt-1">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-white/40">Location</p>
                        <p className="text-sm md:text-base font-bold">{clinic.location}</p>
                        <p className="text-[10px] md:text-[11px] text-white/40 font-medium italic mt-0.5">{clinic.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 md:pt-8">
                  <button 
                    onClick={() => handleRegisterInitiation(clinic.title)}
                    className="w-full px-6 md:px-8 py-3.5 md:py-4 bg-[#EAAA00] text-[#002855] font-black uppercase tracking-widest rounded-xl hover:bg-white hover:scale-[1.03] transition-all shadow-lg active:scale-95 text-xs md:text-sm"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-8">
           <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/5">
              <h4 className="text-[#EAAA00] font-black uppercase tracking-widest text-sm mb-4">Clinic Focus</h4>
              <ul className="space-y-2 md:space-y-3">
                 {['Technical Development', 'First Touch mastery', '1v1 attacking creativity', 'Small-sided competitive games'].map(item => (
                   <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                      <svg className="w-4 h-4 text-[#EAAA00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      {item}
                   </li>
                 ))}
              </ul>
           </div>
           <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/5">
              <h4 className="text-[#EAAA00] font-black uppercase tracking-widest text-sm mb-4">Coach Approach</h4>
              <p className="text-white/60 leading-relaxed text-sm">
                Led by current collegiate athletes, our clinics provide high-energy environments where kids can learn technical skills directly from players who compete at the highest level.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicsPage;
