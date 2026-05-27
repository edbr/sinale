import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { RelatedContent } from "@/components/article/related-content"
import { ToolLogo } from "@/components/site/tool-logo"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"
import type { CardItem } from "@/lib/site-content"

const bestFor = [
  "Mid-market and enterprise sales teams with many recorded customer interactions",
  "Revenue leaders who need pipeline visibility and forecast confidence",
  "Sales managers coaching reps from real calls, emails, and deal signals",
  "RevOps teams standardizing deal inspection and revenue process",
  "Organizations that can operationalize insights across sales, CS, and enablement",
]

const notFor = [
  "Very small teams that only need meeting notes and call recording",
  "Companies without a mature CRM or clear sales process",
  "Teams that will not review calls, coach reps, or inspect deals consistently",
  "Buyers looking for transparent self-serve pricing",
  "Non-sales teams that mainly need general meeting transcription",
]

const features = [
  {
    title: "Conversation Intelligence",
    body: "Gong records, transcribes, and analyzes sales calls, meetings, emails, and other customer interactions so teams can search conversations, review moments, and understand what buyers actually said.",
  },
  {
    title: "Deal Execution",
    body: "Gong surfaces deal health, activity gaps, buyer engagement, risks, next steps, and account context so managers and reps can inspect pipeline from evidence rather than relying only on CRM notes.",
  },
  {
    title: "Forecasting",
    body: "Gong Forecast helps revenue leaders inspect pipeline changes, deal risks, buyer signals, and rollups so forecasts are based on customer activity and deal evidence instead of rep opinion alone.",
  },
  {
    title: "Coaching and Enablement",
    body: "Sales managers can use Gong to review calls, compare talk tracks, find coaching moments, build scorecards, inspect objections, and onboard reps with examples from real customer conversations.",
  },
  {
    title: "AI Summaries and Follow-Up",
    body: "Gong uses AI to generate call summaries, action items, follow-up drafts, deal warnings, and recommendations that reduce admin work and help reps act on the right customer signals.",
  },
  {
    title: "Revenue Data Foundation",
    body: "Gong connects customer interactions with CRM and revenue workflows, creating a structured layer of revenue signals that can power coaching, deal reviews, forecasting, and leadership dashboards.",
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

export function GongToolPage({ relatedItems }: { relatedItems: CardItem[] }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Button asChild variant="ghost" className="mb-10 px-0">
          <Link href="/tools">
            <ArrowLeft />
            Tools
          </Link>
        </Button>

        <p className="mb-4 text-sm font-medium text-muted-foreground">Tools</p>
        <ToolLogo name="Gong" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          Gong
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Gong is listed in Sinale&apos;s AI sales directory for conversation
          intelligence, revenue AI, sales coaching, deal execution, forecasting,
          customer interaction analysis, and RevOps visibility.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Gong is a revenue intelligence and Revenue AI platform for sales
            teams. It captures customer interactions, analyzes what happened,
            and turns those signals into coaching, deal inspection, forecasting,
            engagement, and revenue operations workflows.
          </p>
          <p>
            The core value is visibility. Gong helps sales leaders see what is
            actually happening in calls, emails, buyer engagement, and deals,
            rather than relying only on CRM fields, rep memory, or optimistic
            forecast notes.
          </p>
          <p>
            The tradeoff is cost and operating commitment. Gong is most useful
            when a team has enough sales volume, management discipline, and
            RevOps maturity to turn insights into behavior change. If nobody
            reviews the data or coaches from it, Gong can become expensive call
            storage.
          </p>
        </div>

        <ArticleCta tool="Gong" href={toolLinks.gong} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gong is one of the strongest revenue intelligence platforms for
            teams that want to improve sales execution from real customer
            interactions. It is especially valuable for sales leaders, RevOps,
            enablement, and managers who need evidence for coaching, pipeline
            inspection, and forecast calls.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Gong if sales conversations are a major source of truth for
            your revenue team. Skip it if you mainly need lightweight meeting
            notes, simple call recording, or a low-cost tool for a small team.
          </p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">Best For</h2>
            <CheckList items={bestFor} />
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">Not Best For</h2>
            <CheckList items={notFor} />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What Gong Does</h2>
          <div className="mt-5 grid gap-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Gong for Sales Coaching
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gong is strongest when managers use it as a coaching system, not
            just a call library. Reps and managers can review objections,
            pricing moments, competitor mentions, talk ratios, next steps, and
            examples of what top performers do differently.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The key is cadence. Gong creates leverage when managers inspect real
            calls weekly, coach to specific moments, and connect behavior to
            outcomes. Without that habit, the insights will not change rep
            performance.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Gong for Deal Execution
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gong helps teams see whether deals are actually progressing. It can
            highlight missing stakeholders, stale activity, weak engagement,
            risk signals, methodology gaps, and moments from customer
            conversations that should change the deal strategy.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            That makes it useful for pipeline reviews. Instead of asking reps
            for a subjective update, managers can inspect buyer activity,
            deal-level evidence, and AI-identified warnings before deciding
            where to spend time.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Gong for Forecasting</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Forecasting is where Gong becomes more than conversation
            intelligence. Gong Forecast connects pipeline, CRM, deal activity,
            customer interactions, and risk signals so leaders can call a number
            with more confidence.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            It is most valuable when the organization already has a defined
            sales process. Gong can reveal the truth in the pipeline, but it
            cannot fix unclear stages, inconsistent CRM hygiene, or leaders who
            do not act on the warnings.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gong does not publish standard list pricing. Pricing is typically
            quote-based and depends on seats, modules, contract length, data
            volume, integrations, support, and enterprise requirements.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Treat Gong as a serious sales infrastructure purchase, not a casual
            meeting-notes subscription. Before buying, estimate seat usage,
            decide which teams truly need access, confirm required modules such
            as Forecast or Engage, and agree on the management routines that
            will turn Gong data into better selling.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Gong if your revenue team has enough sales motion, call
            volume, and leadership discipline to make customer interaction data
            part of coaching, pipeline reviews, forecasting, and enablement.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Do not buy Gong just because AI summaries sound useful. Buy it when
            the business needs a revenue intelligence layer and has owners ready
            to inspect the data, coach from it, and change the sales process
            when the evidence says something is broken.
          </p>
        </section>

        <ArticleCta tool="Gong" href={toolLinks.gong} placement="bottom" />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
