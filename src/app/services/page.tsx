import Link from "next/link";
import type { Metadata } from "next";
import CTASection, { Breadcrumb } from "@/components/Shared";
import JsonLD from "@/components/JsonLD";
import { buildMetadata, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";
import { services, SITE } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Development Services",
  description: `Explore ${SITE.name} services — mobile app, AI, blockchain, web, UI/UX and DevOps development for startups and enterprises.`,
  path: "/services",
  keywords: ["development services", "hire developers", "software outsourcing"],
});

export default function ServicesPage() {
  const categories = Array.from(new Set(services.map((s) => s.category)));

  return (
    <>
      <section className="relative overflow-hidden" aria-labelledby="services-page-heading">
        <div aria-hidden="true" className="absolute inset-0 bg-glow-radial" />
        <div className="container-site relative py-20 sm:py-28">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Services" }]}
          />
          <h1 id="services-page-heading" className="section-title mt-4 sm:text-5xl">
            Services that cover the full product lifecycle
          </h1>
          <p className="section-subtitle mt-6 text-lg">
            Strategy, design, engineering and operations — one accountable team
            for every stage of your product journey.
          </p>
        </div>
      </section>

      {categories.map((category) => (
        <section
          key={category}
          className="py-16"
          aria-labelledby={`category-${category.toLowerCase()}`}
        >
          <div className="container-site">
            <h2
              id={`category-${category.toLowerCase()}`}
              className="text-2xl font-bold text-white"
            >
              {category}
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((s) => s.category === category)
                .map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="card group"
                  >
                    <span aria-hidden="true" className="text-3xl">
                      {service.icon}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-neon-400">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-block text-sm font-medium text-neon-400">
                      View details →
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection />
      <JsonLD
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
          ]),
          ...services.map((s) => serviceJsonLd(s)),
        ]}
      />
    </>
  );
}
