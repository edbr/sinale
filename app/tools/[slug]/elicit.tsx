import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { RelatedContent } from "@/components/article/related-content"
import { ToolLogo } from "@/components/site/tool-logo"
import { Button } from "@/components/ui/button"
import type { CardItem } from "@/lib/site-content"
import { toolLinks } from "@/lib/tool-links"

const bestFor = [
  "Researchers doing literature reviews, evidence maps, or systematic reviews",
  "Teams that need to find papers, screen results, and extract structured data",
  "Medical affairs, HEOR, policy, academic, and scientific research workflows",
  "Students and analysts who need fast paper summaries with inspectable sources",
  "Organizations that want repeatable research workflows instead of one-off chats",
]

const notFor = [
  "General web research where current news or broad internet sources matter most",
  "Teams that only need a casual chatbot or writing assistant",
  "Researchers who cannot review source papers and extraction evidence manually",
  "Workflows centered on non-academic documents, sales data, or internal knowledge",
  "Users who want a citation manager or manuscript editor as the primary tool",
]

const features = [
  {
    title: "Paper search",
    body: "Elicit searches across a large academic paper corpus and is tuned for research questions rather than keyword-only lookup. It is strongest when you need relevant studies, not generic web pages.",
  },
  {
    title: "Paper summaries",
    body: "Elicit can summarize papers and help you compare findings, methods, populations, interventions, and outcomes without starting from an empty reading queue.",
  },
  {
    title: "Data extraction",
    body: "Extraction tables let you pull structured answers from papers into columns. Higher tiers increase extraction volume and the number of columns you can add at once.",
  },
  {
    title: "Systematic review workflow",
    body: "The Pro tier adds dedicated workflows for systematic reviews, including guided steps for screening, paper coding, and full-text data extraction.",
  },
  {
    title: "Research alerts",
    body: "Paid plans include personalized research alerts so teams can keep watch on a topic instead of rerunning the same discovery process manually.",
  },
  {
    title: "API access",
    body: "Elicit offers an API for programmatic paper search and automated research report generation, with rate limits tied to subscription level.",
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

export function ElicitToolPage({ relatedItems }: { relatedItems: CardItem[] }) {
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
        <ToolLogo name="Elicit" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
          Elicit
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Elicit is an AI research assistant for finding academic papers,
          summarizing evidence, extracting structured data, building literature
          reviews, and running systematic review workflows.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Elicit is built for scientific and academic research, not general
            chat. The product is useful when the work starts with a research
            question and quickly turns into a long list of papers, methods,
            findings, inclusion criteria, and evidence tables.
          </p>
          <p>
            The practical advantage is structure. Instead of asking an AI model
            for a broad summary, you can search for studies, compare papers,
            add extraction columns, inspect sources, and turn a messy reading
            task into a more reviewable workflow.
          </p>
          <p>
            The tradeoff is that Elicit still needs expert review. It can speed
            up discovery and extraction, but researchers should check the
            underlying papers, validate extracted answers, and document the
            review process when the work is high stakes.
          </p>
        </div>

        <ArticleCta tool="Elicit" href={toolLinks.elicit} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Elicit is one of the most focused AI tools for literature reviews.
            It is especially useful when you need to move from paper discovery
            to structured evidence extraction, not just ask a search engine for
            a quick answer.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Elicit if your workflow depends on academic papers,
            systematic review discipline, and traceable extraction. Skip it if
            you mainly need live web search, everyday writing, or a broad
            general-purpose assistant.
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
          <h2 className="text-2xl font-semibold">What Elicit Does</h2>
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
          <h2 className="text-2xl font-semibold">Elicit for Literature Reviews</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Elicit is most useful when a question requires a defensible body of
            evidence. A researcher can start with a question, search for
            relevant papers, screen results, extract details into a table, and
            use those rows as the basis for synthesis.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            That workflow is different from a generic AI summary. Elicit is not
            just producing prose; it is helping build the intermediate research
            objects that make review work auditable: paper lists, coding
            columns, extracted values, explanations, and source references.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Elicit for Teams</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Teams should evaluate Elicit around repeatable research operations:
            review protocols, shared extraction schemas, quality checks, and
            handoff from discovery into decisions. It can be a strong fit for
            medical affairs, policy research, clinical trial design, HEOR, and
            academic teams with a steady stream of evidence questions.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Team plans add pooled extraction usage, live editing for Notebooks
            and Systematic Reviews, and admin controls for usage tracking and
            seat management. Enterprise plans add custom limits, onboarding,
            data configuration, and custom workflow development.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Elicit lists a free Basic plan for casual exploration, Plus at $10
            per month when billed annually, Pro at $42 per month when billed
            annually, Team at $65 per user per month when billed annually, and
            Enterprise with custom pricing.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The most important limits are extraction volume, papers you can
            summarize or chat with at once, export options, systematic review
            workflows, research alerts, collaboration, admin controls, and
            custom enterprise configuration.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Elicit when your research process needs more than a cited
            answer. It is strongest as a workflow tool for finding papers,
            structuring evidence, extracting data, and keeping the path from
            question to conclusion easier to inspect.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Treat it as a research accelerator with guardrails. Let Elicit
            reduce the mechanical work, then use human judgment to verify
            papers, resolve ambiguity, and decide what the evidence actually
            supports.
          </p>
        </section>

        <ArticleCta tool="Elicit" href={toolLinks.elicit} placement="bottom" />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
