"use client";

import { motion } from "framer-motion";
import { Search, PawPrint, Home, Leaf, Zap, CalendarCheck } from "lucide-react";

const fleaTargets = [
  {
    id: "identification",
    name: "Flea Identification",
    description: "We help you spot fleas on pets, carpets, and furniture before infestations grow. Finding them early is the fastest way to get things under control.",
    icon: Search,
    accent: "bg-orange-500/10 text-orange-600",
  },
  {
    id: "pet-protection",
    name: "Pet Protection",
    description: "We keep your dogs and cats safe with treatments that get rid of fleas from their fur and bedding without hurting your pets.",
    icon: PawPrint,
    accent: "bg-red-500/10 text-red-600",
  },
  {
    id: "home-treatment",
    name: "Home Treatment",
    description: "We go after carpets, furniture, and all the hidden spots where fleas like to hide to stop the problem right where it starts.",
    icon: Home,
    accent: "bg-blue-500/10 text-blue-600",
  },
  {
    id: "eco-friendly",
    name: "Eco-Friendly Solutions",
    description: "Strong flea control that's safe for your family, your pets, and the world around you. No harsh chemicals needed.",
    icon: Leaf,
    accent: "bg-green-500/10 text-green-600",
  },
  {
    id: "fast-results",
    name: "Fast & Effective Results",
    description: "Our licensed technicians act quickly to clear out fleas and stop them from coming back. You'll notice a difference fast.",
    icon: Zap,
    accent: "bg-amber-500/10 text-amber-600",
  },
  {
    id: "prevention",
    name: "Ongoing Prevention",
    description: "Follow-up visits and treatments make sure your home and pets stay flea-free all year round. No surprises.",
    icon: CalendarCheck,
    accent: "bg-purple-500/10 text-purple-600",
  },
];

export function FleaTargetsSection() {
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
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-foreground/50">How We Help</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
            >
              Flea Control <span className="text-[var(--brand-red)]">We Provide</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/60 max-w-sm leading-relaxed border-l-2 border-[var(--brand-red)]/20 pl-6"
          >
            From spotting the first flea to keeping them gone for good, we cover every step so you and your pets can relax.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleaTargets.map((target, index) => (
            <motion.div
              key={target.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group relative p-8 rounded-3xl bg-white border border-black/[0.04] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              {/* Card Decoration */}
              <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl ${target.accent.split(' ')[0]}`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 shadow-sm ${target.accent}`}>
                  <target.icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-[var(--brand-red)] transition-colors duration-300">
                  {target.name}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed font-medium">
                  {target.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
