"use client";

import { useState, useEffect } from "react";
import { formatPrice } from "@/lib/products";
import { Loader2 } from "lucide-react";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const productEl = document.getElementById("product");
    if (!productEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(productEl);
    return () => observer.disconnect();
  }, []);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "subscribe-monthly", quantity: 1 }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      document.getElementById("product")?.scrollIntoView({ behavior: "smooth" });
    }
    setLoading(false);
  }

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-cream-50/95 backdrop-blur-md border-t border-cream-200 px-4 py-3 safe-area-pb shadow-[0_-4px_20px_rgba(26,22,18,0.08)]">
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-ink truncate">Pure Fajr</p>
            <p className="text-xs text-ink-muted">
              Subscribe · {formatPrice(3570)}/mo
              <span className="text-orange-600 ml-1">Save 15%</span>
            </p>
          </div>
          <button
            type="button"
            onClick={handleCheckout}
            disabled={loading}
            className="shrink-0 bg-orange-600 text-cream-50 label-caps text-[0.65rem] px-5 py-3.5 min-h-[44px] flex items-center gap-2"
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : "Order Now"}
          </button>
        </div>
      </div>
    </div>
  );
}
