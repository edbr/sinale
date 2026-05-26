import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const steps = [
  {
    title: "Start with the Problem, Not the Technology",
    tools: [],
    body:
      "Most failed MVPs do not fail because of poor implementation. They fail because they solve a problem nobody cares about. A good MVP solves one painful problem, not ten.",
    checklist: [
      "Who is this for?",
      "What problem are they experiencing?",
      "How are they solving it today?",
      "Why is the current solution inadequate?",
      "What outcome are they trying to achieve?",
    ],
  },
  {
    title: "Research the Market",
    tools: ["Perplexity", "ChatGPT"],
    body:
      "Before building anything, understand existing competitors, alternative solutions, market positioning, common complaints, and missing capabilities.",
    prompt:
      "Identify the top competitors in AI fitness coaching and summarize their strengths, weaknesses, pricing, and positioning.",
  },
  {
    title: "Define the MVP Scope",
    tools: [],
    body:
      "Your MVP should answer one question: will people use this? Every feature increases complexity. Focus creates speed.",
    checklist: [
      "V1: upload activity file",
      "V1: generate AI analysis",
      "V1: show recommendations",
      "Not yet: social features",
      "Not yet: mobile apps",
      "Not yet: advanced analytics",
    ],
  },
  {
    title: "Generate Product Requirements",
    tools: ["Claude"],
    body:
      "Claude can quickly draft user stories, functional requirements, edge cases, success criteria, and technical assumptions. It does not replace product thinking, but it accelerates it.",
    prompt:
      "Create a lightweight MVP requirements document for this product. Include user goals, core workflows, success metrics, and technical assumptions.",
  },
  {
    title: "Design the Experience",
    tools: ["ChatGPT", "Figma"],
    body:
      "Before coding, map the user flow, navigation, core screens, and data requirements. Users do not care how many screens exist. They care whether the problem gets solved.",
    checklist: [
      "Landing page",
      "Sign up",
      "Dashboard",
      "Primary workflow",
      "Results page",
    ],
  },
  {
    title: "Build the First Version",
    tools: ["Cursor", "Lovable"],
    body:
      "Lovable is the fastest path for validation. Cursor provides more control with a stack like Next.js, TypeScript, Tailwind, shadcn/ui, Supabase, and Vercel.",
    prompt:
      "Create a responsive dashboard with authentication, file uploads, and an AI insights panel using shadcn components.",
  },
  {
    title: "Add AI Features",
    tools: ["OpenAI API", "Anthropic API"],
    body:
      "The AI integration is often simpler than people expect. The challenge is usually product design, not API integration.",
    checklist: [
      "User input",
      "Structured data",
      "Prompt",
      "Model",
      "Response",
      "UI",
    ],
  },
  {
    title: "Launch Immediately",
    tools: ["Vercel"],
    body:
      "Do not wait for perfection. Create a landing page, product demo, and signup flow, then show it to people. The goal is not growth yet. The goal is learning.",
  },
  {
    title: "Collect Feedback",
    tools: ["Granola", "Notion"],
    body:
      "Most product insights emerge from conversations rather than analytics. Ask users what confused them, what was useful, what they expected next, and whether they would pay.",
  },
  {
    title: "Measure What Matters",
    tools: [],
    body:
      "Track signups, activation, retention, engagement, and conversion. Ignore vanity metrics. The most important question is whether users come back.",
  },
]

const stack = [
  ["Research", "Perplexity, ChatGPT"],
  ["Planning", "Claude"],
  ["Design", "Figma"],
  ["Development", "Cursor"],
  ["Rapid Prototyping", "Lovable"],
  ["Backend", "Supabase"],
  ["Deployment", "Vercel"],
  ["Analytics", "Mixpanel"],
]

const mistakes = [
  {
    title: "Building Too Much",
    body: "Most MVPs are too large. Cut features aggressively.",
  },
  {
    title: "Starting Without Validation",
    body: "Research first. Build second.",
  },
  {
    title: "Optimizing Before Usage",
    body: "Users determine priorities. Not assumptions.",
  },
  {
    title: "Letting AI Make Product Decisions",
    body: "AI accelerates execution. It does not replace customer understanding.",
  },
]

export function BuildingSaasMvpWithAiWorkflow() {
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
          Building a SaaS MVP with AI (2026): From Idea to Working Product in a
          Weekend
        </h1>

        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            A few years ago, building a SaaS product required weeks of
            engineering effort before users could interact with anything. Today,
            AI has fundamentally changed that equation.
          </p>
          <p>
            The biggest shift isn&apos;t that AI writes code. It&apos;s that AI
            removes much of the friction between having an idea and testing
            whether anyone actually wants it.
          </p>
          <p>
            This is the workflow I would follow if I were launching a SaaS MVP
            today.
          </p>
        </div>

        <ArticleCta tool="Lovable" href={toolLinks.lovable} placement="top" />

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

              {step.checklist ? (
                <div className="mt-5 grid gap-2 text-sm md:grid-cols-2">
                  {step.checklist.map((item) => (
                    <p key={item} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0" />
                      {item}
                    </p>
                  ))}
                </div>
              ) : null}

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
          <h2 className="text-2xl font-semibold">The Modern AI SaaS Stack</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            If I were starting today, this is the stack I&apos;d use to take an
            idea from concept to production quickly.
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
          <h2 className="text-2xl font-semibold">Common Mistakes</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div key={mistake.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{mistake.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {mistake.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Final Thoughts</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            The biggest advantage AI gives founders isn&apos;t cheaper code.
            It&apos;s faster learning. The sooner you can put something in front
            of real users, the sooner you discover whether you&apos;re solving a
            problem worth pursuing.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Today, a solo founder can research, design, build, deploy, and test
            a SaaS MVP in days rather than months. That does not guarantee
            success, but it dramatically lowers the cost of finding out what
            users actually want.
          </p>
        </section>



        <ArticleCta tool="Lovable" href={toolLinks.lovable} placement="mid" />

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            The companies that win won&apos;t be the ones generating the most
            code with AI. They&apos;ll be the ones using AI to shorten the
            feedback loop between idea, product, and customer.
          </p>
        </section>


        <ArticleCta tool="Lovable" href={toolLinks.lovable} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
