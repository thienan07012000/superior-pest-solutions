import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EstimateButton from "@/components/EstimateButton";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FleaInfoSection } from "@/components/FleaInfoSection";
import { FleaSignsSection } from "@/components/FleaSignsSection";
import { FleaTargetsSection } from "@/components/FleaTargetsSection";
import { WhyChooseFleaControl } from "@/components/WhyChooseFleaControl";
import { ReferralBand } from "@/components/ReferralBand";
import { AreasServedFleaControl } from "@/components/AreasServedFleaControl";
import { FAQ } from "@/components/FAQ";
import ReviewCarousel from "@/components/ReviewCarousel";

export const metadata: Metadata = {
  title: "BEST Flea Control Northwest Arkansas - if you're looking for Flea Extermination, Indoor Flea Treatment, or Yard Flea Spray near me - Superior Pest Solutions is the place to call",
  description: "Superior Pest Solutions protects homes and pets from fleas throughout Northwest Arkansas - safe, effective treatments inside and out for long-lasting relief. Local technicians, guaranteed results, and a free quote waiting for you.",
  alternates: {
    canonical: '/services/flea-control',
  },
};

const fleaFaqs = [
  {
    question: "Is the flea treatment safe for my pets?",
    answer: "Yes, completely. We use products that are safe for dogs, cats, and all your family members once they dry. We always let you know what we're using so you can feel good about it."
  },
  {
    question: "How fast will the fleas go away?",
    answer: "Most people notice a big difference within a few days. You might still see a few fleas right after treatment because they're being pushed out of hiding spots, but that means it's working."
  },
  {
    question: "Can fleas live in my house even if I don't have pets?",
    answer: "They can. Fleas hitch rides on clothing, shoes, or even from wildlife near your home. Once inside, they'll settle into carpets and furniture whether you have pets or not."
  },
  {
    question: "Do I need to wash everything before you come?",
    answer: "We'll ask you to wash pet bedding and vacuum the carpets before we arrive. It helps the treatment work better by stirring up the eggs and larvae. We'll give you the full rundown when you call."
  },
  {
    question: "Why can't I just use a flea bomb from the store?",
    answer: "Flea bombs only reach surfaces they can settle on. Fleas hide deep in carpet fibers, in furniture cushions, and between floorboards. Our treatments reach those spots and actually deal with the eggs too."
  },
  {
    question: "Will you make me sign a contract?",
    answer: "No. We don't lock anyone into long-term contracts. We fix the flea problem and can talk about follow-up plans, but you're never stuck."
  },
  {
    question: "What if I see fleas again after treatment?",
    answer: "Just call us. If fleas show up again before your next planned visit, we'll come back and take care of it for free. We want your home flea-free, period."
  }
];

export default function FleaControlPage() {
    const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Flea Control",
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
    "description": "Professional flea control in Northwest Arkansas by Superior Pest Solutions. Effective, safe, and guaranteed."
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
              <span className="text-secondary font-medium tracking-wide uppercase text-foreground/80">Flea Elimination</span>
            </div>

            <h1 className="mb-6 text-foreground">
              Flea Control in <span className="text-[var(--brand-red)]">Northwest Arkansas</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-xl">
              Protect your home and pets from fleas that bite, spread disease, and make life uncomfortable. Our licensed technicians provide safe, effective, and long-lasting flea control for Northwest Arkansas homes and businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <EstimateButton
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[var(--brand-red)] rounded-full transition-all duration-300 hover:bg-[var(--brand-red-light)] hover:shadow-2xl hover:shadow-[var(--brand-red)]/30 hover:-translate-y-1"
              >
                Get Rid of Fleas Today
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
              src="/fleas.webp"
              alt="Friendly pest control technician treating a home for fleas"
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

      <FleaInfoSection />
      <FleaSignsSection />
      {/* <FleaTargetsSection /> */}
      <WhyChooseFleaControl />
      <ReferralBand
        title="Help a neighbor get rid of fleas for good."
        description={<>Refer someone for flea control and you both snag <span className="text-white font-bold underline underline-offset-4 decoration-white/30">50% OFF</span> your next visit!</>}
      />
      <AreasServedFleaControl />
      <FAQ
        faqs={fleaFaqs}
        title={<>Answers to your <span className="text-[var(--brand-red)]">flea</span> questions</>}
        description="Got a question we didn't answer? Give us a call and we'll be happy to help."
      />
      <ReviewCarousel />
      <CTASection />
      <Footer />
    </div>
  );
}
