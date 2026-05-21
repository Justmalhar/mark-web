import type { Metadata } from "next";
import { PostLayout } from "@/components/post-layout";
import { getPost } from "@/lib/posts";
import { ABSOLUTE } from "@/lib/site";

const post = getPost("mark-vs-vscode-for-markdown")!;

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
        VS Code is a great place to edit Markdown <em>that lives in a code
        repository</em>. It's a poor place to write Markdown that doesn't.
        Here's where the line is.
      </p>

      <h2>VS Code's strengths for Markdown</h2>
      <ul>
        <li>Built-in Markdown preview (Cmd-K&nbsp;V) renders GFM accurately.</li>
        <li>Git integration is right there — diff your draft, commit, push.</li>
        <li>Extensions add linting, table formatting, link checking, mermaid previews.</li>
        <li>Multi-file workspace — perfect for navigating large doc sets.</li>
      </ul>

      <h2>Where VS Code falls short</h2>
      <ul>
        <li>
          <strong>It's a code editor.</strong> The default UI is a tree of
          files, a terminal panel, a status bar full of code-specific widgets.
          For prose-heavy work it's noisy.
        </li>
        <li>
          <strong>No WYSIWYG.</strong> You edit raw Markdown source and look at
          a preview pane. Switching back and forth interrupts flow.
        </li>
        <li>
          <strong>It's Electron.</strong> 100&nbsp;MB+ install, slower cold
          start, no macOS Versions integration.
        </li>
        <li>
          <strong>No native macOS niceties.</strong> No proxy icon, no Open
          Recent that respects macOS conventions, no Liquid Glass.
        </li>
      </ul>

      <h2>Where Mark fits</h2>
      <p>
        Mark is what VS Code isn't: a focused, WYSIWYG, native macOS Markdown
        editor. You open <code>.md</code> files with double-click; the editor
        renders them as formatted prose; you save plain GFM back to disk.
        Nothing else.
      </p>

      <h2>How to use both</h2>
      <p>
        Many developers use both productively:
      </p>
      <ul>
        <li><strong>VS Code</strong> for README files, doc-as-code inside a project repo, technical writing alongside code, mermaid diagrams.</li>
        <li><strong>Mark</strong> for blog drafts, design specs, lecture notes, journal entries, anything that is itself a document rather than part of a codebase.</li>
      </ul>
      <p>
        The right tool depends on whether the Markdown is "about the code" or
        "is the work." Both apps respect plain <code>.md</code> on disk, so
        switching between them is friction-free.
      </p>
    </PostLayout>
  );
}
