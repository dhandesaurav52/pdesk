import React, { useState } from 'react';
import {
  UserPlus,
  UploadCloud,
  Store,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  QrCode,
  Sparkles,
} from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      step: 1,
      title: 'Create your pharmacy account',
      subtitle: 'Setup store profile in 60 seconds',
      description:
        'Register your pharmacy with your basic business details, Drug License (DL) number, and GSTIN. Choose your counter configuration and invite your pharmacists.',
      icon: <UserPlus className="w-6 h-6 text-cyan-400" />,
      features: [
        'Instant multi-counter account creation',
        'Drug License & GST registration validation',
        'Role configuration (Proprietor, Cashier, Pharmacist)',
        'Zero hardware lock-in: runs on any browser or tablet',
      ],
      previewGraphic: (
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <span className="text-xs font-semibold text-slate-300">Step 1 · Store Details</span>
            <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded">
              Verified Setup
            </span>
          </div>
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-slate-400 block mb-1">Pharmacy Name</label>
              <div className="bg-slate-950 px-3 py-2 rounded-lg border border-slate-800 text-white font-medium">
                Sanjivani Medical & General Stores
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-slate-400 block mb-1">Drug License #</label>
                <div className="bg-slate-950 px-3 py-2 rounded-lg border border-slate-800 text-slate-300 font-mono text-[11px]">
                  MH-MZ2-489110
                </div>
              </div>
              <div>
                <label className="text-slate-400 block mb-1">GSTIN</label>
                <div className="bg-slate-950 px-3 py-2 rounded-lg border border-slate-800 text-slate-300 font-mono text-[11px]">
                  27AABCS1429B1Z
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      step: 2,
      title: 'Add medicines and inventory',
      subtitle: 'Pre-populated 250k+ Indian medicine database',
      description:
        'Import your current stock effortlessly. PharmaDesk comes with over 250,000 verified Indian medicines pre-loaded with MRP, HSN, salts, and manufacturers. Upload via Excel or scan barcodes directly.',
      icon: <UploadCloud className="w-6 h-6 text-sky-400" />,
      features: [
        'One-click Excel / CSV stock migration from old software',
        '250,000+ pre-mapped Indian brands (Cipla, Sun, Abbott, Mankind)',
        'Direct distributor invoice (CSV/XML) inward mapping',
        'Barcode scanner auto-detection on any USB/Bluetooth scanner',
      ],
      previewGraphic: (
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <span className="text-xs font-semibold text-slate-300">Step 2 · Quick Catalog Import</span>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded">
              Ready to Match
            </span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-white font-medium">Dolo 650 Tablet (Paracetamol)</div>
                <div className="text-[10px] text-slate-400">Micro Labs · HSN 300490 · Batch ML-89</div>
              </div>
              <span className="text-cyan-400 font-mono text-xs font-semibold">120 Strips</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-white font-medium">Pan-40 (Pantoprazole Sodium)</div>
                <div className="text-[10px] text-slate-400">Alkem · HSN 300490 · Batch AL-41</div>
              </div>
              <span className="text-cyan-400 font-mono text-xs font-semibold">85 Strips</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      step: 3,
      title: 'Start managing your pharmacy',
      subtitle: 'Live counter billing, expiry alerts & growth',
      description:
        'Begin high-speed billing immediately. Issue printed or WhatsApp receipts, monitor batch expiries, manage distributor purchase returns, and track day-end cash registers effortlessly.',
      icon: <Store className="w-6 h-6 text-emerald-400" />,
      features: [
        'Under 5-second prescription billing checkout',
        'Instant WhatsApp & SMS bill dispatch with payment QR',
        'Automatic 30/60/90 days expiry alerts & return slips',
        'Daily profit, tax & cash closing analytics',
      ],
      previewGraphic: (
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <span className="text-xs font-semibold text-slate-300">Step 3 · Live Counter Activated</span>
            <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded">
              Terminal Active
            </span>
          </div>
          <div className="bg-slate-950 rounded-lg p-3 border border-slate-800 text-center">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-2">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-white">Counter Billing Live</div>
            <p className="text-[11px] text-slate-400 mt-1">
              Thermal printer connected · Scanner synced · Real-time GST ledger running
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative bg-slate-950/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Effortless Onboarding</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Get Your Pharmacy Running in Three Simple Steps.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            No weeks of complicated training or expensive IT consultants. Switch to PharmaDesk in an afternoon without halting your ongoing daily counter sales.
          </p>
        </div>

        {/* Step Selector Timeline Navigation */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((s) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(s.step)}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                activeStep === s.step
                  ? 'bg-slate-900 border-cyan-500/60 shadow-xl glow-cyan scale-[1.02]'
                  : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700/90 hover:bg-slate-900/60'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`w-8 h-8 rounded-xl font-bold flex items-center justify-center text-xs font-mono ${
                    activeStep === s.step
                      ? 'bg-cyan-500 text-slate-950'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  0{s.step}
                </span>
                <span className="p-2 rounded-lg bg-slate-800/60">{s.icon}</span>
              </div>
              <h3 className="text-base font-bold text-white">{s.title}</h3>
              <p className="text-xs text-slate-400 mt-1">{s.subtitle}</p>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Deep-Dive Container */}
        {steps.map((s) => {
          if (s.step !== activeStep) return null;
          return (
            <div
              key={s.step}
              className="mt-10 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-10 shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Step Explanations & Capabilities */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider font-mono">
                    <span>STEP 0{s.step} OF 03</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {s.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {s.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        if (s.step < 3) {
                          setActiveStep(s.step + 1);
                        } else {
                          const el = document.getElementById('pricing');
                          el?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-800/60 transition-colors inline-flex items-center gap-2 cursor-pointer"
                    >
                      <span>{s.step < 3 ? `Next: Step 0${s.step + 1}` : 'View Flexible Plans'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right: Interactive Graphic Preview */}
                <div className="lg:col-span-5">{s.previewGraphic}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
