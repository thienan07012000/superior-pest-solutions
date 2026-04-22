"use client";

import EstimateButton from "@/components/EstimateButton";
import { motion } from "framer-motion";
import { 
  Eye, 
  Wind, 
  Layers, 
  Droplets, 
  Search,
  CheckCircle2,
  CircleDot,
  BedDouble
} from "lucide-react";

const signs = [
  {
    id: "bites",
    title: "Bite Marks on Your Skin",
    description: "Waking up with itchy red marks, especially in lines or clusters? That's a classic sign of bed bugs. They feed at night and leave behind bites you'll notice in the morning.",
    icon: Search,
    category: "Physical Evidence"
  },
  {
    id: "stains",
    title: "Dark Stains on Your Sheets",
    description: "Rusty or dark spots on your mattress, sheets, or pillowcases come from bed bug droppings or crushed bugs. If you see them, it's time to call for help.",
    icon: Droplets,
    category: "Physical Evidence"
  },
  {
    id: "shells",
    title: "Shed Skins in the Seams",
    description: "Bed bugs shed their outer shell as they grow. You'll find these tiny, translucent skins tucked into mattress seams, crevices, and behind headboards.",
    icon: Layers,
    category: "Physical Evidence"
  },
  {
    id: "smell",
    title: "A Musty, Sweet Odor",
    description: "A large infestation gives off a noticeable musty, sweet smell. If your bedroom or furniture smells off and you can't figure out why, bed bugs could be the cause.",
    icon: Wind,
    category: "Environmental"
  },
  {
    id: "sightings",
    title: "Seeing Live Bugs",
    description: "Bed bugs are small, flat, and reddish-brown. Check your bedding, furniture seams, and along baseboards. If you spot one, there are almost always more hiding nearby.",
    icon: Eye,
    category: "Direct Visual"
  },
  {
    id: "hiding",
    title: "Bugs in Furniture and Crevices",
    description: "Bed bugs don't just stay in beds. They hide in couch cushions, dresser drawers, electrical outlets, and even behind picture frames on the wall.",
    icon: BedDouble,
    category: "Common Spots"
  },
  {
    id: "clusters",
    title: "Bites in Lines or Groups",
    description: "Unlike mosquito bites, bed bug bites often appear in a straight line or tight cluster. If your bites follow this pattern, bed bugs are likely the reason.",
    icon: CircleDot,
    category: "Bite Pattern"
  }
];

export function BedBugSignsSection() {
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
            Signs of a <span className="text-[var(--brand-red)]">Bed Bug Infestation</span>
          </motion.h2>

          <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-xl">
            Bed bugs leave visible clues behind. Spotting these early helps prevent a full-blown infestation and protects your home.
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
