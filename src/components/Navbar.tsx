import React, { useState, useEffect } from 'react';
import { 
  RealisticMenuIcon, 
  RealisticXIcon, 
  RealisticPhoneCallIcon,
  RealisticSparklesIcon,
  RealisticStarIcon,
  RealisticShieldCheckIcon,
  RealisticCalendarIcon,
  RealisticMailIcon
} from './RealisticIcons';

export const navLinks = [
  { name: 'Home', href: '/', icon: RealisticSparklesIcon },
  { name: 'Our Services', href: '/services', icon: RealisticCalendarIcon },
  { name: 'About Us', href: '/about', icon: RealisticShieldCheckIcon },
  { name: 'Testimonials', href: '/testimonials', icon: RealisticStarIcon },
  { name: 'Payment Options', href: '/payment', icon: RealisticSparklesIcon },
  { name: 'Contact Us', href: '/contact', icon: RealisticMailIcon },
];

interface NavbarProps {
  currentRoute?: 'home' | 'services' | 'contact' | 'about' | 'testimonials' | 'payment';
  onNavigate: (href: string) => void;
  onOpenEstimate?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute = 'home',
  onNavigate,
  onOpenEstimate,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open to prevent background jumps
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Keyboard accessibility: Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(href);
  };

  const handleEstimateClick = () => {
    setIsMobileMenuOpen(false);
    if (onOpenEstimate) {
      onOpenEstimate();
    } else {
      onNavigate('/contact');
    }
  };

  const isActive = (href: string) => {
    if (href === '/' && currentRoute === 'home') return true;
    if ((href === '/services' || href === '/#services') && currentRoute === 'services') return true;
    if ((href === '/contact' || href === '/#contact') && currentRoute === 'contact') return true;
    if ((href === '/about' || href === '/#about') && currentRoute === 'about') return true;
    if ((href === '/testimonials' || href === '/#testimonials') && currentRoute === 'testimonials') return true;
    if ((href === '/payment' || href === '/#payment') && currentRoute === 'payment') return true;
    return false;
  };

  return (
    <nav
      id="main-glassmorphism-navbar"
      className="fixed top-0 left-0 right-0 z-[100] bg-[#F4F9FF]/90 backdrop-blur-xl border-b border-[#051A24]/10 transition-all duration-300"
      aria-label="Main Navigation"
    >
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 h-20 flex items-center justify-between">
        {/* LEFT SIDE (LOGO) */}
        <button
          id="navbar-brand-logo"
          onClick={() => handleLinkClick('/')}
          className="flex items-baseline gap-1.5 cursor-pointer text-left focus-visible:ring-2 focus-visible:ring-[#051A24] focus-visible:outline-none rounded-lg p-1 group select-none shrink-0 whitespace-nowrap"
          aria-label="Mom's House Cleaning - Back to Home"
        >
          <span className="font-heading text-2xl md:text-2xl text-[#051A24] font-semibold tracking-tight">
            Mom's
          </span>
          <span className="font-body text-base md:text-lg text-[#051A24]/90 font-medium tracking-tight">
            House Cleaning
          </span>
        </button>

        {/* RIGHT SIDE (DESKTOP LINKS) */}
        <div className="hidden md:flex items-center flex-nowrap shrink-0 gap-3 md:gap-4 lg:gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <button
                key={link.href}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleLinkClick(link.href)}
                className={`relative py-1 whitespace-nowrap text-xs md:text-sm lg:text-base font-medium transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#051A24] focus-visible:outline-none rounded-md px-1 ${
                  active
                    ? 'text-[#051A24] opacity-100 font-semibold'
                    : 'text-[#051A24] opacity-70 hover:opacity-100 hover:text-[#051A24]'
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#051A24] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* MOBILE MENU TRIGGER (HAMBURGER) */}
        <button
          id="navbar-mobile-toggle"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#051A24] min-w-[48px] min-h-[48px] p-2.5 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/80 shadow-sm flex items-center justify-center transition-all focus-visible:ring-2 focus-visible:ring-[#051A24] focus-visible:outline-none cursor-pointer active:scale-95"
          aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="navbar-mobile-menu"
          aria-haspopup="dialog"
        >
          {isMobileMenuOpen ? (
            <RealisticXIcon className="w-6 h-6" />
          ) : (
            <RealisticMenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* MOBILE FULL-SCREEN OVERLAY MENU */}
      {isMobileMenuOpen && (
        <div
          id="navbar-mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-x-0 top-20 h-[calc(100dvh-5rem)] md:hidden bg-[#F4F9FF] backdrop-blur-2xl px-5 sm:px-6 py-6 shadow-2xl flex flex-col justify-between overflow-y-auto overscroll-contain border-t border-[#051A24]/10 z-[150]"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between px-2 pb-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#273C46]/80 font-bold">
                Main Menu
              </span>
              <span className="text-[10px] font-mono text-[#051A24]/60 bg-slate-200/70 px-2 py-0.5 rounded-full">
                San Antonio, TX
              </span>
            </div>

            {/* Navigation links with generous touch targets */}
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const IconComp = link.icon;
              return (
                <button
                  key={link.href}
                  id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  type="button"
                  onClick={() => handleLinkClick(link.href)}
                  className={`min-h-[52px] text-left py-3.5 px-4 rounded-2xl text-base sm:text-lg font-medium transition-all duration-200 cursor-pointer flex items-center justify-between active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#051A24] focus-visible:outline-none ${
                    active
                      ? 'bg-[#051A24] text-white font-semibold shadow-md'
                      : 'text-[#051A24] bg-white/80 hover:bg-white border border-slate-200/70 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="shrink-0">
                      <IconComp className="w-5 h-5" />
                    </span>
                    <span>{link.name}</span>
                  </div>

                  {active ? (
                    <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-300 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-slate-400">→</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Action CTAs */}
          <div className="pt-6 mt-4 border-t border-slate-200/80 flex flex-col gap-3">
            <button
              id="mobile-nav-estimate-btn"
              type="button"
              onClick={handleEstimateClick}
              className="w-full min-h-[48px] py-3.5 px-6 rounded-full font-bold text-center text-sm md:text-base text-white bg-[#051A24] hover:bg-[#0D212C] shadow-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-transform cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#051A24]"
            >
              <RealisticSparklesIcon className="w-4 h-4" />
              <span>Get a Free Estimate</span>
            </button>

            <a
              id="mobile-nav-call-btn"
              href="tel:+12103808066"
              className="w-full min-h-[48px] flex items-center justify-center gap-2.5 text-sm font-semibold text-[#051A24] bg-white hover:bg-slate-50 px-5 py-3.5 rounded-full border border-slate-200/90 shadow-sm active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-[#051A24]"
            >
              <RealisticPhoneCallIcon className="w-4 h-4" />
              <span>Call / Text: (210) 380-8066</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
