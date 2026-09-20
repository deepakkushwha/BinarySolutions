"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, SITE } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-night-950/80 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg text-lg font-bold text-white"
          aria-label={`${SITE.name} — home`}
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-500 font-mono text-sm text-night-950"
          >
            01
          </span>
          <span>
            Binary<span className="text-neon-400">Solutions</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "text-neon-400"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link href="/contact" className="btn-primary hidden !px-4 !py-2 md:inline-flex">
          Get a Quote
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-lg p-2 text-slate-200 hover:text-white md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
          <span className="sr-only">Toggle navigation menu</span>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-white/5 bg-night-900 md:hidden"
        >
          <ul className="container-site flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-slate-200 hover:bg-night-800 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
