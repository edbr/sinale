import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Direct Answers", "Perplexity"],
  ["Source Discovery", "Google Search"],
  ["Research Synthesis", "Perplexity"],
  ["Breadth of Index", "Google Search"],
  ["Decision Support", "Perplexity"],
  ["Finding Primary Sources", "Google Search"],
  ["Follow-Up Questions", "Perplexity"],
  ["Local and Commercial Search", "Google Search"],
  ["Citations", "Perplexity"],
  ["Overall Recommendation", "Use both"],
]

const perplexityWins = [
  {
    title: "Better Direct Research Answers",
    body: "Perplexity is designed to answer research questions with a concise synthesis and visible citations. That makes it useful when you want a starting answer, not only a list of links.",
  },
  {
    title: "Cleaner Follow-Up Workflow",
    body: "Perplexity works well when research is conversational. You can ask a question, inspect sources, ask follow-ups, narrow the scope, and keep the research thread moving.",
  },
  {
    title: "Better for Decision Summaries",
    body: "When the goal is to compare options, understand tradeoffs, summarize market context, or prepare a decision memo, Perplexity often gets you to a useful synthesis faster.",
  },
  {
    title: "More Citation-Forward Experience",
    body: "Perplexity puts sources at the center of the answer experience. That encourages source checking, which is essential when using AI for research.",
  },
]

const googleWins = [
  {
    title: "Best Source Discovery",
    body: "Google Search is still the strongest broad discovery layer for the open web. It is better when you need to find primary sources, official pages, forums, documents, images, videos, maps, businesses, or niche pages.",
  },
  {
    title: "Broader Search Surface",
    body: "Google spans web results, news, images, videos, shopping, local results, maps, academic-style queries, and commercial discovery in a way Perplexity does not fully replace.",
  },
  {
    title: "Better for Navigational Searches",
    body: "If you already know what you are looking for, Google is usually faster. Product pages, pricing pages, documentation, login pages, company names, and specific articles are still traditional search tasks.",
  },
  {
    title: "More Control Over Raw Results",
    body: "Google is better when you want to scan many sources yourself, compare snippets, use search operators, check dates, and avoid relying on one synthesized answer.",
  },
]

const useCases = [
  {
    title: "Choose Perplexity if",
    items: [
      "You want a cited answer quickly",
      "You are comparing options or researching a decision",
      "You need a concise synthesis from multiple sources",
      "You want to ask follow-up questions in one thread",
      "You are preparing summaries, briefs, or market scans",
    ],
  },
  {
    title: "Choose Google Search if",
    items: [
      "You need to find primary sources or official pages",
      "You want to scan the open web yourself",
      "You are doing local, commercial, image, video, or navigational search",
      "You need search operators or broad source discovery",
      "You want to verify what an AI answer is citing or missing",
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

export function PerplexityVsGoogleSearchComparison() {
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
          Perplexity vs Google Search (2026): Which Is Better for Research?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Perplexity and Google Search now overlap more than ever. Perplexity
            gives cited AI answers. Google Search gives traditional web results
            plus AI Overviews and AI Mode.
          </p>
          <p>
            But they are still best at different jobs. Perplexity is better
            when you want synthesis. Google Search is better when you want
            discovery.
          </p>
          <p>
            In practical research workflows, the best answer is usually not
            choosing one forever. Use Perplexity to understand the shape of a
            topic. Use Google Search to verify, broaden, and find primary
            sources.
          </p>
          <p>
            If I need a decision-ready answer, I start with Perplexity. If I
            need to inspect the web myself, I start with Google Search.
          </p>
        </div>

        <ArticleCta
          tool="Perplexity"
          href={toolLinks.perplexity}
          placement="top"
        />

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
              <span className="font-medium">Best answer engine:</span>{" "}
              Perplexity
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best source discovery:</span>{" "}
              Google Search
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Perplexity?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Perplexity is an AI answer engine that searches the web,
              synthesizes information, and provides cited answers to research
              questions.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Its core strength is turning multiple sources into a readable
              answer while keeping citations visible enough to inspect.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Google Search?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Google Search is the dominant web search engine for finding
              pages, products, images, videos, news, maps, local businesses,
              official sources, and web documents.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              In 2026, Google Search also includes generative AI features like
              AI Overviews and AI Mode, but its greatest advantage remains the
              breadth of its index and discovery surface.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Perplexity Wins</h2>
          <div className="mt-5 grid gap-4">
            {perplexityWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Perplexity</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Google Search Wins</h2>
          <div className="mt-5 grid gap-4">
            {googleWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">
                  Winner: Google Search
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Perplexity vs Google Search for Source Discovery
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Google Search is better for source discovery because it shows more
            of the web. You can scan many links, use search operators, compare
            dates, find official documentation, discover niche forums, and
            inspect sources directly.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Perplexity is better after you have a research question. It helps
            synthesize the topic and points you toward sources, but it should
            not be your only source discovery layer for high-stakes research.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Perplexity vs Google Search for Decision-Making
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Perplexity is stronger for decision support. It can compare tools,
            summarize tradeoffs, explain market categories, list pros and cons,
            and help turn research into an initial recommendation.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Google Search is still essential for verification. Before making a
            serious decision, open the cited sources, compare with official
            pages, check dates, and look for evidence the AI summary may have
            missed.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            AI Answer Engine vs Traditional Search
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            An AI answer engine is best when you want compression. It takes a
            messy set of sources and gives you a coherent answer. That is
            useful for getting oriented quickly.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Traditional search is best when you want exploration. It gives you
            raw results, competing sources, different viewpoints, and a way to
            inspect the web yourself.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The mistake is treating either one as enough. Perplexity can
            compress too early. Google can leave you drowning in tabs. Good
            research usually needs both synthesis and inspection.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Google Search is free for normal users, though the experience now
            includes ads, AI Overviews, AI Mode, and Google&apos;s broader
            search interface.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Perplexity has free and paid plans, with paid tiers typically
            offering more advanced models, higher usage, file features, and
            deeper research workflows.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            For casual research, Google plus free Perplexity may be enough. For
            heavy professional research, Perplexity Pro can be worth it if it
            reduces time spent synthesizing sources.
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

        <ArticleCta
          tool="Perplexity"
          href={toolLinks.perplexity}
          placement="mid"
        />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Perplexity is better for AI-assisted research answers, cited
            synthesis, follow-up questions, market scans, comparison research,
            and decision-ready summaries.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Google Search is better for broad source discovery, primary-source
            verification, local and commercial search, official pages,
            navigational queries, and inspecting the web yourself.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Perplexity Rating:</span> 9/10.
              Best for cited synthesis and decision research.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Google Search Rating:</span> 9/10.
              Best for source discovery and verification.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Use Perplexity to understand a topic quickly. Use Google Search to
            find and verify the sources. The best research workflow combines
            both.
          </p>
        </section>

        <ArticleCta
          tool="Perplexity"
          href={toolLinks.perplexity}
          placement="bottom"
        />

        <GiscusComments />
      </article>
    </main>
  )
}
