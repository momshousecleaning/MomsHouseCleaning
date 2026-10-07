import React from 'react';
import { RealisticXIcon, RealisticCheckCircle2Icon, RealisticShieldCheckIcon } from './RealisticIcons';
import { Button } from './Button';

interface ChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEstimate: () => void;
}

const CHECKLIST_CATEGORIES = [
  {
    title: 'Kitchen & Dining Area',
    items: [
      'Stovetop, burners, and range hood grease degreasing',
      'Exterior & top of refrigerator, oven, and dishwasher',
      'Interior and exterior microwave sanitization',
      'Countertop detail cleaning and backsplash descaling',
      'Sinks scrubbed, sanitized, and chrome fixtures polished',
      'Cabinet exteriors washed and knobs polished',
      'Trash emptied and trash can sanitized',
      'Floors vacuumed and thoroughly wet mopped',
    ],
  },
  {
    title: 'Bathrooms (Complete Sanitization)',
    items: [
      'Tile grout, showers, and bathtubs deep scrubbed for hard water',
      'Toilets sanitized thoroughly inside, behind base, and exterior',
      'Vanity countertops, sinks, and mirrors streak-free polished',
      'Exhaust fan vents dusted and cleared',
      'Cabinet fronts and under-sink exterior wiped down',
      'Chrome fixtures descaled and shined',
      'Floors hand-washed and sanitized',
    ],
  },
  {
    title: 'Living Rooms & Bedrooms',
    items: [
      'Ceiling fans and light fixtures hand-wiped',
      'Baseboards, crown molding, and door frames hand-dusted',
      'Window sills, blinds, and tracks dusted and detailed',
      'All accessible furniture surfaces and electronics dusted',
      'Beds made with neat hospital corners (fresh linens if left out)',
      'HEPA-filter deep vacuuming of carpets, rugs, and stairs',
      'Hardwood and tile floors detailed and mopped',
    ],
  },
  {
    title: 'Deep Clean Exclusive Details',
    items: [
      'Inside oven cleaning (available upon request)',
      'Inside refrigerator deep scrub (available upon request)',
      'Interior window glass and slider tracks',
      'Switch plates, outlet covers, and door handles sanitized',
      'Pet hair eradication with specialized rubber brushes',
    ],
  },
];

export const ChecklistModal: React.FC<ChecklistModalProps> = ({
  isOpen,
  onClose,
  onOpenEstimate,
}) => {
  // TASK 2: REACT TAILWIND BODY LOCK
  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  // Escape key listener
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    // 1. THE ISOLATED WRAPPER (Blocks everything else)
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 isolate"
      role="dialog"
      aria-modal="true"
      data-lenis-prevent="true"
    >
      {/* 2. THE BACKDROP (Clicking this closes the modal) */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />

      {/* 3. THE CONTAINER (Fixed height, completely hides overflow) */}
      <div
        className="relative z-10 w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        data-lenis-prevent="true"
      >
        {/* 4. THE HEADER (Fixed at the top) */}
        <div className="flex justify-between items-center p-5 border-b border-gray-200 bg-white shrink-0">
          <div>
            <div className="flex items-center gap-1.5 mb-0.5 text-[11px] uppercase font-mono tracking-widest text-emerald-700 font-semibold">
              <RealisticShieldCheckIcon className="w-4 h-4" />
              <span>Mom's 50-Point Standard</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-slate-900 leading-tight">
              Initial Deep Clean Master Checklist
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-3xl text-slate-400 hover:text-red-500 leading-none cursor-pointer p-1"
            aria-label="Close checklist"
          >
            &times;
          </button>
        </div>

        {/* 5. THE SCROLLABLE BODY (The Magic Fix - CRITICAL: overscroll-contain) */}
        <div className="p-5 md:p-8 overflow-y-auto overscroll-contain flex-1">
          <p className="text-xs sm:text-sm text-[#273C46] mb-6 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
            Our systematic process leaves no corner untouched in your San Antonio home.
          </p>

          <div className="space-y-5">
            {CHECKLIST_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/60">
                <h4 className="font-heading text-base font-bold text-[#051A24] mb-3 border-b border-slate-200 pb-1.5">
                  {cat.title}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cat.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#273C46]">
                      <RealisticCheckCircle2Icon className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Action Footer (Fixed at the bottom of the container) */}
        <div className="p-4 sm:px-6 sm:py-4 border-t border-gray-200 bg-gray-50/90 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#273C46] font-mono">
            Family-Owned • Fully Bonded & Insured
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                onClose();
                onOpenEstimate();
              }}
              className="w-1/2 sm:w-auto"
            >
              Book This Deep Clean
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
