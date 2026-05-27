import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"

import { ToolLogo } from "@/components/site/tool-logo"
import { RoleCarousel } from "@/components/site/role-carousel"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  comparisons,
  pillars,
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
      return "bg-fuchsia-500 text-white"
    case "AI for Developers":
      return "bg-sky-500 text-white"
    case "AI for Product Managers":
      return "bg-orange-500 text-white"
    case "AI for Data & Analytics":
      return "bg-emerald-500 text-white"
    case "AI for Founders":
      return "bg-amber-500 text-white"
    default:
      return "bg-secondary text-secondary-foreground"
  }
}

function getPillarTone(title: string) {
  switch (title) {
    case "AI for Designers":
      return "bg-fuchsia-100 text-fuchsia-700"
    case "AI for Developers":
      return "bg-sky-100 text-sky-700"
    case "AI for Product Managers":
      return "bg-orange-100 text-orange-700"
    case "AI for Data & Analytics":
      return "bg-emerald-100 text-emerald-700"
    case "AI for Founders":
      return "bg-amber-100 text-amber-700"
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
                  <div className={cn(
                    "flex size-9 items-center justify-center rounded-lg",
                    getPillarColor(pillar.title)
                  )}>
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
          {comparisons.slice(0, 6).map((comparison) => {
            const logos = getComparisonTools(comparison.title)

            return (
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

                <div className="mb-4 flex items-center gap-2">
                  {logos.length === 2 ? (
                    <>
                      <ToolLogo name={logos[0]} className="size-9 rounded-lg" />
                      <span className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
                        x
                      </span>
                      <ToolLogo name={logos[1]} className="size-9 rounded-lg" />
                    </>
                  ) : (
                    <ToolLogo name={comparison.title} className="size-9 rounded-lg" />
                  )}
                </div>

                <h3 className="text-lg font-semibold">{comparison.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {comparison.description}
                </p>
              </Link>
            )
          })}
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

        <RoleCarousel
          pillars={pillars.map(({ title, description, href }) => ({
            title,
            description,
            href,
          }))}
        />
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
            {workflows.slice(0, 5).map((workflow, index) => (
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
            {trendingTools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="group flex items-start gap-4 rounded-lg border bg-card p-4 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <ToolLogo name={tool.name} className="size-11 rounded-lg" />
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
