import type { Metadata } from "next";
import { PostLayout } from "@/components/post-layout";
import { getPost } from "@/lib/posts";
import { ABSOLUTE } from "@/lib/site";

const post = getPost("how-to-convert-markdown-to-pdf-on-mac")!;

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
        There are four ways to convert a Markdown file to PDF on macOS, and
        they produce wildly different output. Here's the ranking from "looks
        like a document" to "looks like a terminal screenshot."
      </p>

      <h2>1. A dedicated Markdown editor (the best result)</h2>
      <p>
        Apps like Mark have <em>File → Export → PDF</em> built in. The output
        uses the same rendering you see in the editor — proper typography,
        spacing, code highlighting, math, and inline images. One click, no
        configuration.
      </p>
      <p>
        Mark's PDF export uses the system's print engine through{" "}
        <code>WKWebView.createPDF</code>, which gives you sharp text, vector
        graphics for math, and consistent page breaks.
      </p>

      <h2>2. Pandoc (the power-user option)</h2>
      <p>
        <code>pandoc input.md -o output.pdf</code> produces excellent PDFs if
        you also have a LaTeX toolchain installed. The downside: setting up
        BasicTeX is ~100&nbsp;MB and the default LaTeX template looks like an
        academic paper.
      </p>
      <p>
        For ad-hoc use:
      </p>
      <pre><code>{`brew install pandoc basictex
pandoc input.md -o output.pdf`}</code></pre>
      <p>
        To get a more modern look, pair Pandoc with a custom Eisvogel template
        or with Typst as the engine.
      </p>

      <h2>3. Print from your browser via a rendered preview</h2>
      <p>
        Render your Markdown to HTML, open it in Safari or Chrome, then{" "}
        <em>File → Export as PDF</em>. Workable but you need to render the
        Markdown first (any editor will export to HTML).
      </p>

      <h2>4. macOS's built-in PDF printer</h2>
      <p>
        Any app's <em>File → Print → Save as PDF</em> works on a Markdown file
        but only after that app has rendered it. TextEdit will produce a PDF
        of the raw <code>.md</code> source — which is what you don't want.
      </p>

      <h2>The recommendation</h2>
      <p>
        For one-off Markdown → PDF on Mac, the fastest path is a Markdown
        editor with native export. For repeatable, scriptable pipelines, use
        Pandoc. Skip the print-dialog approach unless you're already in a
        rendered preview.
      </p>
    </PostLayout>
  );
}
