"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#product", label: "Shop" },
  { href: "#ingredients", label: "Formula" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream-50/90 backdrop-blur-md border-b border-cream-200 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <a href="#" className="group flex flex-col leading-none">
            <span
              className={`label-caps transition-colors ${
                scrolled
                  ? "text-ink group-hover:text-orange-600"
                  : "text-cream-50"
              }`}
            >
              Pure Fajr
            </span>
            <span
              className={`label-caps text-[0.6rem] mt-0.5 tracking-[0.22em] transition-colors ${
                scrolled ? "text-ink-faint" : "text-cream-100/80"
              }`}
            >
              Elixir Honey
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`label-caps transition-colors ${
                  scrolled
                    ? "text-ink-muted hover:text-orange-600"
                    : "text-cream-100 hover:text-cream-50"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#product"
              className={`label-caps px-5 py-2.5 transition-colors ${
                scrolled
                  ? "bg-ink text-cream-50 hover:bg-orange-600"
                  : "bg-cream-50 text-ink hover:bg-cream-100"
              }`}
            >
              Order Now
            </a>
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`md:hidden p-2 -mr-2 transition-colors ${
              menuOpen || scrolled ? "text-ink" : "text-cream-50"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <nav
          className={`absolute top-14 inset-x-0 bg-cream-50 border-b border-cream-200 p-6 flex flex-col gap-1 transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label-caps text-ink py-4 border-b border-cream-200 hover:text-orange-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#product"
            className="label-caps bg-orange-600 text-cream-50 text-center py-4 mt-4 hover:bg-orange-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Order Now — From $35.70
          </a>
        </nav>
      </div>
    </>
  );
}
