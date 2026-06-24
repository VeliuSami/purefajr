import { INGREDIENTS } from "@/lib/products";
import { HoneycombBg } from "./HoneycombBg";

export function Ingredients() {
  return (
    <section
      id="ingredients"
      className="relative overflow-hidden bg-cream-100 border-y border-cream-200 scroll-mt-20"
    >
      <HoneycombBg opacity={0.05} />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-xl mb-12">
          <p className="label-caps text-orange-600 mb-3">The Formula</p>
          <h2 className="display-serif text-4xl sm:text-5xl font-medium text-ink leading-tight">
            Eight ingredients.
            <br />
            <span className="italic">Zero fillers.</span>
          </h2>
          <p className="mt-4 text-ink-muted leading-relaxed">
            Every component is dosed for effect, not label appeal. Blended by
            hand in small batches and proudly made in the USA.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-300">
          {INGREDIENTS.map((item, i) => (
            <article
              key={item.name}
              className="bg-cream-50 p-6 sm:p-8 group hover:bg-cream-100/80 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="label-caps text-ink-faint text-[0.6rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="label-caps text-orange-600 text-[0.6rem]">
                  {item.amount}
                </span>
              </div>
              <h3 className="display-serif text-xl font-medium text-ink mb-2">
                {item.name}
              </h3>
              <p className="text-sm font-semibold text-ink mb-1.5">
                {item.boost}
              </p>
              <p className="text-sm text-ink-muted leading-relaxed">
                {item.benefit}
              </p>
            </article>
          ))}

          {/* Supplement facts card */}
          <article className="bg-ink text-cream-50 p-6 sm:p-8 sm:col-span-2 lg:col-span-1 flex flex-col justify-between">
            <div>
              <p className="label-caps text-orange-400 mb-4">Supplement Facts</p>
              <div className="space-y-2">
                {INGREDIENTS.slice(1).map((item) => (
                  <div key={item.name} className="flex justify-between text-xs">
                    <span className="text-cream-300">{item.name}</span>
                    <span className="font-mono text-cream-50">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="label-caps text-cream-400 text-[0.55rem] mt-6 leading-relaxed">
              *These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
