import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Mark is built with privacy in mind. We do not collect personal data, telemetry, or analytics from inside the app.",
};

export default function PrivacyPage() {
  return (
    <article className="prose-mark mx-auto px-6 py-20 md:py-28">
      <h1>Privacy Policy</h1>
      <p className="text-muted-foreground">Last updated: {formattedDate()}</p>

      <p>
        Mark is a native macOS Markdown editor distributed via the Mac App Store
        and published by Malhar Ujawane (&ldquo;we&rdquo;, &ldquo;us&rdquo;).
        Privacy is a first-class feature of the product. This policy explains
        what data we do and do not collect.
      </p>

      <h2>1. What Mark collects</h2>
      <p>
        <strong>Nothing.</strong> The Mark application runs entirely on your
        Mac. It makes no network requests, contains no analytics, telemetry,
        crash reporters, or tracking SDKs of any kind. Your documents and
        keystrokes never leave your device.
      </p>
      <p>
        The only data the app reads is the Markdown files you explicitly open,
        and only for the purpose of displaying and editing them. Files remain
        on your filesystem under your control at all times.
      </p>

      <h2>2. What the Mac App Store collects</h2>
      <p>
        When you purchase Mark, Apple processes the transaction on our behalf.
        Apple's privacy policy applies to that transaction. Apple may share
        aggregate, anonymous download and crash data with us through App Store
        Connect; this never includes personally identifiable information or
        document content.
      </p>

      <h2>3. What this website collects</h2>
      <p>
        getmark.sh uses Vercel Analytics, which records anonymous,
        privacy-preserving page-view counts. No cookies are set, no IP
        addresses are stored, and no cross-site identifiers are used. See
        <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noreferrer"> Vercel's privacy documentation</a> for details.
      </p>

      <h2>4. Support email</h2>
      <p>
        If you contact us at <a href="mailto:support@getmark.sh">support@getmark.sh</a>,
        we receive your email address and the contents of your message. We use
        these to respond to your request and keep a record of correspondence.
        We do not add support emails to any marketing list and we never share
        them with third parties.
      </p>

      <h2>5. Data we never have</h2>
      <ul>
        <li>The contents of your Markdown files</li>
        <li>Your usage patterns inside the app</li>
        <li>Your IP address or location</li>
        <li>Any unique device identifier</li>
      </ul>

      <h2>6. Your rights</h2>
      <p>
        Because Mark does not collect personal data, there is nothing about you
        for us to delete or export. If you have emailed support and wish for
        that correspondence to be deleted, email{" "}
        <a href="mailto:support@getmark.sh">support@getmark.sh</a> and we will
        remove it.
      </p>

      <h2>7. Changes to this policy</h2>
      <p>
        If we ever change what data the application or website collects, we
        will update this page and the &ldquo;Last updated&rdquo; date above. We
        will not change the product to collect new categories of data without
        prominent notice in-app.
      </p>

      <h2>8. Contact</h2>
      <p>
        Questions about this policy: <a href="mailto:support@getmark.sh">support@getmark.sh</a>.
      </p>
    </article>
  );
}

function formattedDate(): string {
  return new Date("2026-05-22").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
