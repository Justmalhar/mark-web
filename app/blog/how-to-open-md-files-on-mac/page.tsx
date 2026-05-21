import type { Metadata } from "next";
import { PostLayout } from "@/components/post-layout";
import { getPost } from "@/lib/posts";
import { ABSOLUTE } from "@/lib/site";

const post = getPost("how-to-open-md-files-on-mac")!;

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
        Double-clicking a <code>.md</code> file on macOS opens it in TextEdit
        by default — and TextEdit shows the raw Markdown markers like{" "}
        <code>**bold**</code> instead of rendering them. That's almost never
        what you want.
      </p>
      <p>
        Here's how to fix it for good, in two steps.
      </p>

      <h2>Step 1: Install a real Markdown editor</h2>
      <p>
        You need a Mac app that registers as a handler for the{" "}
        <code>net.daringfireball.markdown</code> UTI. Options:
      </p>
      <ul>
        <li><strong>Mark</strong> — native, WYSIWYG, $19.99 once. Built for exactly this job.</li>
        <li><strong>MacDown</strong> — free, split-view (source + preview).</li>
        <li><strong>Typora</strong> — Electron, WYSIWYG, $14.99 once.</li>
        <li><strong>VS Code</strong> — free, code-editor with preview pane.</li>
      </ul>

      <h2>Step 2: Set it as the default app</h2>
      <ol>
        <li>In Finder, right-click any <code>.md</code> file.</li>
        <li>Choose <strong>Get Info</strong> (or press Cmd-I).</li>
        <li>Find the <strong>Open with:</strong> section.</li>
        <li>Pick your Markdown editor from the dropdown.</li>
        <li>Click <strong>Change All…</strong> and confirm.</li>
      </ol>
      <p>
        Done. Every <code>.md</code> file on your Mac will now open in your
        chosen editor by double-click.
      </p>

      <h2>Shortcut if you use Mark</h2>
      <p>
        Mark prompts you on first launch to make it the default for{" "}
        <code>.md</code> files — one click and it's done. You can also flip it
        any time via <em>File → Make Default for Markdown Files…</em>.
      </p>

      <h2>What about previewing without opening?</h2>
      <p>
        Press <strong>Space</strong> on any <code>.md</code> file in Finder for
        a Quick Look preview. macOS shows the raw text by default. To get
        rendered previews:
      </p>
      <ul>
        <li>Install <a href="https://github.com/sbarex/QLMarkdown" target="_blank" rel="noreferrer">QLMarkdown</a> — a free Quick Look extension for rendered Markdown previews.</li>
        <li>Or just press Cmd-Down to open the file in your default editor.</li>
      </ul>

      <h2>Why this matters</h2>
      <p>
        If you work in Markdown — README files, blog drafts, design docs,
        notes — your default app is the difference between a one-second
        glance and a context switch. Set it once and forget about it.
      </p>
    </PostLayout>
  );
}
