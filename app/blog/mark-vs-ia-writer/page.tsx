import type { Metadata } from "next";
import { PostLayout } from "@/components/post-layout";
import { getPost } from "@/lib/posts";
import { ABSOLUTE } from "@/lib/site";

const post = getPost("mark-vs-ia-writer")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: { title: post.title, description: post.description, url: ABSOLUTE(`/blog/${post.slug}`), type: "article", publishedTime: post.date },
  twitter: { card: "summary_large_image", title: post.title, description: post.description },
};

export default function Page() {
  return (
    <PostLayout post={post}>
      <p>
        iA Writer has been the patron saint of distraction-free Markdown
        writing for over a decade. The typography is uncompromising, the focus
        mode is genuine, and the app feels like it was hand-tuned. It's $49.99
        and worth every dollar — for the right person.
      </p>
      <p>
        Mark approaches the same problem from a different angle: a native,
        modern macOS Markdown editor that prioritizes WYSIWYG editing and
        feels like part of the system. Here's the honest comparison.
      </p>

      <h2>Editing model</h2>
      <p>
        iA Writer is a markdown-source editor with syntax highlighting. You
        see <code>**bold**</code> markers as you type — they're styled, but
        they're still on screen. iA's argument is that the markers are part of
        the craft.
      </p>
      <p>
        Mark is WYSIWYG. Bold looks bold; the <code>**</code> markers are
        hidden unless you put the cursor next to them. Both are valid
        philosophies — iA's appeals to writers who think of Markdown as a
        first-class syntax, Mark's appeals to people who think of Markdown as
        a serialization format for formatted prose.
      </p>

      <h2>Focus and typography</h2>
      <p>
        iA Writer wins on typography. The custom-tuned Nitti / Mono /
        Quattro fonts are designed for reading and writing long-form text;
        Focus Mode dims everything outside the current sentence. If you write
        essays all day, that's worth a lot.
      </p>
      <p>
        Mark uses SF Pro Display and a comfortable reading column; it doesn't
        try to replace iA Writer's editorial polish. What Mark adds is a
        floating toolbar, KaTeX math, lowlight-highlighted code blocks, and
        proper image embedding — features iA Writer doesn't focus on.
      </p>

      <h2>Native macOS integration</h2>
      <p>
        Both are real native Mac apps with NSDocument-backed file handling.
        iA Writer also ships a Style Check feature and a Library view that
        Mark doesn't have. Mark adds Liquid Glass surfaces on macOS 15+ and a
        floating Liquid Glass toolbar.
      </p>

      <h2>Price</h2>
      <p>
        iA Writer is <strong>$49.99 once on Mac</strong>, with separate
        purchases for iOS/iPad ($29.99) and Windows ($29.99).
      </p>
      <p>
        Mark is <strong>$19.99 once on Mac</strong>, lifetime, free updates
        for life. Less than half the price of iA Writer Mac alone.
      </p>

      <h2>When to pick each</h2>
      <p><strong>Pick iA Writer</strong> if you write essays or long-form
      journalism, value editorial typography and Focus Mode, and want a
      cross-device Markdown workflow.</p>
      <p><strong>Pick Mark</strong> if you want true WYSIWYG editing with a
      native macOS feel, KaTeX math, real code-block highlighting, and a
      one-time price closer to $20 than $50.</p>
    </PostLayout>
  );
}
