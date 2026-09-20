import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface HeroSectionProps {
  onOpenEstimate: () => void;
  onScrollToServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEstimate,
  onScrollToServices,
}) => {
  const { ref, isInView } = useInViewAnimation(0.05);

  return (
    <section
      id="hero-section"
      ref={ref}
      className="relative w-full min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 md:px-12 py-10 md:py-16"
    >
      {/* Video & Contrast Shield Overlay Layers (Z-INDEX 0) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full transform scale-105"
        >
          <source
            src="https://res.cloudinary.com/jbblynim/video/upload/v1785270109/Timeline_1_dghfjn.mp4"
            type="video/mp4"
          />
        </video>

        {/* The Contrast Shield: 65% black overlay to guarantee 100% text legibility */}
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      {/* Typography & Interactive Content (Z-INDEX 10) */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto w-full my-auto">
        {/* Brand Name (Decorative Display) */}
        <div
          id="hero-logo"
          style={{ animationDelay: '0.1s' }}
          className={`font-heading text-[10vw] sm:text-[7vw] md:text-[52px] lg:text-[60px] font-semibold text-white tracking-tight leading-none mb-2 md:mb-3 will-change-transform ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Mom's House Cleaning
        </div>

        {/* Tagline */}
        <p
          id="hero-tagline"
          style={{ animationDelay: '0.2s' }}
          className={`font-mono text-xs md:text-sm text-[#F6FCFF]/90 font-medium tracking-wider mb-3 md:mb-4 uppercase will-change-transform ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          San Antonio Area House Cleaning Service • Family Owned Since 1999
        </p>

        {/* Primary Semantic H1 for Homepage SEO */}
        <h1
          id="hero-main-title"
          style={{ animationDelay: '0.3s' }}
          className={`font-heading text-2xl sm:text-3xl md:text-[38px] lg:text-[44px] leading-[1.2] md:leading-[1.15] text-white font-bold tracking-tight max-w-3xl mb-3 will-change-transform ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Top-Rated House Cleaning & Maid Services in San Antonio, TX
        </h1>

        {/* Description Paragraph */}
        <div
          id="hero-description"
          style={{ animationDelay: '0.4s' }}
          className={`text-base sm:text-lg md:text-xl text-slate-100 leading-relaxed mt-2 md:mt-3 text-center font-normal max-w-2xl will-change-transform ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <p id="hero-desc-1">
            Deep cleaning, recurring housekeeping, make-readys, lawn care & carpet cleaning across San Antonio since 1999.
          </p>
        </div>

        {/* Two Action Buttons */}
        <div
          id="hero-actions"
          style={{ animationDelay: '0.5s' }}
          className={`flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8 w-full justify-center will-change-transform ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <button
            id="hero-btn-estimate"
            onClick={onOpenEstimate}
            className="w-full sm:w-auto bg-white text-[#051A24] rounded-full px-4 py-2.5 text-sm md:px-8 md:py-4 md:text-xl font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform cursor-pointer select-none whitespace-nowrap text-center active:scale-[0.98]"
          >
            Get a Free Estimate
          </button>
          <button
            id="hero-btn-services"
            onClick={onScrollToServices}
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full px-4 py-2.5 text-sm md:px-8 md:py-4 md:text-xl font-semibold hover:bg-white/20 transition-all cursor-pointer select-none whitespace-nowrap text-center active:scale-[0.98]"
          >
            View Our Services
          </button>
        </div>

        {/* Direct Accessible Phone / Text link */}
        <div
          id="hero-phone-container"
          style={{ animationDelay: '0.6s' }}
          className={`mt-5 flex items-center justify-center gap-2 text-sm text-slate-200 will-change-transform ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <span className="font-light">Call or Text Us:</span>
          <a
            id="hero-phone-link"
            href="tel:+12103808066"
            className="font-mono font-semibold text-white underline underline-offset-4 hover:text-blue-200 transition-colors"
          >
            (210) 380-8066
          </a>
        </div>
      </div>
    </section>
  );
};

