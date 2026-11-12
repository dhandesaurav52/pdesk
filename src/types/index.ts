export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPricePerMonth: number;
  currency: string;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  ctaHref: string;
  highlightNote?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  highlightMetric?: string;
  category: 'inventory' | 'billing' | 'compliance' | 'analytics';
}

export interface HowItWorksStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  role: string;
  pharmacyType: string;
  location: string;
  initials: string;
  tag: string;
  isPlaceholder: boolean;
}

export interface DashboardMetric {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  subtext: string;
}

export interface TransactionDemo {
  id: string;
  invoiceNo: string;
  patientName: string;
  itemsCount: number;
  total: number;
  status: 'Completed' | 'Pending' | 'GST Invoiced';
  time: string;
}

export interface InventoryAlertDemo {
  id: string;
  medicine: string;
  type: 'Low Stock' | 'Expiring Soon' | 'Critical';
  batch: string;
  stockLeft: number;
  daysToExpiry?: number;
}

export interface AuthState {
  user: {
    uid: string;
    email: string | null;
    displayName: string | null;
  } | null;
  loading: boolean;
  isConfigured: boolean;
  error: string | null;
}
