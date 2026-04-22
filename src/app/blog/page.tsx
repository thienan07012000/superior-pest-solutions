import type { Metadata } from "next";
import { BlogListing } from "@/components/BlogListing";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Pest Control Blog | Tips, Guides & Expert Advice",
  description:
    "Helpful pest control tips, guides, and expert advice from Superior Pest Solutions. Learn how to protect your Northwest Arkansas home from termites, ants, bed bugs, mosquitoes, and more.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="flex flex-col w-full relative">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-20 bg-background overflow-hidden">
        {/* Decorative background elements removed */}


        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-black/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-red)] animate-pulse" />
              <span className="text-secondary font-medium tracking-wide uppercase text-foreground/80">
                Our Blog
              </span>
            </div>

            <h1 className="mb-6 text-foreground">
              Pest Control Tips &{" "}
              <span className="text-[var(--brand-red)]">Expert Advice</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/75 leading-relaxed max-w-2xl">
              Real, practical advice from our team. We share what we know about
              keeping your home pest-free so you can stay ahead of problems
              before they start.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="w-full pb-16 md:pb-24 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <BlogListing posts={posts} />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={
          <>
            Got a pest problem{" "}
            <span className="text-[var(--brand-red)]">right now?</span>
          </>
        }
        description={
          <>
            Don&apos;t wait for it to get worse. Give us a call or fill out the
            form and we&apos;ll get back to you within an hour. Free estimates,
            no pressure.
          </>
        }
      />
      <Footer />
    </div>
  );
}
