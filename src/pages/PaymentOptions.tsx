import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import {
  RealisticArrowLeftIcon,
  RealisticPhoneCallIcon,
  RealisticLockIcon,
  RealisticSparklesIcon,
  RealisticShieldCheckIcon,
  RealisticGiftIcon,
  RealisticCheckCircle2Icon,
} from '../components/RealisticIcons';
import { Button } from '../components/Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Footer } from '../components/Footer';
import { CopyrightBar } from '../components/CopyrightBar';
import { BottomNav } from '../components/BottomNav';

interface PaymentOptionsProps {
  onNavigateHome: () => void;
  onNavigateServices: () => void;
  onNavigateContact: () => void;
  onNavigateAbout: () => void;
  onNavigateTestimonials: () => void;
  onOpenEstimate: (serviceTitle?: string) => void;
  onOpenPhotos?: () => void;
}

export const PaymentOptions: React.FC<PaymentOptionsProps> = ({
  onNavigateHome,
  onNavigateServices,
  onNavigateContact,
  onNavigateAbout,
  onNavigateTestimonials,
  onOpenEstimate,
  onOpenPhotos = () => {},
}) => {
  const { ref: heroRef, isInView: heroInView } = useInViewAnimation(0.05);
  const { ref: consoleRef, isInView: consoleInView } = useInViewAnimation(0.1);

  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const parsedAmount = parseFloat(customAmount);
  const isAmountValid = !isNaN(parsedAmount) && parsedAmount > 0;

  return (
    <PayPalScriptProvider
      options={{
        clientId: 'AVGP-plycWakmbhyVna9G1ZPvKqC62VZQIHGu2MwhTI_DSlC8shGO-wansDgvp8lrCWqigRLwgWPw_Tx',
        currency: 'USD',
        intent: 'capture',
      }}
    >
      <div className="min-h-screen w-full bg-[#F4F9FF] text-[#051A24] flex flex-col items-center relative overflow-x-hidden selection:bg-[#051A24] selection:text-white">
      {/* Route-specific Dynamic Head Management & Canonical Self-Reference */}
      <Helmet>
        <title>Online Payment & Invoicing | Mom's House Cleaning San Antonio</title>
        <meta
          name="description"
          content="Securely pay for your house cleaning service online with Mom's House Cleaning San Antonio. We accept PayPal, Credit/Debit cards, Zelle, Venmo, and CashApp."
        />
        <link rel="canonical" href="https://www.momshousecleaning.com/payment/" />
        <meta property="og:title" content="Online Payment & Invoicing | Mom's House Cleaning San Antonio" />
        <meta
          property="og:description"
          content="Securely pay for your house cleaning service online with Mom's House Cleaning San Antonio. We accept PayPal, Credit/Debit cards, Zelle, Venmo, and CashApp."
        />
        <meta property="og:url" content="https://www.momshousecleaning.com/payment/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Online Payment & Invoicing | Mom's House Cleaning San Antonio" />
        <meta
          name="twitter:description"
          content="Securely pay for your house cleaning service online with Mom's House Cleaning San Antonio. We accept PayPal, Credit/Debit cards, Zelle, Venmo, and CashApp."
        />
      </Helmet>

      {/* Breadcrumb / Back Navigation */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 mx-auto pt-6 pb-2 flex items-center justify-between">
        <button
          id="btn-payment-back-home"
          onClick={onNavigateHome}
          className="flex items-center gap-2 text-xs md:text-sm font-mono uppercase tracking-wider text-[#051A24]/80 hover:text-[#051A24] transition-colors cursor-pointer py-1.5 px-3 rounded-full bg-slate-100/80 hover:bg-slate-200/80"
        >
          <RealisticArrowLeftIcon className="w-4 h-4" />
          <span>Home / Make a Payment</span>
        </button>

        <span className="text-xs font-mono text-[#051A24]/60 uppercase tracking-widest hidden sm:inline-block">
          256-Bit SSL Encrypted • Direct Portal
        </span>
      </div>

      {/* TASK 1: HERO SECTION (Centered & Minimalist) */}
      <section
        ref={heroRef}
        id="payment-hero-section"
        className="w-full py-8 px-4 md:py-24 md:px-12 mx-auto flex flex-col items-center text-center"
      >
        <p
          id="payment-hero-tagline"
          style={{ animationDelay: '0.1s' }}
          className={`font-mono text-xs md:text-sm text-[#051A24] uppercase tracking-widest font-medium mb-2 md:mb-3 will-change-transform ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Simple & Secure
        </p>

        <h1
          id="payment-hero-heading"
          style={{ animationDelay: '0.2s' }}
          className={`font-heading text-[38px] sm:text-[64px] md:text-[80px] leading-tight text-[#0D212C] font-semibold tracking-tight max-w-4xl will-change-transform ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Make a <span className="block sm:inline">Payment.</span>
        </h1>
      </section>

      {/* TASK 2: THE SECURE CHECKOUT CONSOLE */}
      <section
        ref={consoleRef}
        id="checkout-console-section"
        className="w-full max-w-[600px] mx-auto py-8 px-4 md:py-24 md:px-12 flex flex-col gap-6 md:gap-8 items-center"
      >
        <div
          style={{ animationDelay: '0.2s' }}
          className={`w-full bg-white rounded-2xl md:rounded-3xl shadow-sm p-6 md:p-8 border border-slate-200/80 will-change-transform ${
            consoleInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {/* STEP 1: Direct Contact Header */}
          <div
            id="checkout-direct-contact-header"
            className="text-center mb-8 pb-8 border-b border-gray-100 flex flex-col items-center"
          >
            <div className="flex items-center justify-center gap-1.5 text-base text-slate-800 mb-1.5 font-normal">
              <RealisticPhoneCallIcon className="w-4 h-4" />
              <span>Call or Text Us:</span>
            </div>

            <a
              href="tel:+12103808066"
              id="payment-phone-link"
              className="font-heading text-3xl sm:text-4xl text-slate-900 tracking-tight font-semibold hover:opacity-80 transition-opacity"
            >
              210.380.8066
            </a>

            <span className="text-xs font-mono uppercase tracking-widest text-slate-600 mt-1">
              Questions regarding invoice or amount?
            </span>
          </div>

          {/* STEP 2: The Payment Gateway Form */}
          <div id="checkout-gateway-form" className="w-full">
            <h2 className="font-heading text-xl font-semibold text-slate-900 mb-6 text-center tracking-tight">
              Pay Mom's House Cleaning
            </h2>

            {paymentSuccess ? (
              <div
                id="payment-success-message"
                className="p-6 bg-[#EBF5FB] border border-[#051A24]/10 rounded-2xl flex flex-col items-center text-center gap-3 animate-fade-in-up"
              >
                <div className="w-12 h-12 rounded-full bg-[#051A24] text-white flex items-center justify-center">
                  <RealisticCheckCircle2Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl text-[#051A24] font-semibold">
                  Payment Processed!
                </h3>
                <p className="text-sm text-[#273C46] leading-relaxed">
                  Thank you for your payment of <strong className="text-[#051A24] font-semibold">${customAmount || '0.00'} USD</strong>. A receipt has been sent to your email.
                </p>
                <button
                  onClick={() => {
                    setPaymentSuccess(false);
                    setCustomAmount('');
                    setErrorMessage('');
                  }}
                  className="mt-2 text-xs font-mono uppercase tracking-wider text-[#051A24] underline hover:opacity-75 cursor-pointer"
                >
                  Make Another Payment
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {/* Price Input Field */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="payment-amount-input"
                    className="text-xs text-gray-500 font-medium"
                  >
                    Please write in a price
                  </label>

                  <div
                    className={`flex items-center bg-[#F6FCFF] border-2 rounded-lg p-3 transition-colors ${
                      errorMessage
                        ? 'border-red-500/80 bg-red-50/20'
                        : 'border-[#0D212C]/10 focus-within:border-[#051A24]'
                    }`}
                  >
                    <span className="text-[#051A24] font-semibold text-lg mr-2 select-none">
                      $
                    </span>
                    <input
                      id="payment-amount-input"
                      type="text"
                      inputMode="decimal"
                      value={customAmount}
                      onChange={(e) => {
                        // Strip non-numeric characters except single decimal point
                        const sanitized = e.target.value.replace(/[^0-9.]/g, '');
                        // Prevent multiple decimals
                        const parts = sanitized.split('.');
                        const formatted = parts.length > 2 ? `${parts[0]}.${parts.slice(1).join('')}` : sanitized;
                        setCustomAmount(formatted);
                        if (errorMessage) setErrorMessage('');
                      }}
                      placeholder="0.00"
                      className="bg-transparent w-full text-base font-semibold text-[#051A24] placeholder:text-[#273C46]/30 focus:outline-none"
                    />
                    <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#273C46]/60 select-none ml-2">
                      USD
                    </span>
                  </div>

                  {errorMessage && (
                    <p className="text-xs text-red-600 font-medium animate-fade-in">
                      {errorMessage}
                    </p>
                  )}
                </div>

                {/* Gatekeeper notice when empty or zero */}
                {!isAmountValid && (
                  <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-800 text-center">
                    Please enter a valid amount greater than $0.00 to activate PayPal checkout.
                  </div>
                )}

                {/* Live Testing PayPal Buttons */}
                <div
                  id="paypal-button-container"
                  className={`w-full transition-opacity duration-200 ${
                    !isAmountValid ? 'opacity-50 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <PayPalButtons
                    key={customAmount || 'empty'}
                    disabled={!isAmountValid}
                    style={{ layout: 'vertical', shape: 'rect' }}
                    createOrder={(data, actions) => {
                      if (!isAmountValid) {
                        setErrorMessage('Please enter a valid payment amount.');
                        return Promise.reject(new Error('Invalid amount'));
                      }
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: customAmount || '0.00',
                              currency_code: 'USD',
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      if (actions.order) {
                        return actions.order.capture().then((details) => {
                          const givenName =
                            details.payer?.name?.given_name || 'Valued Customer';
                          alert('Transaction completed by ' + givenName);
                          setPaymentSuccess(true);
                        });
                      }
                      return Promise.resolve();
                    }}
                    onError={(err) => {
                      console.error('PayPal Order Error:', err);
                      setErrorMessage('Transaction could not be initialized. Please check the amount.');
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* STEP 3: Alternative Payments & Guarantees */}
          <div
            id="checkout-alternative-payments"
            className="text-base text-slate-800 text-center mt-8 space-y-4 pt-6 border-t border-slate-100"
          >
            <div className="flex items-center justify-center gap-2 font-medium text-slate-900">
              <RealisticSparklesIcon className="w-4 h-4" />
              <span>We also accept Zelle, Venmo, and CashApp.</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-slate-800">
              <RealisticGiftIcon className="w-4 h-4" />
              <span>Gift Certificates Available upon Request. (Valid for one year.)</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-slate-900 font-medium bg-slate-50 py-2.5 px-4 rounded-xl border border-slate-200/60">
              <RealisticShieldCheckIcon className="w-4 h-4" />
              <span>We match or beat any insured competitor's verified rate.</span>
            </div>
          </div>
        </div>

        {/* TASK 4: BOTTOM CTA */}
        <div
          style={{ animationDelay: '0.3s' }}
          className={`flex flex-col items-center gap-2 text-center will-change-transform ${
            consoleInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <button
            id="btn-payment-bottom-estimate"
            onClick={onNavigateContact}
            className="bg-white text-[#051A24] font-medium px-8 py-3 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-md hover:bg-slate-50 transition-all cursor-pointer text-sm font-body"
          >
            Contact Us for a FREE estimate.
          </button>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#051A24]/60 mt-1">
            <RealisticLockIcon className="w-3.5 h-3.5" />
            <span>Encrypted SSL 256-bit Checkout</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        onOpenEstimate={() => onOpenEstimate('General Inquiries')}
        onOpenServices={onNavigateServices}
        onOpenAbout={onNavigateAbout}
        onOpenPhotos={onOpenPhotos}
        onOpenTestimonials={onNavigateTestimonials}
        onOpenPayment={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenContact={onNavigateContact}
      />

      {/* Copyright Bar */}
      <CopyrightBar />

      {/* Fixed Bottom Nav */}
      <BottomNav onCallOrText={() => window.open('tel:2103808066', '_self')} />
    </div>
  </PayPalScriptProvider>
  );
};
