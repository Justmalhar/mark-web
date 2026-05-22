import Link from "next/link";
import { Check } from "lucide-react";

const included = [
  "Universal macOS app — Apple Silicon and Intel",
  "Every feature — WYSIWYG, math, code, exports",
  "Free updates for life",
  "Single Apple ID — install on every Mac you own",
  "Sandboxed, private, offline. No telemetry. No subscription.",
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-surface-2">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
        <span className="eyebrow">Pricing</span>
        <h2 className="mx-auto mt-3 max-w-3xl text-balance text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[72px]">
          Pay once.
          <br />
          <span className="text-muted-foreground">Keep it forever.</span>
        </h2>

        <div className="mt-10 inline-flex items-baseline gap-3">
          <span className="text-[64px] font-semibold leading-none tracking-[-0.04em] md:text-[96px]">
            $19.99
          </span>
          <span className="text-lg text-muted-foreground md:text-xl">one-time</span>
        </div>

        <p className="mx-auto mt-4 max-w-xl text-balance text-[17px] text-muted-foreground md:text-lg">
          A lifetime purchase. Use Mark on every Mac signed in to your Apple ID,
          with free updates for life.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <Link
            href="https://apps.apple.com/app/mark"
            className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-[15px] font-medium text-background transition-opacity hover:opacity-90"
          >
            Get Mark on the Mac App Store
          </Link>
          <Link
            href="/support"
            className="inline-flex items-center gap-1 text-[15px] font-medium text-[color:var(--accent)] hover:underline"
          >
            Questions before buying
            <span aria-hidden>›</span>
          </Link>
        </div>

        <ul className="mx-auto mt-14 grid max-w-3xl gap-x-10 gap-y-4 text-left sm:grid-cols-2">
          {included.map((line) => (
            <li
              key={line}
              className="flex items-start gap-3 text-[15px] text-foreground/85"
            >
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                <Check size={12} strokeWidth={3} />
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
