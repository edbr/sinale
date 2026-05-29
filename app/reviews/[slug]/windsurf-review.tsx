import Link from "next/link"
import { ArrowLeft, Check, X } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const useCases = [
  "Building new app features",
  "Exploring unfamiliar codebases",
  "Multi-file edits and refactors",
  "Debugging with terminal context",
  "Generating and iterating on prototypes",
  "Testing agent-first coding workflows",
]

const strengths = [
  {
    title: "Cascade Feels Like the Product",
    body: "Windsurf is built around Cascade, not around a bolted-on chat panel. That makes the assistant feel central to planning, editing, debugging, and moving through a task.",
  },
  {
    title: "Strong Workflow Awareness",
    body: "Cascade can use editor state, terminal activity, files, conversation history, and recent actions as context. This reduces the amount of repetitive prompting required during real development.",
  },
  {
    title: "Good for Bigger Tasks",
    body: "Windsurf is especially interesting when the job is larger than a single autocomplete: investigate a bug, plan a change, edit several files, check errors, and continue from the current state.",
  },
  {
    title: "Useful Safety Rails",
    body: "Checkpoints, reverts, ignored files, linter integration, and reviewable edits make agent work easier to control, even though developers still need to inspect the result.",
  },
]

const pros = [
  "Agent-first coding workflow",
  "Cascade supports planning and multi-step work",
  "Strong real-time context awareness",
  "Useful checkpoints and revert flow",
  "Good fit for prototypes and larger edits",
]

const cons = [
  "Less predictable than simple autocomplete",
  "Credit and model usage can be hard to estimate",
  "Generated code still needs careful review",
  "Teams need clear rules before broad rollout",
]

export function WindsurfReview() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Button asChild variant="ghost" className="mb-10 px-0">
          <Link href="/reviews">
            <ArrowLeft />
            Reviews
          </Link>
        </Button>

        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Review
        </p>
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
          Windsurf Review (2026): An AI-Native Editor for Agent Workflows
        </h1>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full border px-3 py-1 text-sm text-muted-foreground">
            Rating: 8.6/10
          </span>
          <span className="rounded-full border px-3 py-1 text-sm text-muted-foreground">
            Best for agent-first development
          </span>
        </div>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Windsurf is one of the clearest examples of where AI coding tools
            are heading. It is not just an editor with autocomplete. It is an
            AI-native development environment built around Cascade, an agentic
            assistant that can plan, edit, use tools, understand workflow
            context, and help carry a coding task across several steps.
          </p>
          <p>
            After comparing Windsurf with tools like Cursor, GitHub Copilot,
            Claude Code, and Replit, I see Windsurf as the more experimental
            and agent-forward option. It is exciting when you want the AI to
            collaborate on a larger task, not just finish the line you are
            typing.
          </p>
          <p>
            The tradeoff is that bigger AI handoffs create bigger review
            responsibilities. Windsurf can save real time, but it rewards
            developers who keep changes scoped, inspect diffs, and test the work
            before trusting it.
          </p>
        </div>

        <ArticleCta
          tool="Windsurf"
          href={toolLinks.windsurf}
          placement="top"
        />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What is Windsurf?</h2>
          <div className="mt-4 space-y-4 leading-7 text-muted-foreground">
            <p>
              Windsurf is an AI-powered IDE created for agentic software
              development. Its core assistant, Cascade, can work in Code mode
              for codebase changes or Chat mode for questions, explanations,
              and proposed edits.
            </p>
            <p>
              Cascade supports tool calling, planning, todo lists, queued
              messages, voice input, checkpoints, reverts, real-time awareness,
              linter integration, MCP, web search, browser context, and app
              deploy workflows. In plain English: Windsurf wants the assistant
              to understand the whole coding flow, not only the active file.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            What I Would Use Windsurf For
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <div key={useCase} className="rounded-lg border bg-card p-4">
                <p className="text-sm font-medium">{useCase}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border bg-secondary/40 p-5">
            <p className="text-sm font-medium text-muted-foreground">
              Example prompt
            </p>
            <p className="mt-3 leading-7">
              Investigate why this route fails in production, create a short
              plan, make the smallest safe fix, and list the tests I should run
              before committing.
            </p>
          </div>
          <p className="mt-5 leading-7 text-muted-foreground">
            Windsurf is strongest when the AI needs to work with context:
            current files, terminal output, project conventions, browser
            behavior, and the recent path of the task.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What Windsurf Does Well</h2>
          <div className="mt-5 grid gap-4">
            {strengths.map((strength) => (
              <div key={strength.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{strength.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {strength.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Windsurf Falls Short</h2>
          <div className="mt-4 space-y-4 leading-7 text-muted-foreground">
            <p>
              Windsurf can feel less predictable than simpler coding tools. That
              is the natural cost of a more agentic workflow: the assistant can
              do more, but developers need to spend more time reviewing the
              path it took and the files it changed.
            </p>
            <p>
              Pricing and usage can also be harder to reason about than a
              simple subscription. Prompt credits, premium models, add-on
              credits, and long-running Cascade work all matter. Heavy users
              should watch usage closely before making Windsurf the default
              team tool.
            </p>
            <p>
              Finally, Windsurf does not remove the need for architecture
              judgment. Cascade can propose and implement a plan, but the human
              still owns system design, security, tests, and whether the change
              should exist at all.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Windsurf vs Cursor</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Choose Windsurf if</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                You want to explore a more agent-centered coding workflow built
                around Cascade, planning, real-time context, browser workflows,
                and larger AI collaboration loops.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Choose Cursor if</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                You want the more polished daily AI editor experience with
                excellent autocomplete, multi-file edits, agent workflows, and a
                familiar VS Code-style feel.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Who Should Use Windsurf?</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Windsurf is a strong fit for engineers, technical founders,
            product-minded builders, and early AI adopters who want to test
            agent-first coding workflows. It is especially useful for people
            who build web apps, refactor frequently, debug with terminal
            context, or want to delegate more than small code completions.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Windsurf has Free, Pro, Teams, and Enterprise paths, but the real
            cost depends on usage. Premium-model prompts consume credits, and
            teams may need add-on credits or refills depending on how heavily
            they use Cascade.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Before rolling it out broadly, check the current Windsurf pricing
            page and decide when developers should use premium models, when to
            keep tasks smaller, and how to monitor spend.
          </p>
        </section>

        <ArticleCta
          tool="Windsurf"
          href={toolLinks.windsurf}
          placement="mid"
        />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Windsurf is one of the most interesting AI coding tools because it
            takes the agent idea seriously. Cascade makes the product feel less
            like an assistant sitting beside the editor and more like the center
            of the development workflow.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            I would recommend Windsurf to developers who want to experiment
            with more autonomous coding loops and are disciplined enough to
            review the output. For safer everyday coding, Cursor may still feel
            more refined. For the future of agentic development, Windsurf is
            absolutely worth watching and testing.
          </p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-xl font-semibold">Pros</h2>
            <div className="mt-4 grid gap-3">
              {pros.map((pro) => (
                <p key={pro} className="flex gap-2 text-sm leading-6">
                  <Check className="mt-0.5 size-4 shrink-0" />
                  {pro}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-xl font-semibold">Cons</h2>
            <div className="mt-4 grid gap-3">
              {cons.map((con) => (
                <p key={con} className="flex gap-2 text-sm leading-6">
                  <X className="mt-0.5 size-4 shrink-0" />
                  {con}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Windsurf is a strong AI coding editor for developers who want to
            work with an agent, not just autocomplete, and who are willing to
            keep review and testing at the center of the workflow.
          </p>
        </section>

        <ArticleCta
          tool="Windsurf"
          href={toolLinks.windsurf}
          placement="bottom"
        />

        <GiscusComments />
      </article>
    </main>
  )
}
