import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CTASection, { Breadcrumb } from "@/components/Shared";
import JsonLD from "@/components/JsonLD";
import { articleJsonLd, breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { blogPosts, getPost } from "@/lib/data";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.tag.toLowerCase()],
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-glow-radial" />
        <div className="container-site relative max-w-3xl py-20">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span className="rounded-full bg-neon-500/10 px-3 py-1 font-semibold text-neon-400">
              {post.tag}
            </span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-400">{post.excerpt}</p>

          <hr className="my-10 border-white/5" />

          <div className="space-y-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="leading-8 text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="card mt-12" aria-label="More articles">
            <h2 className="text-lg font-semibold text-white">Keep reading</h2>
            <ul className="mt-4 space-y-3">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="text-sm text-slate-300 hover:text-neon-400"
                  >
                    {p.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </article>

      <CTASection />
      <JsonLD
        data={[
          articleJsonLd(post),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: post.title, url: `/blog/${post.slug}` },
          ]),
        ]}
      />
    </>
  );
}
