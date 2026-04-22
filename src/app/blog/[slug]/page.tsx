import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Parse inline [text](url) links within a string
  const renderInline = (text: string, baseKey: number): React.ReactNode => {
    const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
    if (parts.length === 1) return text;
    return parts.map((part, i) => {
      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        const [, label, href] = linkMatch;
        const isExternal = /^https?:\/\//.test(href);
        return (
          <a
            key={`${baseKey}-l${i}`}
            href={href}
            rel="nofollow"
            {...(isExternal ? { target: "_blank" } : {})}
            className="text-[var(--brand-red)] underline underline-offset-2 hover:text-[var(--brand-red)]/70 transition-colors duration-200"
          >
            {label}
          </a>
        );
      }
      return part;
    });
  };

  // Simple markdown-like rendering for our content
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let key = 0;

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={key++} className="space-y-2 mb-6 pl-1">
            {currentList.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/75 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-red)] mt-2.5 shrink-0" />
                <span>{renderInline(item, i)}</span>
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      if (!trimmed) {
        flushList();
        continue;
      }

      // Headings
      if (trimmed.startsWith("#### ")) {
        flushList();
        const k = key++;
        elements.push(
          <h4 key={k} className="text-lg md:text-xl font-bold text-foreground mt-8 mb-3">
            {renderInline(trimmed.replace("#### ", ""), k)}
          </h4>
        );
        continue;
      }

      if (trimmed.startsWith("### ")) {
        flushList();
        const k = key++;
        elements.push(
          <h3 key={k} className="text-xl md:text-2xl font-bold text-foreground mt-9 mb-4">
            {renderInline(trimmed.replace("### ", ""), k)}
          </h3>
        );
        continue;
      }

      if (trimmed.startsWith("## ")) {
        flushList();
        const k = key++;
        elements.push(
          <h2 key={k} className="text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">
            {renderInline(trimmed.replace("## ", ""), k)}
          </h2>
        );
        continue;
      }

      // Inline image: ![alt](src)
      const imageMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
      if (imageMatch) {
        flushList();
        const [, alt, src] = imageMatch;
        elements.push(
          <figure key={key++} className="my-8">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.10)]">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 1600px) 100vw, 1600px"
                className="object-cover"
                quality={90}
              />
            </div>
            {alt && (
              <figcaption className="text-sm text-foreground/75 mt-3 text-center italic">
                {alt}
              </figcaption>
            )}
          </figure>
        );
        continue;
      }

      // List items
      if (trimmed.startsWith("- ")) {
        currentList.push(trimmed.replace("- ", ""));
        continue;
      }

      // Bold paragraph
      if (trimmed.startsWith("**") && trimmed.includes("**")) {
        flushList();
        const boldMatch = trimmed.match(/^\*\*(.+?)\*\*\s*(.*)/);
        if (boldMatch) {
          const k = key++;
          elements.push(
            <p key={k} className="text-foreground/80 leading-relaxed mb-4">
              <strong className="text-foreground font-semibold">{renderInline(boldMatch[1], k)}</strong>{" "}
              {renderInline(boldMatch[2], k + 1000)}
            </p>
          );
          continue;
        }
      }

      // Regular paragraph
      flushList();
      const k = key++;
      elements.push(
        <p key={k} className="text-foreground/75 leading-relaxed mb-4 text-lg">
          {renderInline(trimmed, k)}
        </p>
      );
    }

    flushList();
    return elements;
  };

  return (
    <div className="flex flex-col w-full relative">
      {/* Hero Section */}
      <section className="relative w-full pt-28 pb-12 md:pt-36 md:pb-16 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-red)]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
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

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--brand-red)]/10 text-[var(--brand-red)] text-xs font-semibold">
              {post.minRead} min read
            </div>
            <span className="text-sm text-foreground/75">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-foreground/30" />
            <Link
              href={`/blog/author/${post.authorSlug}`}
              className="text-sm text-[var(--brand-red)] font-medium underline underline-offset-2 hover:text-[var(--brand-red)]/80 transition-colors duration-300"
            >
              {post.author}
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground leading-[1.1] mb-6">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-10 max-w-2xl">
            {post.description}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="w-full bg-background">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="relative w-full h-[350px] md:h-[580px] rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(max-width: 1600px) 100vw, 1600px"
              className="object-cover"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="w-full py-12 md:py-16 bg-background">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          {renderContent(post.content)}
        </div>
      </article>

      {/* Divider */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full">
        <div className="border-t border-black/10" />
      </div>

      {/* Back to blog */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-10 w-full">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-black/10 text-foreground/70 font-semibold transition-all duration-300 hover:bg-[var(--brand-red)] hover:text-white hover:border-[var(--brand-red)] hover:-translate-y-0.5 hover:shadow-lg group"
        >
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Browse All Articles
        </Link>
      </div>

      <CTASection />
      <Footer />
    </div>
  );
}
