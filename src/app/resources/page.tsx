import type { Metadata } from "next";
import { Download, ExternalLink, BookOpen, Palette, PenLine, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources for Teachers & Kids",
  description:
    "Free downloadable teacher guides, activity sheets, and discussion questions for Kathy Whitehead's children's books.",
};

const guides = [
  {
    book: "Art From Her Heart",
    subtitle: "Folk Artist Clementine Hunter",
    color: "#2B6CB0",
    items: [
      {
        label: "Teacher's Guide (PDF)",
        description:
          "Standards-aligned discussion questions, vocabulary, and extension activities for grades K–5.",
        icon: Download,
        href: "/resources/art-from-her-heart-teacher-guide.pdf",
        type: "Download",
      },
      {
        label: "Folk Art Activity Sheet",
        description:
          "Students create their own folk-art scenes inspired by Clementine Hunter's style.",
        icon: Download,
        href: "/resources/art-from-her-heart-activity.pdf",
        type: "Download",
      },
      {
        label: "Discussion Questions",
        description:
          "Open-ended questions to spark conversation about art, perseverance, and self-expression.",
        icon: Download,
        href: "/resources/art-from-her-heart-discussion.pdf",
        type: "Download",
      },
    ],
  },
  {
    book: "Looking for Uncle Louie",
    subtitle: "on the Fourth of July",
    color: "#C53030",
    items: [
      {
        label: "Teacher's Guide (PDF)",
        description:
          "Lesson plans connecting the book to social studies, community, and cultural traditions.",
        icon: Download,
        href: "/resources/uncle-louie-teacher-guide.pdf",
        type: "Download",
      },
      {
        label: "Lowrider Art Activity",
        description:
          "Design your own lowrider! A creative art activity connecting the story to visual culture.",
        icon: Download,
        href: "/resources/uncle-louie-activity.pdf",
        type: "Download",
      },
    ],
  },
];

const externalLinks = [
  {
    label: "Clementine Hunter at the Smithsonian",
    description:
      "Explore the Smithsonian's collection of Clementine Hunter's work — perfect for supplementing Art From Her Heart.",
    href: "https://americanart.si.edu/artist/clementine-hunter-2327",
    icon: ExternalLink,
  },
  {
    label: "ReadWriteThink — Picturebook Biographies",
    description:
      "IRA/NCTE lesson plans for using picture book biographies in the classroom.",
    href: "https://www.readwritethink.org/",
    icon: ExternalLink,
  },
  {
    label: "Library of Congress Teaching with Primary Sources",
    description:
      "Primary source sets related to American folk art and Louisiana history that pair beautifully with Kathy's books.",
    href: "https://www.loc.gov/programs/teachers/",
    icon: ExternalLink,
  },
];

const activities = [
  {
    icon: Palette,
    title: "Make Your Own Folk Art",
    grades: "Grades K–5",
    time: "30–45 min",
    description:
      "Using whatever art supplies you have on hand — like Clementine Hunter did — create a scene from your own life or neighborhood. No art experience required!",
    steps: [
      "Look at examples of folk art (your teacher will show you some).",
      "Think about a scene from your own life — a family meal, a celebration, a place you love.",
      "Sketch the scene simply, focusing on shapes and bold colors.",
      "Paint or color it in bright, vivid hues.",
      "Write a one-sentence caption describing what&apos;s happening in your picture.",
    ],
  },
  {
    icon: PenLine,
    title: "Write a Family Tradition Story",
    grades: "Grades 2–6",
    time: "45–60 min",
    description:
      "Inspired by Looking for Uncle Louie, write a short story about a family tradition or holiday celebration in your own family.",
    steps: [
      "Brainstorm one tradition or celebration that matters to your family.",
      "List three sensory details: a sound, a smell, and a sight from that tradition.",
      "Draft a short story (1–2 pages) in which something unexpected happens during the celebration.",
      "Revise for vivid verbs and specific details.",
      "Share with a partner and ask: did they feel like they were there?",
    ],
  },
  {
    icon: Users,
    title: "Community Mural Project",
    grades: "Grades 3–8",
    time: "Multi-day",
    description:
      "A collaborative class art project in the spirit of folk art — each student contributes one panel to a larger mural celebrating your school community.",
    steps: [
      "As a class, decide on a theme (e.g., 'Our School Community,' 'What We Love About Our Town').",
      "Divide a large paper or bulletin board into equal panels — one per student.",
      "Each student designs and paints their panel in a folk-art style.",
      "Assemble the panels into a single mural.",
      "Display it in a hallway and hold a 'gallery walk' where students explain their panels.",
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-[#744210] to-[#92400E] text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen
            className="h-14 w-14 text-[#F6AD55] mx-auto mb-4"
            aria-hidden="true"
          />
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Resources for Teachers &amp; Kids
          </h1>
          <p className="text-yellow-100 text-lg max-w-2xl mx-auto">
            Free guides, activity sheets, and classroom ideas to bring Kathy&apos;s
            books to life. No budget required — just curiosity and creativity.
          </p>
        </div>
      </section>

      {/* Accent bar */}
      <div className="h-2 bg-gradient-to-r from-[#744210] via-[#F6AD55] to-[#276749]" aria-hidden="true" />

      {/* Downloadable guides */}
      <section className="py-16 md:py-20 bg-[#FFFBEB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#2B6CB0] mb-2"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Teacher&apos;s Guides &amp; Downloads
          </h2>
          <p className="text-gray-500 mb-10 text-sm">
            All materials are free to download and reproduce for classroom use.
          </p>

          <div className="space-y-10">
            {guides.map((guide) => (
              <div key={guide.book}>
                <h3
                  className="text-lg font-bold mb-1"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    color: guide.color,
                  }}
                >
                  {guide.book}
                </h3>
                {guide.subtitle && (
                  <p className="text-gray-400 text-sm mb-4 italic">{guide.subtitle}</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {guide.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 flex flex-col gap-2"
                    >
                      <div className="flex items-center gap-2">
                        <item.icon
                          className="h-5 w-5 text-[#F6AD55]"
                          aria-hidden="true"
                        />
                        <span
                          className="font-bold text-sm text-gray-800 group-hover:text-[#2B6CB0] transition-colors"
                          style={{ fontFamily: "'Quicksand', sans-serif" }}
                        >
                          {item.label}
                        </span>
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {item.description}
                      </p>
                      <span className="text-xs font-semibold text-[#2B6CB0] mt-auto">
                        {item.type} →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-gray-400 italic">
            Note: PDF files are placeholders — replace the href paths with your
            actual file URLs once you upload them to{" "}
            <code>/public/resources/</code>.
          </p>
        </div>
      </section>

      {/* Classroom activities */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#2B6CB0] mb-2"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Classroom Activities
          </h2>
          <p className="text-gray-500 mb-10 text-sm">
            No prep required — just print or read aloud these step-by-step
            activities.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="bg-[#FFFBEB] rounded-2xl p-6 shadow-md border-t-4 border-[#F6AD55]"
              >
                <activity.icon
                  className="h-8 w-8 text-[#C53030] mb-3"
                  aria-hidden="true"
                />
                <h3
                  className="font-bold text-lg text-[#2B6CB0] mb-1"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {activity.title}
                </h3>
                <div className="flex gap-3 text-xs text-gray-500 mb-3">
                  <span>{activity.grades}</span>
                  <span>·</span>
                  <span>{activity.time}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {activity.description}
                </p>
                <ol className="space-y-2">
                  {activity.steps.map((step, i) => (
                    <li key={i} className="flex gap-2 text-xs text-gray-600">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F6AD55] text-white flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: step }} />
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External links */}
      <section className="py-16 md:py-20 bg-[#FFFBEB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#2B6CB0] mb-2"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Helpful Links
          </h2>
          <p className="text-gray-500 mb-8 text-sm">
            Curated external resources to supplement Kathy&apos;s books in the
            classroom.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-2">
                  <link.icon
                    className="h-4 w-4 text-[#2B6CB0]"
                    aria-hidden="true"
                  />
                  <span
                    className="font-bold text-sm text-[#2B6CB0] group-hover:underline"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {link.label}
                  </span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
