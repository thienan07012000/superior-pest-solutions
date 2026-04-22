import React from 'react';
import EstimateButton from "@/components/EstimateButton";

interface CTASectionProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export function CTASection({
  title = <>Need a hand with <span className="text-[var(--brand-red)]">pests?</span></>,
  description = (
    <>
      Give us a call or fill out the form and we&apos;ll get back to you within an hour. 
      We&apos;ll tell you exactly what it&apos;ll cost before we touch anything.
    </>
  )
}: CTASectionProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="relative group overflow-hidden rounded-[2.5rem] bg-[#0B0C10] px-8 py-14 md:px-16 md:py-20 text-center shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)]">
          {/* Subtle Radial Gradient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,0,0,0.15),transparent_60%)] pointer-events-none" />

          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-red)]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 transition-all duration-700 group-hover:scale-110" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 transition-all duration-700 group-hover:scale-110" />
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              {title}
            </h2>
            
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
              <EstimateButton
                className="group/btn relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-[var(--brand-red-light)] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(163,17,17,0.4)] w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get a Free Quote
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out" />
              </EstimateButton>
              
              <a
                href="tel:+14793644588"
                className="inline-flex items-center justify-center px-4 sm:px-10 py-5 text-lg font-bold text-foreground bg-white rounded-full transition-all duration-300 hover:bg-gray-100 hover:scale-105 border border-white/5 shadow-[0_10px_30px_rgba(255,255,255,0.1)] w-full sm:w-auto whitespace-nowrap"
              >
                <svg className="w-5 h-5 mr-2 sm:mr-3 text-[var(--brand-red-light)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                +1 479-364-4588
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
