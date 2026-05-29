import Link from "next/link"
import { ArrowLeft, Check, X } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const useCases = [
  "Market research",
  "Competitive analysis",
  "Learning new subjects",
  "Industry trends",
  "Product research",
  "Fact verification",
  "Technical investigations",
  "Academic exploration",
]

const strengths = [
  {
    title: "Fast Research",
    body: "Perplexity can quickly aggregate information, summarize findings, surface relevant sources, and identify key themes.",
  },
  {
    title: "Citations and Sources",
    body: "Perplexity cites sources directly, making it easier to verify information, explore original references, validate claims, and conduct deeper research.",
  },
  {
    title: "Current Information",
    body: "Its access to live web content makes it useful for news, product launches, industry developments, market intelligence, and technology trends.",
  },
  {
    title: "Research Exploration",
    body: "Perplexity helps users move from question to answer to follow-up questions to deeper understanding.",
  },
]

const pros = [
  "Excellent research experience",
  "Source citations included",
  "Access to current information",
  "Fast answers",
  "Strong competitive and market research capabilities",
  "Easy to use",
]

const cons = [
  "Weaker reasoning than Claude or ChatGPT",
  "Writing quality is good but not exceptional",
  "Dependent on source quality",
  "Less useful for creative and strategic work",
]

export function PerplexityReview() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Button asChild variant="ghost" className="mb-10 px-0">
          <Link href="/reviews">
            <ArrowLeft />
            Reviews
          </Link>
        </Button>

        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Review
        </p>
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
          Perplexity Review (2026): The Best AI Search Engine for Research and
          Discovery
        </h1>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full border px-3 py-1 text-sm text-muted-foreground">
            Rating: 9/10
          </span>
          <span className="rounded-full border px-3 py-1 text-sm text-muted-foreground">
            Best for research and discovery
          </span>
        </div>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            If ChatGPT is my general-purpose AI assistant and Claude is my
            thinking partner, Perplexity is my starting point for research.
          </p>
          <p>
            When I need to understand a topic quickly, verify information,
            compare sources, or explore a new domain, Perplexity is often the
            first tool I open.
          </p>
          <p>
            It combines the speed of a search engine with the conversational
            experience of an AI assistant, making it one of the most useful
            research tools available today.
          </p>
        </div>

        <ArticleCta tool="Perplexity" href={toolLinks.perplexity} placement="top" />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What is Perplexity?</h2>
          <div className="mt-4 space-y-4 leading-7 text-muted-foreground">
            <p>
              Perplexity is an AI-powered answer engine that combines web
              search with large language models. Instead of returning a list of
              links like a traditional search engine, it provides direct
              answers, source citations, summaries, follow-up questions, and
              multi-source analysis.
            </p>
            <p>
              The result feels less like searching the web and more like having
              a research assistant who reads the internet on your behalf.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What I Use Perplexity For</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <div key={useCase} className="rounded-lg border bg-card p-4">
                <p className="text-sm font-medium">{useCase}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border bg-secondary/40 p-5">
            <p className="text-sm font-medium text-muted-foreground">
              Example prompts
            </p>
            <div className="mt-3 space-y-3 leading-7">
              <p>What are the leading AI coding assistants today?</p>
              <p>
                How does Medicare remote patient monitoring reimbursement work?
              </p>
            </div>
          </div>
          <p className="mt-5 leading-7 text-muted-foreground">
            Instead of manually opening ten browser tabs, Perplexity often
            delivers a concise summary with citations in seconds.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What Perplexity Does Well</h2>
          <div className="mt-5 grid gap-4">
            {strengths.map((strength) => (
              <div key={strength.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{strength.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {strength.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Where Perplexity Falls Short
          </h2>
          <div className="mt-4 space-y-4 leading-7 text-muted-foreground">
            <p>
              Perplexity is optimized for finding information. It is less
              impressive when solving complex reasoning problems or evaluating
              nuanced tradeoffs. For strategic discussions, product thinking,
              and deep analysis, I generally prefer Claude or ChatGPT.
            </p>
            <p>
              The generated writing is usually clear and informative, but it is
              not typically as polished as Claude&apos;s long-form output. For
              content creation, I often use Perplexity to gather information and
              Claude or ChatGPT to refine the final narrative.
            </p>
            <p>
              Like any search-driven system, answer quality depends on source
              quality. Users should still verify important claims and review
              citations rather than blindly accepting every summary.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Perplexity vs Google</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Traditional search often requires opening multiple tabs, reading
            multiple articles, comparing sources, and synthesizing findings
            manually. Perplexity performs much of this work automatically.
            Google remains useful when I know exactly what I&apos;m looking for.
            Perplexity is often better when I&apos;m trying to understand
            something quickly.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Perplexity vs ChatGPT</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">I use Perplexity for</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Research, discovery, fact finding, source gathering,
                competitive analysis, and current events.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">I use ChatGPT for</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Analysis, strategy, writing, coding, problem solving, and
                decision support.
              </p>
            </div>
          </div>
          <p className="mt-5 leading-7 text-muted-foreground">
            A common workflow is simple: Perplexity finds information. ChatGPT
            interprets it.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Perplexity vs Claude</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Claude is significantly stronger at writing, reasoning, strategic
            thinking, and document analysis. Perplexity is significantly
            stronger at web research, source discovery, current information, and
            citation-based exploration. They solve different problems.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Who Should Use Perplexity?</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Perplexity is especially valuable for product managers, analysts,
            researchers, journalists, consultants, founders, students,
            investors, and knowledge workers. Anyone who spends significant time
            searching for information will likely benefit from adding Perplexity
            to their workflow.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Perplexity offers a free version that is surprisingly capable for
            casual research. Power users benefit from paid plans that provide
            expanded access to advanced models and research features. Visit the
            Perplexity website for current pricing and plan details.
          </p>
        </section>



        <ArticleCta tool="Perplexity" href={toolLinks.perplexity} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Perplexity has become one of the most valuable tools in my AI stack.
            It doesn&apos;t replace ChatGPT or Claude. Instead, it solves a
            different problem: finding trustworthy information quickly.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            For research-heavy work, Perplexity consistently reduces the time
            required to gather information, verify sources, and build
            understanding. If your job involves learning, investigating,
            comparing, or analyzing information, Perplexity is one of the
            easiest AI tools to recommend.
          </p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-xl font-semibold">Pros</h2>
            <div className="mt-4 grid gap-3">
              {pros.map((pro) => (
                <p key={pro} className="flex gap-2 text-sm leading-6">
                  <Check className="mt-0.5 size-4 shrink-0" />
                  {pro}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-xl font-semibold">Cons</h2>
            <div className="mt-4 grid gap-3">
              {cons.map((con) => (
                <p key={con} className="flex gap-2 text-sm leading-6">
                  <X className="mt-0.5 size-4 shrink-0" />
                  {con}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Perplexity is the best AI-powered research tool I&apos;ve used. If
            ChatGPT is your assistant and Claude is your advisor, Perplexity is
            your research analyst, quickly finding answers, surfacing evidence,
            and helping you understand unfamiliar topics with far less effort
            than traditional search.
          </p>
        </section>


        <ArticleCta tool="Perplexity" href={toolLinks.perplexity} placement="bottom" />

        <GiscusComments />
      </article>
    </main>
  )
}
