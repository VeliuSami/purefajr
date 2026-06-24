const STEPS = [
  {
    step: "01",
    title: "Take one tablespoon",
    description:
      "20–30 minutes before you need peak focus. Straight from the jar or stirred into warm (not boiling) water.",
  },
  {
    step: "02",
    title: "Feel the lift",
    description:
      "Honey delivers fast energy while Alpha-GPC and caffeine build sustained clarity over 30–45 minutes.",
  },
  {
    step: "03",
    title: "Work deep, crash never",
    description:
      "L-Citrulline supports blood flow. Ginger and menthol keep you alert without jitters or the 2pm slump.",
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="text-center max-w-lg mx-auto mb-12 sm:mb-16">
        <p className="label-caps text-orange-600 mb-3">How It Works</p>
        <h2 className="display-serif text-4xl sm:text-5xl font-medium text-ink">
          Your morning ritual
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {STEPS.map((item, i) => (
          <div key={item.step} className="relative text-center md:text-left">
            {i < STEPS.length - 1 && (
              <div className="hidden md:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-cream-300" />
            )}
            <p className="label-caps text-orange-600 mb-4">{item.step}</p>
            <h3 className="display-serif text-2xl font-medium text-ink mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
