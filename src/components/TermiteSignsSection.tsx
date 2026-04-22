"use client";

import EstimateButton from "@/components/EstimateButton";
import { motion } from "framer-motion";
import { 
  Scan, 
  Ear, 
  MapPin, 
  Wind, 
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

const signs = [
  {
    id: "mud-tubes",
    title: "Mud Tubes on the Foundation",
    description: "Termites build little dirt tunnels along your foundation or in your crawl space to get from the soil into your home. If you see a pencil-thin dirt trail running up your wall, that's a big red flag.",
    icon: MapPin,
    category: "Physical Evidence"
  },
  {
    id: "hollow-wood",
    title: "Hollow-Sounding Wood",
    description: "Knock on your wood trim or door frames. If it sounds hollow or papery instead of solid, termites may have already eaten through the inside.",
    icon: Ear,
    category: "Internal Damage"
  },
  {
    id: "frass",
    title: "Small Piles of Frass",
    description: "If you see tiny piles of what looks like sawdust or coffee grounds near wood, that's termite droppings. It means they're actively eating somewhere close by.",
    icon: Scan,
    category: "Physical Evidence"
  },
  {
    id: "discarded-wings",
    title: "Discarded Wings",
    description: "After termites swarm to start a new colony, they drop their wings. Finding little piles of identical wings near windows or light fixtures usually means a new colony just moved in.",
    icon: Wind,
    category: "Swarming Activity"
  },
  {
    id: "stuck-doors",
    title: "Stuck Doors or Windows",
    description: "When termites chew through door or window frames, the wood weakens and warps. If doors that used to work fine are suddenly hard to open, it's worth getting an inspection.",
    icon: AlertTriangle,
    category: "Structural Warning"
  }
];

export function TermiteSignsSection() {
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
            How Do I Know If I Have <span className="text-[var(--brand-red)]">Termites?</span>
          </motion.h2>

          <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-xl">
            Termites hide really well, but they do leave clues. If you notice any of these things in your home, give us a call.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {signs.map((sign, index) => (
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
            transition={{ delay: 0.3 }}
            className="group relative p-8 rounded-[1.5rem] bg-[var(--brand-red)] overflow-hidden flex flex-col justify-center text-left min-h-[220px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/10" />
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-white mb-3 leading-tight">If you're asking, it's time to call.</h4>
              <p className="text-base text-white/90 mb-6 font-medium leading-relaxed">The longer you wait, the more damage they do. A quick inspection will tell you exactly what's going on.</p>
              <EstimateButton
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[var(--brand-red)] text-base font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg w-full sm:w-auto"
              >
                Schedule Inspection
              </EstimateButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
