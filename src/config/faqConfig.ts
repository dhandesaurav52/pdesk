import { FAQItem } from '../types';

export const FAQ_CONFIG = {
  headline: 'Frequently Asked Questions',
  subtitle: 'Everything you need to know about PharmaDesk, onboarding, hardware compatibility, and data security.',

  items: [
    {
      id: 'faq-1',
      question: 'What is PharmaDesk?',
      answer: 'PharmaDesk is a modern, cloud-first pharmacy management SaaS platform tailored for retail chemists, medical stores, hospital pharmacies, and clinic dispensaries in India. It unites billing, smart inventory, batch and expiry management, purchase orders, GST compliance, and real-time business analytics into an intuitive, high-speed interface.',
      category: 'General',
    },
    {
      id: 'faq-2',
      question: 'Who can use PharmaDesk?',
      answer: 'PharmaDesk is built for independent pharmacy proprietors, medical stores, hospital outpatient pharmacies, Ayurvedic and Allopathic retailers, and expanding multi-branch pharmacy chains. Whether you run a single neighborhood counter or supervise multiple branches, PharmaDesk scales with your volume.',
      category: 'Eligibility',
    },
    {
      id: 'faq-3',
      question: 'Can I manage medicine inventory?',
      answer: 'Yes, absolutely. PharmaDesk includes a comprehensive inventory engine equipped with a verified master database of 250,000+ Indian pharmaceutical brands, salt compositions, and HSN codes. You can track batch numbers, expiry dates, supplier purchase rates, minimum order quantities, and automatically flag slow-moving or near-expiry batches.',
      category: 'Inventory',
    },
    {
      id: 'faq-4',
      question: 'Does PharmaDesk support billing?',
      answer: 'Yes. Our POS billing engine is optimized for high-volume sales counters. It supports rapid barcode scanning, instant fuzzy search for brand or generic substitute molecules, multiple payment modes (UPI, Cash, Card, Credit), GST-compliant invoicing, and direct dispatch of invoices via SMS or WhatsApp alongside 2-inch, 3-inch, and A4/A5 thermal or laser printers.',
      category: 'Billing',
    },
    {
      id: 'faq-5',
      question: 'Can I access PharmaDesk from multiple devices?',
      answer: 'Yes. Because PharmaDesk runs on a secure modern cloud infrastructure, you can log in from standard desktop computers (Windows, Mac, Linux), laptops, POS terminals, and Android/iOS tablets. Multi-counter sync happens instantly so stock changes are updated across all terminals simultaneously.',
      category: 'Access',
    },
    {
      id: 'faq-6',
      question: 'How can I create an account?',
      answer: 'You can create an account in under 60 seconds by clicking the "Get Started" or "Get Started Free" button. Choose your pharmacy tier, provide your store details and drug license reference, and immediately access the platform with sample master data to experience the workflow before adding your live inventory.',
      category: 'Account',
    },
    {
      id: 'faq-7',
      question: 'How can I contact support?',
      answer: 'Our pharmacy technical support desk is available Monday through Saturday from 9:00 AM to 8:00 PM IST via priority phone support (+91 080 4120-7890), WhatsApp assistance, and email at support@pharmadesk.in. We also provide remote screen assistance for printer setup, barcode reader configuration, and historical data migration.',
      category: 'Support',
    },
  ] as FAQItem[],
};
