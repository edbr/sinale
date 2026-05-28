import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const steps = [
  {
    title: "Collect Real Evidence First",
    tools: ["Notion", "Granola", "Fathom"],
    body:
      "Good personas start with evidence, not imagination. Pull together interview transcripts, sales notes, support tickets, product analytics, churn reasons, onboarding notes, and customer success call summaries before asking AI to synthesize anything.",
    checklist: [
      "Interview transcripts",
      "Support tickets",
      "Sales call notes",
      "Churn reasons",
      "Product analytics",
      "Customer success notes",
    ],
  },
  {
    title: "Extract Jobs, Pain, and Context",
    tools: ["Claude", "ChatGPT"],
    body:
      "Ask AI to extract what users are trying to accomplish, what blocks them, what triggers their search for a solution, and what context shapes their decisions. This is more useful than demographics.",
    prompt:
      "Analyze these customer notes. Extract user jobs, pain points, triggers, current workarounds, decision criteria, objections, and supporting quotes.",
  },
  {
    title: "Cluster Users by Behavior",
    tools: ["Claude", "ChatGPT"],
    body:
      "Avoid personas based on vague labels like founder, manager, or designer. Cluster by behavior: how people discover the product, how often they use it, what they need to accomplish, and what makes them succeed or fail.",
    checklist: [
      "Frequency of use",
      "Primary workflow",
      "Buying motivation",
      "Skill level",
      "Success pattern",
      "Failure pattern",
    ],
  },
  {
    title: "Draft Persona Candidates",
    tools: ["Claude", "ChatGPT"],
    body:
      "Now ask AI to draft persona candidates from the clusters. Each persona should include goals, jobs, pains, objections, decision criteria, must-have features, risky assumptions, and evidence quotes.",
    prompt:
      "Create three evidence-backed persona candidates from these clusters. For each one, include goals, jobs-to-be-done, pains, buying triggers, objections, product needs, quotes, and confidence level.",
  },
  {
    title: "Score Confidence",
    tools: ["Claude"],
    body:
      "A persona is only useful if the team knows how much to trust it. Add a confidence score based on evidence volume, source quality, recency, and whether multiple sources point to the same pattern.",
    checklist: [
      "How many users support this persona?",
      "Which evidence sources agree?",
      "How recent is the evidence?",
      "What contradicts this persona?",
      "What is still unknown?",
      "What should we validate next?",
    ],
  },
  {
    title: "Turn Personas into Design Implications",
    tools: ["Figma", "Notion", "Claude"],
    body:
      "A persona should change product decisions. Translate each persona into onboarding needs, messaging angles, navigation choices, feature priorities, content requirements, and UX risks.",
    prompt:
      "For each persona, list product design implications: onboarding, navigation, empty states, pricing concerns, feature priorities, messaging, and risks during activation.",
  },
  {
    title: "Review with Customer-Facing Teams",
    tools: ["Notion", "Slack"],
    body:
      "Share the draft personas with sales, support, success, research, and product. Ask where the personas feel true, where they feel too broad, and which customer examples are missing.",
    checklist: [
      "Sales review",
      "Support review",
      "Customer success review",
      "Product review",
      "Research review",
      "Evidence gaps",
    ],
  },
  {
    title: "Keep Personas Alive",
    tools: ["Notion", "Airtable"],
    body:
      "Personas decay. Revisit them after launches, pricing changes, new segments, churn spikes, and major positioning shifts. Treat personas as living research artifacts, not a one-time workshop output.",
  },
]

const stack = [
  ["Call capture", "Granola, Fathom, Avoma"],
  ["Research repository", "Notion or Airtable"],
  ["Synthesis", "Claude or ChatGPT"],
  ["Quantitative context", "Analytics, CRM, support tags"],
  ["Design translation", "Figma and FigJam"],
  ["Team review", "Slack, Notion comments, product reviews"],
  ["Persona storage", "Notion database or research hub"],
  ["Validation", "Customer interviews, surveys, product behavior"],
]

const guardrails = [
  {
    title: "Do Not Invent Demographics",
    body: "Age, income, and personality traits are usually less useful than goals, workflow context, constraints, and buying triggers.",
  },
  {
    title: "Separate Evidence from Interpretation",
    body: "Keep direct quotes and source links close to every persona claim so the team can see what is observed versus inferred.",
  },
  {
    title: "Avoid One Persona per Job Title",
    body: "A product manager and founder may behave similarly in your product, while two founders may have completely different needs.",
  },
  {
    title: "Update After Real Usage",
    body: "Launch data, churn reasons, support patterns, and activation behavior should refine personas after the product changes.",
  },
]

const prompts = [
  {
    title: "Evidence Extraction",
    body:
      "Extract user jobs, pain points, current workarounds, decision criteria, objections, emotional language, and direct quotes from these notes.",
  },
  {
    title: "Behavior Clustering",
    body:
      "Group these users by behavior and product needs. Avoid demographics unless they directly affect the workflow or buying decision.",
  },
  {
    title: "Persona Draft",
    body:
      "Create evidence-backed personas with goals, jobs, pains, triggers, objections, product needs, quotes, confidence level, and open questions.",
  },
  {
    title: "Design Implications",
    body:
      "Translate these personas into product implications for onboarding, navigation, feature priority, messaging, empty states, and activation risks.",
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

export function AiUserPersonaBuilderWorkflow() {
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
          AI User Persona Builder (2026): Create Personas from Real Customer
          Evidence
        </h1>

        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            AI can make personas faster, but it can also make them worse if it
            invents polished stereotypes. The useful workflow is evidence
            first: collect real customer inputs, cluster behavior, draft
            personas, then validate them with people who talk to users.
          </p>
          <p>
            The goal is not a cute one-page profile. The goal is a practical
            decision tool that helps product, design, marketing, sales, and
            success teams understand who they are building for.
          </p>
          <p>
            This workflow is for teams that want personas grounded in research
            notes, support tickets, sales calls, product analytics, and customer
            language.
          </p>
        </div>

        <ArticleCta tool="Claude" href={toolLinks.claude} placement="top" />

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
            The AI Persona Research Stack
          </h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Use AI to organize the evidence, not to replace the evidence. The
            stack works best when source material stays attached to every
            persona claim.
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

        <ArticleCta tool="Notion" href={toolLinks.notionProjects} placement="mid" />

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
            The most useful personas are not fictional characters. They are
            evidence-backed patterns that help a team make better product,
            design, positioning, and onboarding decisions.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            AI makes the synthesis faster, but the quality still depends on the
            quality of the inputs, the honesty of the confidence score, and the
            team&apos;s willingness to update the personas when reality changes.
          </p>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Use AI to extract patterns from real customer evidence. Do not let
            it invent who your users are. A good persona should make the next
            product decision clearer.
          </p>
        </section>

        <ArticleCta tool="Claude" href={toolLinks.claude} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
