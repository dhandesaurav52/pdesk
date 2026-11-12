import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, ArrowRight, ShieldCheck, AlertCircle, CheckCircle2, ArrowLeft } from 'lucide-react';
import { authService } from '../../lib/authService';

interface LoginPageProps {
  onNavigateHome: () => void;
  onNavigateSignup: () => void;
  onLoginSuccess: (user: any) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  onNavigateHome,
  onNavigateSignup,
  onLoginSuccess,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [resetSent, setResetSent] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email) {
      setErrorMessage('Please enter your pharmacy email address.');
      return;
    }
    if (!password) {
      setErrorMessage('Please enter your password.');
      return;
    }

    setIsLoading(true);
    try {
      const user = await authService.login(email, password);
      setIsLoading(false);
      onLoginSuccess(user);
    } catch (err: any) {
      setIsLoading(false);
      setErrorMessage(err.message || 'Failed to sign in. Please check your credentials.');
    }
  };

  const handleForgotPassword = async () => {
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter your email above to receive a password reset link.');
      return;
    }
    setIsResetting(true);
    setErrorMessage(null);
    try {
      await authService.resetPassword(email);
      setResetSent(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'Unable to send password reset email.');
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Top Home Backlink */}
      <div className="max-w-md w-full mx-auto mb-6">
        <button
          type="button"
          onClick={onNavigateHome}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to PharmaDesk Homepage</span>
        </button>
      </div>

      <div className="max-w-md w-full mx-auto">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-7 sm:p-8 shadow-2xl backdrop-blur-xl relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg mx-auto mb-3">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Sign in to PharmaDesk
            </h2>
            <p className="mt-1.5 text-xs text-slate-400">
              Access your pharmacy counter billing, inventory & GST reports
            </p>
          </div>

          {/* Firebase Configuration Status Indicator */}
          {!authService.isConfigured && (
            <div className="mb-6 p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-300 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-cyan-200">
                  Local Development Preview Active
                </span>
                <span>
                  Enter any valid email and password (≥6 chars) for immediate evaluation on your Mac. Set up Firebase in `.env.local` to connect live accounts.
                </span>
              </div>
            </div>
          )}

          {/* Error Banner */}
          {errorMessage && (
            <div className="mb-6 p-3 rounded-xl bg-rose-950/60 border border-rose-800/60 text-xs text-rose-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Password Reset Notice */}
          {resetSent && (
            <div className="mb-6 p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-xs text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Password reset instructions have been dispatched to your email.</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Pharmacy / Staff Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="pharmacist@medicalstore.in"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-slate-300">
                  Password
                </label>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  disabled={isResetting}
                  className="text-[11px] font-medium text-cyan-400 hover:text-cyan-300 cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-11 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 cursor-pointer"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-md glow-cyan transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <span>Authenticating Counter...</span>
              ) : (
                <>
                  <span>Sign In to Terminal</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer Signup Link */}
          <div className="mt-6 text-center text-xs text-slate-400">
            Don't have a PharmaDesk account?{' '}
            <button
              type="button"
              onClick={onNavigateSignup}
              className="font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer underline ml-1"
            >
              Create pharmacy account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
