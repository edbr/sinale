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
  "Operations teams turning repeated judgment calls into AI workflows",
  "Sales and marketing teams automating research, enrichment, and follow-up",
  "Support teams building triage, routing, and ticket analysis agents",
  "Companies that want non-engineers to build automations with guardrails",
  "Teams connecting AI agents to tools like Slack, Gmail, Salesforce, and Notion",
]

const notFor = [
  "Simple two-step automations where Zapier or Make is already enough",
  "Teams that need fully predictable flat-rate automation costs",
  "Workflows that cannot tolerate probabilistic AI decisions",
  "Companies without clear data access rules or owner review",
  "Builders who want open-source, self-hosted automation from day one",
]

const features = [
  {
    title: "Visual AI Workflows",
    body: "Gumloop gives teams a node-based workflow builder for chaining data, apps, AI calls, logic, loops, and outputs. It is best when the automation needs more judgment than a normal rules-based integration.",
  },
  {
    title: "AI Agents",
    body: "Agents can use selected tools and workflows to handle open-ended tasks. That makes Gumloop useful for work like meeting prep, CRM updates, support triage, research, and data analysis.",
  },
  {
    title: "Gummie Builder Assistant",
    body: "Gummie helps users create and debug automations through natural language. This lowers the barrier for operators, marketers, and support leads who understand the process but do not want to write code.",
  },
  {
    title: "MCP and App Integrations",
    body: "Gumloop connects agents to business systems through hosted MCP integrations and app connections, so agents can read, search, update, and trigger work across the tools a team already uses.",
  },
  {
    title: "Triggers and Interfaces",
    body: "Workflows and agents can run from schedules, events, webhooks, chat, email, and lightweight interfaces. That makes Gumloop useful for both background automation and human-in-the-loop tools.",
  },
  {
    title: "Governance and Gumstack",
    body: "For larger teams, Gumloop emphasizes access control, audit logs, usage monitoring, model restrictions, app policies, and Gumstack for tracking AI activity and tool calls across the organization.",
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

export function GumloopToolPage({ relatedItems }: { relatedItems: CardItem[] }) {
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
        <ToolLogo name="Gumloop" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
          Gumloop
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Gumloop is listed in Sinale&apos;s AI automation and agents directory
          for visual workflows, AI agents, MCP integrations, operations
          automation, and team governance.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Gumloop is an AI-native automation platform for building workflows
            and agents without writing code. It sits somewhere between Zapier,
            Make, an agent builder, and an internal automation layer for teams
            that want AI to reason across business tools.
          </p>
          <p>
            The strongest reason to consider Gumloop is that it treats AI as a
            core part of the workflow, not a single optional step. You can build
            flows that gather context, classify messy inputs, call models,
            decide what to do next, update systems, and loop in humans when the
            task needs review.
          </p>
          <p>
            The tradeoff is complexity and usage cost. Gumloop is powerful, but
            teams should design automations carefully, limit agent permissions,
            monitor credits, and avoid turning unclear business processes into
            expensive AI pipelines.
          </p>
        </div>

        <ArticleCta tool="Gumloop" href={toolLinks.gumloop} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gumloop is one of the more compelling AI automation tools for teams
            that need workflows with reasoning, tool use, and business context.
            It is especially useful for operations, GTM, support, recruiting,
            data analysis, and internal agent projects where a normal
            integration chain is too rigid.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Gumloop if you want non-engineers to build useful AI
            automations with enough structure for a real team. Skip it if your
            needs are simple, your cost ceiling is tight, or you are not ready
            to define permissions, review points, and failure handling.
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
          <h2 className="text-2xl font-semibold">What Gumloop Does</h2>
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
            Gumloop for Workflow Automation
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gumloop makes the most sense when the workflow has multiple steps,
            messy inputs, and judgment in the middle. Examples include
            qualifying inbound leads, summarizing calls, creating CRM updates,
            refreshing SEO content, preparing meeting briefs, and routing
            support tickets.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            For simple app-to-app automations, a lighter tool may be faster.
            Gumloop becomes more interesting when the process needs AI to read,
            classify, compare, enrich, decide, or create a draft before a human
            approves the result.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Gumloop for AI Agents</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gumloop agents are useful when a workflow cannot be fully scripted.
            An agent can receive a goal, choose from approved tools, call
            workflows, inspect results, and continue the task through chat,
            Slack, email, schedules, or event-based triggers.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The best agent design is narrow. Give the agent a clear job,
            descriptive tools, limited permissions, test cases, and explicit
            handoff points. A support triage agent is safer than a vague
            agent that can touch every support, billing, and CRM system.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Gumloop for Teams</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gumloop is pushing beyond solo automation into team and enterprise
            use. Unlimited seats on Pro, teams, usage analytics, app policies,
            MCP hosting, audit logs, role-based access control, SSO, model
            restrictions, and VPC options make it relevant for companies that
            want automation to spread beyond one power user.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            That team focus matters because AI automation creates new failure
            modes. A useful rollout should include workspace owners, approved
            data sources, shared credentials, review rules, spend alerts, and a
            habit of checking run logs when something behaves strangely.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Gumloop uses credits. The free plan currently includes 5,000 credits
            per month, while Pro starts at $37 per month with 20,000 or more
            credits, unlimited seats, higher concurrency, team features, and
            limited MCP hosting and proxying. Enterprise pricing is custom.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Credits are the part to watch. Many native workflow nodes are free,
            but AI calls, enrichment, custom code, agent reasoning, loops, and
            tool-heavy tasks can add up. Before scaling a workflow, run a few
            representative examples and estimate monthly volume.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Gumloop if your team has real automation demand and wants AI
            agents connected to everyday business systems. It is a strong fit
            for repeatable operations work where humans know the process, but
            need AI to handle research, classification, drafting, enrichment,
            and coordination.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Do not start by automating everything. Pick one high-friction
            workflow, define the inputs and outputs, add human review where the
            decision matters, and monitor credits closely. Gumloop rewards teams
            that design small, reliable automations before expanding into
            broader agent systems.
          </p>
        </section>

        <ArticleCta tool="Gumloop" href={toolLinks.gumloop} placement="bottom" />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
