import Image from "next/image";
import Link from "next/link";
import EstimateButton from "@/components/EstimateButton";
import { Services } from "@/components/Services";
import { WhoWeWorkWith } from "@/components/WhoWeWorkWith";
import { ReferralBand } from "@/components/ReferralBand";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Story } from "@/components/Story";
import { Community } from "@/components/Community";
import { AreasServed } from "@/components/AreasServed";
import { FAQ } from "@/components/FAQ";
import { MapSection } from "@/components/MapSection";
import { CTASection } from "@/components/CTASection";
import ReviewCarousel from "@/components/ReviewCarousel";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "BEST Pest Control Services Fayetteville AR - if you're looking for Termite Control, Roach Control, Ant Control, Bed Bug Treatment & Pest Exterminator near me - Superior Pest Solutions is the place to call",
  description:
    "Superior Pest Solutions is a veteran-owned pest control company serving Fayetteville, Springdale, Bella Vista & all of NW Arkansas. From termites and roaches to bed bugs and rodents, we deliver guaranteed results with free estimates and a 100% satisfaction promise.",
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Superior Pest Solutions",
    "image": "https://www.superiorpestsolutionsllc.com/heroimage.webp",
    "url": "https://www.superiorpestsolutionsllc.com",
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
    "areaServed": [
      { "@type": "City", "name": "Fayetteville" },
      { "@type": "City", "name": "Bentonville" },
      { "@type": "City", "name": "Rogers" },
      { "@type": "City", "name": "Springdale" },
      { "@type": "City", "name": "Bella Vista" },
      { "@type": "City", "name": "Siloam Springs" },
      { "@type": "City", "name": "Lowell" },
      { "@type": "City", "name": "Centerton" },
      { "@type": "City", "name": "Farmington" },
      { "@type": "City", "name": "Pea Ridge" },
      { "@type": "City", "name": "Fort Smith" },
      { "@type": "City", "name": "Huntsville" },
      { "@type": "City", "name": "Van Buren" },
      { "@type": "City", "name": "Prairie Grove" },
      { "@type": "City", "name": "Elkins" },
      { "@type": "City", "name": "Tontitown" },
      { "@type": "City", "name": "Conway" },
      { "@type": "City", "name": "Gentry" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pest Control Services",
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
            "name": "Wasp Control"
          }
        }
      ]
    }
  };

  const professionalServiceLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.superiorpestsolutionsllc.com/#professionalservice",
    "name": "Superior Pest Solutions",
    "legalName": "Superior Pest Solutions LLC",
    "alternateName": "Superior Pest Solutions Northwest Arkansas",
    "description": "We're a veteran-owned, family-run pest control company helping homes and businesses across Northwest Arkansas, Central Arkansas, and Southeastern Oklahoma. Whether it's ants, roaches, spiders, termites, mice, or anything else crawling around, we show up fast, treat your place like it's our own, and make sure the problem gets handled for good. All of our treatments are safe for your family and pets, and every visit comes with a 100% satisfaction promise.",
    "slogan": "We protect what matters most.",
    "url": "https://www.superiorpestsolutionsllc.com",
    "logo": "https://www.superiorpestsolutionsllc.com/logo.webp",
    "image": [
      "https://www.superiorpestsolutionsllc.com/heroimage.webp",
      "https://www.superiorpestsolutionsllc.com/heroimage.webp"
    ],
    "telephone": "+1-479-364-4588",
    "email": "Information@superiorpestsolutionsllc.com",
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "foundingDate": "2024",
    "founder": [
      {
        "@type": "Person",
        "name": "Dalton",
        "jobTitle": "Owner"
      },
      {
        "@type": "Person",
        "name": "Brandon",
        "jobTitle": "Owner"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "160 E Poplar St C",
      "addressLocality": "Fayetteville",
      "addressRegion": "AR",
      "postalCode": "72703",
      "addressCountry": "US"
    },
    "hasMap": "https://maps.app.goo.gl/QictAQam2uuuQ7qe6",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/p/Superior-Pest-Solutions-Northwest-AR-61567145803932/",
      "https://www.instagram.com/superiorpestsolutionsnwa/",
      "https://www.linkedin.com/company/superiorpestsolutionsnwa/"
    ],
    "knowsAbout": [
      "Residential Pest Control",
      "Commercial Pest Control",
      "Rodent Removal",
      "Ant Control",
      "Roach Control",
      "Spider Control",
      "Bed Bug Treatment",
      "Mosquito Control",
      "Wasp Control",
      "Flea Control",
      "Silverfish Control",
      "Eco-Conscious Pest Treatments",
      "Family-Safe Pest Control"
    ],
    "areaServed": [
      { "@type": "City", "name": "Fayetteville", "addressRegion": "AR" },
      { "@type": "City", "name": "Springdale", "addressRegion": "AR" },
      { "@type": "City", "name": "Rogers", "addressRegion": "AR" },
      { "@type": "City", "name": "Bentonville", "addressRegion": "AR" },
      { "@type": "City", "name": "Fort Smith", "addressRegion": "AR" },
      { "@type": "City", "name": "Van Buren", "addressRegion": "AR" },
      { "@type": "City", "name": "Conway", "addressRegion": "AR" },
      { "@type": "City", "name": "Bella Vista", "addressRegion": "AR" },
      { "@type": "City", "name": "Farmington", "addressRegion": "AR" },
      { "@type": "City", "name": "Lowell", "addressRegion": "AR" },
      { "@type": "City", "name": "Centerton", "addressRegion": "AR" },
      { "@type": "City", "name": "Pea Ridge", "addressRegion": "AR" },
      { "@type": "City", "name": "Siloam Springs", "addressRegion": "AR" },
      { "@type": "City", "name": "Huntsville", "addressRegion": "AR" },
      { "@type": "City", "name": "Prairie Grove", "addressRegion": "AR" },
      { "@type": "City", "name": "Elkins", "addressRegion": "AR" },
      { "@type": "City", "name": "Tontitown", "addressRegion": "AR" },
      { "@type": "City", "name": "Gentry", "addressRegion": "AR" }
    ],
    "serviceArea": [
      {
        "@type": "AdministrativeArea",
        "name": "Northwest Arkansas"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Central Arkansas"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Southeastern Oklahoma"
      }
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Homeowners, Renters, Property Managers, and Business Owners"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pest Control Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ant Control",
            "serviceType": "Pest Control",
            "url": "https://www.superiorpestsolutionsllc.com/services/ant-control"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bed Bug Control",
            "serviceType": "Pest Control",
            "url": "https://www.superiorpestsolutionsllc.com/services/bed-bug-control"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flea Control",
            "serviceType": "Pest Control",
            "url": "https://www.superiorpestsolutionsllc.com/services/flea-control"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mosquito Control",
            "serviceType": "Pest Control",
            "url": "https://www.superiorpestsolutionsllc.com/services/mosquito-control"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roach Control",
            "serviceType": "Pest Control",
            "url": "https://www.superiorpestsolutionsllc.com/services/roach-control"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rodent Control",
            "serviceType": "Pest Control",
            "url": "https://www.superiorpestsolutionsllc.com/services/rodent-control"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Silverfish Control",
            "serviceType": "Pest Control",
            "url": "https://www.superiorpestsolutionsllc.com/services/silverfish-control"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Spider Control",
            "serviceType": "Pest Control",
            "url": "https://www.superiorpestsolutionsllc.com/services/spider-control"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wasp Control",
            "serviceType": "Pest Control",
            "url": "https://www.superiorpestsolutionsllc.com/services/wasp-control"
          }
        }
      ]
    },
    "makesOffer": {
      "@type": "Offer",
      "name": "Free Pest Control Estimate",
      "description": "Free, no-pressure estimates for residential and commercial pest control across Northwest Arkansas.",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="flex flex-col w-full relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceLd) }}
      />
      {/* 
        Hero Section 
        Premium layout: massive image on the right (desktop), floating clean modern text on the left.
      */}
      <section className="relative w-full min-h-screen flex items-center pt-32 bg-background overflow-x-clip">

        {/* Subtle Background Elements - Removed to ensure single-color background as per user preference */}

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 py-12 lg:py-0">

          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-black/5 mb-8 transform transition hover:scale-105">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-red)] animate-pulse" />
              <span className="text-secondary font-medium tracking-wide uppercase text-foreground/80">Local Pest Help</span>
            </div>

            <h1 className="mb-6 text-foreground text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center lg:text-left">
              Top pest control services in <span className="text-[var(--brand-red)]">Fayetteville</span>.
            </h1>

            {/* Mobile-only hero image — shown between title and description */}
            <div className="block lg:hidden relative w-full h-[200px] rounded-2xl overflow-hidden shadow-lg mb-8">
              <Image
                src="/heroimage.webp"
                alt="Superior Pest Solutions"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: '40% center' }}
                priority
                quality={90}
              />
            </div>

            <p className="text-md md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-xl text-center lg:text-left">
              Nobody likes finding bugs in their house. We make sure your home stays completely pest free so you can finally relax. Whether you live in Fayetteville, Springdale, Bella Vista, or any of our nearby towns, our team is right around the corner and ready to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <EstimateButton
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[var(--brand-red)] rounded-full transition-all duration-300 hover:bg-[var(--brand-red-light)] hover:shadow-2xl hover:shadow-[var(--brand-red)]/30 hover:-translate-y-1"
              >
                Get Your Free Estimate
              </EstimateButton>
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-foreground bg-white border border-black/10 rounded-full transition-all duration-300 hover:bg-gray-50 hover:border-black/20 hover:-translate-y-1"
              >
                Our Services
              </Link>
            </div>

            {/* Key Attributes */}
            <div className="mt-16 grid grid-cols-2 sm:flex sm:flex-row items-center gap-4 sm:gap-10 w-full">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--brand-red)]/10 flex items-center justify-center text-[var(--brand-red)] shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm sm:text-lg md:text-xl font-bold text-foreground leading-tight">Community</span>
                  <span className="text-xs sm:text-sm text-secondary text-foreground/70 font-medium">Driven & Focused</span>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-black/10"></div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--brand-red)]/10 flex items-center justify-center text-[var(--brand-red)] shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm sm:text-lg md:text-xl font-bold text-foreground leading-tight">Veteran Owned</span>
                  <span className="text-xs sm:text-sm text-secondary text-foreground/70 font-medium">Committed to Service</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="hidden lg:block relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-[0_32px_80px_-16px_rgba(0,0,0,0.18)] group lg:translate-x-8">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-0" />
            <Image
              src="/heroimage.webp"
              alt="Superior Pest Solutions team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="hidden md:block object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: '60% center' }}
              priority
              quality={100}
            />
            <Image
              src="/heroimage.webp"
              alt="Superior Pest Solutions rodents"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="block md:hidden object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: '40% center' }}
              priority
              quality={100}
            />

            {/* Floating Glass UI Card on Image */}
            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-auto z-20">
              <div className="glass px-6 py-5 rounded-2xl md:w-80 border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.15)] relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 delay-100">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--brand-red)]/10 rounded-bl-full" />
                <div className="flex items-center gap-4 mb-1 relative z-10">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[var(--brand-red)] shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-foreground leading-tight m-0 block text-[18px] font-normal">Guaranteed</span>
                    <p className="text-secondary text-foreground/70 m-0">100% Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <ReviewCarousel />

      <Services />
      <ReferralBand />
      <WhoWeWorkWith />
      <Process />
      <Pricing />
      <Story />
      <Community />
      <AreasServed />
      <FAQ />
      <CTASection />
      <MapSection />
      <Footer />
    </div>
  );
}
