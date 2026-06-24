import Stripe from "stripe";

let stripeInstance: Stripe | null = null;

export function getStripe(): Stripe {
  if (!stripeInstance) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error("STRIPE_SECRET_KEY is not set");
    }
    stripeInstance = new Stripe(key, {
      typescript: true,
    });
  }
  return stripeInstance;
}

export function getStripePriceId(mode: string): string {
  const envMap: Record<string, string | undefined> = {
    "one-time": process.env.STRIPE_PRICE_ONE_TIME,
    "subscribe-monthly": process.env.STRIPE_PRICE_SUBSCRIBE_MONTHLY,
    "subscribe-bimonthly": process.env.STRIPE_PRICE_SUBSCRIBE_BIMONTHLY,
    "three-pack": process.env.STRIPE_PRICE_THREE_PACK,
  };

  const priceId = envMap[mode];
  if (!priceId) {
    throw new Error(
      `Stripe price ID not configured for mode "${mode}". Run npm run stripe:setup or set env vars.`,
    );
  }
  return priceId;
}
