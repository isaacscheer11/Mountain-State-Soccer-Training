
import React from 'react';
import { SOCIAL_LINKS, NAV_LINKS } from '../constants';
import { View } from '../App';

interface ContactSectionProps {
  onNavigate: (view: View) => void;
  onShowWaiver?: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate, onShowWaiver }) => {
  const handleNav = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    if (label === 'Schedule Training') {
      onNavigate('schedule');
    } else if (label === 'Home') {
      onNavigate('home');
    } else if (label === 'About Us') {
      onNavigate('about');
    } else if (label === 'Contact Us') {
      onNavigate('contact');
    }
  };

  const getFooterIcon = (label: string) => {
    switch (label) {
      case 'Home':
        return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>;
      case 'Schedule Training':
        return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>;
      case 'About Us':
        return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>;
      case 'Contact Us':
        return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[#001025] text-white pt-24 pb-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-8">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-4 group cursor-pointer transition-transform duration-500 hover:scale-110 origin-left focus:outline-none"
            >
              <div className="relative w-12 h-12">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                  <defs>
                    <linearGradient id="goldGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#FFF000', stopOpacity: 1 }} />
                      <stop offset="50%" style={{ stopColor: '#EAAA00', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#8B6B00', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M10 30 L50 15 L90 30 V60 C90 85 50 95 50 95 C50 95 10 85 10 60 Z" 
                    fill="none" 
                    stroke="#EAAA00" 
                    strokeWidth="2.5" 
                    className="opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <g 
                    fill="url(#goldGradientFooter)" 
                    stroke="#001025" 
                    strokeWidth="2.5" 
                    paintOrder="stroke"
                    className="transition-all duration-300 group-hover:fill-white"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}
                  >
                    <text x="33" y="46" fontSize="36" textAnchor="middle" dominantBaseline="middle">M</text>
                    <text x="67" y="46" fontSize="36" textAnchor="middle" dominantBaseline="middle">S</text>
                    <text x="50" y="74" fontSize="36" textAnchor="middle" dominantBaseline="middle">T</text>
                  </g>
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl font-brand font-black tracking-tighter uppercase group-hover:text-[#EAAA00] transition-colors">MOUNTAIN STATE</span>
                <span className="text-[10px] text-[#EAAA00] font-bold tracking-[0.3em] uppercase">Training</span>
              </div>
            </button>
            <p className="text-white/60 text-sm leading-relaxed">
              Professional athletic development based in West Virginia. Building the next generation of champions through skill, technical mastery, and creative play.
            </p>
            <div className="flex gap-4">
               {SOCIAL_LINKS.map(s => (
                 <a 
                    key={s.name} 
                    href={s.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#EAAA00] hover:text-[#002855] transition-all duration-300 hover:scale-110"
                 >
                    {s.icon}
                 </a>
               ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-[#EAAA00] font-bold uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleNav(e, link.label)}
                    className="text-white hover:text-[#EAAA00] transition-colors flex items-center gap-2 group"
                  >
                    <div className="text-[#EAAA00]/40 group-hover:text-[#EAAA00] transition-colors group-hover:scale-110">
                      {getFooterIcon(link.label)}
                    </div>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button 
                  onClick={onShowWaiver}
                  className="text-white/60 hover:text-[#EAAA00] transition-colors flex items-center gap-2 group text-sm"
                >
                  <div className="text-white/20 group-hover:text-[#EAAA00] transition-colors group-hover:scale-110">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  </div>
                  Liability Waiver
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-[#EAAA00] font-bold uppercase tracking-widest text-sm">Connect</h4>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <svg className="w-6 h-6 text-[#EAAA00] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="text-white/80 text-sm">Morgantown, WV</span>
              </li>
              <li>
                <a 
                  href="mailto:train@mountainstatetraining.com"
                  className="flex gap-4 items-start text-left group hover:text-[#EAAA00] transition-all"
                >
                  <svg className="w-6 h-6 text-[#EAAA00] shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <span className="text-white/80 text-sm group-hover:text-[#EAAA00]">train@mountainstatetraining.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:704-635-9538"
                  className="flex gap-4 items-start text-left group hover:text-[#EAAA00] transition-all"
                >
                  <svg className="w-6 h-6 text-[#EAAA00] shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <span className="text-white/80 text-sm group-hover:text-[#EAAA00]">704-635-9538</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-[#EAAA00] font-bold uppercase tracking-widest text-sm">Updates</h4>
            <p className="text-white/60 text-xs">Stay updated on clinics, camps, and sessions.</p>
            <div className="flex">
               <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:border-[#EAAA00] transition-colors w-full text-white"
               />
               <button className="bg-[#EAAA00] text-[#002855] px-4 py-2 rounded-r-lg font-bold hover:bg-[#ffcc00] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
               </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center text-white text-xs flex flex-col md:flex-row justify-between items-center gap-4 opacity-40">
          <p>© 2026 MOUNTAIN STATE TRAINING. ALL RIGHTS RESERVED.</p>
          <p>BUILDING THE NEXT GENERATION IN WEST VIRGINIA.</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
