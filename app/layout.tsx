import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://getmark.sh";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mark — Native macOS markdown editor",
    template: "%s · Mark",
  },
  description:
    "The simplest way to read and edit Markdown on macOS. WYSIWYG, fast, private. One-time $19.99.",
  applicationName: "Mark",
  keywords: [
    "Markdown editor",
    "macOS markdown app",
    "WYSIWYG markdown",
    "GitHub Flavored Markdown",
    "Mac app",
    "Mark app",
  ],
  authors: [{ name: "Malhar Ujawane", url: "https://www.justmalhar.com" }],
  creator: "Malhar Ujawane",
  openGraph: {
    title: "Mark — Native macOS markdown editor",
    description:
      "WYSIWYG Markdown for macOS. Open .md files instantly. One-time $19.99.",
    url: SITE_URL,
    siteName: "Mark",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark — Native macOS markdown editor",
    description:
      "WYSIWYG Markdown for macOS. Open .md files instantly. One-time $19.99.",
    creator: "@justmalhar",
    images: ["/og.png"],
  },
  icons: { icon: "/mark-logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
