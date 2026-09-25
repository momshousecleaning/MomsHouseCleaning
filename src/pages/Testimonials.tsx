import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RealisticArrowLeftIcon, RealisticQuoteIcon, RealisticStarIcon } from '../components/RealisticIcons';
import { Button } from '../components/Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Footer } from '../components/Footer';
import { CopyrightBar } from '../components/CopyrightBar';
import { BottomNav } from '../components/BottomNav';

export const testimonialsData = [
  { name: "John D.", text: "Mom's House Cleaning is an awesome company to work with! Second time using this service and my house is brand new again. Thank you for the great service!" },
  { name: "Kennedy M.", text: "I can't say enough good things! From top to bottom, everything was spotless and fresh. The team was thorough, professional, and paid attention to every little detail. Highly recommend." },
  { name: "Rico", text: "I use them for my short-term rental cleaning, and I couldn't be more impressed! Responsive, accommodating, and ensuring my rental was spotless for guests." },
  { name: "Tanya", text: "Used them twice and plan on using them again. Communication is great, price is affordable. I have a dog and you wouldn't even know it after they clean." },
  { name: "Laura W.", text: "Glen and Lisa are wonderful! Very pleasant and informative. The ladies they sent were very thorough and friendly." },
  { name: "John E.", text: "I've used Mom's Housecleaning for years. Julia and Wendy came out this week and did an outstanding job in a couple of hours." },
  { name: "Mara S.", text: "All I can say is WOW! Amazing people, kind, courteous and very efficient. They work with your schedule." },
  { name: "Angela S.", text: "Joann and Jasmine are amazing!!! So pleased with their work, friendly and understanding. I love their work ethic." },
  { name: "John & Patricia", text: "Amelia and Chrystal showed up early, listened and did a stellar job cleaning every surface of our 2-story house to prepare us to move in." },
  { name: "Tim L.", text: "Their prices are reasonable, the work is exceptional. I've never gotten the consistency that I get with Mom's. Currently cleaning two of my properties." },
  { name: "Amanda", text: "Julie and Beverly came to my rescue after I purchased my first home! Emailed for a quote, they came the same day, and their work was impeccable." },
  { name: "Mimi", text: "Caitlin and Elizabeth were absolutely great! Got on their hands and knees and scrubbed floors. I'm not breathing dust anymore, everything smells fresh." },
  { name: "Janie & Nick", text: "Thank you so much for sending Sarah out! She did an excellent job and was a pleasure to work with." },
  { name: "Kristin", text: "They did such an excellent job, the house is spotless. Far superior service to other companies we've used and exceeded my expectations." },
  { name: "Dante' & Angel", text: "Cynthia and her team were lifesavers after my surgery! Professional, respectful, and unbeatable price. Letting all my military co-workers know about you!" },
  { name: "Lindsay", text: "Extremely happy with the cleaning Elsa did today. She dove right into it, on-time, professional, and detailed." },
  { name: "Amy M.", text: "First cleaning by Liz yesterday, the entire family is thoroughly impressed! Charged half of what other companies do for a much better job." },
  { name: "Judy D.", text: "The young lady (Beth) who cleaned my house was very, very good. Excellent job, professional, and polite." },
  { name: "Margaret R.", text: "Just want to thank you for all the extra things you have done for me since 2004, besides keeping this house spotless." },
  { name: "Ray and Doris S.", text: "Mom's House Cleaning has been cleaning our home since 2007. We highly recommend their service." },
  { name: "Jim & Ramona C.", text: "Glen and Lisa have been cleaning our house since March 2008. They are a nice professional couple that does the job to OUR satisfaction." },
  { name: "Andrea B.", text: "I am a new client and am delighted with the way my house looks, feels, and smells. Impressed with their sincere effort." },
  { name: "Karen A.", text: "Our family has used Mom's since 2002. Reliable, professional, and very trustworthy. Recommend without hesitation." },
  { name: "Pat P.", text: "Just a note to say how great you do cleaning my home. Punctual, pleasant and trustworthy." },
  { name: "Joyce C.", text: "Locating persons that you can trust in your home is critical, and you guys have made that easy. Keep up the good work." },
  { name: "Jennifer S.", text: "Best service I have used. They even find time to take my dogs out on a leash to go to the bathroom. Very friendly." },
  { name: "Cecelia G.", text: "Blessed to have found them. I know the job will be done right without standing right over them." },
  { name: "Norm & Alice A.", text: "Thank You for your continuously outstanding cleaning job you have done for our home." },
  { name: "Michelle J.", text: "Great quality of service. Punctual, friendly, and provide excellent customer service." }
];

interface TestimonialsPageProps {
  onNavigateHome: () => void;
  onNavigateServices: () => void;
  onNavigateContact: () => void;
  onNavigateAbout: () => void;
  onOpenEstimate: (serviceTitle?: string) => void;
  onOpenPhotos?: () => void;
  onOpenPayment?: () => void;
}

export const Testimonials: React.FC<TestimonialsPageProps> = ({
  onNavigateHome,
  onNavigateServices,
  onNavigateContact,
  onNavigateAbout,
  onOpenEstimate,
  onOpenPhotos = () => {},
  onOpenPayment = () => {},
}) => {
  const { ref: heroRef, isInView: heroInView } = useInViewAnimation(0.05);
  const { ref: gridRef, isInView: gridInView } = useInViewAnimation(0.05);

  const colorMatrix = [
    "bg-white text-[#0D212C]", // 0: Classic Pristine White
    "bg-[#051A24] text-[#F6FCFF]", // 1: Deep Brand Slate
    "bg-[#F4F1ED] text-[#0D212C]", // 2: Warm Pearl/Sand (Premium neutral)
    "bg-[#1A2C35] text-[#F6FCFF]"  // 3: Muted Forest/Teal (Subtle dark shift)
  ];

  const handleCallOrText = () => {
    window.open('tel:+12103808066', '_self');
  };

  return (
    <div className="min-h-screen w-full bg-[#F4F9FF] text-[#051A24] flex flex-col items-center relative overflow-x-hidden selection:bg-[#051A24] selection:text-white">
      {/* Route-specific Dynamic Head Management & Canonical Self-Reference */}
      <Helmet>
        <title>Client Reviews & Testimonials | Mom's House Cleaning San Antonio</title>
        <meta
          name="description"
          content="Read verified client reviews and ratings for Mom's House Cleaning in San Antonio, TX. Discover why San Antonio homeowners trust our thorough, reliable maids."
        />
        <link rel="canonical" href="https://www.momshousecleaning.com/testimonials/" />
        <meta property="og:title" content="Client Reviews & Testimonials | Mom's House Cleaning San Antonio" />
        <meta
          property="og:description"
          content="Read verified client reviews and ratings for Mom's House Cleaning in San Antonio, TX. Discover why San Antonio homeowners trust our thorough, reliable maids."
        />
        <meta property="og:url" content="https://www.momshousecleaning.com/testimonials/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Client Reviews & Testimonials | Mom's House Cleaning San Antonio" />
        <meta
          name="twitter:description"
          content="Read verified client reviews and ratings for Mom's House Cleaning in San Antonio, TX. Discover why San Antonio homeowners trust our thorough, reliable maids."
        />
      </Helmet>

      {/* Breadcrumb / Back Navigation */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 mx-auto pt-6 pb-2 flex items-center justify-between">
        <button
          id="btn-testimonials-back-home"
          onClick={onNavigateHome}
          className="flex items-center gap-2 text-xs md:text-sm font-mono uppercase tracking-wider text-[#051A24]/80 hover:text-[#051A24] transition-colors cursor-pointer py-1.5 px-3 rounded-full bg-slate-100/80 hover:bg-slate-200/80"
        >
          <RealisticArrowLeftIcon className="w-4 h-4" />
          <span>Home / Client Testimonials</span>
        </button>

        <span className="text-xs font-mono text-[#051A24]/60 uppercase tracking-widest hidden sm:inline-block">
          San Antonio, TX • 100% Verified Reviews
        </span>
      </div>

      {/* TASK 1: HERO SECTION (Centered) */}
      <section
        ref={heroRef}
        id="testimonials-hero-section"
        className="w-full py-8 px-4 md:py-24 md:px-12 mx-auto flex flex-col items-center text-center"
      >
        <p
          id="testimonials-hero-tagline"
          style={{ animationDelay: '0.1s' }}
          className={`font-mono text-xs md:text-sm text-[#051A24] uppercase tracking-widest font-medium mb-2 md:mb-3 will-change-transform ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Mom's House Cleaning
        </p>

        <h1
          id="testimonials-hero-heading"
          style={{ animationDelay: '0.2s' }}
          className={`font-heading text-[38px] sm:text-[64px] md:text-[80px] leading-tight text-[#0D212C] font-semibold tracking-tight max-w-4xl will-change-transform ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          We promise and guarantee <span className="block sm:inline">high-quality work.</span>
        </h1>

        <p
          id="testimonials-hero-subtitle"
          style={{ animationDelay: '0.3s' }}
          className={`font-body text-base md:text-lg text-slate-800 max-w-lg mx-auto mt-4 md:mt-6 leading-relaxed will-change-transform ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Real feedback from our satisfied clients across San Antonio.
        </p>

        <div
          style={{ animationDelay: '0.35s' }}
          className={`flex items-center justify-center gap-2.5 sm:gap-3 mt-6 md:mt-8 will-change-transform ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <Button
            id="btn-testimonials-estimate"
            variant="primary"
            size="md"
            onClick={() => onOpenEstimate('Initial Deep Clean')}
            className="shadow-md"
          >
            Get a Free Estimate
          </Button>
          <Button
            id="btn-testimonials-contact"
            variant="tertiary"
            size="md"
            onClick={onNavigateContact}
          >
            Contact Us
          </Button>
        </div>
      </section>

      {/* TASK 3 & 4: CSS MASONRY GRID ARCHITECTURE & CARDS */}
      <section
        ref={gridRef}
        id="testimonials-masonry-section"
        className="w-full py-8 px-4 md:py-24 md:px-12 mx-auto"
      >
        <div
          className={`columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6 transition-opacity duration-700 ${
            gridInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {testimonialsData.map((item, index) => {
            const currentTheme = colorMatrix[index % 4];
            const isDark = (index % 4 === 1) || (index % 4 === 3);
            const isSand = index % 4 === 2;

            return (
              <div
                key={`${item.name}-${index}`}
                id={`testimonial-card-${index}`}
                style={{ animationDelay: `${(index % 6) * 0.08}s` }}
                className={`break-inside-avoid rounded-2xl md:rounded-3xl p-6 md:p-8 mb-4 md:mb-6 flex flex-col justify-between transition-transform duration-300 md:hover:-translate-y-1 will-change-transform ${currentTheme} ${
                  isDark
                    ? index % 4 === 1
                      ? 'shadow-sm border border-[#051A24]'
                      : 'shadow-sm border border-[#1A2C35]'
                    : isSand
                    ? 'shadow-sm border border-[#E7E2DA]'
                    : 'shadow-sm border border-slate-200/80'
                }`}
              >
                <div>
                  {/* Star Rating Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <RealisticStarIcon
                          key={i}
                          className="w-4 h-4"
                        />
                      ))}
                    </div>
                    <RealisticQuoteIcon
                      className="w-5 h-5 opacity-40"
                    />
                  </div>

                  {/* Review Quote */}
                  <p
                    className={`font-body text-base leading-relaxed my-4 ${
                      isDark ? 'text-slate-200' : 'text-slate-800'
                    }`}
                  >
                    "{item.text}"
                  </p>
                </div>

                {/* Reviewer Name */}
                <div
                  className={`pt-4 border-t flex items-center justify-between mt-auto ${
                    isDark ? 'border-white/10' : isSand ? 'border-[#E5DFD6]' : 'border-slate-100'
                  }`}
                >
                  <span
                    className={`font-semibold text-base tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {item.name}
                  </span>
                  <span
                    className={`text-xs font-mono uppercase tracking-wider ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    Verified Client
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <Footer
        onOpenEstimate={() => onOpenEstimate('General Inquiries')}
        onOpenServices={onNavigateServices}
        onOpenAbout={onNavigateAbout}
        onOpenPhotos={onOpenPhotos}
        onOpenTestimonials={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPayment={onOpenPayment}
        onOpenContact={onNavigateContact}
      />

      {/* Copyright Bar */}
      <CopyrightBar />

      {/* Fixed Bottom Nav */}
      <BottomNav onCallOrText={handleCallOrText} />
    </div>
  );
};
