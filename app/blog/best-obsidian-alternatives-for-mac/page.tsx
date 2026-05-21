import type { Metadata } from "next";
import { PostLayout } from "@/components/post-layout";
import { getPost } from "@/lib/posts";
import { ABSOLUTE } from "@/lib/site";

const post = getPost("best-obsidian-alternatives-for-mac")!;

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
        Obsidian is the cult favorite for personal knowledge management.
        Vaults, graph view, daily notes, a thousand community plugins. But
        Obsidian isn't for everyone — it's a 200&nbsp;MB Electron app, the
        Sync service is a subscription, and the vault model isn't how
        everyone thinks about their files.
      </p>
      <p>
        If you're shopping for an alternative on macOS specifically, here are
        the five we'd actually recommend depending on what you're after.
      </p>

      <h2>1. Mark — for plain-text portability and native feel</h2>
      <p>
        Mark works on your <code>.md</code> files directly — no vault, no
        library, no proprietary metadata. Native macOS, WYSIWYG, KaTeX math,
        syntax-highlighted code, image embedding. <strong>$19.99 once.</strong>
      </p>
      <p>
        Best for: writers and developers who want their notes to be plain
        Markdown files that any tool can read.
      </p>

      <h2>2. Bear — for personal notes with iCloud sync</h2>
      <p>
        Bear is gorgeous and the macOS / iOS sync is unmatched. The trade-off:
        notes live inside a CoreData database, not as files. Export is lossy.
        <strong>$30/year</strong> for advanced features.
      </p>
      <p>
        Best for: personal journaling and note-taking across devices, where
        file ownership isn't a priority.
      </p>

      <h2>3. Logseq — for outline-first PKM</h2>
      <p>
        Logseq is the closest thing to "Obsidian, but free and outline-first."
        Open-source, files-on-disk, block-level linking. Electron-based with
        the usual performance trade-offs. Excellent for people who think in
        bullet points rather than paragraphs.
      </p>
      <p>
        Best for: outliners, Roam refugees, people who want graph and
        backlinks without the Sync subscription.
      </p>

      <h2>4. Reflect — for AI-powered notes</h2>
      <p>
        Reflect is a newer entrant focused on AI summarization and
        bidirectional linking. Subscription-only (~$10/month), end-to-end
        encrypted. Native-feeling Electron, fast.
      </p>
      <p>
        Best for: people who want AI features baked in and don't mind a
        subscription for them.
      </p>

      <h2>5. Apple Notes — already on your Mac</h2>
      <p>
        Don't sleep on Apple Notes. It's free, syncs perfectly via iCloud,
        supports rich formatting and pencil scribbles on iPad, and it's
        always there. The catch: not real Markdown. If your notes don't need
        to be portable, Apple Notes is genuinely competitive.
      </p>
      <p>
        Best for: light personal notes that don't need to leave the Apple
        ecosystem.
      </p>

      <h2>How to pick</h2>
      <ul>
        <li><strong>Want plain <code>.md</code> files and a native app?</strong> → Mark.</li>
        <li><strong>Want a beautiful note-taking app with sync?</strong> → Bear.</li>
        <li><strong>Want Obsidian's graph for free?</strong> → Logseq.</li>
        <li><strong>Want AI features baked in?</strong> → Reflect.</li>
        <li><strong>Already happy in the Apple ecosystem?</strong> → Apple Notes.</li>
      </ul>
      <p>
        The right pick depends on whether you think of your notes as a
        knowledge system, a personal journal, a database of ideas, or just a
        bunch of documents. Obsidian wins for the first; the alternatives
        above each beat it on one of the others.
      </p>
    </PostLayout>
  );
}
