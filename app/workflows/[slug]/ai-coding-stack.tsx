import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const steps = [
  {
    title: "Start with a Narrow Task",
    tools: ["ChatGPT", "Claude"],
    body:
      "AI coding gets messy when the task is vague. Before opening your editor, turn the idea into a small implementation brief with the goal, constraints, affected files, acceptance criteria, and tests you expect to run.",
    checklist: [
      "What user problem does this solve?",
      "Which files or modules are likely affected?",
      "What behavior should not change?",
      "What tests or manual checks prove it works?",
      "What should the AI avoid touching?",
    ],
  },
  {
    title: "Ask for an Implementation Plan",
    tools: ["Claude", "ChatGPT"],
    body:
      "Use a general assistant to think before you code. A good plan should identify likely files, risks, data flow, edge cases, and a minimal order of operations.",
    prompt:
      "Review this feature request and propose a minimal implementation plan. Include likely files, risks, edge cases, and verification steps. Do not write code yet.",
  },
  {
    title: "Let the Editor Agent Make the First Pass",
    tools: ["Cursor", "Windsurf"],
    body:
      "Use Cursor or Windsurf for codebase-aware edits when the task spans multiple files. Keep the first pass small: one component, one route, one API path, or one bug fix at a time.",
    prompt:
      "Implement this change using the existing project patterns. Keep the diff focused, preserve current behavior, and add the smallest useful test if the surrounding code has tests.",
  },
  {
    title: "Use Claude Code for Repo-Level Work",
    tools: ["Claude Code"],
    body:
      "Claude Code is useful when the task is easier from the terminal: searching the repo, reading logs, running tests, updating several files, explaining failures, or iterating on a command-line feedback loop.",
    checklist: [
      "Search the codebase before editing",
      "Inspect neighboring patterns",
      "Run the smallest relevant check",
      "Fix one failure class at a time",
      "Stop before unrelated refactors creep in",
    ],
  },
  {
    title: "Review the Diff Like a Human",
    tools: ["GitHub Copilot", "Claude"],
    body:
      "Do not accept AI output because it compiles. Review the diff for accidental behavior changes, hidden coupling, unnecessary abstractions, weak error states, accessibility regressions, and missing tests.",
    prompt:
      "Review this diff for bugs, risky assumptions, missing tests, behavior changes, and unclear code. Prioritize concrete findings over style suggestions.",
  },
  {
    title: "Run the Real Checks",
    tools: [],
    body:
      "The coding stack only works if every AI-generated change goes through the same gates as human code. Lint, typecheck, unit tests, integration tests, build, and a manual smoke test matter more than a confident explanation.",
    checklist: [
      "Lint",
      "Typecheck",
      "Unit tests",
      "Integration or E2E tests",
      "Production build",
      "Manual smoke test",
    ],
  },
  {
    title: "Ask AI to Explain the Change Back",
    tools: ["Claude", "ChatGPT"],
    body:
      "Before shipping, ask the assistant to summarize the final diff, the risks, and the verification. If it cannot explain the change clearly, that is a sign the implementation may be too broad.",
    prompt:
      "Summarize this change for a pull request. Include what changed, why it changed, how it was tested, and any remaining risks.",
  },
  {
    title: "Document the Reusable Pattern",
    tools: ["Notion", "GitHub Copilot"],
    body:
      "The best AI coding workflows compound. Save useful prompts, repo conventions, review checklists, testing commands, and examples of good diffs so future AI sessions start with better context.",
  },
]

const stack = [
  ["Planning", "Claude or ChatGPT"],
  ["Editor agent", "Cursor or Windsurf"],
  ["Terminal agent", "Claude Code"],
  ["Autocomplete and GitHub workflow", "GitHub Copilot"],
  ["Repo memory", "README, AGENTS.md, CLAUDE.md, rules files"],
  ["Testing", "Project test runner, lint, typecheck, build"],
  ["Review", "GitHub PRs, Copilot code review, human review"],
  ["Deployment", "CI, preview environments, production smoke tests"],
]

const guardrails = [
  {
    title: "Keep Tasks Small",
    body: "AI agents perform better when the goal is one bug, one component, one feature slice, or one refactor with clear boundaries.",
  },
  {
    title: "Make Context Explicit",
    body: "Point the assistant at the right files, constraints, commands, and existing patterns. Do not make it infer the whole system from scratch.",
  },
  {
    title: "Trust Tests More Than Narration",
    body: "A polished explanation does not prove correctness. The stack needs automated checks and manual review on every meaningful change.",
  },
  {
    title: "Avoid Drive-By Refactors",
    body: "AI often tries to improve nearby code. Unless the task requires it, keep unrelated cleanup out of the diff.",
  },
]

const prompts = [
  {
    title: "Feature Planning",
    body:
      "Given this feature request, identify the smallest useful implementation. List affected files, data model changes, UI states, edge cases, and tests.",
  },
  {
    title: "Bug Investigation",
    body:
      "Trace this bug through the codebase. Explain the likely root cause, show the minimal fix, and name any behavior that could regress.",
  },
  {
    title: "Test Generation",
    body:
      "Based on this implementation, propose focused tests that cover the risky behavior without over-testing implementation details.",
  },
  {
    title: "PR Review",
    body:
      "Review this diff as a senior engineer. Lead with bugs, security issues, regressions, missing tests, and unclear ownership boundaries.",
  },
]

function CheckList({ items }: { items: string[] }) {
  return (
    <div className="mt-5 grid gap-2 text-sm md:grid-cols-2">
      {items.map((item) => (
        <p key={item} className="flex gap-2">
          <Check className="mt-0.5 size-4 shrink-0" />
          <span>{item}</span>
        </p>
      ))}
    </div>
  )
}

export function AiCodingStackWorkflow() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Button asChild variant="ghost" className="mb-10 px-0">
          <Link href="/workflows">
            <ArrowLeft />
            Workflows
          </Link>
        </Button>

        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Workflow
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          AI Coding Stack (2026): How to Plan, Build, Review, and Ship with AI
        </h1>

        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            The best AI coding stack is not one magic editor. It is a workflow:
            plan the task, let AI make a focused pass, review the diff, run real
            checks, and ship only what you understand.
          </p>
          <p>
            Cursor, Windsurf, Claude Code, GitHub Copilot, ChatGPT, and Claude
            can all help, but they work best when each tool has a job instead
            of every tool trying to do everything.
          </p>
          <p>
            This is the coding workflow I would use for product teams, solo
            builders, and developers who want AI speed without losing codebase
            control.
          </p>
        </div>

        <ArticleCta tool="Cursor" href={toolLinks.cursor} placement="top" />

        <section className="mt-12 grid gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-lg border bg-card p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Step {index + 1}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">{step.title}</h2>
                </div>
                {step.tools.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {step.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border px-3 py-1 text-sm text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              <p className="mt-5 leading-7 text-muted-foreground">
                {step.body}
              </p>

              {step.checklist ? <CheckList items={step.checklist} /> : null}

              {step.prompt ? (
                <div className="mt-5 rounded-lg border bg-background p-4">
                  <p className="text-sm font-medium text-muted-foreground">
                    Example prompt
                  </p>
                  <p className="mt-3 text-sm leading-6">{step.prompt}</p>
                </div>
              ) : null}
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">
            The Modern AI Coding Stack
          </h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            A strong setup separates thinking, editing, terminal work, review,
            and deployment instead of asking one assistant to own the entire
            software lifecycle.
          </p>
          <div className="mt-5 divide-y rounded-lg border">
            {stack.map(([stage, tools]) => (
              <div
                key={stage}
                className="grid gap-2 px-4 py-4 text-sm md:grid-cols-[0.8fr_1.2fr]"
              >
                <span className="font-medium">{stage}</span>
                <span className="text-muted-foreground">{tools}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Guardrails That Matter</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {guardrails.map((guardrail) => (
              <div
                key={guardrail.title}
                className="rounded-lg border bg-card p-5"
              >
                <h3 className="font-semibold">{guardrail.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {guardrail.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <ArticleCta tool="Claude Code" href={toolLinks.claude} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Prompts Worth Saving</h2>
          <div className="mt-5 grid gap-4">
            {prompts.map((prompt) => (
              <div key={prompt.title} className="rounded-lg border bg-background p-4">
                <h3 className="font-semibold">{prompt.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {prompt.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Final Thoughts</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            AI coding assistants are most valuable when they compress the boring
            parts of development without removing engineering judgment. The
            point is not to accept larger diffs. The point is to reach better
            diffs faster.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Treat AI like a fast junior pair programmer with strange memory:
            give it clear context, ask for small changes, verify everything, and
            keep the final responsibility with the human who ships the code.
          </p>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Use ChatGPT or Claude to plan, Cursor or Windsurf to edit, Claude
            Code for terminal-heavy repo work, GitHub Copilot for GitHub-native
            review, and your test suite as the final judge.
          </p>
        </section>

        <ArticleCta tool="Cursor" href={toolLinks.cursor} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
