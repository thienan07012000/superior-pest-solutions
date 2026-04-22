import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import { services } from "@/constants/services";

export function AreaServices({ city = "Fayetteville" }: { city?: string }) {
  return (
    <section className="py-24 bg-white relative border-y border-black/[0.03]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Sticky Left Sidebar */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-black/5 mb-8">
                <span className="w-2 h-2 rounded-full bg-[var(--brand-red)]" />
                <span className="text-secondary font-bold tracking-widest uppercase text-foreground/70 text-xs">Made for {city}</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight tracking-tight">
                We know what's <br className="hidden lg:block"/> bugging <span className="text-[var(--brand-red)]">{city}.</span>
              </h2>

              <p className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed max-w-md">
                Pests in {city} aren't the same as pests two towns over. We know the ones that show up here, and we know how to get rid of them. Take a look at what we treat below.
              </p>

              <div className="hidden lg:inline-flex items-center gap-4 px-6 py-4 rounded-3xl bg-background border border-black/5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[var(--brand-red)]/10 flex items-center justify-center text-[var(--brand-red)]">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-foreground text-sm uppercase tracking-wider">100% Guaranteed</span>
                  <span className="text-foreground/60 text-xs">If it comes back, so do we</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling Right Directory */}
          <div className="lg:w-2/3 flex flex-col gap-4 md:gap-6 relative z-10">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={service.customHref || `/services/${service.slug}`}
                className="group relative flex flex-col md:flex-row items-start md:items-center p-5 md:p-8 bg-background/50 rounded-3xl md:rounded-[2rem] border border-black/[0.04] shadow-sm hover:shadow-2xl hover:border-[var(--brand-red)]/30 transition-all duration-500 overflow-hidden"
              >
                {/* Background glow sweep on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--brand-red)]/[0.02] to-[var(--brand-red)]/[0.05] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-10 flex-grow relative z-10 w-full">
                  
                  {/* Mobile Top Row: Icon + Title */}
                  <div className="flex flex-row items-center gap-4 md:gap-0">
                    {/* Icon Block */}
                    <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-red)]/5 transition-colors duration-500 shadow-sm border border-black/[0.03]">
                      <div className={`relative w-10 h-10 md:w-14 md:h-14 ${service.isExtraLarge ? 'scale-[1.5]' : (service.isLarge ? 'scale-[1.15]' : 'scale-100')} transition-transform duration-500 group-hover:scale-110`}>
                        <Image 
                          src={service.icon} 
                          alt={`${service.title} Control`} 
                          fill 
                          sizes="(max-width: 768px) 48px, 56px" 
                          className="object-contain drop-shadow-sm" 
                        />
                      </div>
                    </div>

                    {/* Mobile Title */}
                    <h3 className="text-xl font-extrabold text-foreground group-hover:text-[var(--brand-red)] transition-colors duration-300 md:hidden pr-8">
                      {service.title} Control
                    </h3>
                  </div>

                  {/* Content Container */}
                  <div className="flex-grow md:pr-8">
                    {/* Desktop Title */}
                    <h3 className="hidden md:block text-2xl md:text-3xl font-extrabold text-foreground mb-3 group-hover:text-[var(--brand-red)] transition-colors duration-300">
                      {service.title} Control
                    </h3>
                    <p className="text-foreground/70 leading-relaxed text-sm md:text-base md:leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Large Screen CTA Arrow */}
                  <div className="hidden md:flex flex-shrink-0 items-center justify-center w-14 h-14 rounded-full border border-black/10 group-hover:border-transparent group-hover:bg-[var(--brand-red)] group-hover:text-white transition-all duration-500 text-foreground/30 shadow-sm group-hover:shadow-[0_8px_20px_rgba(200,0,0,0.3)]">
                    <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>

                {/* Mobile Small Arrow */}
                <div className="absolute top-6 right-5 md:hidden text-foreground/20 group-hover:text-[var(--brand-red)] transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
