import type { Metadata } from "next";
import CTASection, { Breadcrumb, SectionHeading } from "@/components/Shared";
import JsonLD from "@/components/JsonLD";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description:
    "Join Binary Solutions — open roles for developers, designers and engineers building world-class digital products.",
  path: "/careers",
  keywords: ["tech jobs", "developer careers", "remote engineering jobs"],
});

const benefits = [
  { icon: "🏠", title: "Remote-first", text: "Work from anywhere with flexible hours and async-first culture." },
  { icon: "📚", title: "Learning budget", text: "$2,000/year for courses, conferences and certifications." },
  { icon: "🩺", title: "Health & wellness", text: "Full medical, dental and vision coverage for you and your family." },
  { icon: "🧘", title: "Work-life balance", text: "Unlimited PTO with a minimum 20-day take policy." },
];

const openings = [
  {
    title: "Senior React Native Developer",
    type: "Full-time",
    location: "Remote",
    department: "Mobile",
  },
  {
    title: "AI/ML Engineer (LLM)",
    type: "Full-time",
    location: "Remote",
    department: "AI",
  },
  {
    title: "Senior Solidity Engineer",
    type: "Full-time",
    location: "Hybrid — Austin, TX",
    department: "Blockchain",
  },
  {
    title: "Product Designer",
    type: "Contract",
    location: "Remote",
    department: "Design",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden" aria-labelledby="careers-heading">
        <div aria-hidden="true" className="absolute inset-0 bg-glow-radial" />
        <div className="container-site relative py-20 sm:py-28">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Careers" }]}
          />
          <h1 id="careers-heading" className="section-title mt-4 sm:text-5xl">
            Build your career at Binary Solutions
          </h1>
          <p className="section-subtitle mt-6 text-lg">
            Join a team of 60+ engineers and designers shipping products used
            by millions — without the bureaucracy.
          </p>
        </div>
      </section>

      <section className="pb-20" aria-labelledby="benefits-heading">
        <div className="container-site">
          <SectionHeading id="benefits-heading" eyebrow="Benefits" title="Why you'll love it here" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="card">
                <span aria-hidden="true" className="text-3xl">{b.icon}</span>
                <h3 className="mt-3 font-semibold text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-night-900 py-20" aria-labelledby="openings-heading">
        <div className="container-site">
          <SectionHeading id="openings-heading" eyebrow="Open roles" title="Current openings" />
          <ul className="mx-auto mt-12 max-w-3xl space-y-4">
            {openings.map((job) => (
              <li key={job.title}>
                <a
                  href={`mailto:careers@binarysolutions.com?subject=Application: ${encodeURIComponent(job.title)}`}
                  className="card flex flex-wrap items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="font-semibold text-white">{job.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {job.department} · {job.location} · {job.type}
                    </p>
                  </div>
                  <span className="btn-secondary !px-4 !py-2">Apply</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-slate-500">
            Don&apos;t see your role? Send your resume to{" "}
            <a
              href="mailto:careers@binarysolutions.com"
              className="text-neon-400 hover:text-neon-300"
            >
              careers@binarysolutions.com
            </a>
          </p>
        </div>
      </section>

      <CTASection />
      <JsonLD
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Careers", url: "/careers" },
        ])}
      />
    </>
  );
}
