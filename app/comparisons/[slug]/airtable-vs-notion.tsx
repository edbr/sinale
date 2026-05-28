import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Structured data", "Airtable"],
  ["Docs and wikis", "Notion"],
  ["Internal apps", "Airtable"],
  ["Personal productivity", "Notion"],
  ["Automations", "Airtable"],
  ["Flexible team pages", "Notion"],
  ["Reporting and interfaces", "Airtable"],
  ["Knowledge management", "Notion"],
  ["Operations workflows", "Airtable"],
  ["Overall Recommendation", "Airtable for data-heavy ops, Notion for workspace context"],
]

const airtableWins = [
  {
    title: "Real Operational Databases",
    body: "Airtable is stronger when your team needs structured records, linked tables, permissions, views, forms, interfaces, automations, and data that behaves more like an app backend than a document table.",
  },
  {
    title: "Internal App Building",
    body: "Airtable is better for building lightweight internal tools: intake systems, approval queues, content operations, asset trackers, campaign calendars, inventory workflows, research databases, and client portals.",
  },
  {
    title: "Automation and Interfaces",
    body: "Airtable gives teams more dedicated controls for automations, record updates, forms, dashboards, and user-facing interfaces. It is easier to turn the database into a workflow surface.",
  },
  {
    title: "Operations at Scale",
    body: "When records, fields, linked data, reporting, permissions, and repeatable workflows matter, Airtable tends to stay cleaner than a heavily customized Notion workspace.",
  },
]

const notionWins = [
  {
    title: "Docs, Wikis, and Knowledge",
    body: "Notion is better when the database lives next to the story: notes, docs, specs, decisions, meeting summaries, team wikis, onboarding pages, project briefs, and company knowledge.",
  },
  {
    title: "Flexible Writing and Planning",
    body: "Notion&apos;s pages are more comfortable for writing, outlining, embedding, commenting, organizing, and making messy early-stage work feel understandable before it becomes structured data.",
  },
  {
    title: "Team Workspace Adoption",
    body: "Notion is easier to roll out as a broad team workspace because nearly everyone can use it for documents, tasks, meeting notes, dashboards, and simple databases without thinking like an app builder.",
  },
  {
    title: "AI for Workspace Context",
    body: "Notion AI is strongest when it can work across docs, databases, wikis, and project pages to summarize, draft, answer questions, autofill fields, and reuse the knowledge already inside the workspace.",
  },
]

const useCases = [
  {
    title: "Choose Airtable if",
    items: [
      "Your workflow depends on structured records and linked tables",
      "You need forms, interfaces, dashboards, and automations",
      "Your team is building lightweight internal apps",
      "Permissions, reporting, and repeatable operations matter",
      "You have outgrown spreadsheet-style tracking",
    ],
  },
  {
    title: "Choose Notion if",
    items: [
      "Your team needs docs, wikis, and project pages in one place",
      "The database is only one part of a larger workspace",
      "You care about writing, planning, and knowledge sharing",
      "Non-technical teams need an easy place to organize work",
      "You want AI help across documents and team context",
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

export function AirtableVsNotionComparison() {
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
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Airtable vs Notion (2026): Which Workspace Tool Is Better?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Airtable and Notion both sit somewhere between spreadsheets,
            databases, project tools, and team workspaces, but they are built
            for different kinds of work.
          </p>
          <p>
            Airtable is better when your workflow is data-heavy, repeatable, and
            operational. It is the stronger choice for structured databases,
            automations, interfaces, dashboards, and lightweight internal apps.
          </p>
          <p>
            Notion is better when your workflow is context-heavy. It is the
            stronger choice for docs, wikis, notes, project pages, lightweight
            databases, and team knowledge.
          </p>
          <p>
            The simple rule: choose Airtable when the data model is the product.
            Choose Notion when the page, explanation, and shared context matter
            just as much as the database.
          </p>
        </div>

        <ArticleCta tool="Airtable" href={toolLinks.airtable} placement="top" />

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
              <span className="font-medium">Best for operations:</span>{" "}
              Airtable
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for knowledge:</span> Notion
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Airtable?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Airtable is a collaborative app platform that combines structured
              databases, spreadsheet-style views, automations, forms,
              interfaces, permissions, reporting, and AI features.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is especially strong for operations teams that need to manage
              records, approvals, content pipelines, customer data, campaigns,
              product catalogs, requests, and repeatable workflows.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Notion?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Notion is a connected workspace for docs, wikis, databases,
              projects, meeting notes, AI, and team knowledge.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is especially strong for teams that want flexible pages,
              lightweight project tracking, decision history, templates, and
              knowledge bases in one approachable workspace.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Airtable Wins</h2>
          <div className="mt-5 grid gap-4">
            {airtableWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Airtable</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Notion Wins</h2>
          <div className="mt-5 grid gap-4">
            {notionWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Notion</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Airtable vs Notion for Databases
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Airtable is the better database tool. It gives teams a clearer
            structure for records, fields, linked tables, views, interfaces,
            forms, and automations. It feels closer to a low-code operational
            system than a document workspace.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Notion databases are excellent for lightweight planning and
            knowledge-heavy work, but they become harder to manage when the
            workflow depends on strict schemas, larger record sets, or app-like
            interfaces.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Airtable vs Notion for Docs and Wikis
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Notion wins for docs and wikis. Pages can hold rich writing,
            embedded media, linked databases, project context, comments,
            templates, meeting notes, and knowledge that people can browse
            naturally.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Airtable can store long text, attachments, and linked records, but
            it is not as comfortable as a writing or knowledge management tool.
            It is better when the record is the center of the workflow.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Airtable vs Notion for AI
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Airtable AI is most useful when it operates on structured records:
            categorizing feedback, extracting data, generating summaries,
            helping with field content, and powering automations around business
            workflows.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Notion AI is most useful when it operates on workspace context:
            drafting docs, summarizing meetings, answering questions, autofilling
            database properties, and making company knowledge easier to reuse.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Airtable pricing should be evaluated around seats, record limits,
            automation runs, interfaces, permission needs, AI credits, and
            whether your workflow requires higher-tier operational controls.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Notion pricing is easier to justify when many people need docs,
            wikis, project pages, and lightweight databases in the same
            workspace. Costs can rise when advanced permissions, automation, AI,
            or enterprise controls matter.
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

        <ArticleCta tool="Notion" href={toolLinks.notionProjects} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Airtable is the better choice for teams building structured
            operational workflows. If the work depends on records, linked data,
            interfaces, forms, approvals, automations, and reporting, Airtable
            is the safer bet.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Notion is the better choice for teams building a shared workspace.
            If the work depends on docs, wikis, project pages, notes,
            lightweight databases, and company knowledge, Notion will feel more
            natural.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Airtable Rating:</span> 9/10. Best
              for structured data and operational apps.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Notion Rating:</span> 9/10. Best
              for docs, wikis, and flexible workspace context.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Airtable if your team is really building a workflow app.
            Choose Notion if your team is building a shared knowledge workspace
            with lightweight databases attached.
          </p>
        </section>

        <ArticleCta tool="Airtable" href={toolLinks.airtable} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
