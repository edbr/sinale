import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Autocomplete", "Tie"],
  ["AI-Native Editor", "Cursor"],
  ["IDE Support", "GitHub Copilot"],
  ["Codebase Context", "Cursor"],
  ["Agent Workflows", "Cursor"],
  ["GitHub Integration", "GitHub Copilot"],
  ["Enterprise Controls", "GitHub Copilot"],
  ["Model Choice", "Tie"],
  ["Best for Solo Builders", "Cursor"],
  ["Best for Large Teams", "GitHub Copilot"],
]

const cursorWins = [
  {
    title: "Better AI-Native Editing Experience",
    body: "Cursor is not just an extension inside an existing editor. The whole product is designed around AI-assisted development, from chat and inline edits to codebase context and agent workflows.",
  },
  {
    title: "Stronger Codebase Context",
    body: "Cursor is especially good when you want the assistant to understand the shape of your project, find relevant files, edit across the codebase, and keep context close to the coding surface.",
  },
  {
    title: "More Natural Agent Workflow",
    body: "Cursor's agent experience feels closer to delegating a coding task inside your editor. It can plan, edit, inspect files, run commands, and keep you in the loop while making project-wide changes.",
  },
  {
    title: "Faster for Product Builders",
    body: "For founders, indie hackers, product engineers, and small teams shipping features quickly, Cursor often feels like the fastest environment for moving from idea to implementation.",
  },
]

const copilotWins = [
  {
    title: "Works Across More Editors",
    body: "GitHub Copilot is available across VS Code, Visual Studio, JetBrains IDEs, Xcode, Neovim, Eclipse, GitHub.com, GitHub Mobile, and the CLI. That matters when a team does not want to standardize on one editor.",
  },
  {
    title: "Best GitHub Integration",
    body: "Copilot is deeply connected to GitHub workflows, including pull requests, code review, repositories, issues, enterprise controls, and organization policies.",
  },
  {
    title: "Stronger Enterprise Story",
    body: "For large organizations already using GitHub Enterprise, Copilot is easier to manage centrally with policy controls, seat management, enterprise features, and procurement familiarity.",
  },
  {
    title: "Reliable Autocomplete Everywhere",
    body: "Copilot remains one of the best default choices for inline suggestions and autocomplete. It is especially useful for teams that want AI help without changing their development environment.",
  },
]

const useCases = [
  {
    title: "Choose Cursor if",
    items: [
      "You want an AI-native coding editor",
      "You work across a project and need strong codebase context",
      "You want agents to make multi-file changes inside the editor",
      "You are a solo builder, founder, or product engineer",
      "You are willing to switch editors for a better AI workflow",
    ],
  },
  {
    title: "Choose GitHub Copilot if",
    items: [
      "Your team already uses VS Code, JetBrains, Visual Studio, or Xcode",
      "You want AI assistance without changing editors",
      "Your organization depends heavily on GitHub",
      "You need enterprise policy controls and centralized management",
      "Autocomplete and broad IDE support matter more than editor-native agents",
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

export function CursorVsGithubCopilotComparison() {
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
          Cursor vs GitHub Copilot (2026): Which Coding Tool Is Better?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Cursor and GitHub Copilot are two of the most important AI coding
            tools for developers in 2026, but they represent different bets on
            the future of software development.
          </p>
          <p>
            Cursor is an AI-native code editor. It is built around codebase
            context, chat, inline edits, agents, project-wide changes, and a
            workflow where AI is part of the editor itself.
          </p>
          <p>
            GitHub Copilot is an AI coding assistant that works across many
            editors and deeply integrates with GitHub. It is strongest when a
            team wants AI help without forcing everyone into a new development
            environment.
          </p>
          <p>
            My short answer: choose Cursor if you want the best AI coding
            workflow. Choose GitHub Copilot if you want the safest team-wide AI
            rollout across existing tools.
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
              <span className="font-medium">Best AI editor:</span> Cursor
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best broad rollout:</span> GitHub
              Copilot
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Cursor?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Cursor is an AI code editor designed around autocomplete, chat,
              inline code generation, codebase indexing, multi-file edits, and
              agent workflows.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              The appeal is that AI is not bolted onto the side of the editor.
              It is woven into how you search, edit, refactor, debug, and ship
              code.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is GitHub Copilot?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              GitHub Copilot is an AI coding assistant from GitHub that works
              across popular editors, GitHub.com, the command line, pull
              requests, code review, and enterprise development workflows.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              The appeal is reach. Copilot can meet developers in the tools
              they already use instead of asking every team to switch editors.
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
          <h2 className="text-2xl font-semibold">
            Where GitHub Copilot Wins
          </h2>
          <div className="mt-5 grid gap-4">
            {copilotWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">
                  Winner: GitHub Copilot
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Cursor vs GitHub Copilot for Autocomplete
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Both tools are excellent for autocomplete. Copilot helped define
            the category and remains a reliable default for inline suggestions
            across many editors. Cursor&apos;s Tab experience is also excellent,
            especially because it can predict edits across multiple lines and
            files inside an AI-native editor.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            If autocomplete is the only feature you care about, Copilot is hard
            to beat because it works almost everywhere. If autocomplete is part
            of a larger agentic editing workflow, Cursor feels stronger.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Cursor vs GitHub Copilot for Codebase Context
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Cursor has the edge for codebase context. It is designed to find
            relevant files, understand project structure, reference code with
            context, and help agents make changes across a real repository.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Copilot has improved a lot here, especially inside GitHub and
            supported IDEs, but Cursor still feels more focused when the job is
            to understand and modify an existing codebase from inside the
            editor.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Cursor vs GitHub Copilot for Agent Workflows
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Cursor is the better choice if you want agent workflows to be a
            daily part of coding. It is built for asking an agent to implement a
            feature, inspect the project, edit files, run commands, and iterate
            inside the same coding environment.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Copilot has agent mode, code review, cloud agent capabilities, and
            GitHub-native workflows. That makes it more attractive for
            organizations that want agents connected to pull requests,
            repositories, and enterprise controls.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Cursor vs GitHub Copilot for Teams
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            For small teams that can standardize on a new editor, Cursor is
            compelling. The whole team gets a consistent AI-native workflow,
            shared expectations around agents, and a faster path from prompt to
            code change.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            For larger teams, GitHub Copilot is often easier to adopt. It
            supports more IDEs, fits existing GitHub workflows, and gives
            engineering leaders more familiar controls for licenses, policies,
            and enterprise rollout.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Cursor pricing is straightforward for individuals who want an
            AI-first editor, but costs can rise for power users, larger model
            usage, cloud agents, and team features.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            GitHub Copilot pricing depends on plan type, premium requests,
            organization seats, enterprise needs, and usage-based billing
            changes. In 2026, teams should pay close attention to premium
            request allowances, model usage, and code review or agent costs.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Check both official pricing pages before choosing. The cheaper
            tool is not always the better value if it does not match your
            coding workflow.
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
            Cursor is the better coding tool if you want an AI-native editor
            with strong codebase context, agent workflows, multi-file edits,
            and a faster path from prompt to implementation.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            GitHub Copilot is the better coding tool if your team wants broad
            IDE support, strong GitHub integration, enterprise controls, and AI
            assistance without switching development environments.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Cursor Rating:</span> 9/10. Best
              for AI-native development and agentic coding.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">GitHub Copilot Rating:</span>{" "}
              8.5/10. Best for broad team adoption and GitHub-native workflows.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Cursor if you want the best AI coding environment. Choose
            GitHub Copilot if you want the easiest AI coding assistant to roll
            out across an existing engineering team.
          </p>
        </section>

        <ArticleCta tool="Cursor" href={toolLinks.cursor} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
