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

  React.useEffect(() => {
    if (initialService) {
      setServiceType(initialService);
    }
  }, [initialService]);

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

  React.useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Hourly rates and time-based calculations
  const getHourlyRate = () => {
    if (serviceType === 'Initial Cleaning') return 50;
    if (serviceType === 'Recurring Maintenance') return 45;
    if (serviceType === "Cleanouts & Make-Ready's") return 55;
    if (serviceType === 'Short Term Rentals (B&B)') return 48;
    if (serviceType === 'Extra & Maid Services') return 45;
    if (serviceType === 'Lawn Care') return 55;
    if (serviceType === 'Carpet Cleaning') return 60;
    return 45;
  };

  const calculateHoursAndTime = () => {
    let baseHours = 2.0;
    if (serviceType === 'Initial Cleaning') baseHours = 2.5;
    else if (serviceType === "Cleanouts & Make-Ready's") baseHours = 3.0;

    const roomHours = bedrooms * 0.5 + bathrooms * 0.5;
    const petHours = hasPets ? 0.5 : 0;
    const rawHours = baseHours + roomHours + petHours;
    // Strict 2-hour minimum applies to all services
    const estimatedHours = Math.max(2, Math.round(rawHours * 2) / 2);
    const hourlyRate = getHourlyRate();

    const low = Math.round(estimatedHours * hourlyRate);
    const high = Math.round((estimatedHours + 0.5) * hourlyRate);

    return {
      hourlyRate,
      estimatedHours,
      low,
      high,
    };
  };

  const estimate = calculateHoursAndTime();

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
      message: `Hourly Estimate: $${estimate.low} - $${estimate.high} (${estimate.estimatedHours} hrs @ $${estimate.hourlyRate}/hr) | Beds: ${bedrooms} | Baths: ${bathrooms} | Pets: ${hasPets ? 'Yes' : 'No'} | Location: ${address || 'San Antonio'} (*2-hour minimum applies)`,
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
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      data-lenis-prevent="true"
    >
      <div
        className="relative w-full max-w-md bg-white rounded-[20px] md:rounded-[24px] shadow-2xl p-4 sm:p-5 md:p-6 my-auto max-h-[90vh] overflow-y-auto border border-slate-200/80 overscroll-contain"
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
            <div className="bg-slate-50 rounded-xl p-3.5 w-full text-left mb-4 border border-slate-200/60 font-mono text-[11px] text-[#051A24] space-y-1">
              <p className="font-bold text-xs mb-1">Service: {serviceType}</p>
              <p>Billing Rate: <span className="font-semibold">${estimate.hourlyRate} / Hour</span></p>
              <p>Estimated Time: <span className="font-semibold">{estimate.estimatedHours} Hours</span></p>
              <p>Estimated Range: <span className="font-semibold">${estimate.low} – ${estimate.high}</span></p>
              <p className="text-amber-700 font-semibold pt-1 border-t border-slate-200/60">
                *2-hour minimum applies to all services*
              </p>
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
                  <option value="Initial Cleaning">Initial Cleaning ($50/hr)</option>
                  <option value="Recurring Maintenance">Recurring Maintenance ($45/hr)</option>
                  <option value="Cleanouts & Make-Ready's">Cleanouts & Make-Ready's ($55/hr)</option>
                  <option value="Short Term Rentals (B&B)">Short Term Rentals (B&B) ($48/hr)</option>
                  <option value="Extra & Maid Services">Extra & Maid Services ($45/hr)</option>
                  <option value="Lawn Care">Lawn Care ($55/hr)</option>
                  <option value="Carpet Cleaning">Carpet Cleaning ($60/hr)</option>
                </select>
              </div>

              {/* Home Details Grid (Bedrooms & Bathrooms Time Estimator) */}
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#051A24] mb-0.5 font-semibold">
                    Number of Bedrooms
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(Math.max(1, Number(e.target.value)))}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#051A24] bg-white text-[#051A24]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#051A24] mb-0.5 font-semibold">
                    Number of Bathrooms
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="8"
                    step="0.5"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(Math.max(1, Number(e.target.value)))}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#051A24] bg-white text-[#051A24]"
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

              {/* Live Hourly Estimate Card */}
              <div className="bg-[#051A24] text-white rounded-xl p-3 flex flex-col gap-2 shadow-inner">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#E0EBF0]/70 font-mono uppercase">
                      Estimated Time & Rate
                    </span>
                    <div className="text-sm font-semibold text-white font-mono">
                      ~{estimate.estimatedHours} hrs @ ${estimate.hourlyRate} / Hour
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[#E0EBF0]/70 font-mono uppercase block">
                      Estimated Total
                    </span>
                    <div className="text-lg sm:text-xl font-bold tracking-tight text-white font-mono">
                      ${estimate.low} – ${estimate.high}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-amber-300 font-mono font-medium">
                    *2-hour minimum applies to all services*
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-mono">
                    <RealisticSparklesIcon className="w-3 h-3" /> Hourly Rate
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
