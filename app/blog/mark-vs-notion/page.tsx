import type { Metadata } from "next";
import { PostLayout } from "@/components/post-layout";
import { getPost } from "@/lib/posts";
import { ABSOLUTE } from "@/lib/site";

const post = getPost("mark-vs-notion")!;

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
        Notion is a workspace. It's a database engine wearing a document UI,
        with collaboration, comments, blocks, embeds, and a server somewhere
        between you and your content. It's brilliant — and often the wrong
        tool.
      </p>
      <p>
        If what you actually need is a Markdown editor for personal documents,
        a tool like Mark is faster, cheaper, and more honest about ownership.
      </p>

      <h2>Where Notion shines</h2>
      <ul>
        <li>Team collaboration with comments, mentions, and permissions.</li>
        <li>Relational databases — tasks, projects, CRMs as documents.</li>
        <li>Web access from any browser, any device.</li>
        <li>Templates and a thriving template marketplace.</li>
      </ul>

      <h2>Where Notion struggles</h2>
      <ul>
        <li><strong>Offline.</strong> Notion is online-first; offline support is patchy.</li>
        <li><strong>Speed.</strong> Even on a fast Mac, every block is a round-trip.</li>
        <li><strong>File ownership.</strong> Your content lives on Notion's servers in a proprietary format.</li>
        <li><strong>Markdown export</strong> is lossy — embeds, callouts, and databases don't survive.</li>
        <li><strong>Subscription pricing</strong> — $10/user/month for the standard plan.</li>
      </ul>

      <h2>Where Mark fits</h2>
      <p>
        Mark assumes the opposite design: every document is a plain{" "}
        <code>.md</code> file on your disk. No server, no account, no sync
        you didn't ask for. Open instantly, edit WYSIWYG, save to wherever
        you already keep your files.
      </p>

      <h2>When to pick each</h2>
      <p><strong>Notion</strong>: shared docs for a team, project trackers, internal wikis, anything relational.</p>
      <p><strong>Mark</strong>: personal documents that should stay portable — README files, blog posts, design specs, lecture notes, journal entries. Anything you'd be sad to lose to a vendor outage or a subscription lapse.</p>
      <p>
        Many people use both. Mark for the documents that are theirs forever.
        Notion for the collaboration that needs to happen in a shared
        workspace. The mistake is using Notion for everything because the
        block editor is fun — and ending up with a vendor lock-in on
        documents that didn't need a database.
      </p>
    </PostLayout>
  );
}
