import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Prospecting database", "Apollo"],
  ["Custom enrichment workflows", "Clay"],
  ["Sales engagement", "Apollo"],
  ["AI research and personalization", "Clay"],
  ["Ease of use for reps", "Apollo"],
  ["Flexibility for GTM builders", "Clay"],
  ["Startup outbound launch", "Apollo"],
  ["Advanced signal-based plays", "Clay"],
  ["All-in-one sales workflow", "Apollo"],
  ["Overall Recommendation", "Apollo for execution, Clay for workflow building"],
]

const apolloWins = [
  {
    title: "Prospecting and Outreach in One Place",
    body: "Apollo is better when a team wants to find contacts, build lists, enrich records, write sequences, send emails, dial prospects, score leads, and manage outbound activity in one platform.",
  },
  {
    title: "Easier for Sales Reps",
    body: "Apollo feels more familiar to SDRs and account executives. Reps can search accounts, save contacts, launch sequences, use buying signals, and work deals without building a custom data workflow first.",
  },
  {
    title: "Faster Day-One Value",
    body: "For founders and small sales teams, Apollo usually gets useful faster. You can start with data, filters, email workflows, CRM sync, and engagement features without needing a GTM engineer.",
  },
  {
    title: "More Complete Sales Engagement",
    body: "Clay is not trying to replace a sales engagement platform. Apollo includes more native execution tools for sequencing, calling, activity tracking, and sales-team workflows.",
  },
]

const clayWins = [
  {
    title: "Custom Data Workflows",
    body: "Clay is stronger when your outbound motion depends on enrichment waterfalls, custom fields, APIs, conditional logic, AI research, lead scoring, CRM updates, and workflows that go beyond standard prospecting filters.",
  },
  {
    title: "AI Research and Personalization",
    body: "Clay is better for building unique personalization at scale: researching company pages, summarizing signals, qualifying accounts, classifying prospects, and generating custom snippets for specific campaigns.",
  },
  {
    title: "Better Data Source Flexibility",
    body: "Clay lets teams combine many data providers and enrichment methods. That matters when one database is not enough, or when data quality varies by industry, geography, title, or account type.",
  },
  {
    title: "More Powerful for GTM Builders",
    body: "Growth teams, RevOps teams, founders, and GTM engineers can use Clay as a flexible workspace for building repeatable prospecting systems rather than simply handing reps a contact database.",
  },
]

const useCases = [
  {
    title: "Choose Apollo if",
    items: [
      "You need a prospecting database and sales engagement tool together",
      "Your reps need to build lists and launch outreach quickly",
      "You want a simpler tool for SDRs, AEs, and founders",
      "Your outbound motion is mostly standard prospecting and sequencing",
      "You want fast setup without a dedicated GTM builder",
    ],
  },
  {
    title: "Choose Clay if",
    items: [
      "You want custom enrichment, scoring, and AI research workflows",
      "Your outbound depends on trigger signals and personalization",
      "You need to combine multiple data sources or API providers",
      "Your team has RevOps, growth, or technical builder capacity",
      "You want a flexible GTM system more than a rep-facing database",
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

export function ApolloVsClayComparison() {
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
          Apollo vs Clay (2026): Which GTM Tool Should Startups Use?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Apollo and Clay both help teams build outbound pipeline, but they
            solve different parts of the go-to-market stack.
          </p>
          <p>
            Apollo is the better choice if you want an accessible sales
            platform with a prospecting database, enrichment, email sequences,
            dialing, CRM sync, lead scoring, and sales engagement features.
          </p>
          <p>
            Clay is the better choice if you want to build custom GTM workflows
            with enrichment waterfalls, AI research, signal tracking,
            personalization, APIs, and flexible automation.
          </p>
          <p>
            The simple rule: choose Apollo when reps need to prospect and send
            today. Choose Clay when your team wants to build a smarter outbound
            engine.
          </p>
        </div>

        <ArticleCta tool="Apollo" href={toolLinks.apollo} placement="top" />

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
              <span className="font-medium">Best for sales execution:</span>{" "}
              Apollo
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for GTM building:</span> Clay
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Apollo?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Apollo is a sales intelligence and engagement platform for B2B
              teams. It combines prospect search, contact data, enrichment,
              buying signals, lead scoring, email sequences, calling, CRM sync,
              and workflow automation.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is especially strong for startups and sales teams that want to
              find prospects and execute outbound from the same place.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Clay?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Clay is a GTM workflow platform for finding accounts, enriching
              records, researching prospects, using AI agents, running data
              waterfalls, and pushing structured outputs into sales systems.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is especially strong for teams that want custom enrichment,
              AI-powered research, and outbound personalization workflows that
              are hard to build in a standard sales engagement tool.
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
          <h2 className="text-2xl font-semibold">
            Apollo vs Clay for Startups
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Apollo is easier for most startups to adopt first because it covers
            the basic outbound stack: search, enrich, sequence, call, track, and
            sync to CRM. A founder or first SDR can get value quickly.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Clay becomes more valuable once the startup knows its ICP and wants
            better targeting, smarter enrichment, trigger-based campaigns, and
            personalization that generic prospecting workflows cannot support.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Apollo vs Clay for Sales Teams
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Apollo is more rep-friendly. It gives SDRs and AEs a familiar place
            to search, save leads, run sequences, make calls, and manage
            day-to-day prospecting activity.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Clay is more operator-friendly. It is better for the person building
            the lists, scoring logic, research steps, enrichment paths, and
            handoff rules that make rep workflows better downstream.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Apollo vs Clay for AI</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Apollo&apos;s AI features are most useful inside sales execution:
            account recommendations, lead scoring, email help, prospecting
            signals, and workflow assistance for reps.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Clay&apos;s AI features are most useful inside workflow building:
            researching accounts, classifying records, extracting custom data,
            generating personalization fields, and combining AI output with
            enrichment providers.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Apollo pricing is easier to estimate for a sales team because it is
            built around users, credits, data access, engagement features, and
            plan limits. The value is strongest when reps use both the data and
            outreach tools.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Clay pricing depends more on workflow volume: credits, enrichment
            actions, AI usage, data sources, API keys, and how many records your
            team processes. Powerful workflows can be very efficient, but they
            need monitoring.
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

        <ArticleCta tool="Clay" href={toolLinks.clay} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Apollo is the better tool if your immediate need is prospecting and
            outreach execution. It gives reps a practical sales workflow without
            requiring much GTM engineering.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Clay is the better tool if your team wants to build a custom GTM
            system. It wins when enrichment, AI research, personalization,
            trigger signals, and flexible workflows are the real advantage.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Apollo Rating:</span> 8.9/10. Best
              for fast outbound execution and sales-team adoption.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Clay Rating:</span> 9.1/10. Best
              for custom GTM workflows and AI-powered enrichment.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Apollo if you need a sales team to prospect and send quickly.
            Choose Clay if you want to build more targeted, flexible,
            AI-assisted GTM workflows around your best accounts.
          </p>
        </section>

        <ArticleCta tool="Apollo" href={toolLinks.apollo} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
