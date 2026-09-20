import React from 'react';
import {
  RealisticArrowLeftIcon,
  RealisticRadioIcon,
  RealisticVolume2Icon,
  RealisticSparklesIcon,
  RealisticShieldCheckIcon,
  RealisticUsersIcon,
} from '../components/RealisticIcons';
import { Button } from '../components/Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Footer } from '../components/Footer';
import { CopyrightBar } from '../components/CopyrightBar';
import { BottomNav } from '../components/BottomNav';
import img01 from '../images/01.webp';

interface AboutAudioPlayerProps {
  id: string;
  station: string;
  title: string;
  description: string;
  audioSrc?: string;
}

const AboutAudioPlayer: React.FC<AboutAudioPlayerProps> = ({
  id,
  station,
  title,
  description,
  audioSrc = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
}) => {
  return (
    <div
      id={id}
      className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/70 flex flex-col justify-between transition-all duration-300 hover:shadow-md"
    >
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex p-1.5 rounded-full bg-slate-100">
            <RealisticRadioIcon className="w-4 h-4" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#273C46] font-medium">
            {station}
          </span>
        </div>

        <h4 className="font-heading text-xl md:text-2xl font-semibold text-[#0D212C] tracking-tight mb-3">
          {title}
        </h4>

        <p className="text-sm text-[#273C46] leading-relaxed font-normal mb-4">
          {description}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
        <audio
          src={audioSrc}
          controls
          className="w-full h-10 accent-[#051A24] rounded-lg"
        />

        <div className="flex items-center justify-between text-xs font-mono text-[#051A24]/70 pt-1">
          <span className="flex items-center gap-1.5">
            <RealisticVolume2Icon className="w-4 h-4" />
            San Antonio Airwaves
          </span>
          <span className="text-[#051A24] font-medium">Broadcast Quality</span>
        </div>
      </div>
    </div>
  );
};

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigateServices: () => void;
  onNavigateContact: () => void;
  onOpenEstimate: (serviceTitle?: string) => void;
  onOpenPhotos?: () => void;
  onOpenTestimonials?: () => void;
  onOpenPayment?: () => void;
}

export const About: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onNavigateServices,
  onNavigateContact,
  onOpenEstimate,
  onOpenPhotos = () => {},
  onOpenTestimonials = () => {},
  onOpenPayment = () => {},
}) => {
  const { ref: heroRef, isInView: heroInView } = useInViewAnimation(0.05);
  const { ref: narrativeRef, isInView: narrativeInView } = useInViewAnimation(0.1);
  const { ref: mediaRef, isInView: mediaInView } = useInViewAnimation(0.1);
  const { ref: philosophyRef, isInView: philosophyInView } = useInViewAnimation(0.1);
  const { ref: trustCardsRef, isInView: trustCardsInView } = useInViewAnimation(0.1);

  const handleCallOrText = () => {
    window.open('tel:+12103808066', '_self');
  };

  return (
    <div className="min-h-screen w-full bg-[#F4F9FF] text-[#051A24] flex flex-col items-center relative overflow-x-hidden selection:bg-[#051A24] selection:text-white">
      {/* Breadcrumb / Back Navigation */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 mx-auto pt-6 pb-2 flex items-center justify-between">
        <button
          id="btn-about-back-home"
          onClick={onNavigateHome}
          className="flex items-center gap-2 text-xs md:text-sm font-mono uppercase tracking-wider text-[#051A24]/80 hover:text-[#051A24] transition-colors cursor-pointer py-1.5 px-3 rounded-full bg-slate-100/80 hover:bg-slate-200/80"
        >
          <RealisticArrowLeftIcon className="w-4 h-4" />
          <span>Home / About Us</span>
        </button>

        <span className="text-xs font-mono text-[#051A24]/60 uppercase tracking-widest hidden sm:inline-block">
          San Antonio, TX • Since 1999
        </span>
      </div>

      {/* TASK 1: HERO SECTION (Minimalist & Centered) */}
      <section
        ref={heroRef}
        id="about-hero-section"
        className="w-full py-8 px-4 md:py-24 md:px-12 mx-auto flex flex-col items-center text-center"
      >
        <p
          id="about-hero-tagline"
          style={{ animationDelay: '0.1s' }}
          className={`font-mono text-xs md:text-sm text-[#051A24] uppercase tracking-widest font-medium mb-2 md:mb-3 will-change-transform ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Family Owned & Operated Since 1999
        </p>

        <h1
          id="about-hero-heading"
          style={{ animationDelay: '0.2s' }}
          className={`font-heading text-[38px] sm:text-[64px] md:text-[80px] leading-tight text-[#0D212C] font-semibold tracking-tight max-w-4xl will-change-transform ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          The story behind <span className="block sm:inline">Mom's House Cleaning.</span>
        </h1>
      </section>

      {/* TASK 2: THE FOUNDERS' NARRATIVE (2-COLUMN EDITORIAL) */}
      <section
        ref={narrativeRef}
        id="about-founders-narrative"
        className="w-full py-8 px-4 md:py-24 md:px-12 mx-auto"
      >
        <div
          style={{ animationDelay: '0.2s' }}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center will-change-transform ${
            narrativeInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {/* LEFT COLUMN (The Text) */}
          <div
            id="founders-text-column"
            className="flex flex-col gap-6 text-[#051A24] text-base md:text-lg leading-relaxed font-normal"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#051A24]/70 font-semibold mb-1">
              <RealisticUsersIcon className="w-4 h-4" />
              <span>Meet Glen & Lisa Talley</span>
            </div>

            <p id="founders-p1" className="text-[#051A24]">
              Hello, I am Glen Talley. My wife, Lisa, and I are the owners of Mom's House Cleaning. Mom's House Cleaning is a family-owned business which I started in 1999 with my mother who has since retired.
            </p>

            <p id="founders-p2" className="text-[#273C46]">
              Now Lisa and I are operating Mom's House Cleaning together. We are active members of our community. We are members of C.O.P. (Cellular on Patrol). Lisa is president, and I am secretary of our neighborhood association.
            </p>

            <p id="founders-p3" className="text-[#051A24] font-medium border-l-2 border-[#051A24] pl-4 italic">
              Lisa and I are Christians, and we operate our business with integrity, honesty, and gratefulness.
            </p>

            <div className="pt-2">
              <Button
                id="btn-about-hero-estimate"
                variant="primary"
                size="md"
                onClick={() => onOpenEstimate('Initial Deep Clean')}
                className="w-full sm:w-auto shadow-md"
              >
                Get a Free Estimate
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN (The Image) */}
          <div id="founders-image-column" className="flex flex-col items-center">
            <div className="w-full overflow-hidden rounded-[32px] shadow-lg border border-slate-100 bg-[#F6FCFF] aspect-square">
              <img
                id="founders-image"
                src={img01}
                alt="Glen and Lisa Talley, owners of Mom's House Cleaning in San Antonio, TX"
                loading="lazy"
                decoding="async"
                className="w-full h-full aspect-square object-cover rounded-[32px] hover:scale-105 transition-transform duration-700 will-change-transform"
              />
            </div>
            <p
              id="founders-image-caption"
              className="text-sm text-[#273C46] italic text-center mt-4 font-normal"
            >
              Glen and Lisa Talley, Owners of Mom's House Cleaning
            </p>
          </div>
        </div>
      </section>

      {/* TASK 3: MEDIA & SPONSORSHIPS (AUDIO CARDS) */}
      <section
        ref={mediaRef}
        id="about-community-voices"
        className="w-full bg-[#F6FCFF] py-20 px-6 border-y border-slate-200/60"
      >
        <div
          style={{ animationDelay: '0.15s' }}
          className={`w-full px-4 sm:px-8 md:px-12 lg:px-16 mx-auto flex flex-col items-center will-change-transform ${
            mediaInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <RealisticSparklesIcon className="w-4 h-4" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#051A24]/70 font-semibold">
              Radio & Broadcast Media
            </span>
          </div>

          <h2
            id="heading-community-voices"
            className="font-heading text-3xl md:text-4xl text-[#051A24] font-semibold tracking-tight text-center mb-4"
          >
            Community Voices
          </h2>

          <p className="text-sm md:text-base text-[#273C46] text-center max-w-lg mb-12 font-normal">
            Listen to our official broadcast radio commercials and community anti-drug campaign sponsorships across San Antonio airwaves.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Card 1 */}
            <AboutAudioPlayer
              id="audio-commercial-kslr"
              station="KSLR 630 AM • Christian Radio"
              title="Official Radio Commercial"
              description="Here is a Mom's House Cleaning audio commercial that was on KSLR 630 AM Christian Radio:"
            />

            {/* Card 2 */}
            <AboutAudioPlayer
              id="audio-commercial-ktkr"
              station="KTKR 760 AM • Ticket Sports Radio"
              title="Anti-Drug Community Campaign"
              description="Here is a Mom's House Cleaning audio clip – It is an anti-drug campaign commercial that ran on KTKR 760 AM Ticket Sports Radio that Glen and Lisa helped sponsor."
            />
          </div>
        </div>
      </section>

      {/* TASK 4: THE CLEANING PHILOSOPHY & GUARANTEES */}
      <section
        ref={philosophyRef}
        id="about-cleaning-philosophy"
        className="w-full px-4 sm:px-8 md:px-12 lg:px-16 mx-auto py-20 flex flex-col items-center"
      >
        <div
          style={{ animationDelay: '0.2s' }}
          className={`max-w-2xl mx-auto text-center gap-6 flex flex-col will-change-transform ${
            philosophyInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-slate-600 font-semibold">
            Our Cleaning Philosophy
          </span>

          <h2 className="font-heading text-3xl md:text-4xl text-slate-900 font-semibold tracking-tight">
            Rewarding You With Extra Time for Family
          </h2>

          <p id="philosophy-p1" className="text-base md:text-lg text-slate-800 leading-relaxed font-normal">
            Customized residential cleaning designed to give you valuable time back.
          </p>

          <p id="philosophy-p2" className="text-base md:text-lg text-slate-800 leading-relaxed font-normal">
            No contracts required. We bring supplies and stay until done.
          </p>
        </div>

        {/* TASK 5: TRUST & REASSURANCE CARDS (REUSING PRICING UI) */}
        <div
          ref={trustCardsRef}
          id="about-trust-reassurance-cards"
          style={{ animationDelay: '0.3s' }}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full mt-12 will-change-transform ${
            trustCardsInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {/* Card 1 (Dark #051A24 bg, Text #F6FCFF) */}
          <div
            id="about-card-guarantee-dark"
            className="bg-[#051A24] text-[#F6FCFF] rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm transition-transform duration-300 hover:-translate-y-1 will-change-transform"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <RealisticSparklesIcon className="w-5 h-5" />
                <h3 className="font-heading text-2xl md:text-3xl text-[#F6FCFF] font-semibold tracking-tight">
                  Our Guarantee
                </h3>
              </div>

              <p className="text-base md:text-lg text-slate-200 leading-relaxed font-normal mb-6">
                We promptly re-clean anything missed within a 24-hour notice.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs text-[#E0EBF0]/70 uppercase tracking-widest">
                24-Hour Notice Guarantee
              </span>
              <Button
                variant="primary"
                size="sm"
                onClick={() => onOpenEstimate('Guarantee Program')}
                className="bg-white !text-[#051A24] hover:!bg-[#F6FCFF] shadow-sm"
              >
                Get Estimate
              </Button>
            </div>
          </div>

          {/* Card 2 (Light White bg, Text #051A24) */}
          <div
            id="about-card-safety-light"
            className="bg-white text-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm border border-slate-200/80 transition-transform duration-300 hover:-translate-y-1 will-change-transform"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <RealisticShieldCheckIcon className="w-5 h-5" />
                <h3 className="font-heading text-2xl md:text-3xl text-slate-900 font-semibold tracking-tight">
                  Safety & Protection
                </h3>
              </div>

              <p className="text-base md:text-lg text-slate-800 leading-relaxed font-normal mb-6">
                Fully bonded, insured, and verified with complete background checks.
              </p>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60 mb-6">
                <p className="text-xs font-mono text-slate-900 uppercase tracking-wider font-semibold mb-1">
                  Community Discount Program:
                </p>
                <p className="text-sm text-slate-800 leading-relaxed font-normal">
                  Special discounts for military, first responders, and senior citizens.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="font-mono text-xs text-slate-600 uppercase tracking-widest">
                Insured & Background Checked
              </span>
              <Button
                variant="tertiary"
                size="sm"
                onClick={onNavigateContact}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        onOpenEstimate={() => onOpenEstimate('General Inquiries')}
        onOpenServices={onNavigateServices}
        onOpenAbout={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPhotos={onOpenPhotos}
        onOpenTestimonials={onOpenTestimonials}
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
