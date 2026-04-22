"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, Waves, CloudSnow, Droplets, Monitor, Lamp } from "lucide-react";

const roachTypes = [
  {
    id: "german",
    name: "German Roach",
    description: "The most common one we see in kitchens. They breed fast and are really hard to get rid of on your own. If you see one, there are almost always more hiding nearby.",
    icon: UtensilsCrossed,
    accent: "bg-orange-500/10 text-orange-600",
  },
  {
    id: "american",
    name: "American Roach",
    description: "These are the big ones people call palmetto bugs. They like bathrooms, drains, and basements, and they carry bacteria wherever they walk.",
    icon: Waves,
    accent: "bg-red-500/10 text-red-600",
  },
  {
    id: "smoky",
    name: "Smoky Brown Roach",
    description: "Usually lives outside but comes in through attics and rooflines when it gets cold. A lot of homeowners don't even know this one exists.",
    icon: CloudSnow,
    accent: "bg-slate-500/10 text-slate-600",
  },
  {
    id: "oriental",
    name: "Oriental Roach",
    description: "People call these water bugs because they love damp places like crawlspaces, drains, and basements. They're slow but hard to track down.",
    icon: Droplets,
    accent: "bg-blue-500/10 text-blue-600",
  },
  {
    id: "brown",
    name: "Brown-Banded Roach",
    description: "These prefer warm, dry spots like inside furniture, cabinets, and even electronics. They're one of the harder ones to find because they spread out instead of clustering.",
    icon: Monitor,
    accent: "bg-amber-500/10 text-amber-600",
  },
  {
    id: "asian",
    name: "Asian Cockroach",
    description: "Looks almost identical to a German roach but comes in from outside and is drawn to light. They're fast and can be tricky to pin down.",
    icon: Lamp,
    accent: "bg-yellow-500/10 text-yellow-600",
  },
];

export function CommonRoachesSection() {
  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--brand-red)]/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-black/5 rounded-full blur-[100px] translate-y-1/2" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border border-black/[0.03] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-red)]" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-foreground/50">Species Guide</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
            >
              Common Roaches <span className="text-[var(--brand-red)]">We Treat</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/60 max-w-sm leading-relaxed border-l-2 border-[var(--brand-red)]/20 pl-6"
          >
            Different roaches hide in different spots and need different treatments. We figure out exactly which one you have and go after it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roachTypes.map((roach, index) => (
            <motion.div
              key={roach.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group relative p-8 rounded-3xl bg-white border border-black/[0.04] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              {/* Card Decoration */}
              <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl ${roach.accent.split(' ')[0]}`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 shadow-sm ${roach.accent}`}>
                  <roach.icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-[var(--brand-red)] transition-colors duration-300">
                  {roach.name}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed font-medium">
                  {roach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
