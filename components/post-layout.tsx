import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";
import { SITE, ABSOLUTE } from "@/lib/site";
import type { Post } from "@/lib/posts";
import type { ReactNode } from "react";

export function PostLayout({
  post,
  children,
}: {
  post: Post;
  children: ReactNode;
}) {
  const url = ABSOLUTE(`/blog/${post.slug}`);
  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        url={url}
        datePublished={post.date}
        keywords={post.keywords}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE.url },
          { name: "Blog", url: ABSOLUTE("/blog") },
          { name: post.title, url },
        ]}
      />
      <article className="prose-mark mx-auto px-6 py-20 md:py-28">
        <div className="mb-6 flex items-center gap-3 text-[12px] uppercase tracking-widest text-muted-foreground">
          <Link href="/blog" className="text-[color:var(--accent)] hover:underline">
            ← Blog
          </Link>
          <span aria-hidden>·</span>
          <span>{post.category}</span>
          <span aria-hidden>·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h1>{post.title}</h1>
        <p className="mt-2 text-[18px] text-muted-foreground">{post.description}</p>
        <hr className="my-8 border-rule" />
        {children}
        <hr className="my-12 border-rule" />
        <div className="rounded-2xl bg-surface-2 p-6">
          <p className="!m-0 text-[15px] text-foreground">
            <strong>Want to try Mark?</strong> It's a one-time $19.99 on the Mac
            App Store, free updates for life.{" "}
            <Link href="/#pricing" className="text-[color:var(--accent)] hover:underline">
              Download Mark →
            </Link>
          </p>
        </div>
      </article>
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
