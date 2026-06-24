import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-cream-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center">
        <CheckCircle
          size={48}
          className="text-orange-600 mx-auto mb-6"
          strokeWidth={1.5}
        />
        <p className="label-caps text-orange-600 mb-3">Order Confirmed</p>
        <h1 className="display-serif text-4xl font-medium text-ink mb-4">
          Welcome to Pure Fajr
        </h1>
        <p className="text-ink-muted leading-relaxed mb-8">
          Your elixir is being prepared. You&apos;ll receive a confirmation email
          with tracking details within 24 hours. For subscriptions, manage your
          plan anytime through the link in your receipt.
        </p>
        <Link
          href="/"
          className="inline-block bg-ink text-cream-50 label-caps px-8 py-4 hover:bg-orange-600 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
