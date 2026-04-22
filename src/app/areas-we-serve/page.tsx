import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { areas } from "@/constants/areas";
import { MapPin, ChevronRight } from "lucide-react";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FAQ } from "@/components/FAQ";
import ReviewCarousel from "@/components/ReviewCarousel";
import { CTASection } from "@/components/CTASection";

const conversationalFaqs = [
  {
    question: "How often do you need to come out here?",
    answer: "Most folks around town like having us out every three months. It keeps the bugs away without overdoing it. If things get really bad, we can drop by more often until the house is quiet again."
  },
  {
    question: "Is this going to be safe for my pets and kids?",
    answer: "Absolutely. We are parents and dog owners too. Once the products dry, they are completely safe. We are always happy to show you exactly what we are using."
  },
  {
    question: "How long does a visit usually take?",
    answer: "We are usually in and out in about 30 to 45 minutes. We want to do a thorough job, but we also know you have a busy day."
  },
  {
    question: "Do we have to leave the house while you work?",
    answer: "Nope, you can stay right where you are. If we ever need to use something that requires you to step outside, we will give you plenty of warning first."
  },
  {
    question: "Should we clean up or prep anything before you arrive?",
    answer: "You do not have to do much. It helps us a lot if you can just pick up toys or pet bowls from the floor, and make sure we can get to places like under the kitchen sink."
  },
  {
    question: "When will we actually stop seeing bugs?",
    answer: "You should see a big difference in just a day or two. Sometimes you might see a few more bugs right after we leave because they are running from the treatment, which is totally normal."
  },
  {
    question: "What happens if bugs show up right after you leave?",
    answer: "Just text or call us. We will come back out and fix it for free. We want to make sure you are completely happy and bug free."
  },
  {
    question: "Do you guys handle office spaces too?",
    answer: "We sure do. We help local businesses keep their shops and offices just as clean and bug free as the homes we treat."
  },
  {
    question: "How do I know if it is termites or just regular ants?",
    answer: "They look pretty similar. Termites have straight feelers and their wings are all the same size. If you are not sure, just call us out to take a look so you do not have to guess."
  },
  {
    question: "Why should we hire you instead of someone else?",
    answer: "We live here, we are veteran-owned, and we actually care about doing a good job for our neighbors. We listen to what you need and we show up when we say we will."
  }
];

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BEST Pest Control in Northwest Arkansas & Southeast Oklahoma - Serving Fayetteville, Bentonville, Rogers, Springdale, Bella Vista, Siloam Springs & More Near Me | Superior Pest Solutions",
  description: "Superior Pest Solutions serves Northwest Arkansas and Southeast Oklahoma with veteran-owned, family-friendly pest control. We cover Fayetteville, Bentonville, Rogers, Springdale, and surrounding communities — same-week service, pet-safe treatments, and free callbacks.",
  alternates: {
    canonical: '/areas-we-serve',
  },
};

export default function AreasWeServePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Superior Pest Solutions",
    "image": "https://www.superiorpestsolutionsllc.com/heroimage.webp",
    "url": "https://www.superiorpestsolutionsllc.com/areas-we-serve",
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
    <div className="flex flex-col w-full relative min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow pt-32 relative overflow-hidden">
        {/* Background Pattern matches Hero */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "url('/bug-pattern.png')",
            backgroundRepeat: 'repeat',
            backgroundSize: '400px'
          }}
        />

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-black/5 mb-6 transform transition hover:scale-105">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-red)] animate-pulse" />
              <span className="text-sm font-semibold tracking-wide uppercase text-foreground/80">Our Service Radius</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Areas We <span className="text-[var(--brand-red)]">Serve</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              We're proud to provide professional pest control solutions to our neighbors across Northwest Arkansas and Southeast Oklahoma. From residential homes to large commercial facilities, we've got you covered.
            </p>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {areas.map((area) => (
              <div 
                key={area.id}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-black/[0.03]"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={area.image}
                    alt={`${area.name}, ${area.state}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                  
                  {/* State Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase text-foreground/70">
                    {area.state}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--brand-red)]/5 flex items-center justify-center text-[var(--brand-red)] transition-colors duration-300 group-hover:bg-[var(--brand-red)]/10">
                      {area.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {area.name}
                    </h2>
                  </div>

                  <p className="text-foreground/70 leading-relaxed mb-8 flex-grow">
                    {area.description}
                  </p>

                  {["fayetteville", "bentonville", "rogers", "springdale"].includes(area.id) && (
                    <Link
                      href={`/areas-we-serve/${area.id}`}
                      className="inline-flex items-center justify-between w-full px-6 py-4 rounded-2xl bg-foreground text-white font-bold hover:bg-[var(--brand-red)] transition-all duration-300 group/btn"
                    >
                      <span>View Location Services</span>
                      <ChevronRight className="w-5 h-5 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-24">
          <WhyChooseUs />
        </div>

        <FAQ 
          faqs={conversationalFaqs}
          title={<>Questions our <span className="text-[var(--brand-red)]">neighbors</span> ask.</>}
          description="If you have a different question, just give us a shout. We are always ready to help."
        />

        <ReviewCarousel />

        <CTASection 
          title={<>Ready to enjoy a <span className="text-[var(--brand-red)]">quiet home?</span></>}
          description="Let's get this handled. Give us a call or send a quick note and we will get back to you fast. We'll always let you know what it costs before we do any work."
        />
      </main>

      <Footer />
    </div>
  );
}
