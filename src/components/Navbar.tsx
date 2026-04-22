"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import EstimateModal from "@/components/EstimateModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [estimateOpen, setEstimateOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Areas", href: "/areas-we-serve" },

  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex flex-col">
        <div className="bg-[#1a1a1a] text-white py-2.5 px-4 text-center text-[15px] leading-relaxed w-full">
          Text <span className="font-bold">BUGS</span> to <a href="sms:+14793644588" className="font-bold hover:text-gray-300 transition-colors">(479) 364-4588</a> or give us a call now to book your service in <span className="font-bold">60 seconds</span>
        </div>
        <nav
          className={`w-full transition-all duration-300 ${scrolled ? "bg-background shadow-sm" : "bg-transparent md:bg-background md:border-b md:border-[var(--brand-red)]/5"} py-3 md:py-5`}
        >
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center relative">
            {/* Logo */}
            <Link href="/" className="relative flex items-center h-10 w-52 md:w-64 group pl-2">
              {/* Over-scaled sizing using absolute positioning to prevent height-stretching the navbar */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[220px] h-[60px] md:w-[280px] md:h-[75px] transition-transform duration-300 group-hover:scale-105 origin-left">
                <Image
                  src="/superiorpestsolutions-logo-navbar.png"
                  alt="Superior Pest Solutions"
                  fill
                  sizes="(max-width: 768px) 220px, 280px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-foreground/80 hover:text-[var(--brand-red)] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--brand-red)] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:+14793644588"
                className="flex items-center gap-2 text-foreground text-base font-semibold hover:text-[var(--brand-red)] transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-[var(--brand-red)]/10 flex items-center justify-center text-[var(--brand-red)] group-hover:bg-[var(--brand-red)] group-hover:text-white transition-colors">
                  <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                +1 479-364-4588
              </a>
              <button
                onClick={() => setEstimateOpen(true)}
                className="bg-[var(--brand-red)] text-white px-6 py-3 rounded-full font-semibold text-base shadow-lg shadow-[var(--brand-red)]/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--brand-red)]/30 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                Get Your Free Estimate
              </button>
            </div>

            {/* Mobile Right Side */}
            <div className="lg:hidden flex items-center gap-1">
              <a
                href="tel:+14793644588"
                aria-label="Call +1 479-364-4588"
                className="p-2 text-[var(--brand-red)] focus:outline-none"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </a>
              {/* Mobile Menu Toggle */}
              <button
                type="button"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                className="p-2 text-foreground focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            id="mobile-menu"
            className={`lg:hidden absolute top-full left-0 w-full bg-background border-b border-gray-200 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-[var(--brand-red)] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+14793644588"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 border-2 border-[var(--brand-red)] text-[var(--brand-red)] px-6 py-3 rounded-lg font-semibold text-center mt-2 hover:bg-[var(--brand-red)] hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call +1 479-364-4588
              </a>
              <button
                onClick={() => { setMobileMenuOpen(false); setEstimateOpen(true); }}
                className="bg-[var(--brand-red)] text-white px-6 py-3 rounded-lg font-semibold text-center cursor-pointer"
              >
                Get Your Free Estimate
              </button>
            </div>
          </div>
        </nav>
      </header>

      <EstimateModal isOpen={estimateOpen} onClose={() => setEstimateOpen(false)} />
    </>
  );
}
