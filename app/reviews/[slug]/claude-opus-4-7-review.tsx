import Link from "next/link"
import { ArrowLeft, Check, X } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const useCases = [
  "Complex engineering planning",
  "Agentic coding workflows",
  "Large document analysis",
  "Professional writing and editing",
  "Design critique and product review",
  "Long-running reasoning tasks",
]

const strengths = [
  {
    title: "Harder Coding Tasks",
    body: "Opus 4.7 is best suited for difficult engineering work: architecture tradeoffs, multi-step debugging, repository reasoning, migration planning, and tasks where the model needs to check its own plan.",
  },
  {
    title: "Better Long-Running Work",
    body: "The model feels more useful when a task has many moving parts. It is less likely to give a shallow first answer and more likely to structure the work into a plan, verification steps, and a clear recommendation.",
  },
  {
    title: "High-Quality Professional Output",
    body: "Claude was already strong at writing. Opus 4.7 keeps that strength while improving work that mixes reasoning with polish, such as technical docs, product memos, slide outlines, UI critique, and executive summaries.",
  },
  {
    title: "Large Context Workflows",
    body: "With a very large context window, Opus 4.7 is built for workflows that need many files, long documents, research packets, transcripts, or specifications in the same conversation.",
  },
]

const pros = [
  "Excellent for complex reasoning",
  "Strongest Claude option for agentic coding",
  "Handles long context well",
  "High-quality writing and analysis",
  "Useful for technical and product teams",
]

const cons = [
  "More expensive than Sonnet for API usage",
  "Not always necessary for everyday prompts",
  "Moderate latency compared with lighter models",
  "Still needs source checking for current facts",
]

export function ClaudeOpus47Review() {
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
          Claude Opus 4.7 Review (2026): Anthropic&apos;s New Model for Hard
          Coding and Complex Work
        </h1>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full border px-3 py-1 text-sm text-muted-foreground">
            Rating: 9.4/10
          </span>
          <span className="rounded-full border px-3 py-1 text-sm text-muted-foreground">
            Best for complex reasoning and coding
          </span>
        </div>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Claude Opus 4.7 is Anthropic&apos;s newest generally available
            flagship model, released on April 16, 2026. It is aimed at the
            hardest parts of modern AI work: advanced software engineering,
            agentic coding, long-context analysis, technical reasoning, and
            professional output that needs both judgment and polish.
          </p>
          <p>
            The short version: Opus 4.7 is the Claude model I would reach for
            when the cost of a shallow answer is high. It is not the model every
            prompt needs, but it is the model I would choose for the hardest
            prompts.
          </p>
          <p>
            For daily writing, research, and lighter coding, Claude Sonnet 4.6
            may be the better value. For complex work where the model needs to
            reason carefully and stay coherent across a long task, Opus 4.7 is
            the more serious tool.
          </p>
        </div>

        <ArticleCta tool="Claude" href={toolLinks.claude} placement="top" />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What is Claude Opus 4.7?</h2>
          <div className="mt-4 space-y-4 leading-7 text-muted-foreground">
            <p>
              Claude Opus 4.7 is a large language model from Anthropic. It is
              positioned as the company&apos;s most capable generally available
              model for complex reasoning and agentic coding, with support for
              text and image input, multilingual work, vision, and a large
              context window.
            </p>
            <p>
              In real workflow terms, that means it is built for the kind of
              work where you would rather spend more compute to get a more
              careful result: deep code changes, complicated planning, document
              analysis, and professional deliverables that require taste.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            What I Would Use Opus 4.7 For
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
              Review this repository plan, identify the highest-risk
              assumptions, propose a safer implementation path, and define the
              tests that should fail before the fix.
            </p>
          </div>
          <p className="mt-5 leading-7 text-muted-foreground">
            The model makes the most sense when the task has hidden traps. If
            you only need a quick summary or a simple rewrite, it is probably
            overkill.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What Opus 4.7 Does Well</h2>
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
          <h2 className="text-2xl font-semibold">
            Where Opus 4.7 Falls Short
          </h2>
          <div className="mt-4 space-y-4 leading-7 text-muted-foreground">
            <p>
              Opus 4.7 is not automatically the right model for every Claude
              task. For everyday writing, lightweight coding help, summaries,
              and quick analysis, Sonnet is likely faster and more economical.
            </p>
            <p>
              It also still requires verification. Stronger reasoning does not
              eliminate hallucinations, outdated assumptions, missing context,
              or flawed business logic. I would trust Opus 4.7 with harder
              drafts and deeper plans, but I would still review sources, run
              tests, and inspect generated code.
            </p>
            <p>
              The biggest downside is cost. In API workflows, Opus-class models
              are priced above Sonnet-class models, so teams should reserve it
              for work where the improved answer quality matters.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Opus 4.7 vs Sonnet 4.6
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Choose Opus 4.7 for</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Complex reasoning, difficult coding work, long-running agent
                tasks, architecture planning, and high-stakes professional
                outputs.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Choose Sonnet 4.6 for</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Daily chat, routine writing, most research synthesis,
                cost-sensitive API usage, and fast back-and-forth iteration.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Who Should Use It?</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude Opus 4.7 is best for engineers, technical founders, product
            leaders, analysts, consultants, and teams using Claude for work that
            has meaningful complexity. If you mostly need quick answers, use a
            lighter model. If you need the strongest generally available Claude
            model for hard work, Opus 4.7 is the one to evaluate first.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Anthropic lists Opus 4.7 at the same API price level as Opus 4.6:
            higher than Sonnet and aimed at premium workloads. For teams, the
            practical pricing rule is simple: use Sonnet by default, then route
            harder tasks to Opus when accuracy, planning depth, or coding
            reliability matters more than cost.
          </p>
        </section>

        <ArticleCta tool="Claude" href={toolLinks.claude} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude Opus 4.7 is not a casual upgrade. It is a model for work that
            benefits from deeper reasoning: difficult coding, long context,
            agentic workflows, and polished professional output.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The best way to use it is selectively. Keep Sonnet for speed and
            volume. Reach for Opus 4.7 when the problem is thorny enough that a
            better first pass saves real review time.
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
            Claude Opus 4.7 is the Claude model to use when the task is too
            complex, too long, or too important for a cheaper quick pass.
          </p>
        </section>

        <ArticleCta tool="Claude" href={toolLinks.claude} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
