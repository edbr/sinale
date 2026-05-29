import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Browser-Based Coding", "Replit"],
  ["Beginner Friendliness", "Lovable"],
  ["SaaS MVPs", "Lovable"],
  ["Learning to Code", "Replit"],
  ["Design Polish", "Lovable"],
  ["Deployment Workflow", "Replit"],
  ["Full-Stack Prototypes", "Tie"],
  ["Code Control", "Replit"],
  ["Non-Technical Founders", "Lovable"],
  ["Overall Recommendation", "Depends on project"],
]

const replitWins = [
  {
    title: "Better Browser-Based Coding Environment",
    body: "Replit is the stronger choice if you want a real cloud coding workspace. You can write code, run it, debug it, collaborate, use a terminal, and deploy from the browser without setting up a local environment.",
  },
  {
    title: "More Useful for Learning and Technical Growth",
    body: "Replit gives beginners a path from prompting to actual coding. It is friendly enough for non-experts, but still exposes files, logs, runtime behavior, and the development process.",
  },
  {
    title: "Stronger Multi-Language Flexibility",
    body: "Replit supports many languages and project types, which makes it more flexible for experiments, scripts, bots, APIs, web apps, education, and coding practice.",
  },
  {
    title: "Better for Developers Who Want Control",
    body: "If you want to inspect the code, change implementation details, understand how the app works, and keep coding after the AI does the first pass, Replit is usually the better fit.",
  },
]

const lovableWins = [
  {
    title: "Faster Path to a Polished MVP",
    body: "Lovable is better when the goal is to describe a product and quickly get something that feels like a modern SaaS app, dashboard, portal, marketplace, or startup prototype.",
  },
  {
    title: "Better for Non-Technical Founders",
    body: "Lovable hides more of the development environment and focuses on the product outcome. That makes it easier for founders, operators, designers, and PMs who do not want to think like software engineers.",
  },
  {
    title: "Stronger Visual Product Quality",
    body: "Lovable often produces cleaner UI, stronger layouts, and more product-like screens out of the box. That matters when you need to show a demo, validate an idea, or pitch a product.",
  },
  {
    title: "Better SaaS App Patterns",
    body: "Lovable is especially compelling for common SaaS patterns: authentication, CRUD apps, dashboards, onboarding flows, landing pages, admin areas, and Supabase-backed prototypes.",
  },
]

const useCases = [
  {
    title: "Choose Replit if",
    items: [
      "You want to code in the browser",
      "You care about files, terminal access, logs, and deployment",
      "You are learning development or want more code control",
      "You need projects beyond standard SaaS web apps",
      "You want an AI agent inside a real development workspace",
    ],
  },
  {
    title: "Choose Lovable if",
    items: [
      "You want a polished SaaS MVP quickly",
      "You are a non-technical founder or product builder",
      "You care more about the product demo than the coding environment",
      "Your app fits common web app patterns",
      "You want to move from idea to prototype with minimal setup",
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

export function ReplitVsLovableComparison() {
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
          Replit vs Lovable (2026): Which AI App Builder Fits Your Project?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Replit and Lovable both help people build apps with AI, but they
            are not trying to be the same product.
          </p>
          <p>
            Replit is best understood as a browser-based development platform
            with an AI agent. It gives you a real coding environment, runtime,
            terminal, deployment workflow, and a place to keep building after
            the first version works.
          </p>
          <p>
            Lovable is best understood as a prompt-to-product builder. It is
            optimized for turning an idea into a polished web app, SaaS MVP, or
            prototype with as little traditional coding friction as possible.
          </p>
          <p>
            Choose Replit if you want to code and deploy in the browser. Choose
            Lovable if you want the fastest path to a product-looking MVP.
          </p>
        </div>

        <ArticleCta tool="Lovable" href={toolLinks.lovable} placement="top" />

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
              <span className="font-medium">Best coding workspace:</span>{" "}
              Replit
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best SaaS MVP builder:</span>{" "}
              Lovable
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Replit?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Replit is a cloud development platform where you can code, run,
              collaborate, use AI agents, and deploy apps from the browser.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It started as a browser-based coding environment and has grown
              into an AI-assisted software creation platform for prototypes,
              web apps, scripts, bots, APIs, and deployable projects.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Lovable?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Lovable is an AI app builder for creating full-stack web apps
              from natural language prompts. It is especially popular for SaaS
              prototypes, dashboards, client portals, startup MVPs, and product
              demos.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              The main appeal is speed. You describe the app, iterate through
              chat, and get a product-like result quickly.
            </p>
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
          <h2 className="text-2xl font-semibold">Where Lovable Wins</h2>
          <div className="mt-5 grid gap-4">
            {lovableWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Lovable</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Replit vs Lovable for Browser-Based Coding
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Replit wins clearly for browser-based coding. It gives you a cloud
            workspace where you can edit files, run code, inspect errors,
            collaborate, use a terminal, and deploy without setting up a local
            machine.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Lovable includes code access and editing workflows, but it is not
            primarily trying to be a full browser IDE. It is trying to turn
            ideas into working web apps quickly.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Replit vs Lovable for Prototypes
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Both are strong for prototypes. Replit is better when the prototype
            is technical, unusual, multi-language, API-heavy, or something you
            want to keep coding manually.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Lovable is better when the prototype needs to look like a real
            product quickly. If the goal is a polished demo for users,
            investors, clients, or internal stakeholders, Lovable usually gets
            there faster.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Replit vs Lovable for SaaS MVPs
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Lovable is the stronger first choice for common SaaS MVPs: landing
            page, auth, dashboard, database-backed CRUD, onboarding, admin
            areas, and product flows.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Replit becomes more attractive when the SaaS idea requires custom
            backend logic, scripts, unusual integrations, manual code control,
            or a developer who wants to keep evolving the project inside the
            same environment.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Replit vs Lovable for Beginners
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Lovable is friendlier if the beginner wants an app outcome without
            learning much code. The interface is closer to a product builder
            than a programming environment.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Replit is friendlier if the beginner wants to learn how software
            works. It exposes enough of the development process to build skill
            over time instead of only producing a demo.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Replit pricing usually depends on whether you need more agent
            usage, compute, deployments, private work, team features, or
            pay-as-you-go capacity.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Lovable pricing usually depends on message or credit usage, app
            needs, publishing, team collaboration, Lovable Cloud, and how much
            AI generation you need while iterating.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Check both official pricing pages before committing. These tools
            are priced around AI usage, and a weekend prototype can become a
            recurring development workflow quickly.
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

        <ArticleCta tool="Lovable" href={toolLinks.lovable} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Replit is the better choice for browser-based coding, technical
            learning, custom projects, multi-language experiments, and builders
            who want a real development workspace with deployment built in.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Lovable is the better choice for polished prototypes, SaaS MVPs,
            non-technical founders, product demos, and beginner-friendly builds
            where the app outcome matters more than the coding environment.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Replit Rating:</span> 8.5/10. Best
              for browser coding and deployable technical projects.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Lovable Rating:</span> 9/10. Best
              for fast SaaS MVPs and polished product prototypes.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Replit if you want a browser coding workspace with an AI
            agent. Choose Lovable if you want a polished app prototype with
            minimal coding friction.
          </p>
        </section>

        <ArticleCta
          tool="Lovable"
          href={toolLinks.lovable}
          placement="bottom"
        />

        <GiscusComments />
      </article>
    </main>
  )
}
