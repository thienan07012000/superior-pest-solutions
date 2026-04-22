import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAuthors, getAuthorBySlug, getPostsByAuthor } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

interface AuthorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const authors = getAuthors();
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

export async function generateMetadata({
  params,
}: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return { title: "Author Not Found" };
  }

  return {
    title: `${author.name} | Superior Pest Solutions Blog`,
    description: author.bio,
    alternates: {
      canonical: `/blog/author/${author.slug}`,
    },
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const posts = getPostsByAuthor(author.slug);

  return (
    <div className="flex flex-col w-full relative">
      {/* Hero Section */}
      <section className="relative w-full pt-28 pb-12 md:pt-36 md:pb-16 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-red)]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          {/* Back link */}
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

          {/* Author Card */}
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10">
            {/* Author Image */}
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.1)] border-2 border-white shrink-0">
              <Image
                src={author.image}
                alt={author.name}
                fill
                sizes="144px"
                className="object-contain"
                priority
              />
            </div>

            {/* Author Info */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--brand-red)]/10 text-[var(--brand-red)] text-xs font-semibold mb-4">
                Author
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold text-foreground leading-[1.1] mb-4">
                {author.name}
              </h1>

              <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
                {author.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles by Author */}
      <section className="w-full pb-16 md:pb-24 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Articles
            </h2>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--brand-red)]/10 text-[var(--brand-red)] text-sm font-bold">
              {posts.length}
            </span>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-foreground/60 text-lg">
              No articles published yet.
            </p>
          )}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
