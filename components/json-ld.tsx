import { SITE } from "@/lib/site";

/// Inline JSON-LD script. Use one per page/section so Google can parse
/// individual schema entities (SoftwareApplication, FAQPage, Article…).
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SoftwareApplicationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: SITE.name,
        description: SITE.description,
        url: SITE.url,
        applicationCategory: "ProductivityApplication",
        operatingSystem: "macOS 14 or later",
        offers: {
          "@type": "Offer",
          price: SITE.price,
          priceCurrency: SITE.currency,
          url: SITE.appStoreUrl,
          availability: "https://schema.org/InStock",
        },
        aggregateRating: undefined,
        author: {
          "@type": "Person",
          name: SITE.author.name,
          url: SITE.author.url,
        },
        publisher: { "@type": "Person", name: SITE.author.name },
        image: `${SITE.url}${SITE.ogImage}`,
        downloadUrl: SITE.appStoreUrl,
        softwareVersion: "1.0",
        featureList: [
          "WYSIWYG Markdown editing",
          "GitHub Flavored Markdown",
          "KaTeX math rendering",
          "Syntax-highlighted code blocks",
          "Inline image insertion",
          "Find and Replace",
          "Export to PDF and HTML",
          "Sandboxed and offline-first",
        ],
      }}
    />
  );
}

export function FaqPageJsonLd({
  qa,
}: {
  qa: { question: string; answer: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: qa.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  keywords,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  keywords: string[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        author: {
          "@type": "Person",
          name: SITE.author.name,
          url: SITE.author.url,
        },
        publisher: {
          "@type": "Organization",
          name: SITE.name,
          logo: { "@type": "ImageObject", url: `${SITE.url}/mark-logo.svg` },
        },
        datePublished,
        dateModified: datePublished,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        keywords: keywords.join(", "),
        image: `${SITE.url}${SITE.ogImage}`,
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}
