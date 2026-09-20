import type { Metadata } from "next";
import CTASection, { Breadcrumb, SectionHeading } from "@/components/Shared";
import JsonLD from "@/components/JsonLD";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { projects, SITE } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description: `Case studies and products shipped by ${SITE.name} — healthcare, fintech, e-commerce, logistics, education and IoT platforms.`,
  path: "/portfolio",
  keywords: ["app development portfolio", "case studies"],
});

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden" aria-labelledby="portfolio-heading">
        <div aria-hidden="true" className="absolute inset-0 bg-glow-radial" />
        <div className="container-site relative py-20 sm:py-28">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
          />
          <h1 id="portfolio-heading" className="section-title mt-4 sm:text-5xl">
            Work that speaks for itself
          </h1>
          <p className="section-subtitle mt-6 text-lg">
            A selection of platforms we&apos;ve designed, built and scaled across
            industries.
          </p>
        </div>
      </section>

      <section className="pb-20" aria-label="Project list">
        <div className="container-site">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <li key={project.name}>
                <article className="card h-full">
                  <p className="text-xs font-semibold uppercase tracking-wider text-neon-400">
                    {project.industry}
                  </p>
                  <h2 className="mt-2 text-lg font-semibold text-white">
                    {project.name}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-night-900 py-16" aria-labelledby="results-heading">
        <div className="container-site">
          <SectionHeading
            id="results-heading"
            eyebrow="Impact"
            title="Results our clients measure"
          />
          <dl className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="card text-center">
              <dd className="text-3xl font-bold text-neon-400">3x</dd>
              <dt className="mt-2 text-sm text-slate-400">
                Organic traffic growth after Next.js SSR migration
              </dt>
            </div>
            <div className="card text-center">
              <dd className="text-3xl font-bold text-neon-400">27%</dd>
              <dt className="mt-2 text-sm text-slate-400">
                Higher average order value with AI recommendations
              </dt>
            </div>
            <div className="card text-center">
              <dd className="text-3xl font-bold text-neon-400">99.9%</dd>
              <dt className="mt-2 text-sm text-slate-400">
                Uptime across managed production platforms
              </dt>
            </div>
          </dl>
        </div>
      </section>

      <CTASection
        title="Your product could be next"
        subtitle="Let's talk about what we can build together."
      />
      <JsonLD
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" },
        ])}
      />
    </>
  );
}
