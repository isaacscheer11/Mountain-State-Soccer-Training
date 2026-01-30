
import React from 'react';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#001a38] text-white pt-32 pb-24 px-4 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-4 text-center">
          <button 
            onClick={onBack}
            className="text-[#EAAA00] text-xs font-bold uppercase tracking-[0.3em] hover:tracking-[0.5em] transition-all mb-4 inline-flex items-center gap-2 group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Home
          </button>
          <h1 className="text-5xl md:text-7xl font-brand font-black tracking-tight leading-none uppercase">
            CONTACT <span className="text-[#EAAA00]">US</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Have questions about our training programs or seasonal clinics? Reach out to us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Email Card */}
          <a 
            href="mailto:train@mountainstate.com"
            className="group relative overflow-hidden bg-[#002855] border border-white/10 p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(234,170,0,0.2)]"
          >
            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#EAAA00] flex items-center justify-center text-[#002855] group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-black uppercase tracking-widest text-[#EAAA00]">Email Us</h3>
                <p className="text-xl font-bold break-all">train@mountainstate.com</p>
              </div>
            </div>
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#EAAA00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          {/* Phone Card */}
          <a 
            href="tel:704-635-9538"
            className="group relative overflow-hidden bg-[#002855] border border-white/10 p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(234,170,0,0.2)]"
          >
            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#EAAA00] flex items-center justify-center text-[#002855] group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-black uppercase tracking-widest text-[#EAAA00]">Call/Text Us</h3>
                <p className="text-2xl font-bold">704-635-9538</p>
              </div>
            </div>
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#EAAA00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </div>

        <div className="max-w-xl mx-auto bg-[#002855]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 text-center">
          <p className="text-white/60 leading-relaxed italic">
            "We typically respond to all inquiries within 24 hours. Whether you're interested in 1-on-1 sessions or want to bring a youth clinic to your local field, we'd love to hear from you."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
