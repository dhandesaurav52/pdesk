import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Shield, User, LogIn } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';

interface NavbarProps {
  onNavigateAuth: (mode: 'login' | 'signup') => void;
  onNavigateHome: () => void;
  currentUser?: { displayName: string | null; email: string | null } | null;
  onLogout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateAuth,
  onNavigateHome,
  currentUser,
  onLogout,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        onNavigateHome();
        setTimeout(() => {
          const target = document.querySelector(href);
          target?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-slate-950/85 backdrop-blur-xl border-b border-cyan-500/15 shadow-xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={onNavigateHome}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
              {/* Distinctive PharmaDesk Medical Cross & Capsule Icon */}
              <svg
                className="w-6 h-6 text-white"
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
            <div className="text-left">
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Pharma<span className="text-cyan-400">Desk</span>
              </span>
              <span className="block text-[10px] text-slate-400 tracking-wider uppercase font-mono">
                Pharmacy SaaS
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {SITE_CONFIG.navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="text-xs lg:text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Auth Actions */}
          <div className="hidden md:flex items-center gap-3">
            {currentUser ? (
              <div className="flex items-center gap-3">
                <div className="text-xs text-right">
                  <div className="text-white font-medium">
                    {currentUser.displayName || 'Pharmacist'}
                  </div>
                  <div className="text-[10px] text-cyan-400">Online</div>
                </div>
                <button
                  type="button"
                  onClick={onLogout}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700 hover:text-white hover:border-slate-600 transition-all cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => onNavigateAuth('login')}
                  className="px-4 py-2 rounded-xl text-xs lg:text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-900/60 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <LogIn className="w-4 h-4 text-cyan-400" />
                  <span>Login</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateAuth('signup')}
                  className="px-4.5 py-2 rounded-xl text-xs lg:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-md glow-cyan transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-2">
            {SITE_CONFIG.navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="text-left py-2.5 px-3 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800 space-y-2.5">
            {currentUser ? (
              <div className="space-y-2">
                <div className="text-xs text-slate-300 px-3">
                  Signed in as <span className="font-semibold text-white">{currentUser.displayName || currentUser.email}</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onLogout?.();
                  }}
                  className="w-full py-2.5 text-center text-xs font-semibold text-rose-300 bg-rose-950/30 border border-rose-900/50 rounded-xl"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigateAuth('login');
                  }}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-800"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigateAuth('signup');
                  }}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 shadow-md glow-cyan"
                >
                  Get Started Free
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
