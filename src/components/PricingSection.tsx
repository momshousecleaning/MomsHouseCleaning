import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';
import { RealisticCheckCircle2Icon } from './RealisticIcons';

interface PricingSectionProps {
  onOpenEstimate: (serviceType?: string) => void;
  onOpenChecklist: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenEstimate,
  onOpenChecklist,
}) => {
  const { ref, isInView } = useInViewAnimation(0.1);

  return (
    <section
      id="services-pricing-section"
      ref={ref}
      className="w-full py-8 px-4 md:py-24 md:px-12"
    >
      <div className="w-full mx-auto flex flex-col items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Card 1: Dark (Initial Deep Clean) */}
          <div
            id="card-initial-deep-clean"
            style={{ animationDelay: '0.1s' }}
            className={`bg-[#051A24] rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-between text-[#F6FCFF] shadow-sm transition-transform duration-300 md:hover:-translate-y-1 will-change-transform ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <div>
              {/* Header space / indicator */}
              <div className="h-6 mb-3 md:mb-4 flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-xs uppercase tracking-widest text-[#E0EBF0]/70 ml-2 font-mono">
                  Deep Clean
                </span>
              </div>

              {/* Title */}
              <h3
                id="deep-clean-title"
                className="font-heading text-2xl md:text-3xl font-semibold text-[#F6FCFF] tracking-tight mb-2 md:mb-3"
              >
                Initial Deep Clean
              </h3>

              {/* Description: 6-10 words */}
              <p
                id="deep-clean-description"
                className="text-base md:text-lg text-slate-200 leading-relaxed font-normal mb-6 md:mb-8"
              >
                Top-to-bottom detail cleaning for a spotless home.
              </p>
            </div>

            <div>
              {/* Price */}
              <div className="mb-4 md:mb-6 pt-4 border-t border-white/10 flex items-baseline justify-between">
                <div>
                  <span className="block text-xl sm:text-2xl font-medium text-[#F6FCFF] tracking-tight">
                    Custom Quote
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#E0EBF0]/70 uppercase tracking-wider font-mono">
                    One-time Baseline
                  </span>
                </div>
              </div>

              {/* Two buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <Button
                  id="btn-deep-clean-estimate"
                  variant="secondary"
                  size="sm"
                  onClick={() => onOpenEstimate('Initial Cleaning')}
                  className="!bg-white !text-[#051A24] hover:!bg-[#EAF2F6] shadow-md border border-white w-full sm:w-auto text-center justify-center"
                >
                  Get Estimate
                </Button>
                <button
                  id="btn-deep-clean-checklist"
                  type="button"
                  onClick={onOpenChecklist}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold tracking-tight rounded-full transition-all duration-200 cursor-pointer select-none active:scale-[0.98] whitespace-nowrap bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm shadow-sm"
                >
                  <RealisticCheckCircle2Icon className="w-3.5 h-3.5" />
                  <span>See Checklist</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Light (Recurring Maintenance) */}
          <div
            id="card-recurring-maintenance"
            style={{ animationDelay: '0.2s' }}
            className={`bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-between text-[#0D212C] shadow-sm border border-slate-200/80 transition-transform duration-300 md:hover:-translate-y-1 will-change-transform ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <div>
              {/* Header space / indicator */}
              <div className="h-6 mb-3 md:mb-4 flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-xs uppercase tracking-widest text-[#273C46]/70 ml-2 font-mono">
                  Recurring
                </span>
              </div>

              {/* Title */}
              <h3
                id="recurring-title"
                className="font-heading text-2xl md:text-3xl font-semibold text-[#0D212C] tracking-tight mb-2 md:mb-3"
              >
                Recurring Maintenance
              </h3>

              {/* Description: 6-10 words */}
              <p
                id="recurring-description"
                className="text-base md:text-lg text-slate-800 leading-relaxed font-normal mb-6 md:mb-8"
              >
                Regular housekeeping to keep your home consistently fresh.
              </p>
            </div>

            <div>
              {/* Price */}
              <div className="mb-4 md:mb-6 pt-4 border-t border-slate-100 flex items-baseline justify-between">
                <div>
                  <span className="block text-xl sm:text-2xl font-medium text-[#0D212C] tracking-tight">
                    Custom Quote
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#273C46]/70 uppercase tracking-wider font-mono">
                    Ongoing Upkeep
                  </span>
                </div>
              </div>

              {/* Button */}
              <div>
                <Button
                  id="btn-recurring-estimate"
                  variant="tertiary"
                  size="sm"
                  onClick={() => onOpenEstimate('Recurring Maintenance')}
                  className="w-full sm:w-auto text-center justify-center"
                >
                  Get Estimate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
