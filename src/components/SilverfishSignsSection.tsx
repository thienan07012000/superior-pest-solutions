"use client";

import EstimateButton from "@/components/EstimateButton";
import { motion } from "framer-motion";
import { 
  Eye, 
  FileWarning, 
  Layers, 
  Droplets, 
  MoonStar, 
  Search,
  CheckCircle2,
  ShirtIcon
} from "lucide-react";

const signs = [
  {
    id: "holes",
    title: "Tiny Holes in Paper or Clothing",
    description: "Finding small, irregular holes in books, documents, or stored clothing? That's silverfish feeding. They chew through paper and fabric to get to the starch.",
    icon: FileWarning,
    category: "Physical Evidence"
  },
  {
    id: "stains",
    title: "Yellow Stains on Stored Items",
    description: "Yellow spots or stains showing up on your clothes, papers, or boxes in storage? Silverfish leave these behind as they move through your stuff.",
    icon: ShirtIcon,
    category: "Physical Evidence"
  },
  {
    id: "droppings",
    title: "Pepper-Like Droppings in Corners",
    description: "Tiny black specks that look like pepper near walls, baseboards, or in cabinet corners? Those are silverfish droppings. Check dark, undisturbed spots first.",
    icon: Search,
    category: "Physical Evidence"
  },
  {
    id: "skins",
    title: "Shed Skins Along Walls",
    description: "Silverfish shed their skin as they grow. If you're finding tiny, clear casings near baseboards or behind furniture, there's a colony nearby.",
    icon: Layers,
    category: "Activity Trails"
  },
  {
    id: "moisture",
    title: "They Show Up Near Water",
    description: "Silverfish need moisture to survive. Bathrooms, kitchens, laundry rooms, and damp basements are their favorite spots. If it's humid, they're interested.",
    icon: Droplets,
    category: "Environmental"
  },
  {
    id: "nighttime",
    title: "You Only See Them at Night",
    description: "Silverfish hide during the day and come out after dark. If you spot a fast, silvery bug when you flip on the bathroom light at night, that's them.",
    icon: MoonStar,
    category: "Direct Visual"
  },
  {
    id: "sightings",
    title: "Live Bugs in Sinks or Tubs",
    description: "Silverfish sometimes get trapped in sinks and bathtubs because they can't climb smooth surfaces. If you're finding them there, more are hiding nearby.",
    icon: Eye,
    category: "Direct Visual"
  }
];

export function SilverfishSignsSection() {
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
            Signs of a <span className="text-[var(--brand-red)]">Silverfish Infestation</span>
          </motion.h2>

          <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-xl">
            Silverfish are sneaky. They hide during the day and cause damage at night. Here are the warning signs that you might have a problem.
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
              <h4 className="text-xl font-bold text-white mb-3 leading-tight">Notice any of these?</h4>
              <p className="text-base text-white/90 mb-6 font-medium leading-relaxed">The sooner you call, the less damage they do. A quick look tells you exactly what&apos;s going on.</p>
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
