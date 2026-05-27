import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { RelatedContent } from "@/components/article/related-content"
import { ToolLogo } from "@/components/site/tool-logo"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"
import type { CardItem } from "@/lib/site-content"

const bestFor = [
  "Teams that want predictable AI workflows with human review",
  "Operators automating repeatable work across everyday SaaS apps",
  "Founders and small teams replacing manual handoffs with workflows",
  "Teams that need approvals before sending emails, updating records, or taking action",
  "Builders who want AI steps, app connectors, tables, and MCP tools in one system",
]

const notFor = [
  "High-volume automation teams that need the cheapest possible run cost",
  "Engineering teams that prefer code-first orchestration and self-hosting",
  "Workflows where every step must be fully autonomous with no human checkpoints",
  "Simple personal automations that are already solved by one Zap or native integration",
  "Organizations that need mature enterprise governance before experimenting",
]

const features = [
  {
    title: "AI Workflow Builder",
    body: "Relay.app lets you describe a workflow in plain language, then inspect and edit the generated visual workflow. That makes it useful for teams that want AI assistance without losing visibility into what will run.",
  },
  {
    title: "Human-in-the-Loop Reviews",
    body: "Relay.app is especially strong when a workflow should pause for approval, edits, or manual data entry. A person can review AI output before an email, update, payment, or customer-facing action goes out.",
  },
  {
    title: "App Connectors",
    body: "Relay.app connects to common work apps and exposes actions around real business objects like contacts, tickets, deals, invoices, docs, and messages. That keeps automations closer to the way teams already work.",
  },
  {
    title: "AI Steps",
    body: "AI steps can extract, summarize, classify, write, transcribe, generate images, and produce structured outputs. You can choose models, use included credits, or bring your own API keys on supported plans.",
  },
  {
    title: "Sequences, Tables, and MCP Servers",
    body: "Relay.app has reusable sequences for sub-workflows, tables for structured state, and MCP servers for exposing custom workflow-backed tools to other AI apps.",
  },
  {
    title: "Utilities and Custom Code",
    body: "Beyond app and AI steps, Relay.app includes data transformations, file tools, PDF actions, JSON and CSV utilities, webhooks, HTTP requests, and custom JavaScript for edge cases.",
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

export function RelayToolPage({ relatedItems }: { relatedItems: CardItem[] }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Button asChild variant="ghost" className="mb-10 px-0">
          <Link href="/tools">
            <ArrowLeft />
            Tools
          </Link>
        </Button>

        <p className="mb-4 text-sm font-medium text-muted-foreground">Tools</p>
        <ToolLogo name="Relay.app" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          Relay.app
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Relay.app is listed in Sinale&apos;s AI automation and agents directory
          for AI workflows, human-in-the-loop automation, app connectors,
          reusable sequences, tables, and MCP tools.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Relay.app is an AI workflow automation builder for teams that want
            useful automation without turning every process into a fragile black
            box. It combines app steps, AI steps, approvals, tables, reusable
            sequences, and a visual workflow editor.
          </p>
          <p>
            The main reason Relay.app stands out is control. You can ask the
            Relay agent to draft a workflow, inspect the exact sequence of
            steps, edit it manually, test it, and add review points where human
            judgment still matters.
          </p>
          <p>
            The tradeoff is that Relay.app is best for structured workflows, not
            vague autonomous agents. It works well when you know the process,
            the apps involved, the decision points, and where a person should
            approve or correct the output.
          </p>
        </div>

        <ArticleCta tool="Relay.app" href={toolLinks.relay} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Relay.app is a strong fit for teams that want AI-powered automation
            with clear structure and human checkpoints. It is especially useful
            for operations, customer success, sales, recruiting, content,
            finance admin, and internal coordination workflows.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Relay.app if you want AI to help with extraction,
            classification, drafting, summarization, and routing, while still
            keeping important actions reviewable. Skip it if your main priority
            is maximum execution volume at the lowest possible cost.
          </p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">Best For</h2>
            <CheckList items={bestFor} />
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">Not Best For</h2>
            <CheckList items={notFor} />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What Relay.app Does</h2>
          <div className="mt-5 grid gap-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Relay.app for Workflow Automation
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Relay.app is best when a workflow has a clear trigger, a sequence of
            app actions, and a few places where AI can reduce manual work. Good
            examples include lead routing, customer follow-up, onboarding
            checklists, content operations, support triage, and internal request
            handling.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            It is less about replacing every teammate with an autonomous agent
            and more about making repeated work inspectable, testable, and easy
            to improve. That is a practical advantage for real business
            workflows where mistakes have consequences.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Relay.app for AI Steps</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Relay.app uses AI where it tends to be useful: reading messy inputs,
            extracting structured fields, summarizing context, classifying
            requests, drafting messages, and producing formatted outputs that
            later steps can use.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The important design habit is to keep AI steps bounded. Ask the
            model for a specific output, review it on real examples, and add a
            human checkpoint before any high-stakes customer, financial, legal,
            or account-changing action.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Relay.app for Human Review
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Human-in-the-loop automation is where Relay.app feels most
            differentiated. You can pause a workflow so someone can approve,
            edit, or add information before the automation continues.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            That makes Relay.app a good choice for workflows that are too
            important to run blindly but too repetitive to handle fully by hand:
            customer emails, billing follow-ups, sales research, employee
            onboarding, support escalations, and internal approvals.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Relay.app pricing uses both workflow steps and AI credits. The free
            plan includes one user, 500 AI credits per month, and 200 steps per
            month. Professional starts at $19 per month billed annually with
            2,000 AI credits and 750 steps. Team starts at $59 per month billed
            annually with 10 users, shared workflows, shared connections, 2,000
            AI credits, and 1,500 steps.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The practical pricing question is workflow frequency. A workflow
            that runs a few times a week is easy to budget. A workflow that runs
            on every lead, ticket, order, or email can consume steps and AI
            credits quickly, especially if it includes multiple AI actions.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Relay.app if your team wants approachable AI automation with
            a strong safety rail: workflows you can inspect, app permissions you
            can control, and human review where it matters.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Start with one workflow that already has a clear owner and repeated
            handoff pain. Define the trigger, expected output, review step, and
            monthly run volume before expanding into more complex agent-like
            systems.
          </p>
        </section>

        <ArticleCta tool="Relay.app" href={toolLinks.relay} placement="bottom" />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
