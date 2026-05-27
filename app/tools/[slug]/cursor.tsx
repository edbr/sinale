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
  "Developers who want an AI-native editor for daily coding",
  "Teams that want agents, autocomplete, code review, CLI, and cloud workflows together",
  "Engineers working in large codebases where codebase understanding matters",
  "Builders who want to delegate implementation while reviewing plans and diffs",
  "Organizations standardizing AI coding with team rules, privacy controls, and usage analytics",
]

const notFor = [
  "Developers who do not want to leave their existing editor",
  "Teams that need fully offline or self-hosted AI coding",
  "Occasional users who only need lightweight autocomplete",
  "Organizations that cannot manage usage-based model spend",
  "Developers who expect agents to replace careful review, tests, and architecture judgment",
]

const features = [
  {
    title: "Cursor Agent",
    body: "Cursor's agent can plan tasks, inspect a codebase, edit files, run terminal commands, debug errors, and work across multiple files while the developer reviews the result.",
  },
  {
    title: "Tab Completion",
    body: "Cursor Tab predicts code edits and next actions directly in the editor, making small changes, refactors, and repetitive edits feel fast.",
  },
  {
    title: "Cloud Agents",
    body: "Cursor supports cloud agents that can run work in parallel, build and test features, and report back for review from desktop, web, or mobile workflows.",
  },
  {
    title: "CLI and Integrations",
    body: "Cursor can run agents from the terminal and connect to surfaces such as Slack, GitHub, Linear, JetBrains IDEs, and web or mobile agent dashboards.",
  },
  {
    title: "Bugbot and Code Review",
    body: "Cursor includes AI review workflows such as Bugbot, which can inspect pull requests and point developers toward likely logic, security, or quality issues.",
  },
  {
    title: "Rules, Skills, MCP, and Context",
    body: "Teams can add rules, skills, MCP connections, plugins, file references, images, and indexed codebase context so agents behave closer to local engineering standards.",
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

export function CursorToolPage({ relatedItems }: { relatedItems: CardItem[] }) {
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
        <ToolLogo name="Cursor" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          Cursor
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Cursor is listed in Sinale&apos;s AI development directory for AI coding,
          coding agents, codebase understanding, autocomplete, terminal
          workflows, cloud agents, code review, and developer productivity.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Cursor is an AI-native code editor built for developers who want
            coding assistance inside the place they already read, change, test,
            and ship code. It began as a familiar editor experience, but the
            current product is increasingly agent-first: Cursor can plan work,
            edit files, run commands, debug problems, and review code.
          </p>
          <p>
            The strength of Cursor is how close the AI sits to the codebase. It
            can use indexed project context, selected files, terminal output,
            rules, skills, plugins, MCP connections, and model selection to work
            on real engineering tasks instead of just answering generic coding
            questions.
          </p>
          <p>
            The tradeoff is that agentic coding changes the developer&apos;s job.
            You still need to review diffs, protect architecture, run tests,
            keep secrets out of prompts, and decide when to use autocomplete,
            targeted edits, Ask, or a full agent handoff.
          </p>
        </div>

        <ArticleCta tool="Cursor" href={toolLinks.cursor} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Cursor is one of the easiest AI coding tools to recommend for
            developers who work in a codebase every day. It combines fast
            autocomplete, multi-file editing, codebase search, agent workflows,
            terminal access, code review, and team controls in one environment.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Cursor if you want your coding assistant inside the editor
            and you are willing to shape your workflow around agent review. Skip
            it if you want a pure terminal agent, a simple IDE plugin, or a
            predictable fixed-cost tool with no model-usage considerations.
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
          <h2 className="text-2xl font-semibold">What Cursor Does</h2>
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
          <h2 className="text-2xl font-semibold">Cursor for Daily Coding</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Cursor shines on the everyday development loop: understand the
            surrounding code, make a focused change, accept or reject Tab
            completions, ask questions about unfamiliar files, run tests, and
            iterate on failures without leaving the editor.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The best workflow is not always full autonomy. For small changes,
            Tab and targeted edits are often faster. For unfamiliar systems, Ask
            can help you read before changing. For broad refactors or feature
            work, the agent becomes more useful once you can review a plan and
            evaluate the resulting diff.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Cursor for Teams</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Cursor&apos;s team story is built around shared context and control.
            Teams can use rules, skills, automations, shared team context,
            security review, usage analytics, centralized billing, SSO, and
            privacy mode to make AI coding less like a collection of individual
            experiments.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            This matters because AI coding is not just a developer preference
            anymore. Once agents can edit files, run commands, open pull
            requests, and review code, engineering leaders need standards for
            sensitive code, test expectations, model usage, and human review.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Cursor publishes a free Hobby plan with limited Agent requests and
            limited Tab completions. Individual plans start with Pro at $20 per
            month, with higher Pro+ and Ultra tiers positioned for daily agent
            users and power users.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Teams is listed at $40 per user per month and adds shared team
            context, team-wide rules, skills, automations, security review,
            SSO, privacy controls, analytics, a team plugin marketplace, and
            centralized billing. Enterprise is custom and adds features such as
            pooled usage, invoice billing, SCIM, audit logs, granular controls,
            priority support, and custom Bugbot plans.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Cursor uses usage-based model billing after included plan usage is
            consumed. The practical cost depends on how much you use agents,
            which models you choose, whether you run cloud agents or Bugbot, and
            how often you use high-cost frontier models for large tasks.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Cursor if you want an AI coding environment that can support
            the whole loop from autocomplete to multi-file agent work and code
            review. It is strongest for developers who ship often and want the
            assistant close to their editor, terminal, and repository context.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Treat Cursor as a productivity multiplier, not a substitute for
            engineering judgment. The teams that get the most from it will
            combine clear rules, small reviewable changes, strong tests, usage
            visibility, and careful review of agent-generated code.
          </p>
        </section>

        <ArticleCta tool="Cursor" href={toolLinks.cursor} placement="bottom" />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
