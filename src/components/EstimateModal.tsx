import React, { useState } from 'react';
import {
  RealisticXIcon,
  RealisticCheckCircle2Icon,
  RealisticCalculatorIcon,
  RealisticSparklesIcon,
} from './RealisticIcons';
import { Button } from './Button';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Initial Cleaning',
}) => {
  const [serviceType, setServiceType] = useState(initialService);
  const [squareFeet, setSquareFeet] = useState<number>(1800);
  const [bedrooms, setBedrooms] = useState<number>(3);
  const [bathrooms, setBathrooms] = useState<number>(2);
  const [hasPets, setHasPets] = useState<boolean>(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  // Approximate pricing calculation for customer guidance
  const calculateEstimatedPrice = () => {
    let base = 120;
    if (serviceType.includes('Deep')) base = 180;
    if (serviceType.includes('Move')) base = 220;
    if (serviceType.includes('Green')) base = 150;
    if (serviceType.includes('Airbnb')) base = 135;
    if (serviceType.includes('Yard')) base = 110;
    if (serviceType.includes('Carpet')) base = 160;

    const sqftAdd = Math.max(0, (squareFeet - 1000) * 0.045);
    const roomAdd = bedrooms * 15 + bathrooms * 25;
    const petAdd = hasPets ? 20 : 0;
    const total = Math.round(base + sqftAdd + roomAdd + petAdd);
    return {
      low: Math.round(total * 0.9),
      high: Math.round(total * 1.1),
    };
  };

  const estimate = calculateEstimatedPrice();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const formDataPayload = {
      access_key: '536d3fde-53b7-400e-8d58-a78ed6276835',
      name: name,
      email: email || 'not-provided@estimate.local',
      phone: phone,
      service: serviceType,
      message: `Estimate Calculation: $${estimate.low} - $${estimate.high} | SqFt: ${squareFeet} | Beds: ${bedrooms} | Baths: ${bathrooms} | Pets: ${hasPets ? 'Yes' : 'No'} | Location: ${address || 'San Antonio'}`,
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
      } else {
        setErrorMessage(result.message || 'Error submitting estimate. Please call (210) 380-8066.');
      }
    } catch (error) {
      console.error('Web3Forms estimate submit error:', error);
      setErrorMessage('Network issue. Please call or text (210) 380-8066.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-[#051A24]/70 backdrop-blur-sm animate-fade-in-up overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      data-lenis-prevent="true"
    >
      <div
        className="relative w-full max-w-md bg-white rounded-[20px] md:rounded-[24px] shadow-2xl p-4 sm:p-5 md:p-6 my-auto max-h-[82vh] overflow-y-auto border border-slate-200/80 overscroll-contain"
        role="dialog"
        aria-modal="true"
        data-lenis-prevent="true"
      >
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#051A24] transition-colors cursor-pointer z-10"
          aria-label="Close estimate dialog"
        >
          <RealisticXIcon className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="py-5 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-3">
              <RealisticCheckCircle2Icon className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-[#051A24] mb-1.5">
              Estimate Request Received!
            </h3>
            <p className="text-xs sm:text-sm text-[#273C46] max-w-sm mb-4 leading-relaxed">
              Thank you, <span className="font-semibold text-[#051A24]">{name || 'neighbor'}</span>. Mom's House Cleaning dispatch will text or call you at <span className="font-semibold text-[#051A24]">{phone || 'your number'}</span> shortly with your guaranteed custom quote.
            </p>
            <div className="bg-slate-50 rounded-xl p-3 w-full text-left mb-4 border border-slate-200/60 font-mono text-[11px] text-[#051A24]">
              <p className="font-bold mb-0.5">Service: {serviceType}</p>
              <p>Estimated Range: ${estimate.low} – ${estimate.high}</p>
              <p>Location: {address || 'San Antonio, TX'}</p>
              <p className="text-emerald-700 mt-1 font-semibold">✓ Price Beat Guarantee Active</p>
            </div>
            <Button variant="primary" size="sm" onClick={onClose}>
              Done
            </Button>
          </div>
        ) : (
          <div>
            <div className="mb-3.5">
              <div className="flex items-center gap-1.5 mb-0.5 text-[11px] uppercase font-mono tracking-widest text-[#051A24]/60 font-semibold">
                <RealisticCalculatorIcon className="w-3.5 h-3.5" />
                <span>San Antonio Custom Quote</span>
              </div>
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-[#0D212C] tracking-tight">
                Get a Free Cleaning Estimate
              </h2>
              <p className="text-[11px] sm:text-xs text-[#273C46] mt-0.5">
                We beat any insured & bonded competitor’s written price in San Antonio.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2.5">
              {/* Service Selection */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#051A24] mb-1 font-semibold">
                  Service Type
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#051A24] bg-slate-50 text-[#051A24]"
                >
                  <option value="Initial Cleaning">Initial Cleaning (Deep Baseline)</option>
                  <option value="Recurring Cleaning">Recurring Cleaning (Weekly / Bi-Weekly / Monthly)</option>
                  <option value="Cleanouts & Make-Readys">Cleanouts & Make-Ready's (Move In / Out)</option>
                  <option value="Short Term Rentals">Short Term Rentals (B&B Turnover)</option>
                  <option value="Extra Services">Extra & Maid Services</option>
                  <option value="Lawn Care">Lawn Care (Mowing, Edging, Cleanup)</option>
                  <option value="Carpet Cleaning">Carpet Cleaning (Deep Steam Extraction)</option>
                </select>
              </div>

              {/* Home Details Grid */}
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#051A24] mb-0.5 font-semibold">
                    Sq. Footage
                  </label>
                  <input
                    type="number"
                    min="400"
                    max="10000"
                    step="100"
                    value={squareFeet}
                    onChange={(e) => setSquareFeet(Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#051A24]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#051A24] mb-0.5 font-semibold">
                    Bedrooms
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#051A24]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#051A24] mb-0.5 font-semibold">
                    Bathrooms
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="8"
                    step="0.5"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#051A24]"
                  />
                </div>
              </div>

              {/* Pet check */}
              <label className="flex items-center gap-2 cursor-pointer pt-0.5">
                <input
                  type="checkbox"
                  checked={hasPets}
                  onChange={(e) => setHasPets(e.target.checked)}
                  className="rounded text-[#051A24] focus:ring-[#051A24] w-3.5 h-3.5"
                />
                <span className="text-[11px] text-[#273C46]">
                  We have pets (we bring pet-dander filters & pet-safe products)
                </span>
              </label>

              {/* Live Estimate Card */}
              <div className="bg-[#051A24] text-white rounded-xl p-3 flex items-center justify-between shadow-inner">
                <div>
                  <span className="text-[10px] text-[#E0EBF0]/70 font-mono uppercase">
                    Approximate Estimate
                  </span>
                  <div className="text-lg sm:text-xl font-bold tracking-tight text-white">
                    ${estimate.low} – ${estimate.high}
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-mono">
                    <RealisticSparklesIcon className="w-3 h-3" /> Family Owned
                  </span>
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <div>
                  <label className="block text-[11px] font-mono text-[#051A24] mb-0.5 font-semibold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#051A24]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#051A24] mb-0.5 font-semibold">
                    Phone / Text *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(210) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#051A24]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#051A24] mb-0.5 font-semibold">
                  San Antonio Neighborhood / Zip
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alamo Heights, Stone Oak, 78209"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#051A24]"
                />
              </div>

              {errorMessage && (
                <div className="p-2.5 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs">
                  {errorMessage}
                </div>
              )}

              <div className="pt-1.5">
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  disabled={isSubmitting}
                  className="w-full py-2.5 text-xs sm:text-sm"
                >
                  {isSubmitting ? 'Sending Request...' : 'Submit for Instant Dispatch Confirmation'}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
