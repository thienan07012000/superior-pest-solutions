import React from 'react';
import Image from 'next/image';

export const Story = () => {
  return (
    <section className="py-24 bg-[#1c1917] relative overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[var(--brand-red)]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[var(--brand-red)]/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-[0_48px_120px_-20px_rgba(0,0,0,0.5)] border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-[400px] lg:h-auto min-h-[500px]">
              <Image
                src="/our-story.webp"
                alt="Dalton and Brandon - Superior Pest Solutions Story"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Optional: A very subtle gradient overlay on the image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-red)]/5 border border-[var(--brand-red)]/10 mb-8 w-fit">
                <span className="text-[var(--brand-red)] text-xs font-bold uppercase tracking-widest">Our Story</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                Our family is here <br /><span className="text-[var(--brand-red)]">to take care of yours.</span>
              </h2>

              <div className="space-y-6 text-foreground/80 leading-relaxed font-medium">
                <p>
                  Superior Pest Solutions started in <span className="text-foreground font-bold">Arklahoma</span> six years ago with a simple goal: <span className="text-[var(--brand-red)] font-bold">protect what matters most, our clients, the right way.</span> Now we're here to provide superior service to you in Fayetteville and the greater NWA area.
                </p>

                <p>
                  Co-owners Dalton and Brandon are cousins who grew up in rural Oklahoma in houses right next to each other — raised by families who knew the value of grit, showing up for your neighbors, and leaving things better than you found them. Their grandparents — one with chicken houses, the other a construction firm — passed down more than work ethic. <span className="text-foreground font-bold italic">They taught them to care for others.</span>
                </p>

                <p>
                  In 2019, Dalton started a local lawn care business that quickly expanded to pest control and more. Brandon joined the military. But losing their grandparents brought Brandon and Dalton back together after years a part— ready to trade talk for action and turn family values into real impact for Arkansas homes. Together, they launched Superior Pest Solutions Northwest Arkansas to serve Arkansas families with top-notch service and purpose.
                </p>

                <p>
                  We do things differently. That means no pressure, no gimmicks. Just licensed professionals, pest control in Northwest Arkansas that actually works, and honest conversations about what’s best for your home, your health, and your budget.
                </p>

                <p className="border-l-4 border-[var(--brand-red)] pl-6 py-2 italic font-semibold text-foreground">
                  We’re proud to serve you. And whether we’re treating a home or property, or giving back through our Good Neighbor Giveaway or ongoing free lunch program, our roots keep us grounded in the reason we started all this in the first place: people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
