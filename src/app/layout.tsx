import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLD from "@/components/JsonLD";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.tagline} | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Binary Solutions",
    "mobile app development company",
    "web development company",
    "AI development company",
    "blockchain development",
    "Next.js development",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.tagline} | ${SITE.name}`,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.tagline} | ${SITE.name}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-neon-500 focus:px-4 focus:py-2 focus:text-night-950"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <JsonLD data={[organizationJsonLd(), websiteJsonLd()]} />
      </body>
    </html>
  );
}
