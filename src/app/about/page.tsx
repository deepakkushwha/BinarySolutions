import type { Metadata } from "next";
import CTASection, { Breadcrumb, SectionHeading } from "@/components/Shared";
import JsonLD from "@/components/JsonLD";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: `Learn about ${SITE.name} — our story, mission, values and the team delivering world-class digital products since ${SITE.founded}.`,
  path: "/about",
  keywords: ["about binary solutions", "software company austin"],
});

const values = [
  {
    icon: "🎯",
    title: "Outcome-driven",
    text: "We measure success in your metrics — revenue, retention, rankings — not lines of code.",
  },
  {
    icon: "🔍",
    title: "Transparent",
    text: "Weekly demos, honest estimates and direct access to the people building your product.",
  },
  {
    icon: "♿",
    title: "Inclusive by default",
    text: "Accessibility and performance are requirements, not afterthoughts, on every project.",
  },
  {
    icon: "🚀",
    title: "Future-proof",
    text: "Modern stacks, clean architecture and documentation so your product scales without rewrites.",
  },
];

const team = [
  { name: "Alex Carter", role: "CEO & Co-Founder" },
  { name: "Maya Rodriguez", role: "CTO & Co-Founder" },
  { name: "James Okafor", role: "Head of Engineering" },
  { name: "Elena Petrova", role: "Head of Design" },
  { name: "Ravi Patel", role: "Lead Blockchain Architect" },
  { name: "Sophie Nguyen", role: "Head of AI" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden" aria-labelledby="about-heading">
        <div aria-hidden="true" className="absolute inset-0 bg-glow-radial" />
        <div className="container-site relative py-20 sm:py-28">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
          />
          <h1 id="about-heading" className="section-title mt-4 sm:text-5xl">
            Engineering partner for ambitious teams
          </h1>
          <p className="section-subtitle mt-6 text-lg">
            Founded in {SITE.founded}, {SITE.legalName} has grown from a
            two-person startup studio into a full-cycle development company
            trusted by 120+ clients across 15 countries.
          </p>
        </div>
      </section>

      <section className="pb-20" aria-labelledby="story-heading">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="story-heading" className="text-2xl font-bold text-white">
              Our story
            </h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-400">
              <p>
                We started with a simple frustration: too many software
                projects failed because agencies optimized for billable hours
                instead of business outcomes. So we built the company we
                wished existed — one that says no to bad ideas, ships fast and
                treats your budget like our own.
              </p>
              <p>
                Today our 60+ engineers, designers and strategists deliver
                mobile apps, AI products, blockchain systems and web platforms
                for startups and enterprises alike.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Our mission</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-400">
              <p>
                To make world-class software engineering accessible to every
                ambitious team — combining deep technical expertise with honest
                communication and measurable results.
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-4">
                {SITE.stats.map((stat) => (
                  <div key={stat.label} className="card !p-4 text-center">
                    <dt className="order-2 mt-1 text-xs text-slate-400">
                      {stat.label}
                    </dt>
                    <dd className="order-1 text-2xl font-bold text-neon-400">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-night-900 py-20" aria-labelledby="values-heading">
        <div className="container-site">
          <SectionHeading
            id="values-heading"
            eyebrow="Values"
            title="How we operate"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card">
                <span aria-hidden="true" className="text-3xl">{v.icon}</span>
                <h3 className="mt-3 font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" aria-labelledby="team-heading">
        <div className="container-site">
          <SectionHeading
            id="team-heading"
            eyebrow="Leadership"
            title="The people behind the code"
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <li key={member.name} className="card text-center">
                <div
                  aria-hidden="true"
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neon-500/10 text-xl font-bold text-neon-400"
                >
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-4 font-semibold text-white">{member.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{member.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Want to work with us?"
        subtitle="Whether you have a spec or just an idea, we'd love to hear about it."
      />
      <JsonLD
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ])}
      />
    </>
  );
}
