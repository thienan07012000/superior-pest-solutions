"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/blog/${post.slug}`)}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full h-[220px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Read time badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-foreground/80 shadow-sm border border-black/5">
          {post.minRead} min read
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        {/* Meta info */}
        <div className="flex items-center gap-2 mb-3">
          <Link
            href={`/blog/author/${post.authorSlug}`}
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-[var(--brand-red)] font-medium underline underline-offset-2 hover:text-[var(--brand-red)]/80 transition-colors duration-300 relative z-10"
          >
            {post.author}
          </Link>
          <span className="w-1 h-1 rounded-full bg-foreground/30 shrink-0" />
          <span className="text-xs text-foreground/75 shrink-0">{post.date}</span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-foreground leading-snug mb-3 group-hover:text-[var(--brand-red)] transition-colors duration-300 line-clamp-2">
          {post.title}
        </h2>

        {/* Description */}
        <p className="text-foreground/65 text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
          {post.description}
        </p>

        {/* Read button */}
        <div className="flex items-center gap-2 text-[var(--brand-red)] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
          <span>Read Article</span>
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
    </div>
  );
}
