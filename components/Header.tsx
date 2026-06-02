
import React from 'react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';
import { View } from '../App';

interface HeaderProps {
  scrolled: boolean;
  setView: (view: View) => void;
  currentView: View;
}

const Header: React.FC<HeaderProps> = ({ scrolled, setView, currentView }) => {
  const getIcon = (label: string) => {
    switch (label) {
      case 'Home':
        return <svg className="w-5 h-5 mb-1 group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>;
      case 'Schedule Training':
        return <svg className="w-5 h-5 mb-1 group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>;
      case 'Training Packages':
        return <svg className="w-5 h-5 mb-1 group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>;
      case 'Contact Us':
        return <svg className="w-5 h-5 mb-1 group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>;
      case 'About Us':
        return <svg className="w-5 h-5 mb-1 group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>;
      default:
        return null;
    }
  };

  const handleNavClick = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (label === 'Schedule Training') {
      setView('schedule');
    } else if (label === 'Training Packages') {
      setView('packages');
    } else if (label === 'Home') {
      setView('home');
    } else if (label === 'About Us') {
      setView('about');
    } else if (label === 'Contact Us') {
      setView('contact');
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled || currentView !== 'home' ? 'bg-[#002855]/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Social Icons - Left */}
        <div className="hidden lg:flex items-center gap-4">
          {SOCIAL_LINKS.map((social) => (
            <a 
              key={social.name}
              href={social.url} 
              className="text-white hover:text-[#EAAA00] transition-all duration-300 hover:scale-125 transform"
              title={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* LOGO */}
        <button onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-4 group cursor-pointer outline-none text-left">
          <div className="relative w-16 h-16 transition-transform duration-500 group-hover:scale-110">
            <img
              src="/mst-logo.png"
              alt="Mountain State Training logo"
              className="w-full h-full object-contain drop-shadow-[0_8px_15px_rgba(0,0,0,0.6)]"
            />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-2xl font-brand font-black tracking-tighter text-white group-hover:text-[#EAAA00] transition-colors duration-300 drop-shadow-lg uppercase">
              Mountain State
            </span>
            <div className="flex items-center">
              <span className="text-[11px] font-bold text-[#EAAA00] tracking-[0.45em] uppercase opacity-95 group-hover:tracking-[0.65em] transition-all duration-500">
                Training
              </span>
            </div>
          </div>
        </button>

        {/* Navigation Links */}
        <nav className="flex items-center gap-4 md:gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.label)}
              className={`flex flex-col items-center text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors relative group py-1 ${
                (link.label === 'Home' && currentView === 'home') ||
                (link.label === 'About Us' && currentView === 'about') ||
                (link.label === 'Schedule Training' && currentView === 'schedule') ||
                (link.label === 'Training Packages' && currentView === 'packages') ||
                (link.label === 'Contact Us' && currentView === 'contact')
                ? 'text-[#EAAA00]' : 'text-white/90 hover:text-[#EAAA00]'
              }`}
            >
              {getIcon(link.label)}
              <span className="hidden md:block mt-1">{link.label}</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#EAAA00] transition-all duration-300 group-hover:w-full ${
                (link.label === 'Home' && currentView === 'home') ||
                (link.label === 'About Us' && currentView === 'about') ||
                (link.label === 'Schedule Training' && currentView === 'schedule') ||
                (link.label === 'Training Packages' && currentView === 'packages') ||
                (link.label === 'Contact Us' && currentView === 'contact')
                ? 'w-full' : 'w-0'
              }`}></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
