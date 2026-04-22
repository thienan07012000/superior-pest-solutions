"use client";

import EstimateButton from "@/components/EstimateButton";
import { motion } from "framer-motion";
import {
  Eye,
  Wind,
  Layers,
  Droplets,
  Sun,
  ZapOff,
  Search,
  CheckCircle2
} from "lucide-react";

const signs = [
  {
    id: "nests",
    title: "Visible Nests on Your Property",
    description: "Wasp nests can show up under eaves, in gutters, behind shutters, or tucked into corners of your porch. Some species build underground. If you spot a papery gray structure, that is a wasp nest.",
    icon: Search,
    category: "Direct Visual"
  },
  {
    id: "activity",
    title: "Wasps Flying In and Out of One Spot",
    description: "If you notice wasps repeatedly entering and leaving the same area on your home or in your yard, there is a nest nearby. They are following a flight path back to the colony.",
    icon: Eye,
    category: "Behavioral"
  },
  {
    id: "chewing",
    title: "Chewed Wood or Paper Material",
    description: "Wasps chew wood fibers to build their nests. If you see tiny scrape marks on fences, decks, or wooden trim, wasps are gathering building material from your property.",
    icon: Layers,
    category: "Physical Evidence"
  },
  {
    id: "aggression",
    title: "Increased Buzzing and Aggression",
    description: "If wasps seem more aggressive than usual or you hear loud buzzing near a wall or ceiling, the colony is growing and they are defending their territory.",
    icon: ZapOff,
    category: "Warning Behavior"
  },
  {
    id: "food",
    title: "Wasps Around Food and Drinks",
    description: "Wasps are attracted to sugary drinks, fruit, and meat. If they keep showing up at your outdoor meals or around trash cans, a nest is not far away.",
    icon: Wind,
    category: "Attraction Signs"
  },
  {
    id: "indoor",
    title: "Wasps Getting Inside Your Home",
    description: "Finding wasps inside your house means they are getting in through gaps in windows, vents, or cracks in your siding. There may be a nest built right against your home.",
    icon: Droplets,
    category: "Indoor Signs"
  },
  {
    id: "seasonal",
    title: "Surge in Spring and Summer",
    description: "Wasp activity spikes in the warmer months when queens start new colonies. By late summer, nests are at their largest and most aggressive. Early action prevents a bigger problem later.",
    icon: Sun,
    category: "Seasonal Trend"
  }
];

export function WaspSignsSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden text-foreground">
      {/* Subtle Background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--brand-red)]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/5 mb-4"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--brand-red)]" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-foreground/60">Warning Signs</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4"
          >
            Signs of a <span className="text-[var(--brand-red)]">Wasp Infestation</span>
          </motion.h2>

          <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-xl">
            Catching a wasp problem early saves you from a much bigger and more dangerous situation down the road. Here is what to watch for.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {signs.slice(0, 7).map((sign, index) => (
            <motion.div
              key={sign.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group relative p-6 rounded-[1.5rem] border border-black/[0.05] bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-300 flex flex-col items-start"
            >
              <div className="flex flex-row items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-white border border-black/[0.03] flex items-center justify-center text-[var(--brand-red)] group-hover:scale-110 group-hover:bg-[var(--brand-red)] group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                  <sign.icon size={24} strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-[var(--brand-red)] transition-colors">
                  {sign.title}
                </h3>
              </div>

              <p className="text-base text-foreground/70 leading-relaxed font-medium">
                {sign.description}
              </p>
            </motion.div>
          ))}

          {/* Compact CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group relative p-8 rounded-[1.5rem] bg-[var(--brand-red)] overflow-hidden flex flex-col justify-center text-left"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/10" />
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-white mb-3 leading-tight">Recognize any of these?</h4>
              <p className="text-base text-white/90 mb-6 font-medium leading-relaxed">The sooner you call, the easier it is to fix. A quick inspection tells you exactly what you&apos;re dealing with.</p>
              <EstimateButton
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[var(--brand-red)] text-base font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg w-full sm:w-auto"
              >
                Get Expert Help
              </EstimateButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
