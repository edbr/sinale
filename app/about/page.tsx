import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About | Stack Signal",
  description:
    "Learn how Stack Signal helps builders choose the right AI tools, workflows, and comparisons for practical work.",
}

const principles = [
  "Start with the job to be done, not the hype cycle.",
  "Compare tools by workflow fit, tradeoffs, and real usage.",
  "Favor practical recommendations over generic AI tool lists.",
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
            About Stack Signal
          </p>
          <h1 className="max-w-4xl text-5xl font-heading font-extrabold leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Practical AI guidance for people building real things.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Stack Signal helps modern builders choose AI tools by workflow,
            role, and practical fit. The goal is simple: make it easier to
            understand which tools are worth your time, where they fit, and how
            to use them together.
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
      </section>

      <section className="border-t bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Why this exists
            </h2>
          </div>

          <div className="md:col-span-2">
            <p className="text-lg leading-8 text-muted-foreground">
              AI software changes quickly, but most useful decisions are still
              grounded in familiar questions: What are you trying to do? Who is
              doing the work? What tradeoffs matter? Stack Signal organizes AI
              tools around those questions instead of treating every product as
              another generic listing.
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              You&apos;ll find hands-on reviews, side-by-side comparisons, role
              guides, and workflow stacks for design, development, product,
              analytics, and startup work.
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
