import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/support", label: "Support" },
];

export function SiteHeader() {
  return (
    <header className="apple-nav sticky top-0 z-50 w-full">
      <nav className="mx-auto flex h-12 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-[15px] font-semibold tracking-tight">
          <Image src="/mark-logo.svg" alt="" width={18} height={18} priority />
          <span>Mark</span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[13px] text-foreground/85 transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#pricing"
          className="rounded-full bg-foreground px-3.5 py-1.5 text-[12px] font-medium text-background transition-opacity hover:opacity-90"
        >
          Download
        </Link>
      </nav>
    </header>
  );
}
