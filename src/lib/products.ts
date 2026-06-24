export type PurchaseMode =
  | "one-time"
  | "subscribe-monthly"
  | "subscribe-bimonthly";

export interface ProductVariant {
  id: PurchaseMode;
  label: string;
  description: string;
  priceCents: number;
  compareAtCents?: number;
  interval?: "month";
  intervalCount?: number;
  badge?: string;
  savingsPercent?: number;
}

export const PRODUCT = {
  id: "fajr-elixir-honey",
  name: "Pure Fajr",
  tagline: "Raw Honey · Nootropic Blend",
  size: "8 oz / 227 g",
  description:
    "Small-batch raw honey infused with clinically-studied nootropics and botanicals. One spoonful before dawn — sustained clarity without the crash.",
  stripeProductId: process.env.STRIPE_PRODUCT_ID ?? "",
  variants: [
    {
      id: "one-time" as const,
      label: "One-Time Purchase",
      description: "Single jar, ships within 2 business days",
      priceCents: 4200,
      compareAtCents: undefined,
    },
    {
      id: "subscribe-monthly" as const,
      label: "Subscribe & Save",
      description: "Delivered every 30 days · Cancel anytime",
      priceCents: 3570,
      compareAtCents: 4200,
      interval: "month" as const,
      intervalCount: 1,
      badge: "Most Popular",
      savingsPercent: 15,
    },
    {
      id: "subscribe-bimonthly" as const,
      label: "Every 60 Days",
      description: "For lighter use · Cancel anytime",
      priceCents: 3780,
      compareAtCents: 4200,
      interval: "month" as const,
      intervalCount: 2,
      savingsPercent: 10,
    },
  ] satisfies ProductVariant[],
  bundle: {
    id: "three-pack",
    label: "3-Jar Bundle",
    description: "Stock up · Save 14%",
    priceCents: 10800,
    compareAtCents: 12600,
    quantity: 3,
    savingsPercent: 14,
  },
  maxQuantity: 6,
  freeShipping: true,
};

export const INGREDIENTS = [
  {
    name: "Raw Wildflower Honey",
    amount: "Base",
    boost: "Fuels clean, fast-acting energy",
    benefit: "Natural energy substrate with enzymes and antioxidants",
  },
  {
    name: "L-Citrulline",
    amount: "2,000 mg",
    boost: "Boosts blood flow & pump",
    benefit: "Nitric oxide precursor for blood flow and endurance",
  },
  {
    name: "Beta-Alanine",
    amount: "2,000 mg",
    boost: "Boosts endurance & stamina",
    benefit: "Buffers muscle acid for sustained output and stamina",
  },
  {
    name: "Alpha-GPC",
    amount: "600 mg",
    boost: "Boosts memory & brain function",
    benefit: "Supports acetylcholine for focus and memory",
  },
  {
    name: "Natural Caffeine",
    amount: "150 mg",
    boost: "Boosts alertness & focus",
    benefit: "Clean alertness — about 1.5 cups of coffee",
  },
  {
    name: "Organic Ginger",
    amount: "200 mg",
    boost: "Boosts digestion & circulation",
    benefit: "Digestive support and warming circulation",
  },
  {
    name: "Fresh Lemon",
    amount: "150 mg",
    boost: "Boosts immunity & freshness",
    benefit: "Vitamin C and bright, clean finish",
  },
  {
    name: "Menthol Crystals",
    amount: "10 mg",
    boost: "Boosts clarity & breathing",
    benefit: "Invigorating clarity and respiratory freshness",
  },
];

export const FAQ_ITEMS = [
  {
    q: "When should I take Pure Fajr?",
    a: "Take one tablespoon (15 ml) 20–30 minutes before you need peak focus — ideally at dawn or before your first deep work block. Avoid within 6 hours of bedtime due to caffeine content.",
  },
  {
    q: "How does the subscription work?",
    a: "Choose Subscribe & Save at checkout. We ship automatically on your schedule. Pause, skip, or cancel anytime from your Stripe customer portal — no emails required.",
  },
  {
    q: "Is it safe to take daily?",
    a: "Yes, when used as directed (one tablespoon per day). Contains 150 mg caffeine and 2,000 mg beta-alanine, which may cause a harmless tingling sensation. Consult your physician if pregnant, nursing, or taking medications.",
  },
  {
    q: "What does it taste like?",
    a: "Rich raw honey upfront, bright lemon and ginger mid-palate, a subtle menthol lift on the finish. Not overly sweet — designed to be taken straight or stirred into warm water.",
  },
  {
    q: "Where is it made?",
    a: "Proudly made in the USA in small batches. We source raw wildflower honey and blend every jar by hand in small runs for freshness and potency.",
  },
];

export function getVariant(mode: PurchaseMode): ProductVariant {
  const variant = PRODUCT.variants.find((v) => v.id === mode);
  if (!variant) throw new Error(`Unknown purchase mode: ${mode}`);
  return variant;
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
  }).format(cents / 100);
}

export function getStripePriceEnvKey(mode: PurchaseMode): string {
  const map: Record<PurchaseMode, string> = {
    "one-time": "STRIPE_PRICE_ONE_TIME",
    "subscribe-monthly": "STRIPE_PRICE_SUBSCRIBE_MONTHLY",
    "subscribe-bimonthly": "STRIPE_PRICE_SUBSCRIBE_BIMONTHLY",
  };
  return map[mode];
}
