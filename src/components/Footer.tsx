import React from 'react';
import { RealisticArrowUpRightIcon } from './RealisticIcons';
import { Button } from './Button';

interface FooterProps {
  onOpenEstimate: () => void;
  onOpenServices: () => void;
  onOpenAbout: () => void;
  onOpenPhotos: () => void;
  onOpenTestimonials: () => void;
  onOpenPayment: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenEstimate,
  onOpenServices,
  onOpenAbout,
  onOpenPhotos,
  onOpenTestimonials,
  onOpenPayment,
  onOpenContact,
}) => {
  return (
    <footer
      id="main-footer"
      className="w-full px-4 sm:px-8 md:px-12 lg:px-16 mx-auto py-12 border-t border-slate-200/60"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left Side: CTA Button & Semantic NAP */}
        <div id="footer-cta-col" className="flex flex-col gap-5 items-start">
          <Button
            id="footer-btn-estimate"
            variant="primary"
            size="md"
            onClick={onOpenEstimate}
          >
            Get a Free Estimate
          </Button>

          {/* LocalBusiness Semantic NAP */}
          <address
            id="footer-nap"
            className="not-italic text-sm text-[#051A24]/85 flex flex-col gap-1 font-normal"
          >
            <span className="font-heading font-semibold text-base text-[#051A24]">
              Mom's House Cleaning
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#273C46]/80">
              San Antonio, TX • Since 1999
            </span>
            <a
              id="footer-phone-link"
              href="tel:+12103808066"
              className="text-[#051A24] hover:text-blue-700 font-semibold font-mono text-sm underline underline-offset-4 transition-colors inline-block mt-0.5"
            >
              (210) 380-8066
            </a>
          </address>
        </div>

        {/* Right Side: Arrow Icon + Two columns of links */}
        <div id="footer-links-container" className="flex items-start gap-8 sm:gap-14">
          <div className="pt-1 hidden sm:block">
            <RealisticArrowUpRightIcon className="w-6 h-6" />
          </div>

          {/* Column 1 */}
          <div id="footer-col-1" className="flex flex-col gap-3">
            <button
              onClick={onOpenServices}
              className="text-left text-base text-[#051A24] hover:opacity-70 transition-opacity font-normal cursor-pointer"
            >
              Our Services
            </button>
            <button
              onClick={onOpenAbout}
              className="text-left text-base text-[#051A24] hover:opacity-70 transition-opacity font-normal cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={onOpenTestimonials}
              className="text-left text-base text-[#051A24] hover:opacity-70 transition-opacity font-normal cursor-pointer"
            >
              Testimonials
            </button>
          </div>

          {/* Column 2 */}
          <div id="footer-col-2" className="flex flex-col gap-3">
            <button
              onClick={onOpenPayment}
              className="text-left text-base text-[#051A24] hover:opacity-70 transition-opacity font-normal cursor-pointer"
            >
              Payment Options
            </button>
            <button
              onClick={onOpenContact}
              className="text-left text-base text-[#051A24] hover:opacity-70 transition-opacity font-normal cursor-pointer"
            >
              Contact Us
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('faq-section');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-left text-base text-[#051A24] hover:opacity-70 transition-opacity font-normal cursor-pointer"
            >
              FAQs
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
