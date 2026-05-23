import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

const verdictRows = [
  ["Ease of Use", "Apollo"],
  ["Pricing Accessibility", "Apollo"],
  ["Sales Engagement", "Apollo"],
  ["Data Depth", "ZoomInfo"],
  ["Enterprise GTM Intelligence", "ZoomInfo"],
  ["CRM Enrichment", "Tie"],
  ["Buyer Intent", "ZoomInfo"],
  ["Startup Fit", "Apollo"],
  ["Enterprise Fit", "ZoomInfo"],
  ["Overall Recommendation", "Apollo"],
]

const apolloWins = [
  {
    title: "Better for Lean Sales Teams",
    body: "Apollo is easier to recommend for startups, founders, SDR teams, and growing sales organizations that need prospecting, enrichment, sequencing, and basic workflow automation in one place.",
  },
  {
    title: "More Accessible Pricing",
    body: "Apollo is generally easier to evaluate because teams can start smaller and understand the product before committing to a large enterprise contract.",
  },
  {
    title: "Built-In Sales Engagement",
    body: "Apollo combines data, list building, email sequences, dialing workflows, lead scoring, and sales automation. That makes it useful as both a database and an execution platform.",
  },
  {
    title: "Faster Day-One Productivity",
    body: "For teams that want to build lists, enrich records, write outbound sequences, and start prospecting quickly, Apollo usually has a shorter path to value.",
  },
]

const zoomInfoWins = [
  {
    title: "Enterprise Data Coverage",
    body: "ZoomInfo is strongest when a company needs broad B2B company intelligence, contact data, org charts, intent data, technographics, and enterprise-grade go-to-market workflows.",
  },
  {
    title: "Advanced Buyer Intent",
    body: "ZoomInfo is often a better fit for larger teams that rely heavily on intent signals, account intelligence, territory planning, and multi-team GTM coordination.",
  },
  {
    title: "Mature Enterprise Workflows",
    body: "ZoomInfo fits companies with established sales, marketing, RevOps, and CRM processes that can justify a more complex platform and procurement cycle.",
  },
  {
    title: "Better for Larger Revenue Teams",
    body: "If dozens or hundreds of reps need structured account intelligence, governance, integrations, and reporting, ZoomInfo can make more sense than lighter-weight tools.",
  },
]

const useCases = [
  {
    title: "Choose Apollo if",
    items: [
      "You are a startup or smaller sales team",
      "You need prospecting and outreach in one platform",
      "You care about speed and affordability",
      "You want reps to build lists and launch sequences quickly",
      "You do not need a heavy enterprise procurement process",
    ],
  },
  {
    title: "Choose ZoomInfo if",
    items: [
      "You are an enterprise or mature mid-market team",
      "You need deeper account intelligence",
      "Buyer intent is central to your GTM strategy",
      "You have dedicated RevOps support",
      "You can justify a larger annual contract",
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

export function ApolloVsZoomInfoComparison() {
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
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Apollo vs ZoomInfo (2026): Which Sales Intelligence Platform Should
          You Use?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            If you are building a B2B sales motion, there is a good chance
            Apollo and ZoomInfo are both on your shortlist.
          </p>
          <p>
            Both help teams find prospects, enrich CRM data, identify target
            accounts, and support outbound sales. But they are built for
            different types of teams.
          </p>
          <p>
            Apollo is the better fit for startups, lean sales teams, and
            companies that want prospecting plus outreach in one accessible
            platform.
          </p>
          <p>
            ZoomInfo is the better fit for larger revenue organizations that
            need deeper account intelligence, buyer intent, governance, and
            enterprise GTM workflows.
          </p>
        </div>

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
              <span className="font-medium">Best for most teams:</span> Apollo
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for enterprise GTM:</span>{" "}
              ZoomInfo
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Apollo?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Apollo is a sales intelligence and engagement platform for B2B
              teams. It combines lead search, contact data, enrichment,
              scoring, email sequencing, calling workflows, CRM syncing, and
              sales automation.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              The main appeal is consolidation. Instead of buying a data tool,
              a sequencing tool, and an enrichment tool separately, many teams
              can run a meaningful outbound workflow from Apollo alone.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is ZoomInfo?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              ZoomInfo is an enterprise go-to-market intelligence platform. It
              is best known for company and contact data, account intelligence,
              buyer intent, enrichment, integrations, and revenue team
              workflows.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              The platform is more powerful when a company has a mature sales
              organization, dedicated RevOps support, and a clear plan for
              using data across sales and marketing teams.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Apollo Wins</h2>
          <div className="mt-5 grid gap-4">
            {apolloWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Apollo</p>
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
            Apollo vs ZoomInfo for Startups
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            For most startups, Apollo is the easier recommendation. Early teams
            need speed, usable data, affordable experimentation, and a way to
            launch outbound campaigns without stitching together too many
            tools.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            ZoomInfo can be overkill at this stage. Unless your sales motion
            depends heavily on enterprise account intelligence or intent data,
            the cost and complexity are harder to justify.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Apollo vs ZoomInfo for Enterprise Teams
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Enterprise teams may arrive at the opposite conclusion. If your
            revenue organization needs deeper account coverage, territory
            planning, enrichment, marketing alignment, buyer intent, and
            governance, ZoomInfo becomes more compelling.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The question is not whether ZoomInfo is powerful. It is whether
            your team is mature enough to convert that power into better
            pipeline.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Apollo is generally more accessible for smaller teams and easier to
            evaluate before making a large commitment.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            ZoomInfo typically uses custom pricing based on seats, credits,
            product edition, add-ons, and contract terms. For many buyers, that
            means a larger annual commitment and a more traditional enterprise
            sales process.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Because pricing changes frequently, check both vendors directly
            before making a purchasing decision.
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

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Apollo is the better choice for most startups, founders, and lean
            outbound teams because it combines prospecting, enrichment, and
            engagement in a more accessible package.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            ZoomInfo is the better choice for larger revenue organizations that
            need deeper data, advanced intent signals, enterprise workflows, and
            dedicated operational support.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Apollo Rating:</span> 9/10. Best
              for lean outbound and startup sales teams.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">ZoomInfo Rating:</span> 8.5/10.
              Best for enterprise sales intelligence.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Apollo helps teams start selling faster. ZoomInfo helps mature GTM
            teams operate with deeper intelligence. If you are building or
            scaling outbound from scratch, start with Apollo. If you are running
            a complex enterprise revenue organization, evaluate ZoomInfo.
          </p>
        </section>
      </article>
    </main>
  )
}
