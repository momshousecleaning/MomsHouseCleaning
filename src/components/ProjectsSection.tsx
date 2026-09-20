import React from 'react';
import { RealisticSparklesIcon, RealisticCalendarIcon } from './RealisticIcons';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface ProjectItemData {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const PROJECTS: ProjectItemData[] = [
  {
    id: 'project-kitchen-deep-clean',
    title: 'Kitchen Sanitization & Detail Deep Clean',
    description: 'Pristine countertops, degreased range hoods, and sanitized sink fixtures.',
    image:
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80',
    alt: 'Pristine modern kitchen countertop and sink deep cleaned in San Antonio',
  },
  {
    id: 'project-living-room',
    title: 'Living Room Detail Staging & Housekeeping',
    description: 'Comprehensive dusting, baseboard detailing, and vacuumed luxury upholstery.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    alt: 'Spotless residential living room detail cleaning and staging',
  },
  {
    id: 'project-carpet-extraction',
    title: 'High-Powered Carpet Fiber Extraction',
    description: 'Deep heat steam cleaning removing stubborn stains, pet dander, and odors.',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80',
    alt: 'Professional high-powered carpet cleaning and fiber extraction in San Antonio TX',
  },
  {
    id: 'project-bathroom-turnover',
    title: 'Move-Out Bathroom Detailing & Sanitization',
    description: 'Hospital-grade sanitization of glass enclosures, grout, tile, and vanities.',
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80',
    alt: 'Meticulous move-out bathroom sanitization and fixture detailing',
  },
  {
    id: 'project-floor-polishing',
    title: 'Hard Surface Floor Scrubbing & Polishing',
    description: 'Restorative tile and hardwood scrubbing revealing high-gloss natural warmth.',
    image:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80',
    alt: 'Immaculate hard surface floor scrubbing and polishing service',
  },
  {
    id: 'project-lawn-edging',
    title: 'Residential Lawn Mowing & Curb Edging',
    description: 'Crisp perimeter edging, precise grass trimming, and complete leaf clearing.',
    image:
      'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1200&q=80',
    alt: 'Well-manicured residential lawn mowing and curb edging in San Antonio',
  },
];

const ProjectCard: React.FC<{ item: ProjectItemData; index: number }> = ({
  item,
  index,
}) => {
  const { ref, isInView } = useInViewAnimation(0.15);

  return (
    <div
      id={`project-item-${item.id}`}
      ref={ref}
      className={`w-full flex flex-col ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Offset text block */}
      <div className="ml-2 sm:ml-12 md:ml-28 mb-3 md:mb-6 max-w-xl">
        <h3
          id={`project-title-${item.id}`}
          className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-2"
        >
          {item.title}
        </h3>
        <p
          id={`project-desc-${item.id}`}
          className="text-base md:text-lg text-slate-800 leading-relaxed font-normal"
        >
          {item.description}
        </p>
      </div>

      {/* Full-width image below */}
      <div className="w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-sm border border-slate-200/80 group">
        <img
          id={`project-img-${item.id}`}
          src={item.image}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80';
          }}
          className="w-full h-[240px] sm:h-[340px] md:h-[480px] object-cover rounded-2xl md:rounded-3xl transition-transform duration-700 md:group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const { ref: summaryRef, isInView: summaryInView } = useInViewAnimation(0.1);

  return (
    <section
      id="specialty-projects-section"
      className="w-full py-8 px-4 md:py-24 md:px-12 mx-auto"
      aria-label="Specialty Cleaning Projects"
    >
      {/* Core Services Summary Card */}
      <div
        ref={summaryRef}
        style={{ animationDelay: '0.1s' }}
        className={`w-full mb-8 md:mb-16 rounded-2xl md:rounded-3xl bg-white border border-slate-200/80 p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 ${
          summaryInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-slate-600 font-semibold">
            <RealisticCalendarIcon className="w-4 h-4" />
            <span>Service Flexibility</span>
          </div>
          <h2 className="font-heading text-xl sm:text-2xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-2 md:mb-3">
            Custom Scheduled Housekeeping
          </h2>
          <p className="text-base md:text-lg text-slate-800 leading-relaxed font-normal">
            Flexible housekeeping tailored to your personal schedule and preferences.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-900 shadow-sm">
          <RealisticSparklesIcon className="w-4 h-4" />
          <span>Flexible Scheduling</span>
        </div>
      </div>

      <div className="flex flex-col gap-10 md:gap-20">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} item={project} index={index} />
        ))}
      </div>
    </section>
  );
};

