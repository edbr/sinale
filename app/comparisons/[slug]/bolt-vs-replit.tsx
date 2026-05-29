import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Fast Prototypes", "Bolt"],
  ["Hosted Development", "Replit"],
  ["Deployment", "Replit"],
  ["Frontend App Generation", "Bolt"],
  ["Backend Flexibility", "Replit"],
  ["Code Control", "Replit"],
  ["Browser Runtime", "Bolt"],
  ["Learning to Code", "Replit"],
  ["Polished Web App Demos", "Bolt"],
  ["Overall Recommendation", "Replit"],
]

const boltWins = [
  {
    title: "Faster Frontend Prototypes",
    body: "Bolt is excellent when you want to describe a web app, see it running quickly, iterate in the browser, and get a polished prototype without setting up a local environment.",
  },
  {
    title: "Great Browser Runtime",
    body: "Bolt is powered by StackBlitz WebContainers, which makes it feel surprisingly close to a local web development environment inside the browser.",
  },
  {
    title: "Better for Quick UI Experiments",
    body: "If the project is a landing page, dashboard, React prototype, interactive demo, or frontend-heavy concept, Bolt often gets you to a visible result faster.",
  },
  {
    title: "Simpler Prompt-to-App Loop",
    body: "Bolt's main workflow is direct: prompt the app, run it, edit it, preview it, and deploy it. That focus makes it approachable for fast experiments.",
  },
]

const replitWins = [
  {
    title: "More Complete Hosted Development Workspace",
    body: "Replit is broader than a prompt-to-app builder. It gives you a persistent cloud development environment with files, terminal access, app runtime, collaboration, deployments, and AI assistance.",
  },
  {
    title: "Better Backend and Multi-Language Flexibility",
    body: "Replit is stronger when the project needs custom backend logic, scripts, APIs, databases, background jobs, bots, or languages beyond the typical web app stack.",
  },
  {
    title: "Stronger Deployment Story",
    body: "Replit is built around taking projects from browser workspace to hosted app. If deployment and ongoing maintenance matter, Replit usually feels more complete.",
  },
  {
    title: "More Code Control",
    body: "Replit exposes more of the development process. Developers can inspect logs, run commands, modify implementation details, and keep coding after the AI has generated a first version.",
  },
]

const useCases = [
  {
    title: "Choose Bolt if",
    items: [
      "You want a fast web app prototype",
      "You care about instant browser-based preview",
      "You are building frontend-heavy apps or demos",
      "You want a simple prompt-run-edit-deploy loop",
      "You prefer StackBlitz-style web development",
    ],
  },
  {
    title: "Choose Replit if",
    items: [
      "You want a full hosted development workspace",
      "You need backend code, scripts, APIs, or multiple languages",
      "You care about deployment and ongoing app maintenance",
      "You want stronger control over files, runtime, and logs",
      "You are learning to code or building beyond a single prototype",
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

export function BoltVsReplitComparison() {
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
          Bolt vs Replit (2026): Which AI Development Platform Should You Use?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Bolt and Replit are two of the strongest browser-based AI
            development platforms for building software without starting from a
            blank local setup.
          </p>
          <p>
            Bolt is best for fast web app prototypes. It gives you a
            prompt-driven browser environment where you can generate, run,
            preview, edit, and deploy full-stack web apps quickly.
          </p>
          <p>
            Replit is best for hosted development. It gives you a broader cloud
            workspace with an AI agent, terminal access, files, runtimes,
            deployments, collaboration, and support for more project types.
          </p>
          <p>
            If you need a polished prototype fast, start with Bolt. If you need
            a real hosted coding environment you can keep using, start with
            Replit.
          </p>
        </div>

        <ArticleCta tool="Replit" href={toolLinks.replit} placement="top" />

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
              <span className="font-medium">Best for fast prototypes:</span>{" "}
              Bolt
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for hosted development:</span>{" "}
              Replit
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Bolt?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Bolt is StackBlitz&apos;s AI development platform for prompting,
              running, editing, and deploying full-stack web applications in
              the browser.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Its biggest advantage is speed. You can describe an app, see a
              live preview, edit the code, and keep iterating without setting
              up local tooling.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Replit?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Replit is a cloud development workspace for coding, running,
              collaborating, using AI agents, and deploying apps from the
              browser.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Its biggest advantage is breadth. It can support web apps, APIs,
              scripts, bots, experiments, learning projects, and more
              traditional software development workflows.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Bolt Wins</h2>
          <div className="mt-5 grid gap-4">
            {boltWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Bolt</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Replit Wins</h2>
          <div className="mt-5 grid gap-4">
            {replitWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Replit</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Bolt vs Replit for Fast Prototypes
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Bolt is the better first stop for fast prototypes, especially
            frontend-heavy web apps. The browser runtime, live preview, and
            prompt-to-app loop make it easy to get something visible quickly.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Replit can also build prototypes quickly, but it feels more like a
            development workspace. That extra flexibility is useful, but it can
            be more setup than you need for a quick demo.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Bolt vs Replit for Hosted Development
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Replit wins for hosted development because it gives you a more
            complete cloud workspace: editor, terminal, runtime, files,
            deployments, collaboration, secrets, logs, and AI agent support.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Bolt is excellent for browser-based web app creation, but Replit is
            better when the browser workspace becomes your main development
            environment rather than only a place to generate the first version.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Bolt vs Replit for Deployment
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Both tools can help you get an app live, but Replit has the
            stronger hosted deployment story when you want to keep building and
            operating inside the same platform.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Bolt&apos;s deployment flow is great for quick web apps and demos.
            Replit feels stronger when deployment is part of an ongoing
            development workflow with logs, runtime behavior, and future
            changes.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Bolt vs Replit for Code Control
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Replit gives builders more code control because it behaves like a
            persistent cloud IDE. You can inspect files, run commands, debug
            issues, manage environment settings, and keep working directly in
            the project.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Bolt also exposes code and supports editing, but the core appeal is
            the speed of the generation and preview loop. If you expect to
            spend many hours manually shaping the code, Replit is usually the
            better long-term workspace.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Bolt pricing is tied to StackBlitz/Bolt plan features, AI usage,
            collaboration needs, and whether you are working as an individual
            or team.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Replit pricing depends on plan level, agent usage, deployments,
            compute, team features, and effort-based usage. In practice, both
            platforms can become more expensive as AI-assisted building turns
            into an ongoing workflow.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Check official pricing before committing. The best value depends on
            whether you need a quick prototype or a persistent cloud
            development environment.
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

        <ArticleCta tool="Replit" href={toolLinks.replit} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Bolt is the better platform for fast prototypes, frontend-heavy web
            apps, quick demos, and prompt-driven browser app generation.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Replit is the better platform for hosted development, deployment,
            code control, backend flexibility, learning, and ongoing project
            work.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Bolt Rating:</span> 8.5/10. Best
              for fast web prototypes and browser app generation.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Replit Rating:</span> 9/10. Best
              for hosted development and deployment-ready projects.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Bolt when speed to prototype matters most. Choose Replit
            when the project needs to become a maintained, deployed, and
            code-controlled app.
          </p>
        </section>

        <ArticleCta tool="Replit" href={toolLinks.replit} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
