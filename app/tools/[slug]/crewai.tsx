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
  "Developers building Python-based multi-agent systems",
  "Teams that want open-source agent orchestration with commercial deployment options",
  "Builders who need agents with roles, tasks, tools, memory, and collaboration",
  "Product teams turning research, analysis, support, or ops work into agent workflows",
  "Enterprises that want private infrastructure, training, and managed agent deployment",
]

const notFor = [
  "Non-technical teams that need a mostly no-code automation builder",
  "Simple one-step automations that do not need multiple agents",
  "Teams that want predictable costs without managing model/API usage",
  "Workflows where deterministic software would be simpler and safer",
  "Builders who do not want to test, trace, monitor, and maintain agent behavior",
]

const features = [
  {
    title: "Crews",
    body: "CrewAI lets developers define teams of agents with roles, goals, tools, knowledge, memory, and task assignments. A crew is best for work that benefits from multiple specialized agents collaborating.",
  },
  {
    title: "Flows",
    body: "Flows provide structured control around agent work. They handle state, branching, events, and execution logic, which makes them the safer foundation for production applications.",
  },
  {
    title: "Tasks and Processes",
    body: "You define tasks with expected outputs, assign them to agents, and choose how the work moves through the crew. CrewAI supports sequential and more collaborative patterns depending on the workflow.",
  },
  {
    title: "Tools, MCP, and Integrations",
    body: "Agents can use tools for search, browsing, files, databases, code execution, APIs, MCP servers, and other systems. This is where CrewAI moves from chat responses into action-oriented workflows.",
  },
  {
    title: "Memory, Knowledge, and Reasoning",
    body: "CrewAI includes support for memory, knowledge sources, planning, reasoning, and retrieval so agents can use context rather than starting from scratch on every task.",
  },
  {
    title: "Tracing and Enterprise Deployment",
    body: "CrewAI supports tracing and production architecture patterns, while the commercial platform adds a visual editor, GitHub integration, cloud executions, private infrastructure options, support, and training.",
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

export function CrewaiToolPage({ relatedItems }: { relatedItems: CardItem[] }) {
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
        <ToolLogo name="CrewAI" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
          CrewAI
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          CrewAI is listed in Sinale&apos;s AI automation and agents directory
          for open-source multi-agent orchestration, crews, flows, agent tools,
          memory, knowledge, tracing, and enterprise agent deployment.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            CrewAI is an open-source framework and commercial platform for
            building multi-agent AI systems. It is designed for developers who
            want to define agents, assign tasks, connect tools, and orchestrate
            collaborative agent workflows in Python.
          </p>
          <p>
            The important distinction is that CrewAI is not only a no-code
            automation product. The open-source framework gives builders code
            control, while CrewAI&apos;s hosted and enterprise products add visual
            editing, cloud execution, GitHub integration, private deployment,
            support, and training.
          </p>
          <p>
            The tradeoff is responsibility. Multi-agent systems can become
            expensive, slow, and difficult to debug if every problem is split
            across agents. CrewAI is best when the workflow truly benefits from
            specialized roles and you are willing to test, trace, and monitor
            the system like production software.
          </p>
        </div>

        <ArticleCta tool="CrewAI" href={toolLinks.crewai} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            CrewAI is one of the most approachable frameworks for building
            multi-agent systems. Its agent, task, crew, and flow abstractions
            are easier to reason about than starting from a blank orchestration
            layer, especially for research, analysis, content, support, and
            operational workflows.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose CrewAI if you want code-level control over agents and a path
            toward hosted or enterprise deployment. Skip it if your team needs a
            mostly no-code workflow tool, or if the task can be solved more
            reliably with one model call and deterministic application logic.
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
          <h2 className="text-2xl font-semibold">What CrewAI Does</h2>
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
            CrewAI for Multi-Agent Apps
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            CrewAI is useful when one task naturally decomposes into roles. For
            example, a researcher agent can gather material, an analyst can
            evaluate it, a writer can draft a report, and a reviewer can check
            the output before it is returned or passed into another system.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The pattern works best when each agent has a narrow job and a clear
            expected output. If every agent can do everything, the workflow
            becomes harder to test and the extra autonomy can create more noise
            than leverage.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">CrewAI for Production</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            CrewAI&apos;s docs recommend using Flows as the production backbone.
            A Flow controls state, events, branching, and persistence, then
            delegates complex work to a Crew when agent collaboration is useful.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            That framing is sensible. Production agent systems need more than
            clever prompts. They need inputs, outputs, retries, logs, tool
            boundaries, human review, cost controls, and a way to replay or
            debug failures.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">CrewAI vs No-Code Agents</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Compared with tools like Gumloop, Relay.app, and Relevance AI,
            CrewAI is more developer-centered. You use it when you want to own
            the architecture, write Python, choose your models and tools, and
            package agent behavior into an application or service.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            No-code tools can be faster for business teams that need approvals,
            app connectors, and shared automation immediately. CrewAI makes more
            sense when engineering control, open-source flexibility, and custom
            orchestration matter more than point-and-click setup.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            CrewAI&apos;s open-source framework is free to use, but you still pay
            for the model APIs, infrastructure, databases, observability, and
            engineering time behind your agents. The hosted Basic plan is free
            and includes a visual editor, AI copilot, GitHub integration, and 50
            workflow executions per month.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Enterprise pricing is custom and is aimed at organizations that want
            CrewAI or private infrastructure, on-site support and training, and
            development support. For real projects, budget around total
            operating cost, not only the platform fee.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose CrewAI if you are a developer or technical team building
            multi-agent workflows where roles, tools, memory, knowledge, and
            controlled orchestration genuinely matter. It is a strong fit for
            custom agent applications that need more structure than a single
            chatbot.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Do not start by creating a large crew. Start with one Flow and one
            narrow Crew, test it on real examples, measure model cost and
            latency, add tracing, and only introduce additional agents when they
            improve quality enough to justify the complexity.
          </p>
        </section>

        <ArticleCta tool="CrewAI" href={toolLinks.crewai} placement="bottom" />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
