import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, School, Star, Users, BookOpen } from "lucide-react";
import { books } from "@/lib/data";
import BookCard from "@/components/BookCard";

export const metadata: Metadata = {
  title: "Kathy Whitehead | Children's Author — Home",
  description:
    "Welcome to the official website of Kathy Whitehead, award-winning children's author and former Texas teacher. Discover picture books that celebrate folk art, family, and culture.",
};

const featuredBook = books.find((b) => b.featured) ?? books[0];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#2B6CB0] via-[#2C5282] to-[#1A365D] text-white"
        aria-label="Hero section"
      >
        {/* Decorative folk-art circles */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "#F6AD55", transform: "translate(30%, -30%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: "#C53030", transform: "translate(-30%, 30%)" }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <span
              className="inline-block bg-[#F6AD55] text-[#744210] text-sm font-bold px-4 py-1 rounded-full mb-5"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Award-Winning Children&apos;s Author
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Stories That{" "}
              <span className="text-[#F6AD55]">Paint</span> the World
            </h1>
            <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              Former teacher Kathy Whitehead writes vibrant picture books that
              celebrate folk art, family traditions, and the richness of American
              culture — perfect for curious young readers and the classrooms that
              love them.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="/books"
                className="inline-flex items-center gap-2 bg-[#F6AD55] hover:bg-[#FBBE5E] text-[#744210] font-bold px-6 py-3 rounded-full transition-colors duration-150 text-sm md:text-base"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Explore the Books
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/school-visits"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#2B6CB0] font-bold px-6 py-3 rounded-full transition-colors duration-150 text-sm md:text-base"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                <School className="h-4 w-4" aria-hidden="true" />
                Book a School Visit
              </Link>
            </div>
          </div>

          {/* Author photo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="relative w-52 h-52 md:w-72 md:h-72">
              <div
                className="absolute inset-0 rounded-2xl bg-[#F6AD55] rotate-6 shadow-xl"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 rounded-2xl bg-[#C53030] -rotate-3 shadow-xl"
                aria-hidden="true"
              />
              <div className="relative rounded-2xl shadow-2xl overflow-hidden w-full h-full">
                <Image
                  src="/images/kathy_photo_home.jpg"
                  alt="Kathy Whitehead, children's author, sitting on a porch holding one of her books"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 208px, 288px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats / trust bar ── */}
      <section className="bg-[#C53030] text-white py-8" aria-label="Highlights">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: BookOpen, label: "Published Books", value: "3+" },
              { icon: Star, label: "ALA Notable", value: "Award" },
              { icon: Users, label: "School Visits", value: "100s" },
              { icon: School, label: "Years Teaching", value: "20+" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon className="h-6 w-6 text-[#F6AD55]" aria-hidden="true" />
                <span
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {value}
                </span>
                <span className="text-red-200 text-xs uppercase tracking-wide">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Book ── */}
      <section className="py-16 md:py-20 bg-[#FFFBEB]" aria-label="Featured book">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#2B6CB0] mb-2"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Featured Book
            </h2>
            <div className="w-16 h-1 bg-[#F6AD55] mx-auto rounded-full" />
          </div>
          <BookCard book={featuredBook} variant="featured" />
        </div>
      </section>

      {/* ── All Books preview ── */}
      <section className="py-16 md:py-20 bg-white" aria-label="Book collection">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#2B6CB0] mb-2"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                All Books
              </h2>
              <div className="w-16 h-1 bg-[#F6AD55] rounded-full" />
            </div>
            <Link
              href="/books"
              className="inline-flex items-center gap-1 text-[#2B6CB0] hover:text-[#C53030] font-semibold transition-colors duration-150 text-sm"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              View all books
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* ── About snippet ── */}
      <section
        className="py-16 md:py-20 bg-[#FFFBEB]"
        aria-label="About the author"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#2B6CB0] mb-4"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              About Kathy
            </h2>
            <div className="w-16 h-1 bg-[#F6AD55] mx-auto rounded-full mb-6" />
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Kathy Whitehead spent more than two decades in Texas classrooms
              before turning her passion for storytelling into award-winning
              picture books. Her writing is rooted in a deep love of American
              folk art, family traditions, and the belief that every child
              deserves to see their culture celebrated on the page.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              [Add a personal note here — a sentence or two in your own voice
              about what drives your writing.]
            </p>
            <Link
              href="/biography"
              className="inline-flex items-center gap-2 bg-[#2B6CB0] hover:bg-[#2C5282] text-white font-bold px-6 py-3 rounded-full transition-colors duration-150"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Read Full Biography
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── School Visits CTA ── */}
      <section
        className="py-16 md:py-20 bg-gradient-to-r from-[#C53030] to-[#9B2C2C] text-white"
        aria-label="School visits call to action"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <School
            className="h-12 w-12 text-[#F6AD55] mx-auto mb-4"
            aria-hidden="true"
          />
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Bring Kathy to Your School
          </h2>
          <p className="text-red-100 text-lg max-w-2xl mx-auto mb-8">
            Kathy offers engaging author visits for students of all ages — combining
            storytelling, art history, and a love of reading into an unforgettable
            experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/school-visits"
              className="inline-flex items-center gap-2 bg-[#F6AD55] hover:bg-[#FBBE5E] text-[#744210] font-bold px-6 py-3 rounded-full transition-colors duration-150"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Learn About School Visits
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#C53030] font-bold px-6 py-3 rounded-full transition-colors duration-150"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Contact Kathy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
