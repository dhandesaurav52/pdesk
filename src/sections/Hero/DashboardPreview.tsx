import React, { useState } from 'react';
import {
  TrendingUp,
  Package,
  AlertTriangle,
  Clock,
  Search,
  Plus,
  ArrowUpRight,
  Filter,
  DollarSign,
  Calendar,
  Layers,
  Sparkles,
  ChevronRight,
  Printer,
  CheckCircle2,
} from 'lucide-react';
import { TransactionDemo, InventoryAlertDemo } from '../../types';

export const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'billing' | 'inventory' | 'expiry'>('overview');
  const [selectedMetric, setSelectedMetric] = useState<string>('sales');

  const demoTransactions: TransactionDemo[] = [
    {
      id: 'tx-1',
      invoiceNo: 'INV-8821',
      patientName: 'Sunita Sharma',
      itemsCount: 4,
      total: 1240,
      status: 'GST Invoiced',
      time: '2 mins ago',
    },
    {
      id: 'tx-2',
      invoiceNo: 'INV-8820',
      patientName: 'Vikram Patel',
      itemsCount: 2,
      total: 485,
      status: 'Completed',
      time: '14 mins ago',
    },
    {
      id: 'tx-3',
      invoiceNo: 'INV-8819',
      patientName: 'Amitav Sen (Chronic Rx)',
      itemsCount: 6,
      total: 3120,
      status: 'GST Invoiced',
      time: '28 mins ago',
    },
    {
      id: 'tx-4',
      invoiceNo: 'INV-8818',
      patientName: 'Pooja Hegde',
      itemsCount: 1,
      total: 180,
      status: 'Completed',
      time: '45 mins ago',
    },
  ];

  const demoAlerts: InventoryAlertDemo[] = [
    {
      id: 'alt-1',
      medicine: 'Augmentin 625 Duo (Amoxycillin + Clavulanic)',
      type: 'Expiring Soon',
      batch: 'AUG26-04',
      stockLeft: 18,
      daysToExpiry: 42,
    },
    {
      id: 'alt-2',
      medicine: 'Telma-H (Telmisartan + Hydrochlorothiazide)',
      type: 'Low Stock',
      batch: 'TLM-889',
      stockLeft: 4,
    },
    {
      id: 'alt-3',
      medicine: 'Pan-D Capsule (Pantoprazole + Domperidone)',
      type: 'Low Stock',
      batch: 'PND-110',
      stockLeft: 7,
    },
    {
      id: 'alt-4',
      medicine: 'Glycomet-GP 1 Forte (Metformin + Glimepiride)',
      type: 'Expiring Soon',
      batch: 'GLY-773',
      stockLeft: 24,
      daysToExpiry: 58,
    },
  ];

  // Simulated 7-day sales curve points
  const salesChartData = [
    { day: 'Mon', sales: 38200, height: '58%' },
    { day: 'Tue', sales: 42100, height: '64%' },
    { day: 'Wed', sales: 49800, height: '76%' },
    { day: 'Thu', sales: 44300, height: '68%' },
    { day: 'Fri', sales: 53600, height: '82%' },
    { day: 'Sat', sales: 68400, height: '100%' },
    { day: 'Sun', sales: 51200, height: '78%' },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6">
      {/* Decorative Glow Backdrop */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-600/10 to-indigo-500/20 rounded-3xl blur-2xl opacity-60"></div>

      <div className="relative bg-slate-950/85 border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl">
        {/* Top Window Chrome & Demonstration Tag */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-slate-800/80 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <div className="h-4 w-px bg-slate-800 mx-1"></div>
            <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              PharmaDesk OS · Counter #01 Terminal (Sanjivani Medicos)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-2.5 py-0.5 rounded-full">
              DEMONSTRATION PREVIEW · REALISTIC SAMPLE DATA
            </span>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 border-b border-slate-800/60 bg-slate-900/30 overflow-x-auto">
          <div className="flex items-center gap-1">
            {[
              { id: 'overview', label: 'Store Overview' },
              { id: 'billing', label: 'Fast POS Counter' },
              { id: 'inventory', label: 'Medicine Catalog' },
              { id: 'expiry', label: 'Expiry & Batch Guard' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
            <span>GSTIN: 27AABCS1429B1Z</span>
            <span className="text-slate-600">·</span>
            <span>DL: MH-MZ2-489110</span>
          </div>
        </div>

        {/* Main Dashboard Body */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Key Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* 1. Total Sales */}
            <div
              onClick={() => setSelectedMetric('sales')}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                selectedMetric === 'sales'
                  ? 'bg-cyan-950/30 border-cyan-500/40 shadow-lg'
                  : 'bg-slate-900/40 border-slate-800/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Month Sales (MTD)</span>
                <span className="text-emerald-400 font-semibold flex items-center text-[11px]">
                  <ArrowUpRight className="w-3 h-3" /> +16.2%
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                ₹3,47,600
              </div>
              <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                <span>Avg: ₹12,410 / day</span>
              </div>
            </div>

            {/* 2. Total Medicines */}
            <div
              onClick={() => setSelectedMetric('inventory')}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                selectedMetric === 'inventory'
                  ? 'bg-cyan-950/30 border-cyan-500/40 shadow-lg'
                  : 'bg-slate-900/40 border-slate-800/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Active Medicines</span>
                <Package className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                4,892 <span className="text-xs font-normal text-slate-400">SKUs</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                12,450 Total strips in stock
              </div>
            </div>

            {/* 3. Low-Stock Alert */}
            <div
              onClick={() => setSelectedMetric('lowstock')}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                selectedMetric === 'lowstock'
                  ? 'bg-rose-950/30 border-rose-500/40 shadow-lg'
                  : 'bg-slate-900/40 border-slate-800/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Low-Stock Items</span>
                <span className="text-rose-400 text-[11px] font-semibold">14 Medicines</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-rose-300 tracking-tight">
                14 <span className="text-xs font-normal text-rose-200/70">Reorder now</span>
              </div>
              <div className="text-[11px] text-rose-300/80 mt-1">
                Estimated reorder: ₹18,400
              </div>
            </div>

            {/* 4. Expiring Medicines */}
            <div
              onClick={() => setSelectedMetric('expiry')}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                selectedMetric === 'expiry'
                  ? 'bg-amber-950/30 border-amber-500/40 shadow-lg'
                  : 'bg-slate-900/40 border-slate-800/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Expiring (60 Days)</span>
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-amber-300 tracking-tight">
                8 <span className="text-xs font-normal text-amber-200/70">Batches</span>
              </div>
              <div className="text-[11px] text-amber-300/80 mt-1">
                Value: ₹7,820 eligible for return
              </div>
            </div>
          </div>

          {/* Interactive Middle Row: Sales Velocity Chart + POS Fast Action */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sales Chart Section */}
            <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800/70 rounded-xl p-4 sm:p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    Weekly Sales Performance
                  </h4>
                  <p className="text-xs text-slate-400">
                    Highest sales observed on Saturdays (peak counter volume: ₹68.4k)
                  </p>
                </div>
                <div className="text-xs text-slate-400 font-mono bg-slate-800/50 px-2 py-1 rounded">
                  GST Summary Ready
                </div>
              </div>

              {/* Bar visualization */}
              <div className="h-44 flex items-end justify-between gap-2 sm:gap-4 pt-6 px-2 border-b border-slate-800/80">
                {salesChartData.map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="text-[10px] text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                      ₹{(item.sales / 1000).toFixed(1)}k
                    </div>
                    <div className="w-full max-w-[42px] bg-slate-800 rounded-t-md overflow-hidden relative h-32 flex items-end">
                      <div
                        className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-md transition-all duration-500 group-hover:from-cyan-500 group-hover:to-cyan-300"
                        style={{ height: item.height }}
                      ></div>
                    </div>
                    <span className="text-xs text-slate-400 group-hover:text-cyan-300 font-medium">
                      {item.day}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400"></span>
                    Prescription Medicines (72%)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-slate-700"></span>
                    OTC & Wellness (28%)
                  </span>
                </div>
                <span className="text-[11px] text-slate-500">Updated Real-Time</span>
              </div>
            </div>

            {/* Quick Action & Low Stock / Expiry Drawer */}
            <div className="bg-slate-900/40 border border-slate-800/70 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    Critical Batch Alerts
                  </h4>
                  <span className="text-[10px] text-cyan-400 font-medium">4 Actionable</span>
                </div>

                <div className="space-y-2.5">
                  {demoAlerts.slice(0, 3).map((alert) => (
                    <div
                      key={alert.id}
                      className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all text-xs"
                    >
                      <div className="flex items-center justify-between font-medium text-slate-200">
                        <span className="truncate max-w-[160px]">{alert.medicine}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                            alert.type === 'Low Stock'
                              ? 'text-rose-400 bg-rose-950/60'
                              : 'text-amber-400 bg-amber-950/60'
                          }`}
                        >
                          {alert.type}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
                        <span>Batch: {alert.batch}</span>
                        <span>Stock: {alert.stockLeft} strips</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <button
                  type="button"
                  className="w-full py-2 px-3 text-xs font-semibold text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-800/60 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Generate Distributor Return Memo
                </button>
              </div>
            </div>
          </div>

          {/* Recent Counter Transactions Table */}
          <div className="bg-slate-900/40 border border-slate-800/70 rounded-xl p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="text-sm font-semibold text-white">Live Counter Invoices</h4>
                <p className="text-xs text-slate-400">
                  Instant GST invoice generation with QR code and WhatsApp dispatch
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="px-2.5 py-1 text-xs text-slate-300 bg-slate-800/60 rounded-md border border-slate-700 hover:text-white flex items-center gap-1"
                >
                  <Printer className="w-3.5 h-3.5 text-cyan-400" />
                  Reprint Last
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-medium">
                    <th className="pb-2.5">Invoice #</th>
                    <th className="pb-2.5">Patient / Customer</th>
                    <th className="pb-2.5">Items</th>
                    <th className="pb-2.5">Total Amount</th>
                    <th className="pb-2.5">Status</th>
                    <th className="pb-2.5 text-right">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-200">
                  {demoTransactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-2.5 font-mono text-cyan-300">{tx.invoiceNo}</td>
                      <td className="py-2.5 font-medium">{tx.patientName}</td>
                      <td className="py-2.5 text-slate-400">{tx.itemsCount} medicines</td>
                      <td className="py-2.5 font-semibold text-white">₹{tx.total.toLocaleString('en-IN')}</td>
                      <td className="py-2.5">
                        <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-full font-medium">
                          <CheckCircle2 className="w-3 h-3" />
                          {tx.status}
                        </span>
                      </td>
                      <td className="py-2.5 text-right text-slate-400 text-[11px] font-mono">
                        {tx.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
