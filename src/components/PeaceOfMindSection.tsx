import React from 'react';
import { RealisticCheckCircle2Icon } from './RealisticIcons';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import logo01 from '../images/logo01.webp';
import logo02 from '../images/logo02.webp';
import logo03 from '../images/logo03.webp';
import logo04 from '../images/logo04.webp';

const PEACE_OF_MIND_ITEMS = [
  'Fully licensed, bonded, and insured for your protection.',
  'Officially registered with Bexar County, Texas.',
  'Angie Certified with verified customer reviews.',
  'Professional local references available upon request.',
];

const AWARDS = [
  {
    id: 'angies-2019',
    title: "Angie's List 2019 Super Service Award",
    year: '2019',
    badge: 'Super Service',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
    subtitle: 'Verified customer satisfaction & excellence',
    image: logo01,
  },
  {
    id: 'homeadvisor-2021',
    title: 'Best of Home Advisor 2021 Award',
    year: '2021',
    badge: 'Top Rated',
    badgeClass: 'bg-blue-50 text-blue-800 border-blue-200',
    subtitle: 'Top-rated local home cleaning provider',
    image: logo02,
  },
  {
    id: 'best-texas-2024',
    title: 'Best Texas Cleaning Service in 2024',
    year: '2024',
    badge: 'State Winner',
    badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    subtitle: 'Statewide housekeeping & maid excellence',
    image: logo03,
  },
  {
    id: 'best-sa-2024',
    title: 'Best San Antonio Cleaning Service in 2024',
    year: '2024',
    badge: 'City #1',
    badgeClass: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    subtitle: 'Voted #1 house cleaning in Bexar County',
    image: logo04,
  },
];

export const PeaceOfMindSection: React.FC = () => {
  const { ref, isInView } = useInViewAnimation(0.1);

  return (
    <section
      id="peace-of-mind-section"
      ref={ref}
      className="w-full py-8 px-4 md:py-24 md:px-12 mx-auto max-w-7xl"
    >
      <div className="flex flex-col mb-6 md:mb-10">
        <span
          style={{ animationDelay: '0.1s' }}
          className={`font-mono text-xs uppercase tracking-widest text-[#051A24]/60 font-semibold mb-1.5 md:mb-2 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Trust & Credentials
        </span>
        <h2
          id="peace-of-mind-heading"
          style={{ animationDelay: '0.2s' }}
          className={`font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0D212C] tracking-tight ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Your Peace of Mind
        </h2>
      </div>

      <div className="flex flex-col gap-8 md:gap-12">
        {/* Protection Checklist Container */}
        <div
          id="peace-checklist-container"
          style={{ animationDelay: '0.3s' }}
          className={`w-full bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div className="md:w-1/3">
            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-slate-900 mb-2">
              Full Protection Standards
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
              Fully licensed, bonded, insured, and registered with Bexar County for complete homeowner security.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full w-fit font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>100% Bonded & Insured</span>
            </div>
          </div>

          <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {PEACE_OF_MIND_ITEMS.map((item, index) => (
                <li
                  key={index}
                  id={`peace-item-${index}`}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 leading-relaxed bg-slate-50/70 p-3 rounded-xl border border-slate-100/90"
                >
                  <RealisticCheckCircle2Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-emerald-600 mt-0.5" />
                  <span className="font-medium font-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* TASK 2 & 3: EXPANDED 5-CARD AWARDS GRID */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
              Verified Industry & Community Awards
            </h3>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest hidden sm:inline-block">
              5 Recognized Honors
            </span>
          </div>

          <div
            id="awards-list-container"
            style={{ animationDelay: '0.4s' }}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            {/* Cards 1 to 4: Existing Awards matching structural DNA */}
            {AWARDS.map((award, index) => (
              <div
                key={award.id}
                id={`award-card-${index}`}
                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between relative"
              >
                {/* Badge Pill (Top Right) */}
                <span
                  className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                    award.badgeClass || 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  {award.badge}
                </span>

                {/* Centered Square Badge Image */}
                <div className="flex items-center justify-center my-3">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="h-28 w-28 object-contain mx-auto my-3"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div>
                  <h4 className="font-heading text-base font-bold text-gray-900 mt-2">
                    {award.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 font-body">
                    {award.subtitle}
                  </p>
                  <span className="text-xs font-medium text-slate-400 mt-3 inline-block">
                    Verified Recognition
                  </span>
                </div>
              </div>
            ))}

            {/* Card 5: Nextdoor 2026 Award Card */}
            <div
              id="award-card-nextdoor-2026"
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between relative"
            >
              {/* Badge Pill (Top Right) */}
              <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-100">
                Neighborhood Fave
              </span>

              {/* Image Container: Centered square badge image */}
              <div className="flex items-center justify-center my-3">
                <img
                  src="/awards2026.png"
                  alt="2026 Nextdoor Fave Winner"
                  className="h-28 w-28 object-contain mx-auto my-3"
                  loading="lazy"
                />
              </div>

              {/* Title & Subtitle */}
              <div>
                <h4 className="font-heading text-base font-bold text-gray-900 mt-2">
                  2026 Nextdoor Fave Winner
                </h4>
                <p className="text-xs text-gray-500 mt-1 font-body">
                  Voted by neighbors on Nextdoor
                </p>

                {/* Footer Link */}
                <a
                  href="https://nextdoor.com/fave_awards_winners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-600 hover:underline mt-3 inline-flex items-center gap-1"
                >
                  <span>Verify on Nextdoor</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
