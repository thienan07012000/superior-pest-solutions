"use client";

import EstimateButton from "@/components/EstimateButton";
import { motion } from "framer-motion";
import {
  Eye,
  Globe,
  Layers,
  Sun,
  Lightbulb,
  ZapOff,
  Search,
  CheckCircle2
} from "lucide-react";

const signs = [
  {
    id: "webs",
    title: "Webs in Corners & Hidden Spots",
    description: "If you keep finding webs in corners, the basement, attic, closets, or the garage, spiders have already moved in and they are getting comfortable.",
    icon: Globe,
    category: "Physical Evidence"
  },
  {
    id: "sightings",
    title: "Venomous Species Spotted",
    description: "If you have spotted a brown recluse or a black widow in your home, that is not something to ignore. These spiders are dangerous, and where there is one, there are usually more.",
    icon: Eye,
    category: "Direct Visual"
  },
  {
    id: "entry",
    title: "Spiders Entering Through Gaps",
    description: "If you see spiders crawling in through cracks around your windows, doors, or foundation, your home has openings they are using to get inside.",
    icon: Search,
    category: "Entry Points"
  },
  {
    id: "eggs",
    title: "Egg Sacs in Hidden Areas",
    description: "Finding small, round egg sacs tucked into dark corners or behind furniture means new spiders are on the way. One sac can hold hundreds of babies.",
    icon: Layers,
    category: "Physical Evidence"
  },
  {
    id: "lighting",
    title: "Webs Near Lights & High-Traffic Areas",
    description: "Spiders build webs near lights because that is where bugs hang out. If you are seeing webs around your porch lights or light fixtures inside, spiders are using those spots to catch food.",
    icon: Lightbulb,
    category: "Activity Zones"
  },
  {
    id: "seasonal",
    title: "Sudden Increase in Activity",
    description: "Seeing way more spiders than usual when it gets warm or humid out? That is normal. They get more active when the weather heats up because the bugs they eat do too.",
    icon: Sun,
    category: "Seasonal Trend"
  },
  {
    id: "persistence",
    title: "DIY Sprays Aren't Working",
    description: "If you've tried sprays or traps and spiders keep coming back, the problem is bigger than what you can handle on your own.",
    icon: ZapOff,
    category: "Infestation Status"
  }
];

export function SpiderSignsSection() {
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
            Signs of a <span className="text-[var(--brand-red)]">Spider Infestation</span>
          </motion.h2>

          <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-xl">
            Even seeing just a few spiders usually means there are a lot more you are not seeing. Catching it early helps you avoid bites, web buildup, and a much bigger problem later.
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
