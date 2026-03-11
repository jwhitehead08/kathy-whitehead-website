import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, GraduationCap, BookOpen, Heart, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Kathy",
  description:
    "Learn about Kathy Whitehead — former Texas teacher, folk art enthusiast, and award-winning children's book author.",
};

const timeline = [
  {
    year: "[Year]",
    event: "Born and raised in [Location, Texas — please fill in].",
  },
  {
    year: "[Year]",
    event:
      "Earned a degree in [Education / English / etc. — please fill in] from [University — please fill in].",
  },
  {
    year: "[Year range]",
    event:
      "Spent more than two decades teaching [grade level(s)] in Texas public schools, fostering a love of reading and the arts.",
  },
  {
    year: "[Year]",
    event:
      "Published her debut children's book, [Title — please fill in], drawing on her classroom experiences.",
  },
  {
    year: "2005",
    event:
      "Looking for Uncle Louie on the Fourth of July published by Boyds Mills Press.",
  },
  {
    year: "2008",
    event:
      "Art From Her Heart: Folk Artist Clementine Hunter published by Putnam — named an ALA Notable Book.",
  },
  {
    year: "Today",
    event:
      "Continues writing, visiting schools, and championing folk art and multicultural stories for young readers.",
  },
];

export default function BiographyPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-[#276749] to-[#1C4532] text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            About Kathy Whitehead
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Teacher, storyteller, folk art enthusiast — and author of books
            that help children see the beauty in the world around them.
          </p>
        </div>
      </section>

      {/* Accent bar */}
      <div className="h-2 bg-gradient-to-r from-[#276749] via-[#F6AD55] to-[#C53030]" aria-hidden="true" />

      {/* Main bio */}
      <section className="py-16 md:py-20 bg-[#FFFBEB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Photo + quick facts sidebar */}
            <aside className="lg:col-span-1">
              {/* Author photo */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-6">
                <div className="relative h-80 w-full">
                  <Image
                    src="/images/kathy_photo_biography.jpg"
                    alt="Kathy Whitehead, children's author — professional portrait"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 340px"
                  />
                </div>
                <div className="p-5">
                  <h2
                    className="text-xl font-bold text-[#2B6CB0] mb-1"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    Kathy Whitehead
                  </h2>
                  <p className="text-gray-500 text-sm">Children&apos;s Author &amp; Former Teacher</p>
                </div>
              </div>

              {/* Quick facts */}
              <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">
                <h3
                  className="font-bold text-[#C53030] uppercase tracking-wide text-sm"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  Quick Facts
                </h3>
                {[
                  {
                    icon: MapPin,
                    label: "Based in",
                    value: "Texas, USA",
                  },
                  {
                    icon: GraduationCap,
                    label: "Background",
                    value: "20+ years teaching",
                  },
                  {
                    icon: BookOpen,
                    label: "Genre",
                    value: "Children's picture books",
                  },
                  {
                    icon: Heart,
                    label: "Passions",
                    value: "Folk art, family stories, culture",
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon className="h-4 w-4 text-[#F6AD55] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <span className="block text-xs text-gray-400 uppercase tracking-wide">
                        {label}
                      </span>
                      <span className="text-gray-700 text-sm font-medium">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            {/* Main biography text */}
            <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
              <h2
                className="text-2xl md:text-3xl font-bold text-[#2B6CB0]"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                The Story Behind the Stories
              </h2>

              <p>
                Kathy Whitehead grew up in Texas, surrounded by the rich
                cultural tapestry that would later find its way onto the pages
                of her books. From an early age, she was drawn to stories —
                both telling them and finding them in the lives of people around
                her.
              </p>

              <p>
                After earning her degree in education, Kathy spent more than
                two decades as a classroom teacher. Those years in the
                classroom gave her an intimate understanding of what young
                readers need: stories that are vivid, true, and rooted in real
                human experience. She watched children come alive when they saw
                themselves — or someone fascinating — reflected on the page.
              </p>

              <p className="bg-[#FEF3C7] border-l-4 border-[#F6AD55] pl-4 py-2 rounded-r-lg text-[#744210] italic">
                [Add a personal paragraph here — something in your own voice
                about why you started writing, a specific moment that inspired
                you, or what you hope children take away from your books.]
              </p>

              <p>
                Her award-winning biography{" "}
                <em>Art From Her Heart: Folk Artist Clementine Hunter</em>{" "}
                grew out of a fascination with self-taught artists who create
                beauty from whatever materials they have at hand. Clementine
                Hunter — who began painting at age 50 on discarded scraps —
                became a symbol for Kathy of what it means to follow your
                creative impulse no matter the circumstances.
              </p>

              <p>
                <em>Looking for Uncle Louie on the Fourth of July</em>{" "}
                celebrates the vibrant lowrider culture and the kind of family
                traditions that make ordinary days feel extraordinary. Both
                books reflect Kathy&apos;s belief that children&apos;s
                literature should be a mirror and a window — showing readers
                their own world and inviting them into others.
              </p>

              <p>
                Today, Kathy visits schools across the country, sharing her
                books and her love of storytelling with students of all ages.
                She believes every child has stories worth telling — and that
                the right book at the right moment can change a young reader&apos;s
                life.
              </p>

              <p className="text-gray-500 italic text-sm">
                [Add any additional biography information here — awards, speaking
                engagements, organizations you belong to, or personal details
                you&apos;d like readers to know.]
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/school-visits"
                  className="inline-flex items-center gap-2 bg-[#2B6CB0] hover:bg-[#2C5282] text-white font-bold px-5 py-2.5 rounded-full transition-colors duration-150 text-sm"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  Book a School Visit
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-[#2B6CB0] text-[#2B6CB0] hover:bg-[#2B6CB0] hover:text-white font-bold px-5 py-2.5 rounded-full transition-colors duration-150 text-sm"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#2B6CB0] mb-10 text-center"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Career Highlights
          </h2>
          <ol className="relative border-l-2 border-[#F6AD55] space-y-8 ml-4">
            {timeline.map((item, i) => (
              <li key={i} className="pl-6 relative">
                <span
                  className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-[#F6AD55] border-2 border-white shadow"
                  aria-hidden="true"
                />
                <span
                  className="text-xs font-bold text-[#C53030] uppercase tracking-widest"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {item.year}
                </span>
                <p className="text-gray-700 mt-0.5 text-sm leading-relaxed">
                  {item.event}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
