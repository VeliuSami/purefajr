"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { INGREDIENTS } from "@/lib/products";

type Benefit = {
  label: string;
  side: "left" | "right";
  pos: string;
  rot: number;
};

const SLIDE2_BENEFITS: Benefit[] = [
  { label: "Sharper Focus",    side: "left",  pos: "top-[12%] left-[3%]",               rot: 35  },
  { label: "Clean Energy",     side: "left",  pos: "top-1/2 -translate-y-1/2 left-[2%]", rot: 0   },
  { label: "Better Blood Flow",side: "left",  pos: "bottom-[12%] left-[3%]",             rot: -35 },
  { label: "Better Memory",    side: "right", pos: "top-[12%] right-[3%]",               rot: 145 },
  { label: "More Endurance",   side: "right", pos: "top-1/2 -translate-y-1/2 right-[2%]",rot: 180 },
  { label: "Calm Clarity",     side: "right", pos: "bottom-[12%] right-[3%]",            rot: 215 },
];

function BenefitArrows() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-[3%] -translate-x-1/2">
        <span className="label-caps rounded-full bg-ink/85 px-2.5 py-1 text-[0.5rem] sm:text-[0.6rem] text-cream-50 shadow-sm">
          What You&apos;ll Feel
        </span>
      </div>
      {SLIDE2_BENEFITS.map((b) => (
        <div key={b.label} className={`absolute flex items-center gap-1 ${b.pos}`}>
          {b.side === "right" && (
            <ArrowRight size={14} className="shrink-0 text-orange-500" strokeWidth={2.5}
              style={{ transform: `rotate(${b.rot}deg)` }} />
          )}
          <span className="label-caps whitespace-nowrap rounded-full border border-cream-200 bg-cream-50/95 px-1.5 py-0.5 text-[0.45rem] sm:text-[0.55rem] text-ink shadow-sm">
            {b.label}
          </span>
          {b.side === "left" && (
            <ArrowRight size={14} className="shrink-0 text-orange-500" strokeWidth={2.5}
              style={{ transform: `rotate(${b.rot}deg)` }} />
          )}
        </div>
      ))}
    </div>
  );
}

function InfoSlide() {
  return (
    <div className="absolute inset-0 flex flex-col bg-ink overflow-y-auto">
      {/* Header strip */}
      <div className="flex items-baseline justify-between px-4 sm:px-6 pt-4 sm:pt-5 pb-2 border-b border-cream-50/10">
        <p className="display-serif text-lg sm:text-xl font-medium text-cream-50">
          Pure Fajr
        </p>
        <p className="label-caps text-orange-400 text-[0.55rem]">
          8 oz · 30 servings
        </p>
      </div>

      {/* Supplement-style facts table */}
      <div className="flex-1 px-4 sm:px-6 py-3">
        <p className="label-caps text-cream-400 text-[0.55rem] mb-2">
          Serving Size: 1 tbsp (15 ml) · Servings per container: 30
        </p>

        <div className="divide-y divide-cream-50/8">
          {INGREDIENTS.map((ing) => (
            <div key={ing.name} className="flex items-start justify-between gap-2 py-1.5">
              <div className="min-w-0">
                <p className="text-[0.7rem] sm:text-xs font-semibold text-cream-50 leading-tight">
                  {ing.name}
                </p>
                <p className="text-[0.6rem] sm:text-[0.65rem] text-orange-400 leading-tight mt-0.5">
                  {ing.boost}
                </p>
              </div>
              <p className="shrink-0 font-mono text-[0.65rem] sm:text-xs text-cream-200 tabular-nums">
                {ing.amount}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer badges */}
      <div className="px-4 sm:px-6 pb-4 pt-2 border-t border-cream-50/10">
        <div className="flex flex-wrap gap-1.5">
          {["Made in USA", "Raw & Unfiltered", "Sunnah-Inspired", "No Fillers"].map((tag) => (
            <span key={tag} className="label-caps text-[0.5rem] border border-orange-400/40 text-orange-400 px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
        <p className="label-caps text-cream-50/25 text-[0.45rem] mt-2 leading-relaxed">
          *Not evaluated by the FDA. Not intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </div>
    </div>
  );
}

type Slide = { id: string; isImage: boolean; src?: string; alt?: string; overlay?: React.ReactNode };

const SLIDES: Slide[] = [
  {
    id: "action",
    isImage: true,
    src: "/product/action.png",
    alt: "Pure Fajr honey jar suspended in swirling honey with ginger, lemon and wildflowers",
  },
  {
    id: "benefits",
    isImage: true,
    src: "/product/counter.png",
    alt: "Pure Fajr jar — what you'll feel",
    overlay: <BenefitArrows />,
  },
  {
    id: "dipper",
    isImage: true,
    src: "/product/dipper.png",
    alt: "Pure Fajr jar in morning light beside a honey dipper",
  },
  {
    id: "info",
    isImage: false,
  },
];

export function ProductGallery() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const go = (next: number) => setActive((next + SLIDES.length) % SLIDES.length);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) go(active + (delta < 0 ? 1 : -1));
    touchStartX.current = null;
  };

  return (
    <div className="select-none">
      {/* Main viewer */}
      <div
        className="relative aspect-[4/3] w-full overflow-hidden border border-cream-200 bg-cream-200"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-300 ${
              i === active ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={i !== active}
          >
            {slide.isImage ? (
              <>
                <Image
                  src={slide.src!}
                  alt={slide.alt!}
                  fill
                  sizes="(max-width: 768px) 92vw, 560px"
                  className="object-cover"
                  priority={i === 0}
                />
                {slide.overlay}
              </>
            ) : (
              <InfoSlide />
            )}
          </div>
        ))}

        {/* Arrows */}
        <button type="button" aria-label="Previous image" onClick={() => go(active - 1)}
          className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50/85 text-ink backdrop-blur-sm transition-colors hover:bg-cream-50">
          <ChevronLeft size={18} />
        </button>
        <button type="button" aria-label="Next image" onClick={() => go(active + 1)}
          className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50/85 text-ink backdrop-blur-sm transition-colors hover:bg-cream-50">
          <ChevronRight size={18} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
          {SLIDES.map((slide, i) => (
            <button key={slide.id} type="button" aria-label={`Go to image ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-5 bg-orange-600" : "w-1.5 bg-cream-50/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails — 4 cols */}
      <div className="mt-3 grid grid-cols-4 gap-2">
        {SLIDES.map((slide, i) => (
          <button key={slide.id} type="button" onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            className={`relative aspect-[4/3] overflow-hidden border transition-colors ${
              i === active ? "border-orange-600" : "border-cream-200 hover:border-cream-400"
            }`}
          >
            {slide.isImage ? (
              <Image src={slide.src!} alt="" fill sizes="100px" className="object-cover" />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-0.5 bg-ink">
                <span className="label-caps text-[0.45rem] text-orange-400">Formula</span>
                <span className="label-caps text-[0.4rem] text-cream-400">8 actives</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
