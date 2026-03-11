"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, BookOpen } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b-4 border-[#F6AD55]">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Site Name */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="bg-[#2B6CB0] rounded-full p-2 group-hover:bg-[#C53030] transition-colors duration-200">
              <BookOpen className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
            <div className="leading-tight">
              <span
                className="block text-lg md:text-xl font-bold text-[#2B6CB0] group-hover:text-[#C53030] transition-colors duration-200"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Kathy Whitehead
              </span>
              <span className="block text-xs text-gray-500 tracking-wide uppercase">
                Children&apos;s Author
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-150 ${
                      isActive
                        ? "bg-[#FEF3C7] text-[#C53030]"
                        : "text-gray-700 hover:bg-[#FEF3C7] hover:text-[#2B6CB0]"
                    }`}
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-[#FEF3C7] focus:outline-none focus:ring-2 focus:ring-[#2B6CB0]"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-1">
            <ul className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-150 ${
                        isActive
                          ? "bg-[#FEF3C7] text-[#C53030]"
                          : "text-gray-700 hover:bg-[#FEF3C7] hover:text-[#2B6CB0]"
                      }`}
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
