import type { Metadata } from "next";
import Link from "next/link";
import EstimateButton from "@/components/EstimateButton";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { services } from "@/constants/services";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} Control Services | Superior Pest Solutions`,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full min-h-screen pt-20">
      {/* 
        Hero Section for specific service
      */}
      <section className="relative py-24 md:py-32 bg-background overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-[var(--brand-red)] transition-colors mb-12 font-medium group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back to All Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-black/5 mb-8">
                <span className="w-2 h-2 rounded-full bg-[var(--brand-red)]" />
                <span className="text-secondary font-medium tracking-wide uppercase text-foreground/80">Expert Solution</span>
              </div>
              
              <h1 className="mb-6 text-foreground">
                Professional <span className="text-[var(--brand-red)]">{service.title}</span> Control
              </h1>
              
              <p className="text-xl text-foreground/80 leading-relaxed mb-10 max-w-xl">
                {service.description} We use specialized techniques to identify nesting sites and eliminate the problem at its source, ensuring long-term protection for your home.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
                {[
                  "Free Inspection",
                  "Safe for Pets & Kids",
                  "Guaranteed Results",
                  "Local Technicians",
                  "Fast Response Time",
                  "Same Day Service"
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[var(--brand-red)]" />
                    <span className="text-lg font-medium text-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>

              <EstimateButton
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-[var(--brand-red)] rounded-full transition-all duration-300 hover:bg-[var(--brand-red-light)] hover:shadow-2xl hover:shadow-[var(--brand-red)]/30 hover:-translate-y-1"
              >
                Request Free Estimate
              </EstimateButton>
            </div>

            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full bg-white rounded-[3rem] p-12 md:p-20 shadow-[0_32px_80px_-16px_rgba(139,0,0,0.1)] flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-red)]/5 to-transparent pointer-events-none" />
              <div className="relative w-full h-full transform transition-transform duration-700 group-hover:scale-110">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--brand-red)]/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* 
        Optional Content Section
      */}
      <section className="py-24 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="mb-8">How We Solve Your <span className="text-[var(--brand-red)]">{service.title}</span> Problem</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Our process is designed to be thorough yet non-disruptive. We start with a comprehensive site assessment to understand the extent of the infestation. Our expert technicians then apply targeted treatments that are both lethal to pests and safe for your family and pets.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              We don't just treat the symptoms; we address the cause. By sealing entry points and advising on preventive measures, we make sure that once the {service.title.toLowerCase()} are gone, they stay gone.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}
