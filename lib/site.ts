/// Canonical site config, used by metadata / sitemap / JSON-LD.
export const SITE = {
  name: "Mark",
  url: "https://getmark.sh",
  tagline: "Native macOS Markdown editor",
  description:
    "Mark is a native macOS Markdown editor. WYSIWYG, fast, private. One-time $19.99 with free updates.",
  price: "19.99",
  currency: "USD",
  author: {
    name: "Malhar Ujawane",
    url: "https://www.justmalhar.com",
    email: "support@getmark.sh",
    twitter: "@justmalhar",
  },
  appStoreUrl: "https://apps.apple.com/app/mark",
  ogImage: "/og.png",
  twitter: "@justmalhar",
} as const;

export const ABSOLUTE = (path: string) => `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
