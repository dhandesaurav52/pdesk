import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, PhoneCall } from 'lucide-react';
import { FAQ_CONFIG } from '../../config/faqConfig';
import { FAQItem } from '../../types';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 relative bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3 font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>KNOWLEDGE BASE & GUIDANCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {FAQ_CONFIG.headline}
          </h2>
          <p className="mt-4 text-base text-slate-400">
            {FAQ_CONFIG.subtitle}
          </p>
        </div>

        {/* Working Accordion */}
        <div className="space-y-3.5">
          {FAQ_CONFIG.items.map((item: FAQItem) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900 border-cyan-500/40 shadow-lg'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700/80'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                      isOpen
                        ? 'bg-cyan-500 text-slate-950 rotate-180'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/50">
                    <p>{item.answer}</p>
                    {item.category && (
                      <div className="mt-3 text-[11px] font-mono text-cyan-400">
                        Topic: {item.category}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-white">Have a specific question about your pharmacy setup?</div>
            <div className="text-xs text-slate-400 mt-0.5">
              Our pharmacy technical support desk is available Mon - Sat, 9 AM - 8 PM IST.
            </div>
          </div>
          <a
            href="mailto:support@pharmadesk.in"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-800 transition-colors shrink-0 flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contact Pharmacy Desk</span>
          </a>
        </div>
      </div>
    </section>
  );
};
