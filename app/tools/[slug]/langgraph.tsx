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
  "Developers building long-running, stateful AI agents",
  "Teams that need explicit graph control, branching, loops, and persistence",
  "Production agents that require human-in-the-loop checkpoints",
  "Applications where debugging, traces, time travel, and evals matter",
  "Engineering teams already using LangChain or LangSmith",
]

const notFor = [
  "Simple chatbots or one-step tool-calling agents",
  "Non-technical teams looking for a no-code automation builder",
  "Teams that want the framework to hide orchestration decisions",
  "Short-lived prototypes where graph structure adds overhead",
  "Projects without engineering capacity for testing, tracing, and deployment",
]

const features = [
  {
    title: "Graph-Based Orchestration",
    body: "LangGraph lets developers model an agent as a graph of nodes, edges, state, and control flow. That is useful when a workflow needs loops, branches, retries, subgraphs, or explicit transitions.",
  },
  {
    title: "Durable Execution",
    body: "LangGraph focuses on long-running, stateful agents that can persist through failures and resume from where they left off instead of losing context mid-task.",
  },
  {
    title: "Human-in-the-Loop",
    body: "LangGraph supports interrupts so humans can inspect, modify, approve, or redirect agent state before execution continues. That matters when agents touch customers, money, records, or external systems.",
  },
  {
    title: "Memory and Persistence",
    body: "LangGraph supports short-term working memory for an active thread and longer-term memory across sessions, making it better suited to stateful applications than a plain request-response model.",
  },
  {
    title: "Streaming and Time Travel",
    body: "LangGraph supports streaming intermediate steps and time-travel debugging, so teams can inspect how state changed, replay from prior checkpoints, and understand why an agent behaved a certain way.",
  },
  {
    title: "LangSmith Integration",
    body: "LangGraph can run standalone, but it pairs naturally with LangSmith for tracing, evaluation, monitoring, Studio, deployment, and production infrastructure for long-running agents.",
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

export function LanggraphToolPage({
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
        <ToolLogo name="LangGraph" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          LangGraph
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          LangGraph is listed in Sinale&apos;s AI automation and agents directory
          for stateful agent orchestration, graph workflows, durable execution,
          human-in-the-loop control, memory, streaming, and LangSmith deployment.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            LangGraph is a low-level orchestration framework from LangChain for
            building long-running, stateful AI agents. It is not trying to be a
            friendly no-code automation builder. It is for developers who want
            explicit control over how an agent moves through a workflow.
          </p>
          <p>
            The core idea is simple but powerful: model the agent as a graph.
            Nodes do work, edges define what can happen next, and state moves
            through the system. That makes LangGraph a strong fit when an agent
            needs branching, cycles, checkpoints, human approvals, and reliable
            recovery.
          </p>
          <p>
            The tradeoff is complexity. If your workflow is a basic tool-calling
            loop, LangChain agents or a custom function may be enough. LangGraph
            earns its keep when the workflow is genuinely stateful and the cost
            of losing, hiding, or misrouting state is high.
          </p>
        </div>

        <ArticleCta tool="LangGraph" href={toolLinks.langgraph} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            LangGraph is one of the strongest choices for production agent
            orchestration when you need durable state, human-in-the-loop
            checkpoints, streaming, memory, and explicit graph logic. It is
            especially valuable for agents that run across multiple steps,
            sessions, tools, or approval boundaries.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose LangGraph if your agent is closer to a stateful application
            than a chatbot. Skip it if you only need a simple assistant, a
            one-shot automation, or a no-code workflow that business users can
            maintain without engineering support.
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
          <h2 className="text-2xl font-semibold">What LangGraph Does</h2>
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
            LangGraph for Agent Workflows
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            LangGraph is best when the agent workflow has structure. For
            example, an agent might research a customer, decide whether it has
            enough context, call tools, ask a human for approval, revise its
            plan, write to a CRM, and then schedule a follow-up.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            A plain agent loop can hide those transitions inside model behavior.
            LangGraph makes the flow explicit, which helps engineers reason
            about allowed paths, state changes, retries, and where humans should
            intervene.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">LangGraph for Production</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Production agents need more than prompt quality. They need
            persistence, logs, traceability, restart behavior, state inspection,
            evals, and deployment infrastructure. LangGraph covers the
            orchestration layer, while LangSmith adds tracing, evaluation,
            monitoring, Studio, and deployment services.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            This pairing is especially useful when an agent serves real users or
            touches real systems. You can prototype locally with LangGraph, then
            add LangSmith observability and deployment when reliability and team
            operations start to matter.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            LangGraph vs LangChain Agents
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            LangChain agents are higher-level abstractions for common model and
            tool-calling loops. LangGraph is lower level: it gives you the
            runtime and graph primitives underneath stateful agent systems.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Use LangChain agents when you want to move quickly with a common
            architecture. Use LangGraph when the workflow needs custom control,
            persistence, human checkpoints, or multiple paths that should be
            visible in the application design.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            LangGraph itself is open source. The direct framework cost is $0,
            but you still pay for model calls, infrastructure, databases,
            observability, engineering time, and any hosted deployment services
            you use.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            LangSmith has a free Developer plan, while Plus is listed at $39 per
            seat per month plus usage. Plus includes tracing, evals, monitoring,
            one dev-sized agent deployment, Fleet agents, Engine access, and
            sandbox access. Enterprise pricing is custom for advanced hosting,
            security, support, and workspace needs.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose LangGraph when your agent is important enough to need
            explicit state, checkpoints, approvals, memory, observability, and
            testable workflow paths. It is a serious engineering tool for
            serious agent applications.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Do not reach for LangGraph just because agents sound complex. Start
            with the simplest architecture that works, then move to LangGraph
            when state, branching, durability, and human-in-the-loop control
            become real requirements.
          </p>
        </section>

        <ArticleCta
          tool="LangGraph"
          href={toolLinks.langgraph}
          placement="bottom"
        />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
