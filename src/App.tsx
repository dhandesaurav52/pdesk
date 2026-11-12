/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/Home/HomePage';
import { LoginPage } from './pages/Login/LoginPage';
import { SignupPage } from './pages/Signup/SignupPage';
import { LegalModal } from './components/common/LegalModal';
import { authService, UserProfile } from './lib/authService';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  // Routing state
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [selectedPlan, setSelectedPlan] = useState<string>('professional');

  // Auth state
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    return authService.getCurrentUser();
  });
  const [authNotification, setAuthNotification] = useState<string | null>(null);

  // Legal Modal state
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Listen to browser navigation (back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Listen to Auth State changes
  useEffect(() => {
    const unsubscribe = authService.onAuthStateChange((user) => {
      setCurrentUser(user);
    });
    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

  // Routing Helpers
  const navigateTo = (path: string, plan?: string) => {
    if (plan) setSelectedPlan(plan);
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => navigateTo('/');
  const handleNavigateLogin = () => navigateTo('/login');
  const handleNavigateSignup = (plan?: string) => navigateTo('/signup', plan);

  const handleLoginSuccess = (user: UserProfile) => {
    setCurrentUser(user);
    setAuthNotification(`Signed in successfully as ${user.displayName || user.email}! Counter Terminal active.`);
    navigateTo('/');
  };

  const handleSignupSuccess = (user: UserProfile) => {
    setCurrentUser(user);
    setAuthNotification(`Welcome to PharmaDesk, ${user.displayName || 'Doctor'}! Your 14-day full access trial is active.`);
    navigateTo('/');
  };

  const handleLogout = async () => {
    await authService.logout();
    setCurrentUser(null);
    setAuthNotification('Signed out from counter terminal.');
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans">
      {/* Toast Notification Banner */}
      {authNotification && (
        <div className="fixed top-20 right-4 z-50 max-w-md p-4 rounded-xl bg-slate-900 border border-cyan-500/50 shadow-2xl flex items-center justify-between gap-3 text-xs text-white glow-cyan animate-in fade-in slide-in-from-top-4">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
            <span>{authNotification}</span>
          </div>
          <button
            type="button"
            onClick={() => setAuthNotification(null)}
            className="p-1 rounded-lg text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Conditional Layout Rendering */}
      {currentPath === '/login' ? (
        <LoginPage
          onNavigateHome={handleNavigateHome}
          onNavigateSignup={() => handleNavigateSignup()}
          onLoginSuccess={handleLoginSuccess}
        />
      ) : currentPath === '/signup' ? (
        <SignupPage
          initialPlan={selectedPlan}
          onNavigateHome={handleNavigateHome}
          onNavigateLogin={handleNavigateLogin}
          onSignupSuccess={handleSignupSuccess}
        />
      ) : (
        <>
          <Navbar
            onNavigateHome={handleNavigateHome}
            onNavigateAuth={(mode) => {
              if (mode === 'login') handleNavigateLogin();
              else handleNavigateSignup();
            }}
            currentUser={currentUser}
            onLogout={handleLogout}
          />

          <HomePage
            onNavigateAuth={(mode, plan) => {
              if (mode === 'login') handleNavigateLogin();
              else handleNavigateSignup(plan);
            }}
          />

          <Footer
            onNavigateHome={handleNavigateHome}
            onNavigateAuth={(mode) => {
              if (mode === 'login') handleNavigateLogin();
              else handleNavigateSignup();
            }}
            onOpenLegalModal={(type) => setLegalModalType(type)}
          />
        </>
      )}

      {/* Legal Modal */}
      <LegalModal
        isOpen={Boolean(legalModalType)}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
