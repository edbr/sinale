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
  "Existing AutoGen users maintaining multi-agent applications",
  "Researchers studying conversational multi-agent patterns",
  "Python developers prototyping agents with AgentChat",
  "Teams experimenting with AutoGen Studio before building custom apps",
  "Builders comparing older AutoGen designs with Microsoft Agent Framework",
]

const notFor = [
  "New enterprise projects that need long-term Microsoft framework support",
  "Non-technical teams looking for a polished no-code automation product",
  "Simple automations where one model call and normal code are enough",
  "Production apps that need a hosted agent platform out of the box",
  "Teams that do not want to manage model APIs, runtimes, tools, and security",
]

const features = [
  {
    title: "AgentChat",
    body: "AgentChat is AutoGen's higher-level API for conversational single-agent and multi-agent applications. It includes agents, teams, group chat patterns, memory, logging, and common coordination defaults.",
  },
  {
    title: "AutoGen Core",
    body: "Core is the lower-level event-driven layer for scalable multi-agent systems. It gives advanced users more control over message passing, runtimes, distributed agents, and custom orchestration.",
  },
  {
    title: "AutoGen Studio",
    body: "AutoGen Studio is a web UI for prototyping agent teams and multi-agent workflows without writing much code. Microsoft describes it as a prototyping tool, not a production-ready app.",
  },
  {
    title: "Extensions",
    body: "AutoGen Extensions connect AgentChat and Core to external services, models, tools, MCP servers, code execution, OpenAI-compatible providers, and distributed runtime components.",
  },
  {
    title: "Multi-Agent Patterns",
    body: "AutoGen supports common multi-agent patterns such as two-agent chats, round-robin teams, selector group chats, swarms, Magentic-One, and graph-style workflows.",
  },
  {
    title: "Migration Path",
    body: "AutoGen is now in maintenance mode. Microsoft recommends Microsoft Agent Framework for new projects and provides migration guidance for existing AutoGen users.",
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

export function AutogenToolPage({ relatedItems }: { relatedItems: CardItem[] }) {
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
        <ToolLogo name="AutoGen" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          AutoGen
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          AutoGen is listed in Sinale&apos;s AI automation and agents directory
          for open-source multi-agent applications, AgentChat, Core, AutoGen
          Studio, extensions, and migration planning.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            AutoGen is Microsoft&apos;s open-source framework for building agentic
            AI applications, especially systems where multiple agents
            communicate, use tools, and collaborate on tasks. It helped
            popularize the modern multi-agent pattern.
          </p>
          <p>
            The most important update is that AutoGen is now in maintenance
            mode. Microsoft points new projects toward Microsoft Agent
            Framework, while AutoGen remains relevant for existing users,
            research projects, prototypes, and teams that need to understand or
            migrate older AutoGen applications.
          </p>
          <p>
            That makes AutoGen different from tools like CrewAI, Gumloop,
            Relay.app, or Relevance AI. It is not the obvious default for a new
            production deployment in 2026, but it is still an important
            framework to understand if you are evaluating the evolution of
            multi-agent software.
          </p>
        </div>

        <ArticleCta tool="AutoGen" href={toolLinks.autogen} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            AutoGen is best viewed as an influential open-source multi-agent
            framework that is useful for existing projects, learning,
            experimentation, and migration work. Its layered design still makes
            sense: AgentChat for quicker agent prototypes, Core for lower-level
            event-driven systems, and Studio for visual prototyping.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose AutoGen if you already depend on it or want to study its
            multi-agent patterns. For a new enterprise-grade Microsoft-aligned
            agent project, start by comparing Microsoft Agent Framework before
            committing to AutoGen.
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
          <h2 className="text-2xl font-semibold">What AutoGen Does</h2>
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
          <h2 className="text-2xl font-semibold">AutoGen for Prototyping</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            AutoGen is still useful for prototyping multi-agent conversations.
            AgentChat gives Python developers a quicker way to create agents,
            connect models and tools, stream output, test team patterns, and
            explore whether multiple agents improve a workflow.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            AutoGen Studio can help visualize and demo those patterns, but it
            should not be mistaken for a complete production app. Authentication,
            permissions, deployment, monitoring, and security still need to be
            designed by the team building the real system.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">AutoGen for Production</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            AutoGen Core is the more serious layer for custom systems. It uses
            an event-driven programming model and runtime abstractions for
            message passing, distributed agents, and lower-level control.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            That flexibility comes with complexity. Production teams need to
            manage model clients, tool execution, observability, retries, human
            intervention, security boundaries, and migration risk. If you are
            starting fresh, Microsoft Agent Framework may be the cleaner path.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            AutoGen vs Microsoft Agent Framework
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            AutoGen and Semantic Kernel influenced Microsoft Agent Framework,
            which Microsoft now positions as the enterprise-ready successor for
            new agent work. That does not make AutoGen useless, but it changes
            the buying and architecture decision.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Existing AutoGen teams should evaluate migration deliberately:
            identify which APIs they use, map AgentChat teams or Core agents to
            the newer framework, and avoid rewriting working systems without a
            clear support or capability reason.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            AutoGen itself is open source, so there is no normal SaaS plan to
            compare. The real cost comes from model APIs, infrastructure,
            development time, observability, security work, and maintenance.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            For prototypes, that can be inexpensive. For production multi-agent
            systems, model calls can multiply quickly because several agents may
            reason, call tools, retry, and exchange messages before producing a
            final answer.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Use AutoGen when you are maintaining an existing AutoGen system,
            learning multi-agent orchestration, or prototyping patterns that
            will later move into a newer framework or custom runtime.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            For new production projects, treat AutoGen as historical context and
            a migration consideration, not the default starting point. Compare
            Microsoft Agent Framework, CrewAI, LangGraph, and no-code agent
            platforms based on your team&apos;s need for support, control,
            deployment, and governance.
          </p>
        </section>

        <ArticleCta tool="AutoGen" href={toolLinks.autogen} placement="bottom" />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
