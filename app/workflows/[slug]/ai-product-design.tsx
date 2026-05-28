import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const steps = [
  {
    title: "Turn Raw Inputs into a Design Brief",
    tools: ["Claude", "ChatGPT", "Notion"],
    body:
      "Start by converting research notes, support tickets, sales calls, analytics, and stakeholder requests into a clear product-design brief. AI is useful here because it can compress messy context into user goals, constraints, risks, and open questions.",
    checklist: [
      "Primary user",
      "User problem",
      "Current workaround",
      "Business goal",
      "Known constraints",
      "Open questions",
    ],
  },
  {
    title: "Synthesize Research into Patterns",
    tools: ["Claude", "ChatGPT"],
    body:
      "Before drawing screens, ask AI to find repeated themes, objections, user quotes, jobs-to-be-done, emotional triggers, and workflow breakdowns. The goal is not to let AI invent insights. The goal is to organize the evidence you already have.",
    prompt:
      "Analyze these interview notes and group the findings into themes. Include supporting quotes, user jobs, pain points, severity, and design implications.",
  },
  {
    title: "Map the User Flow",
    tools: ["FigJam", "Figma", "ChatGPT"],
    body:
      "Use AI to generate alternative flows before committing to screens. Ask for the shortest path, the safest path, the power-user path, and the failure states. Then choose the flow that best fits the product reality.",
    checklist: [
      "Entry point",
      "First successful action",
      "Empty state",
      "Primary decision point",
      "Error or recovery state",
      "Success state",
    ],
  },
  {
    title: "Generate UI Directions",
    tools: ["Figma AI", "Galileo AI", "Uizard"],
    body:
      "AI UI tools are best for breadth, not final judgment. Generate multiple directions quickly, then critique them against the design system, accessibility, product constraints, and the actual user flow.",
    prompt:
      "Create three dashboard layout directions for a B2B analytics product. Prioritize scanability, clear hierarchy, filters, empty states, and fast comparison between metrics.",
  },
  {
    title: "Refine Copy and Microcopy",
    tools: ["Claude", "ChatGPT"],
    body:
      "Product design is not just layout. Use AI to generate button labels, helper text, empty-state copy, error messages, onboarding text, and confirmation states. Then edit for clarity and product voice.",
    checklist: [
      "Button labels",
      "Empty states",
      "Form helper text",
      "Validation messages",
      "Success messages",
      "Onboarding prompts",
    ],
  },
  {
    title: "Stress-Test the Prototype",
    tools: ["Figma", "Claude"],
    body:
      "Before sharing the design, ask AI to review the prototype like a skeptical product designer. It should look for unclear hierarchy, missing states, accessibility issues, risky assumptions, and places where the flow asks too much from the user.",
    prompt:
      "Review this product flow. Identify confusing steps, missing states, accessibility risks, weak information hierarchy, and questions I should answer before handoff.",
  },
  {
    title: "Prepare Developer Handoff",
    tools: ["Figma", "Cursor", "GitHub Copilot"],
    body:
      "AI can help translate design intent into implementation notes, component requirements, edge cases, and acceptance criteria. This makes handoff less about explaining pixels and more about explaining behavior.",
    checklist: [
      "Component names",
      "Responsive behavior",
      "Loading states",
      "Error states",
      "Data requirements",
      "Acceptance criteria",
    ],
  },
  {
    title: "Close the Loop After Build",
    tools: ["Figma", "Notion", "Claude"],
    body:
      "After engineering ships the feature, compare the implementation against the design intent. Capture product gaps, visual drift, copy changes, UX debt, and follow-up experiments while the context is still fresh.",
  },
]

const stack = [
  ["Research synthesis", "Claude or ChatGPT"],
  ["Product brief", "Notion"],
  ["Flows and workshops", "FigJam"],
  ["UI design", "Figma"],
  ["AI UI exploration", "Figma AI, Galileo AI, Uizard"],
  ["Prototype critique", "Claude"],
  ["Handoff", "Figma, Cursor, GitHub Copilot"],
  ["Design memory", "Design system docs, component guidelines, decision logs"],
]

const guardrails = [
  {
    title: "Do Not Skip Research",
    body: "AI can summarize evidence, but it cannot replace talking to users or understanding the product context.",
  },
  {
    title: "Generate Options, Then Decide",
    body: "Use AI for divergent exploration. The designer still owns hierarchy, tradeoffs, accessibility, and taste.",
  },
  {
    title: "Check Every State",
    body: "AI-generated screens often look polished while missing empty, loading, error, permission, and mobile states.",
  },
  {
    title: "Protect the Design System",
    body: "Do not let generated UI introduce random spacing, colors, typography, or components that make the product harder to maintain.",
  },
]

const prompts = [
  {
    title: "Research Synthesis",
    body:
      "Summarize these research notes into user goals, pain points, recurring themes, quotes, open questions, and design implications.",
  },
  {
    title: "Flow Alternatives",
    body:
      "Generate three possible user flows for this job. Compare them by speed, clarity, implementation complexity, and risk.",
  },
  {
    title: "Prototype Critique",
    body:
      "Critique this prototype for hierarchy, missing states, accessibility, cognitive load, unclear copy, and assumptions that need validation.",
  },
  {
    title: "Handoff Notes",
    body:
      "Turn this design into developer handoff notes with components, states, responsive behavior, data requirements, and acceptance criteria.",
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

export function AiProductDesignWorkflow() {
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
          AI Product Design Workflow (2026): From Research to Prototype to
          Handoff
        </h1>

        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            AI product design is not about asking a tool to make a pretty
            screen. The useful workflow is more practical: synthesize research,
            map flows, explore directions, critique states, and prepare cleaner
            handoff.
          </p>
          <p>
            Figma AI, Galileo AI, Uizard, Claude, ChatGPT, and Notion can all
            help, but the designer still owns product judgment, accessibility,
            hierarchy, and the final experience.
          </p>
          <p>
            This workflow is for product designers, founders, and PMs who want
            AI speed without turning the design process into random screen
            generation.
          </p>
        </div>

        <ArticleCta tool="Figma" href={toolLinks.figma} placement="top" />

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
            The Modern AI Product Design Stack
          </h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            A useful stack keeps research, design, critique, and handoff
            connected instead of treating AI as a separate mockup generator.
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

        <ArticleCta tool="Galileo AI" href={toolLinks.galileoAi} placement="mid" />

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
            AI makes product design faster when it reduces blank-page friction
            and helps teams see more possibilities. It becomes dangerous when it
            hides weak product thinking behind polished screens.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The best designers will not be replaced by generated mockups. They
            will use AI to move faster through research, options, critique, and
            handoff while making sharper decisions about what should actually
            ship.
          </p>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Use AI to synthesize research, explore flows, generate UI options,
            critique prototypes, and prepare handoff. Keep product judgment,
            accessibility, and design-system quality firmly in human hands.
          </p>
        </section>

        <ArticleCta tool="Figma" href={toolLinks.figma} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
