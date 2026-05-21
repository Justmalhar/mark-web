import type { Metadata } from "next";
import { PostLayout } from "@/components/post-layout";
import { getPost } from "@/lib/posts";
import { ABSOLUTE } from "@/lib/site";

const post = getPost("why-native-mac-apps-are-back")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: { title: post.title, description: post.description, url: ABSOLUTE(`/blog/${post.slug}`), type: "article", publishedTime: post.date },
  twitter: { card: "summary_large_image", title: post.title, description: post.description },
};

export default function Page() {
  return (
    <PostLayout post={post}>
      <p>
        For most of the last decade, the playbook for new Mac apps was the same:
        wrap a web frontend in Electron and ship the result everywhere. Slack,
        Discord, Notion, Obsidian, VS Code, Linear, Figma — all huge products
        built on the same shortcut.
      </p>
      <p>
        That tide is turning. In 2025–2026, the most-loved new Mac apps are
        increasingly native again: SwiftUI + AppKit, ~10&nbsp;MB binaries,
        instant cold starts, system integrations. Here's why.
      </p>

      <h2>SwiftUI grew up</h2>
      <p>
        Early SwiftUI (2019–2021) was a promising prototype with too many
        rough edges to ship serious apps in. By Sonoma and Sequoia, the API
        surface stabilized; navigation, lists, animations, and AppKit interop
        all became reliable. Building a real native app is now closer in
        effort to Electron than at any point since AppKit's heyday.
      </p>

      <h2>Apple Silicon raised the floor</h2>
      <p>
        On an M-series Mac, a properly built native app launches in under a
        second and uses a fraction of the memory of its Electron equivalent.
        Users feel the difference, especially when they have ten apps open at
        once. The cost of being Electron is now visible in Activity Monitor.
      </p>

      <h2>Liquid Glass gave designers a new toy</h2>
      <p>
        macOS 26's Liquid Glass design language — translucent surfaces,
        material backgrounds, dynamic highlights — is unreachable in Electron
        without a lot of janky CSS hacks. Native apps get it for free with a
        single modifier. That's a genuine visual edge.
      </p>

      <h2>The indie economy moved off subscriptions</h2>
      <p>
        Subscription fatigue is real. Mac users are signing up for fewer
        services and more one-time purchases. Apps like Pixelmator Pro,
        Soulver, Tot, Mela, and a wave of new entrants are succeeding with
        $20–$50 lifetime prices. That model rewards small, focused, native
        apps over feature-bloated SaaS.
      </p>

      <h2>What native means in 2026</h2>
      <p>
        A "native" Mac app in 2026 isn't just AppKit. It usually means:
      </p>
      <ul>
        <li>Real <code>NSDocument</code>-based file handling with autosave and Versions.</li>
        <li>Spotlight and Quick Look integration.</li>
        <li>Liquid Glass surfaces on macOS 15+, with graceful fallback on 14.</li>
        <li>Sandboxed App Store distribution as the default channel.</li>
        <li>No telemetry. The privacy story is part of the product.</li>
      </ul>

      <h2>The new wave</h2>
      <p>
        New indie Mac apps consistently picking native over Electron in
        2025–2026: <a href="https://soulver.app">Soulver</a>,{" "}
        <a href="https://www.icloud.com/iclouddrive">CleanShot X</a>,{" "}
        <a href="https://raycast.com">Raycast</a>,{" "}
        <a href="https://www.tot.cool">Tot</a>,{" "}
        <a href="https://heynote.com">Heynote</a>, Mela for recipes, and a host
        of focused Markdown editors including Mark.
      </p>
      <p>
        Electron isn't dying — for cross-platform team apps it's still the
        right call. But "default to Electron" is no longer the default. For
        Mac-first products, native is the better story and the better
        experience.
      </p>
    </PostLayout>
  );
}
