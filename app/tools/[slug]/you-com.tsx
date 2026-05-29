import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { RelatedContent } from "@/components/article/related-content"
import { ToolLogo } from "@/components/site/tool-logo"
import { Button } from "@/components/ui/button"
import type { CardItem } from "@/lib/site-content"
import { toolLinks } from "@/lib/tool-links"

const bestFor = [
  "Teams building research workflows that need live web grounding and citations",
  "Enterprise users who want AI search, private data, and custom agents in one platform",
  "Consulting, strategy, market intelligence, and analyst teams producing research briefs",
  "Developers who need search APIs or agent APIs for RAG and agentic applications",
  "Organizations that want to combine public web intelligence with internal data sources",
]

const notFor = [
  "Individuals who only need a simple consumer search answer engine",
  "Teams that do not need custom agents, APIs, or enterprise search infrastructure",
  "Workflows where manually curated sources are more important than broad live search",
  "Users who want a dedicated writing canvas rather than a search-first assistant",
  "Organizations that are not ready to define data access, governance, and review rules",
]

const features = [
  {
    title: "AI search",
    body: "You.com combines live web search with AI-generated answers, citations, and model choice. It is useful when a workflow needs current information rather than static model knowledge.",
  },
  {
    title: "ARI research agent",
    body: "ARI, or Advanced Research & Insights, is You.com's deep research agent for business. You.com says it can analyze up to 400 sources and produce professional-grade research in minutes.",
  },
  {
    title: "Agents",
    body: "You.com Agents combine web search, reasoning, and specialized tools. Express agents are built for speed, Advanced agents for deeper research, and Custom agents for domain-specific workflows.",
  },
  {
    title: "Search APIs",
    body: "You.com offers search infrastructure for LLMs and agents, including real-time search results, cited answers, vertical indexes, and custom indexes for enterprise applications.",
  },
  {
    title: "Enterprise data grounding",
    body: "The enterprise stack is positioned around combining internal data with real-time web intelligence so agents can answer with both company context and current external information.",
  },
  {
    title: "Model access",
    body: "You.com plans advertise access to models from major providers, including OpenAI, Anthropic, and Google, so users can choose models for different research and reasoning tasks.",
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

export function YouComToolPage({ relatedItems }: { relatedItems: CardItem[] }) {
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
        <ToolLogo name="You.com" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
          You.com
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          You.com is an AI search and agent platform for live web answers,
          deep research, enterprise search infrastructure, custom agents, and
          cited AI workflows.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            You.com started as an AI search experience and has moved deeper into
            enterprise AI infrastructure. The core idea is simple: give AI
            agents access to current, grounded information instead of relying
            only on model memory.
          </p>
          <p>
            For individual users, You.com is useful as a search-first AI
            assistant with model choice and live web grounding. For teams, the
            more interesting story is ARI, custom agents, search APIs, vertical
            indexes, and workflows that combine internal company data with
            external web intelligence.
          </p>
          <p>
            The tradeoff is that You.com is more infrastructure-like than some
            consumer AI tools. It is strongest when you know the research or
            agent workflow you want to build and can define the sources, data
            access, and review process around it.
          </p>
        </div>

        <ArticleCta tool="You.com" href={toolLinks.you} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            You.com is worth considering when your team needs AI search that can
            become part of a product, research system, or enterprise workflow.
            It is especially relevant for teams building agents that need
            current web data, citations, vertical search, or private company
            context.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose You.com if you care about AI search infrastructure,
            professional-grade research, and custom agents. Skip it if you only
            need a simple chat assistant or a lightweight personal search tool.
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
          <h2 className="text-2xl font-semibold">What You.com Does</h2>
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
          <h2 className="text-2xl font-semibold">You.com for Research Teams</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Research-heavy teams can use You.com to move from broad search to
            structured synthesis. ARI is positioned as an on-demand research
            consultant that can search widely, synthesize findings, and produce
            professional-grade outputs faster than manual research alone.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The best workflow still includes review. Use You.com to gather and
            synthesize sources, then inspect citations, check assumptions, and
            separate confirmed evidence from model interpretation.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">You.com for Developers</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            You.com&apos;s developer story is built around search APIs and
            agents. The Search API is designed to give LLM and agentic systems
            real-time web data, while agent APIs can synthesize, cite, and
            structure answers rather than returning only raw search results.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            This is useful for RAG systems, sales intelligence, competitive
            monitoring, customer support, research products, and internal tools
            where stale model knowledge is not enough.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            You.com lists free individual accounts, Pro at $15 per month when
            billed annually, Max at $175 per month when billed annually, and
            Enterprise with sales-led pricing. Public plan pages advertise
            real-time answers, access to models from major AI providers, and
            higher tiers for more complex research and agent work.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            You.com&apos;s enterprise messaging focuses on custom agents,
            internal data grounding, real-time web intelligence, embedded AI
            workflows, and scalable AI search infrastructure. API pricing and
            enterprise terms should be checked directly before budgeting a
            production deployment.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose You.com if your research or AI product depends on current,
            citation-backed search and you want a path from consumer-style AI
            answers to enterprise agents and APIs. It is especially compelling
            when web intelligence needs to become part of a repeatable workflow.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Treat it as an AI search and agent infrastructure layer, not just a
            chatbot. The more clearly you define sources, workflows, permissions,
            and review standards, the more useful You.com becomes.
          </p>
        </section>

        <ArticleCta tool="You.com" href={toolLinks.you} placement="bottom" />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
