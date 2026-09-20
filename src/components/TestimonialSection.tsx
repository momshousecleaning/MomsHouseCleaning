import React, { useEffect, useRef, useState } from 'react';
import { RealisticQuoteIcon } from './RealisticIcons';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export const TestimonialSection: React.FC = () => {
  const { ref: containerRef, isInView } = useInViewAnimation(0.1);
  const parallaxRef = useRef<HTMLDivElement | null>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      if (!parallaxRef.current) {
        ticking = false;
        return;
      }
      const rect = parallaxRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress of element relative to viewport (-1 to 1)
      if (rect.top < windowHeight && rect.bottom > 0) {
        const centerY = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const relativePosition = (centerY - viewportCenter) / (windowHeight / 2);
        
        // Calculate offset with max 200px limit
        const offset = Math.max(-200, Math.min(200, relativePosition * 60));
        setParallaxOffset(offset);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section
      id="testimonial-quote-section"
      ref={containerRef}
      className="w-full py-8 px-4 md:py-24 md:px-12 flex flex-col items-center justify-center text-center"
    >
      <div className="w-full max-w-4xl px-2 sm:px-6 md:px-12 flex flex-col items-center">
        {/* Quote Icon */}
        <div
          id="quote-icon"
          style={{ animationDelay: '0.1s' }}
          className={`mb-4 md:mb-6 will-change-transform ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <RealisticQuoteIcon className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
        </div>

        {/* Large Quote Text */}
        <blockquote
          id="quote-text"
          style={{ animationDelay: '0.2s' }}
          className={`text-2xl sm:text-3xl md:text-[40px] lg:text-[44px] leading-[1.2] md:leading-[1.1] text-[#0D212C] tracking-tight font-normal mb-3 md:mb-4 will-change-transform ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <span className="font-heading font-semibold not-italic">INTEGRITY!</span>{' '}
          It remains the foundation of all success and wholeness.
        </blockquote>

        {/* Author */}
        <p
          id="quote-author"
          style={{ animationDelay: '0.3s' }}
          className={`italic text-xs sm:text-sm text-[#273C46] font-normal mb-8 md:mb-10 will-change-transform ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Mom's House Cleaning Guarantee
        </p>

        {/* Trust Badges - Company Logo Names displayed as text */}
        <div
          id="trust-badges"
          style={{ animationDelay: '0.4s' }}
          className={`flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-10 mb-8 md:mb-12 will-change-transform ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div
            id="badge-angies-list"
            className="text-lg sm:text-[22px] md:text-[24px] font-medium text-slate-900 tracking-tighter leading-none border-b border-slate-300 pb-1"
          >
            Angie's List
          </div>
          <div
            id="badge-home-advisor"
            className="text-lg sm:text-[22px] md:text-[24px] font-medium text-slate-900 tracking-tighter leading-none border-b border-slate-300 pb-1"
          >
            Home Advisor
          </div>
          <div
            id="badge-bexar-county"
            className="text-lg sm:text-[22px] md:text-[24px] font-medium text-slate-900 tracking-tighter leading-none border-b border-slate-300 pb-1"
          >
            Bexar County DBA
          </div>
        </div>

        {/* Parallax Image */}
        <div
          ref={parallaxRef}
          id="parallax-image-container"
          style={{ animationDelay: '0.5s' }}
          className={`w-full max-w-xs overflow-hidden rounded-2xl md:rounded-3xl shadow-lg relative h-[320px] sm:h-[380px] md:h-[440px] will-change-transform ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <img
            id="parallax-image"
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
            alt="Sunlit spotless residential home interior cleaned by Mom's House Cleaning in San Antonio"
            loading="lazy"
            referrerPolicy="no-referrer"
            style={{
              transform: `translate3d(0, ${parallaxOffset}px, 0) scale(1.15)`,
              transition: 'transform 0.1s cubic-bezier(0.2, 0, 0, 1)',
            }}
            className="w-full h-full object-cover rounded-2xl will-change-transform"
          />
        </div>
      </div>
    </section>
  );
};
