"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Zap, ShieldCheck, Home, CalendarCheck } from 'lucide-react';

const benefits = [
  {
    title: "We Know NWA",
    description: "We have been here a long time. We know which ants show up around here and exactly how to get rid of them.",
    icon: <MapPin className="w-6 h-6" />,
    number: "01",
  },
  {
    title: "Works Fast",
    description: "You will notice a difference quickly. We go after the colony, not just the ants on your counter. No more endless trails.",
    icon: <Zap className="w-6 h-6" />,
    number: "02",
  },
  {
    title: "Safe for Kids & Pets",
    description: "We get rid of ants without putting your family or pets at risk. The products we use are gentle and safe for everyone.",
    icon: <ShieldCheck className="w-6 h-6" />,
    number: "03",
  },
  {
    title: "We Go After the Whole Colony",
    description: "There could be thousands of ants hiding in your walls and floors that you do not even know about. We go after the queen and the whole colony, not just the ones walking around.",
    icon: <Home className="w-6 h-6" />,
    number: "04",
  },
  {
    title: "No Contracts",
    description: "No long-term commitments. You call when you need us, and that is it. We can set up a plan to keep them away, but it is always up to you.",
    icon: <CalendarCheck className="w-6 h-6" />,
    number: "05",
  }
];

export const WhyChooseAntControl = () => {
  return (
    <section className="py-12 md:py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: "url('/bug-pattern.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '400px'
        }}
      />

      {/* Faded Gradient Blurs */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none z-0" />

      {/* Premium Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[var(--brand-red)]/3 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-black/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[var(--brand-red)]/5 text-[var(--brand-red)] mb-4 font-bold uppercase tracking-widest text-xs border border-[var(--brand-red)]/10 shadow-sm">
            Why Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
            People Pick Us Because <br className="hidden md:block" />
            <span className="text-[var(--brand-red)] inline-block mt-2">We Get Rid of the Whole Colony</span>
          </h2>
        </motion.div>

        {/* List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5">
          {benefits.map((benefit, idx) => {
             const colSpan = idx < 2 ? "lg:col-span-3" : "lg:col-span-2";
             return (
               <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group relative flex flex-col items-start bg-white border border-black/5 rounded-3xl p-6 md:p-8 hover:border-[var(--brand-red)]/20 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 overflow-hidden md:col-span-1 ${colSpan}`}
               >
                  {/* Hover Accent Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--brand-red)] to-[var(--brand-red-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Number (absolute, decorative) */}
                  <div className="absolute top-4 right-5 text-5xl md:text-6xl font-black text-black/[0.03] group-hover:text-[var(--brand-red)]/[0.05] transition-colors duration-500 pointer-events-none select-none">
                    {benefit.number}
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-black/[0.03] group-hover:bg-[var(--brand-red)] flex items-center justify-center text-foreground/50 group-hover:text-white transition-all duration-500 shadow-sm shrink-0">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-[var(--brand-red)] transition-colors duration-500">
                      {benefit.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-base text-foreground/70 font-medium leading-relaxed">
                    {benefit.description}
                  </p>
               </motion.div>
             );
          })}
        </div>

      </div>
    </section>
  );
};
