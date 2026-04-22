"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ShieldCheck, Bug, CalendarCheck } from 'lucide-react';
import EstimateButton from "@/components/EstimateButton";

const defaultSteps = [
  {
    title: "Get a Quote",
    description: "Call or text us and tell us what’s going on. We’ll give you a price on the spot. No hidden fees, no guessing.",
    icon: <PhoneCall className="w-6 h-6" />,
  },
  {
    title: "We Come to You",
    description: "One of our local techs stops by when it works for you. We find where the bugs are coming from and get rid of them with products that are safe for your family and pets.",
    icon: <Bug className="w-6 h-6" />,
  },
  {
    title: "We Back Our Work",
    description: "See a bug after we leave? Call us. We come back and take care of it at no charge. We want you happy, not just done.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Stay Bug-Free",
    description: "A lot of our customers have us stop by once a month. It keeps new bugs from moving in, and you never have to think about it again.",
    icon: <CalendarCheck className="w-6 h-6" />,
  }
];

const stepIcons = [
  <PhoneCall className="w-6 h-6" />,
  <Bug className="w-6 h-6" />,
  <ShieldCheck className="w-6 h-6" />,
  <CalendarCheck className="w-6 h-6" />,
];

interface ServiceProcessProps {
  subtitleText?: string;
  stepDescriptions?: string[];
  bannerText?: string;
}

export const ServiceProcess = ({
  subtitleText = "After 15 years doing this, we’ve gotten really good at it. Here’s exactly what happens when you call us.",
  stepDescriptions,
  bannerText = "No confusing contracts, no fine print. We show up, we do good work, and we make sure you’re happy. That’s the whole deal.",
}: ServiceProcessProps) => {
  const steps = stepDescriptions
    ? defaultSteps.map((s, i) => ({ ...s, description: stepDescriptions[i] ?? s.description, icon: stepIcons[i] }))
    : defaultSteps;
  return (
    <section className="pt-16 pb-24 md:pb-32 md:pt-32 bg-background relative overflow-hidden">
      {/* Subtle Background Pattern - Matches other sections */}
      <div
        className="absolute inset-0 opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage: "url('/bug-pattern.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '400px'
        }}
      />

      {/* Sophisticated Fades */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-0" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-black/5 mb-6 transform transition hover:scale-105">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-red)] animate-pulse" />
              <span className="text-sm font-bold tracking-wider uppercase text-foreground/80">How It Works</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-8 tracking-tight leading-[1.05]">
              Getting rid of pests <br />
              <span className="text-[var(--brand-red)]">is pretty simple.</span>
            </h2>

            <p className="text-lg md:text-xl text-foreground/60 font-medium leading-relaxed max-w-2xl">
              {subtitleText}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group lg:h-full"
            >
              <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 border border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] transition-all duration-700 group-hover:shadow-[0_48px_96px_-16px_rgba(0,0,0,0.08)] group-hover:-translate-y-3 group-hover:border-[var(--brand-red)]/10 h-full flex flex-col items-start overflow-hidden">
                
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--brand-red)]/5 to-transparent transition-opacity duration-700 opacity-0 group-hover:opacity-100" />

                {/* Number Indicator - Very Subtle/Expensive look */}
                <div className="text-[4.5rem] font-black pointer-events-none absolute -bottom-4 right-4 text-black/[0.03] transition-colors duration-700 group-hover:text-[var(--brand-red)]/[0.04]">
                  0{index + 1}
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-black/5 flex items-center justify-center text-foreground transition-all duration-500 group-hover:bg-[var(--brand-red)] group-hover:text-white group-hover:rotate-[10deg] shadow-sm">
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-bold text-foreground tracking-tight leading-tight">
                    {step.title}
                  </h3>
                </div>

                <p className="text-foreground/60 leading-relaxed font-medium mb-6 text-base">
                  {step.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

        {/* The Platinum Feature: "The Peace of Mind" Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-[3.5rem] relative"
        >
          <div className="bg-black py-16 px-10 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 border border-white/5 shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[var(--brand-red)]/20 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 shadow-sm border border-white/10 mb-6 transform transition hover:scale-105">
                <ShieldCheck className="w-4 h-4 text-[var(--brand-red)]" />
                <span className="text-sm font-bold tracking-wider uppercase text-white/90">Our Promise</span>
              </div>
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Good work <br />
                <span className="text-[var(--brand-red)]">speaks for itself.</span>
              </h4>
              <p className="text-white/60 font-medium text-lg leading-relaxed">
                {bannerText}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
              <EstimateButton
                className="w-full sm:w-auto px-12 py-6 bg-[var(--brand-red)] text-white rounded-full font-semibold text-lg shadow-2xl shadow-[var(--brand-red)]/40 hover:bg-[var(--brand-red-light)] hover:-translate-y-2 transition-all duration-500 text-center"
              >
                Get Your Quote
              </EstimateButton>
              <div className="flex flex-col items-center sm:items-start">
                <a href="tel:+14793644588" className="text-white font-bold text-lg leading-none mb-1 hover:text-[var(--brand-red)] transition-colors cursor-pointer">+1 479-364-4588</a>
                <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Available Now</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
