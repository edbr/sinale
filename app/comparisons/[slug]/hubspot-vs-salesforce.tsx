import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Ease of use", "HubSpot"],
  ["Customization depth", "Salesforce"],
  ["Startup and SMB fit", "HubSpot"],
  ["Enterprise scale", "Salesforce"],
  ["Marketing automation", "HubSpot"],
  ["Complex sales operations", "Salesforce"],
  ["Implementation speed", "HubSpot"],
  ["Ecosystem and extensibility", "Salesforce"],
  ["AI for simple GTM workflows", "HubSpot"],
  ["Overall Recommendation", "HubSpot for speed, Salesforce for complexity"],
]

const hubspotWins = [
  {
    title: "Faster Setup and Adoption",
    body: "HubSpot is usually easier to launch, teach, and maintain. Small and mid-sized teams can get sales, marketing, service, content, and operations workflows running without a long implementation project.",
  },
  {
    title: "Better All-in-One GTM Experience",
    body: "HubSpot is strongest when marketing, sales, service, content, and operations teams want one connected customer platform with a friendly CRM at the center.",
  },
  {
    title: "Cleaner Marketing and Content Workflows",
    body: "HubSpot has a long advantage in inbound marketing, landing pages, email, forms, lead capture, campaigns, content tools, and lifecycle nurturing for teams that do not want to stitch together many systems.",
  },
  {
    title: "More Approachable AI",
    body: "HubSpot Breeze is designed to be useful inside everyday CRM work: drafting emails, summarizing contacts and deals, enriching data, helping with support, and automating common marketing and sales tasks.",
  },
]

const salesforceWins = [
  {
    title: "Deeper Customization",
    body: "Salesforce is the better choice when your CRM must model complex territories, objects, permissions, approval paths, partner channels, revenue processes, service teams, and multi-layer reporting.",
  },
  {
    title: "Enterprise Governance",
    body: "Large organizations choose Salesforce because it can support complicated data models, security controls, audit needs, sandbox workflows, implementation partners, and global CRM administration.",
  },
  {
    title: "Bigger Ecosystem",
    body: "Salesforce has a massive ecosystem across AppExchange, implementation partners, industry clouds, Data Cloud, Slack, Tableau, MuleSoft, Service Cloud, Marketing Cloud, and custom development.",
  },
  {
    title: "More Ambitious AI Platform",
    body: "Salesforce Agentforce is built for agentic sales, service, and customer workflows at enterprise scale. It is more powerful when the underlying CRM data and process design are mature.",
  },
]

const useCases = [
  {
    title: "Choose HubSpot if",
    items: [
      "You want CRM, marketing, sales, service, content, and ops in one simple platform",
      "Your team needs faster implementation and easier adoption",
      "You do not have a large CRM admin or RevOps team",
      "Inbound marketing and lifecycle automation matter",
      "You want AI features that feel approachable for everyday GTM work",
    ],
  },
  {
    title: "Choose Salesforce if",
    items: [
      "Your sales process is complex, global, or enterprise-heavy",
      "You need deep customization, governance, permissions, and reporting",
      "You have dedicated admins, RevOps, or implementation partners",
      "Your company depends on AppExchange or Salesforce ecosystem products",
      "You want a CRM platform that can model almost any customer process",
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

export function HubSpotVsSalesforceComparison() {
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
          HubSpot vs Salesforce (2026): Which CRM Should You Choose?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            HubSpot and Salesforce are both serious CRM platforms, but they are
            built for different levels of complexity.
          </p>
          <p>
            HubSpot is better for teams that want a clean, connected customer
            platform for marketing, sales, service, content, operations, and AI
            without a heavy implementation burden.
          </p>
          <p>
            Salesforce is better for companies that need deep customization,
            enterprise governance, advanced reporting, complex sales operations,
            and a CRM platform that can scale across many business units.
          </p>
          <p>
            The simple rule: choose HubSpot when speed and usability matter
            most. Choose Salesforce when your CRM needs to model a complex
            business.
          </p>
        </div>

        <ArticleCta tool="HubSpot" href={toolLinks.hubspot} placement="top" />

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
              <span className="font-medium">Best for SMBs:</span> HubSpot
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for enterprise:</span>{" "}
              Salesforce
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is HubSpot?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              HubSpot is a customer platform built around Smart CRM, marketing,
              sales, service, content, operations, commerce, integrations, and
              Breeze AI.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is especially strong for startups, SMBs, and scaling
              go-to-market teams that want one approachable system for the
              customer journey.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Salesforce?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Salesforce is an enterprise CRM platform spanning Sales Cloud,
              Service Cloud, Marketing Cloud, Data Cloud, Agentforce,
              AppExchange, analytics, automation, and industry solutions.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is especially strong for larger organizations with complex
              customer operations, mature RevOps teams, and the budget to
              customize the platform properly.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where HubSpot Wins</h2>
          <div className="mt-5 grid gap-4">
            {hubspotWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: HubSpot</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Salesforce Wins</h2>
          <div className="mt-5 grid gap-4">
            {salesforceWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Salesforce</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            HubSpot vs Salesforce for Sales Teams
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            HubSpot is better when sales teams need an easy pipeline, clean
            contact records, email tracking, sequences, meetings, quotes,
            marketing context, and simple automation without making reps live
            inside a complicated CRM.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Salesforce is better when sales operations needs territory
            management, advanced forecasting, custom objects, approval flows,
            partner channels, incentive tools, revenue intelligence, and deep
            process control.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            HubSpot vs Salesforce for Marketing
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            HubSpot is usually the easier choice for marketing teams. Landing
            pages, forms, email, lists, campaigns, content, lead nurturing, ads,
            reporting, and CRM data feel connected out of the box.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Salesforce can support sophisticated marketing operations, but
            teams often need Marketing Cloud, Data Cloud, integrations, and more
            specialized administration to get the same level of end-to-end
            coordination.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            HubSpot vs Salesforce for AI
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            HubSpot Breeze is best when teams want embedded AI for practical CRM
            work: summaries, email drafts, prospecting help, customer support,
            data enrichment, and guidance based on customer platform data.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Salesforce Agentforce is more ambitious for enterprise AI agents,
            customer workflows, sales automation, service operations, and
            broader data-driven processes. It needs stronger setup and cleaner
            CRM architecture to pay off.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            HubSpot can start affordably, but total cost depends on hubs,
            seats, marketing contacts, credits, AI usage, automation needs, and
            whether you need Professional or Enterprise tiers.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Salesforce pricing is more complex. Beyond licenses, teams should
            budget for implementation, admins, consultants, add-ons, Success
            Plans, AppExchange products, AI, data, and ongoing CRM maintenance.
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

        <ArticleCta tool="Salesforce" href={toolLinks.salesforce} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            HubSpot is the better CRM for teams that want to move quickly,
            connect marketing and sales, keep adoption high, and avoid turning
            the CRM into a major systems project.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Salesforce is the better CRM for organizations with complex sales
            operations, enterprise governance, advanced customization, global
            reporting, and the internal resources to manage a powerful platform.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">HubSpot Rating:</span> 9/10. Best
              for fast-moving SMB and mid-market GTM teams.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Salesforce Rating:</span> 9.1/10.
              Best for enterprise CRM depth and customization.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose HubSpot if you want a CRM your team can adopt quickly across
            marketing, sales, and service. Choose Salesforce if your business
            needs a deeply customized enterprise CRM platform.
          </p>
        </section>

        <ArticleCta tool="HubSpot" href={toolLinks.hubspot} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
