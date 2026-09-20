import React from 'react';

import img02 from '../images/02.webp';
import img03 from '../images/03.webp';
import img04 from '../images/04.webp';
import img05 from '../images/05.webp';
import img06 from '../images/06.webp';
import img07 from '../images/07.webp';
import img08 from '../images/08.webp';
import img09 from '../images/09.webp';
import img10 from '../images/10.webp';
import img11 from '../images/11.webp';
import img12 from '../images/12.webp';
import img13 from '../images/13.webp';
import img14 from '../images/14.webp';
import img15 from '../images/15.webp';
import img16 from '../images/16.webp';
import img17 from '../images/17.webp';
import img18 from '../images/18.webp';
import img19 from '../images/19.webp';
import img20 from '../images/20.webp';
import img21 from '../images/21.webp';

const marqueeImages = [
  { src: img02, alt: "San Antonio residential kitchen turnover detailing" },
  { src: img03, alt: "High-traffic living room carpet fiber restoration" },
  { src: img04, alt: "Bexar County home deep sanitize and dusting" },
  { src: img05, alt: "Move-in ready bathroom shower tile scrub" },
  { src: img06, alt: "Spotless hardwood floor vacuuming and polishing in San Antonio" },
  { src: img07, alt: "San Antonio apartment kitchen counter disinfection" },
  { src: img08, alt: "Master bedroom dusting and fresh linen presentation" },
  { src: img09, alt: "Luxury home bathroom vanity and mirror detailing" },
  { src: img10, alt: "Move-out interior appliance degreasing and cleaning" },
  { src: img11, alt: "Sparkling clean glass shower enclosure restoration" },
  { src: img12, alt: "San Antonio residential tile and grout scrubbing" },
  { src: img13, alt: "Comprehensive post-move deep housekeeping and wipe-down" },
  { src: img14, alt: "Polished stainless steel kitchen sink and fixtures" },
  { src: img15, alt: "Baseboard, door frame, and trim detail dusting" },
  { src: img16, alt: "San Antonio residential dining room preparation" },
  { src: img17, alt: "Deep sanitized guest bathroom tile and tub finish" },
  { src: img18, alt: "High-powered residential carpet steam extraction" },
  { src: img19, alt: "Immaculate entryway and foyer floor detailing" },
  { src: img20, alt: "Turnkey vacation rental turnover cleaning in Bexar County" },
  { src: img21, alt: "Eco-friendly residential maid service in San Antonio TX" },
];

export const MarqueeSection: React.FC = () => {
  // 20 images duplicated side-by-side to create seamless infinite CSS loop
  const displayImages = [...marqueeImages, ...marqueeImages];

  return (
    <section
      id="marquee-section"
      className="w-full overflow-hidden mt-16 md:mt-20 mb-16 select-none"
      aria-label="Image gallery of cleaned spaces"
    >
      <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] will-change-transform">
        {displayImages.map((img, index) => (
          <div
            key={`marquee-img-${index}`}
            className="shrink-0 mx-3 group"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="h-[280px] md:h-[500px] w-[320px] md:w-[480px] object-cover rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
