import React from 'react';
import { RealisticPhoneCallIcon } from './RealisticIcons';

interface BottomNavProps {
  onCallOrText?: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = () => {
  return (
    <a
      id="btn-nav-call-or-text"
      href="tel:+12103808066"
      className="fixed bottom-4 right-4 z-50 shadow-2xl flex items-center gap-2 bg-slate-900/90 text-white border border-slate-700/60 backdrop-blur-md px-4 py-2.5 rounded-full text-xs font-semibold hover:scale-105 transition-all duration-200 pointer-events-auto select-none whitespace-nowrap active:scale-95"
    >
      <RealisticPhoneCallIcon className="w-4 h-4 text-emerald-400" />
      <span>Call or Text Us</span>
    </a>
  );
};
