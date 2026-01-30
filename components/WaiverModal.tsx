
import React from 'react';
import { LIABILITY_WAIVER_TEXT } from '../constants';

interface WaiverModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaiverModal: React.FC<WaiverModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-[#001025]/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative bg-[#002855] w-full max-w-2xl max-h-[80vh] rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in duration-300">
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <h2 className="text-2xl font-brand font-black text-white uppercase tracking-tight">Liability Waiver</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/5 rounded-full text-white/40 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        
        <div className="p-8 overflow-y-auto text-white/70 text-sm leading-relaxed whitespace-pre-wrap font-light">
          {LIABILITY_WAIVER_TEXT}
        </div>

        <div className="p-6 border-t border-white/5 bg-[#001a38]">
          <button 
            onClick={onClose}
            className="w-full py-4 bg-[#EAAA00] text-[#002855] font-black uppercase tracking-widest rounded-xl hover:scale-[1.02] transition-all"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaiverModal;
