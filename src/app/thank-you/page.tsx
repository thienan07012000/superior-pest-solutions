import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | Superior Pest Solutions",
  description: "Thank you for reaching out to Superior Pest Solutions. We'll be in touch shortly to schedule your free estimate.",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#f5f1ea] flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[var(--brand-red)]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[var(--brand-red)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[var(--brand-red)]/10 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-[var(--brand-red)]" strokeWidth={1.5} />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] mb-4 leading-tight">
          We&apos;ve got your request!
        </h1>

        <p className="text-base sm:text-lg text-foreground/60 leading-relaxed mb-2">
          Thank you for reaching out to{" "}
          <span className="text-[var(--brand-red)] font-semibold">Superior Pest Solutions</span>.
          Our team will review your request and contact you shortly.
        </p>

        <p className="text-sm text-foreground/40 mb-10">
          Need immediate assistance? Give us a call and we&apos;ll help you right away.
        </p>

        {/* Divider */}
        <div className="h-px w-16 bg-[var(--brand-red)]/20 mx-auto mb-10" />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-black/[0.1] bg-white text-sm font-semibold text-foreground/70 hover:border-[var(--brand-red)]/30 hover:text-[var(--brand-red)] transition-all duration-200 w-full sm:w-auto justify-center shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <a
            href="tel:+14793644588"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--brand-red)] text-sm font-bold text-white shadow-lg shadow-[var(--brand-red)]/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--brand-red)]/35 active:translate-y-0 transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <Phone className="w-4 h-4" />
            Call Us Now
          </a>
        </div>

        {/* Phone number hint */}
        <p className="mt-5 text-xs text-foreground/35">
          +1 479-364-4588 &nbsp;·&nbsp; Open 24/7
        </p>
      </div>
    </div>
  );
}
