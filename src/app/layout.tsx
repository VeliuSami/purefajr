import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://purefajr.com";
const OG_IMAGE = `${SITE_URL}/product/action.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pure Fajr — Raw Honey Elixir with Nootropics",
    template: "%s | Pure Fajr",
  },
  description:
    "Small-batch raw honey infused with Alpha-GPC, L-Citrulline, Beta-Alanine, caffeine, ginger, lemon & menthol. Sustained morning clarity — no crash. Made in the USA.",
  keywords: [
    "nootropic honey",
    "pure fajr",
    "raw honey elixir",
    "alpha gpc honey",
    "focus supplement",
    "morning energy",
    "sunnah inspired supplement",
    "made in usa honey",
    "honey nootropics",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Pure Fajr — Raw Honey Elixir",
    description:
      "Clarity before dawn. Raw wildflower honey infused with Alpha-GPC, L-Citrulline, caffeine & more. Subscribe & save 15%. Free shipping.",
    type: "website",
    url: SITE_URL,
    locale: "en_US",
    siteName: "Pure Fajr",
    images: [
      {
        url: OG_IMAGE,
        width: 1280,
        height: 853,
        alt: "Pure Fajr — Raw Honey Elixir jar surrounded by honey, ginger, lemon and wildflowers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Fajr — Raw Honey Elixir",
    description:
      "Clarity before dawn. Raw honey + nootropics for sustained morning focus.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#faf7f2",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Pure Fajr — Raw Honey Elixir",
  description:
    "Small-batch raw wildflower honey infused with Alpha-GPC, L-Citrulline, Beta-Alanine, natural caffeine, organic ginger, lemon, and menthol crystals. Made in the USA.",
  brand: {
    "@type": "Brand",
    name: "Pure Fajr",
  },
  url: SITE_URL,
  image: OG_IMAGE,
  offers: [
    {
      "@type": "Offer",
      name: "One-Time Purchase",
      price: "42.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: SITE_URL,
    },
    {
      "@type": "Offer",
      name: "Subscribe & Save — Every 30 Days",
      price: "35.70",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: SITE_URL,
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    reviewCount: "2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
