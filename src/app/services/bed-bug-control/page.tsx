import Image from "next/image";
import Link from "next/link";
import EstimateButton from "@/components/EstimateButton";
import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { BedBugInfoSection } from "@/components/BedBugInfoSection";
import { BedBugSignsSection } from "@/components/BedBugSignsSection";
import { WhyChooseBedBugControl } from "@/components/WhyChooseBedBugControl";
import { ReferralBand } from "@/components/ReferralBand";
import { AreasServedBedBugControl } from "@/components/AreasServedBedBugControl";
import { FAQ } from "@/components/FAQ";
import ReviewCarousel from "@/components/ReviewCarousel";

export const metadata: Metadata = {
  title: "BEST Bed Bug Control Northwest Arkansas - if you're looking for Bed Bug Extermination, Heat Treatment, or Bed Bug Inspections near me - Superior Pest Solutions is the place to call",
  description: "Superior Pest Solutions eliminates bed bugs throughout Northwest Arkansas - thorough inspections, targeted treatments, and follow-up visits to make sure they're gone for good. Guaranteed results and a free quote waiting for you.",
  alternates: {
    canonical: '/services/bed-bug-control',
  },
};

const bedBugFaqs = [
  {
    question: "Can I get rid of bed bugs on my own?",
    answer: "It's really hard to do by yourself. Bed bugs hide in tiny cracks and seams that are tough to reach with store-bought sprays. Professional treatment gets into all the spots they're hiding and makes sure the whole infestation is taken care of."
  },
  {
    question: "Is the treatment safe for my kids and pets?",
    answer: "Yes, it is completely safe for your whole family. We use products that are safe once they dry. We'll walk you through everything we're doing so you feel comfortable the entire time."
  },
  {
    question: "How fast will the bed bugs go away?",
    answer: "You should see a big difference after the first treatment. Some situations need a follow-up visit to catch any bugs that hatched after the first round. We'll check in and make sure they're completely gone."
  },
  {
    question: "Do I need to throw away my mattress?",
    answer: "Usually, no. Our treatments are designed to save your mattress and furniture. We treat them directly so you don't have to replace anything. We'll let you know if there is ever a case where replacement makes more sense."
  },
  {
    question: "How did I even get bed bugs?",
    answer: "Bed bugs are great hitchhikers. They can come home with you from hotels, used furniture, or even a friend's couch. Having them does not mean your house is dirty. They just need people to feed on."
  },
  {
    question: "Will you make me sign a long contract?",
    answer: "No, we will not. We don't lock anyone into contracts. We'll take care of your bed bug problem and talk about what makes sense for follow-ups, but you are never stuck."
  },
  {
    question: "What if I see bed bugs again after treatment?",
    answer: "Just give us a call. If they show up again before your next planned visit, we'll come back and take care of it. We want your home to stay bed bug-free and we stand behind our work."
  }
];

export default function BedBugControlPage() {
    const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bed Bug Control",
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
    "description": "Professional bed bug control in Northwest Arkansas by Superior Pest Solutions. Effective, safe, and guaranteed."
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
              <span className="text-secondary font-medium tracking-wide uppercase text-foreground/80">Bed Bug Elimination</span>
            </div>

            <h1 className="mb-6 text-foreground">
              Bed Bug Control in <span className="text-[var(--brand-red)]">Northwest Arkansas</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-xl">
              Protect your home and family from bed bugs that bite, hide in mattresses, furniture, and crevices, and disrupt sleep. Our licensed technicians provide safe, effective, and long-lasting bed bug control solutions for Northwest Arkansas homes and businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <EstimateButton
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[var(--brand-red)] rounded-full transition-all duration-300 hover:bg-[var(--brand-red-light)] hover:shadow-2xl hover:shadow-[var(--brand-red)]/30 hover:-translate-y-1"
              >
                Get Rid of Bed Bugs Today
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
              src="/bedbugs.webp"
              alt="Professional technician inspecting a bedroom for bed bugs"
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

      <BedBugInfoSection />
      <BedBugSignsSection />
      <WhyChooseBedBugControl />
      <ReferralBand
        title="Help a neighbor sleep peacefully again."
        description={<>Refer someone for bed bug control and you both get <span className="text-white font-bold underline underline-offset-4 decoration-white/30">50% OFF</span> your next visit!</>}
      />
      <AreasServedBedBugControl />
      <FAQ
        faqs={bedBugFaqs}
        title={<>Answers to your <span className="text-[var(--brand-red)]">bed bug</span> questions</>}
        description="Got a question we did not answer? Give us a call and we will be happy to help."
      />
      <ReviewCarousel />
      <CTASection />
      <Footer />
    </div>
  );
}
