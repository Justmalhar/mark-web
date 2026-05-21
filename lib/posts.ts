/// Blog post registry. Adding an entry here + a matching route is all that's
/// needed for it to show up in the index, sitemap, and JSON-LD.
export type Post = {
  slug: string;
  title: string;
  description: string;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  /** Short keyword set this post targets */
  keywords: string[];
  /** Words like "comparison", "guide", "review" */
  category: string;
  /** ~2 min, ~5 min, etc. */
  readingTime: string;
};

export const posts: Post[] = [
  {
    slug: "mark-vs-obsidian",
    title: "Mark vs Obsidian: which Markdown editor is right for your Mac?",
    description:
      "Obsidian is powerful but heavy. Mark is fast, native, and built around plain .md files. A side-by-side comparison for Mac users in 2026.",
    date: "2026-05-22",
    keywords: [
      "obsidian alternative mac",
      "obsidian vs mark",
      "best markdown editor mac",
      "lightweight obsidian alternative",
      "native markdown app mac",
    ],
    category: "Comparison",
    readingTime: "6 min read",
  },
  {
    slug: "mark-vs-bear-notes",
    title: "Mark vs Bear: the modern, plain-text alternative for macOS",
    description:
      "Bear is a beautiful note-taking app, but its files live in a proprietary library. Mark works on your real .md files. Here's how the two compare for writers and developers.",
    date: "2026-05-22",
    keywords: [
      "bear notes alternative",
      "bear vs mark",
      "plain text bear alternative",
      "markdown app mac",
      "markdown editor mac",
    ],
    category: "Comparison",
    readingTime: "5 min read",
  },
  {
    slug: "best-markdown-editor-for-mac-2026",
    title: "The best Markdown editor for Mac in 2026",
    description:
      "We compared eight Markdown editors on macOS — Obsidian, Bear, Typora, iA Writer, MacDown, MarkText, VS Code, and Mark — across speed, native feel, file ownership, and price.",
    date: "2026-05-22",
    keywords: [
      "best markdown editor mac",
      "markdown editor macos 2026",
      "fastest markdown editor mac",
      "native markdown app",
      "ia writer alternative",
    ],
    category: "Guide",
    readingTime: "9 min read",
  },
  {
    slug: "mark-vs-typora",
    title: "Mark vs Typora: a native macOS take on WYSIWYG Markdown",
    description:
      "Typora invented live-preview Markdown editing. Mark brings the same idea to a true native macOS app — without Electron and without compromising on file ownership.",
    date: "2026-05-08",
    keywords: [
      "typora alternative mac",
      "typora vs mark",
      "wysiwyg markdown mac",
      "native typora alternative",
      "markdown editor without electron",
    ],
    category: "Comparison",
    readingTime: "5 min read",
  },
  {
    slug: "best-free-markdown-editor-for-mac",
    title: "Best free Markdown editor for Mac (and when it's worth paying)",
    description:
      "MacDown, MarkText, and VS Code are the standout free Markdown editors on macOS. Here's how they compare — and where a paid editor like Mark earns its $19.99.",
    date: "2026-04-26",
    keywords: [
      "free markdown editor mac",
      "best free markdown editor mac",
      "macdown alternative",
      "marktext mac",
      "open source markdown editor mac",
    ],
    category: "Guide",
    readingTime: "7 min read",
  },
  {
    slug: "mark-vs-ia-writer",
    title: "Mark vs iA Writer: which Markdown editor for serious writers?",
    description:
      "iA Writer is the gold standard for distraction-free Markdown writing. Mark approaches the same problem from a different direction. A frank comparison.",
    date: "2026-04-12",
    keywords: [
      "ia writer alternative",
      "ia writer vs mark",
      "markdown editor for writers mac",
      "minimalist markdown editor mac",
      "best writing app mac",
    ],
    category: "Comparison",
    readingTime: "6 min read",
  },
  {
    slug: "how-to-open-md-files-on-mac",
    title: "How to open .md files on Mac (the right way)",
    description:
      "macOS opens .md files in TextEdit by default, which shows raw Markdown markers. Here's how to set a proper Markdown editor as the default — and which one to pick.",
    date: "2026-03-30",
    keywords: [
      "open md files mac",
      "md file extension mac",
      "how to read markdown on mac",
      "default app for md files mac",
      "set default app markdown",
    ],
    category: "How-to",
    readingTime: "4 min read",
  },
  {
    slug: "mark-vs-notion",
    title: "Mark vs Notion: when to pick a Markdown editor over a workspace",
    description:
      "Notion is a database disguised as a document. Mark is a document disguised as nothing. Here's when each is the right call for Mac users.",
    date: "2026-03-15",
    keywords: [
      "notion alternative markdown",
      "notion vs mark",
      "markdown editor instead of notion",
      "lightweight notion alternative",
      "best mac writing app",
    ],
    category: "Comparison",
    readingTime: "6 min read",
  },
  {
    slug: "how-to-convert-markdown-to-pdf-on-mac",
    title: "How to convert Markdown to PDF on Mac (without losing formatting)",
    description:
      "Pandoc, the Print dialog, and dedicated editors like Mark all convert .md to PDF — but the output quality varies wildly. Here's what works in 2026.",
    date: "2026-03-01",
    keywords: [
      "convert markdown to pdf mac",
      "md to pdf mac",
      "markdown to pdf",
      "export markdown pdf",
      "pandoc markdown pdf",
    ],
    category: "How-to",
    readingTime: "5 min read",
  },
  {
    slug: "github-flavored-markdown-cheat-sheet",
    title: "GitHub Flavored Markdown cheat sheet (every syntax you'll need)",
    description:
      "A complete, copy-pasteable reference for GFM — tables, task lists, code fences, math, links, images, and the small details that matter.",
    date: "2026-02-15",
    keywords: [
      "github flavored markdown cheat sheet",
      "gfm cheat sheet",
      "markdown syntax reference",
      "markdown table syntax",
      "markdown cheat sheet",
    ],
    category: "Reference",
    readingTime: "8 min read",
  },
  {
    slug: "how-to-write-a-great-readme",
    title: "How to write a great README in Markdown",
    description:
      "A README is the first thing anyone sees about your project. Here's a battle-tested structure plus the GFM tricks that make a README pop on GitHub.",
    date: "2026-02-01",
    keywords: [
      "how to write a readme",
      "good readme template",
      "github readme markdown",
      "readme best practices",
      "readme markdown",
    ],
    category: "Guide",
    readingTime: "7 min read",
  },
  {
    slug: "mark-vs-vscode-for-markdown",
    title: "Mark vs VS Code for Markdown: when to leave the IDE",
    description:
      "VS Code is fine for README files, but it isn't a Markdown editor. Mark is. Here's how the two compare when prose, not code, is the document.",
    date: "2026-01-18",
    keywords: [
      "vs code markdown editor",
      "vscode markdown alternative",
      "markdown editor vs ide",
      "best markdown editor vscode",
      "markdown vscode vs mark",
    ],
    category: "Comparison",
    readingTime: "5 min read",
  },
  {
    slug: "katex-math-in-markdown",
    title: "How to write math in Markdown with KaTeX",
    description:
      "Inline $E=mc^2$ and block math render the same way on GitHub, Obsidian, and Mark. A practical KaTeX guide with the syntax that actually works.",
    date: "2026-01-04",
    keywords: [
      "katex markdown",
      "math in markdown",
      "markdown equations",
      "latex markdown",
      "github math markdown",
    ],
    category: "Guide",
    readingTime: "6 min read",
  },
  {
    slug: "why-native-mac-apps-are-back",
    title: "Why native Mac apps are making a comeback in 2026",
    description:
      "After a decade of Electron, the best new Mac apps are SwiftUI-native again. Here's why developers are returning to the platform — and why users notice.",
    date: "2025-12-15",
    keywords: [
      "native mac apps",
      "swiftui apps",
      "electron vs native mac",
      "best mac apps 2026",
      "indie mac apps",
    ],
    category: "Essay",
    readingTime: "6 min read",
  },
  {
    slug: "best-obsidian-alternatives-for-mac",
    title: "5 best Obsidian alternatives for Mac users in 2026",
    description:
      "If Obsidian's vault model, Electron footprint, or subscription Sync aren't for you, these five Mac apps cover the same ground — including the one we built.",
    date: "2025-11-30",
    keywords: [
      "obsidian alternatives",
      "obsidian alternative mac",
      "apps like obsidian",
      "obsidian replacement mac",
      "lightweight pkm mac",
    ],
    category: "Guide",
    readingTime: "7 min read",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
