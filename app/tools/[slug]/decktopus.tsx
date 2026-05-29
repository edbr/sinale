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
  "Sales teams creating pitch decks and client proposals",
  "Founders preparing investor updates and startup presentations",
  "Marketing teams that need on-brand decks quickly",
  "Consultants and agencies creating repeatable presentation assets",
  "Teams that want forms, analytics, links, and lightweight microsites",
]

const notFor = [
  "Design teams that need pixel-perfect custom slide systems",
  "Analysts building complex charts and financial models",
  "Teams locked into PowerPoint-native workflows",
  "Executive teams that need heavily bespoke board decks",
  "Presenters who want full manual control over every slide detail",
]

const features = [
  {
    title: "AI Presentation Generation",
    body: "Decktopus turns prompts, pasted text, or imported material into structured slide decks. It is useful when you need a clean first draft quickly instead of starting from a blank presentation.",
  },
  {
    title: "Branding and Customization",
    body: "Decktopus can apply colors, fonts, logos, and brand templates so generated decks stay closer to a company style. Enterprise options go deeper with custom slide layouts and corporate-branded systems.",
  },
  {
    title: "Drag-and-Drop Editor",
    body: "After AI creates the deck, teams can edit slides in a visual editor, regenerate slides, switch styles, adjust layouts, and refine content without wrestling with low-level formatting.",
  },
  {
    title: "PDF Import",
    body: "Decktopus supports turning static PDFs and existing material into more dynamic presentations, which is useful when a report, brief, or proposal needs to become a presentable deck.",
  },
  {
    title: "Presenter Support",
    body: "Decktopus includes features for Q&A, storytelling structure, hooks, speaker notes, scripts, voice recording, and interactive delivery, which makes it more than a simple slide generator.",
  },
  {
    title: "Business Workflows",
    body: "Forms, custom domains, analytics, webhooks, Zapier workflows, organization management, and shareable links make Decktopus useful for proposals, lead generation, and customer-facing decks.",
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

export function DecktopusToolPage({ relatedItems }: { relatedItems: CardItem[] }) {
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
        <ToolLogo name="Decktopus" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
          Decktopus
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Decktopus is listed in Sinale&apos;s AI presentation tools directory
          for deck generation, visual storytelling, slides, and executive
          presentations.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Decktopus is an AI presentation assistant for creating branded
            decks, proposals, sales presentations, investor updates, executive
            summaries, and interactive business documents from prompts or
            existing content.
          </p>
          <p>
            Its strongest use case is speed. You give Decktopus a topic,
            outline, document, or prompt, and it helps create a structured deck
            with design, copy, images, speaker support, and shareable delivery
            features.
          </p>
          <p>
            The tradeoff is depth. Decktopus is excellent for first drafts,
            repeatable sales decks, and branded business presentations, but it
            is not a replacement for a senior designer, analyst, or executive
            storyteller on high-stakes custom decks.
          </p>
        </div>

        <ArticleCta tool="Decktopus" href={toolLinks.decktopus} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Decktopus is a strong AI presentation tool for teams that need good
            business decks quickly. It is especially useful for sales,
            marketing, founders, agencies, consultants, webinars, and customer
            success teams that create repeatable presentations.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose it if your bottleneck is turning ideas or documents into
            polished, branded slides. Skip it if your bottleneck is deep
            financial modeling, custom visual systems, board-level narrative
            craft, or PowerPoint-native enterprise workflows.
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
          <h2 className="text-2xl font-semibold">What Decktopus Does</h2>
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
            Decktopus for Deck Generation
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Decktopus is best when you need a deck quickly and already know the
            rough direction. It can generate a structure, create slides, suggest
            copy, pull in visuals, and give you a designed starting point that
            is easier to edit than a blank file.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            That makes it useful for pitch decks, sales decks, product updates,
            service proposals, webinars, training decks, customer success
            materials, and internal updates where speed matters.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Decktopus for Visual Storytelling
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Decktopus does more than place text on slides. It can help shape
            hooks, story flow, Q&A prompts, speaker notes, images, and visual
            layouts. That is helpful for non-designers who need a presentation
            that feels coherent and ready to share.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            It still needs human judgment. For executive presentations, investor
            decks, board updates, or major sales pitches, teams should revise
            the narrative, sharpen the evidence, and make sure the final deck
            reflects the real business context.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Decktopus for Teams and Brands
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Decktopus is useful for teams that create many decks and need brand
            consistency. Brand templates, custom colors, fonts, logos,
            organization management, folders, custom domains, and analytics make
            it more operational than a simple AI slide generator.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The team features are most valuable when multiple people create
            customer-facing decks. If only one person builds occasional
            presentations, a lighter AI slide tool may be enough.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Decktopus uses AI credits for AI features. The Pro plan is aimed at
            individual users and includes annual AI credits, AI presentation
            generation, AI assistance, AI image generation, and PDF export. The
            Business plan adds team-oriented features such as analytics, custom
            domain connection, webhooks, and organization management.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The key pricing question is how many decks your team creates and
            whether you need business workflows like lead forms, analytics,
            brand systems, and team management. If you only need one-off slide
            drafts, compare it with Gamma, Beautiful.ai, Canva, Tome, and
            PowerPoint Copilot before committing.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Decktopus if your team needs to create polished,
            on-brand presentations quickly from prompts, documents, or rough
            ideas. It is strongest for business decks where speed, consistency,
            and shareability matter more than full design control.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Do not use Decktopus as the final authority on strategy or story.
            Use it to produce the first strong version, then refine the message,
            proof the facts, tighten the visuals, and tailor the deck to the
            audience.
          </p>
        </section>

        <ArticleCta tool="Decktopus" href={toolLinks.decktopus} placement="bottom" />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
