import React, { useState } from 'react';
import { ArrowRight, Play, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { CapsuleCanvas3D } from './CapsuleCanvas3D';
import { HeroFloatingCards } from './HeroFloatingCards';
import { DashboardPreview } from './DashboardPreview';
import { SITE_CONFIG } from '../../config/siteConfig';

interface HeroSectionProps {
  onNavigateAuth?: (mode: 'login' | 'signup') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigateAuth }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMouseOffset({ x, y });
  };

  const handleGetStarted = () => {
    if (onNavigateAuth) {
      onNavigateAuth('signup');
    } else {
      window.location.hash = '#pricing';
    }
  };

  const handleExplore = () => {
    const el = document.getElementById('features');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative pt-28 sm:pt-36 pb-20 sm:pb-32 overflow-hidden bg-radial-gradient bg-radial-grid"
    >
      {/* Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Kicker Label */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            {SITE_CONFIG.badgeLabel}
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.12]">
            The Future of Pharmacy Management{' '}
            <span className="text-gradient-cyan block sm:inline">Starts Here.</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            {SITE_CONFIG.description}
          </p>

          {/* Hero CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={handleGetStarted}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-lg glow-cyan transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleExplore}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
              <span>Explore Platform</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Zero credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Instant 14-day full access</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Indian GST & Schedule H1 ready</span>
            </div>
          </div>
        </div>

        {/* 3D Visual Centerpiece with Floating Glass Cards */}
        <div className="relative mt-12 sm:mt-16 w-full max-w-5xl mx-auto h-[440px] sm:h-[520px] flex items-center justify-center">
          {/* 3D Canvas */}
          <div className="w-full h-full relative z-10">
            <CapsuleCanvas3D />
          </div>

          {/* Parallax Surrounding Cards */}
          <HeroFloatingCards mouseOffset={mouseOffset} />
        </div>

        {/* Product Dashboard Preview Section */}
        <div className="mt-12 sm:mt-18">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              One Unified Command Center for Your Chemist Shop
            </h3>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl mx-auto">
              Inspect how high-speed counter billing, live inventory levels, distributor returns, and GST invoicing synchronize across every counter in real-time.
            </p>
          </div>

          <DashboardPreview />
        </div>
      </div>
    </section>
  );
};
