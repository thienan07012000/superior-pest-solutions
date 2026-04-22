"use client";

import { useState, useEffect } from "react";
import EstimateModal from "@/components/EstimateModal";

export default function MobileQuoteBar() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`md:hidden fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 bg-white/95 backdrop-blur border-t border-black/10 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.18)] transition-transform duration-300 ease-out ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
        inert={!visible}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          tabIndex={visible ? 0 : -1}
          className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-white bg-[var(--brand-red)] rounded-full transition-colors hover:bg-[var(--brand-red-light)] active:scale-[0.99]"
        >
          Get Your Free Quote
        </button>
      </div>
      <EstimateModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
