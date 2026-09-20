import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { RealisticSparklesIcon } from './RealisticIcons';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: 'faq-service-areas',
    question: 'What areas in Texas do you service?',
    answer: "Mom's House Cleaning proudly services residential homes across San Antonio, Bexar County, and surrounding nearby Texas communities.",
  },
  {
    id: 'faq-licensed-insured',
    question: 'Are your house cleaning services licensed and insured?',
    answer: "Yes, Mom's House Cleaning is fully licensed, bonded, and insured for complete client protection, and officially registered with Bexar County.",
  },
  {
    id: 'faq-move-out',
    question: 'Do you offer move-out and make-ready cleaning?',
    answer: 'Yes, we specialize in comprehensive move-in/move-out cleans, apartment turnovers, and deep make-readies.',
  },
  {
    id: 'faq-payment-methods',
    question: 'What payment methods do you accept?',
    answer: 'We accept PayPal, Zelle, Venmo, CashApp, cash, and major credit cards.',
  },
];

interface FaqSectionProps {
  onOpenEstimate?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenEstimate }) => {
  const { ref, isInView } = useInViewAnimation(0.1);
  // Default first item open for instant engagement and scannability
  const [openId, setOpenId] = useState<string | null>('faq-service-areas');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq-section"
      ref={ref}
      className={`w-full max-w-4xl px-4 sm:px-6 md:px-8 mx-auto py-12 md:py-16 select-none ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      aria-labelledby="faq-main-heading"
    >
      {/* Header Tag / Badge */}
      <div className="flex flex-col items-center text-center mb-8 md:mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 mb-3">
          <RealisticSparklesIcon className="w-4 h-4" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#051A24]/70 font-semibold">
            Common Inquiries
          </span>
        </div>

        <h2
          id="faq-main-heading"
          className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0D212C] tracking-tight mb-3"
        >
          Frequently Asked Questions
        </h2>

        <p className="text-sm sm:text-base text-[#273C46] max-w-xl font-normal leading-relaxed">
          Everything you need to know about our residential housekeeping, maid services, and scheduling in San Antonio.
        </p>
      </div>

      {/* Accordion Container */}
      <div className="space-y-3 sm:space-y-4" id="faq-accordion-list">
        {FAQS.map((faq, index) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              id={`faq-item-container-${faq.id}`}
              className={`rounded-2xl transition-all duration-300 border ${
                isOpen
                  ? 'bg-slate-50/90 border-[#051A24]/20 shadow-sm'
                  : 'bg-white border-slate-200/80 hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                id={`faq-btn-${faq.id}`}
                onClick={() => toggleItem(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer gap-4 group"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-semibold shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#051A24] text-white'
                        : 'bg-slate-100 text-[#051A24]/70 group-hover:bg-slate-200'
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <span className="font-heading text-base sm:text-lg font-semibold text-[#0D212C] tracking-tight">
                    {faq.question}
                  </span>
                </div>

                <div
                  className={`p-1.5 rounded-full transition-transform duration-300 shrink-0 ${
                    isOpen
                      ? 'rotate-180 bg-[#051A24] text-white'
                      : 'bg-slate-100 text-[#051A24]/70 group-hover:bg-slate-200'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Collapsible Answer */}
              <div
                id={`faq-answer-${faq.id}`}
                role="region"
                aria-labelledby={`faq-btn-${faq.id}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-0 pl-14 sm:pl-16">
                  <p className="text-sm sm:text-base text-[#273C46] leading-relaxed font-normal">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Helpful Direct Support Banner */}
      <div
        id="faq-help-card"
        className="mt-8 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50/40 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#051A24] text-white flex items-center justify-center shrink-0 shadow-sm">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="font-heading font-semibold text-sm sm:text-base text-[#0D212C]">
              Have a specific question or custom schedule?
            </p>
            <p className="text-xs sm:text-sm text-[#273C46]">
              Call or text Lisa & Glen directly at{' '}
              <a
                href="tel:+12103808066"
                className="font-semibold text-[#051A24] underline underline-offset-4 hover:text-blue-700 font-mono"
              >
                (210) 380-8066
              </a>
            </p>
          </div>
        </div>

        {onOpenEstimate && (
          <button
            type="button"
            id="faq-get-estimate-btn"
            onClick={onOpenEstimate}
            className="shrink-0 bg-[#051A24] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#0c2e3f] transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            Get Free Estimate
          </button>
        )}
      </div>
    </section>
  );
};
