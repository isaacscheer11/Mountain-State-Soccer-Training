
import React from 'react';

interface AboutSectionProps {
  onOwnerClick: () => void;
  onMissionClick: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onOwnerClick, onMissionClick }) => {
  return (
    <section className="py-32 bg-[#001a38] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Bio Text */}
        <div className="space-y-12">
          <div className="space-y-2">
            <span className="text-[#EAAA00] font-bold tracking-widest uppercase text-sm">founded in WV</span>
            <h2 className="text-5xl md:text-7xl font-brand font-black text-white leading-tight uppercase">
              MORE THAN<br/><span className="text-[#EAAA00]">TRAINING</span>
            </h2>
            <div className="w-24 h-1 bg-[#EAAA00] mx-auto mt-6"></div>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl text-white/90 leading-relaxed font-light">
              Mountain State Training was born from a passion for the game and a commitment to helping young athletes develop their skills. We specialize in individual and small-group sessions where players can learn at their own pace in a supportive, high-energy environment.
            </p>
          </div>

          {/* Icon Navigation Buttons */}
          <div className="pt-8 flex flex-wrap justify-center gap-12">
             <button 
                onClick={onOwnerClick}
                className="group flex flex-col items-center gap-4 transition-transform hover:scale-110"
             >
               <div className="w-20 h-20 rounded-full bg-[#EAAA00] flex items-center justify-center text-[#002855] shadow-lg group-hover:shadow-[#EAAA00]/40 transition-all duration-300">
                  <svg className="w-10 h-10 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
               </div>
               <span className="text-sm font-black uppercase tracking-[0.2em] text-[#EAAA00]">Meet Our Coaches</span>
             </button>

             <button 
                onClick={onMissionClick}
                className="group flex flex-col items-center gap-4 transition-transform hover:scale-110"
             >
               <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:border-[#EAAA00] hover:text-[#EAAA00] transition-all duration-300">
                  <svg className="w-10 h-10 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
               </div>
               <span className="text-sm font-black uppercase tracking-[0.2em] text-white group-hover:text-[#EAAA00]">Our Mission</span>
             </button>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#EAAA00]/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default AboutSection;
