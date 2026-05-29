import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Visual Design Control", "Framer"],
  ["Ease for Beginners", "Squarespace"],
  ["Landing Pages", "Framer"],
  ["Small Business Sites", "Squarespace"],
  ["Animations and Interactions", "Framer"],
  ["Ecommerce", "Squarespace"],
  ["Templates", "Squarespace"],
  ["Startup Marketing", "Framer"],
  ["Low-Maintenance Websites", "Squarespace"],
  ["Overall Recommendation", "Framer for polish, Squarespace for simplicity"],
]

const framerWins = [
  {
    title: "Better for Modern Landing Pages",
    body: "Framer is stronger when the goal is a polished, high-conversion landing page with custom sections, motion, visual personality, and a fast design-to-publish workflow.",
  },
  {
    title: "More Design Freedom",
    body: "Framer feels closer to a design canvas than a traditional website builder. Designers can control layout, animation, breakpoints, components, and presentation in a way that feels more flexible than Squarespace.",
  },
  {
    title: "Better for Startups and Product Marketing",
    body: "For startup sites, waitlists, SaaS launches, feature pages, changelog-style marketing, and investor-facing product pages, Framer usually feels faster and sharper.",
  },
  {
    title: "Stronger Motion and Interaction",
    body: "Framer has a natural advantage for animated sections, transitions, interactive hero areas, scroll effects, and design-forward pages that need to feel alive.",
  },
]

const squarespaceWins = [
  {
    title: "Better for Small Businesses",
    body: "Squarespace is the safer default for restaurants, local services, artists, coaches, consultants, photographers, and small businesses that need a complete website without managing many moving parts.",
  },
  {
    title: "More All-in-One",
    body: "Squarespace bundles website building with domains, templates, ecommerce, scheduling, payments, email campaigns, analytics, memberships, and business features in one mature platform.",
  },
  {
    title: "Easier for True Beginners",
    body: "Framer is approachable for designers, but Squarespace is usually easier for non-designers who want to pick a template, fill in content, connect business tools, and launch.",
  },
  {
    title: "Better for Ecommerce and Bookings",
    body: "Squarespace has stronger native support for selling products or services, managing appointments, taking payments, handling product pages, and running a basic online business.",
  },
]

const useCases = [
  {
    title: "Choose Framer if",
    items: [
      "You want a polished startup or product marketing site",
      "A designer will own the site",
      "Motion, interaction, and visual detail matter",
      "The site is a landing page, portfolio, or focused marketing site",
      "You want speed without giving up design control",
    ],
  },
  {
    title: "Choose Squarespace if",
    items: [
      "You want a reliable all-in-one website builder",
      "You need ecommerce, bookings, or service business features",
      "A non-designer will maintain the site",
      "Templates and low maintenance matter more than custom motion",
      "You want domains, email, payments, and business tools together",
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

export function FramerVsSquarespaceComparison() {
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
          Framer vs Squarespace (2026): Which Site Builder Is Better?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Framer and Squarespace can both help you launch a professional
            website without traditional development, but they are built for
            different buyers.
          </p>
          <p>
            Framer is the better choice for designers, startups, founders, and
            marketing teams that want a polished, modern site with stronger
            visual control, motion, and launch speed.
          </p>
          <p>
            Squarespace is the better choice for small businesses, creators,
            service providers, and ecommerce operators who want an all-in-one
            website platform that is easy to maintain.
          </p>
          <p>
            The simple rule: choose Framer when the website is a designed
            marketing asset. Choose Squarespace when the website is a business
            operating system.
          </p>
        </div>

        <ArticleCta tool="Framer" href={toolLinks.framer} placement="top" />

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
              <span className="font-medium">Best for modern launches:</span>{" "}
              Framer
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for small business:</span>{" "}
              Squarespace
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Framer?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Framer is a design-first website builder for creating responsive
              websites, landing pages, portfolios, startup sites, blogs, and
              CMS-backed marketing pages with strong visual control.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is especially useful for designers who want to publish
              polished sites quickly without losing control over layout, motion,
              interaction, and visual detail.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Squarespace?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Squarespace is an all-in-one website builder for small business
              sites, portfolios, ecommerce stores, service businesses, blogs,
              bookings, memberships, domains, and email marketing.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It is especially useful when the website needs to be attractive,
              reliable, and easy for a non-technical owner to keep updated.
            </p>
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
          <h2 className="text-2xl font-semibold">Where Squarespace Wins</h2>
          <div className="mt-5 grid gap-4">
            {squarespaceWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Squarespace</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Framer vs Squarespace for Designers
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Designers will usually prefer Framer. It feels closer to a modern
            design canvas, gives more control over responsive layout and motion,
            and makes it easier to create a site that feels custom.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Squarespace is easier for non-designers, but designers may feel more
            constrained by the template and section system. That tradeoff is
            useful when a client needs to maintain the site themselves.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Framer vs Squarespace for Small Businesses
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Squarespace is usually better for small businesses because it
            includes more of the operational website stack: templates, domains,
            ecommerce, appointment scheduling, payments, email campaigns,
            member areas, and basic marketing tools.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Framer can absolutely work for small business sites, especially if
            the site is mostly brochure content. But once products, bookings,
            services, memberships, or owner maintenance become important,
            Squarespace becomes easier to recommend.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Framer vs Squarespace for Startups
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Framer is stronger for startup marketing. It is fast, polished, and
            good for launch pages, waitlists, product tours, feature pages,
            portfolios, and sites where visual quality helps explain the
            product.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Squarespace is better for startups that need commerce, scheduling,
            services, or a simple long-lived website that a founder or operator
            can maintain without a designer.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Framer vs Squarespace for Ecommerce
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Squarespace wins for ecommerce. It has more native selling features,
            product management, payments, service sales, appointment booking,
            and small-business commerce workflows.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Framer is better for marketing a product than running a store. If
            you need a beautiful product landing page, Framer is strong. If you
            need to manage a real catalog and checkout workflow, start with
            Squarespace or another commerce-first platform.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Framer pricing is usually easiest to justify for focused marketing
            sites where design quality and speed matter. Costs can rise with
            workspaces, collaborators, CMS scale, localization, and higher site
            needs.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Squarespace pricing is usually easier for small businesses to
            evaluate because plans bundle more operational features. The right
            plan depends on ecommerce, appointment scheduling, email campaigns,
            memberships, and advanced business needs.
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

        <ArticleCta tool="Framer" href={toolLinks.framer} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Framer is the better choice for designers, startups, portfolios, and
            product marketers who want a visually polished site with strong
            motion and fast launch speed.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Squarespace is the better choice for small businesses, service
            providers, creators, and ecommerce operators who want an all-in-one
            website that is easy to launch and maintain.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Framer Rating:</span> 8.8/10. Best
              for polished marketing sites and design-led launches.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Squarespace Rating:</span> 8.6/10.
              Best for small business sites and all-in-one simplicity.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Framer when design polish and launch speed matter most.
            Choose Squarespace when the site needs simple business features and
            long-term owner-friendly maintenance.
          </p>
        </section>

        <ArticleCta tool="Framer" href={toolLinks.framer} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
