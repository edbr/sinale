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
  "GTM teams building AI agents for sales, marketing, and customer success",
  "Operations teams that want no-code agents connected to business tools",
  "Companies moving from one-off AI prompts to managed agent workflows",
  "Teams that need human review, escalations, monitoring, and evaluations",
  "Leaders who want to track agent activity, cost, quality, and business impact",
]

const notFor = [
  "Simple app-to-app automations that do not need agent behavior",
  "Tiny teams that only need a personal AI assistant",
  "Engineering teams that prefer code-first agent frameworks",
  "Teams without clear process owners or quality standards",
  "Organizations that are not ready to monitor usage, permissions, and outcomes",
]

const features = [
  {
    title: "AI Workforce Builder",
    body: "Relevance AI is built around the idea of an AI workforce: agents with roles, tools, knowledge, goals, and owners. That framing works well for GTM and operations teams that want to delegate repeatable work to managed agents.",
  },
  {
    title: "Invent and No-Code Building",
    body: "Teams can describe the workforce or agent they want in plain language, then refine it in a no-code builder. Domain experts can shape playbooks without waiting for engineering to build every workflow from scratch.",
  },
  {
    title: "Tools and Integrations",
    body: "Agents can use tools, call APIs, browse sources, work with knowledge, and connect to business systems such as CRMs, email, Slack, and sales platforms. Relevance AI positions this as agent execution across real work systems.",
  },
  {
    title: "Human-in-the-Loop Escalation",
    body: "Agents can escalate when confidence is low or an action needs approval. This matters for customer-facing workflows where fully autonomous decisions may be risky.",
  },
  {
    title: "Evals and Monitoring",
    body: "Relevance AI emphasizes evaluations, task history, activity visibility, dashboards, and cost monitoring so teams can judge whether agents are producing reliable work rather than only running more tasks.",
  },
  {
    title: "Enterprise Governance",
    body: "For larger deployments, Relevance AI highlights RBAC, audit logs, version history, SSO/SAML, data residency, PII masking, and observability options for teams that need control around autonomous agents.",
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

export function RelevanceAiToolPage({
  relatedItems,
}: {
  relatedItems: CardItem[]
}) {
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
        <ToolLogo name="Relevance AI" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          Relevance AI
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Relevance AI is listed in Sinale&apos;s AI automation and agents
          directory for AI workforce building, no-code agents, GTM automation,
          evaluations, integrations, and enterprise governance.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Relevance AI is a platform for building and managing AI agents that
            perform business work across tools. Instead of treating automation
            as a simple trigger-and-action chain, it frames agents as a managed
            workforce with roles, skills, owners, quality checks, and
            escalation paths.
          </p>
          <p>
            The strongest use case is go-to-market and operations work:
            researching leads, qualifying accounts, drafting outreach, updating
            CRM data, preparing meetings, handling support workflows, and
            coordinating repetitive processes that still need business context.
          </p>
          <p>
            The tradeoff is operational discipline. Relevance AI is most useful
            when a team knows the playbook, can define what good output looks
            like, and is willing to monitor tasks, cost, evaluations, and
            handoffs as the agents become more autonomous.
          </p>
        </div>

        <ArticleCta
          tool="Relevance AI"
          href={toolLinks.relevanceAi}
          placement="top"
        />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Relevance AI is a strong fit for teams that want to operationalize
            AI agents, especially in sales, marketing, customer success, and
            internal operations. It is more serious than a prompt assistant and
            more agent-focused than a basic workflow builder.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Relevance AI if you want domain experts to design agent
            playbooks and managers to track quality, cost, and activity. Skip it
            if you only need a few simple automations or if your team is not
            ready to define permissions, evaluations, and escalation rules.
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
          <h2 className="text-2xl font-semibold">What Relevance AI Does</h2>
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
            Relevance AI for GTM Teams
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Relevance AI is especially oriented around GTM workflows. A sales or
            marketing team can build agents that research companies, enrich
            prospects, score fit, draft outreach, prepare meeting context,
            update CRM fields, and escalate uncertain cases to a human.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            That makes it useful when the work is repeated often but still
            depends on context. The goal is not just to send more messages or
            run more enrichment. The goal is to encode a stronger playbook and
            make it run consistently.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Relevance AI for Agent Management
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            The agent-management layer is the reason to consider Relevance AI
            over a lighter automation tool. Teams can think in terms of agents,
            workforces, tasks, evals, activity, cost, escalation, and ownership
            instead of only isolated workflows.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            This matters as usage grows. Once agents touch customers, CRM data,
            support queues, or revenue workflows, teams need to know what ran,
            why it ran, who owns it, how much it cost, and whether the output
            met the quality bar.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Relevance AI for Enterprise Rollouts
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Enterprise teams should care about governance before autonomy.
            Relevance AI emphasizes role-based access controls, auditability,
            version history, data residency, SSO/SAML, PII masking, and
            monitoring dashboards because agent behavior needs a management
            system around it.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The best rollout pattern is narrow and measured: choose one
            high-value workflow, define the human owner, set evaluation criteria,
            test on real tasks, and expand only after the agent is reliably
            saving time or improving output quality.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Relevance AI pricing is built around actions and vendor credits. The
            free plan includes 200 actions per month and bonus vendor credits.
            Pro starts at $19 per month when billed annually, with 30,000
            actions per year and annual vendor credits. Team starts at $234 per
            month when billed annually, with 84,000 actions per year, more
            build users, end users, shared projects, analytics, and support.
            Enterprise is custom.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            An action is a unit of work an agent performs, while vendor credits
            cover AI model costs. Before scaling, estimate how many tasks your
            agents will run, how many tools each task calls, which models they
            use, and where human review may slow or improve throughput.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Relevance AI if your team wants to build a managed AI
            workforce for recurring business processes, especially around GTM
            and operations. It is strongest when agents have clear jobs,
            measurable outputs, connected tools, and owners who can evaluate
            their work.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Do not start with a vague mandate to make the company more
            autonomous. Start with one playbook, one agent, one owner, and a
            clear before-and-after metric. Relevance AI becomes valuable when
            agent work is managed like an operating system, not treated like a
            magic prompt box.
          </p>
        </section>

        <ArticleCta
          tool="Relevance AI"
          href={toolLinks.relevanceAi}
          placement="bottom"
        />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
