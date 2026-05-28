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
      <section className="mx-auto grid min-h-170 max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[0.95fr_1.05fr] md:py-20">
        <div>
          <p className="mb-5 text-xs font-black uppercase tracking-[0.34em] text-primary">
            Independent AI guide
          </p>
          <h1 className="max-w-4xl font-heading text-6xl font-black uppercase leading-[0.86] tracking-normal text-foreground md:text-8xl">
          Find the <span className="text-primary">right AI tools</span> for the way you work.
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-muted-foreground">
            Practical reviews, workflows, and comparisons for designers,
            developers, product teams, data professionals, and founders.
          </p>

          <form action="/search" className="mt-8 max-w-2xl">
            <div className="flex h-14 items-center gap-3 border-2 border-foreground bg-card px-4 shadow-[8px_8px_0_rgba(51,33,22,0.18)] transition focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/20">
              <Search className="size-5 shrink-0 text-muted-foreground" />
              <input
                type="search"
                name="q"
                placeholder="Search AI tools, workflows, and comparisons..."
                className="h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
              />
              <Button type="submit" size="sm" className="rounded-none bg-foreground px-4 text-background hover:bg-primary">
                Search
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {searchSuggestions.map((suggestion) => (
                <Link
                  key={suggestion}
                  href={`/search?q=${encodeURIComponent(suggestion)}`}
                  className="border border-orange-900/25 bg-background/65 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground transition hover:border-foreground hover:text-foreground"
                >
                  {suggestion}
                </Link>
              ))}
            </div>
          </form>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 rounded-none bg-primary px-5 font-black uppercase tracking-[0.12em] text-primary-foreground hover:bg-foreground">
              <Link href="/reviews">
                Explore reviews
                <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-none border-2 border-foreground bg-transparent px-5 font-black uppercase tracking-[0.12em] hover:bg-accent"
            >
              <Link href="/workflows">Browse workflows</Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl border-2 border-foreground bg-[#f7d65e] p-4 shadow-[16px_16px_0_rgba(51,33,22,0.22)]">
          <div className="absolute -right-5 -top-5 hidden size-24 border-2 border-foreground bg-[#ef6a4a] md:block" />
          <div className="relative border-2 border-foreground bg-[#fff7d8] p-5">
            <div className="grid aspect-square place-items-center overflow-hidden border-2 border-foreground bg-[linear-gradient(135deg,#ef6a4a_0_24%,#f7d65e_24%_48%,#73c6aa_48%_70%,#f6e9c8_70%)]">
              <div className="grid size-4/5 place-items-center rounded-full border-2 border-foreground bg-background/85 text-center">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">
                    Sinale
                  </p>
                  <p className="mt-3 font-heading text-5xl font-black uppercase leading-none md:text-6xl">
                    AI Stack Map
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-0 pt-4">
            {pillars.slice(0, 5).map((pillar, index) => (
              <div
                key={pillar.title}
                className="flex items-center justify-between border-x-2 border-b-2 border-foreground bg-card p-3 transition first:border-t-2 hover:bg-accent"
              >
                <div className="flex items-center gap-3 ">
                  <div className={cn(
                    "flex size-9 items-center justify-center border border-foreground",
                    getPillarColor(pillar.title)
                  )}>
                    <pillar.icon className="size-4" />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.08em]">{pillar.title}</p>
                    <p className="text-xs font-semibold text-muted-foreground">
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
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-primary">
              Popular Comparisons
            </p>
            <h2 className="font-heading text-4xl font-black uppercase tracking-normal md:text-5xl">
              Featured Comparisons
            </h2>
            <p className="mt-3 max-w-2xl font-medium text-muted-foreground">
              High-intent breakdowns for choosing between the tools teams are
              already shortlisting.
            </p>
          </div>
          <Button asChild variant="outline" className="w-fit rounded-none border-2 border-foreground bg-transparent font-black uppercase tracking-[0.12em] hover:bg-accent">
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
                className="group border-2 border-foreground bg-card p-5 shadow-[6px_6px_0_rgba(51,33,22,0.16)] transition hover:-translate-y-1 hover:bg-[#fff7d8] hover:shadow-[10px_10px_0_rgba(51,33,22,0.18)]"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="border border-orange-900/25 px-2.5 py-1 text-xs font-black uppercase tracking-[0.16em] text-muted-foreground">
                    Comparison
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground" />
                </div>

                <div className="mb-4 flex items-center gap-2">
                  {logos.length === 2 ? (
                    <>
                      <ToolLogo name={logos[0]} className="size-9 border border-foreground" />
                      <span className="text-sm font-black uppercase tracking-[0.24em] text-primary">
                        x
                      </span>
                      <ToolLogo name={logos[1]} className="size-9 border border-foreground" />
                    </>
                  ) : (
                    <ToolLogo name={comparison.title} className="size-9 border border-foreground" />
                  )}
                </div>

                <h3 className="font-heading text-xl font-black uppercase leading-6">{comparison.title}</h3>
                <p className="mt-3 text-sm font-medium leading-6 text-muted-foreground">
                  {comparison.description}
                </p>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden border-2 border-foreground bg-[#73c6aa] p-8 shadow-[14px_14px_0_rgba(51,33,22,0.18)]">
          <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-72 bg-[repeating-linear-gradient(135deg,rgba(255,247,216,0.9)_0_12px,transparent_12px_24px)] lg:block" />
          <div className="relative grid gap-8 lg:grid-cols-[1.8fr_1fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-foreground">
                Latest review
              </p>
              <h2 className="mt-4 font-heading text-4xl font-black uppercase tracking-normal text-foreground md:text-6xl">
                {reviews[0].title}
              </h2>
              <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-foreground/80">
                {reviews[0].description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-none bg-foreground px-6 font-black uppercase tracking-[0.12em] text-background hover:bg-primary">
                  <Link href={reviews[0].href}>Read the latest review</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-none border-2 border-foreground bg-transparent px-6 font-black uppercase tracking-[0.12em] hover:bg-[#fff7d8]">
                  <Link href="/reviews">Browse all reviews</Link>
                </Button>
              </div>
            </div>

            <div className="border-2 border-foreground bg-[#fff7d8] p-6 shadow-[8px_8px_0_rgba(51,33,22,0.16)]">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                Why this matters
              </p>
              <p className="mt-4 text-sm font-medium leading-6 text-muted-foreground">
                Editorial reviews are the fastest way to understand why a tool works, when it stops being helpful, and how it actually fits into your team’s workflow.
              </p>

              <div className="mt-6 space-y-4">
                <div className="border border-orange-900/25 bg-background/70 p-4">
                  <p className="text-sm font-black uppercase tracking-[0.08em] text-foreground">Fresh hands-on insight</p>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    Guest-tested perspectives that go beyond specs and marketing claims.
                  </p>
                </div>
                <div className="border border-orange-900/25 bg-background/70 p-4">
                  <p className="text-sm font-black uppercase tracking-[0.08em] text-foreground">Real workflow advice</p>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
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
          <h2 className="font-heading text-4xl font-black uppercase tracking-normal md:text-5xl">
            Browse by role
          </h2>
          <p className="mt-3 max-w-2xl font-medium text-muted-foreground">
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

      <section className="border-y-2 border-foreground bg-[#ef6a4a]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="font-heading text-4xl font-black uppercase tracking-normal text-background md:text-5xl">
                Popular Workflows
              </h2>
              <p className="mt-3 max-w-2xl font-medium text-background/85">
                Practical stacks for real jobs, not generic tool roundups.
              </p>
            </div>
            <Button asChild variant="outline" className="w-fit rounded-none border-2 border-background bg-transparent font-black uppercase tracking-[0.12em] text-background hover:bg-background hover:text-foreground">
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
                className="group flex min-h-65 flex-col justify-between border-2 border-foreground bg-background p-5 shadow-[6px_6px_0_rgba(51,33,22,0.22)] transition hover:-translate-y-1 hover:bg-[#fff7d8] lg:col-span-1"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm font-black text-primary">
                      0{index + 1}
                    </span>
                    <ArrowRight className="size-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground" />
                  </div>
                  <h3 className="font-heading text-lg font-black uppercase leading-6">
                    {workflow.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-muted-foreground">
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

      <section className="border-t-2 border-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-primary">
                Trending Tools
              </p>
              <h2 className="font-heading text-4xl font-black uppercase tracking-normal md:text-5xl">
                Top Tools This Month
              </h2>
              <p className="mt-3 max-w-2xl font-medium text-muted-foreground">
                Tools getting the most attention across product, design,
                development, research, and startup workflows.
              </p>
            </div>
            <Button asChild variant="outline" className="w-fit rounded-none border-2 border-foreground bg-transparent font-black uppercase tracking-[0.12em] hover:bg-accent">
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
                className="group flex items-start gap-4 border-2 border-foreground bg-card p-4 shadow-[5px_5px_0_rgba(51,33,22,0.14)] transition hover:-translate-y-0.5 hover:bg-[#fff7d8]"
              >
                <ToolLogo name={tool.name} className="size-11 border border-foreground" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-heading font-black uppercase">{tool.name}</h3>
                      <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                        {tool.category}
                      </p>
                    </div>
                    <ArrowRight className="size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground" />
                  </div>
                  <p className="mt-3 text-sm font-medium leading-6 text-muted-foreground">
                    {tool.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-2 border-foreground bg-[#fff7d8]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-3">
          <div>
            <h2 className="font-heading text-3xl font-black uppercase">What you&apos;ll find here</h2>
          </div>

          <div>
            <h3 className="font-heading font-black uppercase">Reviews</h3>
            <p className="mt-2 text-sm font-medium leading-6 text-muted-foreground">
              Hands-on breakdowns of AI tools, pricing, strengths, weaknesses,
              and best-fit use cases.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-black uppercase">Workflows</h3>
            <p className="mt-2 text-sm font-medium leading-6 text-muted-foreground">
              Real examples of how AI tools fit into product design, coding,
              research, analytics, and startup operations.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
