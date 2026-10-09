import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  RealisticCheckIcon,
  RealisticArrowLeftIcon,
  RealisticSparklesIcon,
} from '../components/RealisticIcons';
import { Button } from '../components/Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Footer } from '../components/Footer';
import { CopyrightBar } from '../components/CopyrightBar';
import { BottomNav } from '../components/BottomNav';
import { SERVICE_CHECKLISTS } from '../components/ServiceChecklistModal';

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  items?: string[];
  bullets?: string[];
}

// FEATURED BLOCK: High-revenue specializations rendered in dark mode at top
export const featuredServicesData: ServiceCategory[] = [
  {
    id: 'lawn-care',
    title: 'Lawn Care',
    description: 'Lawn mowing, edging, and outdoor debris yard cleanup.',
    items: [
      'Precision lawn mowing and curb edging.',
      'Blowing driveways, walkways, decks, and patios.',
      'Seasonal leaf blowing and debris collection.',
      'Clearing fallen branches and lawn clutter.',
      'Weeding flowerbed perimeters upon request.',
    ],
  },
  {
    id: 'carpet-cleaning',
    title: 'Carpet Cleaning',
    description: 'Deep steam extraction to restore and revitalize carpets.',
    items: [
      'Commercial hot water steam fiber extraction.',
      'Pre-treatment for high-traffic walkways and hallways.',
      'Pet stain and odor neutralizing enzyme treatments.',
      'Safe cleaning for delicate area rugs and synthetics.',
      'Fast-drying finish with zero sticky residue.',
    ],
  },
];

// STRICT 5-CARD STANDARD ESSENTIALS (EXACT COPY MAPPING - NO HALLUCINATIONS)
export const standardServicesData: ServiceCategory[] = [
  {
    id: 'initial-cleaning',
    title: 'Initial Cleaning',
    description: 'Deep, top-to-bottom sanitization to establish a spotless baseline.',
    bullets: [
      'Bathrooms & Kitchens Deep Clean',
      'Dusting, Baseboards & Blinds',
      'Floors & Mirrors Polished',
    ],
  },
  {
    id: 'recurring-maintenance',
    title: 'Recurring Maintenance',
    description: 'Weekly, bi-weekly, or monthly upkeep for your home.',
    bullets: [
      'High-Touch Disinfection',
      'Floor Mopping & Vacuuming',
      'Consistent Surface Maintenance',
    ],
  },
  {
    id: 'cleanouts-make-readys',
    title: "Cleanouts & Make-Ready's",
    description: 'Thorough detailing tailored for move-ins and move-outs.',
    bullets: [
      'Inside Cabinets & Drawers',
      'Inside Ovens & Refrigerators',
      'Ceiling Fans & Light Fixtures',
    ],
  },
  {
    id: 'short-term-rentals',
    title: 'Short Term Rentals (B&B)',
    description: 'Turnkey turnover cleaning for 5-star Airbnb hosts.',
    bullets: [
      'Restocking Paper Goods & Soap',
      'Linen Washing & Bed Making',
      'Property Damage Reporting',
    ],
  },
  {
    id: 'extra-maid-services',
    title: 'Extra & Maid Services',
    description: 'Custom add-on tasks to handle your specific chores.',
    bullets: [
      'Laundry, Dishes & Bed Making',
      'Inside Appliance Detailing',
      'Garage, Porch & Patio Sweeping',
    ],
  },
];

// Unified export
export const servicesData: ServiceCategory[] = [
  ...featuredServicesData,
  ...standardServicesData,
];

interface FeaturedServiceCardProps {
  service: ServiceCategory;
  index: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onRequestEstimate: (serviceTitle: string) => void;
}

const FeaturedServiceCard: React.FC<FeaturedServiceCardProps> = ({
  service,
  index,
  isExpanded,
  onToggleExpand,
  onRequestEstimate,
}) => {
  const { ref, isInView } = useInViewAnimation(0.1);
  const checklistData =
    SERVICE_CHECKLISTS[service.id] ||
    SERVICE_CHECKLISTS[service.title] ||
    [];

  return (
    <div
      ref={ref}
      id={`service-card-${service.id}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      className={`relative rounded-3xl p-8 md:p-10 bg-slate-900 text-white border-2 border-blue-500 shadow-2xl transition-all duration-300 will-change-transform flex flex-col justify-between ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      {/* Absolute Corner Badge */}
      <span
        id={`badge-featured-${service.id}`}
        className="absolute -top-3.5 -right-3.5 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg z-10 flex items-center gap-1.5"
      >
        <RealisticSparklesIcon className="w-3.5 h-3.5 text-blue-200" />
        <span>Featured</span>
      </span>

      <div>
        {/* Top Header Tags */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-300 bg-blue-950/90 px-3.5 py-1 rounded-full border border-blue-700/60">
            Priority 0{index + 1}
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-300 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-700/60 font-semibold">
            High Priority
          </span>
        </div>

        {/* Title */}
        <h3
          id={`service-title-${service.id}`}
          className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3"
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          id={`service-desc-${service.id}`}
          className="text-base md:text-lg text-slate-200 leading-relaxed font-normal mb-1"
        >
          {service.description}
        </p>

        {/* Dynamic Accordion Toggle for Featured Card */}
        <button
          type="button"
          id={`btn-view-more-${service.id}`}
          onClick={onToggleExpand}
          className="mt-4 text-sm font-semibold text-blue-300 hover:text-blue-100 underline underline-offset-4 cursor-pointer inline-flex items-center gap-1 text-left transition-colors"
        >
          <span>{isExpanded ? 'View Less ↑' : 'View More ↓'}</span>
        </button>

        {/* Highlights Checklist */}
        <div className="space-y-3 pt-5 border-t border-slate-800/80 mb-6 mt-5">
          {(service.items || []).map((item, itemIdx) => (
            <div
              key={itemIdx}
              id={`service-item-${service.id}-${itemIdx}`}
              className="flex items-start gap-3"
            >
              <span className="p-0.5 rounded-full bg-blue-500/20 text-blue-400 shrink-0 mt-1">
                <RealisticCheckIcon className="w-4 h-4" />
              </span>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed font-normal">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Inline Accordion for Featured Card */}
        {isExpanded && checklistData.length > 0 && (
          <div
            id={`accordion-checklist-${service.id}`}
            className="mt-4 pt-4 border-t border-slate-800 bg-slate-950/70 -mx-8 md:-mx-10 px-8 md:px-10 py-5 rounded-b-2xl space-y-5 transition-all duration-300 mb-6"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-300">
                Detailed Scope of Work
              </span>
              <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/60 font-medium">
                {service.title}
              </span>
            </div>

            {checklistData.map((section, secIdx) => (
              <div key={secIdx} className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  <span>{section.category}</span>
                </h4>
                <ul className="space-y-1.5 pl-3">
                  {section.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 leading-relaxed"
                    >
                      <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Friction-reducing Trust Copy */}
      <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-4">
        <div>
          <span className="text-lg sm:text-xl font-bold text-white tracking-tight font-heading">
            Personalized Consultation
          </span>
          <span className="block text-[10px] font-mono uppercase tracking-wider text-blue-300">
            Customized to fit your home's unique needs
          </span>
        </div>
        <span className="text-[11px] sm:text-xs text-blue-200 font-mono">
          Reach out for a personalized consultation
        </span>
      </div>

      {/* Action CTA */}
      <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between mt-3">
        <button
          id={`btn-estimate-${service.id}`}
          type="button"
          onClick={() => onRequestEstimate(service.title)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm md:text-base shadow-lg transition-all cursor-pointer active:scale-[0.98]"
        >
          <span>Request a Custom Quote</span>
          <RealisticSparklesIcon className="w-4 h-4 text-blue-200" />
        </button>
      </div>
    </div>
  );
};

interface StandardServiceCardProps {
  service: ServiceCategory;
  index: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onRequestEstimate: (serviceTitle: string) => void;
}

const StandardServiceCard: React.FC<StandardServiceCardProps> = ({
  service,
  index,
  isExpanded,
  onToggleExpand,
  onRequestEstimate,
}) => {
  const { ref, isInView } = useInViewAnimation(0.1);
  const checklistData =
    SERVICE_CHECKLISTS[service.id] ||
    SERVICE_CHECKLISTS[service.title] ||
    [];

  return (
    <div
      ref={ref}
      id={`service-card-${service.id}`}
      style={{ animationDelay: `${(index % 3) * 0.08}s` }}
      className={`bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 shadow-sm transition-all duration-300 flex flex-col justify-between will-change-transform ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      <div>
        {/* Subtle Index Tag */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-mono font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
            0{index + 1}
          </span>
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
            San Antonio, TX
          </span>
        </div>

        {/* Title */}
        <h3
          id={`service-title-${service.id}`}
          className="font-heading text-xl md:text-2xl font-semibold text-slate-900 tracking-tight mb-2.5"
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          id={`service-desc-${service.id}`}
          className="font-body text-sm md:text-base text-slate-600 leading-relaxed font-normal mb-1"
        >
          {service.description}
        </p>

        {/* Dynamic Accordion Toggle Button */}
        <button
          type="button"
          id={`btn-view-more-${service.id}`}
          onClick={onToggleExpand}
          className="mt-4 text-sm font-semibold text-slate-600 hover:text-blue-600 underline underline-offset-4 cursor-pointer inline-flex items-center gap-1 transition-colors"
        >
          <span>{isExpanded ? 'View Less ↑' : 'View More ↓'}</span>
        </button>

        {/* Exact 3 Bullets List */}
        {service.bullets && (
          <ul className="space-y-2.5 pt-5 border-t border-slate-100 mb-6 mt-4">
            {service.bullets.map((bullet, bIdx) => (
              <li
                key={bIdx}
                id={`bullet-${service.id}-${bIdx}`}
                className="flex items-start gap-2.5 text-sm text-slate-700 leading-snug"
              >
                <span className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                  <RealisticCheckIcon className="w-3.5 h-3.5" />
                </span>
                <span className="font-medium text-slate-800">{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {/* TASK 3: INLINE UI RENDERING (THE ACCORDION) */}
        {isExpanded && (
          <div
            id={`accordion-checklist-${service.id}`}
            className="mt-4 pt-4 border-t border-slate-200 bg-slate-50/80 -mx-6 md:-mx-8 px-6 md:px-8 py-5 rounded-b-xl space-y-5 transition-all duration-300"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
                Detailed Scope of Work
              </span>
              <span className="text-[11px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full font-medium">
                {service.title}
              </span>
            </div>

            {checklistData.map((section, secIdx) => (
              <div key={secIdx} className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span>{section.category}</span>
                </h4>
                <ul className="space-y-1.5 pl-3">
                  {section.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-xs sm:text-sm text-slate-700 flex items-start gap-2 leading-relaxed"
                    >
                      <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Friction-reducing Trust Copy */}
      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mt-4">
        <div>
          <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight font-heading">
            Tailored Service Plan
          </span>
          <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-500">
            Transparent estimates based on your specific requirements
          </span>
        </div>
        <span className="text-[11px] text-slate-500 font-mono">
          Customized to fit your home's unique needs
        </span>
      </div>

      {/* Action Button: Opens the Contact / Estimate Form */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-3">
        <button
          id={`btn-estimate-${service.id}`}
          type="button"
          onClick={() => onRequestEstimate(service.title)}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#051A24] hover:bg-[#0D212C] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow cursor-pointer active:scale-[0.98]"
        >
          <span>Get Your Free Estimate</span>
          <RealisticSparklesIcon className="w-3.5 h-3.5 text-blue-200" />
        </button>
      </div>
    </div>
  );
};

interface ServicesPageProps {
  onNavigateHome: () => void;
  onOpenEstimate: (serviceTitle?: string) => void;
  onOpenAbout?: () => void;
  onOpenPhotos?: () => void;
  onOpenTestimonials?: () => void;
  onOpenPayment?: () => void;
  onOpenContact?: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesPageProps> = ({
  onNavigateHome,
  onOpenEstimate,
  onOpenAbout = () => {},
  onOpenPhotos = () => {},
  onOpenTestimonials = () => {},
  onOpenPayment = () => {},
  onOpenContact = () => {},
}) => {
  const { ref: heroRef, isInView: heroInView } = useInViewAnimation(0.05);

  // TASK 2: ARCHITECT THE EXPANDABLE CARD STATE
  const [expandedStandardIndex, setExpandedStandardIndex] = useState<number | null>(null);
  const [expandedFeaturedIndex, setExpandedFeaturedIndex] = useState<number | null>(null);

  const handleCallOrText = () => {
    window.open('tel:+12103808066', '_self');
  };

  const handleRequestEstimate = (serviceTitle: string) => {
    if (onOpenEstimate) {
      onOpenEstimate(serviceTitle);
    } else if (onOpenContact) {
      onOpenContact();
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#F4F9FF] text-[#051A24] flex flex-col items-center relative overflow-x-hidden selection:bg-[#051A24] selection:text-white">
      {/* Route-specific Dynamic Head Management & Canonical Self-Reference */}
      <Helmet>
        <title>Professional House Cleaning & Maid Services | Mom's House Cleaning San Antonio</title>
        <meta
          name="description"
          content="Explore complete cleaning services in San Antonio, TX: Initial deep cleaning, recurring housekeeping, lawn care, carpet steam extraction, and move-in/move-out cleans."
        />
        <link rel="canonical" href="https://www.momshousecleaning.com/our-services/" />
        <meta property="og:title" content="Professional House Cleaning & Maid Services | Mom's House Cleaning San Antonio" />
        <meta
          property="og:description"
          content="Explore complete cleaning services in San Antonio, TX: Initial deep cleaning, recurring housekeeping, lawn care, carpet steam extraction, and move-in/move-out cleans."
        />
        <meta property="og:url" content="https://www.momshousecleaning.com/our-services/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Professional House Cleaning & Maid Services | Mom's House Cleaning San Antonio" />
        <meta
          name="twitter:description"
          content="Explore complete cleaning services in San Antonio, TX: Initial deep cleaning, recurring housekeeping, lawn care, carpet steam extraction, and move-in/move-out cleans."
        />
      </Helmet>

      {/* Breadcrumb / Back Navigation Bar */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 mx-auto pt-6 pb-2 flex items-center justify-between">
        <button
          id="btn-services-back-home"
          onClick={onNavigateHome}
          className="flex items-center gap-2 text-xs md:text-sm font-mono uppercase tracking-wider text-[#051A24]/80 hover:text-[#051A24] transition-colors cursor-pointer py-1.5 px-3 rounded-full bg-slate-100/80 hover:bg-slate-200/80"
        >
          <RealisticArrowLeftIcon className="w-4 h-4" />
          <span>Home / Comprehensive Services</span>
        </button>

        <span className="text-xs font-mono text-[#051A24]/60 uppercase tracking-widest hidden sm:inline-block">
          San Antonio, TX
        </span>
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="services-hero-section"
        className="w-full py-8 px-4 md:pt-16 md:pb-12 md:px-12 mx-auto flex flex-col items-center text-center"
      >
        <p
          id="services-hero-tagline"
          style={{ animationDelay: '0.1s' }}
          className={`font-mono text-sm text-[#051A24] uppercase tracking-widest font-medium mb-3 will-change-transform ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Mom's House Cleaning
        </p>

        <h1
          id="services-hero-heading"
          style={{ animationDelay: '0.2s' }}
          className={`font-heading text-3xl sm:text-5xl md:text-6xl leading-tight text-[#0D212C] font-semibold tracking-tight max-w-4xl mb-6 will-change-transform ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Professional Residential Cleaning & Property Maintenance in San Antonio
        </h1>

        <div
          id="services-hero-btn-container"
          style={{ animationDelay: '0.3s' }}
          className={`will-change-transform ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <Button
            id="btn-services-hero-estimate"
            variant="primary"
            size="lg"
            onClick={() => handleRequestEstimate('Initial Cleaning')}
            className="shadow-md"
          >
            Get Your Free Estimate
          </Button>
        </div>

        {/* Personalized Consultation Banner */}
        <div
          style={{ animationDelay: '0.35s' }}
          className={`mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-medium will-change-transform ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <RealisticSparklesIcon className="w-4 h-4 text-blue-600" />
          <span>Personalized Estimates • <strong>Customized to fit your home's unique needs</strong></span>
        </div>
      </section>

      {/* TASK 2: MAINTAIN THE FEATURED BLOCK (DARK MODE AT TOP) */}
      <section
        id="featured-services-section"
        className="w-full max-w-7xl px-4 md:px-12 mx-auto mb-12 md:mb-16"
      >
        <div className="mb-6 md:mb-8 text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-600 font-bold mb-1.5 block">
            High-Priority Focus Services
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-slate-900 font-semibold tracking-tight">
            Featured Specializations
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 w-full">
          {featuredServicesData.map((service, index) => (
            <FeaturedServiceCard
              key={service.id}
              service={service}
              index={index}
              isExpanded={expandedFeaturedIndex === index}
              onToggleExpand={() =>
                setExpandedFeaturedIndex(
                  expandedFeaturedIndex === index ? null : index
                )
              }
              onRequestEstimate={handleRequestEstimate}
            />
          ))}
        </div>
      </section>

      {/* TASK 3: RENDER EXACTLY 5 STANDARD CARDS (CLEAN, MINIMALIST 3-COLUMN GRID) */}
      <section
        id="standard-services-section"
        className="w-full max-w-7xl py-8 px-4 md:py-16 md:px-12 mx-auto"
      >
        <div className="mb-8 md:mb-10 text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-500 font-semibold mb-1.5 block">
            Residential & Commercial Catalog
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-slate-900 font-semibold tracking-tight mb-2">
            Essential Cleaning Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Transparent, professional cleaning solutions tailored to your schedule.
          </p>
        </div>

        {/* Minimal clean 3-column grid with inline expandable cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full items-start">
          {standardServicesData.map((service, index) => (
            <StandardServiceCard
              key={service.id}
              service={service}
              index={index}
              isExpanded={expandedStandardIndex === index}
              onToggleExpand={() =>
                setExpandedStandardIndex(
                  expandedStandardIndex === index ? null : index
                )
              }
              onRequestEstimate={handleRequestEstimate}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer
        onOpenEstimate={() => handleRequestEstimate('Initial Cleaning')}
        onOpenServices={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAbout={onOpenAbout}
        onOpenPhotos={onOpenPhotos}
        onOpenTestimonials={onOpenTestimonials}
        onOpenPayment={onOpenPayment}
        onOpenContact={onOpenContact}
      />

      {/* Copyright Bar */}
      <CopyrightBar />

      {/* Fixed Bottom Nav */}
      <BottomNav onCallOrText={handleCallOrText} />
    </div>
  );
};
