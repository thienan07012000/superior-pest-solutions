import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { services } from "@/constants/services";

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Repeating Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: "url('/bug-pattern.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '400px'
        }}
      />
      {/* Top Fade Gradient */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 gap-8 max-w-3xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Whatever is crawling around, we’ll handle it.
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              We’ve spent years helping neighbors keep their homes pest-free. We use safe, simple methods to clear out bugs and rodents so you can feel comfortable again.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            return (
              <Link
                href={service.customHref || `/services/${service.slug}`}
                key={index}
                className="group relative bg-white p-8 rounded-[2rem] border-2 border-gray-100 hover:border-[var(--brand-red)]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--brand-red)]/5 overflow-hidden flex flex-col cursor-pointer"
              >
                {/* Subtle gradient sweep right-to-left on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-red)]/0 to-[var(--brand-red)]/0 group-hover:from-[var(--brand-red)]/5 transition-colors duration-500 opacity-0 group-hover:opacity-100" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6 transition-all duration-300 text-foreground group-hover:translate-x-1">
                    <div className="relative w-14 h-14 flex-shrink-0">
                      <div className={`absolute inset-0 flex items-center justify-center ${service.isExtraLarge ? 'scale-[1.5] -translate-x-1 -translate-y-1' : (service.isLarge ? 'scale-[1.15] -translate-x-0.5 -translate-y-0.5' : 'scale-100')} transition-transform duration-300`}>
                        <Image
                          src={service.icon}
                          alt={`${service.title} icon`}
                          width={80}
                          height={80}
                          sizes="80px"
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-foreground/70 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>

                {/* Top-right interactive arrow */}
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-black/5 group-hover:bg-[var(--brand-red)] group-hover:text-white transition-all duration-300 shadow-sm z-10">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
              </Link>
            );
          })}
        </div>


      </div>
    </section>
  );
}
