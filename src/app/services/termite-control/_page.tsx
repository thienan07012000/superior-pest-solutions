import Image from "next/image";
import Link from "next/link";
import EstimateButton from "@/components/EstimateButton";
import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { TermiteInfoSection } from "@/components/TermiteInfoSection";
import { TermiteSignsSection } from "@/components/TermiteSignsSection";
import { WhyChooseTermiteControl } from "@/components/WhyChooseTermiteControl";
import { ReferralBand } from "@/components/ReferralBand";
import { AreasServedTermiteControl } from "@/components/AreasServedTermiteControl";
import { FAQ } from "@/components/FAQ";
import ReviewCarousel from "@/components/ReviewCarousel";

export const metadata: Metadata = {
  title: "BEST Termite Control Northwest Arkansas - if you're looking for Termite Extermination, Termite Inspections, or Subterranean Termite Treatment near me - Superior Pest Solutions is the place to call",
  description: "Superior Pest Solutions protects Northwest Arkansas homes from termite damage - expert colony elimination, thorough inspections, and ongoing monitoring with long-lasting safe treatments. Guaranteed results and a free quote waiting for you.",
  alternates: {
    canonical: '/services/termite-control',
  },
};

const termiteFaqs = [
  {
    question: "How do you treat for termites without tearing apart my home?",
    answer: "We use minimally invasive techniques. Liquid barriers are applied around the foundation, and baiting systems are strategically placed to draw termites away from your home, eliminating the colony at the source without major disruption."
  },
  {
    question: "Are termite treatments safe for my family and pets?",
    answer: "Absolutely. We use heavily tested, safe, and eco-friendly options. Once applied and dried, our treatments are completely safe for children and pets. Protecting your home shouldn't mean putting your family at risk."
  },
  {
    question: "How soon are the termites gone?",
    answer: "Colony elimination takes a little time because worker termites carry the treatment back to the queen and the rest of the nest. You will stop seeing new damage quickly, and our monitoring ensures the entire colony is neutralized."
  },
  {
    question: "Do I have to leave the house during treatment?",
    answer: "In most cases, no. Our treatments are primarily exterior barriers and bait systems, or highly targeted interior applications. If we ever need you to step out briefly for safety, we'll discuss it with you well beforehand."
  },
  {
    question: "Can I just buy a spray and treat the ones I see?",
    answer: "DIY termite products rarely work because termites are incredibly good at hiding. For every one you spot, thousands more are hidden out of sight. You have to eliminate the entire colony, including the queen, to stop the damage."
  },
  {
    question: "Do I have to sign a long corporate contract?",
    answer: "No. We believe in earning your trust, not forcing it. While termites do require ongoing monitoring to ensure they don't return, we'll design a customized plan for your home without locking you into an unbreakable contract."
  },
  {
    question: "What happens if the termites show up again?",
    answer: "We offer guaranteed results and support. If termite activity resumes after our complete treatment, we will come back and resolve the issue—no questions asked."
  }
];

export default function TermiteControlPage() {
    const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Termite Control",
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
    "description": "Professional termite control in Northwest Arkansas by Superior Pest Solutions. Effective, safe, and guaranteed."
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
              <span className="text-secondary font-medium tracking-wide uppercase text-foreground/80">Termite Eradication</span>
            </div>

            <h1 className="mb-6 text-foreground">
              Termite Control in <span className="text-[var(--brand-red)]">Northwest Arkansas</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-xl">
              Termites can eat through your home for months before you ever notice. We find them fast, wipe out the whole colony, and make sure they don't come back.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <EstimateButton
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[var(--brand-red)] rounded-full transition-all duration-300 hover:bg-[var(--brand-red-light)] hover:shadow-2xl hover:shadow-[var(--brand-red)]/30 hover:-translate-y-1"
              >
                Schedule an Inspection
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
                  <span className="text-sm md:text-xl font-bold text-foreground leading-tight">Proven Results</span>
                  <span className="text-[11px] sm:text-[12px] md:text-base text-foreground/70 font-medium leading-tight">If They're Back, So Are We</span>
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
                  <span className="text-sm md:text-xl font-bold text-foreground leading-tight">Local Experts</span>
                  <span className="text-[11px] sm:text-[12px] md:text-base text-foreground/70 font-medium leading-tight">Licensed & Insured</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-[0_32px_80px_-16px_rgba(0,0,0,0.18)] group lg:translate-x-8">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-0" />
            <Image
              src="/termites.webp"
              alt="Professional termite inspection near foundational wood elements"
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

      <TermiteInfoSection />
      <TermiteSignsSection />
      <WhyChooseTermiteControl />
      <ReferralBand
        title="Help a neighbor save their home from unseen damage."
        description={<>Refer someone for termite control and you both snag <span className="text-white font-bold underline underline-offset-4 decoration-white/30">50% OFF</span> your treatment!</>}
      />
      <AreasServedTermiteControl />
      <FAQ
        faqs={termiteFaqs}
        title={<>Answers to your <span className="text-[var(--brand-red)]">termite</span> questions</>}
        description="Got a question we did not answer? Give us a call and we will be happy to help."
      />
      <ReviewCarousel />
      <CTASection />
      <Footer />
    </div>
  );
}
