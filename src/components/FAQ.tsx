"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/products";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24 scroll-mt-20">
      <div className="text-center mb-12">
        <p className="label-caps text-orange-600 mb-3">FAQ</p>
        <h2 className="display-serif text-4xl sm:text-5xl font-medium text-ink">
          Common questions
        </h2>
      </div>

      <div className="divide-y divide-cream-200 border-y border-cream-200">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.q}>
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-medium text-ink group-hover:text-orange-600 transition-colors pr-4">
                  {item.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-ink-muted transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-48 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-sm text-ink-muted leading-relaxed">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
