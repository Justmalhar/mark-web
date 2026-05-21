import type { ReactNode } from "react";

function BlueLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const external = /^https?:/i.test(href);
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className="text-[color:var(--accent)] hover:underline underline-offset-4"
    >
      {children}
    </a>
  );
}

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "How does the one-time price work?",
    a: (
      <>
        Pay $19.99 once. Use Mark on every Mac signed in to your Apple ID, with
        free updates for as long as you use the app. No subscription, no
        renewals, no surprise charges.
      </>
    ),
  },
  {
    q: "Does Mark need an internet connection?",
    a: (
      <>
        No. Mark runs entirely on your Mac. Your documents never leave your
        device.
      </>
    ),
  },
  {
    q: "Which Macs is Mark for?",
    a: (
      <>
        Any Mac running macOS 14 Sonoma or later — Apple Silicon and Intel.
        Liquid Glass effects light up automatically on macOS 15 and newer.
      </>
    ),
  },
  {
    q: "Will my files work in other apps?",
    a: (
      <>
        Always. Mark reads and writes plain GitHub Flavored Markdown — exactly
        what{" "}
        <BlueLink href="https://code.visualstudio.com/">VS Code</BlueLink>,{" "}
        <BlueLink href="https://obsidian.md/">Obsidian</BlueLink>, and{" "}
        <BlueLink href="https://github.com/">GitHub</BlueLink> use. Your files
        stay yours.
      </>
    ),
  },
  {
    q: "What about refunds?",
    a: (
      <>
        Apple handles refunds through{" "}
        <BlueLink href="https://reportaproblem.apple.com">
          reportaproblem.apple.com
        </BlueLink>{" "}
        within 14 days of purchase, under standard Mac App Store policy.
      </>
    ),
  },
  {
    q: "How do I get help?",
    a: (
      <>
        Email{" "}
        <BlueLink href="mailto:support@getmark.sh">
          support@getmark.sh
        </BlueLink>{" "}
        and we usually reply within a day.
      </>
    ),
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-white scroll-mt-16">
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <div className="mb-12 text-center md:mb-16">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-3 text-balance text-[34px] font-semibold leading-tight tracking-[-0.02em] md:text-[56px]">
            Common questions.
          </h2>
        </div>
        <dl className="divide-y divide-rule">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="py-6">
              <dt className="text-[17px] font-semibold tracking-tight">{q}</dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
