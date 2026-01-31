
import React from 'react';

interface HeroProps {
  onScheduleClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScheduleClick }) => {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000" 
          alt="Athletic training field" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#002855]/95 via-[#002855]/40 to-[#001a38]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-12 pt-20">
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <p className="text-[#EAAA00] font-bold tracking-[0.6em] uppercase text-xs md:text-sm">Gold Standard in Technical Training</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-brand font-black text-white tracking-tighter leading-none drop-shadow-2xl">
            MOUNTAIN STATE<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#EAAA00]">TRAINING</span>
          </h1>
        </div>

        {/* Contact CTA */}
        <div className="flex flex-col items-center animate-in fade-in zoom-in duration-1000 delay-300">
           <button 
            onClick={onScheduleClick}
            className="group relative focus:outline-none"
           >
             <div className="relative z-10 px-10 py-5 border-2 border-[#EAAA00] bg-transparent transition-all duration-500 group-hover:bg-[#EAAA00] group-hover:shadow-[0_0_40px_rgba(234,170,0,0.6)]">
                <span className="text-xl md:text-3xl font-brand font-black text-[#EAAA00] uppercase tracking-widest transition-colors duration-500 group-hover:text-[#002855]">
                  Schedule Training
                </span>
             </div>
             
             {/* Border Flash Effect */}
             <div className="absolute -inset-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 border-2 border-white rounded-sm animate-pulse"></div>
             </div>
           </button>
        </div>
      </div>

      {/* Light Overlay at the very top for depth */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#002855] to-transparent opacity-60"></div>
    </section>
  );
};

export default Hero;
