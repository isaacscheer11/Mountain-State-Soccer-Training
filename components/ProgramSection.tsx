
import React from 'react';
import { PROGRAMS } from '../constants';

const ProgramCard: React.FC<{ program: typeof PROGRAMS[0], index: number }> = ({ program, index }) => {
  return (
    <div 
      className="group relative bg-[#001a38] border border-white/5 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
    >
      {/* Border Beam Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 border-2 border-[#EAAA00]/30 rounded-2xl shadow-[inset_0_0_20px_rgba(234,170,0,0.1)]"></div>
      </div>

      <div className="relative z-10">
        <div className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6 inline-block">
          {program.icon}
        </div>
        <h3 className="text-2xl font-brand font-bold text-white mb-4 group-hover:text-[#EAAA00] transition-colors">
          {program.title}
        </h3>
        <p className="text-white/60 leading-relaxed mb-8">
          {program.description}
        </p>
        
        <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#EAAA00] group-hover:gap-4 transition-all">
          Learn More
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
      </div>

      {/* Corner Glow */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#EAAA00]/10 blur-3xl group-hover:bg-[#EAAA00]/20 transition-colors"></div>
    </div>
  );
};

const ProgramSection: React.FC = () => {
  return (
    <section id="schedule" className="py-24 bg-[#002855] relative px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-brand font-black text-white">READY TO PLAY?</h2>
          <div className="w-24 h-1 bg-[#EAAA00] mx-auto"></div>
          <p className="text-white/60 max-w-2xl mx-auto">
            Our specialized programs help young athletes build confidence, technical skills, and a love for the game in a supportive and fun environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROGRAMS.map((p, idx) => (
            <ProgramCard key={idx} program={p} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
