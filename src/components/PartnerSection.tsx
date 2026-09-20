import React, { useState, useRef, useCallback } from 'react';
import {
  RealisticSparklesIcon,
  RealisticDropletsIcon,
  RealisticStarIcon,
  RealisticSunMediumIcon,
  RealisticCheckCircle2Icon,
  RealisticPlayIcon,
  RealisticPauseIcon,
  RealisticVolume2Icon,
} from './RealisticIcons';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface FloatingTrailItem {
  id: number;
  x: number;
  y: number;
  rotation: number;
  type: number;
}

const TRAIL_ICONS = [
  { icon: RealisticSparklesIcon, bg: 'bg-amber-50 border-amber-200', text: 'Spotless' },
  { icon: RealisticDropletsIcon, bg: 'bg-sky-50 border-sky-200', text: 'Fresh' },
  { icon: RealisticStarIcon, bg: 'bg-emerald-50 border-emerald-200', text: '5-Star Clean' },
  { icon: RealisticSunMediumIcon, bg: 'bg-orange-50 border-orange-200', text: 'Sanitized' },
  { icon: RealisticCheckCircle2Icon, bg: 'bg-blue-50 border-blue-200', text: 'Bonded & Insured' },
];

interface VerticalVideoItem {
  id: string;
  url: string;
  title: string;
  subtitle: string;
  tag: string;
}

const VERTICAL_VIDEOS: VerticalVideoItem[] = [
  {
    id: 'video-clean-magic',
    url: 'https://res.cloudinary.com/jbblynim/video/upload/v1786896883/Va%CC%8Ar_magi_er_renere_enn_din___Ryddedr%C3%B8m__Ferskify_MP4_xl3tbf.mp4',
    title: 'Room Refresh',
    subtitle: 'Deep Clean Magic',
    tag: 'Transformation',
  },
  {
    id: 'video-lemon-fresh',
    url: 'https://res.cloudinary.com/jbblynim/video/upload/v1786896872/Cleaning_Lemon_MP4_ib3ifh.mp4',
    title: 'Citrus Sanitizing',
    subtitle: 'Sparkling Kitchen',
    tag: 'Disinfection',
  },
  {
    id: 'video-detail-polish',
    url: 'https://res.cloudinary.com/jbblynim/video/upload/v1786896863/Mijares_Cleaning_Services_LLC_MP4_w5gxwi.mp4',
    title: 'Precision Detail',
    subtitle: 'Surface Care',
    tag: 'Pro Standard',
  },
  {
    id: 'video-window-clean',
    url: 'https://res.cloudinary.com/jbblynim/video/upload/v1786896856/_windowcleaning__windowcleaner_Credits__luxwindowwashingllc_MP4_beyste.mp4',
    title: 'Crystal Clear',
    subtitle: 'Streak-Free Glass',
    tag: 'Window Shine',
  },
];

interface VerticalVideoCardProps {
  video: VerticalVideoItem;
  index: number;
}

const VerticalVideoCard: React.FC<VerticalVideoCardProps> = ({ video, index }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div
      id={`vertical-video-card-${video.id}`}
      className="group relative aspect-[9/16] rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(5,26,36,0.18)] transition-all duration-500 flex flex-col justify-between select-none"
    >
      {/* HTML5 Vertical Video Element */}
      <video
        ref={videoRef}
        src={video.url}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        onClick={togglePlay}
        className="absolute inset-0 w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-700 ease-out"
      />

      {/* Top Header Overlay: Tag & Audio Toggle */}
      <div className="relative z-10 flex items-center justify-between p-3 sm:p-3.5 pointer-events-auto">
        <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 shadow-sm">
          <RealisticSparklesIcon className="w-3 h-3" />
          {video.tag}
        </span>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/45 backdrop-blur-md text-white border border-white/25 flex items-center justify-center hover:bg-black/65 transition-colors cursor-pointer shadow-sm"
        >
          {isMuted ? (
            <span className="text-[10px] font-mono font-bold text-white/90">OFF</span>
          ) : (
            <RealisticVolume2Icon className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Center Click-To-Play Indicator (Visible when paused) */}
      {!isPlaying && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="Play video"
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 backdrop-blur-[1px] cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full bg-white/90 shadow-xl flex items-center justify-center hover:scale-110 transition-transform">
            <RealisticPlayIcon className="w-6 h-6" />
          </div>
        </button>
      )}

      {/* Bottom Info Gradient Overlay */}
      <div className="relative z-10 p-3.5 sm:p-4 bg-gradient-to-t from-[#051A24]/95 via-[#051A24]/60 to-transparent pt-12 flex flex-col text-left pointer-events-none">
        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-semibold mb-0.5">
          {video.subtitle}
        </span>
        <h4 className="font-heading text-lg sm:text-xl font-semibold text-white tracking-tight leading-tight">
          {video.title}
        </h4>
      </div>
    </div>
  );
};

export const PartnerSection: React.FC = () => {
  const { ref: sectionRef, isInView } = useInViewAnimation(0.1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [trailItems, setTrailItems] = useState<FloatingTrailItem[]>([]);
  const lastSpawnTime = useRef<number>(0);
  const idCounter = useRef<number>(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    // Minimum 80ms between spawns
    if (now - lastSpawnTime.current < 80) return;
    lastSpawnTime.current = now;

    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const randomRotation = Math.floor(Math.random() * 21) - 10; // -10 to +10 deg
    const randomType = Math.floor(Math.random() * TRAIL_ICONS.length);
    const newId = ++idCounter.current;

    const newItem: FloatingTrailItem = {
      id: newId,
      x,
      y,
      rotation: randomRotation,
      type: randomType,
    };

    setTrailItems((prev) => [...prev.slice(-15), newItem]);

    // Clean up after 1000ms
    setTimeout(() => {
      setTrailItems((prev) => prev.filter((item) => item.id !== newId));
    }, 1000);
  }, []);

  const handleTextAction = () => {
    window.open('sms:2103808066?body=Hi%20Mom%27s%20House%20Cleaning,%20I%20would%20like%20to%20get%20a%20free%20estimate!', '_self');
  };

  return (
    <section
      id="partner-contact-section"
      ref={sectionRef}
      className="w-full py-8 px-4 md:py-24 md:px-12"
    >
      <div
        ref={containerRef}
        id="partner-cta-container"
        onMouseMove={handleMouseMove}
        className={`w-full px-4 sm:px-8 md:px-12 lg:px-16 mx-auto py-8 sm:py-16 md:py-20 rounded-[24px] sm:rounded-[36px] md:rounded-[40px] bg-[#051A24] text-white border border-[#051A24]/30 shadow-[0_20px_50px_rgba(5,26,36,0.3)] relative overflow-hidden flex flex-col items-center justify-center text-center transition-all duration-700 ${
          isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        {/* Floating cursor trail elements */}
        {trailItems.map((item) => {
          const config = TRAIL_ICONS[item.type];
          const IconComp = config.icon;

          return (
            <div
              key={item.id}
              style={{
                left: `${item.x}px`,
                top: `${item.y}px`,
                transform: `translate(-50%, -50%) rotate(${item.rotation}deg)`,
                animation: 'trailFadeOut 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              }}
              className="absolute pointer-events-none z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full shadow-md border text-xs font-medium backdrop-blur-sm bg-white/95 text-[#051A24]"
            >
              <span className={`inline-flex ${config.bg} p-1 rounded-full border`}>
                <IconComp className="w-4 h-4" />
              </span>
              <span className="text-[#051A24] font-mono text-[11px] font-semibold tracking-tight">
                {config.text}
              </span>
            </div>
          );
        })}

        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex p-1.5 rounded-full bg-white/10 border border-white/20">
            <RealisticSparklesIcon className="w-4 h-4 text-emerald-300" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-300 font-semibold">
            Mom's Cleaning in Action
          </span>
        </div>

        {/* Heading */}
        <h2
          id="partner-heading"
          className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase mb-4 select-none"
        >
          Let us do your dirty work
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mb-8 md:mb-10 font-normal">
          From deep home resets to citrus-fresh kitchens and streak-free crystal windows — watch our San Antonio crew deliver the spotless standard.
        </p>

        {/* 4 Vertical Videos Side by Side */}
        <div
          id="vertical-videos-grid"
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 w-full max-w-6xl mb-10 md:mb-12"
        >
          {VERTICAL_VIDEOS.map((video, idx) => (
            <VerticalVideoCard key={video.id} video={video} index={idx} />
          ))}
        </div>

        {/* CTA Button: High-contrast pill with circular avatar image + Text Us */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            id="btn-text-us-cta"
            href="tel:+12103808066"
            className="group flex items-center gap-4 bg-white text-[#051A24] hover:bg-slate-100 pl-2 pr-8 py-2.5 rounded-full shadow-2xl border border-white/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80"
                alt="Friendly cleaner specialist"
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-[#051A24]/20"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>

            <div className="flex flex-col text-left">
              <span className="text-xs uppercase font-mono tracking-widest text-[#051A24]/70">
                Direct SMS Dispatch
              </span>
              <span className="text-base sm:text-lg font-bold tracking-tight text-[#051A24] group-hover:text-blue-900 transition-colors">
                Text Us: 210.380.8066
              </span>
            </div>
          </a>
        </div>

        {/* CSS for trail fade out */}
        <style>{`
          @keyframes trailFadeOut {
            0% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
            70% {
              opacity: 0.8;
              transform: translate(-50%, -70%) scale(0.95);
            }
            100% {
              opacity: 0;
              transform: translate(-50%, -90%) scale(0.7);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

