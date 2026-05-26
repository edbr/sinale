import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  comparisons,
  pillars,
  searchSuggestions,
  trendingTools,
  workflows,
} from "@/lib/site-content"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Sinale | AI Tools, SaaS Software, and Founder Resources",
  description:
    "Find practical AI tool reviews, comparisons, workflows, and best-of guides for designers, developers, product managers, analysts, and founders.",
  path: "https://www.sinale.cc",
})

export default function HomePage() {
  return (
    <main className="hero-glow min-h-screen bg-background text-foreground">
      <section className=" mx-auto grid min-h-170 max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-24">
        <div>

          <h1 className="max-w-4xl text-6xl font-heading font-extrabold tracking-[-0.06em] leading-[0.92] md:text-7xl">
          Find the <span className="text-primary">right AI tools</span> for the way you work.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Practical reviews, workflows, and comparisons for designers,
            developers, product teams, data professionals, and founders.
          </p>

          <form action="/search" className="mt-8 max-w-2xl">
            <div className="flex h-14 items-center gap-3 rounded-full border bg-card px-4 shadow-sm transition focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/20">
              <Search className="size-5 shrink-0 text-muted-foreground" />
              <input
                type="search"
                name="q"
                placeholder="Search AI tools, workflows, and comparisons..."
                className="h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
              />
              <Button type="submit" size="sm" className="rounded-full px-4">
                Search
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {searchSuggestions.map((suggestion) => (
                <Link
                  key={suggestion}
                  href={`/search?q=${encodeURIComponent(suggestion)}`}
                  className="rounded-full border bg-background px-3 py-1.5 text-sm text-muted-foreground transition hover:border-foreground hover:text-foreground"
                >
                  {suggestion}
                </Link>
              ))}
            </div>
          </form>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 rounded-full px-5">
              <Link href="/reviews">
                Explore reviews
                <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full px-5"
            >
              <Link href="/workflows">Browse workflows</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border/80 bg-card/80 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur">
          <div className="border-b pb-4">
            <p className="text-sm font-medium">Role-based AI stack map</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Compare tools by workflow, team role, and practical fit.
            </p>
          </div>
          <div className="grid gap-3 pt-4 ">
            {pillars.slice(0, 5).map((pillar, index) => (
              <div
                key={pillar.title}
                className="flex items-center justify-between rounded-lg border bg-background p-3 transition hover:-translate-y-0.5 hover:bg-card hover:shadow-md"
              >
                <div className="flex items-center gap-3 ">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                    <pillar.icon className="size-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{pillar.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {index + 12} reviewed tools
                    </p>
                  </div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              Popular Comparisons
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Featured Comparisons
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              High-intent breakdowns for choosing between the tools teams are
              already shortlisting.
            </p>
          </div>
          <Button asChild variant="outline" className="w-fit rounded-full">
            <Link href="/comparisons">
              View all comparisons
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((comparison) => (
            <Link
              key={comparison.title}
              href={comparison.href}
              className="group rounded-lg border bg-card p-5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
                  Comparison
                </span>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground" />
              </div>
              <h3 className="text-lg font-semibold">{comparison.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {comparison.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight">
            Browse by role
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Start with your workflow, then compare the tools that actually fit
            the job.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="group rounded-lg border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex size-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                <pillar.icon className="size-5" />
              </div>
              <h3 className="text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {pillar.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium">
                Explore
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Popular Workflows
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Practical stacks for real jobs, not generic tool roundups.
              </p>
            </div>
            <Button asChild variant="outline" className="w-fit rounded-full">
              <Link href="/workflows">
                View all workflows
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 lg:grid-cols-5">
            {workflows.map((workflow, index) => (
              <Link
                key={workflow.title}
                href={workflow.href}
                className="group flex min-h-65 flex-col justify-between rounded-lg border bg-background p-5 transition hover:-translate-y-1 hover:shadow-lg lg:col-span-1"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">
                      0{index + 1}
                    </span>
                    <ArrowRight className="size-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold leading-7">
                    {workflow.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {workflow.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {workflow.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-medium text-muted-foreground">
                Trending Tools
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Top Tools This Month
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Tools getting the most attention across product, design,
                development, research, and startup workflows.
              </p>
            </div>
            <Button asChild variant="outline" className="w-fit rounded-full">
              <Link href="/tools">
                Browse all tools
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {trendingTools.map((tool, index) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="group flex items-start gap-4 rounded-lg border bg-card p-4 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-sm font-semibold text-secondary-foreground">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">{tool.name}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {tool.category}
                      </p>
                    </div>
                    <ArrowRight className="size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {tool.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-semibold">What you&apos;ll find here</h2>
          </div>

          <div>
            <h3 className="font-medium">Reviews</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Hands-on breakdowns of AI tools, pricing, strengths, weaknesses,
              and best-fit use cases.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Workflows</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Real examples of how AI tools fit into product design, coding,
              research, analytics, and startup operations.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
