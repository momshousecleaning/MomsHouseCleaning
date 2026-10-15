import React from 'react';
import { RealisticSparklesIcon, RealisticTrophyIcon } from './RealisticIcons';

interface NextdoorAwardBannerProps {
  onOpenEstimate?: (serviceTitle?: string) => void;
  className?: string;
}

export const NextdoorAwardBanner: React.FC<NextdoorAwardBannerProps> = ({
  onOpenEstimate,
  className = '',
}) => {
  return (
    <div className={`max-w-6xl mx-auto my-8 px-4 overflow-visible ${className}`}>
      {/* Main card container with relative and overflow-visible positioning */}
      <div className="relative overflow-visible bg-[#072618] border border-[#1B8751]/40 rounded-2xl p-6 md:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Column (Image Asset + Tilted Sticker Overlay) */}
        <div className="relative overflow-visible w-full md:w-5/12 flex justify-center items-center">
          <div className="relative overflow-visible group">
            {/* TASK 1 & 2: TILTED STICKER OVERLAY */}
            <div className="absolute -top-3.5 -left-3.5 sm:-top-4 sm:-left-4 z-20 transform -rotate-6 hover:rotate-0 transition-transform duration-300 drop-shadow-xl cursor-pointer pointer-events-auto select-none">
              <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-950 via-[#0a3821] to-[#072618] border-2 border-amber-400/90 rounded-2xl px-3 py-1.5 sm:px-3.5 sm:py-2 shadow-2xl backdrop-blur-md ring-2 ring-emerald-500/20">
                <RealisticTrophyIcon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 filter drop-shadow" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-amber-300 font-extrabold leading-tight">
                    2026 FAVE
                  </span>
                  <span className="text-[9px] font-mono text-emerald-200 tracking-tight leading-tight">
                    Nextdoor Winner
                  </span>
                </div>
              </div>
            </div>

            <img
              src="/nextdoor-fave-2026.jpg"
              alt="2026 Nextdoor Fave Awards Winner - Voted by neighbors on Nextdoor"
              className="w-full max-w-[420px] rounded-xl object-cover shadow-md border border-white/10 block"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Column (Copy & CTA) */}
        <div className="w-full md:w-7/12 flex flex-col items-start text-left">
          {/* Pill Badge */}
          <span className="bg-[#1B8751]/30 text-emerald-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 inline-block border border-[#1B8751]/40">
            10th Annual Local Business Awards
          </span>

          {/* Heading */}
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-white tracking-tight mb-3">
            Voted a 2026 Nextdoor Fave Winner
          </h2>

          {/* Description */}
          <p className="font-body text-slate-200 text-sm md:text-base leading-relaxed mb-6">
            Mom's House Cleaning has been recognized by our neighbors across San Antonio as a trusted 2026 Nextdoor Neighborhood Fave! Thank you for welcoming us into your homes since 1999. We continue to deliver top-rated residential cleaning, recurring maintenance, and move-in/move-out services tailored to your family's needs.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onOpenEstimate?.('Initial Cleaning')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1B8751] hover:bg-[#156d41] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-lg hover:shadow-emerald-900/40 cursor-pointer active:scale-95"
            >
              <span>Get Your Free Estimate</span>
              <RealisticSparklesIcon className="w-4 h-4 text-emerald-200" />
            </button>

            <a
              href="https://nextdoor.com/fave_awards_winners"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-300 hover:text-emerald-100 underline underline-offset-4 transition-colors"
            >
              <span>Verify on Nextdoor</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
