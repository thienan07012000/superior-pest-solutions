"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { X, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { services } from "@/constants/services";

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TOTAL_STEPS = 3;

const VISIT_OPTIONS = [
  "As soon as possible",
  "Within a week",
  "Within 2 weeks",
];

const STEP_LABELS = [
  "Select Service",
  "More Details",
  "Your Info",
];

export default function EstimateModal({ isOpen, onClose }: EstimateModalProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [details, setDetails] = useState("");
  const [visitTime, setVisitTime] = useState("");
  const [referredBy, setReferredBy] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [visitOpen, setVisitOpen] = useState(false);
  const visitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visitOpen) return;
    const onClick = (e: MouseEvent) => {
      if (visitRef.current && !visitRef.current.contains(e.target as Node)) {
        setVisitOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [visitOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Only reset when re-opening after a completed submission
  useEffect(() => {
    if (isOpen && submitted) {
      setStep(1);
      setSelectedServices([]);
      setDetails("");
      setVisitTime("");
      setReferredBy("");
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setSubmitting(false);
      setSubmitted(false);
    }
  }, [isOpen, submitted]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const canProceed = () => {
    if (step === 1) return selectedServices.length > 0;
    if (step === 2) return !!visitTime;
    if (step === 3) return !!(name.trim() && email.trim() && phone.trim() && address.trim());
    return false;
  };

  const handleNext = () => {
    if (step < TOTAL_STEPS) {
      setStep((s) => s + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await fetch(
        "https://services.leadconnectorhq.com/hooks/HeEI7QYMkCihP0peWurp/webhook-trigger/7710fd32-17e1-49a3-9bd7-68b3bcfa4899",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            services: selectedServices,
            details,
            visitTime,
            referredBy,
            name,
            email,
            phone,
            address,
            submittedAt: new Date().toISOString(),
            source: typeof window !== "undefined" ? window.location.href : "",
          }),
        }
      );
    } catch {
      // non-blocking — still route to thank-you so the user isn't stuck
    }
    setSubmitted(true);
    onClose();
    router.push("/thank-you");
  };

  const progress = (step / TOTAL_STEPS) * 100;

  return createPortal(
    <div className="fixed inset-0 z-[2147483000] flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Panel */}
      <div
        className="relative w-full max-w-2xl bg-[#f5f1ea] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        style={{ maxHeight: "min(calc(100dvh - 24px), 680px)", height: "min(calc(100dvh - 24px), 680px)" }}
        role="dialog"
        aria-modal="true"
        aria-label="Get Your Free Estimate"
      >
        {/* Top Progress Bar */}
        <div className="h-1 w-full bg-black/10 shrink-0">
          <div
            className="h-full bg-[var(--brand-red)] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Header */}
        <div className="shrink-0 flex items-start justify-between px-5 sm:px-8 pt-5 pb-4 border-b border-black/[0.06]">
          <div className="flex-1 min-w-0 pr-4">
            {/* Step tracker */}
            <div className="flex items-center gap-1.5 mb-2">
              {STEP_LABELS.map((label, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div
                    className={`flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold transition-all duration-300 ${
                      i + 1 < step
                        ? "bg-[var(--brand-red)] text-white"
                        : i + 1 === step
                        ? "bg-[var(--brand-red)] text-white ring-4 ring-[var(--brand-red)]/20"
                        : "bg-black/10 text-foreground/40"
                    }`}
                  >
                    {i + 1 < step ? <Check className="w-2.5 h-2.5" /> : i + 1}
                  </div>
                  <span
                    className={`text-xs font-medium hidden sm:block transition-colors duration-300 ${
                      i + 1 === step
                        ? "text-[var(--brand-red)]"
                        : i + 1 < step
                        ? "text-foreground/50"
                        : "text-foreground/30"
                    }`}
                  >
                    {label}
                  </span>
                  {i < STEP_LABELS.length - 1 && (
                    <div
                      className={`hidden sm:block w-8 h-px transition-colors duration-300 ${
                        i + 1 < step ? "bg-[var(--brand-red)]/40" : "bg-black/10"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-[var(--foreground)] leading-tight">
              {step === 1 && "What can we help you with?"}
              {step === 2 && "Tell us a bit more"}
              {step === 3 && "How do we reach you?"}
            </h2>
            <p className="text-xs sm:text-sm text-foreground/50 mt-1">
              {step === 1 && "Select one or more services that match your situation."}
              {step === 2 && "Help us prepare before we arrive."}
              {step === 3 && "We'll use this to schedule your free estimate."}
            </p>
          </div>

          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/[0.06] flex items-center justify-center hover:bg-black/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/50" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 relative overflow-hidden">
        <div className="h-full overflow-y-auto px-5 sm:px-8 py-5 sm:py-6 [scrollbar-width:thin] [scrollbar-color:rgba(0,0,0,0.2)_transparent]">

          {/* ── Step 1: Service Selection ── */}
          {step === 1 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
              {services.map((service) => {
                const isSelected = selectedServices.includes(service.slug);
                return (
                  <button
                    key={service.slug}
                    onClick={() =>
                      setSelectedServices((prev) =>
                        prev.includes(service.slug)
                          ? prev.filter((s) => s !== service.slug)
                          : [...prev, service.slug]
                      )
                    }
                    className={`relative flex flex-col items-center gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                      isSelected
                        ? "border-[var(--brand-red)] bg-[var(--brand-red)]/[0.06] shadow-sm"
                        : "border-black/[0.08] bg-white hover:border-[var(--brand-red)]/30 hover:bg-[var(--brand-red)]/[0.02]"
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[var(--brand-red)] flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </span>
                    )}
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-contain"
                        sizes="48px"
                      />
                    </div>
                    <span
                      className={`text-xs sm:text-sm font-semibold text-center leading-tight ${
                        isSelected ? "text-[var(--brand-red)]" : "text-foreground/75"
                      }`}
                    >
                      {service.title}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* ── Step 2: Details + Visit Time ── */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-foreground/65 mb-2">
                  Describe your situation{" "}
                  <span className="font-normal text-foreground/35">(optional)</span>
                </label>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Where have you seen pests? How long has this been going on? Any additional context helps us come prepared..."
                  rows={5}
                  className="w-full rounded-xl border border-black/[0.1] bg-white px-4 py-3 text-base sm:text-sm text-foreground placeholder-foreground/25 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]/25 focus:border-[var(--brand-red)]/60 resize-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground/65 mb-2">
                  When should we come by?{" "}
                  <span className="text-[var(--brand-red)]">*</span>
                </label>
                <div className="relative" ref={visitRef}>
                  <button
                    type="button"
                    onClick={() => setVisitOpen((o) => !o)}
                    aria-haspopup="listbox"
                    aria-expanded={visitOpen}
                    className={`w-full flex items-center justify-between rounded-xl border bg-white px-4 py-3 pr-3 text-sm text-left focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]/25 focus:border-[var(--brand-red)]/60 transition cursor-pointer ${
                      visitOpen ? "border-[var(--brand-red)]/60 ring-2 ring-[var(--brand-red)]/25" : "border-black/[0.1]"
                    } ${visitTime ? "text-foreground" : "text-foreground/35"}`}
                  >
                    <span className="truncate">
                      {visitTime || "Select a timeframe..."}
                    </span>
                    <svg
                      className={`w-4 h-4 shrink-0 text-foreground/35 transition-transform duration-200 ${visitOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {visitOpen && (
                    <ul
                      role="listbox"
                      className="absolute z-10 mt-2 w-full rounded-xl border border-black/[0.08] bg-white shadow-xl shadow-black/10 overflow-hidden py-1.5"
                    >
                      {VISIT_OPTIONS.map((opt) => {
                        const selected = visitTime === opt;
                        return (
                          <li
                            key={opt}
                            role="option"
                            aria-selected={selected}
                            onClick={() => {
                              setVisitTime(opt);
                              setVisitOpen(false);
                            }}
                            className={`flex items-center justify-between px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                              selected
                                ? "bg-[var(--brand-red)]/[0.08] text-[var(--brand-red)] font-semibold"
                                : "text-foreground/75 hover:bg-black/[0.04]"
                            }`}
                          >
                            <span>{opt}</span>
                            {selected && <Check className="w-4 h-4" />}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground/65 mb-2">
                  Referred by{" "}
                  <span className="font-normal text-foreground/35">(optional)</span>
                </label>
                <input
                  type="text"
                  value={referredBy}
                  onChange={(e) => setReferredBy(e.target.value)}
                  placeholder="Who referred you to us?"
                  className="w-full rounded-xl border border-black/[0.1] bg-white px-4 py-3 text-base sm:text-sm text-foreground placeholder-foreground/25 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]/25 focus:border-[var(--brand-red)]/60 transition"
                />
              </div>
            </div>
          )}

          {/* ── Step 3: Contact Info ── */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground/65 mb-2">
                    Full Name <span className="text-[var(--brand-red)]">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Smith"
                    className="w-full rounded-xl border border-black/[0.1] bg-white px-4 py-3 text-base sm:text-sm text-foreground placeholder-foreground/25 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]/25 focus:border-[var(--brand-red)]/60 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground/65 mb-2">
                    Email <span className="text-[var(--brand-red)]">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-black/[0.1] bg-white px-4 py-3 text-base sm:text-sm text-foreground placeholder-foreground/25 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]/25 focus:border-[var(--brand-red)]/60 transition"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground/65 mb-2">
                    Phone <span className="text-[var(--brand-red)]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(479) 000-0000"
                    className="w-full rounded-xl border border-black/[0.1] bg-white px-4 py-3 text-base sm:text-sm text-foreground placeholder-foreground/25 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]/25 focus:border-[var(--brand-red)]/60 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground/65 mb-2">
                    Address <span className="text-[var(--brand-red)]">*</span>
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="123 Main St, Fayetteville, AR"
                    className="w-full rounded-xl border border-black/[0.1] bg-white px-4 py-3 text-base sm:text-sm text-foreground placeholder-foreground/25 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]/25 focus:border-[var(--brand-red)]/60 transition"
                  />
                </div>
              </div>
              <p className="text-xs text-foreground/35 pt-1">
                Your information is kept private and only used to schedule your free estimate.
              </p>
            </div>
          )}
        </div>
        {/* Gradient scroll hint — only shown on step 1 where service grid may overflow */}
        {step === 1 && (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#f5f1ea] to-transparent" />
        )}
        </div>

        {/* Footer: navigation */}
        <div className="shrink-0 px-5 sm:px-8 py-4 sm:py-5 border-t border-black/[0.06] flex items-center justify-end gap-4">
          <div className="flex items-center gap-2.5">
            {step > 1 && (
              <button
                onClick={handleBack}
                disabled={submitting}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-black/[0.12] text-sm font-semibold text-foreground/55 hover:bg-black/[0.04] hover:text-foreground/80 transition-all disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!canProceed() || submitting}
              className={`flex items-center gap-1.5 px-5 sm:px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                canProceed() && !submitting
                  ? "bg-[var(--brand-red)] text-white shadow-lg shadow-[var(--brand-red)]/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--brand-red)]/35 active:translate-y-0"
                  : "bg-black/[0.08] text-foreground/25 cursor-not-allowed"
              }`}
            >
              {submitting ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : step === TOTAL_STEPS ? (
                <>
                  Submit Request
                  <Check className="w-4 h-4" />
                </>
              ) : (
                <>
                  Next
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
