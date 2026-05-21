import Image from "next/image";
import Link from "next/link";

// Hand-picked: the highest-intent comparison + guide posts. Surfacing them
// site-wide gives every page an internal link to the keywords we want to rank
// on (obsidian alternative, bear alternative, best mac markdown editor, etc.).
const popularGuides = [
  { href: "/blog/mark-vs-obsidian", label: "Mark vs Obsidian" },
  { href: "/blog/mark-vs-bear-notes", label: "Mark vs Bear" },
  { href: "/blog/mark-vs-typora", label: "Mark vs Typora" },
  { href: "/blog/mark-vs-ia-writer", label: "Mark vs iA Writer" },
  { href: "/blog/best-markdown-editor-for-mac-2026", label: "Best Markdown editor for Mac" },
  { href: "/blog/best-free-markdown-editor-for-mac", label: "Best free Markdown editor for Mac" },
  { href: "/blog/best-obsidian-alternatives-for-mac", label: "Best Obsidian alternatives" },
  { href: "/blog/how-to-open-md-files-on-mac", label: "How to open .md files on Mac" },
];

export function SiteFooter() {
  return (
    <footer className="bg-surface-2 text-[12px] text-muted-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-3 flex items-center gap-2 text-[13px] font-semibold text-foreground">
              <Image src="/mark-logo.svg" alt="" width={16} height={16} />
              Mark
            </div>
            <p className="leading-relaxed">Native macOS Markdown editor.</p>
          </div>

          <FooterCol title="Product">
            <FooterLink href="/#features">Features</FooterLink>
            <FooterLink href="/#pricing">Pricing</FooterLink>
            <FooterLink href="/#faq">FAQ</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
          </FooterCol>

          <FooterCol title="Popular guides">
            {popularGuides.map((g) => (
              <FooterLink key={g.href} href={g.href}>
                {g.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Support">
            <FooterLink href="mailto:support@getmark.sh" accent>
              support@getmark.sh
            </FooterLink>
          </FooterCol>

          <FooterCol title="Legal">
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/terms">Terms of Use</FooterLink>
          </FooterCol>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-rule pt-6 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Malhar Ujawane. All rights reserved.</span>
          <span>Made in Surat, India.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-3 text-[13px] font-semibold text-foreground">{title}</div>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  accent = false,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  accent?: boolean;
  external?: boolean;
}) {
  const className = accent
    ? "text-[color:var(--accent)] hover:underline underline-offset-4"
    : "hover:text-foreground";
  if (external || /^https?:/i.test(href) || href.startsWith("mailto:")) {
    return (
      <li>
        <a
          href={href}
          target={external || /^https?:/i.test(href) ? "_blank" : undefined}
          rel={external || /^https?:/i.test(href) ? "noreferrer noopener" : undefined}
          className={className}
        >
          {children}
        </a>
      </li>
    );
  }
  return (
    <li>
      <Link href={href} className={className}>
        {children}
      </Link>
    </li>
  );
}
