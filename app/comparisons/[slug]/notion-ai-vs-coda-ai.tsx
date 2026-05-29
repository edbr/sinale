import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Docs", "Notion AI"],
  ["Team Knowledge", "Notion AI"],
  ["Tables", "Coda AI"],
  ["Formulas", "Coda AI"],
  ["Workflow Automation", "Coda AI"],
  ["Enterprise Search", "Notion AI"],
  ["Ease of Use", "Notion AI"],
  ["Custom Internal Apps", "Coda AI"],
  ["General Workspace", "Notion AI"],
  ["Overall Recommendation", "Notion AI"],
]

const notionWins = [
  {
    title: "Better Knowledge Workspace",
    body: "Notion AI is strongest when your team already keeps docs, meeting notes, project plans, wikis, databases, and decisions inside Notion. It can answer questions from that workspace and help turn scattered pages into useful knowledge.",
  },
  {
    title: "Better Writing and Editing",
    body: "Notion AI is easier to recommend for summarizing notes, rewriting docs, drafting updates, extracting action items, cleaning up pages, and improving team communication.",
  },
  {
    title: "Stronger Enterprise Search Direction",
    body: "Notion AI's Enterprise Search and AI connectors make it more compelling for teams that want one place to ask questions across Notion and connected tools like Slack, Google Drive, or other knowledge sources.",
  },
  {
    title: "Lower Learning Curve",
    body: "Most teams can understand Notion quickly. The AI sits inside familiar docs and databases, so people do not need to learn a more app-builder-like model before getting value.",
  },
]

const codaWins = [
  {
    title: "Better Tables and Structured Workflows",
    body: "Coda AI is more powerful when the workspace depends on tables, rows, formulas, buttons, views, packs, and structured workflows rather than mostly docs and pages.",
  },
  {
    title: "Stronger Automation Model",
    body: "Coda's automations let teams trigger recurring actions, notifications, updates, and workflow steps inside docs. That makes Coda feel closer to a lightweight internal tool builder.",
  },
  {
    title: "Better for Custom Team Apps",
    body: "Coda is excellent for trackers, planning systems, operating dashboards, lightweight CRMs, product workflows, approval processes, and team tools that need both document context and database behavior.",
  },
  {
    title: "More Builder-Oriented",
    body: "Coda rewards people who like building systems. If you want to design your own workspace logic, formulas, layouts, and workflow buttons, Coda gives you more leverage than Notion.",
  },
]

const useCases = [
  {
    title: "Choose Notion AI if",
    items: [
      "Your team uses Notion as a wiki or docs workspace",
      "You need AI for writing, summaries, meeting notes, and search",
      "You want workspace knowledge answers with citations",
      "Your team prefers simple docs and databases",
      "You care more about adoption than custom workflow logic",
    ],
  },
  {
    title: "Choose Coda AI if",
    items: [
      "Your workspace depends on tables and formulas",
      "You want docs that behave like lightweight apps",
      "You need automations, buttons, workflows, and operational systems",
      "You are building trackers, approvals, dashboards, or internal tools",
      "Your team has builders who like designing custom processes",
    ],
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

export function NotionAiVsCodaAiComparison() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Button asChild variant="ghost" className="mb-10 px-0">
          <Link href="/comparisons">
            <ArrowLeft />
            Comparisons
          </Link>
        </Button>

        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Comparison
        </p>
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
          Notion AI vs Coda AI (2026): Which Workspace AI Is Better?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Notion AI and Coda AI both bring artificial intelligence into team
            workspaces, but they reflect the products they live inside.
          </p>
          <p>
            Notion AI is best for docs, knowledge management, meeting notes,
            writing, enterprise search, and helping teams find answers inside a
            growing workspace.
          </p>
          <p>
            Coda AI is best for tables, formulas, workflows, automations,
            custom internal systems, and docs that behave more like lightweight
            apps.
          </p>
          <p>
            Choose Notion AI if your team wants a smarter wiki. Choose Coda AI
            if your team wants smarter operational docs.
          </p>
        </div>

        <ArticleCta tool="Notion AI" href={toolLinks.notion} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <div className="mt-5 divide-y rounded-lg border">
            {verdictRows.map(([category, winner]) => (
              <div
                key={category}
                className="grid grid-cols-[1fr_auto] gap-4 px-4 py-3 text-sm"
              >
                <span className="text-muted-foreground">{category}</span>
                <span className="font-medium">{winner}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for team knowledge:</span>{" "}
              Notion AI
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for workflow systems:</span>{" "}
              Coda AI
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Notion AI?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Notion AI is the AI layer inside Notion&apos;s workspace for
              writing, summarizing, answering questions, searching knowledge,
              generating content, and helping teams work with docs, pages, and
              databases.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Its biggest advantage is context. If your company already uses
              Notion as a source of truth, Notion AI can help make that
              knowledge easier to find and reuse.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Coda AI?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Coda AI is the AI layer inside Coda&apos;s all-in-one docs. It can
              help generate content, summarize information, work with tables,
              create formulas, reference rows, and support workflow-heavy docs.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Its biggest advantage is structure. Coda docs can become
              operational systems with tables, buttons, formulas, automations,
              and integrations.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Notion AI Wins</h2>
          <div className="mt-5 grid gap-4">
            {notionWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Notion AI</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Coda AI Wins</h2>
          <div className="mt-5 grid gap-4">
            {codaWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Coda AI</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Notion AI vs Coda AI for Docs
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Notion AI is the better choice for traditional documentation:
            team wikis, meeting notes, project briefs, product specs, research
            summaries, onboarding docs, and knowledge bases.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Coda AI can also help with docs, but Coda shines when the document
            includes structured tables, calculations, buttons, and workflows.
            If the doc mostly needs to be read and searched, Notion is easier.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Notion AI vs Coda AI for Team Knowledge
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Notion AI wins for team knowledge because Notion is already one of
            the most common places teams store decisions, notes, docs, tasks,
            and project context.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Enterprise Search makes Notion AI more useful for larger teams
            because it can pull answers from Notion and connected tools. Coda
            is better when knowledge is attached to a structured operating
            system rather than a broad wiki.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Notion AI vs Coda AI for Tables
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Coda AI is stronger for tables. Coda&apos;s table model is closer
            to a lightweight app platform, with formulas, buttons, views,
            synced data, and workflow logic.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Notion databases are easier for many teams, but Coda gives power
            users more room to build. If your workspace depends on table logic,
            Coda is the better AI workspace.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Notion AI vs Coda AI for Automation
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Coda has the edge for automation. Automations, buttons, packs, and
            formula-driven workflows make it easier to build docs that do
            things, not just store information.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Notion has automations and AI workflows, but it still feels more
            like a knowledge workspace. Coda feels more like a workspace where
            teams can build custom internal apps without leaving the doc.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Notion pricing depends on plan level, workspace size, AI access,
            enterprise features, and any credit-based or advanced AI features
            available in your workspace.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Coda uses Maker billing, so teams generally pay for the people who
            create and manage docs rather than every person who views them.
            Coda AI availability and limits depend on plan and workspace setup.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Check both official pricing pages before committing. Workspace AI
            pricing changes often, and the real cost depends on how many people
            create systems, not only how many people read them.
          </p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="rounded-lg border bg-card p-5">
              <h2 className="text-2xl font-semibold">{useCase.title}</h2>
              <CheckList items={useCase.items} />
            </div>
          ))}
        </section>

        <ArticleCta tool="Notion AI" href={toolLinks.notion} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Notion AI is the better choice for most teams that need docs,
            knowledge management, writing help, search, meeting notes, and a
            simple shared workspace.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Coda AI is the better choice for teams building workflow-heavy docs,
            operating systems, trackers, approvals, tables, formulas,
            automations, and lightweight internal tools.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Notion AI Rating:</span> 9/10.
              Best for team knowledge and general workspace AI.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Coda AI Rating:</span> 8.5/10.
              Best for table-driven workflows and custom team systems.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Notion AI if your workspace is mostly knowledge. Choose Coda
            AI if your workspace is mostly workflow.
          </p>
        </section>

        <ArticleCta
          tool="Notion AI"
          href={toolLinks.notion}
          placement="bottom"
        />

        <GiscusComments />
      </article>
    </main>
  )
}
