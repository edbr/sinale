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
  "Researchers who need fast answers with sources they can inspect",
  "Product teams comparing markets, competitors, policies, and technical choices",
  "Founders and operators who need quick briefings before decisions or meetings",
  "Students, analysts, and writers who want web, academic, social, filing, and file-based research in one place",
  "Teams that want collaborative Spaces for research projects and shared knowledge hubs",
]

const notFor = [
  "People who want a pure writing assistant with minimal citations or search behavior",
  "Teams that need a fully controlled internal knowledge base without web search",
  "Workflows where every source must be manually selected and verified before generation",
  "Users who expect generated answers to replace primary-source review",
  "Organizations that need API usage bundled into Enterprise seats",
]

const features = [
  {
    title: "Answer engine",
    body: "Perplexity combines search and model-generated answers. It is useful when you want a concise answer, links to sources, and a path to keep asking follow-up questions.",
  },
  {
    title: "Pro searches and model choice",
    body: "Paid plans add more advanced searches, access to recent AI models, and better support for complex questions, reports, documents, and app-style outputs.",
  },
  {
    title: "Deep Research",
    body: "Perplexity includes deeper research modes for longer, more involved reports. This is useful for market scans, policy questions, technical research, and competitive analysis.",
  },
  {
    title: "Spaces",
    body: "Spaces organize searches and Threads around a project or topic. They support custom instructions, collaboration, file uploads, source selection, and shared research workflows.",
  },
  {
    title: "Sources and files",
    body: "Perplexity can draw from web search, academic papers, social Threads, SEC filings, and uploaded files. Enterprise plans add organization file repositories and app connectors.",
  },
  {
    title: "Comet",
    body: "Comet is Perplexity's browser and assistant surface. Paid and enterprise plans include Comet-related capabilities, with higher tiers adding more advanced assistant and agent usage.",
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

export function PerplexityToolPage({
  relatedItems,
}: {
  relatedItems: CardItem[]
}) {
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
        <ToolLogo name="Perplexity" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
          Perplexity
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Perplexity is an AI answer engine for web research, source discovery,
          academic and financial lookup, file-based analysis, collaborative
          Spaces, and fast decision briefings.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Perplexity is strongest when the question depends on current
            information or source discovery. Instead of starting with a blank
            chat window, you ask a question and get a concise answer with links
            you can inspect, follow, and challenge.
          </p>
          <p>
            That makes it useful for early research: checking a market,
            comparing vendors, finding source documents, scanning recent news,
            understanding a policy, reading SEC filings, or building a first
            version of a research memo.
          </p>
          <p>
            The tradeoff is that Perplexity is not a substitute for judgment.
            The answer can be useful quickly, but high-stakes work still needs
            source review, cross-checking, and clear notes about what was
            verified versus inferred.
          </p>
        </div>

        <ArticleCta
          tool="Perplexity"
          href={toolLinks.perplexity}
          placement="top"
        />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Perplexity is one of the best AI tools for research that starts on
            the open web. It is fast, source-forward, and easy to use for
            comparing options, getting briefed, and finding documents worth
            reading more closely.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Perplexity if you want answers with citations and a workflow
            built around search. Skip it if your main need is long-form drafting,
            internal-only knowledge work, visual creation, or deep document
            editing.
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
          <h2 className="text-2xl font-semibold">What Perplexity Does</h2>
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
          <h2 className="text-2xl font-semibold">Perplexity for Product Work</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Product teams can use Perplexity to get oriented quickly before
            deeper research. It is useful for competitor scans, pricing
            research, market maps, platform documentation, vendor comparisons,
            policy checks, and first-pass customer or industry context.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The best workflow is to treat Perplexity as a source discovery and
            briefing layer. Save the sources, open the important links, and
            turn the answer into a research note only after checking the
            underlying evidence.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Perplexity Spaces</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Spaces make Perplexity more project-oriented. You can group Threads
            by topic, set custom instructions, invite collaborators, add files,
            and choose sources. For teams, Spaces can become lightweight
            research rooms for a market, customer segment, product decision, or
            ongoing topic.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Enterprise Pro adds organization file repositories and file app
            connectors such as Google Drive, Dropbox, Box, OneDrive, and more,
            so the research context can include company documents as well as
            web sources.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Perplexity offers a free plan and a Pro plan listed at $20 per
            month or $200 per year. Pro includes advanced model access, more
            Pro searches, Deep Research usage, asset generation, video
            generation, private Spaces collaboration, and Comet-related
            capabilities.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Enterprise Pro is listed at $40 per seat per month or $400 per seat
            per year, with a two-seat minimum. Enterprise Max is listed at $325
            per seat per month or $3,250 per seat per year for higher usage,
            advanced models, deeper research at scale, larger datasets and
            files, audit logs, and configurable data retention.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Perplexity&apos;s Enterprise FAQ notes that API usage is not
            included with Enterprise Pro or Enterprise Max, so teams building
            against the API should budget separately.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Perplexity if your team often needs to answer questions that
            depend on current sources. It is especially useful when the first
            step is figuring out what to read, what changed, which sources
            matter, and what follow-up questions to ask.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Treat it as a research accelerator, not the final research artifact.
            Perplexity can get you to useful sources quickly, but the quality of
            the final decision still depends on verification, context, and
            careful synthesis.
          </p>
        </section>

        <ArticleCta
          tool="Perplexity"
          href={toolLinks.perplexity}
          placement="bottom"
        />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
