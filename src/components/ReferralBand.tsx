import React from 'react';
import EstimateButton from "@/components/EstimateButton";

interface ReferralBandProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export const ReferralBand: React.FC<ReferralBandProps> = ({
  title = "Refer a friend or loved one. Be a good neighbor.",
  description = <>Get pest control for <span className="text-white font-bold underline underline-offset-4 decoration-white/30">half the price!</span></>
}) => {
  return (
    <section className="w-full bg-[var(--brand-red)] border-y border-white/5 py-6 md:py-8 shadow-[0_20px_50px_rgba(0,0,0,0.22)] relative z-20 overflow-hidden group">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">

        {/* Left side: Icon and Text */}
        <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          {/* Circular Icon (Tuned size) */}
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 shrink-0 transform group-hover:scale-110 transition-transform duration-500 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <div className="flex flex-col">
            <h2 className="text-white text-xl md:text-2xl font-bold tracking-tight mb-1">
              {title}
            </h2>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 justify-center md:justify-start">
              <p className="text-white/80 text-lg md:text-xl font-medium">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Right side: Button and Subtext */}
        <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
          <EstimateButton
            className="group/btn flex items-center gap-3 bg-white text-[var(--brand-red)] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-white/15 relative overflow-hidden active:scale-95"
          >
            Open Referral Form
            <div className="w-2 h-2 rounded-full bg-[var(--brand-red)] animate-pulse group-hover/btn:scale-125 transition-transform" />
          </EstimateButton>
          <div className="flex items-center gap-2 text-white/90 text-sm font-semibold tracking-wide uppercase">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            100% Money Back Guarantee!
          </div>
        </div>

      </div>
    </section>
  );
};
