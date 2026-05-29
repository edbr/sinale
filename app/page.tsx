import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"
import { ToolLogo } from "@/components/site/tool-logo"
import { RoleCarousel } from "@/components/site/role-carousel"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  comparisons,
  pillars,
  reviews,
  searchSuggestions,
  trendingTools,
  workflows,
} from "@/lib/site-content"
import { pageMetadata } from "@/lib/seo"

function getComparisonTools(title: string) {
  const match = title.match(/^(.*?)\s+vs\s+(.*?)(?:\s+\(|:|$)/i)
  if (!match) {
    return []
  }

  return [match[1].trim(), match[2].trim()]
}

function getPillarColor(title: string) {
  switch (title) {
    case "AI for Designers":
      return "bg-rose-100 text-rose-700"
    case "AI for Developers":
      return "bg-sky-100 text-sky-700"
    case "AI for Product Managers":
      return "bg-amber-100 text-amber-700"
    case "AI for Data & Analytics":
      return "bg-emerald-100 text-emerald-700"
    case "AI for Founders":
      return "bg-indigo-100 text-indigo-700"
    default:
      return "bg-secondary text-secondary-foreground"
  }
}

function getWorkflowTagTone(tag: string) {
  switch (tag) {
    case "Founders":
      return "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200"
    case "MVP":
      return "bg-slate-100 text-slate-700 border-slate-200"
    case "Design":
      return "bg-violet-100 text-violet-700 border-violet-200"
    case "Product":
      return "bg-orange-100 text-orange-700 border-orange-200"
    case "Development":
      return "bg-sky-100 text-sky-700 border-sky-200"
    case "Agents":
      return "bg-cyan-100 text-cyan-700 border-cyan-200"
    case "Research":
      return "bg-emerald-100 text-emerald-700 border-emerald-200"
    case "Strategy":
      return "bg-amber-100 text-amber-700 border-amber-200"
    case "PM":
      return "bg-rose-100 text-rose-700 border-rose-200"
    case "Content":
      return "bg-indigo-100 text-indigo-700 border-indigo-200"
    case "Support":
      return "bg-lime-100 text-lime-700 border-lime-200"
    case "Engineering":
      return "bg-slate-100 text-slate-700 border-slate-200"
    case "Quality":
      return "bg-emerald-100 text-emerald-700 border-emerald-200"
    case "Docs":
      return "bg-amber-100 text-amber-700 border-amber-200"
    case "Marketing":
      return "bg-pink-100 text-pink-700 border-pink-200"
    case "SEO":
      return "bg-cyan-100 text-cyan-700 border-cyan-200"
    case "Growth":
      return "bg-emerald-100 text-emerald-700 border-emerald-200"
    case "Sales":
      return "bg-rose-100 text-rose-700 border-rose-200"
    case "Outbound":
      return "bg-orange-100 text-orange-700 border-orange-200"
    case "Meetings":
      return "bg-violet-100 text-violet-700 border-violet-200"
    case "Operations":
      return "bg-slate-100 text-slate-700 border-slate-200"
    case "Lifecycle":
      return "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200"
    case "Hiring":
      return "bg-amber-100 text-amber-700 border-amber-200"
    case "People":
      return "bg-lime-100 text-lime-700 border-lime-200"
    case "Automation":
      return "bg-sky-100 text-sky-700 border-sky-200"
    case "No-Code":
      return "bg-cyan-100 text-cyan-700 border-cyan-200"
    case "Security":
      return "bg-rose-100 text-rose-700 border-rose-200"
    case "Fundraising":
      return "bg-violet-100 text-violet-700 border-violet-200"
    case "Analytics":
      return "bg-sky-100 text-sky-700 border-sky-200"
    case "Reporting":
      return "bg-emerald-100 text-emerald-700 border-emerald-200"
    case "Data":
      return "bg-cyan-100 text-cyan-700 border-cyan-200"
    case "SQL":
      return "bg-indigo-100 text-indigo-700 border-indigo-200"
    default:
      return "bg-slate-100 text-slate-700 border-slate-200"
  }
}

export const metadata = pageMetadata({
  title: "Sinale | AI Tools, SaaS Software, and Founder Resources",
  description:
    "Find practical AI tool reviews, comparisons, workflows, and best-of guides for designers, developers, product managers, analysts, and founders.",
  path: "https://www.sinale.cc",
})

export default function HomePage() {
  return (
    <main className="home-hero hero-glow min-h-screen bg-background text-foreground">
      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.08fr_0.92fr] md:py-20">
        <div>
          <p className="hero-reveal mb-5 text-sm font-semibold text-primary">
            Independent AI guide
          </p>
          <h1 className="hero-reveal hero-reveal-delay-1 editorial-display max-w-5xl text-foreground">
            Find the <span className="text-primary">right AI tools</span> for the way you work.
            Impact-Site-Verification: 1321ef41-cba2-4dc3-8aec-58d8baf072d1
          </h1>

          <p className="hero-reveal hero-reveal-delay-2 mt-6 max-w-2xl text-lg leading-6 text-muted-foreground">
            Practical reviews, workflows, and comparisons for designers,
            developers, product teams, data professionals, and founders.
          </p>

          <form action="/search" className="hero-reveal hero-reveal-delay-3 mt-8 max-w-2xl">
            <div className="flex h-14 items-center gap-3 rounded-2xl border bg-card px-4 shadow-lg shadow-slate-900/5 transition focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/20">
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
                  className="rounded-full border bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-primary/35 hover:text-foreground"
                >
                  {suggestion}
                </Link>
              ))}
            </div>
          </form>

          <div className="hero-reveal hero-reveal-delay-3 mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 rounded-full px-5 font-semibold shadow-sm">
              <Link href="/reviews">
                Explore reviews
                <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full bg-background/60 px-5 font-semibold hover:bg-accent"
            >
              <Link href="/workflows">Browse workflows</Link>
            </Button>
          </div>
        </div>

        <aside className="hero-panel hero-reveal hero-reveal-delay-2 mx-auto w-full max-w-xl rounded-3xl border bg-card/85 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur">
          <div className="border-b pb-5">
            <p className="text-sm font-semibold text-primary">Start here</p>
            <h2 className="mt-2 font-serif text-3xl font-medium leading-tight tracking-[-0.04em]">
              Useful AI guidance without the hype.
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Jump into the pages people use most when they are comparing tools,
              choosing a stack, or trying to improve a workflow.
            </p>
          </div>

          <div className="grid gap-3 pt-5">
            {[
              {
                label: "Latest review",
                title: reviews[0].title,
                description: reviews[0].description,
                href: reviews[0].href,
              },
              {
                label: "Popular comparison",
                title: comparisons[0].title,
                description: comparisons[0].description,
                href: comparisons[0].href,
              },
              {
                label: "Workflow guide",
                title: workflows[0].title,
                description: workflows[0].description,
                href: workflows[0].href,
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="editorial-card group rounded-2xl border bg-background/70 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="editorial-card-meta text-sm font-semibold text-primary">{item.label}</p>
                  <ArrowRight className="editorial-card-arrow size-4 text-muted-foreground" />
                </div>
                <h3 className="editorial-card-title mt-2 font-heading text-xl font-semibold leading-6">
                  {item.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-5 grid gap-0 overflow-hidden rounded-2xl border">
            {pillars.slice(0, 5).map((pillar) => (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="editorial-card flex items-center justify-between border-b bg-card/70 p-3 last:border-b-0 hover:bg-accent/70"
              >
                <div className="flex items-center gap-3 ">
                  <div className={cn(
                    "editorial-card-media flex size-9 items-center justify-center rounded-lg",
                    getPillarColor(pillar.title)
                  )}>
                    <pillar.icon className="size-4" />
                  </div>
                  <div>
                    <p className="editorial-card-title text-sm font-semibold">{pillar.title}</p>
                    <p className="editorial-card-meta text-xs text-muted-foreground">Role-based tool picks</p>
                  </div>
                </div>
                <ArrowRight className="editorial-card-arrow size-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold text-primary">
              Popular Comparisons
            </p>
            <h2 className="editorial-section-title">
              Featured Comparisons
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              High-intent breakdowns for choosing between the tools teams are
              already shortlisting.
            </p>
          </div>
          <Button asChild variant="outline" className="w-fit rounded-full bg-background/60 font-semibold hover:bg-accent">
            <Link href="/comparisons">
              View all comparisons
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {comparisons.slice(0, 6).map((comparison) => {
            const logos = getComparisonTools(comparison.title)

            return (
              <Link
                key={comparison.title}
                href={comparison.href}
                className="editorial-card group rounded-2xl border bg-card p-5 shadow-sm"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="editorial-card-meta rounded-full border bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    Comparison
                  </span>
                  <ArrowRight className="editorial-card-arrow size-4 shrink-0 text-muted-foreground" />
                </div>

                <div className="mb-4 flex items-center gap-2">
                  {logos.length === 2 ? (
                    <>
                      <ToolLogo name={logos[0]} className="editorial-card-media size-9 rounded-lg border" />
                      <span className="text-sm font-semibold text-primary">
                        x
                      </span>
                      <ToolLogo name={logos[1]} className="editorial-card-media size-9 rounded-lg border" />
                    </>
                  ) : (
                    <ToolLogo name={comparison.title} className="editorial-card-media size-9 rounded-lg border" />
                  )}
                </div>

                <h3 className="editorial-card-title font-heading text-xl font-semibold leading-6">{comparison.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {comparison.description}
                </p>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border bg-accent p-8 shadow-xl shadow-slate-900/5">
          <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-72 bg-[radial-gradient(circle_at_center,oklch(100%_0_0/.55)_0_1px,transparent_1px_14px)] lg:block" />
          <div className="relative grid gap-8 lg:grid-cols-[1.8fr_1fr]">
            <div>
              <p className="text-sm font-semibold text-primary">
                Latest review
              </p>
              <h2 className="mt-4 max-w-4xl font-serif text-4xl font-medium leading-none tracking-[-0.045em] text-foreground ">
                {reviews[0].title}
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                {reviews[0].description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full px-6 font-semibold shadow-sm">
                  <Link href={reviews[0].href}>Read the latest review</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full bg-background/40 px-6 font-semibold hover:bg-background">
                  <Link href="/reviews">Browse all reviews</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border bg-card/80 p-6 shadow-sm backdrop-blur">
              <p className="text-sm font-semibold text-primary">
                Why this matters
              </p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Editorial reviews are the fastest way to understand why a tool works, when it stops being helpful, and how it actually fits into your team’s workflow.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border bg-background/70 p-4">
                  <p className="text-sm font-semibold text-foreground">Fresh hands-on insight</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Guest-tested perspectives that go beyond specs and marketing claims.
                  </p>
                </div>
                <div className="rounded-xl border bg-background/70 p-4">
                  <p className="text-sm font-semibold text-foreground">Real workflow advice</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Tips based on actual use cases for founders, builders, and product teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10">
          <h2 className="editorial-section-title">
            Browse by role
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Start with your workflow, then compare the tools that actually fit
            the job.
          </p>
        </div>

        <RoleCarousel
          pillars={pillars.map(({ title, description, href }) => ({
            title,
            description,
            href,
          }))}
        />
      </section>

      <section className="border-y bg-secondary/70">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="editorial-section-title">
                Popular Workflows
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Practical stacks for real jobs, not generic tool roundups.
              </p>
            </div>
            <Button asChild variant="outline" className="w-fit rounded-full bg-background/60 font-semibold hover:bg-accent">
              <Link href="/workflows">
                View all workflows
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 lg:grid-cols-5">
            {workflows.slice(0, 5).map((workflow, index) => (
              <Link
                key={workflow.title}
                href={workflow.href}
                className="editorial-card group flex min-h-65 flex-col justify-between rounded-2xl border bg-card p-5 shadow-sm lg:col-span-1"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="editorial-card-meta text-sm font-semibold text-primary">
                      0{index + 1}
                    </span>
                    <ArrowRight className="editorial-card-arrow size-4 text-muted-foreground" />
                  </div>
                  <h3 className="editorial-card-title font-heading text-lg font-semibold leading-6">
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
                      className={cn(
                        "rounded-full border px-2.5 py-1 text-xs font-semibold",
                        getWorkflowTagTone(tag)
                      )}
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
              <p className="mb-3 text-sm font-semibold text-primary">
                Trending Tools
              </p>
              <h2 className="editorial-section-title">
                Top Tools This Month
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Tools getting the most attention across product, design,
                development, research, and startup workflows.
              </p>
            </div>
            <Button asChild variant="outline" className="w-fit rounded-full bg-background/60 font-semibold hover:bg-accent">
              <Link href="/tools">
                Browse all tools
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {trendingTools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="editorial-card group flex items-start gap-4 rounded-2xl border bg-card p-4 shadow-sm"
              >
                <ToolLogo name={tool.name} className="editorial-card-media size-11 rounded-xl border" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="editorial-card-title font-serif font-medium">{tool.name}</h3>
                      <p className="editorial-card-meta mt-1 text-xs font-medium text-muted-foreground">
                        {tool.category}
                      </p>
                    </div>
                    <ArrowRight className="editorial-card-arrow size-4 shrink-0 text-muted-foreground" />
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

      <section className="border-t bg-secondary/50">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-3">
          <div>
            <h2 className="font-serif text-3xl font-medium leading-tight tracking-[-0.04em]">What you&apos;ll find here</h2>
          </div>

          <div>
            <h3 className="font-serif font-medium">Reviews</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Hands-on breakdowns of AI tools, pricing, strengths, weaknesses,
              and best-fit use cases.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-medium">Workflows</h3>
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
