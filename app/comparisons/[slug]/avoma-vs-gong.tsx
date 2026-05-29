import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Meeting notes and summaries", "Avoma"],
  ["Enterprise revenue intelligence", "Gong"],
  ["Ease of setup", "Avoma"],
  ["Forecasting and deal analytics", "Gong"],
  ["Startup and SMB fit", "Avoma"],
  ["Large sales org fit", "Gong"],
  ["Coaching for lean teams", "Avoma"],
  ["Conversation intelligence depth", "Gong"],
  ["Pricing accessibility", "Avoma"],
  ["Overall Recommendation", "Avoma for lean teams, Gong for enterprise revenue orgs"],
]

const avomaWins = [
  {
    title: "Better for Lean Revenue Teams",
    body: "Avoma is easier to recommend for startups, SMBs, and mid-market teams that want AI meeting notes, call summaries, coaching, CRM updates, and conversation intelligence without a heavy rollout.",
  },
  {
    title: "Stronger Meeting Assistant Experience",
    body: "Avoma is especially useful when the first job is capturing meetings, summarizing calls, extracting action items, sharing notes, and making sales conversations easier to follow.",
  },
  {
    title: "More Accessible Setup and Pricing",
    body: "Avoma generally has a shorter path to value. Teams can start with meeting intelligence and expand into coaching or revenue workflows without the procurement weight of an enterprise platform.",
  },
  {
    title: "Good Fit Beyond Sales",
    body: "Avoma can serve customer success, product research, recruiting, and internal meeting workflows more naturally than a revenue-intelligence platform built mainly for mature sales organizations.",
  },
]

const gongWins = [
  {
    title: "Enterprise Revenue Intelligence",
    body: "Gong is stronger for larger revenue organizations that need deep conversation intelligence, deal inspection, pipeline analytics, forecasting, coaching, and visibility across many teams.",
  },
  {
    title: "Deeper Sales Coaching",
    body: "Gong gives sales leaders more powerful ways to inspect calls, spot patterns, benchmark rep behavior, understand deal risk, and coach teams based on real conversation data.",
  },
  {
    title: "Better for Forecasting and Deal Health",
    body: "Gong is better when leadership needs to connect calls, emails, CRM activity, deal movement, pipeline health, and forecast signals into a broader revenue operating system.",
  },
  {
    title: "Mature Enterprise Workflow",
    body: "Gong fits companies with dedicated sales managers, RevOps, enablement, formal inspection processes, and enough volume to turn conversation data into repeatable revenue insights.",
  },
]

const useCases = [
  {
    title: "Choose Avoma if",
    items: [
      "You need AI meeting notes, summaries, and action items quickly",
      "Your team is a startup, SMB, or lean mid-market revenue team",
      "You want coaching without a large enterprise rollout",
      "Customer success, product, or recruiting teams may also use it",
      "You need a practical meeting assistant before deep revenue analytics",
    ],
  },
  {
    title: "Choose Gong if",
    items: [
      "You run a mature sales organization with many reps and managers",
      "Forecasting, deal inspection, and pipeline health are critical",
      "You need enterprise-grade conversation intelligence and coaching",
      "RevOps and enablement teams will manage the platform",
      "You can justify a larger revenue intelligence investment",
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

export function AvomaVsGongComparison() {
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
          Avoma vs Gong (2026): Which Conversation Intelligence Tool Is Better?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Avoma and Gong both use sales conversations to help revenue teams
            understand customers, coach reps, and improve follow-through. But
            they are built for different team sizes and operating models.
          </p>
          <p>
            Avoma is the better choice for lean teams that want AI meeting
            notes, call summaries, action items, CRM updates, lightweight
            coaching, and useful conversation intelligence without a heavy
            implementation.
          </p>
          <p>
            Gong is the better choice for mature revenue organizations that need
            deep conversation intelligence, deal inspection, pipeline analytics,
            forecasting, coaching, and enterprise revenue visibility.
          </p>
          <p>
            The simple rule: choose Avoma when meeting intelligence is the main
            job. Choose Gong when revenue intelligence is the operating system.
          </p>
        </div>

        <ArticleCta tool="Avoma" href={toolLinks.avoma} placement="top" />

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
              <span className="font-medium">Best for lean teams:</span> Avoma
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for enterprise revenue:</span>{" "}
              Gong
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Avoma?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Avoma is an AI meeting assistant and conversation intelligence
              platform for recording meetings, creating notes, summarizing
              calls, tracking action items, coaching teams, and syncing
              conversation insights to CRM.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is especially strong for smaller revenue teams that want useful
              meeting intelligence across sales, success, product, and internal
              collaboration without building a full revenue intelligence
              program.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Gong?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Gong is a revenue intelligence platform for capturing customer
              interactions, analyzing sales conversations, inspecting deals,
              coaching reps, forecasting pipeline, and giving leaders visibility
              into revenue execution.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is especially strong for larger sales organizations with
              managers, enablement teams, RevOps, formal coaching programs, and
              enough call volume to mine for reliable revenue patterns.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Avoma Wins</h2>
          <div className="mt-5 grid gap-4">
            {avomaWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Avoma</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Gong Wins</h2>
          <div className="mt-5 grid gap-4">
            {gongWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Gong</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Avoma vs Gong for Sales Coaching
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Avoma gives lean teams a practical coaching layer: call recordings,
            transcripts, summaries, scorecards, talk patterns, objections,
            action items, and follow-up context that managers can review without
            a major rollout.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gong is stronger when coaching is a formal sales-management motion.
            It gives leaders deeper ways to inspect calls, compare rep behavior,
            identify risks, review deals, and connect conversation insights to
            pipeline outcomes.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Avoma vs Gong for Forecasting
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Avoma can help teams understand conversations and follow up better,
            but it is not mainly known as an enterprise forecasting platform.
            Its value starts with meetings and expands into coaching.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gong wins for forecasting and deal health. It is built to connect
            customer interactions, CRM data, pipeline movement, manager
            inspection, and revenue signals into a bigger sales operating view.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Avoma is usually easier for smaller teams to evaluate because it
            has more accessible self-serve style pricing and a clearer path from
            meeting assistant to conversation intelligence.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gong is typically a larger sales-led investment. Teams should budget
            for seats, platform scope, implementation, integrations, enablement,
            and whether managers will actively use the revenue intelligence
            workflows.
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

        <ArticleCta tool="Gong" href={toolLinks.gong} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Avoma is the better choice for lean teams that want AI meeting
            notes, summaries, follow-ups, CRM updates, and practical coaching
            without committing to a full enterprise revenue intelligence stack.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gong is the better choice for large sales organizations that need
            conversation intelligence, deal analytics, forecasting, coaching,
            and revenue visibility across managers, reps, and RevOps.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Avoma Rating:</span> 8.7/10. Best
              for lean teams that need AI meeting intelligence.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Gong Rating:</span> 9.1/10. Best
              for enterprise revenue intelligence.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Avoma if your team needs practical AI meeting intelligence
            and coaching without a heavy rollout. Choose Gong if revenue
            leadership needs deeper deal analytics, forecasting, and enterprise
            conversation intelligence.
          </p>
        </section>

        <ArticleCta tool="Avoma" href={toolLinks.avoma} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
