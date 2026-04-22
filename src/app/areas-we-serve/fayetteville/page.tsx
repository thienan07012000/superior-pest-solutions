import Image from "next/image";
import EstimateButton from "@/components/EstimateButton";
import { Footer } from "@/components/Footer";
import { Shield, Clock, MapPin } from "lucide-react";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServiceProcess } from "@/components/ServiceProcess";
import ReviewCarousel from "@/components/ReviewCarousel";
import { CTASection } from "@/components/CTASection";
import { AreaServices } from "@/components/AreaServices";
import { FAQ } from "@/components/FAQ";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BEST Pest Control Fayetteville AR - if you're looking for Termite Treatment, Ant Control, Mosquito Control, or Spider Control near me - Superior Pest Solutions is the place to call",
  description: "Superior Pest Solutions keeps Fayetteville, AR homes pest-free - from termites and ants to mosquitoes, spiders, and everything in between. Local technicians who know Northwest Arkansas, guaranteed results, and a free quote waiting for you.",
  alternates: {
    canonical: '/areas-we-serve/fayetteville',
  },
};

export default function FayettevillePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Superior Pest Solutions",
    "image": "https://www.superiorpestsolutionsllc.com/heroimage.webp",
    "url": "https://www.superiorpestsolutionsllc.com/areas-we-serve/fayetteville",
    "telephone": "+1-479-364-4588",
    "email": "Information@superiorpestsolutionsllc.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "160 E Poplar St C",
      "addressLocality": "Fayetteville",
      "addressRegion": "AR",
      "postalCode": "72703",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "Fayetteville"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pest Control Services in Fayetteville",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ant Control"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bed Bug Control"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flea Control"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mosquito Control"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roach Control"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rodent Control"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Silverfish Control"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Spider Control"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Termite Control"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wasp Control"
          }
        }
      ]
    }
  };

  return (
    <div className="flex flex-col w-full relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 
        Hero Section 
        Premium layout: massive image on the right (desktop), floating clean modern text on the left.
      */}
      <section className="relative w-full min-h-screen flex items-center pt-32 bg-background overflow-x-clip">

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 py-12 lg:py-0 mt-10 md:mt-0">

          {/* Text Content */}
          <div className="flex flex-col items-start max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-black/5 mb-8 transform transition hover:scale-105">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-red)] animate-pulse" />
              <span className="text-sm font-semibold tracking-wide uppercase text-foreground/80">Local Pest Experts</span>
            </div>

            <h1 className="mb-6 text-foreground text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Premium pest control for <span className="text-[var(--brand-red)]">Fayetteville.</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-xl">
              Home of the Razorbacks and a vibrant community. We protect your home from pests so you can enjoy college town living without the bugs. Our experienced local technicians know exactly what Fayetteville homes need.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <EstimateButton
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[var(--brand-red)] rounded-full transition-all duration-300 hover:bg-[var(--brand-red-light)] hover:shadow-2xl hover:shadow-[var(--brand-red)]/30 hover:-translate-y-1"
              >
                Get Free Quote
              </EstimateButton>
              <a
                href="tel:479-555-0199"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-foreground bg-white border border-black/10 rounded-full transition-all duration-300 hover:bg-gray-50 hover:border-black/20 hover:-translate-y-1 gap-2"
              >
                Call Directly
              </a>
            </div>

            {/* Key Attributes */}
            <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--brand-red)]/10 flex items-center justify-center text-[var(--brand-red)] shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg md:text-xl font-bold text-foreground leading-tight">Guaranteed</span>
                  <span className="text-secondary text-foreground/70 font-medium">Results Driven</span>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-black/10"></div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--brand-red)]/10 flex items-center justify-center text-[var(--brand-red)] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg md:text-xl font-bold text-foreground leading-tight">15+ Years</span>
                  <span className="text-secondary text-foreground/70 font-medium">Local Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-[0_32px_80px_-16px_rgba(0,0,0,0.18)] group lg:translate-x-8 mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-0" />
            <Image
              src="/fayetteville.webp"
              alt="Fayetteville Arkansas Pest Control"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: 'center center' }}
              priority
              quality={100}
            />

            {/* Floating Glass UI Card on Image */}
            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-auto z-20">
              <div className="glass px-6 py-5 rounded-2xl md:w-80 border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.15)] relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 delay-100 bg-white/70 backdrop-blur-md">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--brand-red)]/10 rounded-bl-full" />
                <div className="flex items-center gap-4 mb-1 relative z-10">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[var(--brand-red)] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-foreground font-normal leading-tight m-0 opacity-90 text-sm uppercase tracking-wider">Serving</span>
                    <p className="text-secondary text-foreground font-bold text-lg m-0">Fayetteville, AR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <AreaServices />

      <WhyChooseUs />

      <ServiceProcess />

      <ReviewCarousel />

      <FAQ
        faqs={[
          {
            question: "What kind of bugs are worst in Fayetteville?",
            answer: "Since we are so close to the mountains and have plenty of trees, we see a lot of ants, spiders, and roaches. Termites are also a big deal here because of the humidity. We know exactly what lives around here and how to safely get rid of them."
          },
          {
            question: "Do you serve areas outside Fayetteville?",
            answer: "Yes. While we spend a lot of time helping folks right here in Fayetteville, we also take care of homes all around Northwest Arkansas. Just give us a call and we will let you know if you are in our normal route."
          },
          {
            question: "How long does a pest treatment take?",
            answer: "Most of the time we are in and out in about 30 to 45 minutes for a normal home visit. We do not rush, but we also respect your time. You can usually hang out in the house while we work."
          },
          {
            question: "Is your spray safe for my dogs?",
            answer: "Absolutely. We know pets are part of the family. The stuff we use is completely safe for dogs, cats, and kids once it dries. We will even walk you around and show you what we used if you want to see it."
          },
          {
            question: "What if the bugs come back after you spray?",
            answer: "If you see bugs again, just pick up the phone and tell us. We will come right back and take care of the problem for free. We want to be the guys you can trust, so we stand by our work."
          }
        ]}
        title={<>Answers to your Fayetteville <span className="text-[var(--brand-red)]">pest questions</span></>}
        description="We've been protecting homes in Northwest Arkansas for a long time. Here are a few things our neighbors ask us the most."
      />
      <CTASection
        title={<>Ready to declare your home <span className="text-[var(--brand-red)]">pest-free?</span></>}
        description="Fayetteville residents trust Superior Pest Solutions. Call us today for a free quote and discover the difference local expertise makes."
      />

      <Footer />
    </div>
  );
}
