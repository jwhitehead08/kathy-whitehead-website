import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, ExternalLink, Star, BookOpen } from "lucide-react";
import type { Book } from "@/lib/data";

interface BookCardProps {
  book: Book;
  variant?: "grid" | "featured";
}

function CoverPlaceholder({ title }: { title: string }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] flex flex-col items-center justify-center p-4 text-center">
      <BookOpen className="h-14 w-14 text-[#F6AD55] mb-2" aria-hidden="true" />
      <p className="text-[#744210] font-semibold text-xs leading-tight line-clamp-2">{title}</p>
      <p className="text-[#92400E] text-xs mt-1 opacity-70">Cover coming soon</p>
    </div>
  );
}

function BookCover({
  book,
  fill = false,
  className = "",
}: {
  book: Book;
  fill?: boolean;
  className?: string;
}) {
  const hasCover = book.coverImage && !book.coverImage.includes("placeholder");
  if (!hasCover) return <CoverPlaceholder title={book.title} />;

  return fill ? (
    <Image
      src={book.coverImage}
      alt={`Cover of ${book.title}`}
      fill
      className={`object-cover ${className}`}
      sizes="(max-width: 768px) 100vw, 256px"
    />
  ) : (
    <Image
      src={book.coverImage}
      alt={`Cover of ${book.title}`}
      width={256}
      height={320}
      className={`w-full h-full object-cover ${className}`}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  );
}

export default function BookCard({ book, variant = "grid" }: BookCardProps) {
  if (variant === "featured") {
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Cover */}
        <div className="relative md:w-64 w-full h-72 md:h-auto flex-shrink-0 overflow-hidden">
          <BookCover book={book} fill />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
          <div>
            {book.awards && book.awards.length > 0 && book.awards[0] !== "[Add awards here]" && (
              <div className="flex flex-wrap gap-2 mb-3">
                {book.awards.slice(0, 2).map((award) => (
                  <span
                    key={award}
                    className="inline-flex items-center gap-1 bg-[#FEF3C7] text-[#744210] text-xs font-semibold px-2 py-1 rounded-full"
                  >
                    <Star className="h-3 w-3 text-[#F6AD55]" aria-hidden="true" />
                    {award}
                  </span>
                ))}
              </div>
            )}
            <h2
              className="text-2xl md:text-3xl font-bold text-[#2B6CB0] mb-1"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              {book.title}
            </h2>
            {book.subtitle && (
              <p className="text-[#C53030] font-semibold mb-2">{book.subtitle}</p>
            )}
            <p className="text-gray-400 text-sm mb-3">
              {book.year} &middot; {book.publisher}
              {book.illustrator ? ` · Illustrated by ${book.illustrator}` : ""}
              {" "}· Ages {book.ages}
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">{book.longDescription}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F6AD55] hover:bg-[#FBBE5E] text-[#744210] font-bold px-4 py-2 rounded-full transition-colors duration-150 text-sm"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              <ShoppingCart className="h-4 w-4" aria-hidden="true" />
              Buy on Amazon
            </a>
            <a
              href={book.bookshopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[#2B6CB0] text-[#2B6CB0] hover:bg-[#2B6CB0] hover:text-white font-bold px-4 py-2 rounded-full transition-colors duration-150 text-sm"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Bookshop.org
            </a>
            <Link
              href={`/books#${book.id}`}
              className="text-sm text-gray-400 hover:text-[#C53030] underline underline-offset-2 self-center transition-colors duration-150"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Grid variant
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col group">
      {/* Cover */}
      <div className="relative w-full h-56 overflow-hidden flex-shrink-0">
        <BookCover book={book} fill className="group-hover:scale-105 transition-transform duration-300" />
        {/* Age badge */}
        <div className="absolute top-3 right-3 bg-[#2B6CB0] text-white text-xs font-bold px-2 py-1 rounded-full">
          Ages {book.ages}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3
          className="text-lg font-bold text-[#2B6CB0] mb-0.5 leading-tight"
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          {book.title}
        </h3>
        {book.subtitle && (
          <p className="text-[#C53030] text-sm font-semibold mb-1">{book.subtitle}</p>
        )}
        <p className="text-gray-400 text-xs mb-2">
          {book.year} &middot; {book.publisher}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
          {book.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          <a
            href={book.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-[#F6AD55] hover:bg-[#FBBE5E] text-[#744210] font-bold px-3 py-2 rounded-full transition-colors duration-150 text-xs"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Amazon
          </a>
          <a
            href={book.bookshopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border-2 border-[#2B6CB0] text-[#2B6CB0] hover:bg-[#2B6CB0] hover:text-white font-bold px-3 py-2 rounded-full transition-colors duration-150 text-xs"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Bookshop.org
          </a>
        </div>
      </div>
    </div>
  );
}
