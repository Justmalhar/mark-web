import type { Metadata } from "next";
import { PostLayout } from "@/components/post-layout";
import { getPost } from "@/lib/posts";
import { ABSOLUTE } from "@/lib/site";

const post = getPost("best-free-markdown-editor-for-mac")!;

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
        If you just need to open a <code>.md</code> file once or twice a month,
        there's no reason to pay. macOS has three solid free Markdown editors
        and one excellent text editor that handles Markdown well. Here's how
        they line up.
      </p>

      <h2>1. MacDown — the classic free Mac Markdown editor</h2>
      <p>
        Open-source, native Cocoa, MIT-licensed. MacDown uses a split-view
        layout: source on the left, rendered preview on the right. It's not
        WYSIWYG — you edit raw Markdown — but the preview is fast and the app
        weighs almost nothing.
      </p>
      <p>
        Development has slowed in recent years and there's no GFM
        task-list/table extensions out of the box, but for plain CommonMark
        editing it remains a perfectly good choice.
      </p>

      <h2>2. MarkText — open-source WYSIWYG</h2>
      <p>
        MarkText is an Electron app that does live WYSIWYG editing similar to
        Typora. It's free and open-source. Active development has slowed but
        the app is stable. Same Electron caveats apply: ~200&nbsp;MB install,
        slower cold start, no native macOS feel.
      </p>

      <h2>3. VS Code with the Markdown extension</h2>
      <p>
        If you already use VS Code for code, the built-in Markdown preview
        (Cmd-K&nbsp;V) is excellent. It's not designed for prose-heavy work —
        you edit raw Markdown source — but for README files and project docs
        it's hard to beat. Free, Electron-based.
      </p>

      <h2>4. TextEdit — already on your Mac</h2>
      <p>
        TextEdit opens <code>.md</code> files but shows raw Markdown markers
        as plain text. There's no rendering at all. Fine for quick edits, not
        a serious tool for Markdown work.
      </p>

      <h2>When the $19.99 for a paid editor is worth it</h2>
      <p>
        The free options above all have the same shape: split view (MacDown),
        Electron WYSIWYG (MarkText, Typora's free trial), or no rendering at
        all (TextEdit, VS Code). A paid editor like Mark earns its price when
        you want:
      </p>
      <ul>
        <li>True WYSIWYG with a native macOS feel (no Electron)</li>
        <li>NSDocument auto-save and Versions browsing</li>
        <li>KaTeX math and syntax-highlighted code out of the box</li>
        <li>Liquid Glass surfaces on macOS 15+</li>
        <li>Active development and an actual support channel</li>
      </ul>
      <p>
        Mark is <strong>$19.99 once, free updates for life within v1, no
        subscription</strong>. If you spend more than an hour a week in
        Markdown, the time saved is real.
      </p>
    </PostLayout>
  );
}
