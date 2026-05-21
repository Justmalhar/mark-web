"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-5xl px-6 pt-20 pb-12 md:pt-28 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <Image
            src="/mark-logo.svg"
            alt="Mark logo"
            width={84}
            height={84}
            priority
          />
          <h1 className="mt-6 text-balance text-[44px] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[88px]">
            Markdown.
            <br />
            <span className="text-muted-foreground">Native to the Mac.</span>
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg leading-snug text-foreground/80 md:text-xl">
            Open <span className="font-mono text-[0.95em]">.md</span> files instantly.
            Edit with a WYSIWYG toolbar that feels like part of macOS. Save plain
            Markdown your tools already understand.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <Link
              href="#pricing"
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-[15px] font-medium text-background transition-opacity hover:opacity-90"
            >
              Download — $19.99
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center gap-1 text-[15px] font-medium text-[color:var(--accent)] hover:underline"
            >
              Learn more
              <span aria-hidden>›</span>
            </Link>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            One-time lifetime purchase. Free updates forever.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto w-full max-w-5xl px-6 pb-24 md:pb-32"
      >
        <div className="aspect-[16/10] w-full overflow-hidden rounded-[28px] border border-black/5 bg-surface-2 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.35)]">
          <Image
            src="/screenshots/hero.svg"
            alt="Mark editor showing rendered markdown with a floating Liquid Glass toolbar"
            width={1600}
            height={1000}
            className="h-full w-full object-cover"
            priority
            unoptimized
          />
        </div>
      </motion.div>
    </section>
  );
}
