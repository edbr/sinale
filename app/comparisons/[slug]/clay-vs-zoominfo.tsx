import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["GTM workflow building", "Clay"],
  ["Enterprise data coverage", "ZoomInfo"],
  ["AI research and personalization", "Clay"],
  ["Buyer intent and account intelligence", "ZoomInfo"],
  ["Startup outbound fit", "Clay"],
  ["Large sales org fit", "ZoomInfo"],
  ["Flexible enrichment", "Clay"],
  ["Procurement and governance", "ZoomInfo"],
  ["Speed of experimentation", "Clay"],
  ["Overall Recommendation", "Clay for modern outbound, ZoomInfo for enterprise data"],
]

const clayWins = [
  {
    title: "Modern GTM Workflow Building",
    body: "Clay is better when teams want to build custom outbound systems: enrichment waterfalls, AI research, signal-based lists, personalization, routing, CRM updates, and handoffs into sales tools.",
  },
  {
    title: "AI Research and Personalization",
    body: "Claygent and Clay&apos;s AI workflows are useful for generating custom data points, researching accounts, summarizing web signals, and creating more specific outbound angles than a static database usually provides.",
  },
  {
    title: "Flexible Data Waterfalls",
    body: "Clay lets GTM teams combine many data providers, APIs, custom logic, scraping-style research, and AI steps into one table. That flexibility is the core reason growth teams love it.",
  },
  {
    title: "Better for Builders and Startups",
    body: "Clay is a better fit for founders, growth teams, SDR leaders, and GTM engineers who want to test segments, build workflows, and iterate quickly without buying a traditional enterprise data contract first.",
  },
]

const zoomInfoWins = [
  {
    title: "Enterprise B2B Data Coverage",
    body: "ZoomInfo is stronger when a larger revenue team needs broad company and contact data, direct dials, org charts, intent signals, technographics, enrichment, and established sales intelligence workflows.",
  },
  {
    title: "Account Intelligence at Scale",
    body: "ZoomInfo is better for teams that need territory planning, buying committees, account scoring, intent-driven prioritization, and consistent data access across many sellers and marketers.",
  },
  {
    title: "Mature Procurement and Administration",
    body: "Large companies often prefer ZoomInfo because it fits familiar enterprise buying motions: annual contracts, user management, governance, support, integrations, and standardized access for big teams.",
  },
  {
    title: "More Familiar Rep Workflow",
    body: "ZoomInfo is easier to understand for traditional sales teams. Reps search for accounts, pull contacts, review signals, enrich CRM records, and work from a known sales intelligence model.",
  },
]

const useCases = [
  {
    title: "Choose Clay if",
    items: [
      "You want to build custom enrichment and outbound workflows",
      "AI research and personalization matter more than a static database",
      "Your team has GTM ops, growth, or technical builder capacity",
      "You need to test segments and iterate quickly",
      "You want to combine multiple data providers and APIs",
    ],
  },
  {
    title: "Choose ZoomInfo if",
    items: [
      "You need enterprise-grade B2B data coverage",
      "Many reps need simple access to contacts and accounts",
      "Buyer intent and account intelligence are central to your motion",
      "You have a larger annual budget and formal procurement process",
      "Your RevOps team needs standardized data across sales and marketing",
    ],
  },
]

function CheckList({ items }: { items: string[] }) {
  return (
    <div className="mt-4 grid gap-2 text-sm">
      {items.map((item) => (
        <p key={item} className="flex gap-2">
          <Check className="mt-0.5 size-4 shrink-0" />
          <span>{item}</span>
        </p>
      ))}
    </div>
  )
}

export function ClayVsZoomInfoComparison() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Button asChild variant="ghost" className="mb-10 px-0">
          <Link href="/comparisons">
            <ArrowLeft />
            Comparisons
          </Link>
        </Button>

        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Comparison
        </p>
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
          Clay vs ZoomInfo (2026): Which Sales Data Platform Is Better?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Clay and ZoomInfo both help revenue teams find and enrich prospects,
            but they come from very different GTM philosophies.
          </p>
          <p>
            Clay is best for modern outbound teams that want to build workflows:
            enrichment waterfalls, AI research, signal tracking,
            personalization, CRM pushes, and custom automation.
          </p>
          <p>
            ZoomInfo is best for larger sales organizations that want a mature
            B2B data platform with company records, contacts, direct dials,
            intent data, account intelligence, and enterprise administration.
          </p>
          <p>
            The simple rule: choose Clay when you want to build a smarter GTM
            system. Choose ZoomInfo when you need a big, standardized data
            source for a larger revenue team.
          </p>
        </div>

        <ArticleCta tool="Clay" href={toolLinks.clay} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <div className="mt-5 divide-y rounded-lg border">
            {verdictRows.map(([category, winner]) => (
              <div
                key={category}
                className="grid grid-cols-[1fr_auto] gap-4 px-4 py-3 text-sm"
              >
                <span className="text-muted-foreground">{category}</span>
                <span className="font-medium">{winner}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for GTM builders:</span> Clay
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for enterprise data:</span>{" "}
              ZoomInfo
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Clay?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Clay is a GTM workflow platform for finding companies, enriching
              contacts, researching accounts, using AI agents, running data
              waterfalls, and pushing structured outputs into sales and CRM
              systems.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is especially strong for teams that want to combine data,
              automation, AI research, and outbound personalization in a
              flexible builder-style workspace.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is ZoomInfo?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              ZoomInfo is a go-to-market intelligence platform for sales,
              marketing, operations, and recruiting teams that need B2B company
              data, contact data, intent signals, enrichment, and account
              intelligence.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is especially strong for larger teams that need broad data
              access, direct dials, org charts, territory planning, governance,
              and standardized sales intelligence at scale.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Clay Wins</h2>
          <div className="mt-5 grid gap-4">
            {clayWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Clay</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where ZoomInfo Wins</h2>
          <div className="mt-5 grid gap-4">
            {zoomInfoWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: ZoomInfo</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Clay vs ZoomInfo for Data Enrichment
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Clay is better when enrichment needs to be flexible. You can chain
            multiple providers, add conditional logic, use AI research, call
            APIs, dedupe fields, and create custom outputs for very specific
            prospecting plays.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            ZoomInfo is better when the team wants one large, familiar source of
            company and contact data. It is less of a builder canvas and more
            of an enterprise data system for reps, marketers, and RevOps.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Clay vs ZoomInfo for Outbound
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Clay is stronger for outbound campaigns that depend on precise
            segmentation, trigger signals, custom research, AI-written snippets,
            and different enrichment paths for different audiences.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            ZoomInfo is stronger when outbound starts with broad account and
            contact discovery, direct dial access, intent filters, territories,
            and standardized rep prospecting.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Clay vs ZoomInfo for AI
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Clay&apos;s AI advantage is workflow-level flexibility. Teams can use
            AI to research accounts, generate custom fields, classify records,
            score opportunities, write snippets, and combine AI output with
            external data sources.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            ZoomInfo&apos;s AI advantage is tied to its broader GTM intelligence
            platform. Copilot-style workflows are useful when a company already
            has sales data, account intelligence, intent signals, and rep
            processes running through ZoomInfo.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Clay pricing depends on seats, credits, actions, enrichment volume,
            AI usage, and whether your team brings its own API keys. The upside
            is flexibility; the risk is that complex workflows can become hard
            to forecast.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            ZoomInfo pricing is typically sales-led and contract-based. Teams
            should evaluate seats, credits, intent data, add-ons, integrations,
            contract terms, and whether the data quality justifies the annual
            commitment.
          </p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="rounded-lg border bg-card p-5">
              <h2 className="text-2xl font-semibold">{useCase.title}</h2>
              <CheckList items={useCase.items} />
            </div>
          ))}
        </section>

        <ArticleCta tool="ZoomInfo" href={toolLinks.zoomInfo} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Clay is the better choice for GTM builders, growth teams, and modern
            outbound teams that want flexible enrichment, AI research, and
            custom workflows instead of a static database.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            ZoomInfo is the better choice for large revenue teams that need a
            mature B2B data platform, account intelligence, buyer intent,
            direct dials, governance, and standardized rep access.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Clay Rating:</span> 9.1/10. Best
              for modern GTM workflows and AI-powered enrichment.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">ZoomInfo Rating:</span> 8.7/10.
              Best for enterprise B2B data and account intelligence.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Clay if you want to build flexible, AI-assisted outbound
            workflows. Choose ZoomInfo if your revenue organization needs a
            mature enterprise data platform with broad B2B coverage.
          </p>
        </section>

        <ArticleCta tool="Clay" href={toolLinks.clay} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
