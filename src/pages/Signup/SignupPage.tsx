import React, { useState } from 'react';
import {
  UserPlus,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  Store,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';
import { authService } from '../../lib/authService';

interface SignupPageProps {
  initialPlan?: string;
  onNavigateHome: () => void;
  onNavigateLogin: () => void;
  onSignupSuccess: (user: any) => void;
}

export const SignupPage: React.FC<SignupPageProps> = ({
  initialPlan = 'professional',
  onNavigateHome,
  onNavigateLogin,
  onSignupSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [pharmacyName, setPharmacyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>(initialPlan);
  const [agreeTerms, setAgreeTerms] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!email || !email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password must contain at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please verify.');
      return;
    }
    if (!agreeTerms) {
      setErrorMessage('Please agree to the service terms to proceed.');
      return;
    }

    setIsLoading(true);
    try {
      const user = await authService.signup(fullName, email, password, pharmacyName);
      setIsLoading(false);
      onSignupSuccess(user);
    } catch (err: any) {
      setIsLoading(false);
      setErrorMessage(err.message || 'Failed to create pharmacy account.');
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[550px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Top Home Backlink */}
      <div className="max-w-lg w-full mx-auto mb-6">
        <button
          type="button"
          onClick={onNavigateHome}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to PharmaDesk Homepage</span>
        </button>
      </div>

      <div className="max-w-lg w-full mx-auto">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-7 sm:p-9 shadow-2xl backdrop-blur-xl relative z-10">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg mx-auto mb-3">
              <UserPlus className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Create Your Pharmacy Account
            </h2>
            <p className="mt-1.5 text-xs text-slate-400">
              Start your 14-day free access · Instant 250k+ Indian medicine database
            </p>
          </div>

          {/* Plan Selector Pills */}
          <div className="mb-6 p-1.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
            {[
              { id: 'starter', label: 'Starter' },
              { id: 'professional', label: 'Professional (Popular)' },
              { id: 'enterprise', label: 'Enterprise' },
            ].map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedPlan(p.id)}
                className={`flex-1 py-1.5 px-2 rounded-lg font-medium transition-all text-center ${
                  selectedPlan === p.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Dev Preview indicator */}
          {!authService.isConfigured && (
            <div className="mb-5 p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-300 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-cyan-200">
                  Ready for Local Evaluation & Firebase
                </span>
                <span>
                  Creating an account here works instantly in Local Dev Mode on your Mac and connects to live Firebase when credentials are provided in `.env.local`.
                </span>
              </div>
            </div>
          )}

          {/* Error Banner */}
          {errorMessage && (
            <div className="mb-5 p-3 rounded-xl bg-rose-950/60 border border-rose-800/60 text-xs text-rose-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name & Pharmacy Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Pharmacist / Owner Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Saurav Dhande"
                    className="w-full pl-10 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Medical Store / Pharmacy Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Store className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={pharmacyName}
                    onChange={(e) => setPharmacyName(e.target.value)}
                    placeholder="Shree Ganesh Medicos"
                    className="w-full pl-10 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Work Email Address *
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
                  placeholder="owner@ganeshmedicos.in"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
              </div>
            </div>

            {/* Passwords */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Password *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min 6 characters"
                    className="w-full pl-10 pr-10 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Confirm Password *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repeat password"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                id="terms"
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-slate-800 bg-slate-950 text-cyan-500 focus:ring-cyan-500"
              />
              <label htmlFor="terms" className="text-xs text-slate-400 leading-normal">
                I agree to the PharmaDesk Terms of Service and Privacy Policy for Indian retail drug store operations.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-3 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-md glow-cyan transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <span>Creating Pharmacy Account...</span>
              ) : (
                <>
                  <span>Create Account & Start Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center text-xs text-slate-400">
            Already have a pharmacy account?{' '}
            <button
              type="button"
              onClick={onNavigateLogin}
              className="font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer underline ml-1"
            >
              Sign in to terminal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
