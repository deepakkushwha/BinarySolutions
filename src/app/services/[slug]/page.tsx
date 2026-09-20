import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CTASection, { Breadcrumb, Prose } from "@/components/Shared";
import JsonLD from "@/components/JsonLD";
import { buildMetadata, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";
import { getService, services } from "@/lib/data";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    keywords: [service.category.toLowerCase(), service.title.toLowerCase()],
  });
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getService(params.slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden" aria-labelledby="service-heading">
        <div aria-hidden="true" className="absolute inset-0 bg-glow-radial" />
        <div className="container-site relative py-20 sm:py-28">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span aria-hidden="true" className="text-5xl">
              {service.icon}
            </span>
            <p className="eyebrow">{service.category}</p>
          </div>
          <h1 id="service-heading" className="section-title mt-4 sm:text-5xl">
            {service.title}
          </h1>
          <p className="section-subtitle mt-6 text-lg">
            {service.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Discuss Your Project
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              See Related Work
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-20" aria-labelledby="overview-heading">
        <div className="container-site grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 id="overview-heading" className="text-2xl font-bold text-white">
              Overview
            </h2>
            <div className="mt-6">
              <Prose paragraphs={[service.longDescription]} />
            </div>

            <h2 className="mt-12 text-2xl font-bold text-white">
              What&apos;s included
            </h2>
            <ul className="mt-6 space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 text-neon-400"
                  >
                    ✓
                  </span>
                  <span className="text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-1">
            <div className="card sticky top-24">
              <h2 className="text-lg font-semibold text-white">
                Related services
              </h2>
              <ul className="mt-4 space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/services/${r.slug}`}
                      className="flex items-center gap-3 text-sm text-slate-300 hover:text-neon-400"
                    >
                      <span aria-hidden="true">{r.icon}</span>
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
      <JsonLD
        data={[
          serviceJsonLd(service),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: service.title, url: `/services/${service.slug}` },
          ]),
        ]}
      />
    </>
  );
}
