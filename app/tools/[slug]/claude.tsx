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
  "Product managers, founders, analysts, and operators who need careful reasoning over messy information",
  "Writers and editors who want help turning notes, research, and drafts into polished work",
  "Teams that work with long documents, transcripts, customer feedback, specs, and strategy docs",
  "Builders who want artifacts for documents, diagrams, small apps, prototypes, and reusable outputs",
  "Users who benefit from connected context across tools like Google Drive, Gmail, Notion, Linear, Slack, and local desktop files",
]

const notFor = [
  "People who only need quick web answers and source discovery",
  "Teams that want a deeply integrated coding editor instead of a general AI assistant",
  "Workflows that require fully deterministic output without human review",
  "Organizations that cannot connect sensitive workspace data to a third-party AI service",
  "Users who need API usage included in a Claude chat subscription",
]

const features = [
  {
    title: "Long-context reasoning",
    body: "Claude is strongest when you give it real context: meeting notes, product specs, transcripts, research, strategy docs, and competing constraints. It is useful for synthesis, tradeoff analysis, critique, and clear writing.",
  },
  {
    title: "Artifacts",
    body: "Artifacts let Claude create substantial standalone outputs in a separate workspace: documents, code snippets, diagrams, SVGs, small websites, dashboards, and interactive React-style components that you can iterate on.",
  },
  {
    title: "Projects and knowledge bases",
    body: "Claude's paid chat plans support projects and knowledge bases, which help keep context, instructions, and source material organized around a team, workflow, client, or product area.",
  },
  {
    title: "Web search",
    body: "Claude can search the web when enabled, bringing current information into a conversation with citations so the answer can be checked against sources.",
  },
  {
    title: "Connectors",
    body: "Claude connectors bring in work context from connected apps and MCP-enabled tools so the assistant can answer with more relevant information and, where supported, take action in those systems.",
  },
  {
    title: "Claude Code",
    body: "Claude Code is Anthropic's terminal-based coding agent. It is related to Claude but has a different product surface and is currently positioned around individual paid plans rather than Team plan access.",
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

export function ClaudeToolPage({ relatedItems }: { relatedItems: CardItem[] }) {
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
        <ToolLogo name="Claude" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
          Claude
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Claude is Anthropic&apos;s AI assistant for reasoning, writing,
          research synthesis, coding help, document analysis, artifacts, and
          connected knowledge work.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Claude is best understood as a high-context thinking partner. It is
            useful when the work involves ambiguity: turning customer interviews
            into themes, pressure-testing a roadmap, editing a messy draft,
            comparing options, summarizing long documents, or building a small
            artifact from a plain-language request.
          </p>
          <p>
            The product has expanded beyond chat. Claude can create artifacts,
            use web search, work inside projects, reference knowledge bases,
            and connect to external tools. That makes it more useful for real
            workflows where the assistant needs the context around the work,
            not just the prompt in front of it.
          </p>
          <p>
            The tradeoff is that Claude still needs direction. It performs best
            when you provide source material, name the decision you are trying
            to make, ask it to preserve evidence, and keep a human review step
            in the loop.
          </p>
        </div>

        <ArticleCta tool="Claude" href={toolLinks.claude} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude is one of the strongest general-purpose AI tools for teams
            that do knowledge work. It is especially good at synthesis,
            critique, writing, structured analysis, and working across long
            context without flattening the nuance too quickly.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Claude if you want a thoughtful assistant for product,
            research, strategy, content, analysis, and complex documents. Skip
            it if your primary need is a search engine, a visual design tool,
            or an AI-native coding editor.
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
          <h2 className="text-2xl font-semibold">What Claude Does</h2>
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
          <h2 className="text-2xl font-semibold">Claude for Product Work</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude is particularly useful for product teams because it handles
            messy context well. You can give it interview notes, roadmap items,
            support tickets, analytics summaries, competitor notes, and open
            questions, then ask for themes, risks, assumptions, and next-step
            recommendations.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The best product workflows keep evidence visible. Ask Claude to
            separate quotes from interpretation, name confidence levels, list
            contradictions, and explain what would change its recommendation.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Claude for Writing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude is strong for editing and rewriting when you give it a clear
            audience, voice, and purpose. It can turn rough notes into a memo,
            rewrite a draft for clarity, critique a positioning doc, generate
            outlines, and help preserve a consistent tone.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            It is less useful when asked to invent authority from nothing. The
            better workflow is to bring real research, examples, constraints,
            and source material, then use Claude to structure and sharpen the
            thinking.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude has free access and paid individual plans. Pro is designed
            for higher usage than the free service and includes access to the
            model selector, projects, and knowledge bases. Max is offered in
            higher-usage tiers for people who need substantially more capacity.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Team and Enterprise are separate work plans with admin controls,
            shared collaboration features, and higher usage. Anthropic&apos;s
            Team plan documentation notes that Claude Code is not included in
            Team and is currently available on individual paid plans.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude chat subscriptions do not include Anthropic API usage. If
            you want to build with the Anthropic API, budget for Console usage
            separately from the Claude chat product.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Claude if your work depends on thinking through complex
            material, writing clearly, synthesizing research, and turning
            unstructured context into useful decisions. It is strongest when it
            becomes part of a workflow with real inputs, explicit constraints,
            and human judgment.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Treat Claude as a collaborator for reasoning and drafting, not a
            source of automatic truth. The teams that get the most from it will
            use projects, knowledge bases, artifacts, connectors, and careful
            review to keep the work grounded.
          </p>
        </section>

        <ArticleCta tool="Claude" href={toolLinks.claude} placement="bottom" />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
