import {
  Sparkles,
  Type,
  Image as ImageIcon,
  Code2,
  Sigma,
  Search,
  FileDown,
  Lock,
  Keyboard,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Liquid Glass toolbar",
    body: "Floating. Translucent. Always one click from H1–H6, lists, tables, links.",
  },
  {
    icon: Type,
    title: "True WYSIWYG",
    body: "Bold looks bold on screen, plain **bold** on disk. Both, never one.",
  },
  {
    icon: Sigma,
    title: "KaTeX math",
    body: "Inline $E=mc^2$ and block math render exactly like GitHub.",
  },
  {
    icon: Code2,
    title: "Highlighted code",
    body: "highlight.js with a clickable language badge and a copy button.",
  },
  {
    icon: ImageIcon,
    title: "Inline images",
    body: "Drop images straight into the document. No broken paths, no asset folders.",
  },
  {
    icon: Search,
    title: "Find & replace",
    body: "Cmd-F overlay with case-sensitive search and replace all.",
  },
  {
    icon: FileDown,
    title: "Export anywhere",
    body: "PDF and self-contained HTML in one click. Print-ready, share-ready.",
  },
  {
    icon: Lock,
    title: "Private by design",
    body: "Sandboxed. No telemetry. No network. Your files never leave the disk.",
  },
  {
    icon: Keyboard,
    title: "Feels like macOS",
    body: "Autosave, native versions, Open Recent, Spotlight. Everything you expect.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-surface-2">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <span className="eyebrow">Built for writers and engineers</span>
          <h2 className="mt-3 text-balance text-[34px] font-semibold leading-tight tracking-[-0.02em] md:text-[56px]">
            Everything you'd want in a Mac Markdown editor.
            <br className="hidden md:inline" />
            <span className="text-muted-foreground"> Nothing you wouldn't.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-3xl bg-white p-7 transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.15)]"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-foreground text-background">
                <Icon size={18} strokeWidth={2} />
              </div>
              <h3 className="mb-2 text-[18px] font-semibold tracking-tight">{title}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
