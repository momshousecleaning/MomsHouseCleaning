import React, { useRef, useState } from 'react';
import { RealisticVolume2Icon, RealisticRadioIcon } from './RealisticIcons';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface AudioCardProps {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  audioSrc?: string;
  delay: string;
  isInView: boolean;
}

const AudioCard: React.FC<AudioCardProps> = ({
  id,
  title,
  subtitle,
  duration,
  audioSrc,
  delay,
  isInView,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<boolean>(false);

  const handlePlay = () => {
    setIsPlaying(true);

    // Enforce mutual exclusivity: Pause all other audio elements on the page
    document.querySelectorAll('audio').forEach((audio) => {
      if (audio !== audioRef.current && !audio.paused) {
        audio.pause();
      }
    });

    // Fix single-channel (mono) audio by explicitly downmixing to 1 channel,
    // which the browser then upmixes evenly to both stereo speakers.
    if (!audioCtxRef.current && audioRef.current) {
      try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContext();
        const source = ctx.createMediaElementSource(audioRef.current);
        source.channelCount = 1;
        source.channelCountMode = 'explicit';
        source.connect(ctx.destination);
        audioCtxRef.current = true;
      } catch (err) {
        console.warn('Web Audio API could not initialize:', err);
      }
    }
  };

  return (
    <div
      id={id}
      style={{ animationDelay: delay }}
      className={`bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/80 transition-all duration-200 hover:shadow-md flex flex-col justify-between ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex p-1.5 rounded-full bg-slate-100">
              <RealisticRadioIcon className="w-4 h-4" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#273C46] font-medium">
              {subtitle}
            </span>
          </div>
          <h2 className="font-heading text-xl md:text-2xl font-semibold text-[#0D212C] tracking-tight">
            {title}
          </h2>
        </div>

        <span className="font-mono text-xs text-[#273C46]/70 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200/50">
          {duration}
        </span>
      </div>

      {/* Audio player UI */}
      <div className="mt-2 space-y-3">
        <audio
          ref={audioRef}
          crossOrigin="anonymous"
          src={audioSrc || 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'}
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
          onPlay={handlePlay}
          controls
          className="w-full h-10 accent-[#051A24] rounded-lg"
        />

        <div className="flex items-center justify-between text-xs text-[#273C46]/80 font-mono pt-1">
          <span className="flex items-center gap-1.5">
            <RealisticVolume2Icon className="w-4 h-4" />
            Radio Spot • San Antonio Broadcast
          </span>
          <span className="text-[#051A24] font-medium">High Fidelity Stereo</span>
        </div>
      </div>
    </div>
  );
};

export const AudioCommercialsSection: React.FC = () => {
  const { ref, isInView } = useInViewAnimation(0.1);

  return (
    <section
      id="audio-commercials-section"
      ref={ref}
      className="w-full py-8 px-4 md:py-24 md:px-12 mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 lg:gap-12 items-center">
        {/* Left Column (Narrow text) */}
        <div
          id="audio-text-col"
          style={{ animationDelay: '0.1s' }}
          className={`lg:col-span-5 flex flex-col ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2
            id="radio-archives-badge"
            className="flex items-center gap-2 mb-2 text-xs uppercase font-mono tracking-widest text-[#051A24]/60 font-semibold"
          >
            <RealisticRadioIcon className="w-4 h-4" />
            <span>Radio Archives</span>
          </h2>

          <h2
            id="audio-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-3 md:mb-4"
          >
            Let Us Do Your Dirty Work
          </h2>

          <p
            id="audio-description"
            className="text-base md:text-lg text-slate-800 leading-relaxed font-normal"
          >
            Enjoy a spotless home with more time to relax.
          </p>
        </div>

        {/* Right Column (Audio cards) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <AudioCard
            id="audio-card-1"
            title="From the Rock Vault"
            subtitle="Classic Spot"
            duration="0:30"
            audioSrc="https://res.cloudinary.com/jbblynim/video/upload/v1788279792/moms_otdoap.mp3"
            delay="0.2s"
            isInView={isInView}
          />
          <AudioCard
            id="audio-card-2"
            title="A Recent Mom's House Cleaning Audio Commercial"
            subtitle="Current Feature"
            duration="0:45"
            audioSrc="https://res.cloudinary.com/jbblynim/video/upload/v1788279801/moms2_ps3ybe.mp3"
            delay="0.3s"
            isInView={isInView}
          />
          <AudioCard
            id="audio-card-3"
            title="Mom's House Cleaning Specials"
            subtitle="Promotional Feature"
            duration="0:30"
            audioSrc="https://res.cloudinary.com/jbblynim/video/upload/v1788279814/moms3_yigrjy.mp3"
            delay="0.4s"
            isInView={isInView}
          />
        </div>
      </div>
    </section>
  );
};
