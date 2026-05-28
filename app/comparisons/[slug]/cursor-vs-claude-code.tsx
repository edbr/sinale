import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Beginner Friendliness", "Cursor"],
  ["Code Generation", "Tie"],
  ["Refactoring", "Cursor"],
  ["Architecture Discussions", "Claude Code"],
  ["Repository Understanding", "Claude Code"],
  ["Multi-File Editing", "Cursor"],
  ["Workflow Integration", "Cursor"],
  ["Complex Problem Solving", "Claude Code"],
  ["Speed to Production", "Cursor"],
  ["Overall Recommendation", "Cursor"],
]

const cursorWins = [
  {
    title: "Development Workflow",
    body: "Cursor's biggest advantage is integration. Writing code, reviewing changes, running edits, navigating files, and accepting suggestions all happen inside the editor with very little context switching.",
  },
  {
    title: "Multi-File Refactoring",
    body: "Cursor excels at broad edits like renaming an onboarding flow, converting forms to React Hook Form, or migrating components to shadcn/ui.",
  },
  {
    title: "Speed",
    body: "For implementation-focused work, Cursor generally feels faster. The loop is short: prompt, review, accept, ship.",
  },
  {
    title: "Product Builder Experience",
    body: "For founders, indie hackers, and product designers who code, Cursor often provides the most practical experience because it turns ideas into working software quickly.",
  },
]

const claudeWins = [
  {
    title: "Understanding Complex Systems",
    body: "Claude Code is excellent at explaining authentication, identifying architectural risks, and tracing state or data flows across a repository.",
  },
  {
    title: "Debugging Difficult Problems",
    body: "For state management issues, race conditions, data synchronization problems, and performance bottlenecks, Claude often reasons more methodically.",
  },
  {
    title: "Architecture Discussions",
    body: "Claude shines when comparing server actions and API routes, modeling multi-tenant permissions, or evaluating tradeoffs in a technical design.",
  },
  {
    title: "Learning New Codebases",
    body: "When onboarding to unfamiliar projects, Claude's explanations can be more useful than simply reading files manually.",
  },
]

export function CursorVsClaudeCodeComparison() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Button
          asChild
          variant="outline"
          className="mb-10 rounded-none border-orange-900/20 bg-transparent font-semibold hover:bg-accent"
        >
          <Link href="/comparisons">
            <ArrowLeft />
            Comparisons
          </Link>
        </Button>

        <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-primary">
          Comparison
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Cursor vs Claude Code (2026): Which AI Coding Assistant Should You
          Use?
        </h1>

        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            AI coding tools have evolved from autocomplete helpers into active
            collaborators capable of generating code, refactoring projects,
            debugging issues, and building entire applications.
          </p>
          <p>
            Two of the strongest options today are Cursor and Claude Code. Both
            are excellent. Both can dramatically improve developer productivity.
            But they solve slightly different problems and fit different
            workflows.
          </p>
          <p>
            After using both to build Next.js applications, prototype products,
            debug code, and explore repositories, my conclusion is simple:
            Cursor is the better development environment. Claude Code is the
            better reasoning engine.
          </p>
        </div>

        <section className="mt-12 border border-orange-900/20 bg-[#fff7d8] p-6 shadow-[0_12px_40px_rgba(51,33,22,0.08)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                Decision guide
              </p>
              <h2 className="mt-2 text-2xl font-semibold">Quick Verdict</h2>
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              Cursor for shipping. Claude Code for reasoning.
            </p>
          </div>
          <div className="mt-5 divide-y divide-orange-900/15 border border-orange-900/20 bg-background/70">
            {verdictRows.map(([category, winner]) => (
              <div
                key={category}
                className="grid grid-cols-[1fr_auto] gap-4 px-4 py-3 text-sm"
              >
                <span className="text-muted-foreground">{category}</span>
                <span className="font-semibold">{winner}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
            <p className="border border-orange-900/20 bg-card p-4">
              <span className="font-semibold">Best for most developers:</span>{" "}
              Cursor
            </p>
            <p className="border border-orange-900/20 bg-card p-4">
              <span className="font-semibold">Best for deep reasoning:</span>{" "}
              Claude Code
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="border border-orange-900/15 bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Cursor?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Cursor is an AI-first code editor built on top of VS Code. It
              feels like a modern IDE that happens to have powerful AI built
              directly into it.
            </p>
            <div className="mt-5 grid gap-2 text-sm">
              {[
                "Deep codebase awareness",
                "Multi-file edits",
                "Inline code generation",
                "Agent mode",
                "Repository navigation",
                "Integrated development workflow",
              ].map((item) => (
                <p key={item} className="flex gap-2">
                  <Check className="size-4 shrink-0" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="border border-orange-900/15 bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Claude Code?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Claude Code is Anthropic&apos;s agentic coding experience built
              around the Claude model family. It feels more like a senior
              engineer reviewing a codebase than an autocomplete tool.
            </p>
            <div className="mt-5 grid gap-2 text-sm">
              {[
                "Code understanding",
                "Repository exploration",
                "Technical reasoning",
                "Planning",
                "Architecture",
                "Complex engineering tasks",
              ].map((item) => (
                <p key={item} className="flex gap-2">
                  <Check className="size-4 shrink-0" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Cursor Wins</h2>
          <div className="mt-5 grid gap-4">
            {cursorWins.map((item) => (
              <div key={item.title} className="border border-orange-900/15 bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Claude Code Wins</h2>
          <div className="mt-5 grid gap-4">
            {claudeWins.map((item) => (
              <div key={item.title} className="border border-orange-900/15 bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Cursor vs Claude Code for Next.js
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="border border-orange-900/15 bg-card p-5">
              <h3 className="font-semibold">Cursor is better for</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Creating components, generating pages, refactoring UI, building
                features, and implementing designs.
              </p>
            </div>
            <div className="border border-orange-900/15 bg-card p-5">
              <h3 className="font-semibold">Claude Code is better for</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Architecture decisions, data flow analysis, performance
                discussions, debugging edge cases, and explaining unfamiliar
                code.
              </p>
            </div>
          </div>
          <p className="mt-5 leading-7 text-muted-foreground">
            If I need a dashboard built today, I choose Cursor. If I need to
            understand why the dashboard architecture is failing, I choose
            Claude.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Which Produces Better Code?</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            This is closer than many people think. Both generate high-quality
            code when prompted effectively. The difference is not code quality.
            The difference is workflow.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="border border-orange-900/15 bg-card p-5">
              <h3 className="font-semibold">Cursor optimizes</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Prompt, generate, edit, ship.
              </p>
            </div>
            <div className="border border-orange-900/15 bg-card p-5">
              <h3 className="font-semibold">Claude optimizes</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Understand, analyze, recommend, implement.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="border border-orange-900/15 bg-card p-5">
            <h2 className="text-2xl font-semibold">Who Should Use Cursor?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Cursor is ideal for software engineers, startup founders, product
              designers who code, indie hackers, frontend developers, and
              full-stack developers. If your goal is shipping features quickly,
              Cursor is difficult to beat.
            </p>
          </div>
          <div className="border border-orange-900/15 bg-card p-5">
            <h2 className="text-2xl font-semibold">
              Who Should Use Claude Code?
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Claude Code is ideal for senior engineers, platform teams,
              technical architects, backend developers, developers working in
              large repositories, and teams solving complex technical problems.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">My Workflow</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Today I use both. Claude Code handles architecture, planning,
            repository analysis, debugging, and technical reviews. Cursor
            handles building, refactoring, implementation, and daily
            development. Claude helps determine what should be built. Cursor
            helps build it.
          </p>
        </section>

        <section className="mt-12 border border-orange-900/20 bg-card p-6">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
            Final call
          </p>
          <h2 className="mt-2 text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            For most developers, Cursor is the better standalone product. The
            editor integration, multi-file editing, and implementation speed
            make it one of the highest-leverage tools available today.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude Code, however, may be the stronger technical thinker. Its
            ability to analyze systems, explain code, and reason through
            difficult engineering challenges is genuinely impressive.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="border border-orange-900/15 bg-background p-4">
              <span className="font-semibold">Cursor Rating:</span> 9/10. Best
              for implementation and daily coding.
            </p>
            <p className="border border-orange-900/15 bg-background p-4">
              <span className="font-semibold">Claude Code Rating:</span> 9/10.
              Best for reasoning, architecture, and technical analysis.
            </p>
          </div>
        </section>

        <section className="mt-8 border-l-4 border-primary bg-[#fff7d8] p-6">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
            Bottom line
          </p>
          <h2 className="mt-2 text-xl font-semibold">Use both if you can.</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Cursor is the AI-powered workshop where software gets built. Claude
            Code is the senior engineer helping you decide what to build and
            why. The strongest workflow isn&apos;t choosing between them. It is
            knowing when to use each.
          </p>
        </section>


        <ArticleCta tool="Cursor" href={toolLinks.cursor} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
