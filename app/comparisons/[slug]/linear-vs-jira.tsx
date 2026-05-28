import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Speed and UX", "Linear"],
  ["Workflow Flexibility", "Jira"],
  ["Developer Experience", "Linear"],
  ["Enterprise Governance", "Jira"],
  ["Planning Simplicity", "Linear"],
  ["Reporting Depth", "Jira"],
  ["Startup Product Teams", "Linear"],
  ["Large Organizations", "Jira"],
  ["Marketplace and Integrations", "Jira"],
  ["Overall Recommendation", "Linear for focus, Jira for complexity"],
]

const linearWins = [
  {
    title: "Faster Daily Workflow",
    body: "Linear is built for speed. Creating issues, moving work through cycles, updating projects, searching, using keyboard shortcuts, and staying in flow generally feels lighter than Jira.",
  },
  {
    title: "Better Developer Experience",
    body: "Linear is strongest for engineering-led product teams that want issue tracking to feel fast, focused, and close to the way developers actually ship software.",
  },
  {
    title: "Cleaner Product Planning",
    body: "Projects, cycles, initiatives, roadmaps, views, and team workflows are opinionated in a useful way. Linear gives teams enough structure without inviting endless process design.",
  },
  {
    title: "Less Process Overhead",
    body: "Linear makes it harder to build a maze of statuses, fields, screens, and workflows. That can be a limitation for complex companies, but it is a gift for teams that want less tool maintenance.",
  },
]

const jiraWins = [
  {
    title: "More Configurable Workflows",
    body: "Jira is the better choice when teams need custom issue types, statuses, workflows, permissions, approvals, fields, automations, reporting structures, and cross-team process control.",
  },
  {
    title: "Stronger Enterprise Fit",
    body: "Large organizations often choose Jira because it can model complex software delivery, compliance requirements, portfolio planning, service workflows, and governance across many teams.",
  },
  {
    title: "Bigger Integration Ecosystem",
    body: "Jira has a massive Atlassian marketplace, deep developer tool integrations, APIs, webhooks, and connections across Confluence, Jira Product Discovery, Jira Service Management, Bitbucket, and more.",
  },
  {
    title: "Better for Reporting and Administration",
    body: "If leadership needs detailed reporting, auditability, permissions, dashboards, dependency views, and process analytics, Jira usually has more knobs to turn.",
  },
]

const useCases = [
  {
    title: "Choose Linear if",
    items: [
      "You are a startup or product engineering team",
      "Speed and developer experience matter most",
      "You want opinionated cycles, projects, and roadmaps",
      "You do not want to maintain complex Jira-style workflows",
      "Your team values focus over customization",
    ],
  },
  {
    title: "Choose Jira if",
    items: [
      "You need custom workflows, fields, and permissions",
      "Many teams depend on shared reporting and governance",
      "You already use Atlassian tools heavily",
      "Compliance, approvals, or enterprise controls matter",
      "Your organization has complex delivery processes",
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

export function LinearVsJiraComparison() {
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
          Linear vs Jira (2026): Which Issue Tracker Is Better?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Linear and Jira both help teams plan and track software work, but
            they reflect very different philosophies.
          </p>
          <p>
            Linear is the better choice for product engineering teams that want
            speed, focus, clean planning, and a tool developers actually enjoy
            using every day.
          </p>
          <p>
            Jira is the better choice for organizations that need deep
            configurability, governance, reporting, enterprise permissions, and
            complex workflows across many teams.
          </p>
          <p>
            The simple rule: choose Linear when process is slowing you down.
            Choose Jira when process is the thing you need to manage.
          </p>
        </div>

        <ArticleCta tool="Linear" href={toolLinks.linear} placement="top" />

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
              <span className="font-medium">Best for focused teams:</span>{" "}
              Linear
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for enterprise process:</span>{" "}
              Jira
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Linear?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Linear is a product development platform for issue tracking,
              cycles, projects, initiatives, roadmaps, customer requests, AI
              workflows, and engineering planning.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is especially strong for teams that want fast issue tracking,
              clean product planning, and a workflow that does not require a
              full-time admin to keep healthy.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Jira?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Jira is Atlassian&apos;s project and issue tracking platform for
              software teams, product teams, IT teams, service workflows,
              portfolio planning, reporting, and agile delivery.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is especially strong for organizations that need configurable
              workflows, enterprise controls, advanced reporting, integrations,
              and process standardization across many teams.
            </p>
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
          <h2 className="text-2xl font-semibold">Where Jira Wins</h2>
          <div className="mt-5 grid gap-4">
            {jiraWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Jira</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Linear vs Jira for Developers
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Developers often prefer Linear because it is fast, keyboard-driven,
            visually clean, and less cluttered. It keeps issue tracking close to
            the work without making the tool feel like the work.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Jira can be excellent for developers when configured well, but it is
            easier to overcomplicate. Custom fields, workflows, screens, and
            required process can become friction if teams do not maintain them.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Linear vs Jira for Product Teams
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Linear is better for product teams that want tight alignment between
            issues, cycles, projects, initiatives, customer requests, and
            roadmaps without turning planning into ceremony.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Jira is better when product work spans many departments, requires
            formal reporting, depends on Jira Product Discovery, or needs to
            integrate with broader Atlassian planning and service workflows.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Linear vs Jira for Enterprise Teams
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Jira wins for enterprise scale. It has deeper administrative
            controls, more workflow customization, a larger marketplace, and a
            longer history inside large organizations with complex delivery
            processes.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Linear can work in larger companies, especially for product
            engineering groups that want a more focused workflow. But if your
            organization depends on heavy governance, Jira is usually safer.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Linear vs Jira for AI</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Linear is adding AI around product development workflows, including
            smarter issue handling, writing help, agents, and ways to move work
            forward with less manual administration.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Jira benefits from Atlassian Intelligence and the broader Atlassian
            ecosystem, especially for summaries, automation, knowledge work,
            service workflows, and connecting issue tracking with company
            context in tools like Confluence.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Linear pricing is usually straightforward for product engineering
            teams: evaluate seats, plan limits, AI needs, and whether the team
            requires higher-tier controls.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Jira pricing can look inexpensive at first, but the real cost often
            includes configuration, administration, marketplace apps, reporting
            needs, Atlassian ecosystem usage, and process maintenance.
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
            Linear is the better issue tracker for startups and product
            engineering teams that want speed, focus, clean planning, and less
            workflow administration.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Jira is the better issue tracker for larger organizations that need
            customization, enterprise controls, reporting, marketplace apps, and
            governance across many teams.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Linear Rating:</span> 9/10. Best
              for fast product engineering teams.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Jira Rating:</span> 8.6/10. Best
              for enterprise workflows and configurable process.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Linear if your team wants issue tracking to feel fast and
            focused. Choose Jira if your organization needs the process,
            governance, and configurability that Linear intentionally avoids.
          </p>
        </section>

        <ArticleCta tool="Linear" href={toolLinks.linear} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
