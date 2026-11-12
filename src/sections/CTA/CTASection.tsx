import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';

interface CTASectionProps {
  onGetStarted?: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onGetStarted }) => {
  const handleClick = () => {
    if (onGetStarted) {
      onGetStarted();
    } else {
      window.location.href = '/signup';
    }
  };

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-slate-950">
      {/* Background 3D Radial Glow and Geometric Rings */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/25 via-slate-950 to-slate-950 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-14 border border-cyan-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950/95 backdrop-blur-2xl shadow-2xl overflow-hidden glow-cyan">
          {/* Subtle floating decorative elements */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-6">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>MODERNIZE YOUR PHARMACY TODAY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Your Pharmacy Deserves Better Technology.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Take control of your pharmacy operations with PharmaDesk. Eliminate stock-outs, stop expiry losses, and deliver faster billing experiences.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-xl glow-cyan transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-base"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Guarantees */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Zero hardware investment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
