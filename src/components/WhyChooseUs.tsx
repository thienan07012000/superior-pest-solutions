"use client";
import React from 'react';
import Image from 'next/image';
import { Shield, Users, Heart, Award, CheckCircle2, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import EstimateButton from '@/components/EstimateButton';

const defaultReasons = [
  {
    name: "Family Owned",
    description: "Dalton and Brandon are cousins who grew up in Oklahoma. They learned early on that taking care of your neighbors is just the right thing to do.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    name: "Veteran Owned",
    description: "Brandon served in the military and Dalton has spent years running local businesses. They both know what it means to show up on time and work hard.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    name: "Real Results",
    description: "We focus on keeping your family safe and your home bug-free. We use products that actually work so you can finally relax.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    name: "Giving Back",
    description: "We love our community. Whether it's our Good Neighbor Giveaway or our free lunch program, we're always looking for ways to help out.",
    icon: <Heart className="w-6 h-6" />,
  }
];

const icons = [
  <Users className="w-6 h-6" />,
  <Award className="w-6 h-6" />,
  <Shield className="w-6 h-6" />,
  <Heart className="w-6 h-6" />,
];

interface WhyChooseUsProps {
  subtitleText?: string;
  reasonDescriptions?: string[];
  checklistItems?: string[];
  rootsText?: string;
}

export const WhyChooseUs = ({
  subtitleText = "We keep things simple. No pushy sales or confusing talk. Just honest experts who care about your home and your budget.",
  reasonDescriptions,
  checklistItems = [
    "Licensed and insured experts",
    "Safe for kids and pets",
    "If the bugs come back, we do too",
    "Fair and honest pricing"
  ],
  rootsText = "Our grandparents taught us that hard work matters, but caring for people matters more. We still live by those values every single day.",
}: WhyChooseUsProps) => {
  const reasons = reasonDescriptions
    ? defaultReasons.map((r, i) => ({ ...r, description: reasonDescriptions[i] ?? r.description, icon: icons[i] }))
    : defaultReasons;
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Repeating Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: "url('/bug-pattern.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '400px'
        }}
      />

      {/* Top Fade Gradient */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none z-0" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Side: Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-black/5 transform transition hover:scale-105">
              <Star className="w-4 h-4 text-[var(--brand-red)] fill-[var(--brand-red)]" />
              <span className="text-sm font-bold tracking-wider uppercase text-foreground/80">Local and Trusted</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
              Why our neighbors <span className="text-[var(--brand-red)]">trust us.</span>
            </h2>

            <p className="text-xl text-foreground/70 leading-relaxed font-medium">
              {subtitleText}
            </p>

            <div className="space-y-4 pt-4">
              {checklistItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-[var(--brand-red)]/10 p-1 rounded-full text-[var(--brand-red)] shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-bold text-foreground/90">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <EstimateButton className="px-8 py-4 bg-[var(--brand-red)] text-white rounded-full font-bold text-lg shadow-xl shadow-[var(--brand-red)]/20 hover:bg-[var(--brand-red-light)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                Protect What Matters Most
              </EstimateButton>
            </div>
          </motion.div>

          {/* Right Side: Visual Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 lg:pt-0">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-[2.5rem] border border-black/5 hover:border-[var(--brand-red)]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--brand-red)]/5 overflow-hidden"
              >
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-red)]/5 to-transparent transition-all duration-500 opacity-0 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6 group-hover:translate-x-1 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-red)]/10 flex items-center justify-center text-[var(--brand-red)] group-hover:bg-[var(--brand-red)] group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                      {reason.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground transition-colors leading-tight">
                      {reason.name}
                    </h3>
                  </div>

                  <p className="text-foreground/70 leading-relaxed font-medium">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Unique Interactive Feature: "The Roots" Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="md:col-span-2 relative bg-[#1c1917] rounded-[3rem] p-10 overflow-hidden group border border-white/5 shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--brand-red)]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[var(--brand-red)]/30 transition-all duration-700" />

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-white/10 overflow-hidden relative shrink-0 shadow-2xl transition-transform duration-700 group-hover:scale-105">
                  <Image
                    src="/our-story.webp"
                    alt="Dalton and Brandon"
                    fill
                    sizes="176px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-red)]/20 to-transparent pointer-events-none" />
                </div>

                <div className="flex-grow">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-white/10 mb-6 transform transition hover:scale-105">
                    <Heart className="w-4 h-4 text-[var(--brand-red)] fill-[var(--brand-red)]" />
                    <span className="text-sm font-bold tracking-wider uppercase text-foreground/80">Our Roots</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                    Raised to <span className="text-[var(--brand-red)] italic">help others.</span>
                  </h3>
                  <p className="text-white/70 text-lg md:text-xl leading-relaxed font-medium max-w-xl">
                    {rootsText}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
