import React from 'react';
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
import { ServiceSearch } from '../components/ServiceSearch';

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  items?: string[];
}

// TASK 1: DATA COMPONENT SPLIT
// Category 1: Featured high-revenue drivers (RETAINED)
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

// Category 2: Standard housekeeping (5 Synthesized Nodes)
export const standardServicesData: ServiceCategory[] = [
  {
    id: 'initial-cleaning',
    title: 'Initial Cleaning',
    description: 'Deep, top-to-bottom sanitization to establish a spotless baseline for your home.',
  },
  {
    id: 'recurring-cleaning',
    title: 'Recurring Cleaning',
    description: 'Weekly, bi-weekly, or monthly maintenance to keep your home consistently pristine.',
  },
  {
    id: 'cleanouts-make-readys',
    title: "Cleanouts & Make-Ready's",
    description: 'Thorough detailing and sanitization tailored for move-ins and move-outs.',
  },
  {
    id: 'short-term-rentals',
    title: 'Short Term Rentals (B&B)',
    description: 'Complete turnover service including restocking, linen washing, and damage reporting.',
  },
  {
    id: 'extra-maid-services',
    title: 'Extra & Maid Services',
    description: 'Add-on tasks like laundry, dishes, window cleaning, and appliance detailing.',
  },
];

// Unified export for backward compatibility
export const servicesData: ServiceCategory[] = [
  ...featuredServicesData,
  ...standardServicesData,
];

interface FeaturedServiceCardProps {
  service: ServiceCategory;
  index: number;
  onOpenEstimate: (serviceTitle?: string) => void;
}

const FeaturedServiceCard: React.FC<FeaturedServiceCardProps> = ({ service, index, onOpenEstimate }) => {
  const { ref, isInView } = useInViewAnimation(0.1);

  return (
    <div
      ref={ref}
      id={`service-card-${service.id}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      className={`relative rounded-3xl p-8 md:p-10 bg-slate-900 text-white border-2 border-blue-500 shadow-2xl transition-all duration-300 hover:-translate-y-1 will-change-transform flex flex-col justify-between ${
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

        {/* Prominent Title */}
        <h3
          id={`service-title-${service.id}`}
          className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3"
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          id={`service-desc-${service.id}`}
          className="text-base md:text-lg text-slate-200 leading-relaxed font-normal mb-6"
        >
          {service.description}
        </p>

        {/* Highlights Checklist */}
        <div className="space-y-3 pt-5 border-t border-slate-800/80 mb-8">
          {service.items.map((item, itemIdx) => (
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
      </div>

      {/* Action CTA */}
      <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
        <button
          id={`btn-estimate-${service.id}`}
          type="button"
          onClick={() => onOpenEstimate(service.title)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm md:text-base shadow-lg transition-all cursor-pointer active:scale-[0.98]"
        >
          <span>Get Free {service.title} Estimate</span>
          <RealisticSparklesIcon className="w-4 h-4 text-blue-200" />
        </button>
      </div>
    </div>
  );
};

interface StandardServiceCardProps {
  service: ServiceCategory;
  index: number;
  onOpenEstimate: (serviceTitle?: string) => void;
}

const StandardServiceCard: React.FC<StandardServiceCardProps> = ({ service, index, onOpenEstimate }) => {
  const { ref, isInView } = useInViewAnimation(0.1);

  return (
    <div
      ref={ref}
      id={`service-card-${service.id}`}
      style={{ animationDelay: `${(index % 3) * 0.08}s` }}
      className={`bg-white rounded-2xl p-6 md:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between will-change-transform ${
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
          className="font-heading text-xl md:text-2xl font-semibold text-slate-900 tracking-tight mb-3"
        >
          {service.title}
        </h3>

        {/* Minimal Description with Inter body font and leading-relaxed */}
        <p
          id={`service-desc-${service.id}`}
          className="font-body text-base text-slate-800 leading-relaxed font-normal mb-6"
        >
          {service.description}
        </p>
      </div>

      {/* Action Button */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <button
          id={`btn-estimate-${service.id}`}
          type="button"
          onClick={() => onOpenEstimate(service.title)}
          className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-medium transition-colors cursor-pointer active:scale-[0.98]"
        >
          <span>Request Estimate</span>
          <RealisticSparklesIcon className="w-3.5 h-3.5 text-slate-500" />
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
  onOpenContact?: () => void;
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

  const handleCallOrText = () => {
    window.open('tel:2103808066', '_self');
  };

  return (
    <div className="min-h-screen w-full bg-[#F4F9FF] text-[#051A24] flex flex-col items-center relative overflow-x-hidden selection:bg-[#051A24] selection:text-white">
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

      {/* Hero Section (Minimalist) */}
      <section
        ref={heroRef}
        id="services-hero-section"
        className="w-full py-8 px-4 md:pt-16 md:pb-12 md:px-12 mx-auto flex flex-col items-center text-center"
      >
        {/* Tagline */}
        <p
          id="services-hero-tagline"
          style={{ animationDelay: '0.1s' }}
          className={`font-mono text-sm text-[#051A24] uppercase tracking-widest font-medium mb-3 will-change-transform ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Mom's House Cleaning
        </p>

        {/* Heading: Comprehensive Cleaning Solutions */}
        <h1
          id="services-hero-heading"
          style={{ animationDelay: '0.2s' }}
          className={`font-heading text-[38px] sm:text-[64px] md:text-[80px] leading-tight text-[#0D212C] font-semibold tracking-tight max-w-4xl mb-6 will-change-transform ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Comprehensive <span className="block sm:inline">Cleaning Solutions.</span>
        </h1>

        {/* Button: Get a Free Estimate */}
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
            onClick={() => onOpenEstimate('Comprehensive Services')}
            className="shadow-md"
          >
            Get a Free Estimate
          </Button>
        </div>
      </section>

      {/* TASK 2: ARCHITECT THE "FEATURED" TOP BLOCK */}
      {/* Immediately below the page's main H1 header, 2-column grid specifically for Featured services */}
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
              onOpenEstimate={onOpenEstimate}
            />
          ))}
        </div>
      </section>

      {/* Subtle Section Divider */}
      <div className="w-full max-w-7xl px-4 md:px-12 mx-auto my-6 md:my-8">
        <div className="border-t border-slate-200/80" />
      </div>

      {/* Interactive Hybrid Service Search & Filtering Engine */}
      <ServiceSearch onOpenEstimate={onOpenEstimate} />

      {/* TASK 3: ARCHITECT THE "STANDARD" BOTTOM BLOCK */}
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

        {/* Minimal clean 3-column grid below header */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {standardServicesData.map((service, index) => (
            <StandardServiceCard
              key={service.id}
              service={service}
              index={index}
              onOpenEstimate={onOpenEstimate}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer
        onOpenEstimate={() => onOpenEstimate('General Inquiries')}
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
