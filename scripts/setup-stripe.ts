/**
 * Creates Stripe products and prices for Fajr Fuel.
 * Run: npm run stripe:setup
 * Requires STRIPE_SECRET_KEY in environment.
 */
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
});

async function main() {
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error("Set STRIPE_SECRET_KEY before running this script.");
    process.exit(1);
  }

  console.log("Creating Fajr Fuel product and prices...\n");

  const product = await stripe.products.create({
    name: "Fajr Elixir — Raw Nootropic Honey",
    description:
      "8 oz jar of raw wildflower honey infused with Alpha-GPC, L-Citrulline, caffeine, organic ginger, lemon, and menthol. 30 servings.",
    metadata: {
      size: "8 oz / 227 g",
      servings: "30",
    },
    images: [],
  });

  console.log(`Product created: ${product.id}\n`);

  const oneTime = await stripe.prices.create({
    product: product.id,
    unit_amount: 4200,
    currency: "usd",
    metadata: { mode: "one-time" },
  });

  const subscribeMonthly = await stripe.prices.create({
    product: product.id,
    unit_amount: 3570,
    currency: "usd",
    recurring: { interval: "month", interval_count: 1 },
    metadata: { mode: "subscribe-monthly" },
  });

  const subscribeBimonthly = await stripe.prices.create({
    product: product.id,
    unit_amount: 3780,
    currency: "usd",
    recurring: { interval: "month", interval_count: 2 },
    metadata: { mode: "subscribe-bimonthly" },
  });

  const threePack = await stripe.prices.create({
    product: product.id,
    unit_amount: 10800,
    currency: "usd",
    metadata: { mode: "three-pack", quantity: "3" },
  });

  console.log("Add these to your .env.local:\n");
  console.log(`STRIPE_PRODUCT_ID=${product.id}`);
  console.log(`STRIPE_PRICE_ONE_TIME=${oneTime.id}`);
  console.log(`STRIPE_PRICE_SUBSCRIBE_MONTHLY=${subscribeMonthly.id}`);
  console.log(`STRIPE_PRICE_SUBSCRIBE_BIMONTHLY=${subscribeBimonthly.id}`);
  console.log(`STRIPE_PRICE_THREE_PACK=${threePack.id}`);
  console.log("\nDone! Restart your dev server after updating .env.local.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
