import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About | Sinale",
  description:
    "Meet Eduardo Belluti and learn why Sinale focuses on practical AI workflows, honest reviews, and real-world use cases.",
}

const principles = [
  "Test AI tools inside real design, product, development, and startup workflows.",
  "Compare products by practical fit, tradeoffs, and day-to-day usefulness.",
  "Help professionals cut through hype before spending time or money.",
]

const audiences = [
  "Designers turning ideas into better product decisions.",
  "Developers evaluating coding assistants and app builders.",
  "Product managers researching, planning, and shipping with AI.",
  "Founders building leaner companies with smaller teams.",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
        <div>
          <p className="mb-4 text-sm font-medium text-muted-foreground">
            About Sinale
          </p>
          <h1 className="max-w-4xl text-5xl font-heading font-extrabold leading-[0.95] tracking-[-0.05em] md:text-7xl">
            AI tool guidance from a product designer who actually uses the
            stack.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            I&apos;m Eduardo Belluti, a Lead Product Designer with 12+ years
            building healthcare and SaaS products. Sinale helps professionals
            cut through AI hype by focusing on practical workflows, honest
            reviews, and real-world use cases.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 rounded-full px-5">
              <Link href="/tools">
                Browse tools
                <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full px-5"
            >
              <Link href="/comparisons">Read comparisons</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="overflow-hidden rounded-lg border bg-secondary">
            <div className="relative aspect-[4/5]">
              <Image
                src="/profile.png"
                alt="Eduardo Belluti"
                fill
                sizes="(min-width: 768px) 420px, calc(100vw - 72px)"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-xl font-semibold">Eduardo Belluti</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Lead Product Designer focused on healthcare, SaaS, product
              strategy, prototyping, and AI-enabled workflows.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <a
                  href="https://linkedin.com/in/edbelluti"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <a href="https://edbelluti.com/" target="_blank" rel="noreferrer">
                  Website
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Why I created Sinale
            </h2>
          </div>

          <div className="md:col-span-2">
            <p className="text-lg leading-8 text-muted-foreground">
              AI software changes quickly, but most advice is still too vague:
              another list of tools, another launch announcement, another
              claim that everything has changed. That is not enough when you
              are trying to decide what belongs in your real workflow.
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I created Sinale to evaluate AI tools the way builders actually
              use them: researching markets, designing products, writing specs,
              building prototypes, comparing options, analyzing data, and
              shipping software.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-xl font-semibold">What guides the site</h2>
          <div className="mt-6 grid gap-4">
            {principles.map((principle) => (
              <div key={principle} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-sm leading-6 text-muted-foreground">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold tracking-tight">
            Focused on real workflows
          </h2>
          <div className="mt-6 grid gap-5 text-lg leading-8 text-muted-foreground">
            <p>
              Sinale is organized around jobs to be done, not just tool names.
              People are usually trying to find the best AI coding assistant,
              research tool, meeting assistant, app builder, design tool, or
              product management stack.
            </p>
            <p>
              That is why the site includes reviews, comparisons, role guides,
              and workflow breakdowns for designers, developers, product
              managers, founders, and analytics teams.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight">
            Built for modern teams
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            The site is written for people who need AI to help them ship,
            decide, research, prototype, and operate with more leverage.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {audiences.map((audience) => (
            <div key={audience} className="rounded-lg border bg-card p-6">
              <p className="text-sm leading-6 text-muted-foreground">
                {audience}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
