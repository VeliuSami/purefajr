export function Footer() {
  return (
    <footer className="bg-cream-100 border-t border-cream-200 mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="label-caps text-ink mb-1">Pure Fajr</p>
            <p className="label-caps text-ink-faint text-[0.6rem] tracking-[0.22em]">
              Elixir Honey
            </p>
            <p className="mt-4 text-sm text-ink-muted leading-relaxed max-w-xs">
              Small-batch nootropic honey for people who do their best work before
              the world wakes up.
            </p>
            <p className="label-caps text-ink-faint text-[0.6rem] mt-4">
              Made in the USA · Small Batch
            </p>
          </div>

          <div>
            <p className="label-caps text-ink-muted mb-4">Shop</p>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li><a href="#product" className="hover:text-orange-600 transition-colors">Pure Fajr</a></li>
              <li><a href="#product" className="hover:text-orange-600 transition-colors">Subscribe & Save</a></li>
              <li><a href="#product" className="hover:text-orange-600 transition-colors">3-Jar Bundle</a></li>
            </ul>
          </div>

          <div>
            <p className="label-caps text-ink-muted mb-4">Support</p>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li><a href="#faq" className="hover:text-orange-600 transition-colors">FAQ</a></li>
              <li><a href="mailto:samkosunnah@gmail.com" className="hover:text-orange-600 transition-colors break-all">samkosunnah@gmail.com</a></li>
              <li><span>Made in the USA</span></li>
            </ul>
          </div>

          <div>
            <p className="label-caps text-ink-muted mb-4">Legal</p>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li><span>Privacy Policy</span></li>
              <li><span>Terms of Service</span></li>
              <li><span>Shipping Policy</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="label-caps text-ink-faint text-[0.6rem]">
            © {new Date().getFullYear()} Pure Fajr. All rights reserved.
          </p>
          <p className="label-caps text-ink-faint text-[0.55rem] max-w-md leading-relaxed">
            *These statements have not been evaluated by the Food and Drug Administration.
            This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
}
