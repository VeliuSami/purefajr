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

export const metadata: Metadata = {
  title: "Pure Fajr — Elixir Honey with Nootropics",
  description:
    "Small-batch raw honey infused with Alpha-GPC, L-Citrulline, beta-alanine, caffeine, ginger, lemon & menthol. Subscribe & save 15%. Free shipping.",
  keywords: [
    "nootropic honey",
    "elixir honey",
    "focus supplement",
    "raw honey",
    "alpha gpc",
    "morning energy",
  ],
  openGraph: {
    title: "Pure Fajr — Elixir Honey",
    description:
      "Dawn clarity in every spoonful. Raw honey + clinically-studied nootropics.",
    type: "website",
    locale: "en_US",
    siteName: "Pure Fajr",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Fajr — Elixir Honey",
    description: "Raw honey infused with nootropics for sustained morning clarity.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#faf7f2",
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
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
