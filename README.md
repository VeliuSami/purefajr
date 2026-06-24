# Fajr Fuel — Elixir Honey E-Commerce

A conversion-optimized, mobile-first storefront for Fajr Elixir — raw honey infused with nootropics. Built with Next.js and Stripe.

## Features

- **Le Labo-inspired design** — cream & orange palette, typographic labels, minimal luxury aesthetic
- **Stripe Checkout** — one-time purchases, subscriptions (30 & 60 day), and 3-jar bundles
- **Conversion optimized** — sticky mobile CTA, social proof, ingredient transparency, FAQ, trust signals
- **Mobile-first** — touch-friendly buy box, horizontal review scroll, bottom sticky bar
- **Webhook-ready** — order fulfillment hooks in `/api/webhook`

## Pricing

| Option | Price | Notes |
|--------|-------|-------|
| One-time | $42 | Single 8 oz jar |
| Subscribe (30 days) | $35.70/mo | Save 15% · Most popular |
| Subscribe (60 days) | $37.80 | Save 10% |
| 3-Jar Bundle | $108 | Save 14% |

## Quick Start

```bash
npm install
cp .env.example .env.local
# Add your Stripe test secret key to .env.local
npm run stripe:setup   # Creates products/prices, prints env vars
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stripe Setup

1. Create a [Stripe account](https://dashboard.stripe.com/register)
2. Copy your **test** secret key to `STRIPE_SECRET_KEY` in `.env.local`
3. Run `npm run stripe:setup` — paste the printed price IDs into `.env.local`
4. For local webhooks:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhook
   ```
   Copy the webhook signing secret to `STRIPE_WEBHOOK_SECRET`

## Production

Set `NEXT_PUBLIC_SITE_URL` to your domain. Deploy to Vercel and add all env vars in the dashboard. Configure a production webhook endpoint pointing to `https://yourdomain.com/api/webhook`.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Stripe Checkout & Subscriptions
- Lucide icons
