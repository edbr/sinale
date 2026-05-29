import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Ease of Use", "Zapier"],
  ["App Integrations", "Zapier"],
  ["Self-Hosting", "n8n"],
  ["Complex Workflows", "n8n"],
  ["Technical Control", "n8n"],
  ["Non-Technical Teams", "Zapier"],
  ["AI Orchestration", "Depends on team"],
  ["Error Handling", "n8n"],
  ["Enterprise Readiness", "Depends on requirements"],
  ["Overall Recommendation", "Zapier for speed, n8n for control"],
]

const zapierWins = [
  {
    title: "Easier for Non-Technical Teams",
    body: "Zapier is usually faster for marketing, sales, support, recruiting, and operations teams that want to connect apps without thinking about hosting, credentials, servers, queues, or custom code.",
  },
  {
    title: "Larger App Ecosystem",
    body: "Zapier's biggest advantage is app coverage. If your team uses mainstream SaaS tools, there is a good chance Zapier already has a polished integration, template, and support path.",
  },
  {
    title: "Faster Setup for Simple Automations",
    body: "For basic workflows like form submission to CRM, lead routing to Slack, calendar follow-ups, spreadsheet updates, or support ticket notifications, Zapier is often the quickest path from idea to working automation.",
  },
  {
    title: "Managed Platform",
    body: "Zapier is cloud-only, which is a limitation for some teams and a benefit for others. You do not need to maintain infrastructure, patch a self-hosted instance, or manage worker scaling yourself.",
  },
]

const n8nWins = [
  {
    title: "More Control",
    body: "n8n is the stronger choice when technical teams want control over hosting, data flow, custom logic, credentials, workflow structure, API calls, and how automations run in production.",
  },
  {
    title: "Self-Hosting",
    body: "n8n can be self-hosted, including a free community edition. That matters for teams with strict data policies, high automation volume, custom infrastructure needs, or a preference for owning the automation layer.",
  },
  {
    title: "Better for Complex Logic",
    body: "n8n handles branching, loops, transformations, custom API calls, error workflows, code nodes, and multi-step data processing in a way that feels more natural for technical operators.",
  },
  {
    title: "Execution-Based Pricing",
    body: "n8n's cloud model is based around workflow executions rather than charging for every individual task or step. For complex workflows with many steps, that pricing model can be easier to reason about.",
  },
]

const useCases = [
  {
    title: "Choose Zapier if",
    items: [
      "Non-technical teams will build and maintain automations",
      "You need broad SaaS app coverage with minimal setup",
      "Most workflows are simple, linear, and business-user owned",
      "You prefer a managed cloud platform",
      "Speed of implementation matters more than infrastructure control",
    ],
  },
  {
    title: "Choose n8n if",
    items: [
      "Technical operators or engineers will own automation",
      "You need self-hosting or stronger data control",
      "Workflows include branching, loops, custom APIs, or code",
      "You want more control over error handling and workflow structure",
      "High-volume or complex workflows make per-task pricing painful",
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

export function ZapierVsN8nComparison() {
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
          Zapier vs n8n (2026): Which Automation Tool Is Better?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Zapier and n8n both connect apps and automate work, but they are
            built for different kinds of teams.
          </p>
          <p>
            Zapier is the easier choice for non-technical teams that want a
            managed automation platform with a huge app ecosystem, polished
            templates, and quick setup. It is usually the fastest way to connect
            common SaaS tools.
          </p>
          <p>
            n8n is the better choice for technical operators and engineering-led
            teams that want more control: self-hosting, code, custom API calls,
            complex branching, reusable workflows, and stronger ownership over
            data and infrastructure.
          </p>
          <p>
            The simplest rule: choose Zapier for speed and ease. Choose n8n for
            control and complexity.
          </p>
        </div>

        <ArticleCta tool="Zapier" href={toolLinks.zapier} placement="top" />

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
              <span className="font-medium">Best for business teams:</span>{" "}
              Zapier
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for technical teams:</span>{" "}
              n8n
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Zapier?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Zapier is a cloud automation platform for connecting apps,
              building Zaps, routing data, triggering actions, and creating
              business workflows without traditional software development.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              In 2026, Zapier is increasingly positioning itself as an AI
              orchestration platform, combining Zaps, Tables, Forms, MCP, app
              actions, and AI-assisted workflow creation in one managed system.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is n8n?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              n8n is a workflow automation platform for building flexible,
              technical automations across apps, APIs, databases, webhooks, code
              steps, AI tools, and custom infrastructure.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It can be used in n8n Cloud or self-hosted. That makes it
              attractive for teams that want more control over data, execution,
              workflow structure, custom nodes, and production behavior.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Zapier Wins</h2>
          <div className="mt-5 grid gap-4">
            {zapierWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Zapier</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where n8n Wins</h2>
          <div className="mt-5 grid gap-4">
            {n8nWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: n8n</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Zapier vs n8n for Integrations
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Zapier has the advantage for pre-built app coverage. If your
            workflow connects common tools like Slack, Gmail, HubSpot,
            Salesforce, Airtable, Google Sheets, Typeform, Shopify, or Notion,
            Zapier is often easier to configure and easier for business users to
            maintain.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            n8n has fewer polished pre-built app experiences, but it gives
            technical users more escape hatches. HTTP Request, GraphQL,
            credential-only nodes, custom nodes, code, and community nodes make
            it better when the integration is unusual or the API work is
            custom.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Zapier vs n8n for AI Workflows
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Zapier is stronger when AI needs to take actions across everyday
            business apps. Its AI workspace, agents, MCP direction, Tables, and
            Forms make sense for companies that want AI connected to the SaaS
            tools employees already use.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            n8n is stronger when the AI workflow is technical: call a model,
            transform data, branch based on model output, hit internal APIs,
            store intermediate state, run custom code, trigger approvals, and
            keep the workflow auditable.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Zapier vs n8n for Pricing
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Zapier pricing is tied to task usage. This is easy to understand
            for simple automations, but complex multi-step workflows can consume
            tasks quickly as volume grows.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            n8n Cloud pricing is based around workflow executions rather than
            every individual step. Self-hosted n8n can be even more attractive
            for high-volume technical teams, though it introduces infrastructure
            and maintenance costs.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            In both cases, check current pricing before choosing. The important
            question is not which tool is cheaper on the homepage. It is which
            pricing model matches the number, complexity, and ownership of your
            workflows.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Zapier vs n8n for Teams
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Zapier is easier to roll out across business teams because the
            mental model is simple: trigger, action, app connection, task. That
            makes it a good fit for operations teams that need to automate
            common processes without waiting on engineering.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            n8n works better when automation is treated like a technical system.
            The team should be comfortable with API documentation, data shapes,
            credentials, environment management, workflow testing, error
            handling, and maintenance.
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

        <ArticleCta tool="Zapier" href={toolLinks.zapier} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Zapier is the better automation tool for teams that value speed,
            ease of use, pre-built app coverage, managed infrastructure, and
            business-user ownership.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            n8n is the better automation tool for technical teams that want
            self-hosting, workflow control, custom APIs, code, complex logic,
            error handling, and more predictable economics for complex
            workflows.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Zapier Rating:</span> 8.8/10. Best
              for fast business automation and broad app coverage.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">n8n Rating:</span> 9/10. Best for
              technical automation, self-hosting, and complex workflows.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Zapier if automation should be easy for business teams.
            Choose n8n if automation should be flexible, technical, and under
            your control.
          </p>
        </section>

        <ArticleCta tool="Zapier" href={toolLinks.zapier} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
