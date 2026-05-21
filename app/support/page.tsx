import type { Metadata } from "next";
import { Mail, MessageCircle, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Mark. Email support, FAQ, and helpful resources.",
};

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <header className="mb-12 flex flex-col items-center text-center">
        <span className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Support
        </span>
        <h1 className="text-balance text-5xl font-semibold tracking-tight">
          We're here to help.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Most questions are answered below. For anything else, send us an
          email and we'll get back within 24–48 hours.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <a
          href="mailto:support@getmark.sh"
          className="group flex flex-col gap-2 rounded-2xl border border-rule bg-white/70 p-6 backdrop-blur-sm transition-shadow hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.12)]"
        >
          <Mail className="mb-1 h-6 w-6 text-foreground/90" />
          <span className="font-medium">Email support</span>
          <span className="text-sm text-[color:var(--accent)] group-hover:underline">
            support@getmark.sh
          </span>
        </a>
        <a
          href="https://github.com/justmalhar/mark/issues"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col gap-2 rounded-2xl border border-rule bg-white/70 p-6 backdrop-blur-sm transition-shadow hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.12)]"
        >
          <MessageCircle className="mb-1 h-6 w-6 text-foreground/90" />
          <span className="font-medium">Report a bug</span>
          <span className="text-sm text-[color:var(--accent)] group-hover:underline">
            github.com/justmalhar/mark/issues
          </span>
        </a>
        <a
          href="https://github.com/justmalhar/mark/releases"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col gap-2 rounded-2xl border border-rule bg-white/70 p-6 backdrop-blur-sm transition-shadow hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.12)]"
        >
          <BookOpen className="mb-1 h-6 w-6 text-foreground/90" />
          <span className="font-medium">Release notes</span>
          <span className="text-sm text-[color:var(--accent)] group-hover:underline">
            What's new in Mark
          </span>
        </a>
      </div>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">Frequently asked</h2>
        <dl className="divide-y divide-rule rounded-2xl border border-rule bg-white/60 backdrop-blur-sm">
          {faqs.map(({ q, a }) => (
            <div key={q} className="px-6 py-5">
              <dt className="font-medium tracking-tight">{q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-16 rounded-2xl border border-rule bg-white/60 p-8 backdrop-blur-sm">
        <h2 className="text-xl font-semibold tracking-tight">Still stuck?</h2>
        <p className="mt-2 text-muted-foreground">
          Send us a note and we'll do our best to help. Please include your
          macOS version and what you were trying to do.
        </p>
        <a
          href="mailto:support@getmark.sh?subject=Mark%20support"
          className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background hover:opacity-90"
        >
          Email support
        </a>
      </section>
    </div>
  );
}

const faqs = [
  {
    q: "How do I make Mark the default for .md files?",
    a: "Mark prompts you on first launch. You can also set it any time via File → Make Default for Markdown Files… , or in Finder: right-click a .md → Get Info → Open With: Mark → Change All.",
  },
  {
    q: "Where are my files stored?",
    a: "Mark only ever reads and writes files you explicitly open or save to. There is no Mark library or cloud sync; the file you see in Finder is the file you edit.",
  },
  {
    q: "Can I install Mark on more than one Mac?",
    a: "Yes. Buying Mark on the Mac App Store lets you install it on every Mac signed in to your Apple ID at no extra cost.",
  },
  {
    q: "Does Mark support iCloud Drive?",
    a: "Mark works with any file you can read in Finder, including files stored in iCloud Drive. There is no iCloud-specific syncing inside the app in v1.",
  },
  {
    q: "I found a bug. What should I do?",
    a: "Email support@getmark.sh with steps to reproduce, your macOS version, and a screenshot if you can. We triage every report and fix verified bugs in the next update.",
  },
];
