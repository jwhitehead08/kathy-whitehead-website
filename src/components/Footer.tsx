import Link from "next/link";
import { BookOpen, Mail } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2B6CB0] text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-white rounded-full p-2">
                <BookOpen className="h-4 w-4 text-[#2B6CB0]" aria-hidden="true" />
              </div>
              <span
                className="text-lg font-bold"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Kathy Whitehead
              </span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Award-winning children&apos;s author and former teacher, celebrating
              folk art, culture, and the joy of reading.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <h3
              className="font-bold text-[#F6AD55] mb-3 uppercase tracking-wide text-sm"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Explore
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-[#F6AD55] text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3
              className="font-bold text-[#F6AD55] mb-3 uppercase tracking-wide text-sm"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Get in Touch
            </h3>
            <p className="text-blue-200 text-sm mb-3">
              Interested in booking Kathy for a school visit or author event?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F6AD55] text-[#744210] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#FBBE5E] transition-colors duration-150"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Kathy
            </Link>
          </div>
        </div>

        <div className="border-t border-blue-500 mt-10 pt-6 text-center text-blue-300 text-xs">
          <p>
            &copy; {currentYear} Kathy Whitehead. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
