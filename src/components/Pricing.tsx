import React from 'react';
import Image from 'next/image';
import EstimateButton from "@/components/EstimateButton";

const plans = [
  {
    name: "Bronze",
    initialPrice: "$120",
    monthlyPrice: "$40",
    description: "Great for: Budget-friendly, worry-free protection with guaranteed callbacks",
    features: [
      "Treatments every 3 months",
      "Interior service upon request",
      "Covers common pests",
      "Includes roach and mice control",
      "Unlimited free retreatments",
      "Peace of mind all year"
    ],
    image: "/bronze-plan.webp",
    cta: "Get Bronze",
    highlight: false
  },
  {
    name: "Silver",
    initialPrice: "$130",
    monthlyPrice: "$50",
    description: "Great for: Families who want more thorough protection around the home",
    features: [
      "Everything in Bronze, plus:",
      "Fly treatments at doors, trash areas, and entry points",
      "Granule perimeter barrier to block pest entry",
      "Unlimited retreatment warranty"
    ],
    image: "/silver-plan.webp",
    cta: "Get Silver",
    highlight: true
  },
  {
    name: "Gold",
    initialPrice: "$140",
    monthlyPrice: "$60",
    description: "Great for: Complete coverage. No pests and less stress all year long.",
    features: [
      "Everything in Silver, plus:",
      "Seasonal mosquito treatments (summer months)",
      "Bed bug treatments included as needed",
      "Retreatment guarantee for all"
    ],
    image: "/gold-plan.webp",
    cta: "Get Gold",
    highlight: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="pt-12 pb-24 sm:py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[var(--brand-red)]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 gap-3 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white shadow-sm border border-black/5 mb-2 transform transition hover:scale-105">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-red)] animate-pulse" />
            <span className="text-[var(--brand-red)] text-sm font-bold uppercase tracking-wider">Affordable plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-2">
            Pick the plan that's <br /><span className="text-[var(--brand-red)]">right for your home.</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-medium max-w-2xl">
            No hidden fees or sneaky costs. We have three simple ways to keep your house bug-free and your family safe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative flex flex-col h-full bg-white rounded-[2rem] p-6 border-2 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] ${
                plan.highlight 
                ? 'border-[var(--brand-red)] scale-105 z-20 shadow-[0_32px_64px_-16px_rgba(139,0,0,0.1)]' 
                : 'border-gray-100 hover:border-[var(--brand-red)]/30 z-10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--brand-red)] text-white px-5 py-1.5 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider">
                  Recommended
                </div>
              )}

              <div className="relative w-full aspect-[16/10] mb-6 rounded-[1.25rem] overflow-hidden bg-black">
                <Image
                  src={plan.image}
                  alt={plan.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <div className="mb-5">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-extrabold text-foreground">{plan.monthlyPrice}</span>
                      <span className="text-foreground/60 font-medium text-sm">/ month</span>
                    </div>
                    <p className="text-[var(--brand-red)] font-semibold text-xs py-0.5 px-2 bg-[var(--brand-red)]/5 rounded-md w-fit">
                      {plan.initialPrice} initial service
                    </p>
                  </div>
                </div>

                <p className="text-foreground/80 font-medium mb-6 text-sm leading-relaxed min-h-[36px]">
                  {plan.description}
                </p>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2.5">
                      <div className={`mt-0.5 shrink-0 w-4.5 h-4.5 rounded-full flex items-center justify-center ${feature.includes('Everything in') ? 'text-[var(--brand-red)]' : 'bg-[var(--brand-red)]/10 text-[var(--brand-red)]'}`}>
                        {feature.includes('Everything in') ? (
                          <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className={`text-sm ${feature.includes('Everything in') ? 'font-bold text-foreground' : 'text-foreground/70 font-medium'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <EstimateButton
                    className={`flex items-center justify-center w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-1 ${
                      plan.highlight
                      ? 'bg-[var(--brand-red)] text-white shadow-lg shadow-[var(--brand-red)]/20 hover:bg-[var(--brand-red-light)]'
                      : 'bg-gray-50 text-foreground border border-gray-200 hover:bg-white hover:border-[var(--brand-red)]/50'
                    }`}
                  >
                    {plan.cta}
                  </EstimateButton>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
