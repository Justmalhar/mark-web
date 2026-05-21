"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const shots = [
  {
    src: "/screenshots/edit-mode.svg",
    alt: "Mark in edit mode with the formatting toolbar floating above the document",
    caption: "WYSIWYG editing with the Liquid Glass toolbar.",
  },
  {
    src: "/screenshots/code-block.svg",
    alt: "A Python code block with syntax highlighting and a copy button",
    caption: "Syntax highlighting, language badge, copy button.",
  },
  {
    src: "/screenshots/math.svg",
    alt: "Mark rendering KaTeX math equations inline and as a block",
    caption: "KaTeX renders inline and block math instantly.",
  },
];

export function Screenshots() {
  return (
    <section id="screens" className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <span className="eyebrow">Take a look</span>
          <h2 className="mt-3 text-balance text-[34px] font-semibold leading-tight tracking-[-0.02em] md:text-[56px]">
            Designed for macOS,
            <br className="hidden md:inline" />
            <span className="text-muted-foreground"> down to the pixel.</span>
          </h2>
        </div>

        <div className="space-y-20 md:space-y-28">
          {shots.map(({ src, alt, caption }, i) => (
            <motion.figure
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex flex-col items-center gap-5"
            >
              <div className="aspect-[16/10] w-full overflow-hidden rounded-[28px] border border-black/5 bg-surface-2 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.35)]">
                <Image
                  src={src}
                  alt={alt}
                  width={1600}
                  height={1000}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
              <figcaption className="max-w-md text-center text-[15px] text-muted-foreground">
                {caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
