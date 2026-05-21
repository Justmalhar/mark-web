import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Screenshots } from "@/components/screenshots";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { SoftwareApplicationJsonLd, FaqPageJsonLd } from "@/components/json-ld";

const homeFaq = [
  {
    question: "How does the one-time price work?",
    answer:
      "Pay $19.99 once. Use Mark on every Mac signed in to your Apple ID, with free updates for as long as you use the app. No subscription, no renewals.",
  },
  {
    question: "Does Mark need an internet connection?",
    answer:
      "No. Mark runs entirely on your Mac. Your documents never leave your device.",
  },
  {
    question: "Which Macs is Mark for?",
    answer:
      "Any Mac running macOS 14 Sonoma or later — Apple Silicon and Intel. Liquid Glass effects light up automatically on macOS 15 and newer.",
  },
  {
    question: "Will my files work in other apps?",
    answer:
      "Always. Mark reads and writes plain GitHub Flavored Markdown — exactly what VS Code, Obsidian, and GitHub use. Your files stay yours.",
  },
  {
    question: "What about refunds?",
    answer:
      "Apple handles refunds through reportaproblem.apple.com within 14 days of purchase, under standard Mac App Store policy.",
  },
  {
    question: "How do I get help?",
    answer:
      "Email support@getmark.sh and we usually reply within a day.",
  },
];

export default function HomePage() {
  return (
    <>
      <SoftwareApplicationJsonLd />
      <FaqPageJsonLd qa={homeFaq} />
      <Hero />
      <Features />
      <Screenshots />
      <Pricing />
      <Faq />
    </>
  );
}
