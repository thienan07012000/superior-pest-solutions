"use client";

import { motion } from "framer-motion";
import { Sun, Moon, Bug, Home, CloudRain, TreePine } from "lucide-react";

const mosquitoTypes = [
  {
    id: "aedes",
    name: "Aedes Mosquitoes",
    description: "Daytime biters that are aggressive and persistent. They can spread Zika, dengue, and yellow fever. Common around homes with standing water.",
    icon: Sun,
    accent: "bg-orange-500/10 text-orange-600",
  },
  {
    id: "culex",
    name: "Culex Mosquitoes",
    description: "Night biters that are most active after dark. They can transmit West Nile virus and are drawn to bird baths and stagnant water sources.",
    icon: Moon,
    accent: "bg-indigo-500/10 text-indigo-600",
  },
  {
    id: "anopheles",
    name: "Malaria Mosquitoes",
    description: "Aggressive biters that are active at dawn and dusk. They breed in clean, standing water and can be found near foundations and outdoor structures.",
    icon: Bug,
    accent: "bg-red-500/10 text-red-600",
  },
  {
    id: "house",
    name: "House Mosquitoes",
    description: "Common around homes and neighborhoods. They breed in standing water from gutters, flower pots, and neglected pools, causing constant irritation.",
    icon: Home,
    accent: "bg-slate-500/10 text-slate-600",
  },
  {
    id: "floodwater",
    name: "Floodwater Mosquitoes",
    description: "Rapid breeders that explode in numbers after rainfall. They cause heavy outdoor infestations and are especially bad in low-lying yards.",
    icon: CloudRain,
    accent: "bg-blue-500/10 text-blue-600",
  },
  {
    id: "woodland",
    name: "Woodland Mosquitoes",
    description: "Found near trees, brush, and thick vegetation. They're most active during warm, humid evenings and are common in NWA's wooded neighborhoods.",
    icon: TreePine,
    accent: "bg-green-500/10 text-green-600",
  },
];

export function CommonMosquitoesSection() {
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
              Common Mosquitoes <span className="text-[var(--brand-red)]">We Target</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/60 max-w-sm leading-relaxed border-l-2 border-[var(--brand-red)]/20 pl-6"
          >
            Different mosquito species behave differently and breed in different spots. We identify what you have and target them with the right approach.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mosquitoTypes.map((mosquito, index) => (
            <motion.div
              key={mosquito.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group relative p-8 rounded-3xl bg-white border border-black/[0.04] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              {/* Card Decoration */}
              <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl ${mosquito.accent.split(' ')[0]}`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 shadow-sm ${mosquito.accent}`}>
                  <mosquito.icon size={28} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-[var(--brand-red)] transition-colors duration-300">
                  {mosquito.name}
                </h3>

                <p className="text-foreground/70 leading-relaxed font-medium">
                  {mosquito.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
