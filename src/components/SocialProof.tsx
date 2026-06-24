const REVIEWS = [
  {
    name: "Samko",
    location: "Verified Buyer",
    rating: 5,
    title: "Replaced my morning coffee ritual",
    body: "I was skeptical about honey with nootropics but this is genuinely the cleanest energy I've ever had. The menthol finish is incredible — I take it before my 5am runs.",
    verified: true,
  },
  {
    name: "Sami",
    location: "Verified Buyer",
    rating: 5,
    title: "Subscription is a no-brainer",
    body: "Subscribed on my second order. The taste is complex — not just sweet honey. Ginger and lemon come through. Focus lasts 4+ hours without any crash.",
    verified: true,
  },
];

export function SocialProof() {
  return (
    <section id="reviews" className="bg-ink text-cream-50 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-10 sm:mb-12">
          <p className="label-caps text-orange-400 mb-3">Reviews</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display-serif text-4xl sm:text-5xl font-medium leading-tight">
              Loved by early risers
            </h2>
            <div className="flex items-center gap-3 shrink-0">
              <div className="text-right">
                <p className="display-serif text-3xl font-medium">4.9</p>
                <div className="flex items-center justify-end gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="w-px h-10 bg-cream-50/20" />
              <p className="text-xs text-cream-300 max-w-[130px] leading-relaxed">
                94% of subscribers renew after month one
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {REVIEWS.map((review) => (
            <article
              key={review.name}
              className="bg-cream-50/5 border border-cream-50/10 p-6 sm:p-8 flex flex-col"
            >
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="display-serif text-xl font-medium text-cream-50 mb-2">
                {review.title}
              </h3>
              <p className="text-sm text-cream-300 leading-relaxed flex-1">
                &ldquo;{review.body}&rdquo;
              </p>
              <div className="mt-5 pt-5 border-t border-cream-50/10 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-cream-50">{review.name}</p>
                  <p className="text-xs text-cream-400">{review.location}</p>
                </div>
                {review.verified && (
                  <span className="label-caps text-[0.55rem] text-orange-400 border border-orange-400/30 px-2 py-1">
                    Verified
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
