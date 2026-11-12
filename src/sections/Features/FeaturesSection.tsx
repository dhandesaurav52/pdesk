import React, { useState } from 'react';
import {
  Boxes,
  Receipt,
  Calendar,
  Truck,
  Users,
  TrendingUp,
  AlertTriangle,
  FileSpreadsheet,
  ArrowRight,
  Sparkles,
  Layers,
} from 'lucide-react';
import { FEATURES_CONFIG } from '../../config/featuresConfig';
import { FeatureItem } from '../../types';

export const FeaturesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Boxes':
        return <Boxes className="w-6 h-6 text-cyan-400" />;
      case 'Receipt':
        return <Receipt className="w-6 h-6 text-sky-400" />;
      case 'CalendarAlert':
        return <Calendar className="w-6 h-6 text-amber-400" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-indigo-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-emerald-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-blue-400" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-6 h-6 text-rose-400" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-6 h-6 text-purple-400" />;
      default:
        return <Boxes className="w-6 h-6 text-cyan-400" />;
    }
  };

  const filteredFeatures =
    activeCategory === 'all'
      ? FEATURES_CONFIG.features
      : FEATURES_CONFIG.features.filter((f) => f.category === activeCategory);

  return (
    <section id="features" className="py-24 sm:py-32 relative bg-slate-950/70">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Complete Pharmacy Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {FEATURES_CONFIG.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            {FEATURES_CONFIG.subtitle}
          </p>
        </div>

        {/* Filter categories tabs */}
        <div className="mt-10 flex items-center justify-center">
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'All 8 Capabilities' },
              { id: 'inventory', label: 'Inventory & Stock' },
              { id: 'billing', label: 'Counter Billing' },
              { id: 'compliance', label: 'GST & Compliance' },
              { id: 'analytics', label: 'Business Analytics' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Premium Feature Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFeatures.map((feature: FeatureItem, idx: number) => {
            const isHovered = hoveredId === feature.id;

            return (
              <div
                key={feature.id}
                onMouseEnter={() => setHoveredId(feature.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between ${
                  isHovered
                    ? 'bg-slate-900/90 border-cyan-500/40 shadow-2xl -translate-y-1.5 glow-cyan'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700/90'
                }`}
                style={{
                  perspective: '1000px',
                }}
              >
                {/* Subtle top indicator */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 group-hover:scale-110 group-hover:border-cyan-500/40 transition-transform duration-300 shadow-inner">
                      {getIcon(feature.iconName)}
                    </div>
                    {feature.badge && (
                      <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded-full">
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Highlight Metric */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono text-[11px]">
                    {feature.highlightMetric}
                  </span>
                  <span className="text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
