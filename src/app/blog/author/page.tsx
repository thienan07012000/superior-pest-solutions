import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAuthors, getPostsByAuthor } from "@/lib/blog";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog Authors | Superior Pest Solutions",
  description:
    "Meet the team behind the Superior Pest Solutions blog. Expert pest control advice from licensed professionals serving Northwest Arkansas.",
  alternates: {
    canonical: "/blog/author",
  },
};

export default function AuthorsPage() {
  const authors = getAuthors();

  return (
    <div className="flex flex-col w-full relative">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-20 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-red)]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-[var(--brand-red)] transition-colors duration-300 mb-8 group"
            >
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span className="font-medium">Back to Blog</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-black/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-red)] animate-pulse" />
              <span className="text-secondary font-medium tracking-wide uppercase text-foreground/80">
                Our Authors
              </span>
            </div>

            <h1 className="mb-6 text-foreground">
              Meet the{" "}
              <span className="text-[var(--brand-red)]">Team</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/75 leading-relaxed max-w-2xl">
              The people behind our pest control expertise. Real knowledge from
              real professionals who care about keeping your home safe.
            </p>
          </div>
        </div>
      </section>

      {/* Author Cards */}
      <section className="w-full pb-16 md:pb-24 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author) => {
              const postCount = getPostsByAuthor(author.slug).length;
              return (
                <Link
                  key={author.slug}
                  href={`/blog/author/${author.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] cursor-pointer"
                >
                  {/* Author Image */}
                  <div className="relative w-full h-[220px] overflow-hidden bg-gradient-to-br from-[var(--brand-red)]/10 to-[var(--brand-red)]/5">
                    <Image
                      src={author.image}
                      alt={author.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-6">
                    <h2 className="text-lg font-bold text-foreground leading-snug mb-2 group-hover:text-[var(--brand-red)] transition-colors duration-300">
                      {author.name}
                    </h2>

                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="text-sm text-foreground/50 font-medium">
                        {postCount} {postCount === 1 ? "article" : "articles"}
                      </span>
                    </div>

                    <p className="text-foreground/65 text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
                      {author.bio}
                    </p>

                    <div className="flex items-center gap-2 text-[var(--brand-red)] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      <span>View Articles</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
