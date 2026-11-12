import React, { useState } from 'react';
import { Check, X, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { PRICING_CONFIG } from '../../config/pricingConfig';
import { PricingPlan } from '../../types';

interface PricingSectionProps {
  onSelectPlan?: (planId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const handleCtaClick = (plan: PricingPlan) => {
    if (onSelectPlan) {
      onSelectPlan(plan.id);
    } else {
      window.location.href = `/signup?plan=${plan.id}`;
    }
  };

  return (
    <section id="pricing" className="py-24 sm:py-32 relative bg-slate-950">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3 font-mono">
            <span>TRANSPARENT SUBSCRIPTION TIERS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {PRICING_CONFIG.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            {PRICING_CONFIG.subheadline}
          </p>

          {/* Billing Cycle Switcher */}
          <div className="mt-8 flex items-center justify-center">
            <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  billingCycle === 'annual'
                    ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Annual Billing</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-slate-950/20">
                  Save {PRICING_CONFIG.annualDiscountPercentage}%
                </span>
              </button>
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-400 italic">
            {PRICING_CONFIG.disclaimer}
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_CONFIG.plans.map((plan: PricingPlan) => {
            const price =
              billingCycle === 'annual' ? plan.annualPricePerMonth : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-slate-900 border-2 border-cyan-400/80 shadow-2xl lg:-translate-y-2 glow-cyan'
                    : 'bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/90'
                } p-6 sm:p-8`}
              >
                {/* Popular Recommended Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 text-xs font-bold py-1 px-4 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>RECOMMENDED FOR PHARMACIES</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    {plan.highlightNote && (
                      <span className="text-[11px] text-cyan-300 font-mono bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded">
                        {plan.highlightNote}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-slate-400 min-h-[38px]">
                    {plan.tagline}
                  </p>

                  {/* Pricing Display */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {plan.currency}{price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-400">/ month</span>
                  </div>

                  <div className="text-[11px] text-slate-400 mt-1 font-mono">
                    {billingCycle === 'annual'
                      ? `Billed annually at ${plan.currency}${(price * 12).toLocaleString('en-IN')}/yr`
                      : 'Billed on month-to-month cycle'}
                  </div>

                  {/* Features Included */}
                  <div className="mt-8 space-y-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      What's Included
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}

                    {/* Features Not Included (if any) */}
                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <div className="pt-2 space-y-2 opacity-60">
                        {plan.notIncluded.map((nfeat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-400">
                            <X className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                            <span className="line-through">{nfeat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => handleCtaClick(plan)}
                    className={`w-full py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-bold shadow-lg'
                        : 'bg-slate-800/90 hover:bg-slate-700 text-white border border-slate-700 hover:border-cyan-500/30'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
