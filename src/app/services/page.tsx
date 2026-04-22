import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services as defaultServices } from "@/constants/services";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ReferralBand } from "@/components/ReferralBand";
import { Process } from "@/components/Process";
import { WhoWeWorkWith } from "@/components/WhoWeWorkWith";
import ReviewCarousel from "@/components/ReviewCarousel";

const optimizedServices = [
  {
    ...defaultServices[0], // Ants
    description: "Ants are sneaky. They get into your food and hide in your walls. We find where they come from and stop the whole colony for you."
  },
  {
    ...defaultServices[1], // Spiders
    description: "We clear out webs from your garage or porch so you don't have to worry about walking into them. We also make sure they don't come back."
  },
  {
    ...defaultServices[2], // Roaches
    description: "Roaches are hard to get rid of alone. We use special tools to find where they hide and clear them out fast."
  },
  {
    ...defaultServices[3], // Rodents
    description: "Mice can chew on wires and make a mess. We catch them and seal up any tiny holes so they can’t sneak back into your house."
  },
  {
    ...defaultServices[4], // Mosquitoes
    description: "Mosquitoes ruin time outside. We treat your yard to stop them from growing and keep your family from getting bitten."
  },
  {
    ...defaultServices[5], // Bed Bugs
    description: "Bed bugs hide in your bed and bite while you sleep. We use safe ways to get rid of them so you can sleep well again."
  },
  {
    ...defaultServices[6], // Fleas
    description: "Fleas jump on you and your pets. We clear them out of your carpets and blankets to make your home feel clean again."
  },
  {
    ...defaultServices[7], // Silverfish
    description: "Silverfish love damp spots and can ruin your books or clothes. We find where they hide and stop them before they do damage."
  },
  {
    ...defaultServices[8], // Wasps
    description: "Wasps build nests around your home and sting when they feel threatened. We find every nest and remove it safely."
  }
];

const optimizedProcessSteps = [
  {
    number: "1",
    title: "We Do It Right",
    description: "We use safe ways to get the job done. We don't take any shortcuts or guess what's wrong."
  },
  {
    number: "2",
    title: "Bugs Come Back? So Do We.",
    description: "If you still see bugs after we visit, we’ll come back and help for free. That is our promise to you."
  },
  {
    number: "3",
    title: "People Like Our Work",
    description: "Our neighbors trust us and tell their friends. We are honest, we show up on time, and we get it done."
  },
  {
    number: "4",
    title: "We Show Up On Time",
    description: "Just call or text us and we will be there. You won't have to sit around all day waiting for us."
  },
  {
    number: "5",
    title: "We Live Here Too",
    description: "Our team lives right here in town. They know which bugs are active and the best ways to stop them."
  },
  {
    number: "6",
    title: "Six Years and Counting",
    description: "We have been helping people here for six years. Our clients keep coming back because they know we care."
  }
];

export const metadata: Metadata = {
  title:
    "BEST Pest Control Services Fayetteville AR - Termite, Roach, Ant, Bed Bug, Mosquito, Rodent & Spider Exterminator near me - Superior Pest Solutions NW Arkansas",
  description:
    "Superior Pest Solutions offers a full range of pest control services in Fayetteville & NW Arkansas. Ants, spiders, roaches, rodents, mosquitoes, bed bugs, fleas, silverfish & termites - we handle them all with safe, guaranteed methods and free estimates.",
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-20">
      {/* 
        Hero Section 
        Background matches home page hero background (--background: #f5f1ea)
      */}
      <section className="relative pt-24 pb-0 bg-background overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-black/5 mb-8 transform transition hover:scale-105">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-red)] animate-pulse" />
              <span className="text-secondary font-medium tracking-wide uppercase text-foreground/80">Premium Protection</span>
            </div>
            
            <h1 className="mb-8 text-foreground text-center">
              Simple ways to keep the <span className="text-[var(--brand-red)]">bugs away</span>.
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-0 text-center">
              We know it’s annoying to find bugs in your house. Our team uses safe and easy methods to clear them out so you can just relax and enjoy your home again.
            </p>
          </div>
        </div>
        
      </section>

      {/* 
        Services Grid Section
        Listing cards just like on home page
      */}
      <section className="pt-12 pb-16 md:pb-32 bg-background relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optimizedServices.map((service, index) => {
              return (
                <Link
                  key={index}
                  href={service.customHref || `/services/${service.slug}`}
                  className="group relative bg-white p-8 rounded-[2.5rem] border-2 border-gray-100 hover:border-[var(--brand-red)]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--brand-red)]/10 overflow-hidden flex flex-col"
                >
                  {/* Subtle gradient sweep on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-red)]/0 to-[var(--brand-red)]/0 group-hover:from-[var(--brand-red)]/5 transition-colors duration-500 opacity-0 group-hover:opacity-100" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-5 mb-8 transition-all duration-300 text-foreground group-hover:translate-x-1">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <div className={`absolute inset-0 flex items-center justify-center ${service.isExtraLarge ? 'scale-[1.6] -translate-x-1 -translate-y-1' : (service.isLarge ? 'scale-[1.2] -translate-x-0.5 -translate-y-0.5' : 'scale-100')} transition-transform duration-300`}>
                          <Image
                            src={service.icon}
                            alt={`${service.title} icon`}
                            width={100}
                            height={100}
                            sizes="100px"
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-foreground/70 text-lg leading-relaxed flex-grow pr-4">
                      {service.description}
                    </p>
                    
                    <div className="mt-8 flex items-center gap-2 text-[var(--brand-red)] font-semibold text-lg transition-all duration-300 group-hover:gap-4">
                      Explore Service
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>

                  {/* Top-right decorative circle */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-gray-50 rounded-full group-hover:bg-[var(--brand-red)]/10 transition-colors duration-500" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ReferralBand 
        title="Know someone who is finding bugs?"
        description={<>Tell them about us and you’ll both get <span className="text-white font-bold underline underline-offset-4 decoration-white/30">half off</span> your next visit.</>}
      />
      
      <Process 
        steps={optimizedProcessSteps}
        title={<>How we take care of your <span className="text-[var(--brand-red)]">home</span>.</>}
        description={
          <>
            <p>
              We don’t just spray and leave. We look at every part of your house to find where the bugs are hiding. Our team knows exactly what to look for and how to fix it fast.
            </p>
            <p>
              We want to make sure the bugs stay gone for good. That’s why we use safe products and check back to make sure everything is okay. It’s the easiest way to keep your home clean.
            </p>
          </>
        }
      />
      
      <WhoWeWorkWith 
        title={<>We help everyone in <span className="text-[var(--brand-red)]">town</span>.</>}
        description="Whether you have your own house or run a small shop, we can help you get rid of pests and keep it that way."
      />
      <ReviewCarousel />
 
      <CTASection 
        title={<>Ready to have a <span className="text-[var(--brand-red)]">clean home?</span></>}
        description="Don't let bugs run your life. Our team is ready to help you out and make things right. Give us a call or send a note for a free price quote."
      />
      <Footer />
    </div>
  );
}
