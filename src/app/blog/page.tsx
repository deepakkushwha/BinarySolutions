import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Shared";
import JsonLD from "@/components/JsonLD";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { blogPosts, SITE } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description: `Insights on app development, AI, blockchain and web engineering from the ${SITE.name} team.`,
  path: "/blog",
  keywords: ["tech blog", "development insights"],
});

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden" aria-labelledby="blog-heading">
        <div aria-hidden="true" className="absolute inset-0 bg-glow-radial" />
        <div className="container-site relative py-20 sm:py-28">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
          />
          <h1 id="blog-heading" className="section-title mt-4 sm:text-5xl">
            Insights &amp; engineering notes
          </h1>
          <p className="section-subtitle mt-6 text-lg">
            Practical articles on AI, blockchain, mobile and web development —
            written by the people who ship the code.
          </p>
        </div>
      </section>

      <section className="pb-20" aria-label="Blog posts">
        <div className="container-site">
          <ul className="grid gap-6 md:grid-cols-2">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <article className="card h-full">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="rounded-full bg-neon-500/10 px-3 py-1 font-semibold text-neon-400">
                      {post.tag}
                    </span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-white">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-neon-400"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-block text-sm font-medium text-neon-400 hover:text-neon-300"
                    aria-label={`Read full article: ${post.title}`}
                  >
                    Read article →
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <JsonLD
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />
    </>
  );
}
