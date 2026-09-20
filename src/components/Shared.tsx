import Link from "next/link";
import type { ReactNode } from "react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = "Ready to build something great?",
  subtitle = "Tell us about your project and get a free consultation and estimate within 24 hours.",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-20" aria-labelledby="cta-heading">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-glow-radial"
      />
      <div className="container-site relative text-center">
        <h2 id="cta-heading" className="section-title">
          {title}
        </h2>
        <p className="section-subtitle mx-auto mt-4">{subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Start Your Project
          </Link>
          <Link href="/portfolio" className="btn-secondary">
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  id,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  id?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="section-title mt-2">
        {title}
      </h2>
      {subtitle && <p className="section-subtitle mx-auto mt-3">{subtitle}</p>}
    </div>
  );
}

export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-5">
      {paragraphs.map((p, i) => (
        <p key={i} className="leading-8 text-slate-300">
          {p}
        </p>
      ))}
    </div>
  );
}

export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-neon-400">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-slate-200">
                {item.label}
              </span>
            )}
            {i < items.length - 1 && (
              <span aria-hidden="true" className="text-slate-600">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function StatsBar() {
  return null;
}

export function CTACard({ children }: { children: ReactNode }) {
  return <div className="card">{children}</div>;
}
