import Link from "next/link"
import { ArrowLeft, Check, X } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const useCases = [
  "Inline code completion",
  "Explaining unfamiliar code",
  "Small refactors inside the IDE",
  "Writing tests and fixtures",
  "Pull request summaries",
  "GitHub-centered development",
]

const strengths = [
  {
    title: "It Fits Existing Developer Habits",
    body: "Copilot Pro is strongest when you already live in GitHub, VS Code, JetBrains, or a terminal workflow. It adds useful assistance without forcing a new editor or a new way to manage repositories.",
  },
  {
    title: "Autocomplete Is Still Excellent",
    body: "The everyday value is still the quiet stuff: completing repetitive code, suggesting test cases, filling obvious branches, and keeping you in flow while you write.",
  },
  {
    title: "Chat Is Useful for Local Questions",
    body: "Copilot Chat is helpful for explaining functions, suggesting targeted changes, generating examples, and turning vague implementation questions into a concrete next step.",
  },
  {
    title: "GitHub Integration Matters",
    body: "Because Copilot is tied to GitHub, it has a natural advantage around pull requests, repository work, issue context, code review workflows, and teams that already standardize on GitHub.",
  },
]

const pros = [
  "Best-in-class convenience for GitHub users",
  "Strong inline completions",
  "Works across common developer tools",
  "Helpful chat, edit, and agent modes",
  "Low-friction upgrade for individual developers",
]

const cons = [
  "Less transformative than full AI-native editors",
  "Advanced usage and model choices can affect billing",
  "Large changes still require careful review",
  "Repository context can feel narrower than dedicated coding agents",
]

export function GitHubCopilotProReview() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Button
          asChild
          variant="outline"
          className="mb-10 rounded-none border-orange-900/20 bg-transparent font-semibold hover:bg-accent"
        >
          <Link href="/reviews">
            <ArrowLeft />
            Reviews
          </Link>
        </Button>

        <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-primary">
          Review
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          GitHub Copilot Pro Review (2026): Still the Easiest AI Coding
          Assistant to Recommend
        </h1>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="border border-orange-900/20 bg-[#fff7d8] px-3 py-1.5 text-sm font-semibold">
            8.5/10 rating
          </span>
          <span className="border border-orange-900/20 bg-card px-3 py-1.5 text-sm font-medium text-muted-foreground">
            Best for GitHub-first developers
          </span>
        </div>

        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            GitHub Copilot Pro is no longer the only serious AI coding
            assistant, but it remains one of the easiest to recommend. It is
            fast, familiar, widely supported, and deeply connected to the
            workflows many developers already use every day.
          </p>
          <p>
            The best reason to choose Copilot Pro is not that it feels the most
            futuristic. It is that it disappears into normal development work.
            It helps write code, explain code, suggest tests, review changes,
            and answer questions without asking you to move your whole workflow
            into a new product.
          </p>
          <p>
            If you want an AI assistant that feels native to GitHub and your
            current IDE, Copilot Pro is still a strong default.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            What is GitHub Copilot Pro?
          </h2>
          <div className="mt-4 space-y-4 leading-7 text-muted-foreground">
            <p>
              GitHub Copilot Pro is the individual paid plan for GitHub
              Copilot. It brings AI code completion, chat, edit workflows,
              agent-style assistance, pull request help, and model selection
              into developer tools and GitHub itself.
            </p>
            <p>
              In practice, Copilot Pro works best as an always-on development
              layer. It is useful while writing code, reviewing a branch,
              exploring a repository, drafting tests, or asking why a function
              behaves the way it does.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            What I Use Copilot Pro For
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <div key={useCase} className="border border-orange-900/15 bg-card p-4">
                <p className="text-sm font-medium">{useCase}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 border-l-4 border-primary bg-[#fff7d8] p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">
              Example prompt
            </p>
            <p className="mt-3 leading-7">
              Read this function and suggest a smaller version with the same
              behavior. Point out any edge cases I should test.
            </p>
          </div>
          <p className="mt-5 leading-7 text-muted-foreground">
            Copilot Pro is most valuable when the task is close to the code in
            front of you. It is less impressive as a strategic planner, but very
            useful as a practical development companion.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            What Copilot Pro Does Well
          </h2>
          <div className="mt-5 grid gap-4">
            {strengths.map((strength) => (
              <div key={strength.title} className="border border-orange-900/15 bg-card p-5">
                <h3 className="font-semibold">{strength.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {strength.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Where Copilot Pro Falls Short
          </h2>
          <div className="mt-4 space-y-4 leading-7 text-muted-foreground">
            <p>
              Copilot Pro is not always the strongest tool for broad multi-file
              implementation. AI-native editors and dedicated coding agents can
              feel more ambitious when you want to delegate a larger slice of a
              feature and review the diff afterward.
            </p>
            <p>
              The billing model is also becoming more nuanced. GitHub is moving
              Copilot toward usage-based billing on June 1, 2026, and advanced
              features can consume usage differently depending on the model and
              workflow. That does not make Copilot Pro a bad value, but it does
              make spend awareness more important for heavy users.
            </p>
            <p>
              Most importantly, Copilot still needs supervision. It can suggest
              outdated APIs, skip hidden requirements, or produce code that
              looks plausible before tests expose the issue.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Copilot Pro vs Cursor
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="border border-orange-900/15 bg-card p-5">
              <h3 className="font-semibold">Choose Copilot Pro if</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                You want AI assistance inside your current IDE, you use GitHub
                heavily, and you value low setup over an AI-native editor.
              </p>
            </div>
            <div className="border border-orange-900/15 bg-card p-5">
              <h3 className="font-semibold">Choose Cursor if</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                You want deeper codebase-aware editing, stronger multi-file
                workflows, and are comfortable moving into a dedicated editor.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Who Should Use It?</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Copilot Pro is a great fit for individual developers, students,
            founders, consultants, and technical product builders who already
            work in GitHub-centered environments. It is especially easy to
            justify if you write code several times per week and want
            assistance without changing editors.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Copilot Pro includes paid individual access to Copilot features, but
            model usage, included allowances, and overage behavior can change.
            Review GitHub&apos;s current plan and billing pages before relying
            on a specific allowance for heavy chat, agent, or review workflows.
          </p>
        </section>

        <section className="mt-12 border border-orange-900/20 bg-card p-6">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
            Final call
          </p>
          <h2 className="mt-2 text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            GitHub Copilot Pro is not the flashiest AI coding product anymore,
            but it may still be the most practical first upgrade for many
            developers. Its biggest advantage is convenience: it lives where the
            code, pull requests, and developer habits already are.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            If you want the most aggressive AI coding workflow, compare it with
            Cursor, Claude Code, and other agent-first tools. If you want a
            reliable assistant that improves everyday coding with minimal
            friction, Copilot Pro remains an excellent choice.
          </p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="border border-orange-900/20 bg-[#fff7d8] p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">
              What works
            </p>
            <h2 className="mt-2 text-xl font-semibold">Pros</h2>
            <div className="mt-4 grid gap-3">
              {pros.map((pro) => (
                <p key={pro} className="flex gap-2 text-sm leading-6">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {pro}
                </p>
              ))}
            </div>
          </div>
          <div className="border border-orange-900/20 bg-card p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">
              Watch-outs
            </p>
            <h2 className="mt-2 text-xl font-semibold">Cons</h2>
            <div className="mt-4 grid gap-3">
              {cons.map((con) => (
                <p key={con} className="flex gap-2 text-sm leading-6">
                  <X className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                  {con}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 border-l-4 border-primary bg-[#fff7d8] p-6">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
            Bottom line
          </p>
          <h2 className="mt-2 text-xl font-semibold">
            The low-friction coding upgrade.
          </h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            GitHub Copilot Pro is the safest AI coding assistant recommendation
            for developers who want useful help inside their existing GitHub and
            IDE workflow.
          </p>
        </section>

        <ArticleCta
          tool="GitHub Copilot"
          href={toolLinks.githubCopilot}
          placement="bottom"
        />

        <GiscusComments />
      </article>
    </main>
  )
}
