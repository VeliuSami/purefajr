import { Truck, Flag, Leaf, Lock } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Free shipping on all orders" },
  { icon: Flag, label: "Made in the USA" },
  { icon: Leaf, label: "Raw · Unfiltered · Organic botanicals" },
  { icon: Lock, label: "Secure Stripe checkout" },
];

export function TrustBar() {
  return (
    <div className="border-y border-cream-200 bg-cream-100/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3">
        <ul className="flex items-center justify-center gap-6 sm:gap-10 overflow-x-auto no-scrollbar">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 shrink-0 label-caps text-[0.6rem] sm:text-[0.65rem] text-ink-muted"
            >
              <Icon size={14} className="text-orange-600" strokeWidth={1.5} />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
