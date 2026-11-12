import React from 'react';
import { HeroSection } from '../../sections/Hero/HeroSection';
import { FeaturesSection } from '../../sections/Features/FeaturesSection';
import { HowItWorksSection } from '../../sections/HowItWorks/HowItWorksSection';
import { WhyChooseSection } from '../../sections/WhyChoose/WhyChooseSection';
import { PricingSection } from '../../sections/Pricing/PricingSection';
import { TestimonialsSection } from '../../sections/Testimonials/TestimonialsSection';
import { FAQSection } from '../../sections/FAQ/FAQSection';
import { CTASection } from '../../sections/CTA/CTASection';

interface HomePageProps {
  onNavigateAuth: (mode: 'login' | 'signup', plan?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigateAuth }) => {
  return (
    <main className="w-full">
      {/* 1. Hero Section with 3D Capsule & Dashboard Preview */}
      <HeroSection onNavigateAuth={(mode) => onNavigateAuth(mode)} />

      {/* 2. 8 Core Features Section */}
      <FeaturesSection />

      {/* 3. 3-Step Interactive Timeline */}
      <HowItWorksSection />

      {/* 4. Why Choose PharmaDesk Pillars */}
      <WhyChooseSection />

      {/* 5. Pricing Plans with Monthly/Annual Toggles */}
      <PricingSection onSelectPlan={(planId) => onNavigateAuth('signup', planId)} />

      {/* 6. Indicative Testimonials & Pilot Scenarios */}
      <TestimonialsSection />

      {/* 7. Working FAQ Accordion */}
      <FAQSection />

      {/* 8. Final Call to Action */}
      <CTASection onGetStarted={() => onNavigateAuth('signup')} />
    </main>
  );
};
