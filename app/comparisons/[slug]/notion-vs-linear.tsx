import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Best for docs and knowledge", "Notion"],
  ["Best for issue tracking", "Linear"],
  ["Best for product specs", "Notion"],
  ["Best for engineering execution", "Linear"],
  ["Best for flexible databases", "Notion"],
  ["Best for cycles and roadmaps", "Linear"],
  ["Best for all-company workspace", "Notion"],
  ["Best for developer experience", "Linear"],
  ["Best for lightweight project tracking", "Notion"],
  ["Overall Recommendation", "Notion for context, Linear for execution"],
]

const notionWins = [
  {
    title: "Docs, Wikis, and Project Context",
    body: "Notion is better when the work needs rich context: PRDs, meeting notes, roadmaps, strategy docs, research, team wikis, launch plans, and databases that non-engineering teams can shape themselves.",
  },
  {
    title: "Flexible Databases",
    body: "Notion databases can become editorial calendars, lightweight CRMs, project trackers, design request boards, hiring pipelines, content systems, and team dashboards without requiring a strict software delivery model.",
  },
  {
    title: "Cross-Functional Collaboration",
    body: "Notion works well when product, design, marketing, ops, leadership, and customer teams all need one place to read, write, comment, organize, and connect work.",
  },
  {
    title: "AI for Knowledge Work",
    body: "Notion AI is strongest when it can work across docs, databases, meeting notes, project pages, and workspace knowledge to summarize, draft, autofill fields, and answer team questions.",
  },
]

const linearWins = [
  {
    title: "Issue Tracking That Feels Fast",
    body: "Linear is much better for day-to-day engineering execution. Issues, cycles, projects, initiatives, views, keyboard shortcuts, and triage are designed for speed and focus.",
  },
  {
    title: "Better Software Team Rituals",
    body: "Linear has a clearer model for backlog grooming, sprint-style cycles, project progress, milestones, customer requests, roadmap planning, and shipping software without building the workflow from scratch.",
  },
  {
    title: "Cleaner Developer Experience",
    body: "Developers usually want fewer clicks, less visual noise, and less process theater. Linear feels closer to the actual work than a flexible workspace database trying to behave like an issue tracker.",
  },
  {
    title: "More Opinionated Product Execution",
    body: "Notion can model almost anything, which is powerful but easy to over-customize. Linear gives product engineering teams a tighter execution system with fewer decisions to maintain.",
  },
]

const useCases = [
  {
    title: "Choose Notion if",
    items: [
      "Your team needs docs, wikis, specs, and project pages in one place",
      "Non-technical teams need to manage or customize workflows",
      "You want flexible databases for many types of work",
      "Product context matters more than engineering issue velocity",
      "You want AI help across workspace knowledge and project documents",
    ],
  },
  {
    title: "Choose Linear if",
    items: [
      "Your main problem is shipping software faster",
      "Engineers need a focused issue tracker they will actually use",
      "You rely on cycles, projects, initiatives, and roadmap planning",
      "You want product execution without heavy workspace customization",
      "GitHub, Slack, support, and customer feedback should connect to issues",
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

export function NotionVsLinearComparison() {
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
          Notion vs Linear (2026): Which Tool Should Product Teams Use?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Notion and Linear overlap around project work, but they solve
            different parts of a product team&apos;s operating system.
          </p>
          <p>
            Notion is best for product context: docs, specs, wikis, meeting
            notes, databases, project pages, and cross-functional collaboration.
          </p>
          <p>
            Linear is best for product execution: issue tracking, cycles,
            projects, initiatives, roadmaps, triage, and the daily rhythm of
            shipping software.
          </p>
          <p>
            The practical answer for many teams is both: Notion for the why and
            the context, Linear for the what, who, and when.
          </p>
        </div>

        <ArticleCta tool="Notion" href={toolLinks.notionProjects} placement="top" />

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
              <span className="font-medium">Best workspace:</span> Notion
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best issue tracker:</span> Linear
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Notion?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Notion is a connected workspace for docs, wikis, databases,
              projects, meeting notes, AI, and team knowledge.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is especially strong when a product team needs flexible pages,
              living specs, decision history, roadmaps, research, and project
              dashboards that many departments can use.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Linear?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Linear is a product development platform for issue tracking,
              cycles, projects, initiatives, roadmaps, customer requests, and
              software team planning.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is especially strong when engineering teams need a fast,
              opinionated workflow for turning product priorities into shipped
              work.
            </p>
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
          <h2 className="text-2xl font-semibold">Where Linear Wins</h2>
          <div className="mt-5 grid gap-4">
            {linearWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Linear</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Notion vs Linear for Product Managers
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Product managers usually need both thinking space and execution
            discipline. Notion is better for writing PRDs, capturing customer
            context, documenting decisions, sharing updates, and keeping
            stakeholders aligned.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Linear is better once the work needs to become a sequence of issues,
            projects, cycles, milestones, owners, and status updates that
            engineering can act on quickly.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Notion vs Linear for Engineering Teams
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Engineering teams can use Notion for technical docs, specs, RFCs,
            architecture notes, onboarding, and shared knowledge. It is not as
            strong as Linear for daily issue flow.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Linear is the better home for bugs, features, cycles, sprint-style
            planning, triage, release coordination, and the operational details
            developers touch every day.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Notion vs Linear for Company Knowledge
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Notion wins clearly for company knowledge. It gives teams a place to
            centralize docs, wikis, meeting notes, decisions, templates, project
            briefs, and databases without forcing everything into issue format.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Linear can hold project documents and updates, but it is not trying
            to replace the company wiki. Its strength is keeping software work
            moving, not becoming the whole operating manual.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Notion pricing depends on workspace seats, collaboration needs,
            permissions, AI usage, automations, and whether the company needs
            business or enterprise controls.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Linear pricing is usually easier to evaluate for product engineering
            teams: count the people who need issue tracking, then decide whether
            advanced planning, reporting, AI, or enterprise controls matter.
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

        <ArticleCta tool="Linear" href={toolLinks.linear} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Notion is the better product workspace. It gives teams room to
            think, write, document, organize, and collaborate across functions.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Linear is the better execution system for software teams. It keeps
            issues, cycles, projects, initiatives, and engineering progress
            clean enough to use every day.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Notion Rating:</span> 9/10. Best
              for product docs, wikis, and flexible team context.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Linear Rating:</span> 9.2/10. Best
              for focused product engineering execution.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Notion if your team needs a flexible workspace for specs,
            docs, wikis, and project context. Choose Linear if your team needs a
            fast execution system for building and shipping software.
          </p>
        </section>

        <ArticleCta tool="Notion" href={toolLinks.notionProjects} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
