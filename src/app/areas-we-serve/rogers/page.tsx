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
  title: "BEST Pest Control Rogers AR - if you're looking for Roach Control, Flea Control, Spider Control, or Termite Treatment near me - Superior Pest Solutions is the place to call",
  description: "Superior Pest Solutions delivers expert pest control throughout Rogers, AR - keeping homes free from ants, roaches, termites, spiders, rodents, and more. Local technicians, guaranteed results, and a free quote waiting for you.",
  alternates: {
    canonical: '/areas-we-serve/rogers',
  },
};

export default function RogersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Superior Pest Solutions",
    "image": "https://www.superiorpestsolutionsllc.com/heroimage.webp",
    "url": "https://www.superiorpestsolutionsllc.com/areas-we-serve/rogers",
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
      "name": "Rogers"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pest Control Services in Rogers",
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
              <span className="text-sm font-semibold tracking-wide uppercase text-foreground/80">Rogers Pest Experts</span>
            </div>

            <h1 className="mb-6 text-foreground text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Premium pest control for <span className="text-[var(--brand-red)]">Rogers.</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-xl">
              Rogers is a good place to call home. Pinnacle Hills, Lake Leatherwood, the Railyard, there is a lot to love here. Bugs are not part of that. Whether it is ants in your kitchen or spiders in your garage, we will take care of it so you can stop thinking about it.
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
              src="/rogers.webp"
              alt="Rogers Arkansas Pest Control"
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
                    <p className="text-secondary text-foreground font-bold text-lg m-0">Rogers, AR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <AreaServices city="Rogers" />

      <WhyChooseUs
        subtitleText="We're not going to sell you something you don't need. Just good pest control, honest pricing, and people you can actually trust."
        checklistItems={[
          "Licensed and insured experts",
          "Safe for kids and pets",
          "If the bugs come back, we do too",
          "Fair and honest pricing",
        ]}
        reasonDescriptions={[
          "Dalton and Brandon are cousins who grew up in Oklahoma. Growing up, they saw firsthand what it means to take care of the people around you. That's how they run this business.",
          "Brandon served in the military. Dalton built businesses from the ground up. They both learned the same thing: do what you say, and do it well.",
          "We want your family to feel safe in your home. The products we use work, and they're safe for your kids and pets. You shouldn't have to stress about either.",
          "Rogers has been home to us and we try to give back to it. Our Good Neighbor Giveaway and free lunch program are small ways of saying thanks to the community that supports us.",
        ]}
        rootsText="We were taught that the way you treat people matters more than anything else. That's true whether we're at someone's front door in Rogers or anywhere else we go."
      />

      <ServiceProcess
        subtitleText="15 years in Northwest Arkansas means we've seen just about everything. Here's how it goes when you reach out."
        stepDescriptions={[
          "Give us a call or text. Tell us what's going on. We'll give you a number right away, no back and forth. The price we say is the price you pay.",
          "We schedule around your day. We come out, track down the problem, and treat it with products that won't bother your family or your pets.",
          "Still seeing bugs? Call us back. We'll come out again and take care of it, free of charge. We want to get it right, not just get it done.",
          "Plenty of Rogers customers have us come by monthly. Bugs never get a chance to move in, and it's one less thing you have to think about.",
        ]}
        bannerText="No fine print, no confusing terms. We come out, we do the job, and we make sure you're taken care of before we leave."
      />

      <ReviewCarousel />

      <FAQ
        faqs={[
          {
            question: "What bugs are most common in Rogers?",
            answer: "Ants and spiders are the big ones, especially when it warms up. If you are near Beaver Lake or Lake Leatherwood, mosquitoes can get bad too. And when new neighborhoods pop up around Pinnacle Hills, rodents lose their space and start looking for a new one. Your home can start looking pretty good to them. We see it happen a lot."
          },
          {
            question: "Do you serve all of Rogers?",
            answer: "Yes, all of Rogers. Older streets near downtown, newer neighborhoods out by Pinnacle Hills, everything in between. Not sure if you are in our area? Just give us a call and we will tell you right away."
          },
          {
            question: "How long does a treatment take?",
            answer: "About 30 to 45 minutes for most homes. We take our time and do it right, but we are not going to be there all day. Before we head out, we walk you through what we did and what we treated so you are not left guessing."
          },
          {
            question: "Is the treatment safe for my kids and pets?",
            answer: "Yes. Everything we use is safe for families and animals. After we finish, we will let you know if there are any spots to keep kids or pets away from while things dry, which is usually less than 30 minutes. That is really the only thing to keep in mind."
          },
          {
            question: "What if bugs come back after the treatment?",
            answer: "Just call us and we will come back out, no charge. We are not a one-visit-and-done kind of company. Rogers is home to us too, and we want to be the people you can actually call when something comes up."
          }
        ]}
        title={<>What Rogers homeowners <span className="text-[var(--brand-red)]">ask us</span></>}
        description="We have been helping families in Northwest Arkansas for years. These are the questions we hear most from people in Rogers before they get started."
      />
      <CTASection
        title={<>Ready to have a home <span className="text-[var(--brand-red)]">without bugs?</span></>}
        description="Give us a call or grab a free quote below. We will come out, take a look, and tell you exactly what we can do for your home in Rogers."
      />

      <Footer />
    </div>
  );
}
