import React, { useState } from 'react';
import {
  RealisticPhoneCallIcon,
  RealisticCheckCircleIcon,
  RealisticCheckCircle2Icon,
  RealisticSparklesIcon,
  RealisticArrowLeftIcon,
  RealisticFacebookIcon,
  RealisticLinkedinIcon,
  RealisticGlobeIcon,
  RealisticShareIcon,
  RealisticXSocialIcon,
  RealisticAlignableIcon,
  RealisticSendIcon,
  RealisticShieldCheckIcon,
  RealisticCreditCardIcon,
} from '../components/RealisticIcons';
import { Button } from '../components/Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Footer } from '../components/Footer';
import { CopyrightBar } from '../components/CopyrightBar';
import { BottomNav } from '../components/BottomNav';

interface ContactPageProps {
  onNavigateHome: () => void;
  onNavigateServices: () => void;
  onOpenEstimate: (serviceTitle?: string) => void;
  onOpenAbout?: () => void;
  onOpenPhotos?: () => void;
  onOpenTestimonials?: () => void;
  onOpenPayment?: () => void;
  onOpenContact?: () => void;
}

export const Contact: React.FC<ContactPageProps> = ({
  onNavigateHome,
  onNavigateServices,
  onOpenEstimate,
  onOpenAbout = () => {},
  onOpenPhotos = () => {},
  onOpenTestimonials = () => {},
  onOpenPayment = () => {},
  onOpenContact = () => {},
}) => {
  const { ref: heroRef, isInView: heroInView } = useInViewAnimation(0.05);
  const { ref: leftColRef, isInView: leftColInView } = useInViewAnimation(0.1);
  const { ref: rightColRef, isInView: rightColInView } = useInViewAnimation(0.1);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Initial Cleaning',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formDataPayload = {
      access_key: '536d3fde-53b7-400e-8d58-a78ed6276835',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formDataPayload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Initial Deep Clean',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(
          result.message || 'Failed to submit estimate request. Please call or text us directly at (210) 380-8066.'
        );
      }
    } catch (error) {
      console.error('Web3Forms Error:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error occurred. Please call or text us directly at (210) 380-8066.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCallOrText = () => {
    window.open('tel:2103808066', '_self');
  };

  return (
    <div className="min-h-screen w-full bg-[#F4F9FF] text-[#051A24] flex flex-col items-center relative overflow-x-hidden selection:bg-[#051A24] selection:text-white">
      {/* Breadcrumb / Back Navigation Bar */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 mx-auto pt-6 pb-2 flex items-center justify-between">
        <button
          id="btn-contact-back-home"
          onClick={onNavigateHome}
          className="flex items-center gap-2 text-xs md:text-sm font-mono uppercase tracking-wider text-[#051A24]/80 hover:text-[#051A24] transition-colors cursor-pointer py-1.5 px-3 rounded-full bg-slate-100/80 hover:bg-slate-200/80"
        >
          <RealisticArrowLeftIcon className="w-4 h-4" />
          <span>Home / Contact Us</span>
        </button>

        <span className="text-xs font-mono text-[#051A24]/60 uppercase tracking-widest hidden sm:inline-block">
          San Antonio, TX • Since 1999
        </span>
      </div>

      {/* Hero Section (Minimalist) */}
      <section
        ref={heroRef}
        id="contact-hero-section"
        className="w-full py-8 px-4 md:py-24 md:px-12 mx-auto flex flex-col items-center text-center"
      >
        {/* Tagline */}
        <p
          id="contact-hero-tagline"
          style={{ animationDelay: '0.1s' }}
          className={`font-mono text-xs md:text-sm text-[#051A24] uppercase tracking-widest font-medium mb-2 md:mb-3 will-change-transform ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          San Antonio Area House Cleaning Service
        </p>

        {/* Heading: Let's start a Conversation */}
        <h1
          id="contact-hero-heading"
          style={{ animationDelay: '0.2s' }}
          className={`font-heading text-[38px] sm:text-[64px] md:text-[80px] leading-tight text-[#0D212C] font-semibold tracking-tight max-w-4xl will-change-transform ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Let's start a <span className="block sm:inline">Conversation.</span>
        </h1>
      </section>

      {/* Two-Column Conversion Layout */}
      <section
        id="contact-main-grid"
        className="w-full py-8 px-4 md:py-24 md:px-12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-start"
      >
        {/* LEFT COLUMN (THE REACT FORM & SOCIALS) */}
        <div
          ref={leftColRef}
          id="contact-form-column"
          style={{ animationDelay: '0.2s' }}
          className={`flex flex-col gap-8 will-change-transform ${
            leftColInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-sm p-6 md:p-8 border border-slate-200/80">
            <div className="mb-6">
              <h2
                id="contact-form-title"
                className="font-heading text-2xl md:text-3xl text-slate-900 font-semibold tracking-tight mb-2"
              >
                Send Us a Message
              </h2>
              <p className="text-base text-slate-800 font-normal leading-relaxed">
                Fill out the details below for a quick, personalized estimate.
              </p>
            </div>

            {isSubmitted ? (
              <div
                id="contact-success-banner"
                className="p-6 bg-[#EBF5FB] border border-[#051A24]/10 rounded-2xl flex flex-col items-center text-center gap-3 animate-fade-in-up"
              >
                <div className="w-12 h-12 rounded-full bg-[#051A24] text-white flex items-center justify-center">
                  <RealisticCheckCircle2Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl text-[#051A24] font-semibold">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-[#273C46] leading-relaxed max-w-md">
                  We will contact you shortly with a personalized quote.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setSubmitStatus('idle');
                  }}
                  className="mt-2 text-xs font-mono uppercase tracking-wider text-[#051A24] underline hover:opacity-75 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                id="contact-estimate-form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-xs flex flex-col gap-1.5 animate-fade-in">
                    <span className="font-semibold">{errorMessage}</span>
                    <span>Or call/text us directly at <a href="tel:+12103808066" className="underline font-bold">(210) 380-8066</a></span>
                  </div>
                )}
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-mono uppercase tracking-wider text-[#051A24]/80 font-medium"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Maria Gonzalez"
                    className="bg-[#F6FCFF] border-b-2 border-[#0D212C]/10 focus:border-[#051A24] rounded-t-lg p-4 text-sm text-[#051A24] placeholder:text-[#273C46]/40 focus:outline-none transition-colors"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-mono uppercase tracking-wider text-[#051A24]/80 font-medium"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="bg-[#F6FCFF] border-b-2 border-[#0D212C]/10 focus:border-[#051A24] rounded-t-lg p-4 text-sm text-[#051A24] placeholder:text-[#273C46]/40 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-phone"
                      className="text-xs font-mono uppercase tracking-wider text-[#051A24]/80 font-medium"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(210) 555-0123"
                      className="bg-[#F6FCFF] border-b-2 border-[#0D212C]/10 focus:border-[#051A24] rounded-t-lg p-4 text-sm text-[#051A24] placeholder:text-[#273C46]/40 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Service Requested */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-service"
                    className="text-xs font-mono uppercase tracking-wider text-[#051A24]/80 font-medium"
                  >
                    Service Requested
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bg-[#F6FCFF] border-b-2 border-[#0D212C]/10 focus:border-[#051A24] rounded-t-lg p-4 text-sm text-[#051A24] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Initial Cleaning">Initial Cleaning</option>
                    <option value="Recurring Cleaning">Recurring Cleaning</option>
                    <option value="Cleanouts & Make-Readys">Cleanouts & Make-Ready's</option>
                    <option value="Short Term Rentals">Short Term Rentals</option>
                    <option value="Extra Services">Extra Services</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-mono uppercase tracking-wider text-[#051A24]/80 font-medium"
                  >
                    Message / Home Details
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your home (bedrooms, bathrooms, square footage, specific priorities)..."
                    className="bg-[#F6FCFF] border-b-2 border-[#0D212C]/10 focus:border-[#051A24] rounded-t-lg p-4 text-sm text-[#051A24] placeholder:text-[#273C46]/40 focus:outline-none transition-colors resize-y"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  id="btn-contact-submit-estimate"
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  className="w-full mt-2 shadow-md"
                  icon={<RealisticSendIcon className="w-4 h-4" />}
                >
                  {isSubmitting ? 'Sending Request...' : 'Get a Free Estimate'}
                </Button>
              </form>
            )}
          </div>

          {/* Social Links Row */}
          <div
            id="contact-social-links-row"
            className="flex flex-wrap items-center justify-between gap-4 px-2"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#051A24]/70 font-medium">
              Connect With Us:
            </span>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[#051A24]">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100063775830569"
                target="_blank"
                rel="noopener noreferrer"
                id="social-facebook"
                aria-label="Facebook"
                className="flex items-center gap-1.5 py-1 px-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <RealisticFacebookIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Facebook</span>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/momshouseclean"
                target="_blank"
                rel="noopener noreferrer"
                id="social-x"
                aria-label="X (formerly Twitter)"
                className="flex items-center gap-1.5 py-1 px-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <RealisticXSocialIcon className="w-5 h-5" />
                <span className="text-sm font-medium">X</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/932992/"
                target="_blank"
                rel="noopener noreferrer"
                id="social-linkedin"
                aria-label="LinkedIn"
                className="flex items-center gap-1.5 py-1 px-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <RealisticLinkedinIcon className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              {/* Google */}
              <a
                href="https://www.google.com/search?q=Mom%27s+House+Cleaning"
                target="_blank"
                rel="noopener noreferrer"
                id="social-google"
                aria-label="Google"
                className="flex items-center gap-1.5 py-1 px-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <RealisticGlobeIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Google</span>
              </a>

              {/* Alignable */}
              <a
                href="https://www.alignable.com/san-antonio-tx/moms-house-cleaning?user=86864"
                target="_blank"
                rel="noopener noreferrer"
                id="social-alignable"
                aria-label="Alignable"
                className="flex items-center gap-1.5 py-1 px-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <RealisticAlignableIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Alignable</span>
              </a>

              {/* Nextdoor */}
              <a
                href="https://nextdoor.com/pages/moms-house-cleaning-san-antonio-tx/"
                target="_blank"
                rel="noopener noreferrer"
                id="social-nextdoor"
                aria-label="Nextdoor"
                className="flex items-center gap-1.5 py-1 px-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <RealisticShareIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Nextdoor</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (TRUST CARDS & DIRECT CONTACT) */}
        <div
          ref={rightColRef}
          id="contact-trust-column"
          style={{ animationDelay: '0.35s' }}
          className={`flex flex-col will-change-transform ${
            rightColInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {/* Card 1 (Direct Contact & Payments - Light UI) */}
          <div
            id="card-direct-contact-light"
            className="bg-white rounded-2xl md:rounded-3xl shadow-sm p-6 md:p-8 border border-slate-200/80"
          >
            <div className="flex items-center justify-between gap-4 mb-2">
              <h3 className="text-xl font-semibold text-slate-900">
                Call or Text Us
              </h3>
              <span className="p-1.5 rounded-full bg-slate-100">
                <RealisticPhoneCallIcon className="w-5 h-5" />
              </span>
            </div>

            <a
              href="tel:+12103808066"
              id="contact-phone-link"
              className="font-heading text-3xl md:text-4xl text-slate-900 tracking-tight block hover:opacity-80 transition-opacity font-semibold"
            >
              210.380.8066
            </a>

            <div className="border-t border-slate-200/80 my-6" />

            <div className="flex flex-col gap-4 text-base text-slate-800">
              <div className="flex items-start gap-3">
                <RealisticCreditCardIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed font-normal">
                  <strong className="text-slate-900 font-medium block">
                    Flexible Payment Methods:
                  </strong>
                  We accept PayPal, Zelle, Venmo, and CashApp.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <RealisticShieldCheckIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed font-normal">
                  <strong className="text-slate-900 font-medium block">
                    Price Match Promise:
                  </strong>
                  We match or beat any insured competitor's verified rate.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 (Guarantee & Peace of Mind - Dark UI) */}
          <div
            id="card-guarantee-dark"
            className="bg-[#051A24] text-[#F6FCFF] rounded-2xl md:rounded-3xl p-6 md:p-8 mt-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <RealisticSparklesIcon className="w-5 h-5" />
              <h3 className="text-xl font-semibold text-[#F6FCFF]">
                Our Guarantee
              </h3>
            </div>

            <p className="text-base md:text-lg text-slate-200 leading-relaxed font-normal mb-6">
              We promptly re-clean anything missed within a 24-hour notice.
            </p>

            <div className="flex flex-col gap-3 mb-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <RealisticCheckCircleIcon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium text-[#F6FCFF]">
                  Insured and bonded for your full protection.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <RealisticCheckCircleIcon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium text-[#F6FCFF]">
                  Registered with Bexar County, Texas.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <RealisticCheckCircleIcon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium text-[#F6FCFF]">
                  Angie Certified with verified references available.
                </span>
              </div>
            </div>

            <p className="text-xs text-[#E0EBF0]/70 leading-relaxed font-mono pt-4 border-t border-white/10">
              * Special discounts for military, first responders, and senior citizens.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        onOpenEstimate={() => onOpenEstimate('General Inquiries')}
        onOpenServices={onNavigateServices}
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
