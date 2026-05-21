import type { Metadata } from "next";
import { PostLayout } from "@/components/post-layout";
import { getPost } from "@/lib/posts";
import { ABSOLUTE } from "@/lib/site";

const post = getPost("katex-math-in-markdown")!;

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
        GitHub supports Markdown math via KaTeX as of 2022. So does Obsidian,
        Notion, Quarto, and Mark. The syntax is consistent across all of them
        — once you know the four rules.
      </p>

      <h2>Inline math</h2>
      <p>
        Wrap a math expression in single dollar signs:
      </p>
      <pre><code>{`Einstein famously wrote $E = mc^2$ in 1905.`}</code></pre>
      <p>
        The expression renders inline with surrounding text.
      </p>

      <h2>Block math</h2>
      <p>
        Wrap a block expression in double dollar signs, on their own lines:
      </p>
      <pre><code>{`$$
\\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx = \\sqrt{\\pi}
$$`}</code></pre>
      <p>
        The expression renders centered on its own line, larger than inline.
      </p>

      <h2>Escaping in LaTeX</h2>
      <p>
        KaTeX uses LaTeX syntax, which means backslash commands are
        everywhere: <code>\frac</code>, <code>\sqrt</code>, <code>\int</code>,
        <code>\sum</code>, <code>\alpha</code>, <code>\beta</code>, …
      </p>
      <p>
        Underscores in subscripts (<code>x_1</code>) are normal in math mode
        even though Markdown elsewhere treats <code>_</code> as italic. KaTeX
        knows the difference.
      </p>

      <h2>Common gotchas</h2>
      <ul>
        <li><strong>No leading space</strong> after the opening <code>$</code>: <code>$ x $</code> won't render. Use <code>$x$</code>.</li>
        <li><strong>Block math needs blank lines</strong> around the <code>$$</code> markers in most renderers.</li>
        <li><strong>Escaped dollars</strong> in prose: write <code>\$5</code> to mean a literal dollar sign.</li>
        <li><strong>Long expressions</strong> wrap. Use <code>\\</code> for explicit line breaks in arrays.</li>
      </ul>

      <h2>Examples worth bookmarking</h2>
      <pre><code>{`Fractions:    \\frac{a}{b}
Roots:        \\sqrt{2}, \\sqrt[3]{8}
Powers:       x^{2}, x^{n+1}
Subscripts:   x_{1}, a_{ij}
Greek:        \\alpha, \\beta, \\pi, \\Omega
Sums:         \\sum_{i=1}^{n} i
Integrals:    \\int_{a}^{b} f(x)\\,dx
Matrices:     \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}
Aligned:      \\begin{aligned} a &= b \\\\ c &= d \\end{aligned}`}</code></pre>

      <h2>Editing math without leaving WYSIWYG</h2>
      <p>
        Editors like Mark render KaTeX live as you type — write{" "}
        <code>$E = mc^2$</code>, see <em>E = mc²</em>. Saves the round-trip of
        committing and refreshing GitHub to check that your LaTeX compiles.
      </p>
    </PostLayout>
  );
}
