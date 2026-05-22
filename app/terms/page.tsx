import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms under which Mark is licensed for use on your Mac.",
};

export default function TermsPage() {
  return (
    <article className="prose-mark mx-auto px-6 py-20 md:py-28">
      <h1>Terms of Use</h1>
      <p className="text-muted-foreground">Last updated: {formattedDate()}</p>

      <p>
        These Terms of Use (&ldquo;Terms&rdquo;) govern your use of the Mark
        application (&ldquo;Mark&rdquo;, the &ldquo;App&rdquo;) and the
        getmark.sh website (the &ldquo;Site&rdquo;), both operated by Malhar
        Ujawane (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By installing or using
        Mark you agree to these Terms.
      </p>

      <h2>1. License</h2>
      <p>
        Mark is licensed to you on a personal, worldwide, non-exclusive,
        non-transferable basis for use on devices that you own or control and
        that are signed in to your Apple ID, subject to the Mac App Store
        Licensed Application End User License Agreement (&ldquo;Apple
        EULA&rdquo;). The Apple EULA governs in case of any conflict with these
        Terms.
      </p>

      <h2>2. Permitted use</h2>
      <p>You may use Mark to read, edit, save, and export Markdown documents you have rights to. You may use Mark for personal or commercial work.</p>

      <h2>3. Restrictions</h2>
      <ul>
        <li>You may not reverse engineer, decompile, or disassemble the App except to the extent permitted by applicable law.</li>
        <li>You may not redistribute, sublicense, or resell the App or its components.</li>
        <li>You may not remove or alter any proprietary notices on or in the App.</li>
      </ul>

      <h2>4. One-time purchase</h2>
      <p>
        Mark is a one-time purchase. Buying Mark grants you a perpetual
        license to use the app on the Macs associated with your Apple ID. Free
        updates are included for the lifetime of the product.
      </p>

      <h2>5. Refunds</h2>
      <p>
        All purchases are processed by Apple. Refund requests are handled by
        Apple via{" "}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noreferrer">reportaproblem.apple.com</a>{" "}
        under their standard App Store policy. We do not directly process
        refunds.
      </p>

      <h2>6. Third-party components</h2>
      <p>
        Mark is built primarily on Apple's system frameworks (AppKit, SwiftUI,
        WebKit, NSDocument). The embedded editor bundle uses open-source
        JavaScript libraries — notably{" "}
        <a href="https://tiptap.dev" target="_blank" rel="noreferrer">Tiptap</a>,{" "}
        <a href="https://github.com/aguingand/tiptap-markdown" target="_blank" rel="noreferrer">tiptap-markdown</a>,{" "}
        <a href="https://katex.org" target="_blank" rel="noreferrer">KaTeX</a>,
        and{" "}
        <a href="https://github.com/highlightjs/highlight.js" target="_blank" rel="noreferrer">highlight.js</a>{" "}
        via{" "}
        <a href="https://github.com/wooorm/lowlight" target="_blank" rel="noreferrer">lowlight</a>. Each component is used under
        its own license (MIT or similar permissive terms). A consolidated list of
        components and their licenses is available at{" "}
        <a href="https://github.com/justmalhar/mark/blob/main/THIRD_PARTY_LICENSES.md" target="_blank" rel="noreferrer">github.com/justmalhar/mark/blob/main/THIRD_PARTY_LICENSES.md</a>{" "}
        and is included with each release.
      </p>

      <h2>7. Disclaimer of warranties</h2>
      <p>
        Mark is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
        without warranties of any kind, express or implied, including but not
        limited to fitness for a particular purpose and non-infringement. We do
        not warrant that the App will be uninterrupted or error-free.
      </p>
      <p>
        <strong>Back up your work.</strong> While Mark uses macOS's standard
        document and versioning APIs and does its best to preserve your files,
        you are responsible for maintaining backups of any documents that
        matter to you.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, our total liability for any
        claim arising from your use of Mark is limited to the amount you paid
        for the App. We are not liable for indirect, incidental, special, or
        consequential damages including loss of data, profits, or business
        interruption.
      </p>

      <h2>9. Termination</h2>
      <p>
        If you materially breach these Terms, your license terminates
        automatically. Apple may also terminate your access via standard App
        Store enforcement. Termination does not affect rights or remedies that
        accrued before termination.
      </p>

      <h2>10. Changes to the Terms</h2>
      <p>
        We may update these Terms. If changes are material, we will update the
        &ldquo;Last updated&rdquo; date and, where reasonable, surface the
        changes in-app. Continued use of Mark after a change indicates
        acceptance of the updated Terms.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These Terms are governed by the laws of India, without regard to
        conflict-of-laws principles. Apple's EULA may impose additional or
        different terms based on the jurisdiction of your App Store account.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions: <a href="mailto:support@getmark.sh">support@getmark.sh</a>.
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
