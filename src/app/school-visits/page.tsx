import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  School,
  Clock,
  Users,
  MapPin,
  CheckCircle,
  Mail,
  DollarSign,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "School Visits",
  description:
    "Book Kathy Whitehead for an author visit at your school. She offers engaging presentations on storytelling, folk art, and creative writing for students of all ages.",
};

const visitTypes = [
  {
    title: "Picture Book Presentation",
    grades: "Pre-K – Grade 2",
    duration: "30–45 minutes",
    description:
      "An interactive read-aloud and discussion of one of Kathy's picture books, with activities connecting the story to art, family, and community. Perfect for early childhood classrooms.",
    icon: "📖",
  },
  {
    title: "Author Craft Workshop",
    grades: "Grades 3–5",
    duration: "45–60 minutes",
    description:
      "Students explore the writing process — from finding inspiration to revision — using Kathy's books as models. Includes a hands-on writing activity.",
    icon: "✏️",
  },
  {
    title: "Folk Art & Storytelling",
    grades: "Grades 3–8",
    duration: "60 minutes",
    description:
      "A multimedia presentation connecting Clementine Hunter's folk art to the art of storytelling. Students discover how visual art and written narrative can tell the same story.",
    icon: "🎨",
  },
  {
    title: "Full-Day Residency",
    grades: "All grades",
    duration: "Full school day",
    description:
      "Multiple presentations, classroom workshops, and a Q&A panel. Ideal for literacy events, book fairs, and Title I schools seeking an immersive author experience.",
    icon: "🌟",
  },
];

const faqs = [
  {
    q: "Where does Kathy travel for visits?",
    a: "Kathy is based in Texas and welcomes visits throughout the state. She also travels nationally — please inquire about travel arrangements for out-of-state visits.",
  },
  {
    q: "How far in advance should we book?",
    a: "School visits fill up quickly, especially in the fall and spring. We recommend booking at least 6–8 weeks in advance. For full-day residencies or conference appearances, 3–6 months is ideal.",
  },
  {
    q: "What are the fees?",
    a: "Fees vary depending on visit type, number of sessions, and travel required. Please contact Kathy directly for a quote. Title I schools and non-profits may qualify for reduced fees.",
  },
  {
    q: "Does Kathy do virtual visits?",
    a: "Yes! Virtual visits are available for classrooms that cannot accommodate an in-person visit. These are offered via Zoom or Google Meet and can be recorded with permission.",
  },
  {
    q: "Will books be available for purchase?",
    a: "We strongly encourage coordinating with a local bookstore or your school library to have books available for signing. Kathy is happy to recommend vendors.",
  },
  {
    q: "What technology does Kathy need?",
    a: "For in-person visits: a projector or large screen with an HDMI connection, a lapel or handheld microphone for larger groups, and a sturdy table for books. Full tech requirements are in the visit confirmation packet.",
  },
];

export default function SchoolVisitsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-[#C53030] to-[#9B2C2C] text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <School
            className="h-14 w-14 text-[#F6AD55] mx-auto mb-4"
            aria-hidden="true"
          />
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            School Visits
          </h1>
          <p className="text-red-100 text-lg max-w-2xl mx-auto">
            Bring the magic of Kathy&apos;s books to life in your classroom. Her
            visits inspire students to read, write, and see the world through
            the lens of art and story.
          </p>
        </div>
      </section>

      {/* Accent bar */}
      <div className="h-2 bg-gradient-to-r from-[#C53030] via-[#F6AD55] to-[#2B6CB0]" aria-hidden="true" />

      {/* Visit types */}
      <section className="py-16 md:py-20 bg-[#FFFBEB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#2B6CB0] mb-3"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Visit Formats
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Choose the program that best fits your students&apos; ages and your
              school&apos;s goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visitTypes.map((visit) => (
              <div
                key={visit.title}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#F6AD55]"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl" aria-hidden="true">
                    {visit.icon}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="text-lg font-bold text-[#2B6CB0] mb-1"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      {visit.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                        <Users className="h-3 w-3 text-[#F6AD55]" aria-hidden="true" />
                        {visit.grades}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3 text-[#F6AD55]" aria-hidden="true" />
                        {visit.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {visit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold text-[#2B6CB0] mb-6"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                What to Expect
              </h2>
              <ul className="space-y-4">
                {[
                  "Lively, interactive presentations tailored to your grade level",
                  "Real stories about how books are written and published",
                  "Connections to visual art, history, and cultural heritage",
                  "Age-appropriate Q&A and student participation",
                  "Preparation materials sent in advance so teachers can pre-teach",
                  "Book signing opportunities for students and staff",
                  "A follow-up email with extension activities and discussion guides",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      className="h-5 w-5 text-[#276749] flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visit photo + logistics */}
            <div className="flex flex-col gap-6">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/kathy_photo_visits.jpg"
                  alt="Kathy Whitehead presenting to a group of children at a school visit"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

            {/* Quick logistics */}
            <div className="bg-[#FFFBEB] rounded-2xl p-6 shadow-md">
              <h3
                className="text-xl font-bold text-[#C53030] mb-5"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Logistics at a Glance
              </h3>
              <dl className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    dt: "Location",
                    dd: "In-person (Texas + national) or virtual via Zoom",
                  },
                  {
                    icon: Clock,
                    dt: "Lead Time",
                    dd: "Book 6–8 weeks ahead; residencies 3–6 months",
                  },
                  {
                    icon: Users,
                    dt: "Group Size",
                    dd: "Up to 150 students per session (larger with a PA system)",
                  },
                  {
                    icon: DollarSign,
                    dt: "Fees",
                    dd: "Contact for quote; Title I pricing available",
                  },
                  {
                    icon: Star,
                    dt: "Add-ons",
                    dd: "Book bundles, signed bookplates, and teacher kits available",
                  },
                ].map(({ icon: Icon, dt, dd }) => (
                  <div key={dt} className="flex items-start gap-3">
                    <Icon
                      className="h-4 w-4 text-[#F6AD55] flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                        {dt}
                      </dt>
                      <dd className="text-gray-700 text-sm">{dd}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-[#FFFBEB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#2B6CB0] mb-10 text-center"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
          <dl className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-[#2B6CB0]"
              >
                <dt
                  className="font-bold text-gray-800 mb-2"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {faq.q}
                </dt>
                <dd className="text-gray-600 text-sm leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2B6CB0] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <Mail className="h-10 w-10 text-[#F6AD55] mx-auto mb-4" aria-hidden="true" />
          <h2
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Ready to Book?
          </h2>
          <p className="text-blue-200 mb-6">
            Fill out the contact form and Kathy will get back to you within
            2–3 business days to discuss availability and details.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#F6AD55] hover:bg-[#FBBE5E] text-[#744210] font-bold px-8 py-3 rounded-full transition-colors duration-150"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Request a Visit
          </Link>
        </div>
      </section>
    </>
  );
}
