"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { areas, Area } from '@/constants/areas';

const cityPages = new Set(['fayetteville', 'bentonville', 'rogers', 'springdale']);

interface AreasServedSectionProps {
  badge: string;
  heading: React.ReactNode;
  sectionDescription: string;
  getDescription: (area: Area) => string;
  isHomePage?: boolean;
}

export const AreasServedSection = ({ badge, heading, sectionDescription, getDescription, isHomePage }: AreasServedSectionProps) => {
  const [activeArea, setActiveArea] = useState<Area | null>(areas[0]); // areas[0] is Fayetteville

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url('/bug-pattern.png')", backgroundRepeat: 'repeat', backgroundSize: '400px' }}
      />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Side */}
          <div className="w-full lg:w-1/2 pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-black/5 mb-6 transform transition hover:scale-105">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-red)]" />
              <span className="text-sm font-semibold tracking-wide uppercase text-foreground/80">{badge}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-[1.1]">
              {heading}
            </h2>

            <p className="text-lg text-foreground/70 mb-10 max-w-xl leading-relaxed">{sectionDescription}</p>

            {/* Mobile: accordion list (< sm) */}
            <div className="flex flex-col gap-3 sm:hidden">
              {(() => {
                const mobileAreas = isHomePage
                  ? areas.filter(a => ['fayetteville', 'bentonville', 'rogers', 'springdale'].includes(a.id))
                  : areas;
                return (
                  <>
                    {mobileAreas.map((area) => {
                      const isActive = activeArea?.id === area.id;
                      return (
                        <div key={area.id}>
                          <button
                            onClick={() => setActiveArea(isActive ? null : area)}
                            className={`w-full flex items-center gap-3 p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                              isActive
                                ? 'bg-white border-[var(--brand-red)] shadow-xl shadow-[var(--brand-red)]/10'
                                : 'bg-white/50 border-black/[0.03]'
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 shrink-0 ${
                              isActive ? 'bg-[var(--brand-red)] text-white' : 'bg-gray-100 text-foreground/40'
                            }`}>
                              {area.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className={`font-bold text-base transition-colors ${isActive ? 'text-foreground' : 'text-foreground/60'}`}>
                                {area.name}
                              </div>
                              <div className="text-xs font-semibold text-[var(--brand-red)] tracking-wider">{area.state}</div>
                            </div>
                            <svg
                              className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isActive ? 'rotate-180 text-[var(--brand-red)]' : 'text-foreground/30'}`}
                              fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="panel"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="mt-2 mb-2 rounded-2xl overflow-hidden border border-black/[0.06] bg-white">
                            <div className="relative h-48 w-full">
                              <Image
                                src={area.image}
                                alt={`${area.name}, ${area.state}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                                priority
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                              <div className="absolute bottom-4 left-4">
                                <span className="px-3 py-1 rounded-full bg-[var(--brand-red)]/90 text-white text-xs font-bold tracking-widest uppercase">
                                  We&apos;re Here
                                </span>
                              </div>
                            </div>
                            <div className="p-5">
                              <h3 className="text-xl font-bold text-foreground mb-2">
                                {area.name}, <span className="text-[var(--brand-red)]">{area.state}</span>
                              </h3>
                              <p className="text-sm text-foreground/70 leading-relaxed">
                                {getDescription(area)}
                              </p>
                              {cityPages.has(area.id) && (
                                <Link
                                  href={`/areas-we-serve/${area.id}`}
                                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-[var(--brand-red)] text-white text-sm font-semibold transition-all duration-300 hover:bg-[var(--brand-red-light)]"
                                >
                                  See {area.name} page
                                </Link>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              {isHomePage && (
                <Link
                  href="/areas-we-serve"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[var(--brand-red)] text-white font-bold transition-all duration-300 hover:bg-[var(--brand-red-light)] shadow-lg shadow-[var(--brand-red)]/20 hover:-translate-y-1"
                >
                  See All Areas We Serve
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              )}
            </>
          );
        })()}
            </div>

            {/* sm+: regular grid */}
            <div className="hidden sm:grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-4">
              {areas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setActiveArea(area)}
                  className={`
                    group flex items-center gap-3 p-4 rounded-2xl border-2 transition-all duration-300 text-left
                    ${activeArea?.id === area.id
                      ? 'bg-white border-[var(--brand-red)] shadow-xl shadow-[var(--brand-red)]/10 -translate-y-1'
                      : 'bg-white/50 border-black/[0.03] hover:border-black/10 hover:bg-white hover:shadow-lg'
                    }
                  `}
                >
                  <div className={`
                    w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300
                    ${activeArea?.id === area.id ? 'bg-[var(--brand-red)] text-white' : 'bg-gray-100 text-foreground/40 group-hover:bg-[var(--brand-red)]/10 group-hover:text-[var(--brand-red)]'}
                  `}>
                    {area.icon}
                  </div>
                  <div>
                    <div className={`font-bold text-base transition-colors ${activeArea?.id === area.id ? 'text-foreground' : 'text-foreground/60'}`}>
                      {area.name}
                    </div>
                    <div className="text-xs font-semibold text-foreground/40 tracking-wider">{area.state}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: hidden on mobile (< sm), visible sm+ */}
          <div className="hidden sm:block w-full lg:w-1/2 relative aspect-square">
            {areas.map((area) => (
              <motion.div
                key={area.id}
                initial={false}
                animate={{
                  opacity: activeArea?.id === area.id ? 1 : 0,
                  scale: activeArea?.id === area.id ? 1 : 1.05,
                  zIndex: activeArea?.id === area.id ? 10 : 0,
                  pointerEvents: activeArea?.id === area.id ? 'auto' : 'none'
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl group border-8 border-white bg-white"
              >
                <Image
                  src={area.image}
                  alt={`${area.name}, ${area.state}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  {...(activeArea?.id === area.id ? { priority: true } : { loading: 'lazy' })}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <motion.div
                  initial={false}
                  animate={{ y: activeArea?.id === area.id ? 0 : 20, opacity: activeArea?.id === area.id ? 1 : 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute bottom-8 left-8 right-8"
                >
                  <div className="glass p-8 rounded-3xl border border-white/20 shadow-2xl backdrop-blur-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-[var(--brand-red)]/10 text-[var(--brand-red)] text-xs font-bold tracking-widest uppercase">
                        We&apos;re Here
                      </span>
                      <div className="flex-1 h-px bg-[var(--brand-red)]/10" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      {area.name}, <span className="text-[var(--brand-red)]">{area.state}</span>
                    </h3>
                    <p className="text-lg text-foreground/80 leading-relaxed">{getDescription(area)}</p>
                    {cityPages.has(area.id) && (
                      <Link
                        href={`/areas-we-serve/${area.id}`}
                        className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full bg-[var(--brand-red)] text-white text-sm font-semibold transition-all duration-300 hover:bg-[var(--brand-red-light)] hover:-translate-y-0.5"
                      >
                        See {area.name} page
                      </Link>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
