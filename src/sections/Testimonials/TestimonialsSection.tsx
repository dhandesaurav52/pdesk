import React from 'react';
import { Quote, Sparkles, Building2, User } from 'lucide-react';
import { TestimonialItem } from '../../types';

export const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: 'test-1',
      quote:
        'Managing expiring batches was previously a nightmare with manual ledger entries. Having an automatic 60-day expiry radar and one-click distributor return memos saves hours every week.',
      role: 'Chemist Store Proprietor (Representative Scenario)',
      pharmacyType: 'Retail Medical Store · 2 Counters',
      location: 'Pune, Maharashtra',
      initials: 'RS',
      tag: 'Expiry Automation',
      isPlaceholder: true,
    },
    {
      id: 'test-2',
      quote:
        'During evening rush hours, customers cannot wait 2 minutes for a bill. With keyboard-first search and barcode scanning, our staff clocks sales in under 5 seconds with automatic GST calculation.',
      role: 'Lead Pharmacist (Representative Scenario)',
      pharmacyType: 'High-Volume Chemist & Druggist',
      location: 'Bengaluru, Karnataka',
      initials: 'VK',
      tag: 'Counter Billing Speed',
      isPlaceholder: true,
    },
    {
      id: 'test-3',
      quote:
        'The ability to access live stock counts from my smartphone while meeting distributors allows us to order precisely what is moving fast, avoiding dead capital on the shelves.',
      role: 'Pharmacy Chain Director (Representative Scenario)',
      pharmacyType: 'Multi-Branch Pharmacy Group',
      location: 'Ahmedabad, Gujarat',
      initials: 'AP',
      tag: 'Multi-Store Cloud Sync',
      isPlaceholder: true,
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono mb-4">
            <span>INDICATIVE PILOT FEEDBACK & USE CASES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Designed Around Real Pharmacy Workflows
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Engineered to solve the exact operational bottlenecks faced by chemist store owners and retail pharmacists across India every single day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-cyan-400">
                    <Quote className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-800/40 px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center font-bold text-xs text-white shadow-md">
                  {item.initials}
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">{item.role}</div>
                  <div className="text-[11px] text-slate-400">
                    {item.pharmacyType} · {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-10 text-center text-xs text-slate-400 font-mono">
          * Note: Quotes above represent prospective pilot customer scenarios and workflows. No endorsement by trademarked medical entities is implied.
        </div>
      </div>
    </section>
  );
};
