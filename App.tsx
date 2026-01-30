
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProgramSection from './components/ProgramSection';
import ContactSection from './components/ContactSection';
import SchedulePage from './components/SchedulePage';
import ContactPage from './components/ContactPage';
import ClinicsPage from './components/ClinicsPage';
import WaiverModal from './components/WaiverModal';
import OwnerBio from './components/OwnerBio';

export type View = 'home' | 'schedule' | 'about' | 'contact' | 'clinics';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<View>('home');
  const [isWaiverOpen, setIsWaiverOpen] = useState(false);
  const [scrollToMission, setScrollToMission] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll logic
  useEffect(() => {
    if (view !== 'about') {
      window.scrollTo(0, 0);
    }
  }, [view]);

  const handleNavigateToAbout = (targetMission?: boolean) => {
    setScrollToMission(!!targetMission);
    setView('about');
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#EAAA00] selection:text-[#002855]">
      {/* Dynamic Header */}
      <Header scrolled={scrolled} setView={setView} currentView={view} />

      <main className="flex-grow pt-16 md:pt-0">
        {view === 'home' && (
          <div className="animate-in fade-in duration-700">
            {/* Hero Section */}
            <Hero onScheduleClick={() => setView('schedule')} />

            {/* Programs Section */}
            <ProgramSection onScheduleClick={() => setView('schedule')} />

            {/* Home Page About Section */}
            <div id="about">
              <AboutSection 
                onOwnerClick={() => handleNavigateToAbout(false)} 
                onMissionClick={() => handleNavigateToAbout(true)}
              />
            </div>
          </div>
        )}

        {view === 'schedule' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SchedulePage 
              onBack={() => setView('home')} 
              onShowWaiver={() => setIsWaiverOpen(true)}
              onViewClinics={() => setView('clinics')}
            />
          </div>
        )}

        {view === 'about' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <OwnerBio 
              onBack={() => setView('home')} 
              onSchedule={() => setView('schedule')}
              initialScrollToMission={scrollToMission} 
            />
          </div>
        )}

        {view === 'contact' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <ContactPage onBack={() => setView('home')} />
          </div>
        )}

        {view === 'clinics' && (
          <div className="animate-in fade-in zoom-in duration-500">
            <ClinicsPage onBack={() => setView('home')} onBook={() => setView('contact')} />
          </div>
        )}
      </main>

      {/* Contact / Footer */}
      <div id="contact">
        <ContactSection onNavigate={(v: View) => setView(v)} onShowWaiver={() => setIsWaiverOpen(true)} />
      </div>

      {/* Global Waiver Modal */}
      <WaiverModal isOpen={isWaiverOpen} onClose={() => setIsWaiverOpen(false)} />

      {/* Floating Action Button for Mobile */}
      {view === 'home' && (
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
          <button 
            onClick={() => setView('schedule')}
            className="bg-[#EAAA00] text-[#002855] p-4 rounded-full shadow-2xl active:scale-95 transition-transform flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
