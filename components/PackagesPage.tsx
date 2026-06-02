
import React from 'react';
import { TRAINING_PACKAGES, PACKAGE_STEPS } from '../constants';

interface PackagesPageProps {
  onBack: () => void;
  onSchedule: () => void;
}

const PackagesPage: React.FC<PackagesPageProps> = ({ onBack, onSchedule }) => {
  return (
    <div className="min-h-screen bg-[#001a38] text-white pt-24 md:pt-32 pb-24 px-4 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EAAA00]/5 blur-[100px] rounded-full -mr-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#EAAA00]/5 blur-[100px] rounded-full -ml-48 -mb-48 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16 relative z-10">
        {/* Header */}
        <div className="space-y-4 text-center">
          <button
            onClick={onBack}
            className="text-[#EAAA00] text-xs font-bold uppercase tracking-[0.3em] hover:tracking-[0.5em] transition-all mb-2 inline-flex items-center gap-2 group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Home
          </button>
          <h1 className="text-5xl md:text-7xl font-brand font-black tracking-tighter leading-none uppercase">
            Training <span className="text-[#EAAA00]">Packages</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Choose a monthly membership built around your goals. Every tier includes secure billing and instant booking access &mdash; pick the path that fits your game.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {TRAINING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative group h-full ${pkg.featured ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Glow */}
              <div
                className={`absolute -inset-1 rounded-3xl blur transition duration-500 ${pkg.featured ? 'opacity-30 group-hover:opacity-50' : 'opacity-0 group-hover:opacity-20'}`}
                style={{ background: `linear-gradient(to right, ${pkg.accent}, ${pkg.accent})` }}
              ></div>

              <div
                className={`relative h-full bg-[#002855] p-6 md:p-8 rounded-3xl shadow-xl flex flex-col hover:-translate-y-2 transition-transform duration-300 ${pkg.featured ? 'border-2' : 'border border-white/10'}`}
                style={pkg.featured ? { borderColor: pkg.accent } : undefined}
              >
                {/* Badge */}
                {pkg.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg text-[#002855]"
                    style={{ backgroundColor: pkg.accent }}
                  >
                    {pkg.badge}
                  </div>
                )}

                <div className="space-y-5 flex-grow">
                  {/* Tier marker */}
                  <div
                    className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full border"
                    style={{ color: pkg.accent, borderColor: `${pkg.accent}40`, backgroundColor: `${pkg.accent}1a` }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: pkg.accent }}></span>
                    {pkg.title}
                  </div>

                  <div className="space-y-1">
                    <h2 className="text-2xl md:text-3xl font-brand font-black uppercase leading-tight">{pkg.title}</h2>
                    <p className="text-white/60 text-sm leading-relaxed">{pkg.subtitle}</p>
                  </div>

                  {/* Price */}
                  <div className="flex items-end gap-1.5 pt-1">
                    <span className="text-4xl md:text-5xl font-brand font-black" style={{ color: pkg.accent }}>{pkg.price}</span>
                    <span className="text-white/50 text-sm font-bold mb-1.5 uppercase tracking-wide">{pkg.period}</span>
                  </div>

                  <div className="h-px bg-white/10"></div>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {pkg.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                        <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: pkg.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="pt-8">
                  <a
                    href={pkg.stripeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center px-6 md:px-8 py-3.5 md:py-4 font-black uppercase tracking-widest rounded-xl transition-all shadow-lg active:scale-95 text-xs md:text-sm ${
                      pkg.featured
                        ? 'text-[#002855] hover:scale-[1.03]'
                        : 'border-2 hover:text-[#002855]'
                    }`}
                    style={
                      pkg.featured
                        ? { backgroundColor: pkg.accent }
                        : { borderColor: pkg.accent, color: pkg.accent }
                    }
                    onMouseEnter={(e) => {
                      if (!pkg.featured) {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = pkg.accent;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!pkg.featured) {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    {pkg.buttonLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-white/5 rounded-3xl border border-white/10 p-6 md:p-10 space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-[#EAAA00] font-black uppercase tracking-widest text-sm">How It Works</h3>
            <h2 className="text-2xl md:text-4xl font-brand font-black uppercase leading-tight">Get Started In Three Steps</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {PACKAGE_STEPS.map((step, index) => (
              <div key={step.title} className="relative bg-[#002855] rounded-2xl border border-white/10 p-6 space-y-3">
                <div className="w-11 h-11 rounded-xl bg-[#EAAA00] text-[#002855] flex items-center justify-center font-brand font-black text-xl">
                  {index + 1}
                </div>
                <h4 className="font-brand font-black uppercase tracking-wide text-lg">{step.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <button
              onClick={onSchedule}
              className="px-8 py-4 bg-[#EAAA00] text-[#002855] font-black uppercase tracking-widest rounded-xl hover:bg-white hover:scale-[1.03] transition-all shadow-lg active:scale-95 text-sm"
            >
              Go to Booking Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;
