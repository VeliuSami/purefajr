import { ProductBuyBox } from "./ProductBuyBox";
import { ProductGallery } from "./ProductGallery";
import { HoneyDrip } from "./HoneyDrip";
import { HoneycombBg } from "./HoneycombBg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HoneycombBg opacity={0.05} />
      <HoneyDrip />

      {/* Headline / CTA — airy, left-aligned */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-24 sm:pt-40 pb-8 sm:pb-14">
        <div className="max-w-2xl animate-fade-up">
          <p className="label-caps text-orange-600 mb-3 sm:mb-4">
            Small Batch · No. 061
          </p>
          <h1 className="display-serif text-[2.6rem] sm:text-7xl lg:text-[6rem] font-medium text-ink leading-[0.97] tracking-tight">
            Clarity
            <br />
            <span className="italic text-orange-600">before dawn.</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-ink-muted leading-relaxed max-w-md">
            Raw honey infused with nootropics for sustained, crash-free morning
            clarity.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
            <a
              href="#product"
              className="label-caps bg-orange-600 text-cream-50 px-8 py-4 hover:bg-orange-700 transition-colors min-h-[52px] flex items-center"
            >
              Shop Pure Fajr
            </a>
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-ink-muted">
                <strong className="text-ink font-medium">4.9</strong> · Loved by
                early risers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Purchase — gallery + pricing */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pb-14 sm:pb-24">
        <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="animate-fade-up-delay-1">
            <ProductGallery />
          </div>
          <div className="animate-fade-up-delay-2">
            <ProductBuyBox />
          </div>
        </div>
      </div>
    </section>
  );
}
