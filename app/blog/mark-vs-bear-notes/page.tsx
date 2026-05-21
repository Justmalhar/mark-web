import type { Metadata } from "next";
import { PostLayout } from "@/components/post-layout";
import { getPost } from "@/lib/posts";
import { ABSOLUTE } from "@/lib/site";

const post = getPost("mark-vs-bear-notes")!;

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
        Bear is one of the most beautiful Mac apps ever made. The typography is
        immaculate, the dark theme is iconic, and the iOS/macOS sync is
        seamless. It deservedly won an Apple Design Award.
      </p>
      <p>
        But Bear's notes don't live as files. They live inside a CoreData
        database in Bear's app container. To get them out you export to
        Markdown — and you give up Bear's tagging, syncing, and rich features in
        the process. That's a real trade-off if you want to own your files.
      </p>
      <p>
        Mark sits at the other end of the spectrum: every document is a real{" "}
        <code>.md</code> file on disk that any tool can read.
      </p>

      <h2>1. Files vs. database</h2>
      <p>
        Bear's strength is also its constraint. Notes are stored in a SQLite
        database that only Bear understands. Tags, links, attachments — all
        managed by Bear. To pair Bear with other tools you have to export, and
        the export drops a lot of metadata.
      </p>
      <p>
        Mark opens, edits, and saves <code>.md</code> files exactly where you
        put them. iCloud Drive, Dropbox, a git repo, a sync folder, an SD card —
        it all just works because Mark doesn't have a library.
      </p>

      <h2>2. Markdown fidelity</h2>
      <p>
        Bear uses a custom Markdown-ish syntax. It looks similar but parses
        differently from CommonMark/GFM in several places (tags, links, todos).
        Round-tripping Bear notes through other tools loses information.
      </p>
      <p>
        Mark writes <strong>plain GitHub Flavored Markdown</strong> with
        no proprietary syntax. Headings, bold, italic, strikethrough, tables,
        task lists, code blocks, KaTeX math — everything is standard GFM that
        GitHub previews, VS Code, Obsidian, and Typora all understand the same
        way.
      </p>

      <h2>3. Native macOS feel</h2>
      <p>
        Both Bear and Mark are properly native. Bear's design is more
        opinionated and beautiful out of the box. Mark stays closer to Apple's
        system look — Liquid Glass surfaces, NSDocument-based file handling,
        proper macOS Versions browser, Spotlight previews, Open Recent menu.
      </p>

      <h2>4. Editing experience</h2>
      <p>
        Bear's editor is a hybrid: you type Markdown markers, they style live,
        but on disk it's Bear's syntax. Mark is WYSIWYG: the editor always
        shows formatted text, and the file on disk is clean Markdown. A
        floating toolbar gives you formatting commands without leaving the
        keyboard.
      </p>

      <h2>5. Pricing</h2>
      <p>
        Bear is free to install; advanced features and iCloud sync require
        <strong> Bear Pro at $30/year</strong> on auto-renewing subscription.
        Pricing is fair, but it's a recurring charge.
      </p>
      <p>
        Mark is <strong>$19.99 once, lifetime license, free v1 updates</strong>.
        No subscription. It costs less in year one, year two, year three, year
        four — and you keep it indefinitely.
      </p>

      <h2>6. When to pick each</h2>
      <p><strong>Pick Bear if</strong>:</p>
      <ul>
        <li>You take a lot of personal notes and want iOS/iPad sync without thinking about it.</li>
        <li>You love Bear's tagging system and its writing aesthetic.</li>
        <li>You don't need your notes to be portable Markdown files.</li>
      </ul>
      <p><strong>Pick Mark if</strong>:</p>
      <ul>
        <li>You want to own your files as plain <code>.md</code> on disk.</li>
        <li>You collaborate via Git, share notes through Dropbox, or open the same files in VS Code.</li>
        <li>You prefer one-time pricing to a subscription.</li>
        <li>You write documents, not personal notes — README files, design docs, blog posts.</li>
      </ul>

      <h2>7. The honest summary</h2>
      <p>
        Bear is the most beautiful note-taking app on Mac. Mark is the most
        respectful editor for your <code>.md</code> files. If you're a writer
        or developer whose files need to live as portable Markdown that any
        tool can read, Mark is the more honest tool. If you want a polished
        personal notebook with iCloud sync — Bear is great at that, and you'll
        be happy there.
      </p>
    </PostLayout>
  );
}
