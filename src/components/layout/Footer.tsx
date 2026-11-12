import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';

interface FooterProps {
  onNavigateHome: () => void;
  onNavigateAuth: (mode: 'login' | 'signup') => void;
  onOpenLegalModal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onNavigateAuth,
  onOpenLegalModal,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-t from-cyan-950/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Column 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <button
              type="button"
              onClick={onNavigateHome}
              className="flex items-center gap-2.5 text-left cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-md">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 4v16" />
                  <path d="M4 12h16" />
                  <circle cx="18" cy="6" r="2" fill="#38bdf8" />
                </svg>
              </div>
              <span className="text-xl font-extrabold text-white">
                Pharma<span className="text-cyan-400">Desk</span>
              </span>
            </button>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {SITE_CONFIG.subtitle} Dedicated to empowering independent retail chemists and pharmacy chains with intelligent billing, automated expiry control, and real-time inventory synchronization.
            </p>

            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>{SITE_CONFIG.complianceNote}</span>
            </div>
          </div>

          {/* Column 3: Platform Navigation */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-4">
              Product & Modules
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#features" className="hover:text-cyan-300 transition-colors">
                  Smart Inventory Management
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-300 transition-colors">
                  Fast POS Billing Counter
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-300 transition-colors">
                  Medicine Expiry Tracking
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-300 transition-colors">
                  Purchase Order Automation
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-300 transition-colors">
                  GST Reports & Schedule H1
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-300 transition-colors">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Solutions & About */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-4">
              Solutions & Company
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#why-us" className="hover:text-cyan-300 transition-colors">
                  Independent Retail Chemists
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan-300 transition-colors">
                  Hospital Outpatient Pharmacies
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-cyan-300 transition-colors">
                  How Onboarding Works
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateAuth('signup')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Create Pharmacy Account
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateAuth('login')}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Staff & Owner Portal Login
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-300 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Verified Contact Details */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-4">
              Support & Contact
            </div>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <a href={`mailto:${SITE_CONFIG.contactInfo.email}`} className="hover:text-cyan-300">
                  {SITE_CONFIG.contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contactInfo.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contactInfo.location}</span>
              </li>
              <li className="pt-2 text-[11px] text-slate-500 leading-normal">
                {SITE_CONFIG.contactInfo.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {SITE_CONFIG.brandName}. All rights reserved. Built for independent pharmacies across India.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms and Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
