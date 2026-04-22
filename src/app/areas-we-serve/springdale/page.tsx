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
  title: "BEST Pest Control Springdale AR - if you're looking for Ant Control, Rodent Removal, Bed Bug Control, or Silverfish Control near me - Superior Pest Solutions is the place to call",
  description: "Superior Pest Solutions delivers expert pest control throughout Springdale, AR - protecting homes from ants, roaches, termites, spiders, rodents, and more. Local technicians, guaranteed results, and a free quote waiting for you.",
  alternates: {
    canonical: '/areas-we-serve/springdale',
  },
};

export default function SpringdalePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Superior Pest Solutions",
    "image": "https://www.superiorpestsolutionsllc.com/heroimage.webp",
    "url": "https://www.superiorpestsolutionsllc.com/areas-we-serve/springdale",
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
      "name": "Springdale"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pest Control Services in Springdale",
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
              <span className="text-sm font-semibold tracking-wide uppercase text-foreground/80">Your Springdale Neighbors</span>
            </div>

            <h1 className="mb-6 text-foreground text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Premium pest control for <span className="text-[var(--brand-red)]">Springdale.</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-xl">
              Springdale is a wonderful place to call home. Pests seem to agree. We've been helping families in this city get rid of bugs and rodents for years. We know the streets, we know what shows up in these homes, and we know how to make it stop.
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
              src="/springdale.webp"
              alt="Springdale Arkansas Pest Control"
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
                    <p className="text-secondary text-foreground font-bold text-lg m-0">Springdale, AR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <AreaServices city="Springdale" />

      <WhyChooseUs
        subtitleText="Good pest control shouldn't be complicated. We give you straight answers, fair prices, and we actually show up when we say we will."
        checklistItems={[
          "Licensed and insured experts",
          "Safe for kids and pets",
          "If the bugs come back, we do too",
          "Fair and honest pricing",
        ]}
        reasonDescriptions={[
          "Dalton and Brandon are cousins. They grew up in Oklahoma and their families taught them that looking out for your neighbors isn't optional. It's just what you do.",
          "Brandon served in the military and Dalton's spent years running businesses right here in Northwest Arkansas. Showing up on time and doing good work isn't something they have to remind themselves to do.",
          "Bug-free means bug-free. We use products that get the job done and won't put your kids or pets at risk. That's the standard we hold ourselves to.",
          "We're part of this community too. We run our Good Neighbor Giveaway and free lunch program because Springdale has been good to us, and we want to return the favor.",
        ]}
        rootsText="Hard work was drilled into us early. But so was this: always take care of people. We carry both of those things into every job we do."
      />

      <ServiceProcess
        subtitleText="We've been taking care of homes in Springdale for a long time. Here's exactly what happens from the moment you reach out."
        stepDescriptions={[
          "Text or call us and tell us what you're seeing. We'll give you a straight price on the spot. No estimates, no surprises when the bill comes.",
          "We fit into your schedule. One of our guys comes out, figures out where the bugs are getting in, and handles it with products that are safe around kids and animals.",
          "See something after we've been out? Don't sit on it. Call us and we'll come back at no charge. We stand behind the work we do.",
          "A lot of our Springdale customers put us on a monthly schedule. Bugs don't get the chance to come back, and you don't have to think about it anymore.",
        ]}
        bannerText="No contracts to read through, no hidden costs. We show up, we fix the problem, and we don't leave until you're happy. Simple."
      />

      <ReviewCarousel />

      <FAQ
        faqs={[
          {
            question: "What bugs and pests show up most in Springdale homes?",
            answer: "Ants, roaches, and termites top the list. Springdale holds onto humidity, and with the tree cover from the Ozark foothills close by, pests have a lot of good hiding spots. We also get a lot of calls about spiders and rodents, especially in older homes and neighborhoods near wooded areas."
          },
          {
            question: "Do you come out to homes near Emma Avenue and downtown Springdale?",
            answer: "Yes, all of it. The older homes near Emma Ave, the newer neighborhoods out by Har-Ber, and everything in between. If you're in Springdale, we can get to you fast. Call us and we'll get you on the schedule."
          },
          {
            question: "Are your treatments safe for kids and pets?",
            answer: "Yes. Once things dry, the products we use are safe for your family. We'll always tell you what we put down and exactly where. If you have young kids or pets, mention it when you call and we'll walk you through everything before we come out."
          },
          {
            question: "How fast can you get out to Springdale?",
            answer: "Usually within a day or two. We're right here in Northwest Arkansas, so we're not driving from far away. Got something urgent, like a wasp nest or a serious roach problem? Tell us when you call and we'll do what we can to get out sooner."
          },
          {
            question: "What if pests come back after you treat?",
            answer: "We come back and fix it, no extra charge. If you see anything after we've been out, just call us. We're not going to brush you off. We live here too, and we want to make sure we did right by you."
          }
        ]}
        title={<>Got questions about pest control <span className="text-[var(--brand-red)]">in Springdale?</span></>}
        description="These are the questions we hear most from Springdale homeowners. Don't see yours? Just give us a call and we'll talk it through."
      />
      <CTASection
        title={<>Ready to have a pest-free home <span className="text-[var(--brand-red)]">in Springdale?</span></>}
        description="We're local, we're quick, and we'll make it right if something comes back. Call us or get a free quote online. It takes about a minute."
      />

      <Footer />
    </div>
  );
}
