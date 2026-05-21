import type { Metadata } from "next";
import { PostLayout } from "@/components/post-layout";
import { getPost } from "@/lib/posts";
import { ABSOLUTE } from "@/lib/site";

const post = getPost("how-to-write-a-great-readme")!;

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
        A great README earns its project a star. A bad README costs you users
        who never bothered to read past the title. Here's the structure that
        consistently works, plus the GitHub-Flavored Markdown details that
        make a README pop.
      </p>

      <h2>The structure that works</h2>
      <ol>
        <li><strong>One-line description</strong> right under the H1. What is this and who is it for?</li>
        <li><strong>Screenshot or demo GIF</strong>. Show, don't tell. People decide in seconds.</li>
        <li><strong>Quickstart</strong>. The five lines a user runs to try the thing.</li>
        <li><strong>Key features</strong>. Three to seven bullets, not a wall.</li>
        <li><strong>Installation</strong>. Multiple platforms, with copy-pasteable code blocks.</li>
        <li><strong>Usage</strong>. Two or three realistic examples.</li>
        <li><strong>Configuration</strong>. A table of options if you have them.</li>
        <li><strong>FAQ / troubleshooting</strong>. The questions you keep getting.</li>
        <li><strong>License</strong> and how to contribute.</li>
      </ol>

      <h2>The one-line description rule</h2>
      <p>
        If a stranger reads only the first sentence of your README, they
        should know what the project does. Avoid "A fast, modern, ergonomic
        framework for..." Pick the most useful concrete noun.
      </p>
      <ul>
        <li>❌ <em>A modern, declarative framework for building interfaces</em></li>
        <li>✅ <em>React is a JavaScript library for building user interfaces.</em></li>
      </ul>

      <h2>GFM tricks that look great on GitHub</h2>

      <h3>Centered badges</h3>
      <p>
        GitHub renders <code>&lt;p align="center"&gt;</code> blocks. Use it for
        a row of CI / version / license badges.
      </p>

      <h3>Collapsible sections</h3>
      <p>
        Use <code>&lt;details&gt;</code> for long content people may not need:
      </p>
      <pre><code>{`<details>
  <summary>Full configuration reference</summary>

  | Option | Default | Description |
  | ------ | ------- | ----------- |
  | …      | …       | …           |
</details>`}</code></pre>

      <h3>Task lists in issues</h3>
      <p>
        Task lists (<code>- [ ] item</code>) work in READMEs and become
        clickable checkboxes inside GitHub issues and pull requests.
      </p>

      <h3>Tables for options and config</h3>
      <p>
        A clean table beats a wall of "Option X: description" prose every
        time. GFM supports column alignment with colons in the separator row.
      </p>

      <h3>Code blocks with language tags</h3>
      <p>
        Always add the language: <code>```ts</code>, <code>```py</code>,{" "}
        <code>```sh</code>. GitHub colorises them automatically and they're
        readable on every other renderer.
      </p>

      <h2>The things that quietly hurt READMEs</h2>
      <ul>
        <li><strong>No screenshot.</strong> If a screenshot would make sense, the absence of one is a sign.</li>
        <li><strong>Outdated install instructions.</strong> The number-one reason users bounce. Test them on a clean machine.</li>
        <li><strong>"Coming soon" sections.</strong> Don't write a section you can't ship.</li>
        <li><strong>Too much background.</strong> Move history, philosophy, and motivation to a separate <code>BACKGROUND.md</code>.</li>
      </ul>

      <h2>Tooling to draft READMEs</h2>
      <p>
        Write your README in a real Markdown editor so you see exactly how
        GitHub will render it. Mark is one option — true WYSIWYG, KaTeX,
        syntax-highlighted code blocks, table editing, image embedding. Saves
        you the "commit, refresh GitHub, see what's wrong" loop.
      </p>
    </PostLayout>
  );
}
