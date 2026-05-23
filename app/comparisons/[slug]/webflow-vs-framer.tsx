import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

const verdictRows = [
  ["Ease of Use", "Framer"],
  ["Design Flexibility", "Tie"],
  ["CMS Depth", "Webflow"],
  ["Marketing Sites", "Framer"],
  ["Complex Websites", "Webflow"],
  ["Animations", "Framer"],
  ["Client Handoff", "Webflow"],
  ["SEO Control", "Webflow"],
  ["Speed to Launch", "Framer"],
  ["Overall Recommendation", "Webflow"],
]

const webflowWins = [
  {
    title: "More Mature CMS",
    body: "Webflow is stronger when a site depends on structured content, multiple collections, filtering, templates, editorial workflows, and long-term content operations.",
  },
  {
    title: "Better for Complex Websites",
    body: "For larger marketing sites, content hubs, agency projects, enterprise pages, and websites that need more governance, Webflow usually scales better.",
  },
  {
    title: "More Established Client Workflow",
    body: "Webflow has a deeper ecosystem of agencies, templates, freelancers, integrations, and client handoff patterns. That matters when a website needs to be maintained for years.",
  },
  {
    title: "Stronger SEO and Site Operations",
    body: "Both tools can support SEO, but Webflow gives teams more mature controls for structured websites, redirects, metadata, CMS-driven pages, and operational maintenance.",
  },
]

const framerWins = [
  {
    title: "Faster Visual Building",
    body: "Framer feels faster for designers who want to move from canvas to published website with minimal setup. The workflow is especially strong for polished landing pages.",
  },
  {
    title: "Better for Motion and Interaction",
    body: "Framer's design-first model makes animation, transitions, effects, and interactive sections feel more natural than traditional website-building workflows.",
  },
  {
    title: "Lower Learning Curve",
    body: "For designers coming from tools like Figma, Framer often feels more immediately approachable. You can design, iterate, and publish quickly.",
  },
  {
    title: "Great for Product Marketing",
    body: "Framer is a strong fit for startup landing pages, waitlists, product launches, portfolio sites, and high-polish marketing pages that need to ship quickly.",
  },
]

const useCases = [
  {
    title: "Choose Webflow if",
    items: [
      "You need a robust CMS",
      "The website will have many pages or content types",
      "SEO and site operations matter deeply",
      "You are building for clients or internal marketing teams",
      "You need a mature ecosystem and long-term maintainability",
    ],
  },
  {
    title: "Choose Framer if",
    items: [
      "You want to launch a polished landing page quickly",
      "You care about visual design and motion",
      "You are a designer who wants a familiar canvas",
      "The site is relatively simple",
      "You prioritize speed over deep content infrastructure",
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

export function WebflowVsFramerComparison() {
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
          Webflow vs Framer (2026): Which Website Builder Should Designers Use?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Webflow and Framer are two of the strongest website builders for
            designers, founders, agencies, and product marketers.
          </p>
          <p>
            Both can create polished, responsive websites without traditional
            engineering work. Both are far more flexible than old-school website
            builders. And both continue to add AI, CMS, localization, and
            collaboration features.
          </p>
          <p>
            But they are not interchangeable. Webflow is the better platform
            for structured websites and content operations. Framer is the
            better platform for fast, visually polished marketing pages.
          </p>
          <p>
            If I were building a serious content-heavy website, I would choose
            Webflow. If I were launching a startup landing page this week, I
            would probably choose Framer.
          </p>
        </div>

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
              <span className="font-medium">Best for complex sites:</span>{" "}
              Webflow
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for fast launches:</span>{" "}
              Framer
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Webflow?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Webflow is a visual website platform for designing, building,
              hosting, and managing responsive websites. It is especially
              strong for CMS-driven sites, marketing teams, agencies, and
              companies that need structured content and long-term maintenance.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Webflow feels closer to a professional website production system
              than a simple landing page builder.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Framer?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Framer is a design-first website builder focused on speed, visual
              polish, interaction, and publishing. It is especially strong for
              landing pages, startup sites, portfolios, product launches, and
              designer-led marketing pages.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Framer feels closer to turning a design canvas into a live website
              with very little friction.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Webflow Wins</h2>
          <div className="mt-5 grid gap-4">
            {webflowWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Webflow</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Framer Wins</h2>
          <div className="mt-5 grid gap-4">
            {framerWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Framer</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Webflow vs Framer for Designers
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Designers often enjoy Framer because it feels closer to modern
            interface design tools. It is fast, visual, and satisfying when the
            goal is a beautiful page with motion and strong presentation.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Webflow asks for more structure, but that structure becomes useful
            as projects grow. If the site needs a CMS, more pages, more
            stakeholders, or repeatable content patterns, Webflow usually pays
            off.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Webflow vs Framer for Startups
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            For early startup marketing, Framer is extremely compelling. A
            founder or designer can launch a polished landing page, waitlist, or
            product announcement quickly without getting buried in setup.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            As the company grows into a larger marketing site with a blog,
            customer stories, resources, localization, SEO workflows, and
            multiple collaborators, Webflow becomes more attractive.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Pricing for both platforms changes often, and Webflow announced
            updated pricing and simplified plans for May 2026. Webflow pricing
            usually depends on site plans, workspace needs, CMS usage,
            ecommerce, localization, and team requirements.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Framer pricing is usually easier to reason about for simple sites,
            but costs can increase as you add collaborators, localization,
            larger site needs, or higher-traffic requirements.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Check the official pricing pages before committing, especially if
            you are building client sites or a production marketing site.
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

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Webflow is the better long-term website platform for complex sites,
            content-heavy marketing, CMS workflows, SEO operations, and client
            projects that need durable structure.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Framer is the better choice for designers, founders, and marketers
            who want to launch beautiful landing pages and product sites
            quickly.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Webflow Rating:</span> 9/10. Best
              for serious websites and structured content.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Framer Rating:</span> 8.5/10. Best
              for fast, polished marketing pages.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Webflow is better when the website is a system. Framer is better
            when the website is a launch asset. Choose Webflow for scale and
            structure. Choose Framer for speed and polish.
          </p>
        </section>
      </article>
    </main>
  )
}
