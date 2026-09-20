import React from 'react';
import { RealisticHeartHandshakeIcon, RealisticShieldCheckIcon } from './RealisticIcons';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';

interface GuaranteeDiscountSectionProps {
  onOpenEstimate: (service?: string) => void;
}

export const GuaranteeDiscountSection: React.FC<GuaranteeDiscountSectionProps> = ({
  onOpenEstimate,
}) => {
  const { ref, isInView } = useInViewAnimation(0.1);

  return (
    <section
      id="guarantee-discount-section"
      ref={ref}
      className="w-full py-8 px-4 md:py-24 md:px-12"
    >
      <div className="w-full mx-auto flex flex-col items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Card 1: Dark (#051A24 bg) - Our Guarantee */}
          <div
            id="card-our-guarantee"
            style={{ animationDelay: '0.1s' }}
            className={`bg-[#051A24] rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-between text-[#F6FCFF] shadow-sm transition-transform duration-300 md:hover:-translate-y-1 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <div>
              {/* Header Badge */}
              <div className="h-6 mb-3 md:mb-4 flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-xs uppercase tracking-widest text-[#E0EBF0]/70 ml-2 font-mono flex items-center gap-1.5">
                  <RealisticShieldCheckIcon className="w-4 h-4" />
                  Satisfaction Assured
                </span>
              </div>

              {/* Title */}
              <h2
                id="guarantee-card-title"
                className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-[#F6FCFF] tracking-tight mb-2 md:mb-4"
              >
                Our Guarantee
              </h2>

              {/* Description: 6-10 words */}
              <p
                id="guarantee-card-text"
                className="text-base md:text-lg text-slate-200 leading-relaxed mb-4 md:mb-6 font-normal"
              >
                We promptly re-clean anything missed within a 24-hour notice.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#E0EBF0]/70">
                24-Hour Redo Policy
              </span>
              <Button
                id="btn-guarantee-estimate"
                variant="primary"
                size="sm"
                onClick={() => onOpenEstimate('Guarantee Assurance')}
                className="bg-white !text-[#051A24] hover:!bg-[#F6FCFF] shadow-md border-t-0 w-full sm:w-auto text-center justify-center"
              >
                Get Protected Clean
              </Button>
            </div>
          </div>

          {/* Card 2: Light (white bg) - Special Discount! */}
          <div
            id="card-special-discount"
            style={{ animationDelay: '0.2s' }}
            className={`bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-between text-[#0D212C] shadow-sm border border-slate-200/80 transition-transform duration-300 md:hover:-translate-y-1 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <div>
              {/* Header Badge */}
              <div className="h-6 mb-3 md:mb-4 flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-amber-500"></span>
                <span className="text-xs uppercase tracking-widest text-[#273C46]/70 ml-2 font-mono flex items-center gap-1.5">
                  <RealisticHeartHandshakeIcon className="w-4 h-4" />
                  Community Appreciation
                </span>
              </div>

              {/* Title */}
              <h2
                id="discount-card-title"
                className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-[#0D212C] tracking-tight mb-2 md:mb-4"
              >
                Special Discount!
              </h2>

              {/* Description: 6-10 words */}
              <p
                id="discount-card-text"
                className="text-base md:text-lg text-slate-800 leading-relaxed mb-4 md:mb-6 font-normal"
              >
                Special discounts for military, first responders, and senior citizens.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-600">
                Honoring Heroes & Seniors
              </span>
              <Button
                id="btn-claim-discount"
                variant="tertiary"
                size="sm"
                onClick={() => onOpenEstimate('Hero / Senior Discount')}
                className="w-full sm:w-auto text-center justify-center"
              >
                Claim Discount
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
