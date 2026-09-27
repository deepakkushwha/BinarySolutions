import Link from "next/link";
import type { Metadata } from "next";
import CTASection, { SectionHeading } from "@/components/Shared";
import JsonLD from "@/components/JsonLD";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { projects, services, SITE } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "AI-Based Mobile App & Web Development Company",
  description: SITE.description,
  path: "/",
  keywords: ["hire app developers", "custom software development"],
});

const faqs = [
  {
    q: "How much does it cost to build an app?",
    a: "An MVP typically starts at $15,000–$30,000, while full-scale products range from $50,000 to $200,000+ depending on complexity, platforms and integrations. We provide a detailed estimate after a free discovery call.",
  },
  {
    q: "How long does development take?",
    a: "Most MVPs launch in 8–12 weeks. Larger platforms take 4–9 months. We work in 2-week sprints with demos every cycle, so you see progress from week one.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. Every project includes a free warranty period, and we offer flexible maintenance plans covering monitoring, updates, security patches and feature evolution.",
  },
  {
    q: "Which technologies do you specialize in?",
    a: "Next.js, React, React Native, Flutter, Node.js, Python, Solidity and major AI/LLM platforms — chosen to fit your product, not the other way around.",
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    text: "We analyze your business goals, users and market to define the right product strategy.",
  },
  {
    step: "02",
    title: "Design",
    text: "Wireframes, prototypes and a design system validated with real usability testing.",
  },
  {
    step: "03",
    title: "Develop",
    text: "Agile sprints with CI/CD, code reviews and automated testing — you see demos every 2 weeks.",
  },
  {
    step: "04",
    title: "Deliver & Grow",
    text: "Launch, monitor and iterate. We stay on as your product team for post-launch growth.",
  },
];

const testimonials = [
  {
    quote:
      "Binary Solutions rebuilt our platform in Next.js and organic traffic jumped 3x in four months. The SSR migration paid for itself.",
    name: "Sarah Mitchell",
    role: "CEO, SwiftCart",
  },
  {
    quote:
      "Their blockchain team delivered an audited, production-ready smart contract system ahead of schedule. Zero security incidents since launch.",
    name: "Daniel Reyes",
    role: "CTO, CoinBridge",
  },
  {
    quote:
      "From wireframes to App Store in 10 weeks. Communication was flawless — daily updates, honest estimates, no surprises.",
    name: "Priya Sharma",
    role: "Founder, MediConnect",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" aria-labelledby="hero-heading">
        <div aria-hidden="true" className="absolute inset-0 bg-glow-radial" />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-neon-500/50 to-transparent"
        />
        <div className="container-site relative py-24 text-center sm:py-32">
          <p className="eyebrow animate-fade-up">
            AI · Blockchain · Web · Mobile
          </p>
          <h1
            id="hero-heading"
            className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
          >
           
            You run the business. 
            <span className="bg-gradient-to-r from-neon-400 to-accent-400 bg-clip-text text-transparent">
           We'll build what runs it.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            {SITE.name} is an AI-based mobile app and web development company
            delivering scalable, secure and high-performance solutions for
            startups and enterprises worldwide.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get a Free Consultation
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
            {SITE.stats.map((stat) => (
              <div key={stat.label} className="card !p-5 text-center">
                <dt className="order-2 mt-1 text-sm text-slate-400">
                  {stat.label}
                </dt>
                <dd className="order-1 text-3xl font-bold text-neon-400">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24" aria-labelledby="services-heading">
        <div className="container-site">
          <SectionHeading
            id="services-heading"
            eyebrow="What we do"
            title="Full-cycle development services"
            subtitle="From first wireframe to global scale — one team for strategy, design, engineering and growth."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card group"
                aria-label={`Learn more about ${service.title}`}
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
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-night-900 py-20 sm:py-24" aria-labelledby="process-heading">
        <div className="container-site">
          <SectionHeading
            id="process-heading"
            eyebrow="How we work"
            title="A proven delivery process"
            subtitle="Transparent, agile and predictable — you always know what happens next."
          />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <li key={p.step} className="card">
                <span
                  aria-hidden="true"
                  className="font-mono text-sm font-bold text-neon-400"
                >
                  {p.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="py-20 sm:py-24" aria-labelledby="work-heading">
        <div className="container-site">
          <SectionHeading
            id="work-heading"
            eyebrow="Our work"
            title="Products we're proud of"
            subtitle="A sample of the platforms we've shipped for clients across industries."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <article key={project.name} className="card">
                <p className="text-xs font-semibold uppercase tracking-wider text-neon-400">
                  {project.industry}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/portfolio" className="btn-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-night-900 py-20 sm:py-24" aria-labelledby="testimonials-heading">
        <div className="container-site">
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Testimonials"
            title="What our clients say"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="card">
                <blockquote className="text-sm leading-7 text-slate-300">
                  <p>“{t.quote}”</p>
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold text-white">{t.name}</span>
                  <span className="text-slate-400"> — {t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24" aria-labelledby="faq-heading">
        <div className="container-site max-w-3xl">
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title="Frequently asked questions"
          />
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="card group"
              >
                <summary className="cursor-pointer list-none font-semibold text-white marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {faq.q}
                    <span
                      aria-hidden="true"
                      className="text-neon-400 transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <JsonLD data={faqJsonLd(faqs)} />
    </>
  );
}
