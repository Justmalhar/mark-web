import type { Metadata } from "next";
import { PostLayout } from "@/components/post-layout";
import { getPost } from "@/lib/posts";
import { ABSOLUTE } from "@/lib/site";

const post = getPost("best-markdown-editor-for-mac-2026")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: {
    title: post.title,
    description: post.description,
    url: ABSOLUTE(`/blog/${post.slug}`),
    type: "article",
    publishedTime: post.date,
  },
  twitter: {
    card: "summary_large_image",
    title: post.title,
    description: post.description,
  },
};

export default function Page() {
  return (
    <PostLayout post={post}>
      <p>
        Every year someone writes a "best Markdown editor for Mac" round-up. We
        wanted to do an honest one — by the developer of one of the apps in the
        list. We won't pretend Mark is the best for every workflow. But we'll
        tell you exactly when it is.
      </p>
      <p>
        The eight Markdown editors we compared, alphabetically: <strong>Bear</strong>,{" "}
        <strong>iA Writer</strong>, <strong>MacDown</strong>,{" "}
        <strong>Mark</strong>, <strong>MarkText</strong>,{" "}
        <strong>Obsidian</strong>, <strong>Typora</strong>, and{" "}
        <strong>VS Code</strong> with the Markdown extension.
      </p>

      <h2>The criteria</h2>
      <ol>
        <li><strong>Native macOS feel</strong> — does it use real AppKit/SwiftUI or wrap a web view?</li>
        <li><strong>Speed</strong> — cold-start time on a typical M-series Mac.</li>
        <li><strong>File ownership</strong> — does it edit your <code>.md</code> file in place, or wrap it?</li>
        <li><strong>WYSIWYG quality</strong> — formatted on screen, plain on disk?</li>
        <li><strong>GFM fidelity</strong> — does it match GitHub's rendering for tables, task lists, code, math?</li>
        <li><strong>Price</strong> — one-time vs subscription.</li>
      </ol>

      <h2>The shortlist (at a glance)</h2>
      <table>
        <thead>
          <tr><th>Editor</th><th>Native</th><th>WYSIWYG</th><th>File-first</th><th>Price</th></tr>
        </thead>
        <tbody>
          <tr><td>Mark</td><td>Yes</td><td>Yes</td><td>Yes</td><td>$19.99 once</td></tr>
          <tr><td>iA Writer</td><td>Yes</td><td>Partial</td><td>Yes</td><td>$49.99 once</td></tr>
          <tr><td>Bear</td><td>Yes</td><td>Partial</td><td>No (CoreData)</td><td>$30/yr</td></tr>
          <tr><td>Obsidian</td><td>No (Electron)</td><td>Partial</td><td>Yes (vault)</td><td>Free + $50/yr Sync</td></tr>
          <tr><td>Typora</td><td>No (Electron)</td><td>Yes</td><td>Yes</td><td>$14.99 once</td></tr>
          <tr><td>MarkText</td><td>No (Electron)</td><td>Yes</td><td>Yes</td><td>Free</td></tr>
          <tr><td>MacDown</td><td>Yes</td><td>No (split view)</td><td>Yes</td><td>Free</td></tr>
          <tr><td>VS Code</td><td>No (Electron)</td><td>No (preview pane)</td><td>Yes</td><td>Free</td></tr>
        </tbody>
      </table>

      <h2>1. Mark — best for native, file-first WYSIWYG</h2>
      <p>
        Mark is what we built because every editor above made us compromise on
        at least one axis. It opens any <code>.md</code> file directly, edits
        WYSIWYG, writes back plain GFM, and feels like part of macOS. Liquid
        Glass on macOS 15+. NSDocument autosave and Versions. $19.99 lifetime.
      </p>
      <p><strong>Best for</strong>: writers and developers who want a real
      macOS app for their <code>.md</code> files.</p>

      <h2>2. iA Writer — best for distraction-free long-form writing</h2>
      <p>
        iA Writer's typography and focus mode are unmatched. It's a real native
        app and the writing experience is genuinely thoughtful. It's a partial
        WYSIWYG — you still see Markdown markers — and at $49.99 it's the
        priciest in this list.
      </p>
      <p><strong>Best for</strong>: serious essayists and journalists who
      write all day in Markdown.</p>

      <h2>3. Bear — best for personal notes with iCloud sync</h2>
      <p>
        Bear is gorgeous and the iOS/macOS sync is best-in-class. The catch is
        that your notes live inside a CoreData store, not as files. If you
        don't need files-on-disk, Bear is a delight.
      </p>
      <p><strong>Best for</strong>: personal note-takers who live across iPhone
      and Mac.</p>

      <h2>4. Obsidian — best for knowledge bases and PKM</h2>
      <p>
        Plugins, graph view, daily notes — Obsidian is the heavyweight champion
        of personal knowledge management. It's also a 200&nbsp;MB Electron app
        and requires committing to vaults. Free for personal use, $50/yr if you
        want Sync.
      </p>
      <p><strong>Best for</strong>: power users building a second brain.</p>

      <h2>5. Typora — best one-time-purchase WYSIWYG</h2>
      <p>
        Typora pioneered the live-preview WYSIWYG approach. It's a beautiful
        editor, cross-platform, $14.99 once. The trade-off is that it's Electron
        — it doesn't feel like a Mac app the way iA Writer or Mark do, and
        macOS-specific features (Versions, Spotlight previews, Liquid Glass)
        aren't there.
      </p>
      <p><strong>Best for</strong>: budget-conscious users who don't mind
      Electron.</p>

      <h2>6. MarkText — best free option</h2>
      <p>
        Open-source, Electron, WYSIWYG. Capable and free. Development has slowed
        in recent years. Same Electron caveats as Typora.
      </p>
      <p><strong>Best for</strong>: free, no-strings-attached Markdown editing.</p>

      <h2>7. MacDown — classic split-view free option</h2>
      <p>
        Native Cocoa app, free, MIT-licensed. Source-on-the-left,
        preview-on-the-right split view. No WYSIWYG. Last update was years ago
        but it still works for plain GFM editing.
      </p>
      <p><strong>Best for</strong>: developers who like the split-view aesthetic.</p>

      <h2>8. VS Code — best for code-adjacent Markdown</h2>
      <p>
        If you write Markdown in the same project where you write code, VS Code
        is excellent. It's also a 100&nbsp;MB Electron app and has no WYSIWYG —
        you edit raw Markdown and look at the preview pane. Not the right tool
        for prose-heavy work.
      </p>
      <p><strong>Best for</strong>: README files, GitHub-flavored docs inside a
      repo.</p>

      <h2>How we'd choose</h2>
      <ul>
        <li><strong>You write essays all day</strong> → iA Writer.</li>
        <li><strong>You take personal notes across devices</strong> → Bear.</li>
        <li><strong>You're building a knowledge graph</strong> → Obsidian.</li>
        <li><strong>You want plain Markdown files, WYSIWYG editing, native macOS feel, and one-time pricing</strong> → Mark.</li>
      </ul>
      <p>
        Mark exists because none of the above checked every box. If those four
        things matter to you, give it a try.
      </p>
    </PostLayout>
  );
}
