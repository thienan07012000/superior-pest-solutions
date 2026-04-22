"use client";

import EstimateButton from "@/components/EstimateButton";
import { motion } from "framer-motion";
import { 
  Eye, 
  Wind, 
  Layers, 
  Droplets, 
  Snowflake, 
  ZapOff,
  Search,
  CheckCircle2
} from "lucide-react";

const signs = [
  {
    id: "droppings",
    title: "Little Black Specks",
    description: "Tiny black dots in your drawers, cabinets, or behind the fridge? That's roach droppings. They look just like pepper or coffee grounds.",
    icon: Search,
    category: "Physical Evidence"
  },
  {
    id: "sightings",
    title: "They Run When the Lights Come On",
    description: "Turn on your kitchen or bathroom light late at night and see them scatter? Roaches hide during the day and come out after dark.",
    icon: Eye,
    category: "Direct Visual"
  },
  {
    id: "smell",
    title: "A Weird Smell You Can't Place",
    description: "A stale, oily smell in your cabinets or under appliances is a sign. Roaches leave behind a scent the whole colony follows.",
    icon: Wind,
    category: "Environmental"
  },
  {
    id: "eggs",
    title: "Small Brown Capsules",
    description: "Roaches lay their eggs in little pill-shaped cases. You'll find them tucked into dark corners, behind boxes, or along the walls.",
    icon: Layers,
    category: "Physical Evidence"
  },
  {
    id: "smears",
    title: "Dark Smudges Along the Walls",
    description: "Roaches leave dark streaks near pipes, baseboards, and water sources as they move around. Look low along the walls.",
    icon: Droplets,
    category: "Activity Trails"
  },
  {
    id: "seasonal",
    title: "More Roaches as It Gets Colder",
    description: "Noticing more activity in fall or winter? Roaches move inside to stay warm when temperatures drop outside.",
    icon: Snowflake,
    category: "Seasonal Trend"
  },
  {
    id: "persistence",
    title: "Store Sprays Stopped Working",
    description: "If you've tried sprays or traps and keep seeing roaches come back, the colony is bigger than what you can treat yourself.",
    icon: ZapOff,
    category: "Infestation Status"
  }
];

export function RoachSignsSection() {
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
            <span className="text-[10px] font-bold tracking-widest uppercase text-foreground/60">Diagnostic Checklist</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4"
          >
            How to Tell if <span className="text-[var(--brand-red)]">You Have Roaches</span>
          </motion.h2>

          <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-xl">
            Most people don't realize they have roaches until the problem is already big. Here are the signs to watch for.
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
