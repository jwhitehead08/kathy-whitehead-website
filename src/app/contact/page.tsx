"use client";

import { useState } from "react";
import { Mail, School, BookOpen, Send, CheckCircle } from "lucide-react";

const reasons = [
  "School or library visit inquiry",
  "Media / press inquiry",
  "Book club / reading group",
  "Speaking engagement",
  "Rights / permissions",
  "General question",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // TODO: wire up to a real form service (e.g. Resend, Formspree, or a Next.js API route)
    // For now, simulate a short delay and show success
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-[#276749] to-[#1C4532] text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail
            className="h-14 w-14 text-[#F6AD55] mx-auto mb-4"
            aria-hidden="true"
          />
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Get in Touch
          </h1>
          <p className="text-green-100 text-lg max-w-xl mx-auto">
            Whether you&apos;re booking a school visit, have a media inquiry, or
            just want to say hello — Kathy would love to hear from you.
          </p>
        </div>
      </section>

      {/* Accent bar */}
      <div className="h-2 bg-gradient-to-r from-[#276749] via-[#F6AD55] to-[#C53030]" aria-hidden="true" />

      <section className="py-16 md:py-20 bg-[#FFFBEB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar info */}
            <aside className="space-y-6">
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2
                  className="font-bold text-[#2B6CB0] mb-4"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  Common Inquiries
                </h2>
                <ul className="space-y-3">
                  {[
                    {
                      icon: School,
                      label: "School Visits",
                      detail:
                        "Book Kathy for an in-person or virtual author visit. See the School Visits page for formats and FAQs.",
                    },
                    {
                      icon: BookOpen,
                      label: "Media &amp; Press",
                      detail:
                        "For review copies, interview requests, or a press kit, please include your outlet and deadline.",
                    },
                    {
                      icon: Mail,
                      label: "General",
                      detail:
                        "Fan mail, questions about the books, or anything else — Kathy reads every message.",
                    },
                  ].map(({ icon: Icon, label, detail }) => (
                    <li key={label} className="flex gap-3">
                      <Icon
                        className="h-5 w-5 text-[#F6AD55] flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <p
                          className="font-semibold text-sm text-gray-800"
                          style={{ fontFamily: "'Quicksand', sans-serif" }}
                          dangerouslySetInnerHTML={{ __html: label }}
                        />
                        <p className="text-gray-500 text-xs leading-relaxed">
                          {detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#2B6CB0] text-white rounded-2xl p-6">
                <h3
                  className="font-bold mb-2"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  Response Time
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Kathy typically responds within <strong className="text-white">2–3 business days</strong>. For
                  urgent school visit inquiries, please note your event date in
                  the message.
                </p>
              </div>
            </aside>

            {/* Contact form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col items-center justify-center text-center min-h-64">
                  <CheckCircle
                    className="h-16 w-16 text-[#276749] mb-4"
                    aria-hidden="true"
                  />
                  <h2
                    className="text-2xl font-bold text-[#276749] mb-2"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    Message Sent!
                  </h2>
                  <p className="text-gray-600 max-w-sm">
                    Thank you for reaching out. Kathy will get back to you within
                    2–3 business days.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl shadow-md p-6 md:p-8 space-y-5"
                  noValidate
                >
                  <h2
                    className="text-xl font-bold text-[#2B6CB0]"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    Send a Message
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        First Name <span className="text-[#C53030]">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B6CB0] focus:border-transparent"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Last Name <span className="text-[#C53030]">*</span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B6CB0] focus:border-transparent"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      Email Address <span className="text-[#C53030]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B6CB0] focus:border-transparent"
                      placeholder="jane@school.org"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      School / Organization
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B6CB0] focus:border-transparent"
                      placeholder="Lincoln Elementary School"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="reason"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      Reason for Contact <span className="text-[#C53030]">*</span>
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      required
                      defaultValue=""
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B6CB0] focus:border-transparent bg-white"
                    >
                      <option value="" disabled>
                        Select a reason…
                      </option>
                      {reasons.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      Message <span className="text-[#C53030]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B6CB0] focus:border-transparent resize-none"
                      placeholder="Tell Kathy about your school, the event date you have in mind, grade levels, and anything else that would help her respond quickly."
                    />
                  </div>

                  {/* Honeypot — hidden from real users */}
                  <input
                    type="text"
                    name="_gotcha"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 bg-[#2B6CB0] hover:bg-[#2C5282] disabled:opacity-60 text-white font-bold px-6 py-3 rounded-full transition-colors duration-150 text-sm"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400">
                    This form is not yet connected to a mail service. To wire it
                    up, add a Next.js API route at{" "}
                    <code>/src/app/api/contact/route.ts</code> using Resend,
                    Nodemailer, or Formspree.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
