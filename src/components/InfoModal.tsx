import React from 'react';
import {
  RealisticXIcon,
  RealisticPhoneCallIcon,
  RealisticClockIcon,
  RealisticCreditCardIcon,
  RealisticShieldCheckIcon,
  RealisticHeartIcon,
  RealisticMapPinIcon,
} from './RealisticIcons';
import { Button } from './Button';

interface InfoModalProps {
  isOpen: boolean;
  type: 'about' | 'payment' | 'photos' | 'contact' | null;
  onClose: () => void;
  onOpenEstimate: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  type,
  onClose,
  onOpenEstimate,
}) => {
  if (!isOpen || !type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-[#051A24]/70 backdrop-blur-sm animate-fade-in-up overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      data-lenis-prevent="true"
    >
      <div
        className="relative w-full max-w-md bg-white rounded-[20px] md:rounded-[24px] shadow-2xl p-4 sm:p-5 md:p-6 my-auto max-h-[82vh] overflow-y-auto border border-slate-200/80 overscroll-contain"
        role="dialog"
        aria-modal="true"
        data-lenis-prevent="true"
      >
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#051A24] transition-colors cursor-pointer z-10"
          aria-label="Close dialog"
        >
          <RealisticXIcon className="w-4 h-4" />
        </button>

        {type === 'about' && (
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs uppercase font-mono tracking-widest text-[#051A24]/60">
              <RealisticHeartIcon className="w-4 h-4" />
              <span>Family Owned Since 1999</span>
            </div>
            <h2 className="font-heading text-3xl font-semibold text-[#0D212C] mb-4">
              About Mom's House Cleaning
            </h2>
            <div className="space-y-4 text-sm text-[#273C46] leading-relaxed">
              <p>
                Founded right here in San Antonio in 1999, Mom's House Cleaning was built on a simple premise: <span className="font-semibold text-[#051A24]">Integrity and genuine family care</span>.
              </p>
              <p>
                We understand that inviting someone into your home is an act of trust. That's why every member of our team is fully vetted, background-checked, insured, and bonded. We don't cut corners; we clean them.
              </p>
              <p>
                From historic homes in King William to suburban estates in Stone Oak and Helotes, we treat every space as if it were our own mother's home.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
              <span className="text-xs font-mono text-[#051A24]">Bexar County DBA Registered</span>
              <Button variant="primary" size="sm" onClick={() => { onClose(); onOpenEstimate(); }}>
                Get Estimate
              </Button>
            </div>
          </div>
        )}

        {type === 'payment' && (
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs uppercase font-mono tracking-widest text-[#051A24]/60">
              <RealisticCreditCardIcon className="w-4 h-4" />
              <span>Transparent & Convenient</span>
            </div>
            <h2 className="font-heading text-3xl font-semibold text-[#0D212C] mb-4">
              Payment Options
            </h2>
            <p className="text-sm text-[#273C46] mb-6">
              We never charge surprise fees. You only pay after your cleaning is completed to your 100% satisfaction.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70">
                <h4 className="font-semibold text-sm text-[#051A24] mb-1">Credit & Debit Cards</h4>
                <p className="text-xs text-[#273C46]">Visa, MasterCard, American Express, Discover with secure mobile payment link.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70">
                <h4 className="font-semibold text-sm text-[#051A24] mb-1">Zelle & Venmo</h4>
                <p className="text-xs text-[#273C46]">Instant zero-fee direct transfers for recurring weekly or bi-weekly clients.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70">
                <h4 className="font-semibold text-sm text-[#051A24] mb-1">Check & Cash</h4>
                <p className="text-xs text-[#273C46]">Pay upon completion directly to your lead housekeeper upon walkthrough.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70">
                <h4 className="font-semibold text-sm text-[#051A24] mb-1">Commercial Invoicing</h4>
                <p className="text-xs text-[#273C46]">Net 15/30 invoicing with itemized receipts for San Antonio businesses & property managers.</p>
              </div>
            </div>
            <Button variant="primary" size="sm" onClick={onClose} className="w-full">
              Close
            </Button>
          </div>
        )}

        {type === 'photos' && (
          <div>
            <h2 className="font-heading text-3xl font-semibold text-[#0D212C] mb-2">
              Recent San Antonio Homes
            </h2>
            <p className="text-xs text-[#273C46] mb-4">
              Real results delivered by our dedicated crew across Bexar County.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80"
                alt="Meticulous move-out bathroom sanitization and fixture detailing in San Antonio"
                referrerPolicy="no-referrer"
                className="rounded-xl h-28 sm:h-32 w-full object-cover shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=400&q=80"
                alt="Pristine modern kitchen countertop and sink deep cleaned in San Antonio"
                referrerPolicy="no-referrer"
                className="rounded-xl h-28 sm:h-32 w-full object-cover shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
                alt="Spotless residential living room detail cleaning and staging"
                referrerPolicy="no-referrer"
                className="rounded-xl h-28 sm:h-32 w-full object-cover shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80"
                alt="Professional high-powered carpet cleaning and fiber extraction in San Antonio TX"
                referrerPolicy="no-referrer"
                className="rounded-xl h-28 sm:h-32 w-full object-cover shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80"
                alt="Immaculate hard surface floor scrubbing and polishing service"
                referrerPolicy="no-referrer"
                className="rounded-xl h-28 sm:h-32 w-full object-cover shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1592417817098-8f3d6eb22513?auto=format&fit=crop&w=400&q=80"
                alt="Well-manicured residential lawn mowing and curb edging in San Antonio"
                referrerPolicy="no-referrer"
                className="rounded-xl h-28 sm:h-32 w-full object-cover shadow-sm"
              />
            </div>
            <Button variant="primary" size="sm" onClick={() => { onClose(); onOpenEstimate(); }} className="w-full">
              Get Your Space Cleaned
            </Button>
          </div>
        )}

        {type === 'contact' && (
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs uppercase font-mono tracking-widest text-[#051A24]/60">
              <RealisticMapPinIcon className="w-4 h-4" />
              <span>San Antonio, Texas</span>
            </div>
            <h2 className="font-heading text-3xl font-semibold text-[#0D212C] mb-4">
              Contact Mom's House Cleaning
            </h2>
            <div className="space-y-4 mb-6">
              <a
                href="tel:+12103808066"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200/70 text-[#051A24]"
              >
                <div className="w-10 h-10 rounded-full bg-[#051A24] text-white flex items-center justify-center shrink-0">
                  <RealisticPhoneCallIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-mono text-[#273C46]">Call or Text Dispatch</span>
                  <div className="font-semibold text-base text-[#051A24]">210.380.8066</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 text-[#051A24]">
                <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <RealisticClockIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-mono text-[#273C46]">Operating Hours</span>
                  <div className="text-sm text-[#051A24]">Monday – Saturday: 7:30 AM – 6:30 PM</div>
                  <div className="text-xs text-[#273C46]">Sunday: Priority Move-In/Airbnb Available</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 text-[#051A24]">
                <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <RealisticShieldCheckIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-mono text-[#273C46]">Coverage Area</span>
                  <div className="text-sm text-[#051A24]">Greater San Antonio, Bexar County & Surrounding Hill Country</div>
                </div>
              </div>
            </div>

            <Button variant="primary" size="sm" onClick={() => { onClose(); onOpenEstimate(); }} className="w-full">
              Request Free Estimate
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
