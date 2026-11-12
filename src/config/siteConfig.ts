import { NavItem } from '../types';

export const SITE_CONFIG = {
  brandName: 'PharmaDesk',
  tagline: 'Your Pharmacy. Smarter. Simpler. Connected.',
  subtitle: 'The intelligent operating system built specifically for independent pharmacies and medical stores across India.',
  headline: 'The Future of Pharmacy Management Starts Here.',
  description: 'Manage your pharmacy operations with one intelligent platform. From medicine inventory and billing to expiry tracking and business insights, PharmaDesk brings everything together.',
  badgeLabel: 'NEXT GENERATION PHARMACY MANAGEMENT',
  
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Solutions', href: '#how-it-works' },
    { label: 'Why PharmaDesk', href: '#why-us' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ] as NavItem[],

  contactInfo: {
    email: 'support@pharmadesk.in',
    phone: '+91 (080) 4120-7890',
    hours: 'Monday – Saturday, 9:00 AM – 8:00 PM IST',
    location: 'Bangalore & Mumbai, India',
    note: 'Dedicated regional onboarding assistance for retail chemists and pharmacy chains.',
  },

  socialLinks: {
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },

  complianceNote: 'Designed in compliance with the Drugs and Cosmetics Act (1940) and Indian GST Invoice standard specifications.',
};
