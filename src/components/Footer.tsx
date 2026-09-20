import Link from "next/link";
import { navLinks, services, SITE } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-night-900">
      <div className="container-site grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-500 font-mono text-sm text-night-950"
            >
              01
            </span>
            Binary<span className="text-neon-400">Solutions</span>
          </Link>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            {SITE.description}
          </p>
          <ul className="mt-4 flex gap-4" aria-label="Social media links">
            {Object.entries(SITE.socials).map(([name, url]) => (
              <li key={name}>
                <a
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-sm font-medium text-slate-400 transition-colors hover:text-neon-400"
                >
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Company
          </h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-neon-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer services">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h2>
          <ul className="mt-4 space-y-2">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-slate-400 transition-colors hover:text-neon-400"
                >
                  {s.title}
                </Link>
                </li>
              ))}
            <li>
              <Link
                href="/services"
                className="text-sm font-medium text-neon-400 hover:text-neon-300"
              >
                View all →
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h2>
          <address className="mt-4 space-y-2 text-sm not-italic leading-6 text-slate-400">
            <p>{SITE.address.street}</p>
            <p>
              {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
            </p>
            <p>
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors hover:text-neon-400"
              >
                {SITE.email}
              </a>
            </p>
            <p>
              <a
                href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
                className="transition-colors hover:text-neon-400"
              >
                {SITE.phone}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-6 text-sm text-slate-500 sm:flex-row">
          <p>
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <p>Built with Next.js — SSR, SEO &amp; accessibility first.</p>
        </div>
      </div>
    </footer>
  );
}
