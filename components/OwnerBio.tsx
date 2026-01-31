
import React, { useEffect, useRef } from 'react';

interface TrainerProfile {
  name: string;
  role: string;
  image: string;
}

const TRAINERS: TrainerProfile[] = [
  {
    name: "Brayden Macomber",
    role: "Trainer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&fit=crop"
  },
  {
    name: "Constantinos Christou",
    role: "Trainer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=400&fit=crop"
  },
  {
    name: "Pablo Pozos",
    role: "Trainer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop"
  }
];

interface OwnerBioProps {
  onBack: () => void;
  onSchedule: () => void;
  initialScrollToMission?: boolean;
}

const OwnerBio: React.FC<OwnerBioProps> = ({ onBack, onSchedule, initialScrollToMission }) => {
  const missionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialScrollToMission && missionRef.current) {
      setTimeout(() => {
        missionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [initialScrollToMission]);

  return (
    <div className="min-h-screen bg-[#001a38] text-white pt-32 pb-24 px-4 overflow-hidden relative">
      {/* Background Motif */}
      <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none hidden lg:block">
        <svg className="w-[600px] h-[600px]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 10 L90 30 V70 L50 90 L10 70 V30 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-16">
          
          {/* Main Owner Section */}
          <div className="flex flex-col items-center space-y-10 max-w-3xl">
            <div className="relative">
              <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#EAAA00] shadow-[0_0_50px_rgba(234,170,0,0.2)] bg-[#002855] flex items-center justify-center group">
                 {/* Isaac Scheer WVU White Kit #21 Photo */}
                 <img 
                  src="/isaac-scheer.png" 
                  alt="Isaac Scheer WVU Soccer #21" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
              </div>
              <div className="absolute -bottom-2 right-4 bg-[#EAAA00] text-[#002855] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                WVU #21
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-brand font-black uppercase tracking-tighter leading-none">
                ISAAC <span className="text-[#EAAA00]">SCHEER</span>
              </h1>
              <p className="text-[#EAAA00] font-bold tracking-[0.3em] uppercase text-sm">Owner & Lead Trainer</p>
            </div>

            <div className="prose prose-invert max-w-none text-xl text-white/80 leading-relaxed font-light text-left">
              <p>
                Originally from Charlotte, NC, my soccer journey began at the age of five. I fell in love with the game instantly, forming a dream to play college soccer. Those dreams eventually brought me home to Morgantown, WV, to play for <span className="text-white font-bold">West Virginia University</span>. I discovered my passion for coaching in 2023, training young athletes back in Charlotte. When I arrived in Morgantown, the community gave me such a warm welcome that I knew I wanted to stay active here. I’ve been coaching locally ever since, helping kids develop their technical skills and find their own lasting love for the game.
              </p>
            </div>
          </div>

          {/* Trainers Section */}
          <div className="w-full pt-16 border-t border-white/5 space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-brand font-black text-[#EAAA00] uppercase tracking-widest">Trainers</h2>
              <p className="text-white text-xs font-bold uppercase tracking-[0.2em]">
                All of our trainers are current West Virginia University Men's Soccer players
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {TRAINERS.map((trainer, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-6 group">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#EAAA00] transition-colors duration-500 shadow-xl">
                    <img 
                      src={trainer.image} 
                      alt={trainer.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">{trainer.name}</h3>
                    <p className="text-[#EAAA00] text-[10px] font-black uppercase tracking-widest">{trainer.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Section at Bottom */}
          <div ref={missionRef} className="pt-24 border-t border-white/5 w-full">
            <div className="space-y-8 max-w-2xl mx-auto">
               <h3 className="text-3xl md:text-5xl font-brand font-black text-[#EAAA00] uppercase tracking-widest">Our Mission</h3>
               <p className="text-xl text-white/70 italic font-light leading-relaxed">
                "Our mission at Mountain State Training is to foster technical mastery and a high-performance mindset in the next generation of athletes. We are dedicated to providing the elite coaching and community support needed for every player to reach their peak, both on and off the soccer pitch."
               </p>
               <div className="pt-8">
                 <button 
                  onClick={onSchedule}
                  className="px-6 py-3.5 bg-[#EAAA00] text-[#002855] font-black text-sm uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl shadow-[#EAAA00]/20 active:scale-95 flex items-center gap-2 mx-auto"
                 >
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                   Schedule Training
                 </button>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OwnerBio;
