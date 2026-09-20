import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Shared";
import ContactForm from "@/components/ContactForm";
import JsonLD from "@/components/JsonLD";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description: `Contact ${SITE.name} to discuss your project. Free consultation — we reply within one business day.`,
  path: "/contact",
  keywords: ["contact", "hire development team", "free consultation"],
});

export default function ContactPage() {
  return (
    <>
      <section
        className="relative overflow-hidden"
        aria-labelledby="contact-heading"
      >
        <div aria-hidden="true" className="absolute inset-0 bg-glow-radial" />
        <div className="container-site relative py-20 sm:py-28">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          />
          <h1 id="contact-heading" className="section-title mt-4 sm:text-5xl">
            Let&apos;s build together
          </h1>
          <p className="section-subtitle mt-6 text-lg">
            Tell us about your project — we reply within one business day.
          </p>
        </div>
      </section>

      <section className="pb-20" aria-label="Contact options">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-white">Get in touch</h2>
            <address className="mt-6 space-y-4 text-slate-300 not-italic">
              <p>
                <span className="block text-sm text-slate-500">Email</span>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-lg text-neon-400 hover:text-neon-300"
                >
                  {SITE.email}
                </a>
              </p>
              <p>
                <span className="block text-sm text-slate-500">Phone</span>
                <a
                  href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
                  className="text-lg text-neon-400 hover:text-neon-300"
                >
                  {SITE.phone}
                </a>
              </p>
              <p>
                <span className="block text-sm text-slate-500">Office</span>
                {SITE.address.street}
                <br />
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </p>
            </address>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <JsonLD
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />
    </>
  );
}
