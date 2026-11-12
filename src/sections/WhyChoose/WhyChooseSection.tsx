import React from 'react';
import {
  Sparkles,
  Eye,
  Zap,
  CalendarClock,
  Network,
  LineChart,
  Check,
  Shield,
  Layers,
} from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const pillars = [
    {
      title: 'Easy pharmacy management',
      description:
        'Designed specifically for daily retail chemist workflows. Intuitive navigation ensures cashiers, assistant pharmacists, and proprietors require zero complex software training.',
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
      highlight: 'Zero steep learning curve',
    },
    {
      title: 'Better inventory visibility',
      description:
        'Real-time stock ledger across tablets, laptops, and counter terminals. Instantly search generic substitutes and salt formulations when requested brands are out of stock.',
      icon: <Eye className="w-5 h-5 text-sky-400" />,
      highlight: 'Instant molecule lookup',
    },
    {
      title: 'Simplified billing',
      description:
        'Rapid keyboard shortcuts, barcode scanning, split payments (Cash + UPI), and automated GST calculation ensure no long queues during peak evening hours.',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      highlight: 'Frictionless counter speed',
    },
    {
      title: 'Medicine expiry monitoring',
      description:
        'Color-coded expiry radar flags batches expiring in 30, 60, or 90 days. Generate return memos for pharmaceutical distributors well before expiry deadlines.',
      icon: <CalendarClock className="w-5 h-5 text-rose-400" />,
      highlight: 'Proactive batch return slips',
    },
    {
      title: 'Centralized operations',
      description:
        'Oversee multiple counters or branches from a single unified management account. Keep vendor catalogs, price lists, customer ledgers, and staff permissions aligned.',
      icon: <Network className="w-5 h-5 text-purple-400" />,
      highlight: 'Multi-counter synchronization',
    },
    {
      title: 'Business insights',
      description:
        'Actionable daily summaries highlighting fast-moving medicines, gross margins, distributor purchase credits, and tax liability reports (GSTR-1 & 3B).',
      icon: <LineChart className="w-5 h-5 text-emerald-400" />,
      highlight: 'Clear sales & margin clarity',
    },
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Built for Modern Chemist Stores</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Pharmacy Owners Choose PharmaDesk
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Traditional desktop software is plagued by local database corruptions, cumbersome manual backups, and outdated interfaces. PharmaDesk transforms your pharmacy into a modern, cloud-connected establishment.
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60 group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-800/40 px-2 py-0.5 rounded-full">
                    {pillar.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                <Check className="w-3.5 h-3.5 text-cyan-400" />
                <span>Optimized for Indian drug retail regulations</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
