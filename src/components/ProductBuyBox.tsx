"use client";

import { useState } from "react";
import {
  Minus,
  Plus,
  Loader2,
  Flag,
  Truck,
  Leaf,
  Check,
} from "lucide-react";
import {
  PRODUCT,
  getVariant,
  formatPrice,
  type PurchaseMode,
} from "@/lib/products";

type CheckoutMode = PurchaseMode | "three-pack";

export function ProductBuyBox() {
  const [mode, setMode] = useState<CheckoutMode>("subscribe-monthly");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const variant = mode === "three-pack" ? null : getVariant(mode);
  const isBundle = mode === "three-pack";

  const unitPrice = isBundle
    ? PRODUCT.bundle.priceCents
    : (variant!.priceCents);
  const compareAt = isBundle
    ? PRODUCT.bundle.compareAtCents
    : variant!.compareAtCents;
  const totalCents = isBundle ? unitPrice : unitPrice * quantity;

  const perServing = formatPrice(Math.round(unitPrice / 30));
  const savingsPercent = isBundle
    ? PRODUCT.bundle.savingsPercent
    : variant!.savingsPercent;

  async function handleCheckout() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode, quantity: isBundle ? 1 : quantity }),
      });

      const data = await res.json();

      if (data.notConfigured) {
        setError("checkout-soon");
        setLoading(false);
        return;
      }

      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong");
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed");
      setLoading(false);
    }
  }

  const options: {
    id: CheckoutMode;
    label: string;
    sub: string;
    price: string;
    badge?: string;
  }[] = [
    ...PRODUCT.variants.map((v) => ({
      id: v.id as CheckoutMode,
      label: v.label,
      sub: v.description,
      price: formatPrice(v.priceCents),
      badge: v.badge,
    })),
    {
      id: "three-pack",
      label: PRODUCT.bundle.label,
      sub: PRODUCT.bundle.description,
      price: formatPrice(PRODUCT.bundle.priceCents),
    },
  ];

  return (
    <div
      id="product"
      className="bg-cream-50 border border-cream-200 p-5 sm:p-7 scroll-mt-20"
    >
      {/* Price header */}
      <div className="flex items-end justify-between gap-4 mb-5">
        <div>
          <p className="label-caps text-orange-600 mb-1">Choose Your Plan</p>
          <h2 className="display-serif text-2xl sm:text-3xl font-medium text-ink leading-tight">
            {PRODUCT.name}
            <span className="text-ink-muted text-sm font-sans ml-2">
              {PRODUCT.size}
            </span>
          </h2>
        </div>
        <div className="text-right shrink-0">
          <p className="display-serif text-3xl font-medium text-ink leading-none">
            {formatPrice(totalCents)}
          </p>
          {compareAt && (
            <p className="text-ink-faint text-sm line-through">
              {formatPrice(isBundle ? compareAt : compareAt * quantity)}
            </p>
          )}
        </div>
      </div>

      {/* Purchase options */}
      <fieldset className="space-y-2 mb-4">
        {options.map((opt) => {
          const selected = mode === opt.id;
          return (
            <label
              key={opt.id}
              className={`relative flex items-center gap-3 p-3.5 border cursor-pointer transition-all ${
                selected
                  ? "border-orange-500 bg-orange-500/5 shadow-sm"
                  : "border-cream-300 hover:border-cream-400 bg-cream-100/50"
              }`}
            >
              <input
                type="radio"
                name="purchase-mode"
                value={opt.id}
                checked={selected}
                onChange={() => setMode(opt.id)}
                className="sr-only"
              />
              <div
                className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center ${
                  selected ? "border-orange-500" : "border-cream-400"
                }`}
              >
                {selected && (
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium text-ink">{opt.label}</span>
                  {opt.badge && (
                    <span className="label-caps text-[0.6rem] bg-orange-600 text-cream-50 px-2 py-0.5">
                      {opt.badge}
                    </span>
                  )}
                  {opt.id !== "one-time" && opt.id !== "three-pack" && (
                    <span className="label-caps text-[0.6rem] text-orange-600">
                      Save {getVariant(opt.id as PurchaseMode).savingsPercent}%
                    </span>
                  )}
                </div>
                <p className="text-xs text-ink-muted mt-0.5">{opt.sub}</p>
              </div>
              <span className="text-sm font-medium text-ink shrink-0">{opt.price}</span>
            </label>
          );
        })}
      </fieldset>

      {/* Quantity (not for bundle) */}
      {!isBundle && (
        <div className="flex items-center justify-between mb-5 py-3 border-t border-b border-cream-200">
          <span className="label-caps text-ink-muted">Quantity</span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              className="w-10 h-10 flex items-center justify-center border border-cream-300 hover:border-orange-500 disabled:opacity-40 transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="w-8 text-center font-medium tabular-nums">{quantity}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQuantity((q) => Math.min(PRODUCT.maxQuantity, q + 1))}
              disabled={quantity >= PRODUCT.maxQuantity}
              className="w-10 h-10 flex items-center justify-center border border-cream-300 hover:border-orange-500 disabled:opacity-40 transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Per serving anchor */}
      {!isBundle && (
        <p className="text-xs text-ink-muted text-center mb-4">
          ≈ {perServing}/day · 30 servings per jar
        </p>
      )}

      {/* CTA */}
      <button
        type="button"
        onClick={handleCheckout}
        disabled={loading}
        className="w-full bg-orange-600 hover:bg-orange-700 active:bg-orange-700 text-cream-50 py-4 px-6 label-caps tracking-[0.15em] transition-colors disabled:opacity-60 flex items-center justify-center gap-2 min-h-[52px]"
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Redirecting to checkout…
          </>
        ) : (
          <>
            {mode.includes("subscribe") ? "Subscribe Now" : "Add to Cart — Checkout"}
            {savingsPercent ? ` · Save ${savingsPercent}%` : ""}
          </>
        )}
      </button>

      {error === "checkout-soon" ? (
        <div className="mt-3 p-3 bg-cream-100 border border-cream-300 text-center" role="alert">
          <p className="text-sm font-medium text-ink">Checkout coming soon</p>
          <p className="text-xs text-ink-muted mt-1">
            Email us to order:{" "}
            <a href="mailto:samkosunnah@gmail.com" className="text-orange-600 underline">
              samkosunnah@gmail.com
            </a>
          </p>
        </div>
      ) : error ? (
        <p className="text-red-600 text-sm text-center mt-3" role="alert">
          {error}
        </p>
      ) : null}

      {/* Trust row */}
      <div className="grid grid-cols-3 gap-2 mt-5 pt-5 border-t border-cream-200">
        {[
          { icon: Truck, text: "Free Shipping" },
          { icon: Flag, text: "Made in USA" },
          { icon: Leaf, text: "Raw & Unfiltered" },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex flex-col items-center gap-1.5 text-center">
            <Icon size={16} className="text-orange-600" strokeWidth={1.5} />
            <span className="text-[0.65rem] text-ink-muted leading-tight">{text}</span>
          </div>
        ))}
      </div>

      {/* Subscription reassurance */}
      {mode.includes("subscribe") && (
        <div className="mt-4 p-3 bg-cream-100 border border-cream-200">
          <ul className="space-y-1.5">
            {[
              "Skip, pause, or cancel anytime",
              "Subscriber-only early access to new batches",
              "Price locked for life of subscription",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-ink-muted">
                <Check size={14} className="text-orange-600 shrink-0 mt-0.5" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
