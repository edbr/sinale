import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const steps = [
  {
    title: "Export the Current Roadmap",
    tools: ["Linear", "Notion"],
    body:
      "Start with the actual roadmap, not a summary from memory. Pull initiatives, themes, committed work, candidate features, owners, dates, dependencies, customer evidence, and open questions into one review doc.",
    checklist: [
      "Initiatives",
      "Candidate features",
      "Owners",
      "Target dates",
      "Customer evidence",
      "Dependencies",
    ],
  },
  {
    title: "Clarify the Strategy",
    tools: ["Claude", "ChatGPT"],
    body:
      "AI cannot review a roadmap without knowing what the company is trying to achieve. Add the product strategy, business goals, target segments, constraints, and the bets leadership has already made.",
    prompt:
      "Summarize this product strategy into decision criteria for roadmap review. Include target customers, business goals, constraints, and what tradeoffs the roadmap should favor.",
  },
  {
    title: "Score Each Item Against Evidence",
    tools: ["Claude", "Notion"],
    body:
      "Ask AI to score roadmap items by evidence quality. Separate direct customer evidence, product analytics, sales requests, support pain, strategic bets, and leadership intuition.",
    checklist: [
      "Customer evidence",
      "Usage data",
      "Revenue impact",
      "Support impact",
      "Strategic fit",
      "Confidence level",
    ],
  },
  {
    title: "Find Weak Assumptions",
    tools: ["Claude", "ChatGPT"],
    body:
      "Roadmaps are full of assumptions: users will adopt it, engineering can ship it, sales can sell it, support can handle it, and the market will still care. Use AI to make those assumptions visible.",
    prompt:
      "Review this roadmap and identify the riskiest assumptions. For each one, explain why it matters, what evidence would reduce uncertainty, and what could go wrong.",
  },
  {
    title: "Review Dependencies and Sequencing",
    tools: ["Linear", "Claude"],
    body:
      "A good roadmap is not just a ranked list. Ask AI to identify technical dependencies, design dependencies, GTM dependencies, customer commitments, migration work, and sequencing risks.",
    checklist: [
      "Technical dependencies",
      "Design dependencies",
      "Data dependencies",
      "GTM dependencies",
      "Customer commitments",
      "Migration risks",
    ],
  },
  {
    title: "Compare Effort, Risk, and Payoff",
    tools: ["Claude", "ChatGPT"],
    body:
      "Use AI to create a practical tradeoff table. Do not let it invent estimates, but do ask it to highlight where effort, risk, ambiguity, or payoff looks inconsistent with the roadmap position.",
    prompt:
      "Create a roadmap review table with initiative, evidence strength, expected payoff, effort, risk, dependencies, confidence, and recommendation.",
  },
  {
    title: "Identify Cuts and Swaps",
    tools: ["Claude", "Notion"],
    body:
      "The most valuable roadmap review usually removes work. Ask AI which items should be cut, delayed, merged, split, or reframed based on evidence, dependencies, and strategic fit.",
    checklist: [
      "Cut",
      "Delay",
      "Merge",
      "Split",
      "Validate first",
      "Keep as committed",
    ],
  },
  {
    title: "Write the Roadmap Review Memo",
    tools: ["Claude", "Notion"],
    body:
      "End with a memo that leadership and the product team can actually use: what changed, what should stay, what should move, what is risky, and what validation should happen before planning begins.",
  },
]

const stack = [
  ["Roadmap source", "Linear, Jira, Notion, Productboard"],
  ["Strategy context", "Notion or company strategy doc"],
  ["Evidence synthesis", "Claude or ChatGPT"],
  ["Customer context", "Interview notes, support tickets, CRM notes"],
  ["Usage context", "Product analytics"],
  ["Dependency review", "Engineering planning docs"],
  ["Decision memo", "Notion"],
  ["Execution tracking", "Linear"],
]

const guardrails = [
  {
    title: "Do Not Let AI Invent Priority",
    body: "AI can surface tradeoffs and weak evidence, but the team still owns the strategic decision.",
  },
  {
    title: "Separate Committed Work from Candidate Work",
    body: "A roadmap review should not treat a customer commitment the same way it treats an idea from last week.",
  },
  {
    title: "Make Confidence Visible",
    body: "Low-confidence bets are fine if they are intentional. They are dangerous when they look just as certain as validated work.",
  },
  {
    title: "Cut Scope Before Adding Scope",
    body: "If every review adds more work, the process is broken. Use AI to find what can be simplified, delayed, or removed.",
  },
]

const prompts = [
  {
    title: "Roadmap Audit",
    body:
      "Review this roadmap against the product strategy. Identify strong bets, weak evidence, risky assumptions, dependencies, and sequencing issues.",
  },
  {
    title: "Evidence Scoring",
    body:
      "Score each roadmap item by evidence quality. Separate customer evidence, product data, revenue impact, support pain, and strategic intuition.",
  },
  {
    title: "Sequencing Review",
    body:
      "Identify dependencies and sequencing problems. What needs to happen before each initiative can succeed?",
  },
  {
    title: "Decision Memo",
    body:
      "Write a roadmap review memo with recommended keeps, cuts, delays, validation work, risks, and next planning actions.",
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

export function AiProductRoadmapReviewWorkflow() {
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
          AI Product Roadmap Review (2026): Pressure-Test Priorities Before
          Planning
        </h1>

        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            A roadmap review is not a formatting exercise. It is a pressure
            test: does the roadmap match the strategy, does the evidence support
            the bets, and can the team actually ship the sequence it has
            promised?
          </p>
          <p>
            AI is useful because it can compare roadmap items against evidence,
            assumptions, dependencies, risks, and tradeoffs without getting
            attached to the original plan.
          </p>
          <p>
            This workflow is for product managers and founders who want to
            review roadmap themes before sprint planning, quarterly planning, or
            leadership review.
          </p>
        </div>

        <ArticleCta tool="Linear" href={toolLinks.linear} placement="top" />

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
            The AI Roadmap Review Stack
          </h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            The stack works best when roadmap items stay connected to strategy,
            customer evidence, analytics, dependencies, and execution tracking.
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

        <ArticleCta tool="Claude" href={toolLinks.claude} placement="mid" />

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
            AI is most useful in roadmap review when it acts like a skeptical
            partner: surfacing weak evidence, hidden dependencies, vague
            assumptions, and places where the roadmap is trying to do too much.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The final roadmap still needs human judgment. AI can organize the
            tradeoffs, but product leadership has to decide which bets are worth
            making and which bets should wait.
          </p>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Use AI to compare roadmap items against strategy, evidence,
            dependencies, effort, risk, and confidence. The best review usually
            clarifies what to cut, delay, validate, or sequence differently.
          </p>
        </section>

        <ArticleCta tool="Linear" href={toolLinks.linear} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
