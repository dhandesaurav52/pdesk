import React from 'react';
import { 
  TrendingUp, 
  AlertTriangle, 
  Calendar, 
  Receipt, 
  ShieldCheck, 
  Package
} from 'lucide-react';

interface HeroFloatingCardsProps {
  mouseOffset?: { x: number; y: number };
}

export const HeroFloatingCards: React.FC<HeroFloatingCardsProps> = ({
  mouseOffset = { x: 0, y: 0 },
}) => {
  const mx = mouseOffset.x * 20;
  const my = mouseOffset.y * 20;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* 1. Top-Left: Live Sales Counter & Velocity */}
      <div
        className="absolute top-[8%] left-[2%] sm:left-[6%] md:left-[8%] transition-transform duration-300 ease-out z-20"
        style={{ transform: `translate3d(${-mx * 0.9}px, ${-my * 0.9}px, 0)` }}
      >
        <div className="glass-panel rounded-xl p-3.5 shadow-2xl border border-cyan-500/25 max-w-[210px] sm:max-w-[240px]">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-slate-400 font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
              Today's Counter Sales
            </span>
            <span className="text-emerald-400 font-semibold text-[11px]">+18.4%</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-baseline gap-1">
            <span className="text-cyan-400 text-sm font-normal">₹</span>
            48,650
            <span className="text-[10px] text-slate-400 font-normal ml-1">· 142 Bills</span>
          </div>
          <div className="mt-2 pt-2 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-300">
            <span>Avg Bill: ₹342</span>
            <span className="text-cyan-400 flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> Peak 7 PM
            </span>
          </div>
        </div>
      </div>

      {/* 2. Top-Right: Critical Expiry Notification */}
      <div
        className="absolute top-[12%] right-[2%] sm:right-[6%] md:right-[6%] transition-transform duration-300 ease-out z-20"
        style={{ transform: `translate3d(${mx * 1.1}px, ${-my * 1.1}px, 0)` }}
      >
        <div className="glass-panel rounded-xl p-3.5 shadow-2xl border border-amber-500/30 max-w-[210px] sm:max-w-[250px]">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="p-1.5 rounded-lg bg-amber-500/15 text-amber-400">
              <Calendar className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-200">Expiry Guard Alert</div>
              <div className="text-[10px] text-amber-300/90">Batch: AUG-2026 (60d)</div>
            </div>
          </div>
          <div className="text-xs text-slate-300 font-medium">
            Augmentin 625 Duo <span className="text-slate-400 text-[11px]">(18 Strips)</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-[10px]">
            <span className="text-slate-400">Distributor: MedPlus Hub</span>
            <span className="text-amber-400 font-medium underline cursor-pointer pointer-events-auto">
              Auto-Return Memo
            </span>
          </div>
        </div>
      </div>

      {/* 3. Bottom-Left: Fast POS Invoicing Card */}
      <div
        className="absolute bottom-[10%] left-[3%] sm:left-[8%] md:left-[10%] transition-transform duration-300 ease-out z-20"
        style={{ transform: `translate3d(${-mx * 1.2}px, ${my * 1.2}px, 0)` }}
      >
        <div className="glass-panel rounded-xl p-3.5 shadow-2xl border border-sky-500/25 max-w-[220px] sm:max-w-[250px]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-mono text-cyan-300 flex items-center gap-1">
              <Receipt className="w-3 h-3 text-cyan-400" />
              INV-2026-0891
            </span>
            <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
              GST Invoiced
            </span>
          </div>
          <div className="text-xs font-semibold text-white">Rahul Verma</div>
          <div className="text-[11px] text-slate-300 mt-0.5">3 Items · Paracetamol, Azithral</div>
          <div className="mt-2 pt-2 border-t border-slate-700/50 flex items-center justify-between text-xs">
            <span className="text-slate-400">Paid via UPI</span>
            <span className="font-semibold text-white">₹745.00</span>
          </div>
        </div>
      </div>

      {/* 4. Bottom-Right: Low Stock Threshold Alert */}
      <div
        className="absolute bottom-[14%] right-[3%] sm:right-[8%] md:right-[10%] transition-transform duration-300 ease-out z-20"
        style={{ transform: `translate3d(${mx * 0.8}px, ${my * 0.8}px, 0)` }}
      >
        <div className="glass-panel rounded-xl p-3.5 shadow-2xl border border-rose-500/30 max-w-[210px] sm:max-w-[240px]">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="p-1.5 rounded-lg bg-rose-500/15 text-rose-400">
              <AlertTriangle className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Low Stock Warning</div>
              <div className="text-[10px] text-rose-300">Below Reorder Level (10)</div>
            </div>
          </div>
          <div className="text-xs text-slate-200 font-medium">
            Telma-40mg <span className="text-rose-400 font-semibold">(4 left)</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] pt-1.5 border-t border-slate-800">
            <span className="text-slate-400 text-[10px]">Vendor: Cipla Direct</span>
            <span className="text-cyan-400 font-medium text-[10px] pointer-events-auto cursor-pointer">
              + Add to PO
            </span>
          </div>
        </div>
      </div>

      {/* 5. Center-Floating Micro Badges */}
      <div 
        className="hidden md:flex absolute top-[28%] left-[24%] items-center gap-1.5 glass-panel-subtle px-2.5 py-1 rounded-full text-[11px] text-cyan-200 border border-cyan-500/20 shadow-lg"
        style={{ transform: `translate3d(${-mx * 0.5}px, ${-my * 0.5}px, 0)` }}
      >
        <Package className="w-3 h-3 text-cyan-400" />
        <span>250k+ Indian Brand DB</span>
      </div>

      <div 
        className="hidden md:flex absolute top-[68%] right-[24%] items-center gap-1.5 glass-panel-subtle px-2.5 py-1 rounded-full text-[11px] text-emerald-200 border border-emerald-500/20 shadow-lg"
        style={{ transform: `translate3d(${mx * 0.6}px, ${my * 0.6}px, 0)` }}
      >
        <ShieldCheck className="w-3 h-3 text-emerald-400" />
        <span>Schedule H/H1 Compliant</span>
      </div>
    </div>
  );
};
