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
  title: "BEST Pest Control Bentonville AR - if you're looking for Termite Treatment, Bed Bug Control, Mosquito Control, or Rodent Removal near me - Superior Pest Solutions is the place to call",
  description: "Superior Pest Solutions provides expert pest control throughout Bentonville, AR - tackling ants, termites, roaches, spiders, rodents, and more. Local technicians, guaranteed results, and a free quote waiting for you.",
  alternates: {
    canonical: '/areas-we-serve/bentonville',
  },
};

export default function BentonvillePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Superior Pest Solutions",
    "image": "https://www.superiorpestsolutionsllc.com/heroimage.webp",
    "url": "https://www.superiorpestsolutionsllc.com/areas-we-serve/bentonville",
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
      "name": "Bentonville"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pest Control Services in Bentonville",
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
              <span className="text-sm font-semibold tracking-wide uppercase text-foreground/80">Serving Bentonville, AR</span>
            </div>

            <h1 className="mb-6 text-foreground text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Premium pest control for <span className="text-[var(--brand-red)]">Bentonville.</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-xl">
              Bentonville is a wonderful place to live, but the bugs and rodents that come with it? Not so much. We show up fast, take care of the problem, and make sure it stays gone. Our guys live and work right here in town. They know which pests pop up in these neighborhoods, when they show up, and exactly how to deal with them.
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
                  <span className="text-secondary text-foreground/70 font-medium">We back every job with a guarantee</span>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-black/10"></div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--brand-red)]/10 flex items-center justify-center text-[var(--brand-red)] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg md:text-xl font-bold text-foreground leading-tight">15+ Years</span>
                  <span className="text-secondary text-foreground/70 font-medium">Proudly serving NW Arkansas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-[0_32px_80px_-16px_rgba(0,0,0,0.18)] group lg:translate-x-8 mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-0" />
            <Image
              src="/bentonville.webp"
              alt="Bentonville Arkansas Pest Control"
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
                    <p className="text-secondary text-foreground font-bold text-lg m-0">Bentonville, AR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <AreaServices city="Bentonville" />

      <WhyChooseUs
        subtitleText="You call, we show up, we fix it. No sales pitch, no confusing pricing. Just two guys who want your home bug-free and your family comfortable."
        checklistItems={[
          "Licensed and insured experts",
          "Safe for kids and pets",
          "If the bugs come back, we do too",
          "Fair and honest pricing",
        ]}
        reasonDescriptions={[
          "Dalton and Brandon are cousins. They grew up in Oklahoma watching their families look out for the people next door. That stuck with them.",
          "Brandon did his time in the military. Dalton's run small businesses his whole career. Both of them know how to show up when it counts.",
          "We use stuff that actually gets rid of bugs. Your kids can play on the floor. Your dog can run around. You don't have to worry about it.",
          "Bentonville has been good to us, so we try to give back. We run a Good Neighbor Giveaway and a free lunch program. We're always looking for ways to pitch in.",
        ]}
        rootsText="We grew up being told that how you treat people says everything about you. We haven't forgotten that. Every house we go into, we treat it like it's our own."
      />

      <ServiceProcess
        subtitleText="We've been at this a long time here in Bentonville. Here's what it looks like when you give us a call."
        stepDescriptions={[
          "Just call or text us. Tell us what you're dealing with. We'll give you a price right there, no appointment needed. What you hear is what you pay.",
          "We come out when it works for your schedule. We look around, find where bugs are getting in, and take care of it. Everything we use is safe for kids and animals.",
          "If you see bugs after we've been there, pick up the phone. We'll be back out at no extra cost. We don't consider the job finished until you do.",
          "A lot of people in Bentonville have us come by every month. New bugs never get a chance to settle in, and you never have to deal with it again.",
        ]}
        bannerText="No long contracts, no confusing paperwork. Just call us, we come out, we do the work right, and we make sure you're good."
      />

      <ReviewCarousel />

      <FAQ
        faqs={[
          {
            question: "What kinds of bugs and pests are common in Bentonville?",
            answer: "Ants and spiders are the ones we get called about most. With all the trees and green space near the Razorback Greenway and the wooded areas around Crystal Bridges, bugs find their way inside pretty easily. We also see a lot of termites, especially after rainy seasons when the ground stays wet. And once it starts getting cold, mice start looking for a warm place to hide. We see this stuff every single week in these neighborhoods, so we know exactly what to look for."
          },
          {
            question: "Do you come out to the newer neighborhoods too?",
            answer: "Yes, all of them. Whether you're in Cobblestone, Pinnacle Hills, or one of the new builds near Tiger Boulevard, we come to you. Bentonville has grown a lot over the years and we've kept up with it. We work in older homes and brand new ones, so wherever you are, we can help."
          },
          {
            question: "How long does a treatment take?",
            answer: "Usually somewhere between 30 and 45 minutes, depending on how big your home is. We don't rush, but we're not going to take up your whole afternoon either. You can stay home while we work, and when we're done we'll walk you through what we did."
          },
          {
            question: "Is it safe for my kids and pets?",
            answer: "Yes. Most of the folks we work with in Bentonville have kids and dogs at home, so we hear this one all the time. Everything we use is safe once it dries, and that doesn't take long. If you want to know exactly what we used, just ask. We're happy to go through it with you."
          },
          {
            question: "What if I still see bugs after the treatment?",
            answer: "Just call us and we'll come back out. No charge, no hassle. We're not going to do one visit and disappear. We live here too, and we want to make sure the job is actually done right. If something isn't working, we fix it."
          }
        ]}
        title={<>Got questions about pest control in <span className="text-[var(--brand-red)]">Bentonville?</span></>}
        description="We get a lot of the same questions from folks around here. Here are the ones people ask us most."
      />
      <CTASection
        title={<>Ready for a home without <span className="text-[var(--brand-red)]">bugs?</span></>}
        description="Bentonville homeowners call us when they want the problem gone and gone for good. Get your free quote today and we'll tell you exactly how we can help."
      />

      <Footer />
    </div>
  );
}
