import type { Metadata } from "next";
import { PostLayout } from "@/components/post-layout";
import { getPost } from "@/lib/posts";
import { ABSOLUTE } from "@/lib/site";

const post = getPost("github-flavored-markdown-cheat-sheet")!;

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
        A practical reference for GitHub Flavored Markdown — the dialect that
        GitHub, VS Code, Obsidian, Mark, and most modern editors share.
        Bookmark this page; everything below is copy-pasteable.
      </p>

      <h2>Headings</h2>
      <pre><code>{`# H1
## H2
### H3
#### H4
##### H5
###### H6`}</code></pre>

      <h2>Emphasis</h2>
      <pre><code>{`**bold**, *italic*, ***bold italic***, ~~strikethrough~~, \`inline code\``}</code></pre>

      <h2>Lists</h2>
      <pre><code>{`- Bullet
- Bullet
  - Nested

1. Ordered
2. Ordered

- [x] Task done
- [ ] Task todo`}</code></pre>

      <h2>Links and images</h2>
      <pre><code>{`[Link text](https://example.com)
[Reference][id]

![Alt text](image.png)
![Alt text](image.png "Title")

[id]: https://example.com`}</code></pre>

      <h2>Code blocks</h2>
      <pre><code>{"```ts\nfunction hello(name: string) {\n  return `Hello, ${name}`;\n}\n```"}</code></pre>
      <p>
        The language tag (<code>ts</code>, <code>py</code>, <code>rs</code>,
        <code>sql</code>, …) enables syntax highlighting in GitHub, Mark, and
        most renderers.
      </p>

      <h2>Tables</h2>
      <pre><code>{`| Left | Center | Right |
| :--- | :----: | ----: |
| a    |   b    |     c |`}</code></pre>
      <p>
        The colons in the separator row control column alignment.
      </p>

      <h2>Blockquotes</h2>
      <pre><code>{`> "Simplicity is the ultimate sophistication." — Leonardo da Vinci

> Nested
>> like this`}</code></pre>

      <h2>Horizontal rule</h2>
      <pre><code>{`---`}</code></pre>

      <h2>Math (KaTeX)</h2>
      <pre><code>{`Inline: $E = mc^2$

Block:

$$
\\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx = \\sqrt{\\pi}
$$`}</code></pre>
      <p>
        Math support is technically a GFM extension — works in GitHub since
        2022, in Mark, and in most modern editors.
      </p>

      <h2>HTML escape hatch</h2>
      <p>
        GFM allows raw HTML for things Markdown doesn't cover natively:
      </p>
      <pre><code>{`<details>
  <summary>Click to expand</summary>

  Hidden content goes here.
</details>`}</code></pre>

      <h2>The bits people forget</h2>
      <ul>
        <li>Two spaces at the end of a line = hard line break.</li>
        <li>Blank line between paragraphs is mandatory; single newline doesn't break paragraphs.</li>
        <li>Code fences need a blank line before and after for clean rendering.</li>
        <li>Escape special characters with backslash: <code>\*</code>, <code>\_</code>, <code>\\</code>.</li>
      </ul>
    </PostLayout>
  );
}
