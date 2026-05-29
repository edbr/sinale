import type { Metadata } from "next"

import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Sinale",
  description:
    "Read the Sinale privacy policy, including analytics, cookies, affiliate links, and contact information.",
  path: "/privacy",
})

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Last updated: May 2026
        </p>
        <h1 className="text-5xl font-heading font-semibold leading-[1.02] tracking-tight md:text-7xl">
          Privacy Policy
        </h1>
        <div className="mt-10 grid gap-8 text-base leading-7 text-muted-foreground">
          <p>Sinale respects your privacy.</p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Information We Collect
            </h2>
            <p className="mt-3">We may collect:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Information you voluntarily provide through contact forms or email</li>
              <li>Anonymous website analytics data</li>
              <li>
                Basic technical information such as browser type, device type,
                and pages visited
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Analytics</h2>
            <p className="mt-3">
              We may use analytics services to understand how visitors use the
              website and improve content quality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Cookies</h2>
            <p className="mt-3">
              Sinale may use cookies and similar technologies to improve site
              functionality and measure performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Affiliate Links
            </h2>
            <p className="mt-3">
              Some articles may contain affiliate links. If you click an
              affiliate link and make a purchase, Sinale may earn a commission
              at no additional cost to you.
            </p>
            <p className="mt-3">
              Affiliate partners may use cookies to track referrals according to
              their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Third-Party Websites
            </h2>
            <p className="mt-3">
              This website may link to external websites. We are not responsible
              for the content, policies, or practices of third-party sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Data Security
            </h2>
            <p className="mt-3">
              We take reasonable measures to protect information submitted
              through the website, but no method of transmission or storage is
              completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
            <p className="mt-3">
              Questions regarding this policy may be directed to:{" "}
              <a className="font-medium text-foreground" href="mailto:hello@sinale.cc">
                hello@sinale.cc
              </a>
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}
