import { NextRequest, NextResponse } from "next/server";
import { getStripe, getStripePriceId } from "@/lib/stripe";
import type { PurchaseMode } from "@/lib/products";

const VALID_MODES = [
  "one-time",
  "subscribe-monthly",
  "subscribe-bimonthly",
  "three-pack",
] as const;

type CheckoutMode = (typeof VALID_MODES)[number];

function isValidMode(mode: string): mode is CheckoutMode {
  return VALID_MODES.includes(mode as CheckoutMode);
}

export async function POST(request: NextRequest) {
  // Stripe not yet configured — return a friendly signal to the front-end
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ notConfigured: true }, { status: 503 });
  }

  try {
    const body = await request.json();
    const { mode, quantity = 1 } = body as {
      mode: string;
      quantity?: number;
    };

    if (!mode || !isValidMode(mode)) {
      return NextResponse.json(
        { error: "Invalid purchase mode" },
        { status: 400 },
      );
    }

    const qty =
      mode === "three-pack"
        ? 1
        : Math.min(Math.max(1, Math.floor(Number(quantity) || 1)), 6);

    const stripe = getStripe();
    const priceId = getStripePriceId(mode);
    const isSubscription =
      mode === "subscribe-monthly" || mode === "subscribe-bimonthly";

    const origin =
      request.headers.get("origin") ??
      process.env.NEXT_PUBLIC_SITE_URL ??
      "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: isSubscription ? "subscription" : "payment",
      line_items: [
        {
          price: priceId,
          quantity: qty,
        },
      ],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?cancelled=true`,
      allow_promotion_codes: true,
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      phone_number_collection: { enabled: true },
      metadata: {
        purchase_mode: mode,
        quantity: String(qty),
      },
      ...(isSubscription && {
        subscription_data: {
          metadata: {
            purchase_mode: mode,
          },
        },
      }),
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    const message =
      error instanceof Error ? error.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
