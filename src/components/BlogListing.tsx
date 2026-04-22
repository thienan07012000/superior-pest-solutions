"use client";

import { useState } from "react";
import { BlogCard } from "@/components/BlogCard";
import type { BlogPost } from "@/lib/blog";

const POSTS_PER_PAGE = 6;

interface BlogListingProps {
  posts: BlogPost[];
}

export function BlogListing({ posts }: BlogListingProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of blog grid
    const grid = document.getElementById("blog-grid");
    if (grid) {
      grid.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      {/* Blog Cards Grid */}
      <div
        id="blog-grid"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-mt-32"
      >
        {currentPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-14">
          {/* Previous Button */}
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center w-11 h-11 rounded-full border border-black/10 bg-white text-foreground/70 cursor-pointer transition-all duration-300 hover:bg-[var(--brand-red)] hover:text-white hover:border-[var(--brand-red)] hover:-translate-y-0.5 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-foreground/70 disabled:hover:border-black/10 disabled:hover:translate-y-0"
            aria-label="Previous page"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`flex items-center justify-center w-11 h-11 rounded-full font-semibold text-sm cursor-pointer transition-all duration-300 hover:-translate-y-0.5 ${
                page === currentPage
                  ? "bg-[var(--brand-red)] text-white shadow-lg shadow-[var(--brand-red)]/25"
                  : "border border-black/10 bg-white text-foreground/70 hover:bg-[var(--brand-red)]/10 hover:text-[var(--brand-red)] hover:border-[var(--brand-red)]/20"
              }`}
              aria-label={`Go to page ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center w-11 h-11 rounded-full border border-black/10 bg-white text-foreground/70 cursor-pointer transition-all duration-300 hover:bg-[var(--brand-red)] hover:text-white hover:border-[var(--brand-red)] hover:-translate-y-0.5 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-foreground/70 disabled:hover:border-black/10 disabled:hover:translate-y-0"
            aria-label="Next page"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
