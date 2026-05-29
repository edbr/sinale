import type { Metadata } from "next"

import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Affiliate Disclosure | Sinale",
  description:
    "Read Sinale's affiliate disclosure and learn how we evaluate AI tools and software products.",
  path: "/disclosure",
})

export default function DisclosurePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Disclosure
        </p>
        <h1 className="text-5xl font-heading font-semibold leading-[1.02] tracking-tight md:text-7xl">
          Affiliate Disclosure
        </h1>
        <div className="mt-10 grid gap-8 text-base leading-7 text-muted-foreground">
          <p>
            Sinale is an independent publication supported in part through
            affiliate partnerships.
          </p>
          <p>
            Some links on this website are affiliate links. If you purchase a
            product or service through these links, Sinale may receive a
            commission at no additional cost to you.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Editorial Independence
            </h2>
            <p className="mt-3">
              Affiliate relationships do not influence our reviews, rankings,
              recommendations, or opinions.
            </p>
            <p className="mt-3">
              Our goal is to provide practical, honest, and useful information
              that helps readers evaluate software and AI tools for their
              specific needs.
            </p>
            <p className="mt-3">
              Products may be reviewed regardless of whether an affiliate
              relationship exists.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              How We Evaluate Tools
            </h2>
            <p className="mt-3">
              We evaluate software based on factors such as:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Features and capabilities</li>
              <li>Ease of use</li>
              <li>Pricing and value</li>
              <li>Workflow integration</li>
              <li>Reliability and performance</li>
              <li>Target audience fit</li>
            </ul>
            <p className="mt-3">
              Whenever possible, recommendations are based on direct
              experience, product testing, research, and publicly available
              information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Questions</h2>
            <p className="mt-3">
              If you have questions about our affiliate relationships or review
              process, contact:{" "}
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
