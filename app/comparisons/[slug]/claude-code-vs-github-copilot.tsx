import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Agentic Coding", "Claude Code"],
  ["IDE Assistance", "GitHub Copilot"],
  ["Autocomplete", "GitHub Copilot"],
  ["Repository Understanding", "Claude Code"],
  ["Reasoning", "Claude Code"],
  ["Pull Request Workflows", "GitHub Copilot"],
  ["Enterprise Rollout", "GitHub Copilot"],
  ["Terminal Workflows", "Claude Code"],
  ["Broad Editor Support", "GitHub Copilot"],
  ["Overall Recommendation", "Depends on team shape"],
]

const claudeCodeWins = [
  {
    title: "Better Agentic Coding",
    body: "Claude Code is built as an agentic coding harness around Claude. It can inspect files, edit code, run commands, reason through failures, and work through a task from inside the terminal or remote coding environment.",
  },
  {
    title: "Stronger Technical Reasoning",
    body: "Claude Code is often better when the problem requires careful thought: tracing architecture, understanding a complex bug, comparing implementation paths, or deciding how to modify a system without breaking it.",
  },
  {
    title: "Deeper Repository Exploration",
    body: "When you need to understand an unfamiliar repository, Claude Code is excellent at searching, reading, summarizing, and connecting pieces of code across the project.",
  },
  {
    title: "More Flexible Command-Line Workflows",
    body: "Claude Code can help with more than editing files. It can run builds, inspect errors, search the repo, write docs, execute scripts, and participate in workflows that happen from the command line.",
  },
]

const copilotWins = [
  {
    title: "Better IDE Assistance",
    body: "GitHub Copilot is the better everyday IDE companion. Inline suggestions, chat, next edits, editor integrations, and broad language support make it useful throughout normal coding sessions.",
  },
  {
    title: "Best Autocomplete Experience",
    body: "Copilot remains one of the easiest recommendations for autocomplete because it works across VS Code, Visual Studio, JetBrains IDEs, Xcode, Neovim, Eclipse, GitHub.com, and more.",
  },
  {
    title: "Stronger GitHub Workflow",
    body: "Copilot fits naturally into repositories, pull requests, code review, GitHub Enterprise, organization policies, and the broader software delivery workflow.",
  },
  {
    title: "Better Enterprise Fit",
    body: "For large teams, Copilot is easier to standardize. It has licensing, policy controls, enterprise plans, familiar procurement paths, and support for developers who do not all use the same editor.",
  },
]

const useCases = [
  {
    title: "Choose Claude Code if",
    items: [
      "You want an agent to work through coding tasks end to end",
      "You spend a lot of time in the terminal",
      "You need strong reasoning across a repository",
      "You want help debugging complex systems",
      "You prefer a focused coding agent over broad IDE autocomplete",
    ],
  },
  {
    title: "Choose GitHub Copilot if",
    items: [
      "You want AI assistance inside your existing IDE",
      "Autocomplete and next-edit suggestions matter every day",
      "Your team relies heavily on GitHub pull requests and reviews",
      "You need enterprise controls and centralized rollout",
      "Your developers use different editors and environments",
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

export function ClaudeCodeVsGithubCopilotComparison() {
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
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
          Claude Code vs GitHub Copilot (2026): Which Helps Developers More?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Claude Code and GitHub Copilot both help developers write better
            software faster, but they are built around different workflows.
          </p>
          <p>
            Claude Code is best understood as an agentic coding tool. It works
            through tasks, explores repositories, edits files, runs commands,
            and reasons through implementation problems.
          </p>
          <p>
            GitHub Copilot is best understood as a broad AI developer assistant.
            It helps inside IDEs, pull requests, GitHub workflows, code review,
            chat, autocomplete, and enterprise development environments.
          </p>
          <p>
            If you want a coding agent, choose Claude Code. If you want AI
            assistance across an engineering organization, choose GitHub
            Copilot.
          </p>
        </div>

        <ArticleCta tool="Claude" href={toolLinks.claude} placement="top" />

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
              <span className="font-medium">Best coding agent:</span> Claude
              Code
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best team assistant:</span> GitHub
              Copilot
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Claude Code?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Claude Code is Anthropic&apos;s agentic coding tool. It gives
              Claude access to coding tools, files, terminal commands, context
              management, and execution loops that help it behave like a
              software engineering agent.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is strongest when you want the assistant to understand a
              repository, plan changes, edit files, run checks, and reason
              through the work.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is GitHub Copilot?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              GitHub Copilot is GitHub&apos;s AI developer assistant for code
              completions, chat, agent mode, code review, pull requests,
              command-line help, and IDE workflows.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is strongest when developers want AI help inside the tools and
              GitHub workflows they already use every day.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Claude Code Wins</h2>
          <div className="mt-5 grid gap-4">
            {claudeCodeWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Claude Code</p>
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
            Claude Code vs GitHub Copilot for Agentic Coding
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude Code is the stronger choice for agentic coding because the
            entire experience is built around letting Claude work through a
            software task. It can search the repository, edit files, run
            commands, inspect failures, and iterate.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Copilot also has agent mode and cloud agent features, but its
            center of gravity is broader. It is designed to support many kinds
            of developer assistance, not only deep command-line agent work.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Claude Code vs GitHub Copilot for IDE Assistance
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Copilot wins for IDE assistance. It is available across major
            editors and can help with inline completions, chat, next edits,
            explanations, code generation, and common development tasks without
            asking developers to change their workflow.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude Code can integrate with editor workflows, but it feels more
            like a powerful coding agent than a lightweight inline assistant.
            That distinction matters for daily development.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Claude Code vs GitHub Copilot for Reasoning
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude Code has the advantage when the work requires reasoning
            through tradeoffs, debugging a confusing failure, understanding a
            large repository, or explaining how a system should change.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Copilot is capable of reasoning too, especially with strong models,
            but its biggest advantage is practical distribution: it is already
            where developers write code, open pull requests, and review changes.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Claude Code vs GitHub Copilot for Repository Understanding
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude Code is excellent for learning a repository. It can inspect
            folder structure, follow data flow, summarize modules, find likely
            bug locations, and explain how pieces fit together.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Copilot is useful here too, especially in GitHub-connected
            workflows, but Claude Code tends to feel more deliberate when the
            main task is understanding before editing.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Claude Code vs GitHub Copilot for Enterprise Fit
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            GitHub Copilot is the stronger enterprise choice for most large
            engineering organizations. It fits GitHub Enterprise, supports
            centralized administration, works across many IDEs, and is easier
            to roll out across teams with different development habits.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude Code can be very powerful for advanced engineering teams,
            but enterprise adoption depends more on how comfortable the
            organization is with command-line agents, repository access,
            execution permissions, and review discipline.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude Code access is tied to Anthropic&apos;s Claude plans and
            usage limits, with different considerations for Pro, Max, Team,
            Enterprise, and API usage.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            GitHub Copilot pricing depends on Free, Pro, Pro+, Business, and
            Enterprise plans, plus premium request allowances and usage-based
            billing changes in 2026. Code review and agent workflows can also
            affect usage differently than simple autocomplete.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            For individuals, the better value depends on whether you need an
            agent or IDE assistance. For teams, pricing should be evaluated
            alongside governance, rollout, usage reporting, and review process.
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

        <ArticleCta tool="Claude" href={toolLinks.claude} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude Code helps developers more when the work is deep, agentic,
            repository-focused, and reasoning-heavy. It is the better choice for
            complex debugging, architecture exploration, and command-line coding
            tasks.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            GitHub Copilot helps developers more when the goal is broad daily
            assistance across a team: autocomplete, IDE chat, pull requests,
            code review, enterprise controls, and GitHub-native workflows.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Claude Code Rating:</span> 9/10.
              Best for agentic coding and deep repository reasoning.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">GitHub Copilot Rating:</span>{" "}
              8.5/10. Best for IDE assistance and enterprise developer
              workflows.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Claude Code when you want a coding agent. Choose GitHub
            Copilot when you want an AI assistant everywhere developers already
            work.
          </p>
        </section>

        <ArticleCta tool="Claude" href={toolLinks.claude} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
