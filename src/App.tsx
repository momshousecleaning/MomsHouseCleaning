/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { GlobalCursorTrail } from './components/GlobalCursorTrail';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AudioCommercialsSection } from './components/AudioCommercialsSection';
import { MarqueeSection } from './components/MarqueeSection';
import { TestimonialSection } from './components/TestimonialSection';
import { PricingSection } from './components/PricingSection';
import { PeaceOfMindSection } from './components/PeaceOfMindSection';
import { GuaranteeDiscountSection } from './components/GuaranteeDiscountSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PartnerSection } from './components/PartnerSection';
import { PaymentTermsStrip } from './components/PaymentTermsStrip';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CopyrightBar } from './components/CopyrightBar';
import { BottomNav } from './components/BottomNav';
import { EstimateModal } from './components/EstimateModal';
import { ChecklistModal } from './components/ChecklistModal';
import { InfoModal } from './components/InfoModal';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Testimonials } from './pages/Testimonials';
import { PaymentOptions } from './pages/PaymentOptions';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'services' | 'contact' | 'about' | 'testimonials' | 'payment'>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/services' || path === '/services/' || hash === '#/services' || hash === '#services') {
        return 'services';
      }
      if (path === '/contact' || path === '/contact/' || hash === '#/contact' || hash === '#contact') {
        return 'contact';
      }
      if (path === '/about' || path === '/about/' || hash === '#/about' || hash === '#about') {
        return 'about';
      }
      if (path === '/testimonials' || path === '/testimonials/' || hash === '#/testimonials' || hash === '#testimonials') {
        return 'testimonials';
      }
      if (path === '/payment' || path === '/payment/' || path === '/payment-options' || hash === '#/payment' || hash === '#payment') {
        return 'payment';
      }
    }
    return 'home';
  });

  const [isEstimateOpen, setIsEstimateOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Initial Deep Clean');
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [infoModalType, setInfoModalType] = useState<'about' | 'payment' | 'photos' | 'contact' | null>(null);
  const lenisRef = React.useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Premium exponential easing curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.6,
      syncTouch: false, // CRITICAL: NEVER hijack native touch scrolling on mobile devices. It destroys UX.
      touchMultiplier: 1.0,
      infinite: false,
    });
    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Strict Garbage Collection
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Lock body scroll and pause Lenis when any modal is open
  useEffect(() => {
    const isAnyModalOpen = isEstimateOpen || isChecklistOpen || infoModalType !== null;
    if (isAnyModalOpen) {
      lenisRef.current?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenisRef.current?.start();
      document.body.style.overflow = '';
    }
  }, [isEstimateOpen, isChecklistOpen, infoModalType]);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/services' || path === '/services/' || hash === '#/services' || hash === '#services') {
        setCurrentRoute('services');
      } else if (path === '/contact' || path === '/contact/' || hash === '#/contact' || hash === '#contact') {
        setCurrentRoute('contact');
      } else if (path === '/about' || path === '/about/' || hash === '#/about' || hash === '#about') {
        setCurrentRoute('about');
      } else if (path === '/testimonials' || path === '/testimonials/' || hash === '#/testimonials' || hash === '#testimonials') {
        setCurrentRoute('testimonials');
      } else if (path === '/payment' || path === '/payment/' || path === '/payment-options' || hash === '#/payment' || hash === '#payment') {
        setCurrentRoute('payment');
      } else {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (route: 'home' | 'services' | 'contact' | 'about' | 'testimonials' | 'payment') => {
    setCurrentRoute(route);
    let targetUrl = '/';
    if (route === 'services') targetUrl = '/services';
    if (route === 'contact') targetUrl = '/contact';
    if (route === 'about') targetUrl = '/about';
    if (route === 'testimonials') targetUrl = '/testimonials';
    if (route === 'payment') targetUrl = '/payment';

    if (window.location.pathname !== targetUrl) {
      window.history.pushState({}, '', targetUrl);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEstimate = (serviceType: string = 'Initial Cleaning') => {
    setSelectedService(serviceType);
    setIsEstimateOpen(true);
  };

  const handleScrollToTestimonials = () => {
    navigateTo('testimonials');
  };

  const handleNavbarNavigation = (href: string) => {
    if (href === '/') {
      navigateTo('home');
    } else if (href === '/services') {
      navigateTo('services');
    } else if (href === '/#contact' || href === '/contact') {
      navigateTo('contact');
    } else if (href === '/#about' || href === '/about') {
      navigateTo('about');
    } else if (href === '/#testimonials' || href === '/testimonials') {
      navigateTo('testimonials');
    } else if (href === '/#payment' || href === '/payment') {
      navigateTo('payment');
    } else if (href === '/#photos') {
      setInfoModalType('photos');
    }
  };

  const handleCallOrText = () => {
    window.open('tel:+12103808066', '_self');
  };

  return (
    <div className="min-h-screen w-full bg-[#F4F9FF] text-[#051A24] flex flex-col items-center relative overflow-x-hidden selection:bg-[#051A24] selection:text-white font-body">
      {/* GLOBAL FLOATING CURSOR TRAIL PHYSICS */}
      <GlobalCursorTrail />

      {/* 0. FIXED DYNAMIC GLASSMORPHISM NAVBAR */}
      <Navbar 
        currentRoute={currentRoute} 
        onNavigate={handleNavbarNavigation}
        onOpenEstimate={() => handleOpenEstimate('General Inquiries')} 
      />

      {/* Main Content Area with top offset for fixed navbar */}
      <div className="w-full pt-20 flex flex-col items-center">
        {currentRoute === 'services' ? (
          <Services
            onNavigateHome={() => navigateTo('home')}
            onOpenEstimate={handleOpenEstimate}
            onOpenAbout={() => navigateTo('about')}
            onOpenPhotos={() => setInfoModalType('photos')}
            onOpenTestimonials={() => navigateTo('testimonials')}
            onOpenPayment={() => navigateTo('payment')}
            onOpenContact={() => navigateTo('contact')}
          />
        ) : currentRoute === 'contact' ? (
          <Contact
            onNavigateHome={() => navigateTo('home')}
            onNavigateServices={() => navigateTo('services')}
            onOpenEstimate={handleOpenEstimate}
            onOpenAbout={() => navigateTo('about')}
            onOpenPhotos={() => setInfoModalType('photos')}
            onOpenTestimonials={() => navigateTo('testimonials')}
            onOpenPayment={() => navigateTo('payment')}
            onOpenContact={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : currentRoute === 'about' ? (
          <About
            onNavigateHome={() => navigateTo('home')}
            onNavigateServices={() => navigateTo('services')}
            onNavigateContact={() => navigateTo('contact')}
            onOpenEstimate={handleOpenEstimate}
            onOpenPhotos={() => setInfoModalType('photos')}
            onOpenTestimonials={() => navigateTo('testimonials')}
            onOpenPayment={() => navigateTo('payment')}
          />
        ) : currentRoute === 'testimonials' ? (
          <Testimonials
            onNavigateHome={() => navigateTo('home')}
            onNavigateServices={() => navigateTo('services')}
            onNavigateContact={() => navigateTo('contact')}
            onNavigateAbout={() => navigateTo('about')}
            onOpenEstimate={handleOpenEstimate}
            onOpenPhotos={() => setInfoModalType('photos')}
            onOpenPayment={() => navigateTo('payment')}
          />
        ) : currentRoute === 'payment' ? (
          <PaymentOptions
            onNavigateHome={() => navigateTo('home')}
            onNavigateServices={() => navigateTo('services')}
            onNavigateContact={() => navigateTo('contact')}
            onNavigateAbout={() => navigateTo('about')}
            onNavigateTestimonials={() => navigateTo('testimonials')}
            onOpenEstimate={handleOpenEstimate}
            onOpenPhotos={() => setInfoModalType('photos')}
          />
        ) : (
          <>
            {/* 1. HERO SECTION */}
            <HeroSection
              onOpenEstimate={() => handleOpenEstimate('Initial Deep Clean')}
              onScrollToServices={() => navigateTo('services')}
            />

            {/* 2. AUDIO COMMERCIALS SECTION */}
            <AudioCommercialsSection />

            {/* 3. INFINITE MARQUEE */}
            <MarqueeSection />

            {/* 4. TESTIMONIAL QUOTE SECTION (with Parallax Image) */}
            <TestimonialSection />

            {/* 5. SERVICES / TIERS SECTION */}
            <PricingSection
              onOpenEstimate={handleOpenEstimate}
              onOpenChecklist={() => navigateTo('services')}
            />

            {/* 6. TRUST & PEACE OF MIND / AWARDS */}
            <PeaceOfMindSection />

            {/* 7. GUARANTEE & SPECIAL DISCOUNT (DUAL CARD UI) */}
            <GuaranteeDiscountSection onOpenEstimate={handleOpenEstimate} />

            {/* 8. SPECIALTY PROJECTS & GREEN CLEANING SECTION */}
            <ProjectsSection />

            {/* 10. PARTNER / CONTACT SECTION */}
            <PartnerSection />

            {/* 11. PAYMENT METHODS & TERMS STRIP */}
            <PaymentTermsStrip />

            {/* 12. FAQ ACCORDION SECTION */}
            <FaqSection onOpenEstimate={() => handleOpenEstimate('General Inquiries')} />

            {/* 13. FOOTER */}
            <Footer
              onOpenEstimate={() => handleOpenEstimate('General Inquiries')}
              onOpenServices={() => navigateTo('services')}
              onOpenAbout={() => navigateTo('about')}
              onOpenPhotos={() => setInfoModalType('photos')}
              onOpenTestimonials={handleScrollToTestimonials}
              onOpenPayment={() => navigateTo('payment')}
              onOpenContact={() => navigateTo('contact')}
            />

            {/* 13. COPYRIGHT BAR */}
            <CopyrightBar />

            {/* 14. FIXED BOTTOM NAV */}
            <BottomNav onCallOrText={handleCallOrText} />
          </>
        )}
      </div>

      {/* Modals & Dialogs (Global) */}
      <EstimateModal
        isOpen={isEstimateOpen}
        onClose={() => setIsEstimateOpen(false)}
        initialService={selectedService}
      />

      <ChecklistModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
        onOpenEstimate={() => handleOpenEstimate('Initial Deep Clean')}
      />

      <InfoModal
        isOpen={infoModalType !== null}
        type={infoModalType}
        onClose={() => setInfoModalType(null)}
        onOpenEstimate={() => handleOpenEstimate('General Service')}
      />
    </div>
  );
}
