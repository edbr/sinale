import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const steps = [
  {
    title: "Prepare the Source Material",
    tools: ["Granola", "Fathom", "Notion"],
    body:
      "Start with clean transcripts, notes, and metadata. Each interview should include who you spoke with, their role, customer segment, date, research goal, and any important context about their product usage.",
    checklist: [
      "Transcript",
      "Participant role",
      "Customer segment",
      "Interview date",
      "Research question",
      "Product context",
    ],
  },
  {
    title: "Extract Atomic Observations",
    tools: ["Claude", "ChatGPT"],
    body:
      "Ask AI to break each interview into small observations before looking for themes. This keeps the synthesis grounded and prevents the model from jumping too quickly to broad conclusions.",
    prompt:
      "Extract atomic observations from this interview. For each observation, include the user quote, context, related product area, and whether it is a pain point, goal, workaround, objection, or request.",
  },
  {
    title: "Separate Quotes from Interpretation",
    tools: ["Claude", "Notion"],
    body:
      "Keep direct quotes and AI interpretation in different fields. Quotes are evidence. Themes, labels, and implications are interpretation. Mixing them makes research look more certain than it is.",
    checklist: [
      "Direct quote",
      "Observation",
      "Theme label",
      "Confidence",
      "Source interview",
      "Open question",
    ],
  },
  {
    title: "Cluster Themes Across Interviews",
    tools: ["Claude", "ChatGPT"],
    body:
      "Once observations are extracted, ask AI to group similar patterns across interviews. Good clusters should show frequency, representative quotes, affected personas or segments, and contradictions.",
    prompt:
      "Group these observations into research themes. For each theme, include frequency, supporting quotes, affected segments, contradictions, severity, and product implications.",
  },
  {
    title: "Identify Opportunity Areas",
    tools: ["Claude", "Notion"],
    body:
      "Turn themes into opportunity areas only after the evidence is clear. An opportunity should describe the user need, why it matters, where the product currently fails, and what outcome would improve.",
    checklist: [
      "User need",
      "Current pain",
      "Business impact",
      "Product gap",
      "Desired outcome",
      "Evidence strength",
    ],
  },
  {
    title: "Create Follow-Up Questions",
    tools: ["ChatGPT", "Claude"],
    body:
      "The best synthesis creates sharper questions for the next round of research. Ask AI to identify what remains unclear, which assumptions need testing, and which users you should interview next.",
    prompt:
      "Based on these themes, generate follow-up research questions. Separate questions for users, questions for internal teams, and assumptions we should validate with product data.",
  },
  {
    title: "Turn Findings into a Research Readout",
    tools: ["Notion", "Claude"],
    body:
      "Use AI to draft a readout, but keep the structure simple: what we asked, who we interviewed, what we learned, where evidence is strong, what is uncertain, and what we recommend next.",
    checklist: [
      "Research goal",
      "Participants",
      "Top themes",
      "Key quotes",
      "Opportunity areas",
      "Recommendations",
    ],
  },
  {
    title: "Review with Product, Design, and Support",
    tools: ["Notion", "Slack"],
    body:
      "Share the synthesis with people who know the customer. Ask them where the findings match reality, where they conflict with other evidence, and which recommendations feel actionable.",
  },
]

const stack = [
  ["Interview capture", "Granola, Fathom, Avoma"],
  ["Transcript cleanup", "Claude or ChatGPT"],
  ["Research repository", "Notion or Airtable"],
  ["Observation extraction", "Claude"],
  ["Theme clustering", "Claude or ChatGPT"],
  ["Readout drafting", "Notion and Claude"],
  ["Product translation", "Figma, Linear, Notion"],
  ["Validation", "Analytics, support tags, follow-up interviews"],
]

const guardrails = [
  {
    title: "Never Synthesize Without Quotes",
    body: "Every theme should be traceable to participant language. If there are no quotes, treat the point as a hypothesis.",
  },
  {
    title: "Do Not Count Mentions Blindly",
    body: "One severe pain from a strategic customer can matter more than five casual mentions from the wrong segment.",
  },
  {
    title: "Keep Contradictions Visible",
    body: "If users disagree, show the disagreement. Hiding contradictions makes the readout cleaner but less useful.",
  },
  {
    title: "Separate Research from Roadmap",
    body: "Interview synthesis should inform product decisions, not automatically become a feature list.",
  },
]

const prompts = [
  {
    title: "Atomic Notes",
    body:
      "Extract atomic observations from this transcript. Include quote, context, category, severity, segment, and source timestamp if available.",
  },
  {
    title: "Theme Clustering",
    body:
      "Cluster these observations into themes. Include supporting evidence, contradictions, confidence level, and product implications.",
  },
  {
    title: "Opportunity Areas",
    body:
      "Convert these themes into opportunity areas. For each one, state the user need, current pain, desired outcome, and evidence strength.",
  },
  {
    title: "Research Readout",
    body:
      "Draft a concise research readout with research goal, participants, top themes, quotes, open questions, and recommended next steps.",
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

export function CustomerInterviewSynthesisAiWorkflow() {
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
        <h1 className="max-w-3xl text-3xl font-medium tracking-tight md:text-4xl">
          Customer Interview Synthesis with AI (2026): From Transcripts to
          Product Decisions
        </h1>

        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            AI is excellent at organizing customer interviews, but only if you
            force it to stay close to the evidence. The goal is not to produce a
            prettier summary. The goal is to make better product decisions from
            what users actually said.
          </p>
          <p>
            A good synthesis workflow separates quotes, observations, themes,
            opportunities, assumptions, and recommendations. That separation is
            what keeps the research honest.
          </p>
          <p>
            This workflow is for product managers, researchers, designers, and
            founders turning interviews into themes, quotes, opportunity areas,
            and follow-up questions.
          </p>
        </div>

        <ArticleCta tool="Granola" href={toolLinks.granola} placement="top" />

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
            The AI Interview Synthesis Stack
          </h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            The stack should preserve source evidence while making synthesis
            faster. Keep transcripts, quotes, and observations connected all the
            way to the final recommendation.
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
            The best interview synthesis does not make the research sound more
            certain than it is. It shows what users said, where patterns repeat,
            where users disagree, and what the team still needs to learn.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            AI can save hours of sorting, tagging, and drafting. But the final
            judgment still belongs to the team: what matters, what to build,
            what to ignore, and what to validate next.
          </p>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Use AI to extract observations, cluster themes, preserve quotes, and
            draft readouts. Keep evidence attached to every claim so the team
            can trust the synthesis.
          </p>
        </section>

        <ArticleCta tool="Granola" href={toolLinks.granola} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
