import type { Metadata } from "next";
import { PostLayout } from "@/components/post-layout";
import { getPost } from "@/lib/posts";
import { ABSOLUTE } from "@/lib/site";

const post = getPost("mark-vs-obsidian")!;

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
        Obsidian is an extraordinary tool. It built one of the best
        knowledge-management communities on the internet — graph view, daily
        notes, plugins, themes. But it's also a 200&nbsp;MB Electron app that
        wraps every Markdown file inside a "vault," brings its own settings
        folder along, and treats <code>.md</code> as a fuel for its features
        rather than the product itself.
      </p>
      <p>
        Mark approaches the same job from the opposite end. It opens any{" "}
        <code>.md</code> file on your Mac in its own native window. No vault. No
        plugin marketplace. No&nbsp;graph. Just a fast, sandboxed editor that
        renders Markdown beautifully and saves plain text.
      </p>
      <p>
        Here's how they line up — and which one is the right pick for you.
      </p>

      <h2>1. File ownership</h2>
      <p>
        Obsidian stores its config and plugin data in a <code>.obsidian</code>{" "}
        folder next to your files. To use Obsidian's best features, you commit
        to organizing your work inside a vault. That's not bad — many people
        love it — but it does mean Obsidian becomes a layer over your files.
      </p>
      <p>
        Mark never touches anything except the file you opened. Double-click a{" "}
        <code>.md</code> in Finder, edit, save, close. The file you see in
        Finder is the file you edit. There is no Mark library.
      </p>

      <h2>2. Performance and native feel</h2>
      <p>
        Obsidian launches in 1–3 seconds on a typical Mac. Mark launches in well
        under a second because it's a real macOS app — no JS runtime to boot,
        no plugin manifests to load, just an <code>NSDocument</code> opening a
        text file.
      </p>
      <p>
        The native feel shows up in small places: macOS Versions browser,
        autosave, Spotlight previews, drag-out of the title-bar proxy icon,
        Liquid Glass surfaces on macOS&nbsp;15+. These are things you don't
        notice individually but feel as a whole.
      </p>

      <h2>3. WYSIWYG editing</h2>
      <p>
        Obsidian has live preview (you see formatted text while editing) and a
        separate Reading view. It's good but markdown markers occasionally leak
        through, and switching modes is a deliberate action.
      </p>
      <p>
        Mark is WYSIWYG from the start. The editor always shows formatted text;
        you never see <code>**bold**</code> markers in the document body. A
        floating Liquid Glass toolbar gives you H1–H6, lists, tables, code,
        math, link, image — all one click away.
      </p>

      <h2>4. Pricing</h2>
      <p>
        Obsidian is free for personal use and charges $50/year for the optional
        Sync service plus $96/year for Publish. Commercial licenses are
        $50/user/year. It's affordable, but it is a subscription.
      </p>
      <p>
        Mark is <strong>$19.99 once, lifetime license, free updates for
        life</strong>. No subscription. The Mac App Store handles the transaction
        and you can install Mark on every Mac signed in to your Apple ID.
      </p>

      <h2>5. When to pick each</h2>
      <p><strong>Pick Obsidian if</strong>:</p>
      <ul>
        <li>You build a personal knowledge base across hundreds of notes.</li>
        <li>You want graph view, backlinks, daily notes, and a plugin ecosystem.</li>
        <li>You're invested in PKM and want to extend the editor with community plugins.</li>
      </ul>
      <p><strong>Pick Mark if</strong>:</p>
      <ul>
        <li>You want to open a <code>.md</code> file and just edit it — like Notepad, but native and modern.</li>
        <li>You write README files, blog posts, design docs, lecture notes, or any kind of standalone Markdown.</li>
        <li>You value performance, file ownership, and zero subscriptions.</li>
        <li>You want your files to stay compatible with VS Code, GitHub, and every other tool that reads Markdown.</li>
      </ul>

      <h2>6. The honest summary</h2>
      <p>
        Obsidian and Mark serve different jobs. Obsidian is a knowledge
        management <em>system</em>. Mark is a Markdown <em>editor</em>. If you
        already love Obsidian, keep using Obsidian. If you've been opening{" "}
        <code>.md</code> files in TextEdit, BBEdit, or VS Code and wishing for a
        proper native macOS editor — Mark was built for you.
      </p>
    </PostLayout>
  );
}
