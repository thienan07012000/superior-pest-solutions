import Image from "next/image";
import Link from "next/link";
import EstimateButton from "@/components/EstimateButton";
import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { RoachInfoSection } from "@/components/RoachInfoSection";
import { RoachSignsSection } from "@/components/RoachSignsSection";
import { WhyChooseRoachControl } from "@/components/WhyChooseRoachControl";
import { ReferralBand } from "@/components/ReferralBand";
import { AreasServedRoachControl } from "@/components/AreasServedRoachControl";
import { FAQ } from "@/components/FAQ";
import ReviewCarousel from "@/components/ReviewCarousel";

export const metadata: Metadata = {
  title: "BEST Roach Control Northwest Arkansas - if you're looking for Cockroach Extermination, German Roach Treatment, or Roach Nest Elimination near me - Superior Pest Solutions is the place to call",
  description: "Superior Pest Solutions delivers professional roach control throughout Northwest Arkansas - reaching the nest and stopping them from coming back with treatments safe for your family and pets. Free quote waiting for you.",
  alternates: {
    canonical: '/services/roach-control',
  },
};

const roachFaqs = [
  {
    question: "Why can't I just use bug spray from the store to get rid of them?",
    answer: "Store bought sprays usually only kill the bugs you see right then. Roaches are really good at hiding in cracks and walls, so you have to reach the nest to stop them from coming back. We use special baits that they take back home with them, which takes care of the whole problem."
  },
  {
    question: "Is the treatment safe for my kids and pets?",
    answer: "Yes, it is completely safe for everyone in your family once it dries. We use gentle, pet friendly products that only target the bugs, so you can stop worrying."
  },
  {
    question: "How fast will the roaches go away?",
    answer: "You will start seeing a big difference in just a few days. You might see a few wandering out in the open soon after we leave, but that just means the treatment is working and pushing them out of their hiding spots."
  },
  {
    question: "Do I need to leave my house when you come to treat it?",
    answer: "Most of the time, you can stay right at home. Our treatments do not fill the room with bad smells or harsh fumes. If we ever need you to step out for a bit, we will always let you know well ahead of time."
  },
  {
    question: "Why do I have roaches even though I clean my house all the time?",
    answer: "It is really frustrating, but getting roaches does not mean your house is dirty. They can sneak in on cardboard boxes, grocery bags, or even through tiny cracks from outside. All they need is a little bit of water to stick around."
  },
  {
    question: "Will you make me sign a long contract?",
    answer: "No, we will not. We do not like forcing people into contracts. We will fix your roach problem and we can talk about plans to keep them away, but you are never locked in."
  },
  {
    question: "What happens if I see another roach after you treat my home?",
    answer: "Just give us a call. We want to make sure your home stays bug free. If they show up again before your next planned visit, we will come back out and take care of it for free."
  }
];

export default function RoachControlPage() {
    const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Roach Control",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Superior Pest Solutions",
        "telephone": "+1-479-364-4588",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "160 E Poplar St C",
            "addressLocality": "Fayetteville",
            "addressRegion": "AR",
            "postalCode": "72703",
            "addressCountry": "US"
        }
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
    "description": "Professional roach control in Northwest Arkansas by Superior Pest Solutions. Effective, safe, and guaranteed."
};

  return (
    <div className="flex flex-col w-full relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* 
        Hero Section 
        Premium layout: image on the right, content on the left
      */}
      <section className="relative w-full min-h-screen flex items-center pt-32 bg-background overflow-x-clip">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 py-12 lg:py-0">

          {/* Text Content */}
          <div className="flex flex-col items-start max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-black/5 mb-8 transform transition hover:scale-105">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-red)] animate-pulse" />
              <span className="text-secondary font-medium tracking-wide uppercase text-foreground/80">Roach Elimination</span>
            </div>

            <h1 className="mb-6 text-foreground">
              Roach Control in <span className="text-[var(--brand-red)]">Northwest Arkansas</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-xl">
              Don't let an infestation take away the comfort of your home. Our experienced and friendly technicians provide highly targeted treatments that eliminate roaches at their source. You can breathe easy knowing we use reassuring and professional methods that prioritize your family's health and safety.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <EstimateButton
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[var(--brand-red)] rounded-full transition-all duration-300 hover:bg-[var(--brand-red-light)] hover:shadow-2xl hover:shadow-[var(--brand-red)]/30 hover:-translate-y-1"
              >
                Get Rid of Roaches Today
              </EstimateButton>
              <Link
                href="tel:+14793644588"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-foreground bg-white border border-black/10 rounded-full transition-all duration-300 hover:bg-gray-50 hover:border-black/20 hover:-translate-y-1"
              >
                Call Now
              </Link>
            </div>

            <div className="mt-10 md:mt-16 flex flex-row items-center gap-2 sm:gap-4 md:gap-10 w-full max-w-xl">
              <div className="flex-1 flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[var(--brand-red)]/10 flex items-center justify-center text-[var(--brand-red)] shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm md:text-xl font-bold text-foreground leading-tight">Safe Solutions</span>
                  <span className="text-[11px] sm:text-[12px] md:text-base text-foreground/70 font-medium leading-tight">Family & Pet Friendly</span>
                </div>
              </div>

              <div className="w-px h-10 md:h-12 bg-black/10 shrink-0"></div>

              <div className="flex-1 flex items-center gap-2 sm:gap-3 pl-2 sm:pl-0">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[var(--brand-red)]/10 flex items-center justify-center text-[var(--brand-red)] shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm md:text-xl font-bold text-foreground leading-tight">Fast Action</span>
                  <span className="text-[11px] sm:text-[12px] md:text-base text-foreground/70 font-medium leading-tight">Quick & Effective Relief</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-[0_32px_80px_-16px_rgba(0,0,0,0.18)] group lg:translate-x-8">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-0" />
            <Image
              src="/roaches.webp"
              alt="Friendly pest control technician treating a clean home interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: 'center center' }}
              priority
              quality={100}
            />
          </div>

        </div>
      </section>

      <RoachInfoSection />
      <RoachSignsSection />
      <WhyChooseRoachControl />
      <ReferralBand
        title="Help a neighbor reclaim their peace of mind."
        description={<>Refer someone for roach control and you both snag <span className="text-white font-bold underline underline-offset-4 decoration-white/30">50% OFF</span> your next visit!</>}
      />
      <AreasServedRoachControl />
      <FAQ
        faqs={roachFaqs}
        title={<>Answers to your <span className="text-[var(--brand-red)]">roach</span> questions</>}
        description="Got a question we did not answer? Give us a call and we will be happy to help."
      />
      <ReviewCarousel />
      <CTASection />
      <Footer />
    </div>
  );
}
