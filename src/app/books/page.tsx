import type { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import { books } from "@/lib/data";
import BookCard from "@/components/BookCard";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Browse all of Kathy Whitehead's published children's books — award-winning picture books celebrating folk art, family, and American culture.",
};

export default function BooksPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-[#2B6CB0] to-[#2C5282] text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            The Books
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            From folk-art biographies to Fourth-of-July celebrations, each of
            Kathy&apos;s books invites young readers into a world of color,
            culture, and community.
          </p>
        </div>
      </section>

      {/* Accent bar */}
      <div className="h-2 bg-gradient-to-r from-[#F6AD55] via-[#C53030] to-[#2B6CB0]" aria-hidden="true" />

      {/* Books — detailed cards */}
      <section className="py-16 md:py-20 bg-[#FFFBEB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          {books.map((book, index) => (
            <article
              key={book.id}
              id={book.id}
              className="scroll-mt-24"
              aria-label={`Book: ${book.title}`}
            >
              {/* Featured card */}
              <BookCard book={book} variant="featured" />

              {/* Reviews */}
              {book.reviews && book.reviews.length > 0 && (
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {book.reviews.map((review, i) => (
                    <blockquote
                      key={i}
                      className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-[#F6AD55]"
                    >
                      <Quote
                        className="h-5 w-5 text-[#F6AD55] mb-2"
                        aria-hidden="true"
                      />
                      <p className="text-gray-700 text-sm leading-relaxed italic mb-2">
                        &ldquo;{review.quote}&rdquo;
                      </p>
                      <footer className="text-gray-400 text-xs font-semibold uppercase tracking-wide">
                        — {review.source}
                      </footer>
                    </blockquote>
                  ))}
                </div>
              )}

              {/* Awards */}
              {book.awards && book.awards.length > 0 && book.awards[0] !== "[Add awards here]" && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {book.awards.map((award) => (
                    <span
                      key={award}
                      className="inline-flex items-center gap-1 bg-[#FEF3C7] border border-[#F6AD55] text-[#744210] text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      <Star className="h-3 w-3 text-[#F6AD55]" aria-hidden="true" />
                      {award}
                    </span>
                  ))}
                </div>
              )}

              {/* Divider between books (not after last) */}
              {index < books.length - 1 && (
                <hr className="mt-16 border-[#F6AD55] border-dashed" />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-[#2B6CB0] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Use These Books in Your Classroom
          </h2>
          <p className="text-blue-200 mb-6">
            Free teaching guides, activities, and discussion questions are
            available in the Resources section.
          </p>
          <a
            href="/resources"
            className="inline-block bg-[#F6AD55] hover:bg-[#FBBE5E] text-[#744210] font-bold px-6 py-3 rounded-full transition-colors duration-150"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Download Free Resources
          </a>
        </div>
      </section>
    </>
  );
}
