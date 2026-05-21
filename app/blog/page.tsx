import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import { SITE, ABSOLUTE } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Blog — Markdown editor comparisons and guides for macOS",
  description:
    "Honest, in-depth comparisons of Mac Markdown editors. Mark vs Obsidian, Mark vs Bear, the best Markdown editor for macOS — and more.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Mark — Blog",
    description:
      "Markdown editor comparisons and guides for Mac users. Updated regularly.",
    url: ABSOLUTE("/blog"),
    type: "website",
  },
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE.url },
          { name: "Blog", url: ABSOLUTE("/blog") },
        ]}
      />
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <header className="mb-12 text-center md:mb-16">
          <span className="eyebrow">Blog</span>
          <h1 className="mt-3 text-balance text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[64px]">
            Comparisons & guides.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-balance text-[17px] text-muted-foreground md:text-lg">
            Honest writeups on Markdown editors for macOS — what they do well,
            what they don't, and which one fits your work.
          </p>
        </header>

        <ul className="divide-y divide-rule">
          {sorted.map((p) => (
            <li key={p.slug} className="py-8">
              <Link href={`/blog/${p.slug}`} className="group block">
                <div className="mb-2 flex items-center gap-3 text-[12px] uppercase tracking-widest text-muted-foreground">
                  <span>{p.category}</span>
                  <span aria-hidden>·</span>
                  <time dateTime={p.date}>{formatDate(p.date)}</time>
                  <span aria-hidden>·</span>
                  <span>{p.readingTime}</span>
                </div>
                <h2 className="text-balance text-[24px] font-semibold leading-tight tracking-[-0.01em] text-foreground group-hover:text-[color:var(--accent)] md:text-[28px]">
                  {p.title}
                </h2>
                <p className="mt-2 text-[16px] leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-[14px] font-medium text-[color:var(--accent)]">
                  Read article <span aria-hidden>›</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
