import type { Metadata } from "next";
import { PostLayout } from "@/components/post-layout";
import { getPost } from "@/lib/posts";
import { ABSOLUTE } from "@/lib/site";

const post = getPost("mark-vs-typora")!;

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
        Typora was the app that popularized the "live preview" WYSIWYG approach
        to Markdown — type <code>**bold**</code> and watch it become bold
        inline, no preview pane required. It works well, it's cross-platform,
        and at $14.99 once it's reasonably priced.
      </p>
      <p>
        Mark builds on the same WYSIWYG idea, but as a true native macOS app
        rather than an Electron wrapper. For Mac users specifically, that
        distinction changes a lot.
      </p>

      <h2>Native vs Electron</h2>
      <p>
        Typora is an Electron app. That means it ships a Chromium runtime
        inside every install (roughly 200&nbsp;MB), takes 1–3 seconds to cold
        launch on an M-series Mac, and doesn't use macOS-native APIs like
        NSDocument, Versions, or Liquid Glass surfaces.
      </p>
      <p>
        Mark is SwiftUI + AppKit. It opens in under a second, uses the
        system's standard document model, supports macOS Versions browsing,
        and renders Liquid Glass surfaces on macOS 15+. The difference shows
        in latency on every keystroke.
      </p>

      <h2>WYSIWYG fidelity</h2>
      <p>
        Both editors render Markdown live. Typora's implementation occasionally
        leaks markdown markers (you'll see <code>**</code> if your cursor is
        next to them). Mark hides markers consistently and uses a floating
        toolbar instead — H1–H6, lists, tables, math, code blocks, links are
        always one click away.
      </p>

      <h2>File handling</h2>
      <p>
        Both apps edit your <code>.md</code> file in place — no library, no
        vault. Round-trip fidelity is similar; both write standard GFM.
        Mark adds proper macOS auto-save and Versions, so you can browse
        previous edits via <em>File → Revert To → Browse All Versions</em>.
      </p>

      <h2>Pricing</h2>
      <p>
        Typora is $14.99 once. Mark is $19.99 once. Both are lifetime
        purchases. For $5 more you trade a cross-platform Electron app for a
        native macOS app — which is worth it if you're already on a Mac and
        plan to stay.
      </p>

      <h2>When to pick each</h2>
      <p><strong>Pick Typora</strong> if you also use Windows or Linux and want one editor across platforms.</p>
      <p><strong>Pick Mark</strong> if macOS is your home and you want the editor to feel like part of the system.</p>
    </PostLayout>
  );
}
