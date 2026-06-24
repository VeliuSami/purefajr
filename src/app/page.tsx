import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Ingredients } from "@/components/Ingredients";
import { HowItWorks } from "@/components/HowItWorks";
import { SocialProof } from "@/components/SocialProof";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Ingredients />
        <HowItWorks />

        {/* Final CTA band */}
        <section className="bg-orange-600 text-cream-50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <p className="label-caps text-orange-200 mb-2">Limited Batch 061</p>
              <h2 className="display-serif text-3xl sm:text-4xl font-medium">
                Start tomorrow sharper.
              </h2>
              <p className="mt-2 text-orange-100 text-sm">
                Subscribe & save 15% · Free shipping · Cancel anytime
              </p>
            </div>
            <a
              href="#product"
              className="shrink-0 bg-cream-50 text-ink label-caps px-8 py-4 hover:bg-cream-100 transition-colors min-h-[52px] flex items-center"
            >
              Shop Pure Fajr
            </a>
          </div>
        </section>

        <SocialProof />
        <FAQ />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
