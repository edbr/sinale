import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Editor Polish", "Cursor"],
  ["Autocomplete", "Cursor"],
  ["Codebase Context", "Tie"],
  ["Multi-File Refactoring", "Cursor"],
  ["Agent Collaboration", "Windsurf"],
  ["Autonomous Coding", "Windsurf"],
  ["Daily Development", "Cursor"],
  ["Experimentation", "Windsurf"],
  ["Beginner Friendliness", "Cursor"],
  ["Overall Recommendation", "Cursor"],
]

const cursorWins = [
  {
    title: "Better Everyday Editor",
    body: "Cursor feels more polished as a daily coding environment. It is fast, familiar, and practical when you need to write, edit, debug, refactor, and ship code for real projects.",
  },
  {
    title: "Stronger Multi-File Editing",
    body: "Cursor is excellent at making coordinated changes across files: moving components, updating API calls, refactoring TypeScript types, changing UI patterns, and cleaning up code without losing the thread.",
  },
  {
    title: "More Predictable Workflow",
    body: "Cursor generally keeps the developer close to the work. You can ask for a plan, apply edits, inspect diffs, run tests, and recover when something goes wrong.",
  },
  {
    title: "Easier to Recommend",
    body: "For most developers choosing one AI editor, Cursor is the safer default. It has strong adoption, a familiar VS Code-like feel, and a clear workflow for day-to-day development.",
  },
]

const windsurfWins = [
  {
    title: "More Agent-First Philosophy",
    body: "Windsurf is built around Cascade, an agentic assistant designed to collaborate with developers through chat, code mode, tool use, checkpoints, and codebase awareness.",
  },
  {
    title: "Better for Autonomous Experiments",
    body: "Windsurf is more interesting when you want to explore bigger agent workflows: asking the AI to investigate, plan, edit, use tools, and move through a larger task with less manual prompting.",
  },
  {
    title: "Deeper Future-of-Work Feel",
    body: "Windsurf feels less like a faster editor and more like an experiment in collaborative software development with agents. That makes it exciting, even when Cursor is still easier to use every day.",
  },
  {
    title: "Useful for Complex Coding Sessions",
    body: "When the task involves exploration, architecture decisions, or a longer sequence of changes, Windsurf can feel like a stronger AI partner than a simple autocomplete or chat panel.",
  },
]

const useCases = [
  {
    title: "Choose Cursor if",
    items: [
      "You want the best daily AI coding editor",
      "You care about fast autocomplete and multi-file edits",
      "You are building production features in a real codebase",
      "You want an AI workflow that stays close to familiar development habits",
      "You need a tool that is easy to recommend to most developers",
    ],
  },
  {
    title: "Choose Windsurf if",
    items: [
      "You want to experiment with agent-first coding workflows",
      "You like Cascade's collaborative assistant model",
      "You want AI to participate more actively in planning and implementation",
      "You are exploring autonomous or semi-autonomous coding",
      "You are comfortable with a more ambitious, evolving product direction",
    ],
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

export function CursorVsWindsurfComparison() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Button asChild variant="ghost" className="mb-10 px-0">
          <Link href="/comparisons">
            <ArrowLeft />
            Comparisons
          </Link>
        </Button>

        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Comparison
        </p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Cursor vs Windsurf (2026): Which AI Editor Should You Choose?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Cursor and Windsurf are two of the most important AI-first
            development environments for developers who want more than basic
            autocomplete.
          </p>
          <p>
            Both tools help you write code, understand a codebase, refactor
            files, generate features, and work with agents. But they feel
            different in daily use.
          </p>
          <p>
            Cursor feels like the best AI editor for shipping software today.
            Windsurf feels like one of the most interesting agent-first
            environments for exploring how coding may change next.
          </p>
          <p>
            If you want one tool for everyday development, I would choose
            Cursor. If you want to experiment with a more agentic coding style,
            Windsurf is worth serious attention.
          </p>
        </div>

        <ArticleCta tool="Cursor" href={toolLinks.cursor} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <div className="mt-5 divide-y rounded-lg border">
            {verdictRows.map(([category, winner]) => (
              <div
                key={category}
                className="grid grid-cols-[1fr_auto] gap-4 px-4 py-3 text-sm"
              >
                <span className="text-muted-foreground">{category}</span>
                <span className="font-medium">{winner}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best daily AI editor:</span> Cursor
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best agent-first experiment:</span>{" "}
              Windsurf
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Cursor?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Cursor is an AI-native code editor built around smart
              autocomplete, codebase context, chat, inline edits, multi-file
              refactoring, agents, and cloud workflows.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is designed for developers who want AI inside the normal
              coding loop: read the code, make the change, review the diff, run
              the tests, and keep moving.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Windsurf?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Windsurf is an AI-powered development environment built around
              Cascade, its agentic assistant for coding, chat, codebase
              awareness, tool calling, checkpoints, and collaborative workflows.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is designed for developers who want the AI to participate more
              actively in the coding process, especially during larger tasks.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Cursor Wins</h2>
          <div className="mt-5 grid gap-4">
            {cursorWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Cursor</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Windsurf Wins</h2>
          <div className="mt-5 grid gap-4">
            {windsurfWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Windsurf</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Cursor vs Windsurf for Coding
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Cursor is the better default for day-to-day coding. It feels fast
            when you are creating components, editing APIs, fixing TypeScript
            errors, moving files, and tightening production code.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Windsurf is also capable for normal coding, but its advantage is
            less about typing faster and more about letting Cascade collaborate
            on the task as a broader coding partner.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Cursor vs Windsurf for Refactoring
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Cursor has the edge for refactoring because it makes multi-file
            editing feel controlled. You can ask for a narrow change, inspect
            the result, and keep the loop tight.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Windsurf can be strong for larger refactors when you want the
            assistant to reason through the project first. But for most
            practical refactoring work, Cursor is easier to trust.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Cursor vs Windsurf for Agents
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Cursor has become increasingly agent-focused, especially for
            codebase-aware work, background tasks, and cloud workflows. It is
            probably the better agent experience if you want agentic coding
            inside a polished editor.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Windsurf has the more explicit agent-first identity. Cascade is
            built to collaborate with you through code and chat modes, tool
            use, checkpoints, and awareness of your active work. If your
            priority is experimenting with agent collaboration, Windsurf is very
            compelling.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Cursor vs Windsurf for Teams
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Cursor is easier to standardize for teams that want a productive AI
            editor now. It feels familiar, it maps cleanly to common software
            workflows, and it is easier to teach across product engineering
            teams.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Windsurf is attractive for teams that want to push deeper into
            agent-based development. That can be powerful, but it also requires
            stronger habits around review, testing, permissions, and deciding
            when to let the agent act.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Both products change pricing and usage limits as models, agents,
            and cloud workflows become more expensive to run. Cursor pricing is
            usually easiest to evaluate as an individual or team plan tied to
            model and agent usage.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Windsurf pricing depends on the plan, agent usage, team needs, and
            whether you are using advanced or organization-level features.
            Before standardizing either tool, check the official pricing pages
            and test them against real coding tasks.
          </p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="rounded-lg border bg-card p-5">
              <h2 className="text-2xl font-semibold">{useCase.title}</h2>
              <CheckList items={useCase.items} />
            </div>
          ))}
        </section>

        <ArticleCta tool="Cursor" href={toolLinks.cursor} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Cursor is the better AI editor for most developers in 2026. It is
            polished, fast, familiar, strong at refactoring, and practical for
            production work.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Windsurf is the better choice if you are specifically interested in
            agent-first development. Cascade makes Windsurf feel like a more
            active coding collaborator, especially for larger exploratory tasks.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Cursor Rating:</span> 9/10. Best
              for daily AI coding, refactoring, and production development.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Windsurf Rating:</span> 8.5/10.
              Best for agent-first coding workflows and experimentation.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Cursor if you want the best AI editor for shipping code
            today. Choose Windsurf if you want to explore a more agentic
            development environment and are comfortable with a workflow that
            feels more experimental.
          </p>
        </section>

        <ArticleCta tool="Cursor" href={toolLinks.cursor} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
