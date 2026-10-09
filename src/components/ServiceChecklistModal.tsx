import React, { useEffect } from 'react';
import {
  RealisticXIcon,
  RealisticCheckCircle2Icon,
  RealisticCheckIcon,
  RealisticShieldCheckIcon,
  RealisticSparklesIcon,
} from './RealisticIcons';
import { Button } from './Button';

export interface ChecklistCategory {
  category: string;
  items: string[];
  rawText?: string;
}

export interface ServiceChecklistData {
  title: string;
  subtitle: string;
  categories: ChecklistCategory[];
}

/**
 * STRICT DATA MAPPING FOR SERVICE CHECKLIST MODALS
 * Sourced directly from Lead UI/UX Architect Specification
 */
export const SERVICE_CHECKLISTS: Record<string, ChecklistCategory[]> = {
  // 1. Initial Cleaning & Recurring Maintenance (Applied to both cards)
  'initial-cleaning': [
    {
      category: 'Bathrooms',
      items: [
        'Clean and disinfect tub/shower, sink, countertop, and toilet.',
        'Clean outside cupboards/drawers.',
        'Clean base of toilet and floor.',
      ],
      rawText:
        'Bathrooms: Clean and disinfect tub/shower, sink, countertop, and toilet. Clean outside cupboards/drawers. Clean base of toilet and floor.',
    },
    {
      category: 'Kitchen',
      items: [
        'Clean and disinfect sink and countertop.',
        'Clean outside cupboards/drawers, stovetop (including drip pans), and outside of all appliances (fridge, oven, microwave, dishwasher).',
        'Clean inside microwave.',
      ],
      rawText:
        'Kitchen: Clean and disinfect sink and countertop. Clean outside cupboards/drawers, stovetop (including drip pans), and outside of all appliances (fridge, oven, microwave, dishwasher). Clean inside microwave.',
    },
    {
      category: 'Floors',
      items: [
        'Vacuum or sweep all floors and stairs.',
        'Mop tile/linoleum.',
        'Polish wood/laminate.',
        'Clean baseboards.',
      ],
      rawText:
        'Floors: Vacuum or sweep all floors and stairs. Mop tile/linoleum. Polish wood/laminate. Clean baseboards.',
    },
    {
      category: 'General & Dusting',
      items: [
        'Dust furniture, picture frames, ceiling fans, light fixtures, window sills, and A/C vents.',
        'Clean mirrors, blinds, light switches, and door knobs.',
        'Empty trash.',
      ],
      rawText:
        'General & Dusting: Dust furniture, picture frames, ceiling fans, light fixtures, window sills, and A/C vents. Clean mirrors, blinds, light switches, and door knobs. Empty trash.',
    },
  ],

  'recurring-maintenance': [
    {
      category: 'Bathrooms',
      items: [
        'Clean and disinfect tub/shower, sink, countertop, and toilet.',
        'Clean outside cupboards/drawers.',
        'Clean base of toilet and floor.',
      ],
      rawText:
        'Bathrooms: Clean and disinfect tub/shower, sink, countertop, and toilet. Clean outside cupboards/drawers. Clean base of toilet and floor.',
    },
    {
      category: 'Kitchen',
      items: [
        'Clean and disinfect sink and countertop.',
        'Clean outside cupboards/drawers, stovetop (including drip pans), and outside of all appliances (fridge, oven, microwave, dishwasher).',
        'Clean inside microwave.',
      ],
      rawText:
        'Kitchen: Clean and disinfect sink and countertop. Clean outside cupboards/drawers, stovetop (including drip pans), and outside of all appliances (fridge, oven, microwave, dishwasher). Clean inside microwave.',
    },
    {
      category: 'Floors',
      items: [
        'Vacuum or sweep all floors and stairs.',
        'Mop tile/linoleum.',
        'Polish wood/laminate.',
        'Clean baseboards.',
      ],
      rawText:
        'Floors: Vacuum or sweep all floors and stairs. Mop tile/linoleum. Polish wood/laminate. Clean baseboards.',
    },
    {
      category: 'General & Dusting',
      items: [
        'Dust furniture, picture frames, ceiling fans, light fixtures, window sills, and A/C vents.',
        'Clean mirrors, blinds, light switches, and door knobs.',
        'Empty trash.',
      ],
      rawText:
        'General & Dusting: Dust furniture, picture frames, ceiling fans, light fixtures, window sills, and A/C vents. Clean mirrors, blinds, light switches, and door knobs. Empty trash.',
    },
  ],

  // 2. Cleanouts & Make-Ready's
  'cleanouts-make-readys': [
    {
      category: 'Deep Kitchen & Bath',
      items: [
        'Clean INSIDE and outside of all drawers, cabinets, and appliances (refrigerator, dishwasher, oven).',
        'Clean behind fridge/washer/dryer upon request.',
      ],
      rawText:
        'Deep Kitchen & Bath: Clean INSIDE and outside of all drawers, cabinets, and appliances (refrigerator, dishwasher, oven). Clean behind fridge/washer/dryer upon request.',
    },
    {
      category: 'Floors & Baseboards',
      items: [
        'Sweep, mop, and vacuum all floors.',
        'Clean all baseboards.',
      ],
      rawText:
        'Floors & Baseboards: Sweep, mop, and vacuum all floors. Clean all baseboards.',
    },
    {
      category: 'Fixtures & Details',
      items: [
        'Clean window sills, blinds, door frames, light switches, and ceiling fans.',
        'Clean inside closets and pantries including shelves.',
      ],
      rawText:
        'Fixtures & Details: Clean window sills, blinds, door frames, light switches, and ceiling fans. Clean inside closets and pantries including shelves.',
    },
  ],

  // 3. Short Term Rentals (B&B)
  'short-term-rentals': [
    {
      category: 'Turnover & Restock',
      items: [
        'Restock supplies (toilet paper, paper towels, soap).',
        'Purchase supplies if needed (extra cost).',
        'Check drawers, under beds, and closets for left items.',
      ],
      rawText:
        'Turnover & Restock: Restock supplies (toilet paper, paper towels, soap). Purchase supplies if needed (extra cost). Check drawers, under beds, and closets for left items.',
    },
    {
      category: 'Linens & Laundry',
      items: [
        'Wash and dry towels/linens (loads included upon request).',
        'Put fresh linens on beds.',
        'Wash dishes and empty dishwasher.',
      ],
      rawText:
        'Linens & Laundry: Wash and dry towels/linens (loads included upon request). Put fresh linens on beds. Wash dishes and empty dishwasher.',
    },
    {
      category: 'Standard Cleaning',
      items: [
        'Full bathroom, kitchen, and floor sanitization.',
        'Clean inside/outside all appliances.',
      ],
      rawText:
        'Standard Cleaning: Full bathroom, kitchen, and floor sanitization. Clean inside/outside all appliances.',
    },
    {
      category: 'Property Check',
      items: [
        'Sweep porches/patios, check yard for trash, take trash to curb, and report any property damages to the host.',
      ],
      rawText:
        'Property Check: Sweep porches/patios, check yard for trash, take trash to curb, and report any property damages to the host.',
    },
  ],

  // 4. Extra & Maid Services
  'extra-maid-services': [
    {
      category: 'Deep Clean Add-ons',
      items: [
        'Window cleaning, moving furniture to clean under, hand-cleaning blinds/baseboards, scrubbing floors by hand, cleaning inside fridge/oven, sweeping garage/porch.',
      ],
      rawText:
        'Deep Clean Add-ons: Window cleaning, moving furniture to clean under, hand-cleaning blinds/baseboards, scrubbing floors by hand, cleaning inside fridge/oven, sweeping garage/porch.',
    },
    {
      category: 'Maid Services (Extra Cost)',
      items: [
        'Dishes, laundry (linens), changing sheets, making beds, straightening up living spaces, and vacuuming furniture.',
      ],
      rawText:
        'Maid Services (Extra Cost): Dishes, laundry (linens), changing sheets, making beds, straightening up living spaces, and vacuuming furniture.',
    },
  ],

  // Featured Services fallbacks
  'lawn-care': [
    {
      category: 'Lawn Care & Grounds Detailing',
      items: [
        'Precision lawn mowing and curb edging.',
        'Blowing driveways, walkways, decks, and patios.',
        'Seasonal leaf blowing and debris collection.',
        'Clearing fallen branches and lawn clutter.',
        'Weeding flowerbed perimeters upon request.',
      ],
      rawText:
        'Lawn Care: Precision lawn mowing, curb edging, and seasonal leaf blowing and debris collection.',
    },
  ],

  'carpet-cleaning': [
    {
      category: 'Carpet & Rug Steam Extraction',
      items: [
        'Commercial hot water steam fiber extraction.',
        'Pre-treatment for high-traffic walkways and hallways.',
        'Pet stain and odor neutralizing enzyme treatments.',
        'Safe cleaning for delicate area rugs and synthetics.',
        'Fast-drying finish with zero sticky residue.',
      ],
      rawText:
        'Carpet Cleaning: Hot water steam extraction, pet stain neutralizing, and zero sticky residue finish.',
    },
  ],
};

// Aliases by service title for flexible resolution
SERVICE_CHECKLISTS['Initial Cleaning'] = SERVICE_CHECKLISTS['initial-cleaning'];
SERVICE_CHECKLISTS['Recurring Maintenance'] = SERVICE_CHECKLISTS['recurring-maintenance'];
SERVICE_CHECKLISTS["Cleanouts & Make-Ready's"] = SERVICE_CHECKLISTS['cleanouts-make-readys'];
SERVICE_CHECKLISTS['Short Term Rentals (B&B)'] = SERVICE_CHECKLISTS['short-term-rentals'];
SERVICE_CHECKLISTS['Extra & Maid Services'] = SERVICE_CHECKLISTS['extra-maid-services'];
SERVICE_CHECKLISTS['Lawn Care'] = SERVICE_CHECKLISTS['lawn-care'];
SERVICE_CHECKLISTS['Carpet Cleaning'] = SERVICE_CHECKLISTS['carpet-cleaning'];

interface ServiceChecklistModalProps {
  isOpen: boolean;
  serviceTitle: string;
  serviceId?: string;
  serviceDescription?: string;
  onClose: () => void;
  onRequestEstimate: (serviceTitle: string) => void;
}

export const ServiceChecklistModal: React.FC<ServiceChecklistModalProps> = ({
  isOpen,
  serviceTitle,
  serviceId,
  serviceDescription,
  onClose,
  onRequestEstimate,
}) => {
  const isModalOpen = isOpen;

  // TASK 2: REACT TAILWIND BODY LOCK
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isModalOpen]);

  // Escape key listener
  useEffect(() => {
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

  // Retrieve categorized checklist by ID or Title
  const categories =
    (serviceId && SERVICE_CHECKLISTS[serviceId]) ||
    SERVICE_CHECKLISTS[serviceTitle] ||
    SERVICE_CHECKLISTS['initial-cleaning'];

  return (
    // 1. THE ISOLATED WRAPPER (Blocks everything else)
    <div
      id="modal-checklist-wrapper"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 isolate"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-checklist-title"
    >
      {/* 2. THE BACKDROP (Clicking this closes the modal) */}
      <div
        id="modal-checklist-backdrop"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />

      {/* 3. THE CONTAINER (Fixed height, completely hides overflow) */}
      <div
        id={`modal-checklist-content-${serviceId || 'active'}`}
        className="relative z-10 w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
      >
        {/* 4. THE HEADER (Fixed at the top) */}
        <div className="flex justify-between items-center p-5 border-b border-gray-200 bg-white shrink-0">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] uppercase font-mono tracking-widest text-blue-700 font-bold mb-0.5">
              <RealisticShieldCheckIcon className="w-3.5 h-3.5" />
              <span>Exhaustive Service Scope</span>
            </div>
            <h3
              id="modal-checklist-title"
              className="text-xl font-heading font-bold text-slate-900 leading-tight"
            >
              {serviceTitle} Checklist
            </h3>
          </div>
          <button
            id="btn-close-service-checklist"
            type="button"
            onClick={onClose}
            className="text-3xl text-slate-400 hover:text-red-500 leading-none cursor-pointer p-1"
            aria-label="Close checklist dialog"
          >
            &times;
          </button>
        </div>

        {/* 5. THE SCROLLABLE BODY (The Magic Fix - CRITICAL: overscroll-contain prevents scroll passing to body) */}
        <div className="p-5 md:p-8 overflow-y-auto overscroll-contain flex-1">
          {serviceDescription && (
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              {serviceDescription}
            </p>
          )}

          {/* Categorized Checklists (Strictly Formatted Bullet Lists - No Raw Paragraphs) */}
          <div className="space-y-4 sm:space-y-5">
            {categories.map((cat, cIdx) => (
              <div
                key={cIdx}
                id={`checklist-category-${cIdx}`}
                className="bg-slate-50/90 rounded-xl p-4 sm:p-5 border border-slate-200/80"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200/80">
                  <div className="p-1 rounded-lg bg-blue-100/80 text-blue-700">
                    <RealisticCheckCircle2Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                    {cat.category}
                  </h4>
                </div>

                {/* Categorized Bullet List */}
                <ul className="space-y-2.5">
                  {cat.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      id={`checklist-item-${cIdx}-${itemIdx}`}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
                    >
                      <span className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                        <RealisticCheckIcon className="w-3.5 h-3.5" />
                      </span>
                      <span className="font-normal text-slate-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Action Footer (Fixed at the bottom of the container) */}
        <div className="p-4 sm:px-6 sm:py-4 border-t border-gray-200 bg-gray-50/90 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] sm:text-xs text-slate-500 font-mono">
            Family-Owned • Fully Bonded & Insured • San Antonio, TX
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              id="btn-checklist-modal-close"
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
            <Button
              id="btn-checklist-modal-estimate"
              variant="primary"
              size="sm"
              onClick={() => {
                onClose();
                onRequestEstimate(serviceTitle);
              }}
              className="w-1/2 sm:w-auto flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Request a Custom Quote</span>
              <RealisticSparklesIcon className="w-3.5 h-3.5 text-blue-200" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
