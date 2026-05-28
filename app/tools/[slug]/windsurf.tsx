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
  "Developers who want an agent-first AI IDE",
  "Builders experimenting with larger coding handoffs",
  "Teams that want Cascade, MCP, rules, memories, and workflows together",
  "Product-minded engineers building web apps and prototypes",
  "Developers who want AI help across editor, terminal, browser, and previews",
]

const notFor = [
  "Developers who only want lightweight autocomplete",
  "Teams that need a fully offline coding assistant",
  "Organizations that cannot monitor model or credit usage",
  "Engineers who prefer a plugin inside their existing IDE",
  "Developers who expect AI edits to ship without review and tests",
]

const features = [
  {
    title: "Cascade",
    body: "Cascade is Windsurf's agentic assistant. It can chat, write code, call tools, use context from your editor and terminal, create plans, track todos, and help move a task through multiple steps.",
  },
  {
    title: "Code and Chat Modes",
    body: "Code mode is built for making changes to your codebase. Chat mode is better for asking questions, exploring implementation options, and proposing code you can review before inserting.",
  },
  {
    title: "Planning, Todos, and Queued Messages",
    body: "For longer tasks, Cascade can build a todo list and keep refining the plan while work continues. You can also queue follow-up messages while Cascade is still running.",
  },
  {
    title: "Checkpoints and Reverts",
    body: "Windsurf can create checkpoints around Cascade changes so you can inspect a trajectory and revert generated edits when the direction is wrong.",
  },
  {
    title: "Real-Time Awareness",
    body: "Cascade is designed to stay aware of files you view, edits you make, terminal activity, conversation history, and current workflow context so you do not have to restate every detail.",
  },
  {
    title: "MCP, Web Search, Browser, and Deploys",
    body: "Windsurf can extend Cascade through MCP, web search, browser context, previews, app deploys, workflows, rules, and memories, making it more than a simple editor chatbot.",
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

export function WindsurfToolPage({
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
        <ToolLogo name="Windsurf" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          Windsurf
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Windsurf is an AI-native IDE built around Cascade, an agentic coding
          assistant for planning, editing, debugging, codebase context, terminal
          awareness, browser workflows, app previews, and developer
          productivity.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Windsurf is one of the most interesting AI coding environments
            because it is designed around collaboration with an agent rather
            than only autocomplete. Cascade can read context, make code changes,
            use tools, keep track of plans, and continue a larger development
            task across multiple steps.
          </p>
          <p>
            The product makes the most sense when you want your coding
            assistant to understand what you are doing in the editor, terminal,
            browser, and project. That real-time workflow awareness is the main
            reason Windsurf feels different from a basic chat panel.
          </p>
          <p>
            The tradeoff is operational discipline. Windsurf can move quickly,
            but generated code still needs review, tests, version control, and
            clear boundaries around sensitive files and usage costs.
          </p>
        </div>

        <ArticleCta
          tool="Windsurf"
          href={toolLinks.windsurf}
          placement="top"
        />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Windsurf is best for developers who want an agent-first coding
            workflow and are willing to let the assistant participate in
            planning, editing, debugging, browser context, and iteration. It is
            more ambitious than a traditional autocomplete tool and more
            collaborative than a standalone coding chatbot.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Windsurf if you want to experiment with Cascade as a coding
            partner. Choose a lighter tool if your main need is simple inline
            completion or predictable low-touch assistance.
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
          <h2 className="text-2xl font-semibold">What Windsurf Does</h2>
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
          <h2 className="text-2xl font-semibold">Windsurf for Daily Coding</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            For daily coding, Windsurf works well when you alternate between
            direct editing and agent collaboration. Use Chat mode to understand
            a code path, Code mode to make scoped changes, and checkpoints to
            keep larger Cascade edits reviewable.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The strongest workflow is usually not total autonomy. Let Cascade
            investigate, propose a plan, make a bounded change, and then inspect
            the diff before expanding the task. That keeps the speed benefits
            without giving up engineering judgment.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Windsurf for Teams</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Windsurf becomes more useful for teams when rules, memories,
            workflows, MCP connections, ignored files, and shared conventions
            are treated as part of the development system. Those controls help
            Cascade work closer to the way the team already builds software.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Teams should still define review rules for AI-generated code:
            required tests, sensitive files, secrets, model usage, pull request
            expectations, and when a human needs to stop the agent and redesign
            the approach.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Windsurf offers Free, Pro, Teams, and Enterprise paths, with usage
            depending on plan, model selection, and Cascade activity. The
            practical cost depends on how often you send premium-model prompts,
            how much agent work you run, and whether your team buys or refills
            additional credits.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Review current pricing directly on Windsurf before committing a
            team rollout. Agentic coding tools can become much more expensive
            when developers use frontier models for broad, long-running tasks.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Windsurf is worth trying if you want an AI IDE that leans into the
            future of agentic software development. Cascade is strongest when
            the task requires context, planning, tool use, iteration, and a
            developer who can review the work with care.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            If you want the most polished default AI editor, compare it closely
            with Cursor. If you want to explore a more agent-centered workflow,
            Windsurf deserves serious attention.
          </p>
        </section>

        <ArticleCta
          tool="Windsurf"
          href={toolLinks.windsurf}
          placement="bottom"
        />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
