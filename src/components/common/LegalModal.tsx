import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-800/60 text-cyan-400">
              {type === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {type === 'privacy' ? 'Privacy Policy & Patient Data Security' : 'Terms of Service & Pharmacy Compliance'}
              </h3>
              <p className="text-xs text-slate-400">Last updated: November 2026</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto py-5 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed pr-2">
          {type === 'privacy' ? (
            <>
              <h4 className="font-semibold text-white text-sm">1. Commitment to Pharmacy & Patient Privacy</h4>
              <p>
                PharmaDesk is designed with strict data isolation. Patient prescription data, customer phone numbers used for WhatsApp invoice delivery, and doctor details are encrypted in transit and at rest.
              </p>

              <h4 className="font-semibold text-white text-sm">2. Data Ownership</h4>
              <p>
                All medicine inventory ledgers, distributor invoices, purchase costs, and sales records belong exclusively to your pharmacy business. PharmaDesk does not sell or distribute chemist commercial purchase rates to third-party pharmaceutical manufacturers.
              </p>

              <h4 className="font-semibold text-white text-sm">3. Compliance with Indian Health Data Norms</h4>
              <p>
                We adhere to the Digital Personal Data Protection (DPDP) Act of India. Prescription logs and Schedule H/H1 registers are archived in encrypted Cloud Firestore instances located within compliant Indian cloud data regions.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-semibold text-white text-sm">1. Scope of Service</h4>
              <p>
                PharmaDesk provides cloud-based software for billing, batch inventory management, barcode scanning, and tax reporting. The pharmacy proprietor retains primary responsibility for maintaining valid state Drug Licenses (Form 20/21) and compliance with the Drugs and Cosmetics Act (1940).
              </p>

              <h4 className="font-semibold text-white text-sm">2. Schedule H & H1 Dispensing</h4>
              <p>
                The platform includes automated digital audit registers for Schedule H, H1, and X medicines. The operating pharmacist must verify physical doctor prescriptions before authorizing restricted drug dispensations.
              </p>

              <h4 className="font-semibold text-white text-sm">3. GST Invoicing & Tax Calculation</h4>
              <p>
                Tax schedules (HSN codes, CGST, SGST, IGST) provided in the master database are indicative and aligned with current GST council guidelines. Pharmacies are advised to confirm tax rates with their chartered accountant during annual filings.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
          >
            Understood & Close
          </button>
        </div>
      </div>
    </div>
  );
};
